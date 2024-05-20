import * as Kernel from '@avanzu/kernel'
import { asValue } from 'awilix'
import { Configuration } from '../interfaces'

import '~/application/controllers'

export class ContainerBuilder implements Kernel.ContainerBuilder<Kernel.Container> {

    constructor(protected options: Configuration, protected logger: Kernel.Logger) {}

    async build(container: Kernel.Container): Promise<void> {
        // register dependencies as usual in awilix
        container.register('appLogger', asValue(this.logger))
        container.register('appConfig', asValue(this.options))
    }
}