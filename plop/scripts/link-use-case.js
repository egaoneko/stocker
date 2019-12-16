const {
  TEMPLATES_PATH,
  PACKAGES,
} = require('./constant');
module.exports = (plop) => {
  plop.setGenerator('link-use-case', {
    description: 'Link use-case to repository',
    prompts: [
      {
        type: 'input',
        name: 'module',
        message: 'Please input module(ex: module-name)',
        validate: (input) => {
          return !!input || 'module can not be empty'
        }
      },
      {
        type: 'input',
        name: 'class',
        message: 'Please input class(ex: ClassName)',
        validate: (input) => {
          return !!input || 'class can not be empty'
        }
      },
      {
        type: 'list',
        name: 'repositoryPackage',
        choices: PACKAGES,
        message: 'Please choice repository package'
      },
      {
        type: 'list',
        name: 'repositoryLayer',
        choices: ['domain', 'data'],
        message: 'Please choice repository layer'
      },
      {
        type: 'input',
        name: 'repositoryModule',
        message: 'Please input repository module(ex: module-name)',
        validate: (input) => {
          return !!input || 'class can not be empty'
        }
      },
      {
        type: 'input',
        name: 'repositoryClass',
        message: 'Please input repository class(ex: ClassName)',
        validate: (input) => {
          return !!input || 'class can not be empty'
        }
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: 'modify',
        path: `packages/{{repositoryPackage}}/src/{{repositoryLayer}}/repositories/{{repositoryModule}}/{{repositoryClass}}.ts`,
        pattern: /(\/\/ --ADD_METHOD--)/gi,
        template: data.repositoryPackage === 'core' ?
          '{{camelCase class}}(prop: any): Observable<any>;\r\n\n  $1' :
          'public {{camelCase class}}(prop: any): Observable<any> {\n    return of(null);\n  }\r\n\n  $1',
        abortOnFail: true
      });

      if (data.repositoryPackage === 'core') {
        actions.push({
          type: 'modify',
          path: `packages/{{repositoryPackage}}/__mocks__/{{repositoryModule}}/{{repositoryClass}}.ts`,
          pattern: /(\/\/ --ADD_METHOD--)/gi,
          template: `export const mock{{class}} = jest.fn().mockImplementation((prop: any): Observable<any> => {
  return of(null);
});
$1`,
          abortOnFail: true
        });

        actions.push({
          type: 'modify',
          path: `packages/{{repositoryPackage}}/__mocks__/{{repositoryModule}}/{{repositoryClass}}.ts`,
          pattern: /(\/\/ --APPLY_METHOD--)/gi,
          template: `{{camelCase class}}: mock{{class}},\n    $1`,
          abortOnFail: true
        });
      }

      return actions;
    }
  });
};
