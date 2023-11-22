const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Randy Ridgley',
  authorAddress: 'rridgley@amazon.com',
  defaultReleaseBranch: 'main',
  name: 'projen-templates',
  repositoryUrl: 'https://github.com/rridgley/projen-templates.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();