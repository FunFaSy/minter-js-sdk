/// <reference types="bn.js" />
/// <reference types="node" />
import { TransactionType } from '../transaction';
import { Action } from './action';
import { RlpSchemaField } from '../../util/define-properties';
import { BN } from '../../util/external';
/**
 *
 */
export interface UnbondActionParams {
    publicKey: string;
    coin: number | BN;
    stake: string | BN;
}
/**
 *
 */
export declare class UnbondAction extends Action {
    static readonly txType = TransactionType.UNBOND;
    coin: Buffer;
    stake: Buffer;
    publicKey: Buffer;
    constructor(params: UnbondActionParams);
    rlpSchema(): RlpSchemaField[];
}
