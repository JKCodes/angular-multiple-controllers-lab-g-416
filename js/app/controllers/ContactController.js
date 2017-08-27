function ContactController() {
  var vm = this;

  vm.name = 'name';
  vm.email = 'name@name.com';
  vm.phone = '123-123-1234';

  this.changeName = function() {
    vm.name = 'new name!';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);