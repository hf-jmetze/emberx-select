import Ember from 'ember';

export default function() {
  Ember.Test.registerAsyncHelper('select', function(app, selector, texts) {
   

    return app.testHelpers.wait();
  });
}
