define([
  'jquery',
  'underscore',
  'backbone',
  'views/environments/list',
  'views/environment/observe',
  'behavior/environment/simulate'
], function($, _, Backbone, EnvironmentListView, EnvironmentObserveView, Simulate){
  var AppRouter = Backbone.Router.extend({
    routes: {
	   
	  'observe/:id': 'observe', 
	   
      '*actions': 'defaultAction'
    },
    
	observe: function(id){
  	
  		var environmentObserveView = new EnvironmentObserveView();
		
		environmentObserveView.render(id);
	
    }
  
  });

  var initialize = function(app){ 	 	  
      var environmentListView = new EnvironmentListView(app);
      app.list_view = environmentListView;     
	  
      var app_router = new AppRouter;  	  

      Backbone.history.start();
	  	  	  
  };
  
  return {
    initialize: initialize
  };
});