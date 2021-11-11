import {toBuffer} from '../../util';
import {TransactionType} from '../transaction';
import {Action} from './base_action';
import {RlpSchemaField} from '../../util/define-properties';
import {BN} from '../../util/external';

/**
 *
 */
export interface VoteNetUpdateActionParams {
    publicKey: string;   // Validator pub key Mp.............
    height: number | BN; // Block Height
    version: string ;    // Version @example 'v2.1'
}

/**
 *
 */
export class VoteNetUpdateAction extends Action {
    publicKey: Buffer;
    height: Buffer;
    version: Buffer;

    constructor(params: VoteNetUpdateActionParams) {
        // Convert params to Buffers
        const _params = {
            publicKey: toBuffer(params.publicKey),
            version: Buffer.from(params.version,'utf8'),
            height: new BN(params.height),
        };

        // TODO: Validation
        // version regexp("^[a-zA-Z0-9_]{1,20}$")
        super(_params);

        this.txType = TransactionType.VOTE_UPDATE;
    }

    rlpSchema(): RlpSchemaField[] {
        return [
            {
                name: 'version',
            },
            {
                name: 'publicKey',
                length: 32,
            },
            {
                name: 'height',
                length: 32,
                allowLess: true,
            }];
    }
}
