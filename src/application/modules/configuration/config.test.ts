import { ConfigValues } from "~/application/interfaces"
import { Config } from "./config"

describe('The config class', () => {

    it('should panic when the given config key is not present', () => {
        const config = new Config({} as any)
        expect(() => config.get('host')).toThrow(/Key host is not configured/)
    })

    it('should return the correct config value at the given path', () => {
        const config = new Config({ host: 'localhost', port: 9999 } as ConfigValues)
        expect(config.get('host')).toBe('localhost')
        expect(config.get('port')).toBe(9999)
    })

})