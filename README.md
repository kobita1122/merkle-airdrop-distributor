# Merkle Airdrop Distributor

This repository provides a professional solution for distributing tokens to a large list of addresses without the prohibitive gas costs of traditional loops.

### How it Works
Instead of storing thousands of addresses in a mapping (which costs millions in gas), we store a single 32-byte **Merkle Root**. 

1. **Off-Chain:** A script generates a Merkle Tree from a CSV of eligible addresses and amounts.
2. **On-Chain:** The `Airdrop.sol` contract stores the Root.
3. **Claim:** Users provide a "Merkle Proof" (a path of hashes) to prove their inclusion in the tree. The contract verifies this path against the Root.



### Benefits
* **Cost Effective:** Deployment cost is the same for 10 users or 10,000,000 users.
* **Security:** Cryptographic certainty that only intended recipients can claim.
* **Flexibility:** Supports various token amounts per user.
