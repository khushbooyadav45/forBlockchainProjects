var Name = artifacts.require("./Name.sol");

module.exports = function(deployer) {
  deployer.deploy(Name);
};
