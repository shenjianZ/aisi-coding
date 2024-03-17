import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "大数据指南",
        icon: "bigdata",
        prefix: "/bigdata/",
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
                link: "zookeeper/",
            }
        ],
    },
    {
        text: "Java后端",
        icon: "java",
        prefix: "/java/",
        link: "https://theme-hope.vuejs.press/zh/",

        children: [
            {
                text: "Java SE",
                icon: "java",
                children: [
                    {
                        text: "Java基础",
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
        link: "",
        children: [
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
        icon: "project.ts",
        prefix: "/project/",
        link: "project/README.md",
        children:[
            {
                text: "baseTemplate",
                icon: "baseTemplate",
                link: "project-template/",
            }
        ]
    },
    {
        text: "其他",
        icon: "other",
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
                link: "other/go/",
            }
        ]
    }
]);
