import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

const pages = [
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
]

const links = [
    {
        'text': 'CV',
        'link': 'https://drive.google.com/file/d/1NAvtlORsC4J1961VoOO6FLPN2V1FHUZk/view?usp=sharing'
    },
    {
        'text': 'Google Scholar',
        'link': 'https://scholar.google.com/citations?user=n8fv7j4AAAAJ'
    },
    {
        'text': 'GitHub',
        'link': 'https://github.com/frthjf'
    },
    {
        'text': 'LinkedIn',
        'link': 'https://www.linkedin.com/in/frithjof-gressmann-6a1606229/'
    },
]

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: links,
        sidebar: false,
        // sidebar: [{
        //     'text': '',
        //     'children': links,
        //     'link': 'README.md',
        // }],
        themePlugins: {
            git: false
        }
    }),

    lang: 'en-US',
    title: 'Frithjof Gressmann',
    description: 'Frithjof Gressmann\'s website',
})