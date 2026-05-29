
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/insuranceDoc/',
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
      "chunk-Y6ICLVJE.js",
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
      "chunk-VGIU3NAO.js",
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
    'index.csr.html': {size: 714, hash: '2fab4932bbcff3fbe2c8e58585ecb562f099dc8ed8240e02e45fdc13ccadeec4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1227, hash: '8346b3e265f08c5fa14cc418096effb486ebb587022da7d7588bd2a4f0a517f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'modal-form/index.html': {size: 3488, hash: '866bf3ff5306b9c5308d3a8cfffc84aab70086c9fa6a81eb0452a0e39a851f55', text: () => import('./assets-chunks/modal-form_index_html.mjs').then(m => m.default)},
    'insurance/index.html': {size: 3592, hash: '5701b32070b5e4aa1a0011bcdbda146db391828163803dabd6ffbbc131c5247c', text: () => import('./assets-chunks/insurance_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 3384, hash: '18fad538963b015ab3c340bf610507725ff8c8047bb42942e028ff800fe61c60', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3436, hash: '43ab5d374cb88ce0dc1843eb8fe345792ce4376460b21f70a95587379acbd4f9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
