// Node modules.
import { useState } from "react";
import { CandyMachine } from "@metaplex-foundation/js";
// Relative imports.
import CandyMachineContext from "../contexts/candyMachine";

type CandyMachineProviderProps = {
  children: React.ReactNode;
};

const CandyMachineProvider = ({
  children,
}: CandyMachineProviderProps): JSX.Element => {
  // Derive local state.
  const [candyMachine, setCandyMachine] = useState<CandyMachine | undefined>();
  const [candyMachineLoading, setCandyMachineLoading] =
    useState<boolean>(false);

  return (
    <CandyMachineContext.Provider
      value={{
        candyMachine,
        candyMachineLoading,
        setCandyMachine,
        setCandyMachineLoading,
      }}
    >
      {children}
    </CandyMachineContext.Provider>
  );
};

export default CandyMachineProvider;
