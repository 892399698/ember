export default Ember.Controller.extend({
	actions:{
		edit:function(){
			this.set('editing',true)
		}
	}
})