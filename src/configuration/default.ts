import { ConfigValues } from "~/application/interfaces";

export const defaultConfig: ConfigValues = {
    host: '0.0.0.0',
    port: 3000,
    namespace: '',
    logger: {
        level: 'debug',
        messageKey: 'message'
    },
    validation: {
        allErrors: true,
        coerceTypes: true
    }
}

export default defaultConfig