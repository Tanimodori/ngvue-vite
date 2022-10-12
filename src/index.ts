/* eslint-disable @typescript-eslint/ban-ts-comment */

export async function init() {
  /**
   * Load jQuery.
   * Prohibit AngularJS using jqlite.
   */
  const jQuery = await import('jquery');
  // @ts-ignore
  globalThis.jQuery = globalThis.$ = globalThis.jqLite = jQuery.default;

  /**
   * Load AngularJS.
   */
  const angular = await import('angular');
  globalThis.angular = angular.default;

  /**
   * Load Vue.
   * Inject Vueuses here if you need.
   * @example
   * const Vue = await import('vue');
   * Vue.default.use(...);
   */
  await import('vue');
  // @ts-ignore
  await import('ngVue');

  /**
   * Bootstrap AngularJS.
   */
  const app = await import('./app');
  $(document).ready(function () {
    angular.bootstrap(document, [app.default]);
  });
}

init();
