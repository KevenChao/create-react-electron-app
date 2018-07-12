const isDev = process.env.ELECTRON === 'dev';

if (isDev) {
  require('./public/electron.js');
} else {
  require('./build/electron.js');
}
