import { ConfigValues } from "~/application/interfaces";

const configValues: ConfigValues = {
    host: '0.0.0.0',
    port: 3000,
    namespace: '',
    resources: {},
    logger: {
        level: 'debug',
        messageKey: 'message'
    },
    validation: {
        allErrors: true,
        coerceTypes: true
    }
}

export default configValues