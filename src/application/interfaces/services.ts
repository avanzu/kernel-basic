import * as Kernel from '@avanzu/kernel'
import { Configuration } from './configuration'
import type Ajv from 'ajv'
// declare services that will be managed by your DIC to help with type safety during development
export interface Services extends Kernel.AppServices {
    appLogger: Kernel.Logger,
    appConfig: Configuration,
    ajv: Ajv,
    validator: Kernel.AJVValidator
}
