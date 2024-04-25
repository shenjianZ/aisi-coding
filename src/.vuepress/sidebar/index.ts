import { sidebar ,arraySidebar} from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
    "/project/project-template/":  arraySidebar([
        "/",
        "frontend",
        "backend",
    ]),
    "/other/book": "structure",
    "/bigdata/flume/": "structure",
    "/Middleware/git": "structure",
    "/front/vue": "structure",
    "java/JavaWeb": "structure",
})
