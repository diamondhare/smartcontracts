import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    blast: {
      url: "https://rpc.blast.io", //"https://blast.blockpi.network/v1/rpc/public"
      chainId: 81457,
      accounts: process.env.PRIVATE_KEY_BLAST
        ? [process.env.PRIVATE_KEY_BLAST]
        : [
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          ],
    },
    blast_sepolia: {
      url: "https://sepolia.blast.io",
      chainId: 168587773,
      accounts: process.env.PRIVATE_KEY_SEPOLIA_BLAST
        ? [process.env.PRIVATE_KEY_SEPOLIA_BLAST]
        : [
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          ],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: "ETH",
  },
};

export default config;
