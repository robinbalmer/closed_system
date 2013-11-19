var _collection;

define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/environment'
], function(_, Backbone, EnvironmentModel){
  var EnvironmentCollection = Backbone.Collection.extend({
    model: EnvironmentModel
  });
  
  return EnvironmentCollection;
});