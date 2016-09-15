Template.MainNav.events({

    'click .login-toggle': () => {

        Session.set('nav-toggle', 'open');
        //console.log(Session.get('nav-toggle'));
    },
    'click .logout': ()=> {
        AccountsTemplates.logout();
    }

});