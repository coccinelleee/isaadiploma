import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/python-guide-for-javascript-engineers/zh-cn/search',
    component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/search', 'e1b'),
    exact: true
  },
  {
    path: '/python-guide-for-javascript-engineers/zh-cn/',
    component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/', '961'),
    routes: [
      {
        path: '/python-guide-for-javascript-engineers/zh-cn/',
        component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/', '1b1'),
        routes: [
          {
            path: '/python-guide-for-javascript-engineers/zh-cn/',
            component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/', '008'),
            routes: [
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/about-the-book',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/about-the-book', 'b89'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/afterword',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/afterword', '14f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/anonymous-functions',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/anonymous-functions', '319'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/arithmetic-operation',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/arithmetic-operation', 'ae5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/basic-types',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/basic-types', 'c29'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/class-and-instance',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/class-and-instance', 'b4d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/comprehension-expressions',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/comprehension-expressions', '663'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/create-and-import-of-modules',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/create-and-import-of-modules', '676'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/create-and-import-packages',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/create-and-import-packages', 'df1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/custom-exception-classes',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/custom-exception-classes', '0f0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/datetime-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/datetime-module', '9ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/definition-and-assignment-of-variables',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/definition-and-assignment-of-variables', 'e50'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/definition-and-invocation-of-functions',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/definition-and-invocation-of-functions', '70e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/dictionary',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/dictionary', 'd04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/for-and-while-statement',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/for-and-while-statement', 'efd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/hello-world',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/hello-world', '57f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/how-to-use-the-book',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/how-to-use-the-book', 'dc4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/if-statement',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/if-statement', 'a4e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/json-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/json-module', '6ab'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/lifelong-learning',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/lifelong-learning', '690'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/lists-and-tuples',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/lists-and-tuples', 'a1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/math-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/math-module', '857'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/naming-rules-for-variables',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/naming-rules-for-variables', '303'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/os-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/os-module', '8e9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/pip',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/pip', '4a2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/poetry',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/poetry', 'cd9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/random-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/random-module', 'd78'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/re-module',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/re-module', '97f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/read-and-write-files',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/read-and-write-files', '2f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/references',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/references', '6ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/set',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/set', 'e04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/setup-environment',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/setup-environment', '09d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/task-book-store',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/task-book-store', 'a53'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/task-list-files',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/task-list-files', 'c8c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/task-top-50-in-github',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/task-top-50-in-github', '62c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/third-party-packages',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/third-party-packages', 'b40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/try-except-statements',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/try-except-statements', 'b9d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/type-conversion',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/type-conversion', '4e8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/typing-annotation',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/typing-annotation', '000'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/venv-and-conda-and-condaip',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/venv-and-conda-and-condaip', 'e81'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/python-guide-for-javascript-engineers/zh-cn/',
                component: ComponentCreator('/python-guide-for-javascript-engineers/zh-cn/', '713'),
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
