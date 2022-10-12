/* eslint-disable @typescript-eslint/ban-ts-comment */

export async function init() {
  /**
   * load jQuery.
   * prohibit AngularJS using jqlite.
   */
  const jQuery = await import('jquery');
  // @ts-ignore
  globalThis.jQuery = globalThis.$ = globalThis.jqLite = jQuery.default;

  // load AngularJS.
  const angular = await import('angular');
  globalThis.angular = angular.default;

  /**
   * Load Vue.
   * Inject Vueuses here if you need.
   * @example
   * Vue.default.use(...);
   */
  const Vue = await import('vue');
  // @ts-ignore
  await import('ngVue');

  return { jQuery, angular, Vue };
}

init();
