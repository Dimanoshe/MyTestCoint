async function main () {
  // We get the contract to deploy
  // For Start Deploy: npx hardhat run --network goerli scripts/deploy.js
  const MyTestCoin = await ethers.getContractFactory('MyTestCoin');
  console.log('Deploying MyTestCoin...');
  const extoken = await MyTestCoin.deploy();
  await extoken.deployed();
  console.log('MyTestCoin deployed to:', extoken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });