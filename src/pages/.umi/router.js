import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/about",
        "exact": true,
        "component": require('../about.js').default
      },
      {
        "path": "/application",
        "exact": true,
        "component": require('../application.js').default
      },
      {
        "path": "/detail",
        "exact": true,
        "component": require('../detail.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/product",
        "exact": true,
        "component": require('../product.js').default
      },
      {
        "path": "/white_book",
        "exact": true,
        "component": require('../white_book.js').default
      },
      {
        "component": () => React.createElement(require('H:/HLOfficialWebsite/node_modules/_umi-build-dev@0.20.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/about","exact":true,"component":"./src/pages/about.js"},{"path":"/application","exact":true,"component":"./src/pages/application.js"},{"path":"/detail","exact":true,"component":"./src/pages/detail.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/product","exact":true,"component":"./src/pages/product.js"},{"path":"/white_book","exact":true,"component":"./src/pages/white_book.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
