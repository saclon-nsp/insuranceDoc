
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://saclon-nsp.github.io/insuranceDoc',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/insuranceDoc/login",
    "route": "/insuranceDoc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PDNNQZ2F.js",
      "chunk-QD4345VQ.js"
    ],
    "route": "/insuranceDoc/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSPP4G2S.js"
    ],
    "route": "/insuranceDoc/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HRTNJGJV.js",
      "chunk-U4JRU7DS.js",
      "chunk-QD4345VQ.js"
    ],
    "route": "/insuranceDoc/modal-form"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMBTIRI3.js",
      "chunk-U4JRU7DS.js",
      "chunk-QD4345VQ.js",
      "chunk-QMQTSFHS.js",
      "chunk-FK6H3RFT.js"
    ],
    "route": "/insuranceDoc/insurance"
  },
  {
    "renderMode": 2,
    "redirectTo": "/insuranceDoc/login",
    "route": "/insuranceDoc/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 741, hash: 'fd6740c8e39808fe5de12735a93e3c2436c320a91b5311761e50484d1e2cfcf2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1254, hash: '66b480e2e8af7474970b1b7875e6ad871e9570a3e61f66ff135b837c30a232fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 3411, hash: '79f5906efedcba28b2d7306f56503d57b6fb4f196d7d047b808af76c306b04d4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'insurance/index.html': {size: 3619, hash: 'fb3841a0bf6d08a8c551aa140d3cc12fdedd176db8a6e524f8a4d2209f4ec2ea', text: () => import('./assets-chunks/insurance_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3463, hash: '86b3d674cbba4a7ac52237f140892d5f8215fa48ef512cbc2e7a0a2baa2da131', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'modal-form/index.html': {size: 3515, hash: '95c71efe4a3464cbbf1bfb986723455771ef0b109df644d52d7985348f763b5a', text: () => import('./assets-chunks/modal-form_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
