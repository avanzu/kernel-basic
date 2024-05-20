import * as Kernel from '@avanzu/kernel'
import type { LoggerOptions } from 'pino'
import type { Options as AJVOptions } from 'ajv'
// declare configuration options that your application needs
export interface ConfigValues extends Kernel.ConfigOptions {
    logger: LoggerOptions
    validation: AJVOptions
}

export interface Configuration extends Kernel.Configuration<ConfigValues> {}