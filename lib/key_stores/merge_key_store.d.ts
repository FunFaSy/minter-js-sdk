import { KeyStore } from './keystore';
import { KeyPair } from '../key_pair';
/**
 * Keystore which can be used to merge multiple key stores into one virtual key store.
 *
 * @example
 * ```js
 * const { homedir } = require('os');
 * import { connect, keyStores, utils } from 'minter-api-js';
 *
 * const privateKey = '.......';
 * const keyPair = utils.KeyPair.fromString(privateKey);
 *
 * const inMemoryKeyStore = new keyStores.InMemoryKeyStore();
 * inMemoryKeyStore.setKey('testnet', 'example-account.testnet', keyPair);
 *
 * const fileSystemKeyStore = new keyStores.UnencryptedFileSystemKeyStore(`${homedir()}/.minter-credentials`);
 *
 * const keyStore = new MergeKeyStore([
 *   inMemoryKeyStore,
 *   fileSystemKeyStore
 * ]);
 * const config = {
 *   keyStore, // instance of MergeKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://',
 *   walletUrl: 'https://',
 *   helperUrl: 'https://',
 *   explorerUrl: 'https://'
 * };
 *
 * // inside an async function
 * const minter = await connect(config)
 * ```
 */
interface MergeKeyStoreOptions {
    writeKeyStoreIndex: number;
}
export declare class MergeKeyStore extends KeyStore {
    keyStores: KeyStore[];
    private options;
    /**
     * @param keyStores read calls are attempted from start to end of array
     * @param options
     * @param options.writeKeyStoreIndex the keystore index that will receive all write calls
     */
    constructor(keyStores: KeyStore[], options?: MergeKeyStoreOptions);
    /**
     * Store a {@link KeyPair} to the first index of a key store array
     * @param networkId The targeted network. (ex. mainnet, testnet, etc…)
     * @param accountId The Minter account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */
    setKey(networkId: string, accountId: string, keyPair: KeyPair): Promise<void>;
    /**
     * Gets a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. 0, betanet, etc…)
     * @param accountId The Minter account tied to the key pair
     * @returns {Promise<KeyPair>}
     */
    getKey(networkId: string, accountId: string): Promise<KeyPair>;
    /**
     * Removes a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. mainnet, testnet, etc…)
     * @param accountId The Minter account tied to the key pair
     */
    removeKey(networkId: string, accountId: string): Promise<void>;
    /**
     * Removes all items from each key store
     */
    clear(): Promise<void>;
    /**
     * Get the network(s) from the array of key stores
     * @returns {Promise<string[]>}
     */
    getNetworks(): Promise<string[]>;
    /**
     * Gets the account(s) from the array of key stores
     * @param networkId The targeted network. (ex. mainnet, testnet, etc…)
     * @returns{Promise<string[]>}
     */
    getAccounts(networkId: string): Promise<string[]>;
    /** @hidden */
    toString(): string;
}
export {};
