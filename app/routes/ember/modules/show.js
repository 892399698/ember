import common from 'ember-api/common'
export default Ember.Route.extend({
    model: function(params) {
        console.log(params)
            //TODO判断params.name为空清空
        var articleDefer = Ember.RSVP.defer()
        Ember.$.get(UDD.apiBase + "getArticle", {
            table: "ember",
            pTitle: "modules",
            title: params.name
        }).then(function(res) {
            if (res.code === 1000) {
                articleDefer.resolve(res.data);
            } else {
                articleDefer.reject(res.msg || "获取文章信息错误！");
            }
        })
        return Ember.RSVP.hash({
            data: articleDefer.promise
        })
    },
    actions: {
        error(msg) {
            common.tips.error(msg)
        }
    }
})
