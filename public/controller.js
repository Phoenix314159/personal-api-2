angular.module("myApp").controller('mainController',function ($scope, mainService) {
    mainService.getName().then(response => {
        // console.log(result);
        $scope.name = response.data;
    });
    mainService.getLocation().then(response => {
        $scope.location = response.data;
    });
    mainService.getOccupations().then(response => {
        $scope.occupation = response.data;
    });
    mainService.getLatestOcc().then(response => {
        $scope.latestOcc = response.data;
    });
    mainService.getHobbies().then(response => {
        $scope.hobbies = response.data;
    });
    mainService.getHobbiesByType().then(response => {
        $scope.hobbiesByType = response.data;
    });

    mainService.getFamilyByGender().then(response => {
        $scope.gender = response.data;
    })


})
