import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ChainId } from '@dexs/sdk'

export const defaultSubgraphClient = new ApolloClient({
  uri: 'https://graph.t.hmny.io/subgraphs/name/dexs/test_path_1',
  cache: new InMemoryCache()
})

export const subgraphClients: { [chainId in ChainId]?: ApolloClient<NormalizedCacheObject> | undefined } = {
  [ChainId.MAINNET]: new ApolloClient({
    uri: '',
    cache: new InMemoryCache()
  }),
  [ChainId.RINKEBY]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/agin-dropdisco/gin-rinkeby-data',
    cache: new InMemoryCache()
  }),
  [ChainId.HARMONY]: defaultSubgraphClient,
  [ChainId.HARMONY_TESTNET]: defaultSubgraphClient
}
