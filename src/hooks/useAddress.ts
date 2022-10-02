// Node modules.
import { useContext } from "react";
// Relative imports.
import AddressContext from "../contexts/address";

const useAddress = () => useContext(AddressContext);

export default useAddress;
