const main = async () => {
  const marketFactory = await hre.ethers.getContractFactory("UnrealMarket");
  const market = await marketFactory.deploy();
  await market.deployed();
  console.log("Contract deployed to:", market.address);

  console.log(currentNFTNumber);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
