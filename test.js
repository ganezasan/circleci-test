var shell = require('shell');

const IS_PULL_REQUEST =
  process.env.CI_PULL_REQUEST || process.env.CIRCLE_PULL_REQUEST;

if (IS_PULL_REQUEST) {
  shell.echo('Skipping deploy on a pull request');
  shell.exit(0);
}
