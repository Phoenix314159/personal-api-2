angular.module('myApp').service('mainService', function ($http) {
   this.getName = function () {
       return $http({
           method: 'GET',
           url: 'http://localhost:3020/name'
       })
   }
   this.getLocation = function () {
       return $http({
           method: 'GET',
           url: 'http://localhost:3020/location'
       })
   }
   this.getOccupations = function () {
       return $http({
           method: 'GET',
           url: 'http://localhost:3020/occupations'
       })
   }
    this.getLatestOcc = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3020/occupations/latest'
        })
    }
    this.getHobbies = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3020/hobbies'
        })
    }
    this.getHobbiesByType = function (type) {
        return $http({
            method: 'GET',
            url: 'http://localhost:3020/hobbies/' + type
        })
    }
    this.getFamilyByGender = function (gender) {
        return $http({
            method: 'GET',
            url: 'http://localhost:3020/family/' + gender
        })
    }
})
