/// <reference types="bn.js" />
/// <reference types="node" />
import { BN } from '../../util';
import { Action } from './base_action';
import { RlpSchemaField } from '../../util/define-properties';
/**
 *
 */
export interface SellActionParams {
    coinToSell: number | BN;
    coinToBuy: number | BN;
    valueToSell: string | BN;
    minimumValueToBuy?: string | BN;
}
/**
 *
 */
export declare class SellAction extends Action {
    coinToSell: Buffer;
    valueToSell: Buffer;
    coinToBuy: Buffer;
    minimumValueToBuy: Buffer;
    constructor(params: SellActionParams);
    rlpSchema(): RlpSchemaField[];
}
