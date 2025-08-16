
export default {
  basePath: 'https://saclon-nsp.github.io/insuranceDoc',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
