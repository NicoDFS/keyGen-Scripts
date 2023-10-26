const Web3 = require("web3");

// Web3 initialization (should point to the JSON-RPC endpoint)
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8590"));

var V3KeyStore = web3.eth.accounts.encrypt(
  "<AccountPrivateKey>",
  "<Password>",
);

// Save to keyFile.txt
fs.writeFileSync("keyFile.txt", JSON.stringify(V3KeyStore));

console.log("KeyStore saved to keyFile.txt");
process.exit();
