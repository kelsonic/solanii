// Node modules.
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
// Relative imports.
import AddressProvider from "../../providers/address";
import CandyMachineProvider from "../../providers/candyMachine";
import Header from "../Header";
import LoadingPage from "../../pages/LoadingPage";
import NFTsProvider from "../../providers/nfts";
import { Wrapper } from "./styles";

const Address = lazy(() => import("../../pages/Address"));

function App() {
  return (
    <NFTsProvider>
      <CandyMachineProvider>
        <AddressProvider>
          <BrowserRouter>
            <Wrapper>
              {/* Header */}
              <Header />

              {/* Routes */}
              <Suspense fallback={<LoadingPage />}>
                <Routes>
                  <Route path="address" element={<Address />}>
                    <Route path=":address" element={<Address />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/address" replace />} />
                </Routes>
              </Suspense>
            </Wrapper>
          </BrowserRouter>
        </AddressProvider>
      </CandyMachineProvider>
    </NFTsProvider>
  );
}

export default App;
