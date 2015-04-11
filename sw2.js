(function(globalWorker) {
  if (globalWorker) {
    globalWorker.console.log("GW: " + globalWorker);
    globalWorker.dump("GW: " + globalWorker + "\n");
  }
})(self);
