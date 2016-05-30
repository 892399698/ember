export default Ember.Component.extend({
    // tagName:"",
    classNames: ["ember-nav"],
    type: "ember",
    navAction:"goToNav",
    navs: function() {
        var type = this.get("type");
        if (type == "ember") {
            return [{
                title: "modules",
                id: "",
                display: false,
                children: [{
                    title: "ember",
                    id: "ember",
                },{
                    title: "ember-application",
                    id: "ember_application",
                }]
            }];
        } else {
            return [{
                title: "modules",
                id: ""
            }]
        }
    }.property(),
    actions: {
        toggleDisplay(item) {
            Ember.set(item, "display", !item.display)
        },
        goToNav(pTitle, title) {
            this.sendAction("navAction",pTitle,title);
            // Ember.$.get(UDD.apiBase+"getArticle", {
            //     pTitle: pTitle,
            //     title: title
            // }).then(function(res) {
            //     if (res.code === 1000) {

            //     } else {
            //         alert(res.msg || "获取内容错误！")
            //     }
            // })
        }
    }
})
