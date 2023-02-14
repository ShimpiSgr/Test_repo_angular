

(function(){
    'use strict';
    angular.module('msgapp',[])
    .controller('msgcontroller',msgcontroller)
    .filter('loves',LovesFilter);



    msgcontroller.$inject=['$scope','LovesFilter'];
    function msgcontroller($scope,LovesFilter){
        $scope.name="Sagar";
        $scope.stateOfBeing="hungry";

        $scope.cookieCost=0.45;


        $scope.saymessage = function(){
            var msg = "Sagar..!! Good morning";
            var output = $filter('uppercase')(msg);
            return output
        };

        $scope.feedsagar = function(){
            $scope.stateOfBeing="fed";
        };

        $scope.upper = function(){
            var upcase = $filter('uppercase');
            $scope.name =upcase($scope.name);
        }

        $scope.sayLovesMessage = function(){
            var msg = "sagar hello likes";
            msg= LovesFilter(msg);
            return msg;
        }


        function LovesFilter(){
            return function(input){
                input = input || "";
                input = input.replace("likes","loves");
                return input;
            }
        }


    }

}

)();