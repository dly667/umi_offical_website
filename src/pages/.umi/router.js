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
        "path": "/supply_chain_finance",
        "exact": true,
        "component": require('../supply_chain_finance.js').default
      },
      {
        "path": "/about",
        "exact": true,
        "component": require('../about.js').default
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/notarization",
        "exact": true,
        "component": require('../notarization.js').default
      },
      {
        "path": "/product",
        "exact": true,
        "component": require('../product.js').default
      },
      {
        "path": "/equity_bond",
        "exact": true,
        "component": require('../equity_bond.js').default
      },
      {
        "path": "/digital_assets",
        "exact": true,
        "component": require('../digital_assets.js').default
      },
      {
        "path": "/detail",
        "exact": true,
        "component": require('../detail.js').default
      },
      {
        "path": "/supply_chain_traceability",
        "exact": true,
        "component": require('../supply_chain_traceability.js').default
      },
      {
        "path": "/application",
        "exact": true,
        "component": require('../application.js').default
      },
      {
        "path": "/white_book",
        "exact": true,
        "component": require('../white_book.js').default
      },
      {
        "component": () => React.createElement(require('H:/HLOfficialWebsite/node_modules/_umi-build-dev@0.20.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/supply_chain_finance","exact":true,"component":"./src/pages/supply_chain_finance.js"},{"path":"/about","exact":true,"component":"./src/pages/about.js"},{"path":"/index.html","exact":true,"component":"./src/pages/index.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/notarization","exact":true,"component":"./src/pages/notarization.js"},{"path":"/product","exact":true,"component":"./src/pages/product.js"},{"path":"/equity_bond","exact":true,"component":"./src/pages/equity_bond.js"},{"path":"/digital_assets","exact":true,"component":"./src/pages/digital_assets.js"},{"path":"/detail","exact":true,"component":"./src/pages/detail.js"},{"path":"/supply_chain_traceability","exact":true,"component":"./src/pages/supply_chain_traceability.js"},{"path":"/application","exact":true,"component":"./src/pages/application.js"},{"path":"/white_book","exact":true,"component":"./src/pages/white_book.js"}]}]' })
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
