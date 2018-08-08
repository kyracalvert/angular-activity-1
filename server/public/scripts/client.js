let FoodApp = angular.module( 'FoodApp', [] );

FoodApp.controller( 'FoodController', function(){
    // "this" is the Controller itself, we're holding it in a variable callev "vm"
    let vm = this;
    vm.foodLog = [];

    vm.addFood = function(){
        console.log( 'in addFood', vm.foodIn );
        vm.foodLog.push( vm.foodIn );
        console.log( 'food in app thus far:', vm.foodLog );
    } // end funk
}); // end controller