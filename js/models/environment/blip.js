define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var BlipModel = Backbone.Model.extend({
    defaults: {
      id: '',
	  x: 0,
	  y: 0,
	  entity_history: {},
	  position_history: {},
    }
  });
  // Return the model for the module
  return BlipModel;
});