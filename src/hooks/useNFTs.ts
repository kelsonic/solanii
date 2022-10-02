// Node modules.
import { useContext } from "react";
// Relative imports.
import NFTsContext from "../contexts/nfts";

const useNFTs = () => useContext(NFTsContext);

export default useNFTs;
