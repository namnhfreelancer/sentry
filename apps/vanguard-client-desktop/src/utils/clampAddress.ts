export function clampAddress(address: string): string {
	return address.slice(0, 8) + "..." + address.slice(-8);
}
