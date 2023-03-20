import { Alchemy, Network } from "alchemy-sdk";
import { useEffect } from "react";
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

function Blockdata({ blockNumber, setBlockNumber, metadata, setMetadata }) {
  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    async function getBlock() {
      setMetadata(await alchemy.core.getBlockWithTransactions(blockNumber));
    }

    getBlockNumber();
    getBlock();
  });

  return (
    <div className="container wallet">
      <h1>Block Data</h1>
      <div className="balance">Block Number: {blockNumber}</div>
      <div className="balance">Block data:{JSON.stringify(metadata)}</div>
    </div>
  );
}

export default Blockdata;
