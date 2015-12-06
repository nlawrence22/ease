if (Meteor.isClient) {

  Template.easecheckin.events({
    'submit form': function(){
      event.preventDefault();
      var physicalv = event.target.physical.value;
      var emotionalv = event.target.emotional.value;
      console.log("Form submitted");
      console.log(physicalv);
      console.log(emotionalv);
        // code goes here
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
