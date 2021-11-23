#!/usr/bin/env node

const fs = require('fs');

const inline = require('./inline');
const inlineWithVersion = require('./inline-with-version');
const listOnly = require('./list-only');

const inline_arg = process.argv.filter((arg) => ([].includes(arg))).toString();
const list_arg = process.argv.filter((arg) => (['-list', '-l'].includes(arg))).toString();
const inline_with_version_arg = process.argv.filter((arg) => (['-inline', '-i'].includes(arg))).toString();

async function main() {
  try {
    const is_package_json = fs.existsSync('./package.json');

    if (is_package_json) {
      var package = fs.readFileSync('./package.json').toString();
      var { dependencies, devDependencies } = JSON.parse(package);

      if (list_arg) {
        listOnly(dependencies, devDependencies);
        return;
      }
      if (inline_with_version_arg) {
        inlineWithVersion(dependencies, devDependencies);
        return;
      }
      if (!inline_arg) {
        inline(dependencies, devDependencies);
        return;
      }

    }

    console.log('no package.json found');

  } catch (err) {
    console.log(err);
  }
};
main();

