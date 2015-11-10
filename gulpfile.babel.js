import gulp from 'gulp';

import initializeTasks from './tasks';
import config from './config/build';

initializeTasks(config, gulp);
