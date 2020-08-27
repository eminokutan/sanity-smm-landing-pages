export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f47f43674c16d834a4ef5d8',
                  title: 'Sanity Studio',
                  name: 'sanity-smm-landing-pages-studio',
                  apiId: 'be0ed7d5-2611-47bd-89a0-7e7eaba6b8a0'
                },
                {
                  buildHookId: '5f47f436a886c366b235a541',
                  title: 'Landing pages Website',
                  name: 'sanity-smm-landing-pages',
                  apiId: '7873278f-dfb8-4ef0-9464-09a81b9586ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eminokutan/sanity-smm-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-smm-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
