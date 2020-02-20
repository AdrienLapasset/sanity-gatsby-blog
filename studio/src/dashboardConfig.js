export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4e739f7c413828d5ada203',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f6gn3jh1',
                  apiId: 'bb080599-6b56-4d13-a572-1a8ad016166c'
                },
                {
                  buildHookId: '5e4e739f09804b3b0bf1e440',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gs49cymk',
                  apiId: 'cc0bfb59-8983-4aae-b980-508671939a27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdrienLapasset/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gs49cymk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
