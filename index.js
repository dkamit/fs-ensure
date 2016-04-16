

var fs = require('fs');
var mkdirp = require('mkdirp');
var os = require('os');
if(os.platform === 'win32') {
  var path = require('path').win32;
} else {
  var path = require('path');
}


exports.file = function(filePath, flags, mode, callback) {
  var dirname = path.dirname(filePath);
  if (typeof mode == 'function') {
        callback = mode;
        mode = 777;
  }
  mkdirp(dirname, mode, function(err,data) {
    if(err) {
      callback(err, null);
    } else {
      fs.open(filePath, flags, callback);
    }
  });
};

exports.copy = function(source, dest, mode, callback) {
  var dirname = path.dirname(dest);
  if (typeof mode == 'function') {
        callback = mode;
        mode = 777;
  }
  mkdirp(dirname, mode, function(err,data) {
    if(err) {
      callback(err, null);
    } else {
      var sourceStream = fs.createReadStream(source);
      var destStream = fs.createWriteStream(dest);
      sourceStream.on("error", function(err) {
        callback(err, null);
      });
      destStream.on("error", function(err) {
        callback(err, null);
      });
      destStream.on("finish", function(err, data) {
        callback(null, dest);
      });
    }
  });
};

exports.move = function(source, dest, callback) {
  var dirname = path.dirname(dest);
  mkdirp(dirname, function(err, data){
    if(err) {
      callback(err, null);
    } else {
      fs.rename(source, dest, callback);
    }
  });
};

exports.delete = function(path , callback) {
  fs.unlink(path, callback);
};

exports.close = function(fd, callback) {
  fs.close(fd, callback);
};
