const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

const recipients = [
    { addr: "0xAbc...", amount: "100" },
    { addr: "0xDef...", amount: "200" }
];

const leaves = recipients.map(x => 
    ethers.solidityPackedKeccak256(["address", "uint256"], [x.addr, x.amount])
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);
