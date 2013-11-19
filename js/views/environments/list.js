define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/environments',
  'text!templates/environments/list.html'
], function($, _, Backbone, EnvironmentsCollection, environmentsListTemplate){
	
  var EnvironmentListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(app){
    console.log('view init');
      this.collection = new EnvironmentsCollection();
      	  
	  if(app) app.collection = this.collection    
      
      this.collection.on('add',this.render,this);	  

	  //add a default item, triggers the first render
	  this.collection.add();	  
      
    },
    render: function(){
     // Compile the template using Underscores micro-templating		
	  var compiledTemplate = _.template( environmentsListTemplate, { environments: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return EnvironmentListView;
});