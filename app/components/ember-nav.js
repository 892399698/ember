export default Ember.Component.extend({
  // tagName:"",
  classNames:["ember-nav"],
  type:"ember",
  navs:function(){
    var type=this.get("type");
    if(type=="ember"){
      return [{
        title:"modules",
        id:""
      }];
    }else{
      return [{
        title:"modules",
        id:""
      }]
    }
  }.property(),

})