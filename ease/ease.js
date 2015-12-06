CheckinLog = new Mongo.Collection("checkin");
NotifyLog = new Mongo.Collection("notify");
UsageLog = new Mongo.Collection("usage");
if (Meteor.isClient) {

  Template.checkin.events({
    'submit .feelings': function(event){
      event.preventDefault();

      var physicalv = event.target.physical.value;
      var emotionalv = event.target.emotional.value;

      console.log("Form submitted");
      console.log(physicalv);
      console.log(emotionalv);
      CheckinLog.insert({
        physical: physicalv,
        emotional: emotionalv,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
