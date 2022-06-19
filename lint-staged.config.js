module.exports = {
  './src/**/*{.ts,.js}': ['prettier --write'],
  // Compiles all TypeScript without emitting JS files to
  // check for type errors. This is specified in a separate file
  // so that lint-staged doesn't pass any arguments to tsc
  'src/**/*.ts': () => 'yarn check-types',
  './src/**/*{.ts,.tsx}': ['yarn lint']
}
