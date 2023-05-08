const PCAI = artifacts.require("PCAI");
const PepechainAidropLock = artifacts.require("PepechainAidropLock");
const PepechainCEXTreasury = artifacts.require("PepechainCEXTreasury");
const PepechainTimelock = artifacts.require("PepechainTimelock");

module.exports = function (deployer) {
// // Deploy PCAI token contract with 420,690,000,000,000 tokens (with 18 decimals)
//  const initialSupply = "420690000000000000000000000000000"; // 420,690,000,000,000 * (10 ** 18)
//  deployer.deploy(PCAI, initialSupply).then(function () {
//    // Deploy PepechainAidropLock contract using the PCAI contract address
//    return deployer.deploy(PepechainAidropLock, PCAI.address);
//  }).then(function () {
//    // Deploy PepechainCEXTreasury contract using the PCAI contract address
//    return deployer.deploy(PepechainCEXTreasury, PCAI.address);
//  });
    // Deploy PepechainTimelock Controller with 7 days minimum delay and grant deployer proposer, executor, and admin roles
    const minDelay = 7 * 24 * 60 * 60; // 7 days in seconds
    const proposers = ['0x51e3dD84e092C982a89365ad9cFFB324b5F0A644'];
    const executors = ['0x51e3dD84e092C982a89365ad9cFFB324b5F0A644'];
    const admin = '0x51e3dD84e092C982a89365ad9cFFB324b5F0A644';
    deployer.deploy(PepechainTimelock, minDelay, proposers, executors, admin);
};
