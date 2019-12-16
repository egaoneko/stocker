const {
  TEMPLATES_PATH,
  PACKAGES
} = require('./constant');
module.exports = (plop) => {
  plop.setGenerator('repository', {
    description: 'Create repository in package',
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: ['interface', 'class'],
        message: 'Please choice type'
      },
      {
        type: 'list',
        name: 'package',
        choices: PACKAGES,
        message: 'Please choice package'
      },
      {
        type: 'list',
        name: 'layer',
        choices: ['domain', 'data'],
        message: 'Please choice layer'
      },
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
        name: 'parentLayer',
        choices: ['domain', 'data'],
        message: 'Please choice parent Layer'
      },
      {
        type: 'input',
        name: 'parentModule',
        message: 'Please input parent module(ex: module-name)',
      },
      {
        type: 'input',
        name: 'parentClass',
        default: 'Repository',
        message: 'Please input parent class(ex: ClassName)'
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: 'add',
        path: `packages/{{package}}/src/{{layer}}/repositories/{{module}}/{{class}}.ts`,
        templateFile: `${TEMPLATES_PATH}/repository/repository.hbs`,
        abortOnFail: true
      });

      if (data.type === 'class') {
        actions.push({
          type: 'add',
          path: `packages/{{package}}/__tests__/{{layer}}/repositories/{{module}}/{{class}}.spec.ts`,
          templateFile: `${TEMPLATES_PATH}/repository/repository-spec.hbs`,
          abortOnFail: true
        });
      }

      if (data.package === 'core') {
        actions.push({
          type: 'add',
          path: `packages/{{package}}/__mocks__/{{module}}/{{class}}.ts`,
          templateFile: `${TEMPLATES_PATH}/repository/repository-mock.hbs`,
          abortOnFail: true
        });
      }

      return actions;
    }
  });
};
