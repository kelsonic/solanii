// Node modules.
import { createContext } from "react";

export type Nft = {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  collection: {
    name: string;
    family: string;
  };
  description: string;
  external_url: string;
  image: string;
  name: string;
  properties: {
    files: {
      uri: string;
      type: string;
    }[];
    category: string;
    creators: {
      address: string;
      share: number;
    }[];
  };
  seller_fee_basis_points: number;
  symbol: string;
  uri: string;
};

export interface NFTsContextInterface {
  limit: number;
  nfts?: Nft[];
  nftsLoading: boolean;
  offset: number;
  setNFTs: (nfts: Nft[]) => void;
  setNFTsLoading: (nftsLoading: boolean) => void;
  setOffset: (offset: number) => void;
}

const NFTsContext = createContext<NFTsContextInterface>({
  limit: 9,
  nfts: [],
  nftsLoading: false,
  offset: 0,
  setNFTs: (nfts: Nft[]) => {},
  setNFTsLoading: (nftsLoading: boolean) => {},
  setOffset: (offset: number) => {},
});

export default NFTsContext;
