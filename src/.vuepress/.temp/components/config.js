import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/GitHubRepository/aisi-coding/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/GitHubRepository/aisi-coding/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import ArtPlayer from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import CodePen from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import VidStack from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";
import Share from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import PDF from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import BiliBili from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import SiteInfo from "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "D:/GitHubRepository/aisi-coding/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
