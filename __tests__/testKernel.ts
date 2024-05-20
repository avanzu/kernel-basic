import { asValue } from 'awilix'
import { Configuration, Services } from '~/application/interfaces'
import { AppKernel } from '~/application/kernel'

export class TestKernel extends AppKernel {
    constructor(
        options: Configuration,
        protected mocks: Partial<Services> = {}
    ) {
        super(options)
    }

    protected async buildContainer(): Promise<void> {
        await super.buildContainer()

        for (let [name, mock] of Object.entries(this.mocks)) {
            this.container.register(
                name,
                asValue(() => mock)
            )
        }
    }
}
