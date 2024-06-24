import {git, navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "大数据指南",
        icon: "bigdata",
        prefix: "/bigdata/",
        activeMatch: "^/path/(?:(?!hadoop/|hive/|zookeeper/|flume/).*)?$",
        children: [
            {
                text: "Hadoop",
                icon: "hadoop",
                link: "hadoop/"
            },
            {
                text: "Hive",
                icon: "hive",
                link: "hive/",
            },
            {
                text: "ZooKeeper",
                icon: "zookeeper",
                link: "zookeeper/",
            },
            {
                text: "Flume",
                icon: "flume",
                link: "flume/",
            }
        ],
    },
    {
        text: "Java后端",
        icon: "huoduankaifa",
        prefix: "/java/",
        activeMatch: "^/java/$",
        link: "https://theme-hope.vuejs.press/zh/",

        children: [
            {
                text: "Java SE",
                children: [
                    {
                        text: "Java基础",
                        icon: "javaBasic",
                        link: "basic/",
                    },
                    {
                        text: "JVM",
                        link: "jvm/",
                    },
                    {
                        text: "JUC",
                        link: "juc/",
                    },
                    {
                        text: "NIO",
                        link: "nio/",
                    },
                    {
                        text: "new Features",
                        link: "newFeatures/",
                    }
                ]
            },
            {
                text: "Java EE",
                children: [
                    {
                        text: "JavaWeb",
                        icon: "JavaWeb",
                        link: "JavaWeb/",
                    },
                    {
                        text: "SpringMVC",
                        icon: "SpringMVC",
                        link: "SpringMVC/",
                    },
                    {
                        text: "SpringSecurity",
                        icon: "SpringSecurity",
                        link: "SpringSecurity/",
                    },
                    {
                        text: "SpringBoot",
                        icon: "springboot",
                        link: "SpringBoot/",
                    },
                    {
                        text: "SpringCloud",
                        icon: "SpringCloud",
                        link: "SpringCloud/",
                    },
                ]
            }
            ,
        ]
    },
    {
        text: "前端开发",
        icon: "frontend",
        prefix: "/frontend/",
        activeMatch: "^/frontend/$",
        children: [
            {
                text: "Html+Css",
                link: "htmlCss/",
            },
            {
                text: "Javascript",
                link: "javascript/",
            },
            {
                text: "Typescript",
                link: "typescript/",
            },
            {
                text: "NodeJs",
                icon: "NodeJs",
                link: "nodejs/",
            },
            {
                text: "Vue",
                link: "vue/",
            },
            {
                text: "React",
                link: "react/",
            }
        ]
    },
    {
        text: "必备技术",
        icon: "code",
        prefix: "Middleware",
        activeMatch: "^/Middleware/$",
        link: "/Middleware/",
        children: [
            {
                text: "Linux",
                icon: "linux",
                link: "linux/",
            },
            {
                text: "Redis",
                icon: "redis",
                link: "redis/",
            },
            {
                text: "Mysql",
                icon: "mysql",
                link: "mysql/",
            },
            {
                text: "Nginx",
                icon: "nginx",
                link: "nginx/",
            },
            {
                text: "Docker",
                icon: "docker",
                link: "docker/",
            },
            {
                text: "Git",
                icon: "git",
                link: "git/",
            },
        ],
    },
    {
        text: "项目实战",
        icon: "project",
        prefix: "project",
        activeMatch: "^/project/$",
        link: "/project/",
        children:[
            {
                text: "baseTemplate",
                icon: "baseTemplate",
                link: "project-template/",
            },
            {
                text: "retailstore",
                icon: "retailstore",
                link: "retailstore/",
            }
        ]
    },
    {
        text: "其他",
        icon: "other",
        prefix: "/other/",
        activeMatch: "^/other/$",
        children: [
            {
                text: "面试",
                icon: "interview",
                link: "interview/",
            },
            {
                text: "专业课程学习",
                icon: "study",
                link: "book/",
            },
            {
                text: "go",
                icon: "go",
                link: "go/",
            }
        ]
    }
]);
