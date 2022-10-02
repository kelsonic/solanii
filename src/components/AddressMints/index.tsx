// Node modules.
import axios from "axios";
import { useState } from "react";
// Relative imports.
import Code from "../Code";
import FourSquares from "../FourSquares";
import People from "../People";
import arrow from "../../assets/arrow.png";
import useCandyMachine from "../../hooks/useCandyMachine";
import useNFTs from "../../hooks/useNFTs";
import { Nft } from "../../contexts/nfts";
import { Wrapper } from "./styles";

const AddressMints = (): JSX.Element | null => {
  // Derive the context we need.
  const { candyMachine } = useCandyMachine();
  const {
    limit,
    nfts,
    nftsLoading,
    offset,
    setNFTs,
    setNFTsLoading,
    setOffset,
  } = useNFTs();

  // Derive the state we need.
  const [nftURIsWithVisibleAttributes, setNftURIsWithVisibleAttributes] =
    useState<string[]>([]);
  const [nftURIsWithVisibleCreators, setNftURIsWithVisibleCreators] = useState<
    string[]
  >([]);

  // Escape early if no NFTs exist.
  if (!nfts?.length) {
    return null;
  }

  const onNext = async () => {
    // Escape early if we are already loading.
    if (nftsLoading) {
      return;
    }

    // Set the loading state.
    setNFTsLoading(true);

    // Derive the new offset.
    const newOffset = offset + limit;

    // Derive the NFT Metadata URLs.
    const nftMetaDataURLs =
      candyMachine?.items
        ?.slice(newOffset, newOffset + limit)
        ?.map((item: { name: string; uri: string }) => item?.uri) || [];

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

    // Update the offset.
    setOffset(newOffset);

    // Store the NFTs.
    setNFTs(nfts);
    setNFTsLoading(false);

    // Scroll to the top.
    window.scrollTo(0, 0);
  };

  const onPrevious = async () => {
    // Escape early if we are already loading.
    if (nftsLoading) {
      return;
    }

    // Set the loading state.
    setNFTsLoading(true);

    // Derive the new offset.
    const newOffset = offset - limit < 0 ? 0 : offset - limit;

    // Derive the NFT Metadata URLs.
    const nftMetaDataURLs =
      candyMachine?.items
        ?.slice(newOffset, newOffset + limit)
        ?.map((item: { name: string; uri: string }) => item?.uri) || [];

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

    // Update the offset.
    setOffset(newOffset);

    // Store the NFTs.
    setNFTs(nfts);
    setNFTsLoading(false);

    // Scroll to the top.
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };

  const onAttributesClick = (nftURI: string) => () => {
    // If the NFT's attributes are visible, hide them + escape early.
    if (nftURIsWithVisibleAttributes.includes(nftURI)) {
      setNftURIsWithVisibleAttributes(
        nftURIsWithVisibleAttributes.filter(
          (nftURIWithVisibleAttributes: string): boolean =>
            nftURIWithVisibleAttributes !== nftURI
        )
      );
      return;
    }

    // If the NFT's creators are visible, hide them.
    if (nftURIsWithVisibleCreators.includes(nftURI)) {
      setNftURIsWithVisibleCreators(
        nftURIsWithVisibleCreators.filter(
          (nftURIWithVisibleCreators: string): boolean =>
            nftURIWithVisibleCreators !== nftURI
        )
      );
    }

    // Then show the NFT's attributes.
    setNftURIsWithVisibleAttributes([...nftURIsWithVisibleAttributes, nftURI]);
  };

  const onCreatorsClick = (nftURI: string) => () => {
    // If the NFT's creators are visible, hide them + escape early.
    if (nftURIsWithVisibleCreators.includes(nftURI)) {
      setNftURIsWithVisibleCreators(
        nftURIsWithVisibleCreators.filter(
          (nftURIWithVisibleCreators: string): boolean =>
            nftURIWithVisibleCreators !== nftURI
        )
      );
      return;
    }

    // If the NFT's attributes are visible, hide them.
    if (nftURIsWithVisibleAttributes.includes(nftURI)) {
      setNftURIsWithVisibleAttributes(
        nftURIsWithVisibleAttributes.filter(
          (nftURIWithVisibleAttributes: string): boolean =>
            nftURIWithVisibleAttributes !== nftURI
        )
      );
    }

    // Then show the NFT's creators.
    setNftURIsWithVisibleCreators([...nftURIsWithVisibleCreators, nftURI]);
  };

  return (
    <Wrapper>
      <h2>Mints</h2>

      {/* Mints */}
      <div className="mints">
        {nfts?.map(
          (nft: Nft): JSX.Element => (
            <div className="mint" key={nft?.uri}>
              <img alt={nft?.name} src={nft?.image} />
              <h3>{nft?.name}</h3>
              <div className="data">
                {/* Attributes button */}
                <p onClick={onAttributesClick(nft?.uri)} role="button">
                  <FourSquares /> {nft?.attributes?.length} attributes
                </p>

                {/* Attributes */}
                {nftURIsWithVisibleAttributes.includes(nft?.uri) && (
                  <>
                    <div
                      className="background"
                      onClick={onAttributesClick(nft?.uri)}
                    />
                    <div className="attributes">
                      {nft?.attributes?.map(
                        (attribute: {
                          trait_type: string;
                          value: string;
                        }): JSX.Element => (
                          <div
                            className="attribute"
                            key={attribute?.trait_type}
                          >
                            <p>{attribute?.trait_type}</p>
                            <p>{attribute?.value}</p>
                          </div>
                        )
                      )}
                      <div className="triangle" />
                    </div>
                  </>
                )}

                {/* Creators button */}
                <p onClick={onCreatorsClick(nft?.uri)} role="button">
                  <People /> {nft?.properties?.creators?.length} creators
                </p>

                {/* Creators */}
                {nftURIsWithVisibleCreators.includes(nft?.uri) && (
                  <>
                    <div
                      className="background"
                      onClick={onCreatorsClick(nft?.uri)}
                    />
                    <div className="creators">
                      {nft?.properties?.creators?.map(
                        (creator: {
                          address: string;
                          share: number;
                        }): JSX.Element => (
                          <div className="creator" key={creator?.address}>
                            <p>
                              <a
                                href={`https://www.solaneyes.com/address/${creator?.address}`}
                                rel="noreferrer noopener"
                              >
                                {creator?.address?.toString()?.slice(0, 6)}...
                                {creator?.address?.toString()?.slice(-4)}
                              </a>
                            </p>
                            <p>{creator?.share}%</p>
                          </div>
                        )
                      )}
                      <div className="triangle" />
                    </div>
                  </>
                )}

                {/* Metadata button */}
                <p role="button">
                  <Code /> Metadata
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {offset > 0 ? (
          <button className="previous" onClick={onPrevious}>
            <img alt="arrow" src={arrow} /> Prev
          </button>
        ) : (
          <div />
        )}
        {nfts?.length === limit ? (
          <button className="next" onClick={onNext}>
            Next <img alt="arrow" src={arrow} />
          </button>
        ) : (
          <div />
        )}
      </div>
    </Wrapper>
  );
};

export default AddressMints;
