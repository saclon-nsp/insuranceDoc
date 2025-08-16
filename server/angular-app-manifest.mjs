
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
    'index.csr.html': {size: 714, hash: '38882951c5d2a7c895cde081e33ca72f19b7fa8bd48c21fdb607014034c364c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1227, hash: 'a3c204570eab7677573f26a2e3a42a9844773232b0c0447aa2a5661f6b9bab5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3436, hash: '240548cc8f795f696ee683a1dfb3a9d71ca94211e2cdc3f39ec57e37f8a8c262', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'modal-form/index.html': {size: 3488, hash: 'ddc07bd141b691a13bf9ea580362f56ffa376fc6cd7ae9ce75e62d21bb8697e7', text: () => import('./assets-chunks/modal-form_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 3384, hash: 'cfe44d254c3ce289e144b36a73575ca975eafa1968bfd15c54c6df92bbe4f967', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'insurance/index.html': {size: 3592, hash: 'afa5f0ee8e6b55ba5e8980c16289f26ee319da11f96477d11aebe2fa2c5a905c', text: () => import('./assets-chunks/insurance_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
