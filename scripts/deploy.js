//Deploy.js is used to deploy to staging env

const main = async () => {
    //const nftContractFactory = await hre.ethers.getContractFactory('CallOfDuty')
    const nftContractFactory = await hre.ethers.getContractFactory('FunnyWordsDG')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()
    console.log("Contract deployed to:", nftContract.address)

    //Minting 1st NFT
    let txn = await nftContract.mintNFT()
    await txn.wait()

    //Minting 2nd NFT
    txn = await nftContract.mintNFT()
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