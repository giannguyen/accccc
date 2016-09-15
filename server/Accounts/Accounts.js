var postSignUp = function(userId, info){
    
    console.log(userId);
    
    console.log(info);
    
    Roles.addUsersToRoles(userId, ['admin', info.profile.profession]);
}

AccountsTemplates.configure({
    
    postSignUpHook: postSignUp
    
});