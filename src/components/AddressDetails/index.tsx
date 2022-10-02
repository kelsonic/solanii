// Node modules.
import _ from "lodash";
import moment from "moment";
// Relative imports.
import useCandyMachine from "../../hooks/useCandyMachine";
import { Wrapper } from "./styles";

const AddressDetails = (): JSX.Element | null => {
  const { candyMachine } = useCandyMachine();

  // Escape early if the candy machine is not ready.
  if (!candyMachine) {
    return null;
  }

  return (
    <Wrapper>
      <div className="column">
        <h2>Mint Price</h2>
        <p>{candyMachine?.price?.basisPoints?.toNumber()} SOL</p>

        <h2>Live Date</h2>
        <p>
          {moment(candyMachine?.goLiveDate?.toNumber() * 1000).format(
            "MMMM D, YYYY h:mm A"
          )}
        </p>
        <p>{moment(candyMachine?.goLiveDate?.toNumber() * 1000).fromNow()}</p>
      </div>

      <div className="column">
        <h2>Mint Stats</h2>
        <div className="key-value">
          <p>Items Available</p>
          <p>{candyMachine?.itemsAvailable?.toNumber()}</p>
        </div>
        <div className="key-value">
          <p>Items Redeemed</p>
          <p>
            {candyMachine?.itemsMinted?.toNumber()} /{" "}
            {candyMachine?.itemsMinted?.toNumber()}
          </p>
        </div>
        <div className="key-value">
          <p>Items Remaining</p>
          <p>
            {candyMachine?.itemsRemaining?.toNumber()} /{" "}
            {candyMachine?.itemsMinted?.toNumber()}
          </p>
        </div>
        <div className="key-value">
          <p>Royalties</p>
          {candyMachine?.sellerFeeBasisPoints ? (
            <p>{_.divide(candyMachine?.sellerFeeBasisPoints, 100)} %</p>
          ) : null}
        </div>
      </div>

      <div className="column">
        <h2>Creators</h2>
        {candyMachine?.creators?.map((creator) => (
          <div key={creator?.address?.toString()} className="key-value">
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
        ))}
      </div>
    </Wrapper>
  );
};

export default AddressDetails;
