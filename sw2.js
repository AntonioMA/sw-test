(function(globalWorker) {
  if (globalWorker) {
    globalWorker.console.log("GW: " + globalWorker);
  }
})(self);
