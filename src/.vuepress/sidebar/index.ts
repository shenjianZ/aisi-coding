import {sidebar, arraySidebar} from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({

        "/": [
            {
                text: "课程",
                children: [
                    "other/book/",
                ],
            }
        ],

        // bigdata-------------------------------------------------------------------------
        "/bigdata/flume/": "structure",
        "/bigdata/hadoop/": "structure",
        "/bigdata/hive/": "structure",
        "/bigdata/zookeeper/": "structure",


        // java----------------------------------------------------------------------------
        "/java/basic/": "structure",
        "/java/JavaWeb/": "structure",
        "/java/juc/": "structure",
        "/java/jvm/": "structure",
        "/java/newFeatures/": "structure",
        "/java/nio/": "structure",
        "/java/SpringBoot/": "structure",
        "/java/SpringCloud/": "structure",
        "/java/SpringMVC/": "structure",
        "/java/SpringSecurity/": "structure",


        // frontend-----------------------------------------------------------------------
        "/frontend/htmlCss": "structure",
        "/frontend/javascript": "structure",
        "/frontend/nodejs": "structure",
        "/frontend/react": "structure",
        "/frontend/typescript": "s" +
            "tructure",
        "/frontend/vue": "structure",


        // Middleware---------------------------------------------------------------------
        "/Middleware/docker/": "structure",
        "/Middleware/git/": "structure",
        "/Middleware/git/linux": "structure",
        "/Middleware/mysql/": "structure",
        "/Middleware/nginx/": "structure",
        "/Middleware/redis/": "structure",


        // other--------------------------------------------------------------------------
        "/other/book/": "structure",

        "/other/interview/": "structure",
        "/other/go/": "structure",


        // project------------------------------------------------------------------------
        "/other/project-template/": "structure",
    }
)
