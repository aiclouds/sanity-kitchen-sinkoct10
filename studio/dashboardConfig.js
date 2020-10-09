export default {
  widgets: [
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
                  buildHookId: '5f7ffbec49fb2500d88a67cd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinkoct-10-studio',
                  apiId: '32578ea6-5033-4b00-b8e1-fa714170c437'
                },
                {
                  buildHookId: '5f7ffbec6fb09a011b0e9116',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinkoct-10',
                  apiId: 'ce885e18-980b-4d01-8ca3-9dd863fbfd65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aiclouds/sanity-kitchen-sinkoct10',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinkoct-10.netlify.app', category: 'apps'}
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
