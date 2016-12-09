# zurich-modular.ch Website

This is the source of [zurich-modular.ch](http://zurich-modular.ch/).

It was built with [harp.js](http://harpjs.com/) and [Inuit.css](https://github.com/inuitcss).

## Getting started

    npm install -g yarn
    yarn
    harp server _harp && browser-sync start --proxy 'localhost:9000' --files _harp/** --no-notify


## Deployment

    harp compile _harp dist && ZHM_FTP_USER=user ZHM_FTP_PASS=password node deploy.js
