import 'angular-ui-router';

const module = angular.module('app', ['ngVue', 'ui.router']).controller('AppCtrl', function () {
  console.log('Hello AngularJS!');
});

export default module.name;
