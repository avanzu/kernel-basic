import { ConfigValues } from '~/application/interfaces'
import defaults from './default'

const developmentConfig: ConfigValues = {
    ...defaults,
    host: process.env.HOST || defaults.host,
    port: process.env.PORT ? Number(process.env.PORT) : defaults.port,
    namespace: process.env.NAMESPACE || defaults.namespace,
    logger: {
        level: process.env.LOG_LEVEL || defaults.logger.level,
    }
}

export default developmentConfig