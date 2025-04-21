import { developmentConfig } from "./development";
import { productionConfig } from './production'
import { testConfig } from './test'

export const environments = new Map([
    ['development', developmentConfig],
    ['test', testConfig],
    ['production', productionConfig]
])