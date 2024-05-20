import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

import suiteConfig from './jest.config'


const jestUnitConfig: JestConfigWithTsJest = {
    ...suiteConfig,
    testMatch: ['<rootDir>/__tests__/**/*.test.ts', '<rootDir>/src/**/*.test.ts'],
}

export default jestUnitConfig
