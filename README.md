# MyTestCoint

## To Start App:

```bash
cd mtc-web3
npm install
npm install ethers
npm install bootstrap
npm run start
```

## Local Contract deploy:

#### Run your own local node in a separate terminal

```bash
npm install --save-dev hardhat
npx hardhat node
```

#### Start Deploy script

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
```

### Use the contract in Goerli test network
#### Address contract: 0x94B923047661B1aa1c0BBa0249443e04A71df373