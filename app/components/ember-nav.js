export default Ember.Component.extend({
  // tagName:"",
  classNames:["ember-nav"],
  type:"ember",
  navs:function(){
    var type=this.get("type");
    if(type=="ember"){
      return [{
        title:"modules",
        id:"",
        display:false,
        children:[{
          title:"ember",
          id:"",
        }]
      }];
    }else{
      return [{
        title:"modules",
        id:""
      }]
    }
  }.property(),
  actions:{
    toggleDisplay(item){
      Ember.set(item,"display",!item.display)
    },
    goToNav(pTitle,title){
      console.log(pTitle)
      console.log(title)
    }
  }
})