import { useState } from "react";
import Blockdata from "./Blockdata";

import "./App.css";

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [metadata, setMetadata] = useState();

  return (
    <div className="App">
      <Blockdata
        blockNumber={blockNumber}
        setBlockNumber={setBlockNumber}
        metadata={metadata}
        setMetadata={setMetadata}
      />
    </div>
  );
}

export default App;
