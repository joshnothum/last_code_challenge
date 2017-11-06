myApp.controller('TrollController', function ($http) {
    
    var troll = this;
    troll.newTroll = {
        name:'',
        message:''
    };

    troll.addTroll = function (newTroll) {
    $http.post('/troll', newTroll).then(function (success) {
        console.log(newTroll);
        
    }).catch(function (error) {
        console.log('We might have a problem:', error);
        
    });      
    };
});