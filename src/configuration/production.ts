import { ConfigValues } from '~/application/interfaces'
import defaults from './development'

export const productionConfig: ConfigValues = {
    ...defaults
}

export default productionConfig