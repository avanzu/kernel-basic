import * as Kernel from '@avanzu/kernel'
import { asValue, asClass } from 'awilix'
import { Configuration } from '../interfaces'

import '~/application/controllers'
import Ajv from 'ajv'

export class ContainerBuilder implements Kernel.ContainerBuilder<Kernel.Container> {

    constructor(protected options: Configuration, protected logger: Kernel.Logger) {}

    async build(container: Kernel.Container): Promise<void> {
        // register dependencies as usual in awilix
        container.register('appLogger', asValue(this.logger))
        container.register('appConfig', asValue(this.options))
        container.register('ajv', this.ajvSingleton())
        container.register('validator', asClass(Kernel.AJVValidator))
    }

    protected ajvSingleton() {
        const resolver = asClass(Ajv, { lifetime: 'SINGLETON' })
        return resolver.inject(() => ({ opts: this.options.get('validation') }))
    }
}