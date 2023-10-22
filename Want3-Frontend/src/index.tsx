import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'
import { RouterProvider } from 'react-router-dom'
import router from 'routers'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ThirdwebProvider
    supportedWallets={[metamaskWallet()]}
    activeChain={{
      chainId: 1442,
      rpc: ['https://rpc.public.zkevm-test.net'],
      // rpc: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public'],
      //"https://eth-sepolia-public.unifra.io"
      nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
      },
      shortName: 'polygon zkEVM', // Display value shown in the wallet UI
      slug: 'polygon zkEVM', // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: 'polygon zkEVM', // Name of the network
      name: 'polygon zkEVM testnet' // Name of the network
      // shortName: 'sepolia', // Display value shown in the wallet UI
      // slug: 'sepolia', // Display value shown in the wallet UI
      // testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      // chain: 'sepolia', // Name of the network
      // name: 'Sepolia Testnet' // Name of the network
    }}
    clientId="111f3fefbac2fef11f27979f6c078bf8"
    supportedChains={[
      {
        chainId: 1442,
        rpc: ['https://rpc.public.zkevm-test.net'],
        nativeCurrency: {
          decimals: 18,
          name: 'ETH',
          symbol: 'ETH'
        },
        shortName: 'polygon zkEVM', // Display value shown in the wallet UI
        slug: 'polygon zkEVM', // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: 'polygon zkEVM', // Name of the network
        name: 'polygon zkEVM testnet' // Name of the network
      },
      {
        chainId: 3441005,
        rpc: ['https://manta-testnet.calderachain.xyz/http'],
        nativeCurrency: {
          decimals: 18,
          name: 'MANTA',
          symbol: 'MANTA'
        },
        shortName: 'manta', // Display value shown in the wallet UI
        slug: 'manta', // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: 'manta', // Name of the network
        name: 'Manta Testnet' // Name of the network
      },
      {
        chainId: 534351,
        rpc: ['	https://sepolia-rpc.scroll.io/'],
        nativeCurrency: {
          decimals: 18,
          name: 'ETH',
          symbol: 'ETH'
        },
        shortName: 'scroll', // Display value shown in the wallet UI
        slug: 'scroll', // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: 'scroll', // Name of the network
        name: 'Scroll Sepolia Testnet' // Name of the network
      }
    ]}
  >
    <RouterProvider router={router} />
  </ThirdwebProvider>
)
