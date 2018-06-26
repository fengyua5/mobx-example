
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

cluster.setupMaster({
  exec: './nodejs/cluster-work.js',
  slient: true
})

if (cluster.isMaster) {
  console.log('[master] ' + "start master...");

  for (var i = 0; i < numCPUs; i++) {
    var wk = cluster.fork();
  }

  cluster.on('listening', function (worker, address) {
      console.log(`listening ${worker} ${address}`)
  });

  cluster.on('disconnect', function (worker) {
    console.log(`worker ${worker.id} disconnect`)
  });


  function eachWorker(callback) {
    for (var id in cluster.workers) {
      callback(cluster.workers[id]);
    }
  }

  setTimeout(function () {
    eachWorker(function (worker) {
      worker.send('[master] ' + 'send message to worker' + worker.id);
    });
  }, 3000);

  Object.keys(cluster.workers).forEach(function(id) {
    cluster.workers[id].on('message', function(msg){
      console.log(`总台说： worker ${id} ok ${msg}`)
      this.disconnect();
    });
  });

}