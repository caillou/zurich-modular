// Call this as follows:

// ZHM_FTP_USER=user ZHM_FTP_PASS=yourpassword node deploy.js

const ftpUser = process.env.ZHM_FTP_USER;
const ftpPassword = process.env.ZHM_FTP_PASS;

const ftpSync = require('ftpsync');

var options = {
  host: 'zurich-modular.ch',
  user: ftpUser,
  pass: ftpPassword,
  local: './dist',
  remote: './web',
};

ftpSync.settings = options;
ftpSync.run(function (err, result) {

  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  console.log('successfully deployed the files');
  process.exit(0);
});
