import Component from "can-component";
import DefineMap from "can-define/map/map";
import ajax from "can-ajax";

import template from "./content.stache";

const ViewModel = DefineMap.extend('ContentVM', {
  init: function () {
  },

  page: {
    type: "string",
    value: "home"
  },

  title: {
    set: function (newVal) {
      this.app.title = newVal;
    }
  },

  app: "any",

  contentPromise: {
    value: function () {
      return {
        "isResolved": false,
        "value": null
      };
    },
    get: function (lastSetValue, resolve) {
      // let self = this;
      // debugger;
      // lastSetValue.isResolved = false;
      ajax({
        url: "/contents/"+this.page,
        type: "GET",
        dataType : "json"
      }).then((response) => {
        this.title = response.title;

        resolve({
          "isResolved": true,
          "value": response.data
        });
      }).catch(function (error) {
        debugger;
      });
    }
  }

});

Component.extend({
  tag: "x-content",
  view: template,
  ViewModel: ViewModel
});

export default ViewModel;