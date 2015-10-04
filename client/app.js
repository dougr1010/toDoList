/**************************************************
 *
 *  Client/app.js - not being sourced at the moment
 *
***************************************************/

/**
 * Created by dougritzinger on 10/2/15.
 */

/**
 * Created by dougritzinger on 10/2/15.
 */
var app=angular.module('toDoApp',[]);

console.log("Client: Hello Epsilon");

app.controller("MainController", ['$scope','$http', function($scope, $http){

    //Initialize-------------------
    $scope.hiPriList=[];
    $scope.showNewItem=false;
    $scope.showAddButton=true;
    //-----------------------------


    //Quiescent buttons-------------
    $scope.addAnItem=function(){
        $scope.showNewItem=true;
        $scope.showAddButton=false;
    }

    $scope.edit = function(){
        console.log("saw edit button");
        console.log(this.item);  //this works to show the item content
        console.log(this);
        console.log('index: ',this.$index)
    }

    $scope.remove = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.hiPriList.splice(this.$index,1);
    }

    //-----------------------------



    //Adding an item---------------
    $scope.doneAdding = function(){
        $scope.priority=0;
        console.log('item: ',$scope.newListItem);
        console.log('priority: ',$scope.priority);
        $scope.hiPriList.push($scope.newListItem);
        $scope.showNewItem=false;
        $scope.showAddButton=true;
        $scope.newListItem="enter a new item";
        $scope.priority=0;
        console.log('done adding');
    }
    //-----------------------------




}]);






