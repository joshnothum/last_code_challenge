myApp.controller('TrollController', function ($http) {

    var troll = this;
    newTroll = {};
    allTrolls = {};


    troll.refreshTroll = function () {
        $http.get('/troll').then(function (success) {
            troll.allTrolls = success.data;
        }).catch(function (error) {
            console.log('error', error);

        });

    };
    troll.addTroll = function (newTroll) {
        $http.post('/troll', newTroll).then(function (success) {
            console.log(newTroll);
            troll.refreshTroll();
        }).catch(function (error) {
            console.log('We might have a problem:', error);

        });
    };
    troll.deleteTroll = function (trollId) {
        console.log('troll id:',trollId);

        $http.delete('/troll/' + trollId).then(function (response) {

            console.log(reponse);

        }).catch(function (error) {
            console.log('deleteTrolls error:', error);

        });
        troll.refreshTroll();
    };

    troll.refreshTroll();
});