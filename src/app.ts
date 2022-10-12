import AppView from '@/views/AppView.vue';

const module = angular
  .module('app', ['ngVue'])
  .controller('AppCtrl', function () {
    console.log('Hello AngularJS!');
  })
  .value('AppView', AppView);

export default module.name;
