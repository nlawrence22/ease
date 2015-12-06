if (Meteor.isClient) {

  Template.easecheckin.events({
    'submit .feelings': function(event){

      event.preventDefault();

      var physicalv = event.target.physical.value;
      var emotionalv = event.target.emotional.value;

      console.log("Form submitted");
      console.log(physicalv);
      console.log(emotionalv);

        //TODO: Log to DB
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
