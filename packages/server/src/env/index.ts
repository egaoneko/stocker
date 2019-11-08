import { ENVIRONMENT } from '../const';
import { Env } from '../interfaces/env';
import real from './real';
import dev from './dev';

let env: Env = {
};

if (ENVIRONMENT === 'production') {
  env = {
    ...env,
    ...real,
  };
} else {
  env = {
    ...env,
    ...dev,
  };
}

export default env;