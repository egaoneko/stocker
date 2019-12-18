const {
  TEMPLATES_PATH,
  PACKAGE_ROOT_PATH,
} = require('./constant');
const {
  genAutocompletePrompt,
  genModuleInputPrompt,
  genClassInputPrompt,
} = require('./utils/prompt');
const {
  readDir,
} = require('./utils/file');
module.exports = (plop) => {
  plop.setGenerator('use-case', {
    description: 'Create use-case in package',
    prompts: [
      genModuleInputPrompt(
        'module',
        'Please input module(ex: module-name)'
      ),
      genClassInputPrompt(
        'class',
        'Please input class(ex: ClassName)'
      ),
      genAutocompletePrompt(
        'repositoryModule',
        'Please choice repository module',
        (answer, input) => new Promise((resolve) => {
          input = input || '';
          const source = readDir(`${PACKAGE_ROOT_PATH}/core/src/domain/repositories`)
            .filter(file => !file.endsWith('.ts'));
          if (!input) {
            resolve(source);
          } else {
            resolve(source.filter((value) => value.toLowerCase().indexOf(input.toLowerCase()) > -1));
          }
        }),
      ),
      genAutocompletePrompt(
        'repositoryClass',
        'Please choice repository class',
        (answer, input) => new Promise((resolve) => {
          input = input || '';
          const source = readDir(`${PACKAGE_ROOT_PATH}/core/src/domain/repositories/${answer.repositoryModule}`)
            .filter(file => file.endsWith('.ts'))
            .map(file => file.replace('.ts', ''));
          if (!input) {
            resolve(source);
          } else {
            resolve(source.filter((value) => value.toLowerCase().indexOf(input.toLowerCase()) > -1));
          }
        }),
      ),
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
