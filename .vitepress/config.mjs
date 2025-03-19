import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs"; // 自动生成侧边栏

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  title: "赵德玉的AZ文档",
  description: "一个个人工作学习博客",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    outline: 'deep',
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页',items:[
        {text:'主页',link:'/'},
        {text:'markdown示例',link:'/markdown-examples'}
      ]},
      { text: '示例', link: '/markdown-examples' },
      { text:'自动生成侧边栏', link: '/front-end/react/' },
      { text:'自动生成侧边栏2', link: '/backend/rabbitmq/' },
    ],
    
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
       "/front-end/react": set_sidebar("front-end/react"),
       "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
     },
    // sidebar: {
    //   "/front-end/react/": [
    //     {
    //       text: "React 相关文档",
    //       items: [
    //         { text: "React 入门", link: "/front-end/react/introduction" },
    //         { text: "React 进阶", link: "/front-end/react/advanced" }
    //       ]
    //     }
    //   ],
    //   "/backend/rabbitmq/": [
    //     {
    //       text: "RabbitMQ 文档",
    //       items: [
    //         { text: "RabbitMQ 基础", link: "/backend/rabbitmq/basic" },
    //         { text: "RabbitMQ 进阶", link: "/backend/rabbitmq/advanced" }
    //       ]
    //     }
    //   ]
    // },
    aside: "left", // 右侧侧边栏改到左侧
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhaodeyu822' }
    ],
    footer: {
      copyright: "Copyright © 2025 Albert Zhao", // 使用标准版权符号 ©
    },
  }

})
