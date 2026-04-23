
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1171, hash: '64b543bb243eca4b50b9536174286e15217ae224ffe52821b71726ba27e430e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '25f31af5a5590b9139e9c396ca08104ebff31919facd05626460e049aa6cbcef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24012, hash: '8162ab79f5cccae3e9b19c74419c2ffea8a349d179bbf91bd7ae62581e0f3778', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2FRZ2UVK.css': {size: 15129, hash: 'UZqCVX8nrso', text: () => import('./assets-chunks/styles-2FRZ2UVK_css.mjs').then(m => m.default)}
  },
};
