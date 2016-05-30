export default Ember.Controller.extend({
  actions:{
    goToNav(pTitle,title){
      this.transitionToRoute("ember.show",pTitle,title);
      // this.transitionToRoute("ember.show",pTitle,title);
    }
  }
})