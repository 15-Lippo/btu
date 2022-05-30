import { ChainId } from '@dexs/sdk'
import MULTICALL_ABI from './abi.json'


const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.HARMONY]: '0xdfF73dA7cC9e8DbAA77998F81E7AcB4D7384d88B',
  [ChainId.RINKEBY]: '0x8c9E7447ABE0607a610a1C3E7cCC1A7B51f729C2',
  [ChainId.HARMONY_TESTNET]: '0x4122Ac56767382fA7b2BfbdCC62D6aeDF8D4cE32'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
