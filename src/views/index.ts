/* eslint-disable @typescript-eslint/no-empty-function */
import app from '@/app';
import { StateProvider } from 'angular-ui-router';

import AppView from '@/views/AppView.vue';
angular
  .module(app)
  .controller('AppViewCtrl', function () {})
  .value('AppView', AppView)
  .config(function ($stateProvider: StateProvider) {
    $stateProvider.state({
      name: 'vue',
      url: '',
      template: '<vue-component name="AppView"></vue-component>',
      controller: 'AppViewCtrl',
    });
  });
