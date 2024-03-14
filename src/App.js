import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import MainLayout from "./layout/MainLayout";
import Searchboard from "./layout/Searchboard";
import useDarkMode from "./hooks/useDarkMode";

import {
  BlockExplorer,
  AddressExplorer,
  TransactionsExplorer,
  TxExplorer,
  BlocksExplorer,
} from "./layout/ExplorerViews";

import "./App.css";

function App() {
  const { darkModeEnabled, toggleMode } = useDarkMode();
  return (
    <Router>
      <div className="App">
        <Navbar darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />
        <div className="w-full bg-board dark:bg-[#030921]">
          <Searchboard />
          <Routes>
            <Route exact path="/" element={<MainLayout />} />
            <Route path="/block/:id" element={<BlockExplorer />} />
            <Route path="/tx/:id" element={<TxExplorer />} />
            <Route path="/address/:id" element={<AddressExplorer />} />
            <Route path="/transactions/" element={<TransactionsExplorer />} />
            <Route path="/blocks/" element={<BlocksExplorer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
