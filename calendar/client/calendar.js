CalEvents = new Meteor.Collection('calevents');
Session.setDefault('editing_calevent', null);
Session.setDefault('showEditEvent', false);
Meteor.Router.add({
	'/':'homepage',
	'/calendar':'calendar1'
})
Template.calendar1.rendered = function(){

}

