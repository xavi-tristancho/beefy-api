import { getEDecimals } from '../../../utils/getEDecimals';
import { getBifiMaxiApys } from '../common/getBifiMaxiApys';
import { addressBook } from '../../../../packages/address-book/address-book';
import { POLYGON_CHAIN_ID } from '../../../constants';
const {
  polygon: {
    platforms: {
      beefyfinance: { rewardPool },
    },
    tokens: { oldBIFI, WMATIC },
  },
} = addressBook;

export const getPolygonBifiMaxiApy = () => {
  return getBifiMaxiApys({
    bifi: oldBIFI.address,
    rewardPool: rewardPool,
    rewardId: WMATIC.symbol,
    rewardDecimals: getEDecimals(WMATIC.decimals),
    chain: 'polygon',
    chainId: POLYGON_CHAIN_ID,
  });
};
