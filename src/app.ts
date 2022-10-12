import AppView from '@/views/AppView.vue';

const module = angular
  .module('app', ['ngVue'])
  .controller('AppCtrl', function () {})
  .value('AppView', AppView);

export default module.name;
