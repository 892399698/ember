export default Ember.Controller.extend({
  actions:{
    login:function(){
      var name=this.get("username"),
        password=this.get("password"),
        self=this;
      if(!name || !password){
        alert("用户名或密码不能为空!")
      }
      console.log(md5(password))
      Ember.$.post("/ember_interface/login",{
        name:name,
        password:md5(password)
      },function(){
        self.transitionToRoute("ember.index");
      })

    }
  }
})