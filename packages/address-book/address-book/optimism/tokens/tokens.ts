import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const ETH = {
  name: 'Wrapped Ether',
  address: '0x4200000000000000000000000000000000000006',
  symbol: 'WETH',
  decimals: 18,
  chainId: 10,
  website: 'https://weth.io/',
  description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  logoURI: '',
  documentation: 'https://ethereum.org/en/developers/docs/',
} as const;

const _tokens = {
  ETH,
  WETH: ETH,
  WNATIVE: ETH,
  BIFI: {
    name: 'Beefy.Finance',
    symbol: 'BIFI',
    address: '0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642',
    chainId: 10,
    decimals: 18,
    website: 'https://beefy.com',
    description:
      'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
    documentation: 'https://docs.beefy.finance/',
  },
  wUSDR: {
    name: 'Real USD',
    symbol: 'wUSDR',
    address: '0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A',
    chainId: 10,
    decimals: 9,
    website: 'https://www.tangible.store/realusd',
    documentation: 'https://docs.tangible.store/',
    description:
      'Real USD (USDR) is the world’s first stablecoin collateralized by tokenized, yield-producing real estate. USDR has a value accrual system built into its design. Using a consistent stream of dependable yield derived from rental revenue, Real USD delivers a native yield to holders. The token on Optimism is bridged via Multichain from Polygon.',
    logoURI: '',
  },
  beOPX: {
    name: 'Beefy Escrowed OPX',
    symbol: 'beOPX',
    address: '0xEDFBeC807304951785b581dB401fDf76b4bAd1b0',
    chainId: 10,
    decimals: 18,
    website: 'https://www.opx.finance/',
    description:
      'Beefy Escrowed OPX is a liquid staking solution to earn maximum governance rewards from the OPX platform using the highest tier NFT and maximum lock.',
    logoURI: '',
  },
  OPX: {
    name: 'OPX',
    symbol: 'OPX',
    address: '0xcdB4bB51801A1F399d4402c61bC098a72c382E65',
    chainId: 10,
    decimals: 18,
    website: 'https://www.opx.finance/',
    description:
      'OPX is the utility and governance token of the OPX decentralized spot and perpetual exchange that supports low swap fees, zero price impact trades and up to 30x leverage. Locked OPX earns trading fees and upto 35% of platform fees in the form of ETH.',
    logoURI: 'https://app.opx.finance/static/media/logo.0424664f.svg',
  },
  jEUR: {
    name: 'Jarvis Synthetic Euro',
    symbol: 'jEUR',
    address: '0x79AF5dd14e855823FA3E9ECAcdF001D99647d043',
    chainId: 10,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jEUR is a multi-collateralized synthetic token tracking the price of Euro. It is built on the top of UMA and Chainlink.',
    logoURI: 'https://i.imgur.com/ZvP634G.png',
  },
  HOP: {
    name: 'HOP Protocol',
    symbol: 'HOP',
    address: '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC',
    chainId: 10,
    decimals: 18,
    website: 'https://app.hop.exchange',
    description:
      'Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period',
    logoURI: 'https://docs.velodrome.finance/tokens/HOP.svg',
    documentation: 'https://docs.hop.exchange/',
  },
  BEETS: {
    name: 'Beethoven X Token',
    symbol: 'BEETS',
    address: '0x97513e975a7fA9072c72C92d8000B0dB90b163c5',
    chainId: 10,
    decimals: 18,
    website: 'https://beethovenx.io/',
    description:
      'BEETS is the governance token for the Beethoven X protocol. Built on Balancer V2, Beethoven X is the first next-generation AMM protocol on Fantom.',
    logoURI:
      'https://assets.coingecko.com/coins/images/19158/small/beets-icon-large.png?1634545465',
  },
  OP: {
    name: 'Optimism Token',
    symbol: 'OP',
    address: '0x4200000000000000000000000000000000000042',
    chainId: 10,
    decimals: 18,
    website: 'https://app.optimism.io/governance',
    description:
      'Optimistic Rollup is a layer 2 scaling solution that scales both transaction throughput and computation on Ethereum. The backbone of our implementation is the Optimistic Virtual Machine (OVM), which is fully compatible with the EVM.',
    logoURI: '',
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    chainId: 10,
    decimals: 6,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xef4229c8c3250C675F21BCefa42f58EfbfF6002a.svg',
    website: 'https://www.circle.com/usdc',
    documentation: 'https://developers.circle.com/docs',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
  },
  sUSD: {
    name: 'Synth sUSD',
    symbol: 'sUSD',
    address: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
    chainId: 10,
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xef4229c8c3250C675F21BCefa42f58EfbfF6002a.svg',
    website: 'https://www.synthetix.io/',
    description:
      'sUSD is a synthetic USD token enabled by the Synthetix protocol. It tracks the price of the US Dollar through price feeds supplied by Chainlink’s decentralized network of oracles',
  },
  WBTC: {
    chainId: 10,
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    decimals: 8,
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB/logo.png',
  },
  sBTC: {
    chainId: 10,
    address: '0x298B9B95708152ff6968aafd889c6586e9169f1D',
    decimals: 18,
    name: 'Synthetix: sBTC',
    symbol: 'sBTC',
    website: 'https://www.synthetix.io/',
    description:
      'sBTC is a synthetic Bitcoin token enabled by the Synthetix protocol. It tracks the price of Bitcoin through price feeds supplied by Chainlink’s decentralized network of oracles.',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB/logo.png',
  },
  LYRA: {
    chainId: 10,
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    decimals: 18,
    name: 'Lyra Token',
    symbol: 'LYRA',
    website: 'https://www.lyra.finance/',
    description:
      'Lyra’s decentralized exchange is the easiest place to buy and sell options on cryptocurrencies.',
    logoURI: '',
  },
  QI: {
    chainId: 10,
    address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    decimals: 18,
    name: 'Qi Dao',
    symbol: 'QI',
    website: 'https://www.mai.finance/',
    description:
      'QiDao is a self-sustaining, community-governed protocol that allows you to borrow stablecoins interest-free against your crypto assets used as collateral. Loans are paid out and repaid in miTokens (stablecoin soft pegged to the USD).',
    logoURI: '',
    documentation: 'https://docs.mai.finance/',
  },
  SNX: {
    name: 'Synthetix',
    symbol: 'SNX',
    address: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
    chainId: 10,
    decimals: 18,
    website: 'https://www.synthetix.io/',
    description:
      'Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.',
    logoURI: 'https://hecoinfo.com/token/images/snx_32.png',
  },
  PERP: {
    name: 'Perpetual Protocol',
    symbol: 'PERP',
    address: '0x9e1028F5F1D5eDE59748FFceE5532509976840E0',
    chainId: 10,
    decimals: 18,
    website: 'https://app.perp.com/',
    description: 'Cross margin DeFi trading with up to 10×-leverage.',
    logoURI: '',
  },
  BAL: {
    name: 'Balancer',
    symbol: 'BAL',
    address: '0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921',
    chainId: 10,
    decimals: 18,
    website: 'https://balancer.fi/',
    description:
      'Balancer turns the concept of an index fund on its head: instead of a paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities.',
    logoURI: 'https://hecoinfo.com/token/images/bal_32.png',
  },
  MAI: {
    chainId: 10,
    address: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    decimals: 18,
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    website: 'https://www.mai.finance/',
    description:
      "MAI is a stablecoin collateralized by your crypto holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
    documentation: 'https://docs.mai.finance/',
  },
  FRAX: {
    name: 'Frax',
    address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
    symbol: 'FRAX',
    decimals: 18,
    chainId: 10,
    website: 'https://frax.finance/',
    description:
      'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
    logoURI: 'https://avatars.githubusercontent.com/u/56005256?s=200&v=4',
  },
  VELO: {
    chainId: 10,
    address: '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05',
    decimals: 18,
    name: 'Velodrome',
    symbol: 'VELO',
    website: 'https://app.velodrome.finance/',
    description:
      "Velodrome Finance, at its core, is a solution for protocols on Optimism to properly incentivize liquidity for their own use cases. Building on top of the groundwork laid out by Solidly, our team has addressed that first iteration's core issues to realize its full potential.",
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
  },
  sETH: {
    name: 'Synth sETH',
    symbol: 'sETH',
    address: '0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://synthetix.io/',
    description:
      'Synths are derivative tokens providing exposure to a range of assets. They can be traded with infinite liquidity and zero slippage by leveraging the Synthetix protocol’s unique pooled collateral model. Trades between Synths generate a small fee that is distributed to SNX collateral providers.',
  },
  DAI: {
    name: 'DAI Stablecoin',
    symbol: 'DAI',
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://makerdao.com/en/',
    description:
      'Dai is a stablecoin cryptocurrency which aims to keep its value as close to one United States dollar as possible through an automated system of smart contracts on the Ethereum blockchain',
  },
  LUSD: {
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    address: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.liquity.org/',
    description:
      'Liquity is a decentralized borrowing protocol that allows you to draw interest-free loans against Ether used as collateral. Loans are paid out in LUSD (a USD pegged stablecoin) and need to maintain a minimum collateral ratio of 110%.',
    documentation: 'https://docs.liquity.org/',
  },
  soUSDC: {
    name: 'Stargate USD Coin LP',
    symbol: 'soUSDC',
    address: '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
    chainId: 10,
    decimals: 6,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xef4229c8c3250C675F21BCefa42f58EfbfF6002a.svg',
    website: 'https://stargate.finance/',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    documentation: 'https://stargateprotocol.gitbook.io/stargate/v/user-docs/',
  },
  soETH: {
    name: 'Stargate Ethereum LP',
    symbol: 'soETH',
    address: '0xd22363e3762cA7339569F3d33EADe20127D5F98C',
    chainId: 10,
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
    website: 'https://stargate.finance/',
    description:
      'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
    documentation: 'https://stargateprotocol.gitbook.io/stargate/v/user-docs/',
  },
  renBTC: {
    name: 'renBTC',
    symbol: 'renBTC',
    address: '0x85f6583762Bc76d775eAB9A7456db344f12409F7',
    chainId: 10,
    decimals: 8,
    website: 'https://renproject.io/',
    description:
      'RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RenBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.',
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png',
  },
  FXS: {
    name: 'Frax Share',
    symbol: 'FXS',
    address: '0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://frax.finance/',
    description:
      'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
  },
  THALES: {
    name: 'Thales DAO Token',
    symbol: 'THALES',
    address: '0x217D47011b23BB961eB6D93cA9945B7501a5BB11',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://thalesmarket.io/tale-of-thales',
    description:
      'Thales is an Ethereum protocol that allows the creation of peer-to-peer parimutuel markets that anyone can join.',
  },
  alUSD: {
    name: 'Alchemix USD',
    symbol: 'alUSD',
    address: '0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://alchemix.fi/',
    description:
      'Alchemix Self-Repaying Loans allow you to leverage a range of tokens without risk of liquidation.',
  },
  alETH: {
    name: 'Alchemix ETH',
    symbol: 'alETH',
    address: '0x3E29D3A9316dAB217754d13b28646B76607c5f04',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://alchemix.fi/',
    description:
      'Alchemix Self-Repaying Loans allow you to leverage a range of tokens without risk of liquidation.',
  },
  DOLA: {
    name: 'Dola USD Stablecoin',
    symbol: 'DOLA',
    address: '0x8aE125E8653821E851F12A49F7765db9a9ce7384',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.inverse.finance/',
    description:
      'Inverse.finance is a suite of permissionless decentralized finance tools governed by Inverse DAO, a decentralized autonomous organization running on the Ethereum blockchain.',
  },
  HND: {
    name: 'Hundred Finance',
    symbol: 'HND',
    address: '0x10010078a54396F62c96dF8532dc2B4847d47ED3',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://hundred.finance/',
    description:
      'Hundred Finance is a decentralized application (dApp) that enables the lending and borrowing of cryptocurrencies.',
  },
  beVELO: {
    name: 'Beefy Velo ',
    symbol: 'beVELO',
    address: '0xfDeFFc7Ad816BF7867C642dF7eBC2CC5554ec265',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://beefy.com',
    description:
      'beVELO is Beefy-wrapped VELO that earns more VELO over time. Beefy distributes trading fees and bribe rewards weekly to beVELO holders, swapping VELO to beVELO. beVELO holders receive the same rewards as max-locked veNFT VELO holders.',
  },
  agEUR: {
    name: 'agEUR',
    symbol: 'agEUR',
    address: '0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://app.angle.money/',
    description:
      'Angle is a decentralized, capital-efficient and over-collateralized stablecoins protocol.',
    documentation: 'https://docs.angle.money/',
  },
  L2DAO: {
    name: 'Layer2DAO',
    symbol: 'L2DAO',
    address: '0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.layer2dao.org/#/',
    description:
      'Layer2DAO is expanding the Ethereum L2 ecosystem and investing in L2 ecosystem projects. The DAO uses its treasury to invest into high-impact L2 protocols and ecosystem plays, serving as a diversified venture fund for investors looking to gain exposure to the L2 ecosystem growth. It also provides liquidity, depositing, and staking, perpetually reinvesting proceeds back into the DAO.',
  },
  AELIN: {
    name: 'Aelin Token',
    symbol: 'AELIN',
    address: '0x61BAADcF22d2565B0F471b291C475db5555e0b76',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://aelin.xyz/',
    description:
      'A permissionless multi-chain protocol for capital raises and OTC deals. No need for VCs, Aelin decentralizes fundraising',
  },
  pETHo: {
    name: 'pETHo',
    symbol: 'pETHo',
    address: '0x6ca558bd3eaB53DA1B25aB97916dd14bf6CFEe4E',
    chainId: 10,
    decimals: 18,
    website: 'https://ripae.finance/',
    description:
      'Ripae Finance’s full focus is to build a true cross-chain algorithmic stable coin protocol that is stabilized with true use-cases all around the DeFi Ecosystem.',
    logoURI: '',
  },
  sETHo: {
    name: 'sETHo',
    symbol: 'sETHo',
    address: '0x09448876068907827ec15F49A8F1a58C70b04d45',
    chainId: 10,
    decimals: 18,
    website: 'https://ripae.finance/',
    description:
      'Ripae Finance’s full focus is to build a true cross-chain algorithmic stable coin protocol that is stabilized with true use-cases all around the DeFi Ecosystem.',
    logoURI: '',
  },
  rETH: {
    name: 'Rocket Pool ETH',
    symbol: 'rETH',
    address: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
    chainId: 10,
    decimals: 18,
    website: 'https://rocketpool.net/',
    description:
      'As a Rocket Pool staker, your role is to deposit ETH into the deposit pool which will enable a node operator to create a new Beacon Chain validator. You can stake as little as 0.01 ETH. In doing so, you will be given a token called rETH. rETH represents both how much ETH you deposited, and when you deposited it.',
    logoURI: '',
    documentation: 'https://docs.rocketpool.net/guides/',
  },
  'bbUSD+': {
    name: 'Beets Composable Pool USD+ Stablecoin',
    symbol: 'bbUSD+',
    address: '0x88D07558470484c03d3bb44c3ECc36CAfCF43253',
    chainId: 10,
    decimals: 18,
    website: 'https://overnight.fi/',
    description:
      'USD+ is USDC that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDC.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  'USD+': {
    name: 'USD+ Stablecoin',
    symbol: 'USD+',
    address: '0x73cb180bf0521828d8849bc8CF2B920918e23032',
    chainId: 10,
    decimals: 6,
    website: 'https://overnight.fi/',
    description:
      'USD+ is USDC that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDC.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  'wUSD+': {
    name: 'Wrapped USD+ Stablecoin',
    symbol: 'wUSD+',
    address: '0xA348700745D249c3b49D2c2AcAC9A5AE8155F826',
    chainId: 10,
    decimals: 6,
    website: 'https://overnight.fi/',
    description:
      'USD+ is USDC that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDC.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  'DAI+': {
    name: 'DAI+ Stablecoin',
    symbol: 'DAI+',
    address: '0x970D50d09F3a656b43E11B0D45241a84e3a6e011',
    chainId: 10,
    decimals: 18,
    website: 'https://overnight.fi/',
    description:
      'DAI+ is DAI that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into DAI.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  'bbDAI+': {
    name: 'Beets Composable Pool DAI+ Stablecoin',
    symbol: 'bbDAI+',
    address: '0xb5ad7d6d6F92a77F47f98C28C84893FBccc94809',
    chainId: 10,
    decimals: 18,
    website: 'https://overnight.fi/',
    description:
      'DAI+ is DAI that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into DAI.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  'wDAI+': {
    name: 'Wrapped DAI+ Stablecoin',
    symbol: 'wDAI+',
    address: '0x0b8f31480249cC717081928B8aF733F45f6915BB',
    chainId: 10,
    decimals: 18,
    website: 'https://overnight.fi/',
    description:
      'DAI+ is DAI that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into DAI.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    logoURI: '',
    documentation: 'https://docs.overnight.fi/',
  },
  TUSD: {
    name: 'TrueUSD',
    symbol: 'TUSD',
    address: '0xcB59a0A753fDB7491d5F3D794316F1adE197B21E',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.trueusd.com/',
    description:
      'TrueUSD (TUSD) is the first independently-verified digital asset redeemable 1-for-1 for US Dollars.',
  },
  BOND: {
    name: 'BarnBridge Governance Token (Optimism)',
    symbol: 'BOND',
    address: '0x3e7eF8f50246f725885102E8238CBba33F276747',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://barnbridge.com/',
    description:
      'BarnBridge v2 is an open source, fixed-income, decentralized protocol that allows users to earn a fixed return on their deposits by swapping variable APYs from money markets for a fixed APY.',
    documentation: 'https://docs.barnbridge.com/',
  },
  SONNE: {
    name: 'Sonne',
    symbol: 'SONNE',
    address: '0x1DB2466d9F5e10D7090E7152B68d62703a2245F0',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://sonne.finance/',
    description:
      'Sonne Finance is an EVM compatible lending/borrowing protocol that launched on Optimism. Sonne Finance provides peer-to-peer lending solutions that are fully decentralized, transparent and non-custodial. ',
    documentation: 'https://docs.sonne.finance/',
  },
  USX: {
    name: 'dForce USD',
    symbol: 'USX',
    address: '0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://dforce.network/',
    description:
      'USX is the most important DeFi primitive within dForce’s protocol matrix, starting off with an over-collateralization design, where supported assets can be used as collaterals to mint USX within the respective approved LTV ratio (similar to DAI).',
    documentation: 'https://docs.dforce.network/protocols/usx',
  },
  MIM: {
    name: 'Magic Internet Money',
    symbol: 'MIM',
    address: '0xB153FB3d196A8eB25522705560ac152eeEc57901',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://abracadabra.money/',
    description:
      'You, the Spellcaster, can provide collateral in the form of various interest bearing crypto assets such as yvYFI, yvUSDT, yvUSDC, xSUSHI and more. With this, you can borrow magic internet money (MIM) which is a stable coin that you can swap for any other traditional stable coin.',
    documentation: 'https://docs.abracadabra.money/',
  },
  rfaWETH: {
    name: 'Reaper.Farm Aave WETH',
    symbol: 'rfaWETH',
    address: '0xdf2D2c477078D2cD563648abbb913dA3Db247c00',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.reaper.farm/',
    description: 'ETH deposited into Reaper.Farm and leveraged through Aave',
    documentation:
      'https://docs.reaper.farm/reaper-farms/general-knowledge/types-of-strategies/ltv-looping',
  },
  bbrfaWETH: {
    name: 'Beets Reaper.Farm Boosted Aave WETH',
    symbol: 'bbrfaWETH',
    address: '0xDD89C7cd0613C1557B2DaAC6Ae663282900204f1',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description: 'Composable Pool with ETH deposited into Reaper.Farm and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  bbrfaUSDC: {
    name: 'Beets Reaper.Farm Boosted Aave USDC',
    symbol: 'bbrfaUSDC',
    address: '0xba7834bb3cd2DB888E6A06Fb45E82b4225Cd0C71',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description: 'Composable Pool with USDC deposited into Reaper.Farm and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  rfaUSDC: {
    name: 'Reaper.Farm Aave USDC',
    symbol: 'rfaUSDC',
    address: '0x7ecc9D0eE071C7b86d0Ae2101231A3615564009e',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.reaper.farm/',
    description: 'USDC deposited into Reaper.Farm and leveraged through Aave',
    documentation:
      'https://docs.reaper.farm/reaper-farms/general-knowledge/types-of-strategies/ltv-looping',
  },
  bbrfaUSDT: {
    name: 'Beets Reaper.Farm Boosted Aave USDT',
    symbol: 'bbrfaUSDT',
    address: '0x9253d7e1B42fa01eDE2c53f3A21b3B4d13239cD4',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description: 'Composable Pool with USDT deposited into Reaper.Farm and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  bbrfaUSD: {
    name: 'Steady Beets, Boosted',
    symbol: 'bbrfaUSD',
    address: '0x6222ae1d2a9f6894dA50aA25Cb7b303497f9BEbd',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description:
      'Composable Pool with Reaper.Farm USDT, USDC and DAI deposited into different Reaper.Farm vaults and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  rfaUSDT: {
    name: 'Reaper.Farm Aave USDT',
    symbol: 'rfaUSDT',
    address: '0x61cbcb4278D737471EE54dc689de50E4455978D8',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.reaper.farm/',
    description: 'USDT deposited into Reaper.Farm and leveraged through Aave',
    documentation:
      'https://docs.reaper.farm/reaper-farms/general-knowledge/types-of-strategies/ltv-looping',
  },
  bbrfaDAI: {
    name: 'Beets Reaper.Farm Boosted Aave DAI',
    symbol: 'bbrfaDAI',
    address: '0x888a6195D42a95e80D81e1c506172772a80b80Bc',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description: 'Composable Pool with DAI deposited into Reaper.Farm and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  rfaDAI: {
    name: 'Reaper.Farm Aave DAI',
    symbol: 'rfaDAI',
    address: '0x75441c125890612F95b5FBf3f73DB0C25F5573Cd',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.reaper.farm/',
    description: 'DAI deposited into Reaper.Farm and leveraged through Aave',
    documentation:
      'https://docs.reaper.farm/reaper-farms/general-knowledge/types-of-strategies/ltv-looping',
  },
  bbrfaWBTC: {
    name: 'Beets Reaper.Farm Boosted Aave WBTC',
    symbol: 'bbrfaWBTC',
    address: '0xA1a77E5d7D769BFBB790a08EC976dc738bF795B9',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://op.beets.fi/pools',
    description: 'Composable Pool with WBTC deposited into Reaper.Farm and leveraged through Aave',
    documentation: 'https://docs.beets.fi/balancer-v2-1/pools',
  },
  rfaWBTC: {
    name: 'Reaper.Farm Aave WBTC',
    symbol: 'rfaWBTC',
    address: '0x43cB769D5647CC56F5c1E8Df72aB9097DAB59cCe',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://www.reaper.farm/',
    description: 'WBTC deposited into Reaper.Farm and leveraged through Aave',
    documentation:
      'https://docs.reaper.farm/reaper-farms/general-knowledge/types-of-strategies/ltv-looping',
  },
  USDT: {
    name: 'USD Tether',
    symbol: 'USDT',
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    chainId: 10,
    decimals: 6,
    website: 'https://tether.to/',
    description:
      'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x55d398326f99059ff775485246999027b3197955.png',
    documentation: 'https://tether.to/en/how-it-works',
  },
  wstETH: {
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
    chainId: 10,
    decimals: 18,
    website: 'https://lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
    logoURI: '',
    documentation: 'https://docs.lido.fi/',
  },
  hETH: {
    name: 'ETH Hop Token',
    symbol: 'hETH',
    address: '0xE38faf9040c7F09958c638bBDB977083722c5156',
    chainId: 10,
    decimals: 18,
    website: 'https://app.hop.exchange',
    description:
      'hETH is the bridge token for transferring ETH via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
    logoURI: '',
    documentation: 'https://docs.hop.exchange/',
  },
  hUSDC: {
    name: 'USDC Hop Token',
    symbol: 'hUSDC',
    address: '0x25D8039bB044dC227f741a9e381CA4cEAE2E6aE8',
    chainId: 10,
    decimals: 6,
    website: 'https://app.hop.exchange',
    description:
      'hUSDC is the bridge token for transferring USDC via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
    logoURI: '',
    documentation: 'https://docs.hop.exchange/',
  },
  hUSDT: {
    name: 'USDT Hop Token',
    symbol: 'hUSDT',
    address: '0x2057C8ECB70Afd7Bee667d76B4CD373A325b1a20',
    chainId: 10,
    decimals: 6,
    website: 'https://app.hop.exchange',
    description:
      'hUSDT is the bridge token for transferring USDT via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
    logoURI: '',
    documentation: 'https://docs.hop.exchange/',
  },
  hDAI: {
    name: 'DAI Hop Token',
    symbol: 'hDAI',
    address: '0x56900d66D74Cb14E3c86895789901C9135c95b16',
    chainId: 10,
    decimals: 18,
    website: 'https://app.hop.exchange',
    description:
      'hDAI is the bridge token for transferring DAI via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
    logoURI: '',
    documentation: 'https://docs.hop.exchange/',
  },
  hSNX: {
    name: 'SNX Hop Token',
    symbol: 'hSNX',
    address: '0x13B7F51BD865410c3AcC4d56083C5B56aB38D203',
    chainId: 10,
    decimals: 18,
    website: 'https://app.hop.exchange',
    description:
      'hSNX is the bridge token for transferring SNX via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
    logoURI: '',
    documentation: 'https://docs.hop.exchange/',
  },
  LDO: {
    name: 'Lido DAO Token',
    symbol: 'LDO',
    address: '0xFdb794692724153d1488CcdBE0C56c252596735F',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://stake.lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH 2.0 backed by industry-leading staking providers.',
    documentation: 'https://docs.lido.fi/',
  },
  KWENTA: {
    name: 'Kwenta',
    symbol: 'KWENTA',
    address: '0x920Cf626a271321C151D027030D5d08aF699456b',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://kwenta.eth.limo/dashboard',
    description:
      'Kwenta is a decentralized derivatives trading platform, live on Optimism, offering real-world and on-chain synthetic assets using the power of the Synthetix protocol.',
    documentation: 'https://docs.kwenta.io/',
  },
  UNIDX: {
    name: 'UniDex',
    symbol: 'UNIDX',
    address: '0x5d47bAbA0d66083C52009271faF3F50DCc01023C',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://app.unidex.exchange/trading',
    description:
      'UniDex is building on top of the existing landscape by introducing a perpetual leverage trading platform that will allow any synthetic asset to be traded in a permissionless, transparent, and trader-focused platform for any person to tap into.',
    documentation: 'https://unidexexchange.gitbook.io/unidex/',
  },
  sEUR: {
    name: 'Synth sEUR',
    symbol: 'sEUR',
    address: '0xFBc4198702E81aE77c06D58f81b629BDf36f0a71',
    chainId: 10,
    decimals: 18,
    logoURI: '',
    website: 'https://synthetix.io/',
    description:
      'Forex Synths track the price of forex currencies via price feeds supplied by Chainlinks oracle network of distributed node operators.',
    documentation: 'https://docs.synthetix.io/tokens/',
  },
  frxETH: {
    name: 'Frax Ether',
    symbol: 'frxETH',
    address: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
    chainId: 10,
    decimals: 18,
    website: 'https://app.frax.finance/frxeth/mint',
    description:
      'frxETH acts as a stablecoin loosely pegged to ETH, so that 1 frxETH always represents 1 ETH and the amount of frxETH in circulation matches the amount of ETH in the Frax ETH system. When ETH is sent to the frxETHMinter, an equivalent amount of frxETH is minted. Holding frxETH on its own is not eligible for staking yield and should be thought of as analogous as holding ETH.',
    logoURI: '',
    documentation: 'https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth',
  },
  sfrxETH: {
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    address: '0x484c2D6e3cDd945a8B2DF735e079178C1036578c',
    chainId: 10,
    decimals: 18,
    website: 'https://app.frax.finance/frxeth/mint',
    description:
      'sfrxETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. At any time, frxETH can be exchanged for sfrxETH by depositing it into the sfrxETH vault, which allows users to earn staking yield on their frxETH. Over time, as validators accrue staking yield, an equivalent amount of frxETH is minted and added to the vault, allowing users to redeem their sfrxETH for an greater amount of frxETH than they deposited. ',
    logoURI: '',
    documentation: 'https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
