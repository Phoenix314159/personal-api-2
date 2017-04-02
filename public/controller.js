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
    mainService.getFamily().then(response => {
        $scope.family = response.data;
    })

    mainService.getFamilyByGender().then(response => {
        console.log(response);
        $scope.gender = response.data;
    });
    $scope.addFamilyMember = () => {
        mainService.addFamilyMember($scope.name1, $scope.relation1, $scope.gender1).then(response => {
            console.log(response.data);
            mainService.addFamilyMember().then(response => {
                $scope.family = response.data;
            })
        })
    }
    mainService.deleteHobbieByType().then(response => {
        console.log(response);
    })
    $scope.postNewHobby = function () {
        mainService.postNewHobby($scope.additionalHobby).then(response => {
            console.log(response.data);
            mainService.getHobbies().then(response => {
                $scope.hobbies = response.data;
            })
        })
    }



})
