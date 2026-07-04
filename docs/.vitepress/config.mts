import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ai-code-reviewer/',
  head: [
    ['meta', { name: 'theme-color', content: '#6366f1' }],
  ],
  locales: {
    root: {
      description: 'AI-powered intelligent code reviewer — multi-dimensional semantic analysis, five-tier severity classification',
      label: 'English',
      lang: 'en',
      themeConfig: {
        darkModeSwitchLabel: 'Theme',
        docFooter: { next: 'Next', prev: 'Previous' },
        editLink: {
          pattern: 'https://github.com/saqqdy/ai-code-reviewer/edit/master/docs/:path',
          text: 'Edit this page on GitHub',
        },
        footer: { copyright: 'Copyright © 2024-present saqqdy', message: 'MIT License' },
        lastUpdated: { text: 'Updated at' },
        nav: [
          { activeMatch: '/guide/', link: '/guide/', text: 'Guide' },
          { activeMatch: '/api/', link: '/api/', text: 'API' },
          { items: [
            { link: 'https://github.com/saqqdy/ai-code-reviewer', text: 'GitHub' },
            { link: 'https://www.npmjs.com/package/ai-code-reviewer', text: 'NPM' },
          ], text: 'Links' },
        ],
        outline: { label: 'On this page' },
        sidebar: {
          '/api/': [
            { items: [{ link: '/api/', text: 'Overview' }], text: 'API Reference' },
            { collapsed: false, items: [
              { link: '/api/collect-diff', text: 'collectDiff()' },
              { link: '/api/detect-project', text: 'detectProject()' },
              { link: '/api/format-finding', text: 'formatFinding()' },
            ], text: 'Functions' },
            { collapsed: false, items: [
              { link: '/api/types/parsed-diff', text: 'ParsedDiff' },
              { link: '/api/types/project-info', text: 'ProjectInfo' },
              { link: '/api/types/review-finding', text: 'ReviewFinding' },
            ], text: 'Types' },
          ],
          '/guide/': [
            { items: [
              { link: '/guide/', text: 'Introduction' },
              { link: '/guide/installation', text: 'Installation' },
              { link: '/guide/quick-start', text: 'Quick Start' },
              { link: '/guide/roadmap', text: 'Roadmap' },
            ], text: 'Getting Started' },
            { items: [
              { link: '/guide/skill-commands', text: 'Skill Commands' },
              { link: '/guide/configuration', text: 'Configuration' },
            ], text: 'Features' },
          ],
        },
      },
      title: 'AI Code Reviewer',
    },
    zh: {
      description: 'AI 智能代码审查 — 多维度语义分析，五级严重性分类，可执行的修复建议',
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        darkModeSwitchLabel: '主题',
        docFooter: { next: '下一页', prev: '上一页' },
        editLink: {
          pattern: 'https://github.com/saqqdy/ai-code-reviewer/edit/master/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        footer: { copyright: '版权所有 © 2024-present saqqdy', message: '基于 MIT 许可发布' },
        lastUpdated: { text: '最后更新' },
        nav: [
          { activeMatch: '/zh/guide/', link: '/zh/guide/', text: '指南' },
          { activeMatch: '/zh/api/', link: '/zh/api/', text: 'API' },
          { items: [
            { link: 'https://github.com/saqqdy/ai-code-reviewer', text: 'GitHub' },
            { link: 'https://www.npmjs.com/package/ai-code-reviewer', text: 'NPM' },
          ], text: '链接' },
        ],
        outline: { label: '页面导航' },
        sidebar: {
          '/zh/api/': [
            { items: [{ link: '/zh/api/', text: '概览' }], text: 'API 参考' },
            { collapsed: false, items: [
              { link: '/zh/api/collect-diff', text: 'collectDiff()' },
              { link: '/zh/api/detect-project', text: 'detectProject()' },
              { link: '/zh/api/format-finding', text: 'formatFinding()' },
            ], text: '函数' },
            { collapsed: false, items: [
              { link: '/zh/api/types/parsed-diff', text: 'ParsedDiff' },
              { link: '/zh/api/types/project-info', text: 'ProjectInfo' },
              { link: '/zh/api/types/review-finding', text: 'ReviewFinding' },
            ], text: '类型' },
          ],
          '/zh/guide/': [
            { items: [
              { link: '/zh/guide/', text: '介绍' },
              { link: '/zh/guide/installation', text: '安装' },
              { link: '/zh/guide/quick-start', text: '快速上手' },
              { link: '/zh/guide/roadmap', text: '版本路线图' },
            ], text: '开始' },
            { items: [
              { link: '/zh/guide/skill-commands', text: 'Skill 命令' },
              { link: '/zh/guide/configuration', text: '配置' },
            ], text: '功能' },
          ],
        },
      },
      title: 'AI Code Reviewer',
    },
  },
  sitemap: { hostname: 'https://saqqdy.github.io/ai-code-reviewer' },
  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    siteTitle: 'AI Code Reviewer',
    socialLinks: [{ icon: 'github', link: 'https://github.com/saqqdy/ai-code-reviewer' }],
  },
})
