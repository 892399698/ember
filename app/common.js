var common={
  injectData: function(name, data, regType) {
        var regName = (regType || "default") + ":" + name;
        if (!name) return;

        currentApp.register(regName, data || {}, {
            instantiate: false
        });
        currentApp.inject("controller", name, regName);
        currentApp.inject("route", name, regName);
        // currentApp.inject("view", name, regName);
        currentApp.inject("component", name, regName);
        currentApp.inject("model", name, regName);
    },
}
common.tips = {
    /*
     type: success/info/warning/danger
     text:
     container: element
     */
    _base: function(type, text, container, autoHide = true) {
        if (!type || !text) return;

        type = type || "info";
        container = $(container || "body");
        container.find(">.alert").remove();

        var el = $([
            '<div class="alert alert-' + type + ' alert-dismissible">',
            '   <a class="close" data-dismiss="alert">&times;</a>',
            text,
            '</div>'
        ].join(''));
        var offset = container.offset();
        var ow = container.outerWidth();
        var _timeout;
        var _remove = function() {
            if (autoHide) {
                _timeout = setTimeout(function() {
                    el.slideUp(function() {
                        el.remove();
                    });
                }, 4000);
            }
        };

        container.append(el);

        _remove();
        el.hover(function() {
            clearTimeout(_timeout);
        }, _remove);

        return el.slideDown();
    },
    info: function(text) {
        return this._base("info", text || "");
    },
    warn: function(text) {
        return this._base("warning", text || "");
    },
    success: function(text) {
        return this._base("success", text || "保存成功!");
    },
    error: function(text, option) {
        var autoHide = option && option.autoHide;
        return this._base("danger", text || "保存失败", null, autoHide);
    },
    /**
     cfg: {
            container:
            type: muted/primary/success/info/warning/danger
            html: '',
            classNames: '',
            attrs: {},
            cssAttrs: {},
            timeout: 500
        }
     */
    simple: function(container, cfg) {
        if (!container) return;
        container = $(container);
        cfg = cfg || {};

        var classNames = cfg.classNames;
        var el = $('<span class="tips-simple"></span>');
        if (_.isArray(classNames)) classNames = classNames.join(' ');

        cfg.attrs && el.attr(cfg.attrs);
        cfg.cssAttrs && el.attr(cfg.cssAttrs);
        classNames && el.addClass(classNames);
        cfg.html && el.html(cfg.html);
        container.append(el);

        // el.fadeIn(200, function() {
        setTimeout(function() {
            el.fadeOut(cfg.timeout || 500, function() {
                el.remove();
            });
        }, 1500);
        // });
    },
    simpleSuccess: function(container, cfg) {
        return this.simple(container, _.extend({
            html: "保存成功!",
            classNames: "text-success"
        }, cfg));
    },
    simpleError: function(container, cfg) {
        return this.simple(container, _.extend({
            html: "保存失败",
            classNames: "text-danger"
        }, cfg));
    }
};

export default common;