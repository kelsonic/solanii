// Node modules.
import { createContext } from "react";

export interface AddressContextType {
  address: string;
  setAddress: (address: string) => void;
}

const AddressContext = createContext<AddressContextType>({
  address: "",
  setAddress: (address: string) => {},
});

export default AddressContext;
