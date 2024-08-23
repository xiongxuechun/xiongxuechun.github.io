import {navbar} from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
    {text: "导航", icon: "fa6-solid:bars", link: "/index"},
    {text: "个人博客", icon: "fa6-solid:blog", link: "/blog"},

    {
        text: "Java",
        prefix: "/",
        children: [
            {
                text: "Java 基础",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "面向对象基础",
                        link: "apps/topic/",
                    },
                    {
                        text: "基础知识体系",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "Java进阶 - 集合框架",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "Java 集合框架详解",
                        link: "apps/topic/",
                    }
                ],
            },

            {
                text: "Java进阶 - 并发",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "Java 并发知识体系",
                        link: "apps/topic/",
                    },
                    {
                        text: "Java 并发理论基础",
                        link: "apps/topic/",
                    },
                    {
                        text: "Java 并发线程",
                        link: "apps/topic/",
                    },
                    {
                        text: "J.U.C 知识体系",
                        link: "apps/topic/",
                    },
                    {
                        text: "Java 并发编程实战",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "Java进阶 - IO模型",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "Java IO知识体系",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "Java进阶 - JVM",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "JVM 知识体系",
                        link: "apps/topic/",
                    }
                ],
            },
        ],
    },
    {
        text: "算法",
        prefix: "/family/",
        children: [
            {
                text: "算法基础",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "数据结构知识体系",
                        link: "apps/topic/",
                    },
                    {
                        text: "常见算法",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "AI 算法",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "图像算法",
                        link: "apps/topic/",
                    },
                    {
                        text: "NLP",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "框架",
        prefix: "/family/",
        children: [
            {
                text: "Spring 框架知识体系",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "Spring框架组成",
                        link: "apps/topic/",
                    },
                    {
                        text: "AOP",
                        link: "apps/topic/",
                    },
                    {
                        text: "IOC",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "Spring Boot框架",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "集成",
                        link: "apps/topic/",
                    },
                    {
                        text: "特性",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "中间件",
        prefix: "/family/",
        children: [
            {
                text: "消息队列",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "Kafka",
                        link: "apps/topic/",
                    },
                    {
                        text: "RocketMQ",
                        link: "apps/topic/",
                    },
                    {
                        text: "RabbitMQ",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "数据库",
        prefix: "/family/",
        children: [
            {
                text: "SQL 数据库",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "MySQL 数据库",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "No SQL 数据库",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    },
                    {
                        text: "MongoDB",
                        link: "apps/topic/",
                    },
                    {
                        text: "Redis",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "架构设计",
        prefix: "/family/",
        children: [
            {
                text: "分布式系统",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "MySQL 数据库",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "微服务系统架构设计",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "项目实战",
        prefix: "/family/",
        children: [
            {
                text: "电商项目",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "MySQL 数据库",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "支付项目",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "工具",
        icon: "fa6-solid:toolbox",
        children: [
            {
                text: "ChatGPT SC",
                icon: "fa6-solid:bolt",
                link: "https://www.aishort.top/",
            },
            {text: "IMGPrompt", icon: "fa6-solid:image", link: "https://prompt.newzone.top/"},
            {text: "多语言翻译", icon: "fa6-solid:language", link: "https://tools.newzone.top/json-translate"},
            {
                text: "工具收藏",
                icon: "fa6-solid:bars",
                link: "https://nav.newzone.top/",
            },
        ],
    },
    {
        text: "产品|团队 思维",
        prefix: "/family/",
        children: [
            {
                text: "技术之外",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "MySQL 数据库",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "产品思考",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "个人成长",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
    {
        text: "关于",
        prefix: "/family/",
        children: [
            {
                text: "关于作者",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "MySQL 数据库",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "读书分享",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            },
            {
                text: "更新历史",
                icon: "",
                prefix: "",
                children: [
                    {
                        text: "ElasticSearch",
                        link: "apps/topic/",
                    }
                ],
            }
        ],
    },
]);
