define([
  'underscore',
  'backbone',
  'config',
  'models/environment/blip',
  'models/environment/stage'
], function(_, Backbone, ConfigX, BlipModel, StageModel){
		
  var EnvironmentModel = Backbone.Model.extend({
    defaults: {
      name: "Default Environment",
	  blips: {},
	  age: 0,
	  stage: new StageModel()
    },
	
	initialize: function(){
		
		var stage = this.get('stage');
	
		this.set('blips',new Backbone.Collection([],{model:BlipModel}));
			
		//fill environment with default blips
		for(var x = 0; x < 300; x ++){
			this.get('blips').add({
				id: x,
				x: Math.round(Math.random() * stage.get('width')),
				y: Math.round(Math.random() * stage.get('height'))
			});
		}		
				
	}
	
  });
  // Return the model for the module
  return EnvironmentModel;
});