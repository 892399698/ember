import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import common from 'ember-api/common';
let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// export default App;

export default {
  create(options){
    window.currentApp = App.create();
    window.currentContainer = window.currentApp.__container__;
    window.currentRouter = window.currentContainer.lookup("router:main");

    var UDD ={
        apiBase:"/ember_interface/"
      };
    common.injectData("UDD", UDD);

    window.UDD = UDD;


    Ember.RSVP.all([
       Ember.$.get(UDD.apiBase + "init_conf_data"),
    ]).then(function([res]){
      UDD.status=res.status||0;
    })
  }
}