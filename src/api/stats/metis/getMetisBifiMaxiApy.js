import { getEDecimals } from '../../../utils/getEDecimals';
import { getBifiMaxiApys } from '../common/getBifiMaxiApys';
import { addressBook } from '../../../../packages/address-book/address-book';
import { METIS_CHAIN_ID } from '../../../constants';
const {
  metis: {
    platforms: {
      beefyfinance: { rewardPool },
    },
    tokens: { oldBIFI, METIS },
  },
} = addressBook;

export const getMetisBifiMaxiApy = () => {
  return getBifiMaxiApys({
    bifi: oldBIFI.address,
    rewardPool: rewardPool,
    rewardId: 'METIS',
    rewardDecimals: getEDecimals(METIS.decimals),
    chain: 'metis',
    chainId: METIS_CHAIN_ID,
  });
};
