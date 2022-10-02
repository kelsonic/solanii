// Node modules.
import { useState } from "react";
// Relative imports.
import NFTsContext, { Nft } from "../contexts/nfts";

type NFTsProviderProps = {
  children: React.ReactNode;
};

const NFTsProvider = ({ children }: NFTsProviderProps): JSX.Element => {
  // Derive local state.
  const [nfts, setNFTs] = useState<Nft[]>([]);
  const [nftsLoading, setNFTsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 9;

  return (
    <NFTsContext.Provider
      value={{
        limit,
        nfts,
        nftsLoading,
        offset,
        setNFTs,
        setNFTsLoading,
        setOffset,
      }}
    >
      {children}
    </NFTsContext.Provider>
  );
};

export default NFTsProvider;
