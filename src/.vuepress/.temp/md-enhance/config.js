import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEchartsConfig } from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/katex/dist/katex.min.css";
import "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEchartsConfig(app);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
