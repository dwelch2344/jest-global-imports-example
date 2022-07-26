import type { Config } from '@jest/types';
import Chance from 'chance';
const chance = new Chance();
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  // [...]
  globals: {
    chance
    // 'ts-jest': {
    //   compiler: 'ttypescript'
    // }
  }
};
export default config;