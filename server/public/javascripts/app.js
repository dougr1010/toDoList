/**
 * Created by dougritzinger on 10/2/15.
 */
var app=angular.module('toDoApp',[]);

console.log("Client: Hello Epsilon");

app.controller("MainController", ['$scope','$http', function($scope, $http){

    //Initialize-------------------
    $scope.hiPriList=[];
    $scope.listArray=[];
    $scope.listArray[0]=[];//dataArray[0][...] = hi pri, dataArray[1][...] = med pri, ...
    $scope.listArray[1]=[];//dataArray[0][...] = hi pri, dataArray[1][...] = med pri, ...
    $scope.listArray[2]=[];//dataArray[0][...] = hi pri, dataArray[1][...] = med pri, ...
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

    $scope.delete0 = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.listArray[0].splice(this.$index,1);
    }
    $scope.delete1 = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.listArray[1].splice(this.$index,1);
    }
    $scope.delete2 = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.listArray[2].splice(this.$index,1);
    }

    //-----------------------------



    //Adding an item---------------
    $scope.doneAdding = function(){
        console.log('item: ',$scope.newListItem);
        console.log('priority: ',$scope.priority);
        $scope.hiPriList.push($scope.newListItem);
        $scope.listArray[$scope.priority].push($scope.newListItem);
        $scope.showNewItem=false;
        $scope.showAddButton=true;
        $scope.newListItem="";
        $scope.priority=0;
        console.log('done adding');
    }
    //-----------------------------




}]);






