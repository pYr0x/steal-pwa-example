import DefineMap from "can-define/map/map";
import route from 'can-route';
import "can-route-pushstate";
import stache from "can-stache";
import "can-stache/helpers/route";
import "can-stache-bindings";
//import steal from "@steal";
import loader from "@loader";

//import './models/fixtures/contents';

const AppViewModel = DefineMap.extend('App', {

  /**
   * Pagetitle
   */
  title: {
    serialize: false,
    value: ""
  },

  /**
   * current page
   */
  page: "sting",

  baseUrl: {
    serialize: false,
    value: function () {
      debugger;
      return loader.baseURL.slice(0, -1);
    }
  },

  asset: function (asset) {
    debugger;
    return steal.joinURIs(loader.baseURL, loader.directories.lib + "/assets/"+ asset);
  }
});

route.bindings.pushstate.root = "/";
route('{page}');

export default AppViewModel;