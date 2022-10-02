// Node modules.
import { createContext } from "react";
import { CandyMachine } from "@metaplex-foundation/js";

export interface CandyMachineContextInterface {
  candyMachine?: CandyMachine;
  candyMachineLoading: boolean;
  setCandyMachine: (candyMachine?: CandyMachine) => void;
  setCandyMachineLoading: (candyMachineLoading: boolean) => void;
}

const CandyMachineContext = createContext<CandyMachineContextInterface>({
  candyMachine: undefined,
  candyMachineLoading: false,
  setCandyMachine: (candyMachine?: CandyMachine) => {},
  setCandyMachineLoading: (candyMachineLoading: boolean) => {},
});

export default CandyMachineContext;
