async function main() {
    const root = "0x..."; // Generated from generate_merkle.js
    const Airdrop = await ethers.getContractFactory("MerkleAirdrop");
    const airdrop = await Airdrop.deploy("0xTokenAddr", root);
    console.log("Airdrop deployed to:", airdrop.address);
}
