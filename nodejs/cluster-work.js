const fs = require('fs');
const path = require('path');
const cluster = require('cluster');

process.on('message', function (msg) {
  let workerId = cluster.worker.id;
  console.log(`----------log-------------work ${workerId}收到 ${msg}`);
  process.send(`work ${workerId} 收到`)
});