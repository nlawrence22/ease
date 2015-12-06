if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  /*Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/

  Template.easecheckin.events({
      'submit .feelings': function (event) {

          event.preventDefault();

          //Check values of sliders
          var physical = event.target.physical.value;
          var emotional = event.target.emotional.value;

          console.log(physical);
          console.log(emotional);

          //Log values to DB
          //TODO: Add db code
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
