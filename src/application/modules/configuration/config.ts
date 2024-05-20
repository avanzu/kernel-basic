import * as Kernel from '@avanzu/kernel'
import { ConfigValues } from '~/application/interfaces'

export class Config implements Kernel.Configuration<ConfigValues> {
    constructor(protected values: ConfigValues) {}

    get<P extends keyof ConfigValues>(key: P): ConfigValues[P] {
        if (!(key in this.values)) {
            throw new Error(`Key ${key} is not configured`)
        }
        return this.values[key]
    }
}