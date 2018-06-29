var Authors = artifacts.require("./AuthorDonation.sol");

module.exports = function(deployer) {
    deployer.deploy(Authors);
};
