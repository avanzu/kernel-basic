import * as esbuild from 'esbuild'

let result = await esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'build/service.js',
  sourcemap: true,
  platform: 'node'
})

// console.log(result)

if(result.errors.length){
  result.errors.forEach((e) => console.error(e))
  process.exit(1)
}

if(result.warnings.length) {
  result.warnings.forEach((e) => console.warn(e))
}
