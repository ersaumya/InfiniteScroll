import { InjectionToken } from '@angular/core';
import { IConfig } from './IConfig';

export const APP_CONFIG = new InjectionToken<IConfig>('config');
