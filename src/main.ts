import { ConfigValues } from './application/interfaces'
import { AppKernel } from './application/kernel'
import { Config } from './application/modules'
;(async function main() {
    let configValues: ConfigValues

    try {
        const env = process.env.NODE_ENV || 'default'
        configValues = require(`./configuration/${env}`).default
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

    const config = new Config(configValues)
    const kernel = new AppKernel(config)

    process.on('SIGTERM', kernel.shutdown.bind(kernel))
    process.on('SIGINT', kernel.shutdown.bind(kernel))

    try {
        await kernel.boot()
    } catch (error) {
        console.error(error)
        process.exit(2)
    }

    try {
        await kernel.serve()
    } catch (error) {
        console.error(error)
        process.exit(3)
    }
})()
