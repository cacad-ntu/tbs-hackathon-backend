// Tell the compiler what version of Solidity we're using.
pragma solidity ^0.4.4;

// TestRPC HD wallet
// warrior minimum breeze raven garden express solar flavor obvious twenty alpha actress
contract AuthorDonation {

  // This method will be called from the Dapp.
  // Any function which uses funds must contain the keyword payable.
  function donate(address to) payable {
    // If no Ether has been sent we have nothing to do.
    if (msg.value == 0) throw;

    // Attempt to forward Ether to the Author and then the Editor.
    // Throw an exception if transfer fails. Ether is returned to sender.
    if (!to.send(msg.value)) throw;

  }
}