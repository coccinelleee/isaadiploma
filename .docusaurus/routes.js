import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/isaadiploma/zh-cn/search',
    component: ComponentCreator('/isaadiploma/zh-cn/search', '41e'),
    exact: true
  },
  {
    path: '/isaadiploma/zh-cn/',
    component: ComponentCreator('/isaadiploma/zh-cn/', 'cde'),
    routes: [
      {
        path: '/isaadiploma/zh-cn/',
        component: ComponentCreator('/isaadiploma/zh-cn/', '8b2'),
        routes: [
          {
            path: '/isaadiploma/zh-cn/',
            component: ComponentCreator('/isaadiploma/zh-cn/', '25b'),
            routes: [
              {
                path: '/isaadiploma/zh-cn/about-the-book',
                component: ComponentCreator('/isaadiploma/zh-cn/about-the-book', 'd44'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/afterword',
                component: ComponentCreator('/isaadiploma/zh-cn/afterword', '1fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/anonymous-functions',
                component: ComponentCreator('/isaadiploma/zh-cn/anonymous-functions', 'a3d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/arithmetic-operation',
                component: ComponentCreator('/isaadiploma/zh-cn/arithmetic-operation', '142'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/basic-types',
                component: ComponentCreator('/isaadiploma/zh-cn/basic-types', 'dc9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/class-and-instance',
                component: ComponentCreator('/isaadiploma/zh-cn/class-and-instance', '061'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/comprehension-expressions',
                component: ComponentCreator('/isaadiploma/zh-cn/comprehension-expressions', '9c8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/create-and-import-of-modules',
                component: ComponentCreator('/isaadiploma/zh-cn/create-and-import-of-modules', '040'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/create-and-import-packages',
                component: ComponentCreator('/isaadiploma/zh-cn/create-and-import-packages', 'd3a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/custom-exception-classes',
                component: ComponentCreator('/isaadiploma/zh-cn/custom-exception-classes', '58a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/datetime-module',
                component: ComponentCreator('/isaadiploma/zh-cn/datetime-module', '630'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/definition-and-assignment-of-variables',
                component: ComponentCreator('/isaadiploma/zh-cn/definition-and-assignment-of-variables', 'e19'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/definition-and-invocation-of-functions',
                component: ComponentCreator('/isaadiploma/zh-cn/definition-and-invocation-of-functions', 'ccc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/dictionary',
                component: ComponentCreator('/isaadiploma/zh-cn/dictionary', '9b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/for-and-while-statement',
                component: ComponentCreator('/isaadiploma/zh-cn/for-and-while-statement', '0be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/hello-world',
                component: ComponentCreator('/isaadiploma/zh-cn/hello-world', '7e5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/how-to-use-the-book',
                component: ComponentCreator('/isaadiploma/zh-cn/how-to-use-the-book', '2cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/if-statement',
                component: ComponentCreator('/isaadiploma/zh-cn/if-statement', 'c7d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/json-module',
                component: ComponentCreator('/isaadiploma/zh-cn/json-module', 'f12'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/lifelong-learning',
                component: ComponentCreator('/isaadiploma/zh-cn/lifelong-learning', 'ad2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/lists-and-tuples',
                component: ComponentCreator('/isaadiploma/zh-cn/lists-and-tuples', '85e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/math-module',
                component: ComponentCreator('/isaadiploma/zh-cn/math-module', 'e31'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/naming-rules-for-variables',
                component: ComponentCreator('/isaadiploma/zh-cn/naming-rules-for-variables', 'b90'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/os-module',
                component: ComponentCreator('/isaadiploma/zh-cn/os-module', '089'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/pip',
                component: ComponentCreator('/isaadiploma/zh-cn/pip', 'd34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/poetry',
                component: ComponentCreator('/isaadiploma/zh-cn/poetry', '784'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/random-module',
                component: ComponentCreator('/isaadiploma/zh-cn/random-module', '51c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/re-module',
                component: ComponentCreator('/isaadiploma/zh-cn/re-module', '94e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/read-and-write-files',
                component: ComponentCreator('/isaadiploma/zh-cn/read-and-write-files', '218'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/references',
                component: ComponentCreator('/isaadiploma/zh-cn/references', 'a60'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/set',
                component: ComponentCreator('/isaadiploma/zh-cn/set', '182'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/setup-environment',
                component: ComponentCreator('/isaadiploma/zh-cn/setup-environment', '963'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/task-book-store',
                component: ComponentCreator('/isaadiploma/zh-cn/task-book-store', '82d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/task-list-files',
                component: ComponentCreator('/isaadiploma/zh-cn/task-list-files', '241'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/task-top-50-in-github',
                component: ComponentCreator('/isaadiploma/zh-cn/task-top-50-in-github', 'b75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/third-party-packages',
                component: ComponentCreator('/isaadiploma/zh-cn/third-party-packages', '4ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/try-except-statements',
                component: ComponentCreator('/isaadiploma/zh-cn/try-except-statements', 'a44'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/type-conversion',
                component: ComponentCreator('/isaadiploma/zh-cn/type-conversion', 'cb0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/typing-annotation',
                component: ComponentCreator('/isaadiploma/zh-cn/typing-annotation', 'e7b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/venv-and-conda-and-condaip',
                component: ComponentCreator('/isaadiploma/zh-cn/venv-and-conda-and-condaip', '509'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/isaadiploma/zh-cn/',
                component: ComponentCreator('/isaadiploma/zh-cn/', '3da'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
