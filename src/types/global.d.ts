import JQueryStatic from 'jquery';
import AngularStatic from 'angular';

declare global {
  // @ts-ignore
  var $: typeof JQueryStatic;
  // @ts-ignore
  var jQuery: typeof JQueryStatic;
  var jqLite: typeof JQueryStatic;
  var angular: typeof AngularStatic;
}
