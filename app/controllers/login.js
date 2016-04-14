export default Ember.Controller.extend({
  actions:{
    login:function(){
      var name=this.get("username"),
        password=this.get("password"),
        self=this;
      if(!name || !password){
        alert("用户名或密码不能为空!")
      }
      Ember.$.post("/ember_api/login",{
        name:name,
        password:password
      },function(){
        self.transitionToRoute("manage.index");
      })

    }
  }
})