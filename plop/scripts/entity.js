const {
  TEMPLATES_PATH,
  PACKAGES
} = require('./constant');
module.exports = (plop) => {
  plop.setGenerator('entity', {
    description: 'Create entity in package',
    prompts: [
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
        type: 'input',
        name: 'parent',
        default: 'Entity',
        message: 'Please input parent(ex: path/ClassName)'
      },
    ],
    actions: [
      {
        type: 'add',
        path: `packages/{{package}}/src/{{layer}}/entities/{{module}}/{{class}}.ts`,
        templateFile: `${TEMPLATES_PATH}/entity/entity.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `packages/{{package}}/__tests__/{{layer}}/entities/{{module}}/{{class}}.spec.ts`,
        templateFile: `${TEMPLATES_PATH}/entity/entity-spec.hbs`,
        abortOnFail: true
      },
    ]
  });
};
