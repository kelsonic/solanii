// Relative imports.
import AddressDetails from '../../components/AddressDetails';
import AddressMints from '../../components/AddressMints';
import SearchField from '../../components/SearchField';
import { Wrapper } from "./styles";

type AddressProps = {
  address?: string;
};

const Address = ({ address }: AddressProps): JSX.Element => {
  return (
    <Wrapper>
      <SearchField />
      <AddressDetails />
      <AddressMints />
    </Wrapper>
  );
};

export default Address;
