angular.module('myApp').service('mainService', function ($http) {
   let serverUrl = 'http://localhost:3020';

    this.getName = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/name'
       })
   }
   this.getLocation = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/location'
       })
   }
   this.getOccupations = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/occupations'
       })
   }
    this.getLatestOcc = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/occupations/latest'
        })
    }
    this.getHobbies = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/hobbies'
        })
    }
    this.getHobbiesByType = function (type) {
        return $http({
            method: 'GET',
            url: serverUrl + '/hobbies/' + type
        })
    }
    this.getFamilyByGender = function (gender) {
        return $http({
            method: 'GET',
            url: serverUrl + '/family/' + gender
        })
    }
     this.addFamilyMember = function(name,relation,gender){
        return $http({
            method: 'POST',
            data: {name: name, relation: relation, gender: gender},
            url: serverUrl + '/addfamilymember'
        })
     }
     this.deleteHobbieByType = function (id) {
         return $http({
             method: 'DELETE',
             data: {id:id},
             url: serverUrl + '/hobbies/' + id
         })
     }
})
