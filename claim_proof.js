function getProof(address, amount, tree) {
    const leaf = ethers.solidityPackedKeccak256(["address", "uint256"], [address, amount]);
    return tree.getHexProof(leaf);
}
