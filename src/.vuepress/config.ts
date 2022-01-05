import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'Frithjof Gressmann',
    description: 'Frithjof Gressmann\'s website',

    // theme and its config
    theme: path.resolve(__dirname, './theme/index.ts'),
    themeConfig: {
        navbar: [
            {
                'text': 'Research',
                'link': 'research.md'
            },
            {
                'text': 'Open Source',
                'link': 'open-source.md'
            },
            {
                'text': 'Contact',
                'link': 'contact.md'
            }
        ],
        sidebar: [{
            'text': '',
            'link': 'README.md',
        }],
        themePlugins: {
            externalLinkIcon: false,
            git: false
        }
    },
})