define([
  'underscore',
  'backbone',
  'config',
], function(_, Backbone, ConfigX){
  var StageModel = Backbone.Model.extend({
    defaults: {
		width: Config.stage.width || 1000,
		height: Config.stage.height || 1000,
		kinetic: {}
    }
  });
  // Return the model for the module
  return StageModel;
});