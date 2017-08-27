function StaffController() {
  var vm = this;

  vm.name = 'staff';
  vm.email = 'staff@staff.com';
  vm.phone = '123-123-1235';
}

angular
  .module('app')
  .controller('StaffController', StaffController);