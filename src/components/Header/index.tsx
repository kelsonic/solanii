// Node modules.
import { FeedbackFish } from "@feedback-fish/react";
import { Link } from "react-router-dom";
// Relative imports.
import headerBackground from '../../assets/header-bg.png';
import { Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${headerBackground})` }}>
      <nav>
        <ul>
          <li>
            <Link to="/address">Account</Link>
          </li>
          <li>
            <FeedbackFish projectId="f52408bb340649">
              <button className="feedback" type="button">
                Feedback
              </button>
            </FeedbackFish>
          </li>
        </ul>

        <ul className="wallet-actions">
          <li>
            <button type="button">Mainnet</button>
          </li>
          <li>
            <button disabled type="button">Select a Wallet</button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
