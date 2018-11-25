module.exports = {
    title: 'QZ5Z Oauth2.0',
    description: '五中人开放授权平台 使用说明',
    base: '/oauth2/',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Example',
                link: '/example/'
            },
        ],
        sidebar: {
            '/guide/': [
                '',
                'steps'
            ],
            '/example/': [
                ''
            ],
        },
        repo: 'Q5CS/Oauth_Doc',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    }
}