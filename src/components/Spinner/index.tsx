// Relative imports.
import { Bounce1, Bounce2, Bounce3, Wrapper } from "./styles";

const Spinner = () => (
  <Wrapper className="spinner">
    <Bounce1 />
    <Bounce2 />
    <Bounce3 />
  </Wrapper>
);

export default Spinner;
