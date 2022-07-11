const { awscdk } = require('projen');
const { ReleaseTrigger } = require('projen/lib/release');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Momo Kornher',
  authorAddress: 'mail@moritzkornher.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@mrgrain/new-project-test',
  repositoryUrl: 'https://github.com/mrgrain/new-project-test.git',
  releaseTrigger: ReleaseTrigger.manual(),
});
project.synth();