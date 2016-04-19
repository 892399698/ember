import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route("login");
    this.resource("ember", function() {
        this.route("index");
        this.route("show", {
            path: "/:name"
        })
    });
    this.resource("manage", function() {

    })
});

export default Router;
