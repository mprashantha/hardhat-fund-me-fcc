const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    const sendValue = ethers.utils.parseEther("0.51")
    console.log("Funding contract..")
    const txResponse = await fundMe.fund({ value: sendValue })
    await txResponse.wait(1)
    console.log("Funded!!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
