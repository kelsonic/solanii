// Node modules.
// Relative imports.
import Spinner from "../../components/Spinner";
import closeIcon from "../../assets/close.png";
import searchIcon from "../../assets/search.png";
import useAddress from "../../hooks/useAddress";
import useNFTs from "../../hooks/useNFTs";
import { Wrapper } from "./styles";

const SearchField = (): JSX.Element => {
  const { address, setAddress } = useAddress();
  const { nfts, nftsLoading } = useNFTs();

  const deriveSearchIcon = (): JSX.Element => {
    // If we are loading, show the loading icon.
    if (nftsLoading) {
      return <Spinner />
    }

    // If the NFTs exist, show its icon.
    if (nfts?.length) {
      return (
        <img
          alt={nfts?.[0]?.collection?.name}
          className="collection"
          src={nfts?.[0]?.image}
        />
      );
    }

    // Show the search icon by default.
    if (!address) {
      return <img alt="search" src={searchIcon} />;
    }

    // Show invalid address icon.
    return <img alt="letter x" className="red" src={closeIcon} />;
  };

  const deriveSearchLabel = (): string => {
    // If we are loading NFTs, show the loading label.
    if (nftsLoading) {
      return "Loading...";
    }

    // If the NFTs exist, show its name.
    if (nfts?.length) {
      return nfts?.[0]?.collection?.name || "Collection name";
    }

    // Show invalid address label.
    if (address) {
      return "Account not found";
    }

    // Show the search label by default.
    return "Search";
  };

  const onSearchTermChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    // Update the search term.
    setAddress(event.target.value);
  };

  return (
    <Wrapper>
      {deriveSearchIcon()}
      <input
        id="search"
        onChange={onSearchTermChange}
        placeholder="Accounts, programs, tokens, NFTs, etc."
        type="text"
        value={address}
      />
      <label htmlFor="search">{deriveSearchLabel()}</label>
    </Wrapper>
  );
};

export default SearchField;
