// Node modules.
import { useContext } from "react";
// Relative imports.
import CandyMachineContext from "../contexts/candyMachine";

const useCandyMachine = () => useContext(CandyMachineContext);

export default useCandyMachine;
