//Run.js is locally used with hardhat to see things on local environment 

const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('CallOfDuty')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()
    console.log("Contract deployed to:", nftContract.address)

    //Minting 1st NFT
    let txn = await nftContract.makeCallOfDutyNFT()
    await txn.wait()

    //Minting 2nd NFT
    txn = await nftContract.makeCallOfDutyNFT()
    await txn.wait()
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