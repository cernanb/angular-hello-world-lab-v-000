function MainController($scope){
  $scope.contact = {
    name: 'Cernan Bernardo',
    email: 'cernan@email.com',
    phone: '555-456-9859'
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
