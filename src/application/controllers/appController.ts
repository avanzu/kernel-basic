import * as Kernel from '@avanzu/kernel'
import { Context } from '../interfaces'

@Kernel.Controller()
export class AppController {

    @Kernel.Get('/health')
    async healthCheck(context: Context) {
        context.body = 'OK'
    }
}