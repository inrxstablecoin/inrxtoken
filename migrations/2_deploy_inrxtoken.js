const INRx = artifacts.require("INRx");

module.exports = async function (deployer) {
    await deployer;
    const inrx =await deployer.deploy(INRx);
    inrx.initialize("INRx", "INRx", 2, "0x6B63b63ce0c59D63a263B1B8cF9c52D912b9A608");
};
