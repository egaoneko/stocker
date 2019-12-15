const {
  TEMPLATES_PATH,
} = require('./constant');
module.exports = (plop) => {
  plop.setGenerator('use-case', {
    description: 'Create use-case in package',
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
        type: 'input',
        name: 'repositoryModule',
        message: 'Please input repository module(ex: module-name)',
      },
      {
        type: 'input',
        name: 'repositoryClass',
        default: 'Repository',
        message: 'Please input repository class(ex: ClassName)'
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: 'add',
        path: `packages/core/src/domain/use-cases/{{module}}/{{class}}.ts`,
        templateFile: `${TEMPLATES_PATH}/use-case/use-case.hbs`,
        abortOnFail: true
      });

      actions.push({
        type: 'add',
        path: `packages/core/__tests__/domain/repositories/{{module}}/{{class}}.spec.ts`,
        templateFile: `${TEMPLATES_PATH}/use-case/use-case-spec.hbs`,
        abortOnFail: true
      });

      return actions;
    }
  });
};
