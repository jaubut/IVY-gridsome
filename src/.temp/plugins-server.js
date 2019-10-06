import plugin_gridsome_plugin_google_analytics_5 from "/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_7 from "/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_9 from "/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_google_analytics_5,
    options: {"id":"UA-149485074-1"}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/templates/index.html","publicPath":"/admin","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_9,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/jeremieaubut/GitHub/IVY-gridsome/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]
