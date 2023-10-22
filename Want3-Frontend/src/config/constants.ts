export const sepolia_contractAddress = '0xE3B6993942A183A3A6C78B35Ca4ede2Af258C6D2'
export const polygonzk_contractAddress = '0x063a3F62eb3784AC5430319a3Ab319F03C88F42B'
export const manta_contractAddress = '0xecf3a20f258699ff2fb92cbfd2be5189f94b6db2268c7e0367520ac1e320501f'
export const scroll_contractAddress = '' 

export function getContractAddress(chainId: number) {
    if (chainId == 11155111) {
        return sepolia_contractAddress
    }
    if (chainId == 1442) {
        return polygonzk_contractAddress
    }
    if (chainId == 3441005) {
        return manta_contractAddress
    }
    if (chainId == 534352) {
        return scroll_contractAddress
    }
    return ''
}