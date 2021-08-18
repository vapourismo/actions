import * as core from '@actions/core';
import {yamlInputs, inputTypeMap} from './opts';
import run from './setup-haskell';

const get = {
  string: core.getInput,
  boolean: core.getBooleanInput,
  'string[]': core.getMultilineInput
} as const;

run(
  Object.fromEntries(
    Object.keys(yamlInputs).map(k => [
      k,
      // Object.fromEntries has a slightly wonky type
      get[inputTypeMap[k as keyof typeof inputTypeMap]](k) as string
    ])
  )
);
