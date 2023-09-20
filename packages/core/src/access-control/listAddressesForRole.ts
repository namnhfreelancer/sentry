import { ethers } from "ethers";
import { getProvider } from "../utils/getProvider";
import { config } from "../config";
import { RefereeAbi } from "../abis";

/**
 * Lists all addresses that have a particular role in the Referee contract.
 *
 * @param role - The role to list addresses for.
 * @returns The addresses that have the given role.
 */
export async function listAddressesForRole(
    role: string
): Promise<string[]> {

    // Get the provider
    const provider = getProvider();

    // Create a contract instance
    const contract = new ethers.Contract(config.refereeAddress, RefereeAbi, provider);

    // Calculate the role hash
    const roleHash = ethers.keccak256(ethers.toUtf8Bytes(role));

    // Get the number of members
    const memberCount = await contract.getRoleMemberCount(roleHash);

    // Get the addresses of all members
    const addresses = [];
    for (let i = 0; i < memberCount; i++) {
        const address = await contract.getRoleMember(roleHash, i);
        addresses.push(address);
    }

    return addresses;
}