var assert = require('assert');
var ensure = require('../');
var fs = require('fs');
var should = require('chai').should();
var expect    = require("chai").expect;

describe('ensure.file(path, flags, mode, callback)', function(){
  it('Create a file even if parent folder doest exist', function(){
    ensure.file("abc/def/gh.txt", "w", "766", function(err, handle){
      should.not.exist(err);
      should.exist(handle);
      ensure.close(handle, function(err){
        should.not.exist(err);
      });
    });
  });
});

describe('ensure.copy(source, dest, mode, callback)', function(){
  it('copy the file even if the parent folder doesnt exist', function(){
    ensure.copy("test/file1.txt", "test/dir1/file.txt", "766", function(err, data){
      should.not.exist(err);
      should.exist(data);
    });
  });
});

describe('ensure.move(source, dest, callback)', function(){
  it('move the file even if the parent folder doesnt exist', function(){
    ensure.move("test/file2.txt", "test/dir2/file2.txt", "766", function(err, data){
      should.not.exist(err);
      should.exist(data);
    });
  });
});
