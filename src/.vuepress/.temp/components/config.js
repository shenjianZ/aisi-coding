import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/GitHubRepository/aisi-coding/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "D:/GitHubRepository/aisi-coding/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [

  ],
});
