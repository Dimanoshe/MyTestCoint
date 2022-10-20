async function main () {
  // We get the contract to deploy
  // For Start Deploy: npx hardhat run --network goerli scripts/deploy.js
  const MyTestToken = await ethers.getContractFactory('MyTestToken');
  console.log('Deploying MyTestToken...');
  const extoken = await MyTestToken.deploy();
  await extoken.deployed();
  console.log('MyTestToken deployed to:', extoken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });