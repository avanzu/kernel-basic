import * as Kernel from '@avanzu/kernel'
import { App, Configuration, Container } from './interfaces'
import { ContainerBuilder } from './dependencyInjection'

export class AppKernel extends Kernel.Kernel<Configuration, App, Container> {

    protected createContainerBuilder(): Kernel.ContainerBuilder<Container> {
        return new ContainerBuilder(this.options, this.logger)
    }

    protected createLogger(): Kernel.Logger {
        return new Kernel.PinoLogger({})
    }
}