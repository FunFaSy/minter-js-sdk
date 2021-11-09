import { TypedError } from '../../util/errors';
export declare class ServerError extends TypedError {
}
export declare enum ServerErrorCode {
    'OK' = 0,
    'WrongNonce' = 101,
    'CoinNotExists' = 102,
    'CoinReserveNotSufficient' = 103,
    'TxTooLarge' = 105,
    'DecodeError' = 106,
    'InsufficientFunds' = 107,
    'TxPayloadTooLarge' = 109,
    'TxServiceDataTooLarge' = 110,
    'InvalidMultisendData' = 111,
    'CoinSupplyOverflow' = 112,
    'TxFromSenderAlreadyInMempool' = 113,
    'TooLowGasPrice' = 114,
    'WrongChainID' = 115,
    'CoinReserveUnderflow' = 116,
    'WrongHaltHeight' = 117,
    'HaltAlreadyExists' = 118,
    'CommissionCoinNotSufficient' = 119,
    'VoteExpired' = 120,
    'VoteAlreadyExists' = 121,
    'WrongUpdateVersionName' = 122,
    'CoinHasNotReserve' = 200,
    'CoinAlreadyExists' = 201,
    'WrongCrr' = 202,
    'InvalidCoinSymbol' = 203,
    'InvalidCoinName' = 204,
    'WrongCoinSupply' = 205,
    'WrongCoinEmission' = 206,
    'IsNotOwnerOfCoin' = 206,
    'CrossConvert' = 301,
    'MaximumValueToSellReached' = 302,
    'MinimumValueToBuyReached' = 303,
    'TxNotFound' = 400,
    'CandidateExists' = 401,
    'WrongCommission' = 402,
    'CandidateNotFound' = 403,
    'StakeNotFound' = 404,
    'InsufficientStake' = 405,
    'IsNotOwnerOfCandidate' = 406,
    'IncorrectPubKey' = 407,
    'StakeShouldBePositive' = 408,
    'TooLowStake' = 409,
    'PublicKeyInBlockList' = 410,
    'NewPublicKeyIsBad' = 411,
    'InsufficientWaitList' = 412,
    'PeriodLimitReached' = 413,
    'CandidateJailed' = 414,
    'CheckInvalidLock' = 501,
    'CheckExpired' = 502,
    'CheckUsed' = 503,
    'TooHighGasPrice' = 504,
    'WrongGasCoin' = 505,
    'TooLongNonce' = 506,
    'IncorrectWeights' = 601,
    'MultisigExists' = 602,
    'MultisigNotExists' = 603,
    'IncorrectMultiSignature' = 604,
    'TooLargeOwnersList' = 605,
    'DuplicatedAddresses' = 606,
    'DifferentCountAddressesAndWeights' = 607,
    'IncorrectTotalWeights' = 608,
    'NotEnoughMultisigVotes' = 609,
    'SwapPoolUnknown' = 700,
    'PairNotExists' = 701,
    'InsufficientInputAmount' = 702,
    'InsufficientLiquidity' = 703,
    'InsufficientLiquidityMinted' = 704,
    'InsufficientLiquidityBurned' = 705,
    'InsufficientLiquidityBalance' = 706,
    'InsufficientOutputAmount' = 707,
    'PairAlreadyExists' = 708,
    'TooLongSwapRoute' = 709,
    'CoinIsNotToken' = 800,
    'CoinNotMintable' = 801,
    'CoinNotBurnable' = 802
}
export declare class ServerTransactionError extends ServerError {
    transaction: any;
}
export declare function parseRpcError(errorObj: Record<string, any>): ServerError;
export declare function parseTransactionResultError(result: any): ServerTransactionError;
export declare function formatError(errorClassName: string, errorData: any): string;
export declare function getErrorTypeFromErrorMessage(errorMessage: any): "UntypedError" | "TxNotFound";
export declare function getErrorTypeFromErrorCode(code: string): string;