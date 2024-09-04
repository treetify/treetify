import { defineConfig } from 'vitepress'

import jsonData from '../../versions.json'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一个轻量级的树形插件',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/api/': {
        base: '/api/',
        items: sidebarAPI(),
      },
      '/examples/': {
        base: '/examples/',
        items: sidebarExamples(),
      },
    },

    editLink: {
      pattern: 'https://github.com/ajiho/treeview/tree/main/src/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2022-${new Date().getFullYear()} ajiho`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    notFound: {
      title: '找不到页面',
      quote: '如果你不改变方向，并且一直走下去，你最终会到达现在前进的地方',
      linkLabel: '回到首页',
      linkText: '带我回家',
    },
  },
})

function nav() {
  return [
    {
      text: '指南',
      link: '/guide/what-is-it',
      activeMatch: '/guide/',
    },
    {
      text: 'API',
      link: '/api/options',
      activeMatch: '/api/',
    },
    { text: '例子', link: '/examples', activeMatch: '/examples/' },
    {
      text: jsonData.currently, //版本号,请勿手动更改
      items: [
        {
          text: '变更日志',
          link: 'https://github.com/ajiho/treeview/blob/main/CHANGELOG.md',
          target: '_blank',
        },
        {
          text: '贡献指南',
          link: 'https://github.com/ajiho/treeview/blob/main/.github/CONTRIBUTING.md',
          target: '_blank',
        },
        {
          items: [{ text: '所有版本', link: '/versions' }],
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      items: [
        { text: '什么是treetify？', link: 'what-is-it' },
        { text: '快速开始', link: 'getting-started' },
        { text: '迁移指南', link: 'migrate' },
      ],
    },
  ]
}

function sidebarAPI() {
  return [
    {
      text: 'API',
      items: [
        { text: '选项', link: 'options' },
        { text: '事件', link: 'events' },
        { text: '方法', link: 'methods' },
      ],
    },
  ]
}

function sidebarExamples() {
  return [
    {
      text: '例子',
      items: [
        { text: '例子1', link: 'index#快速开始1' },
        { text: '例子2', link: 'index#快速开始2' },
        { text: '例子3', link: 'index#快速开始2' },
      ],
    },
  ]
}

export const markdown = {
  container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息',
  },
}

export const search = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },

        noResultsText: '无法找到相关结果',
        resetButtonTitle: '重置搜索',
        displayDetails: '显示详情视图',
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
