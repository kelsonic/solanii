// Node modules.
import _ from "lodash";
import axios from "axios";
import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
// Relative imports.
import AddressContext from "../contexts/address";
import useCandyMachine from "../hooks/useCandyMachine";
import useNFTs from "../hooks/useNFTs";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = Metaplex.make(connection);

type AddressProviderProps = {
  children: React.ReactNode;
};

const AddressProvider = ({ children }: AddressProviderProps): JSX.Element => {
  // Derive the context we need.
  const { setCandyMachine, setCandyMachineLoading } = useCandyMachine();
  const { limit, setOffset, setNFTs, setNFTsLoading } = useNFTs();

  // Derive local state.
  const [address, setAddress] = useState(
    window.location.pathname?.split("/address/")?.[1] || ""
  );

  // Helper to derive if an address is valid.
  const isValidAddress = (address: string): boolean => {
    try {
      const publicKey = new PublicKey(address);
      const isValid = PublicKey.isOnCurve(publicKey.toBuffer());
      return isValid;
    } catch (error) {
      return false;
    }
  };

  // Side effect whenever the address changes.
  useEffect(() => {
    const onAddressChange = async (): Promise<void> => {
      // Escape early if the address is not valid + reset our state.
      if (!address || !isValidAddress(address)) {
        setCandyMachine(undefined);
        setNFTs([]);
        setOffset(0);
        return;
      }

      // Set the candy machine + NFTs loading states.
      setCandyMachineLoading(true);
      setNFTsLoading(true);

      // Fetch the CandyMachine.
      const candyMachine = await metaplex
        .candyMachines()
        .findByAddress({ address: new PublicKey(address) })
        .run();

      // Store the CandyMachine.
      setCandyMachine(candyMachine);
      setCandyMachineLoading(false);

      // Escape early if we could not find a mint address.
      if (!candyMachine?.whitelistMintSettings?.mint) {
        setNFTs([]);
        setNFTsLoading(false);
        return;
      }

      // Reset offset.
      setOffset(0);

      // Derive the NFT Metadata URLs.
      const nftMetaDataURLs = _.take(candyMachine?.items, limit)?.map(
        (item: { name: string; uri: string }) => item?.uri
      );

      // Fetch the NFTs.
      const nfts = await Promise.all(
        nftMetaDataURLs.map(async (nftMetaDataURL: string) => {
          const nft = await axios.get(nftMetaDataURL);
          return {
            ...nft.data,
            uri: nftMetaDataURL,
          };
        })
      );

      // Store the NFTs.
      setNFTs(nfts);
      setNFTsLoading(false);
    };

    // Fetch Candy Machine + NFTs.
    onAddressChange();
  }, [
    address,
    limit,
    setCandyMachine,
    setCandyMachineLoading,
    setNFTs,
    setNFTsLoading,
    setOffset,
  ]);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
