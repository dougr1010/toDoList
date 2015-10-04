/**
 * Created by dougritzinger on 10/2/15.
 */
var app=angular.module('toDoApp',[]);

console.log("Client: Hello Epsilon");

app.controller("MainController", ['$scope','$http', function($scope, $http){

    //Initialize-------------------
    $scope.listArray=[];   //array of arrays
    $scope.listArray[0]=[];//hi priority
    $scope.listArray[1]=[];//medium priority
    $scope.listArray[2]=[];//low priority
    $scope.priority=0;        //set hi priority as default
    $scope.showNewItem=false; //initially don't show inputs for adding new items
    $scope.showAddButton=true;//initially show the add item button
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
        sendData();
    }
    $scope.delete1 = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.listArray[1].splice(this.$index,1);
        sendData();
    }
    $scope.delete2 = function(){
        console.log("saw remove button");
        console.log('removing: ',this.item,"at index: ",this.$index);
        $scope.listArray[2].splice(this.$index,1);
        sendData();
    }
    //-----------------------------



    //Adding an item---------------
    $scope.doneAdding = function(){
        console.log('item: ',$scope.newListItem);
        console.log('priority: ',$scope.priority);
        //$scope.hiPriList.push($scope.newListItem);
        $scope.priority = parseInt(0 + $scope.priority)
        console.log('corrected priority: ',$scope.priority);
        $scope.listArray[$scope.priority].push($scope.newListItem);
        $scope.showNewItem=false;
        $scope.showAddButton=true;
        $scope.newListItem="";
        $scope.priority=0;
        sendData();
        console.log('done adding');
    }
    //-----------------------------

    //Send Data utility function
    function sendData(){
        console.log('raw listArray');
        console.log($scope.listArray);
        console.log('stringified');
        console.log(JSON.stringify($scope.listArray));
        $http.post('/sendToServer', $scope.listArray);
    }


}]);






