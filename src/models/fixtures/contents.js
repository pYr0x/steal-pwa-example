import fixture from 'can-fixture';


import home from "./home.json";
import autorender from "./autorender.json";
import sw from "./sw.json";

fixture({
  method: "GET",
  url: "/contents/{page}"
}, function(request, response, headers, ajaxSettings){
  // debugger;
  // steal.import("~/modles/home.json").then(function () {
  //
  // });

  if(request.data.page === "home"){
    return home;
  }else if(request.data.page === "done-autorender"){
    return autorender;
  }else if(request.data.page === "sw"){
    return sw;
  }
});