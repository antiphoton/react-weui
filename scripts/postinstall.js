const fs = require('fs');
const tar = require('tar');

if (!fs.existsSync('build')) {
  tar.extract(
    {
      file: 'build.tar.gz',
    }
  );
}

