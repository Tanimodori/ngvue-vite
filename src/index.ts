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

  // load Vue.
  const Vue = await import('vue');
  // @ts-ignore
  await import('ngVue');
}

init();
