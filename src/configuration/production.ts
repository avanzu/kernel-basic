import { ConfigValues } from '~/application/interfaces'
import defaults from './development'

const productionConfig: ConfigValues = {
    ...defaults
}

export default productionConfig