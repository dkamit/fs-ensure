# fs-ensure
Ensure file operations

## Installation
```
npm i ensure-fs
```

## Description

Ensure file creation, delete, move, copy and close operations even if the file parent folders are not present.
This module is platform agnostic.

## API

```js
var ensure = require('ensure-fs');
```

###file(filePath, flags, [mode ,] callback)

Creates the file by creating the non available folders in the filepath and creates the file.

```js
ensure.file(filePath, "w", "766", function(err, handle) {
  if(err) console.log(err)
  fs.read(handle, ...)
  .
  .
  .
  fs.write(handle,...)
});
ensure.close(handle, function(err){
  if(err) console.log(err)
});
```

###copy(source, dest, [mode ,] callback)

Copies the file from source to dest even if the dest parent folders are not present, by creating the dest folders as well.
Callback accepts err and filename of the destination file

###move(source, dest, callback)
Moves the file from source to dest even if the dest parent folders are not present, by creating the dest folders as well.
Callback accepts err and filename of the destination file

###close(fd, callback)
Close the file handle created by file(...) method, don't forget to close the file.

###delete(filepath, callback)
Deletes the file

##Licence
MIT
