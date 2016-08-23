export default Ember.Controller.extend({
  actions:{
    login:function(){
      var name=this.get("username"),
        password=this.get("password"),
        self=this;
      if(!name || !password){
        alert("用户名或密码不能为空!")
      }
      // console.log(md5(password))
      Ember.$.post("/ember_interface/login",{
        name:name,
        password:md5(password)
      }).then(function(res){
        if(res.code===1000){
          UDD.status=1;
          self.transitionToRoute("ember.index");
        }else{
          alert(res.msg)
          // console.log(res.msg)
        }
      },function(){

      })

    }
  }
})