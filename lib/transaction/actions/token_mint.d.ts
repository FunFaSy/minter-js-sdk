/// <reference types="bn.js" />
/// <reference types="node" />
import { BN } from '../../util';
import { TransactionType } from '../internal';
import { Action } from './action';
import { RlpSchemaField } from '../../util/define-properties';
/**
 *
 */
export interface MintTokenActionParams {
    coin: number | BN;
    value: string | BN;
}
/**
 *
 */
export declare class MintTokenAction extends Action {
    static readonly txType = TransactionType.MINT_TOKEN;
    coin: Buffer;
    value: Buffer;
    constructor(data?: string | Buffer | MintTokenActionParams);
    rlpSchema(): RlpSchemaField[];
}
