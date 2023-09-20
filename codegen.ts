import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clmrg75z81tlc01t98nra1ufp/master',
  documents: 'src/**/*.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: []
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
