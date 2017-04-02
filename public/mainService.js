angular.module('myApp').service('mainService', function ($http) {
   let serverUrl = 'http://localhost:3020';

    this.getName = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/api/name'
       })
   }
   this.getLocation = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/api/location'
       })
   }
   this.getOccupations = function () {
       return $http({
           method: 'GET',
           url: serverUrl + '/api/occupations'
       })
   }
    this.getLatestOcc = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/occupations/latest'
        })
    }
    this.getHobbies = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/hobbies'
        })
    }
    this.getHobbiesByType = function (type) {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/hobbies/' + type
        })
    }
    this.getFamily = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/family'
        })
    }
    this.getFamilyByGender = function (gender) {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/family/' + gender
        })
    }
     this.addFamilyMember = function(name,relation,gender){
        return $http({
            method: 'POST',
            data: {name: name, relation: relation, gender: gender},
            url: serverUrl + '/api/addfamilymember'
        })
     }
     this.deleteHobbieByType = function (id) {
         return $http({
             method: 'DELETE',
             data: {id:id},
             url: serverUrl + '/api/hobbies/' + id
         })
     }
     this.postNewHobby = function(additionalHobby){
         return $http({
             method: 'POST',
             data: {name : additionalHobby},
             url: serverUrl + '/api/addnewhobbie'
         })
     }
})
