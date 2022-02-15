export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '620bebaeedb15800a3ea1eac',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kjdu9igy',
                  apiId: 'c00b10d6-64eb-49e0-8ba4-70eb61623efc'
                },
                {
                  buildHookId: '620bebae5d394800ae9d2b6c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qfreefjg',
                  apiId: 'fb4f25bb-9848-40de-af71-75b70d34e8a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HenryAmm/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qfreefjg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
