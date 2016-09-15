Template.Dashboard.helpers({
    admin: ()=>{
        return Roles.userIsInRole(Meteor.userId(), 'admin');
    }
})