'use strict';

/*  ------------------------------------------------------------------------ */

const isNumber          = Number.isFinite
    , isInteger         = Number.isInteger
    , isArray           = Array.isArray
    , isBuffer          = Buffer.isBuffer
    , hasProps          = o => ((o !== undefined) && (o !== null))
    , isString          = s => (typeof s === 'string')
    , isObject          = o => ((o !== null) && (typeof o === 'object'))
    , isRegExp          = o => (o instanceof RegExp)
    , isDictionary      = o => (isObject(o) && (Object.getPrototypeOf(o) === Object.prototype) && !isArray(o) &&
    !isRegExp(o))
    , isStringCoercible = x => ((hasProps(x) && x.toString) || isNumber(x))
    , isHexString       = (value: string, length?: number): boolean => {
        if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
        if (length && value.length !== 2 + 2 * length) return false;
        return true;
    };
/*  .............................................   */

const prop  = (o, k) => (isObject(o) ? o[k] : undefined)
    , prop2 = (o, k1, k2) => (!isObject(o) ? undefined : (((k1 in o) && (o[k1] !== null)) ? o[k1] : o[k2]));

/*  .............................................   */

const asFloat   = x => ((isNumber(x) || isString(x)) ? parseFloat(x) : NaN)
    , asInteger = x => ((isNumber(x) || isString(x)) ? parseInt(x, 10) : NaN);

const safeFloat           = (o, k, $default, n = asFloat(prop(o, k))) => (isNumber(n) ? n : $default)
    , safeInteger         = (o, k, $default, n = asInteger(prop(o, k))) => (isNumber(n) ? n : $default)
    , safeIntegerProduct  = (o, k, $factor, $default, n = asInteger(prop(o, k))) => (isNumber(n) ? parseInt(
        String(n * $factor)) : $default)
    , safeTimestamp       = (o, k, $default, n = asFloat(prop(o, k))) => (isNumber(n)
        ? parseInt(String(n * 1000))
        : $default)
    , safeValue           = (o, k, $default, x = prop(o, k)) => (hasProps(x) ? x : $default)
    , safeString          = (o, k, $default, x = prop(o, k)) => (isStringCoercible(x) ? String(x) : $default)
    , safeStringLower     = (o, k, $default, x = prop(o, k)) => (isStringCoercible(x)
        ? String(x).toLowerCase()
        : $default)
    , safeStringUpper     = (o, k, $default, x = prop(o, k)) => (isStringCoercible(x)
        ? String(x).toUpperCase()
        : $default)

    // not using safeFloats with an array argument as we're trying to save some cycles here
    // we're not using safeFloat3 either because those cases are too rare to deserve their own optimization

    , safeFloat2          = (o, k1, k2, $default, n = asFloat(prop2(o, k1, k2))) => (isNumber(n) ? n : $default)
    , safeInteger2        = (o, k1, k2, $default, n = asInteger(prop2(o, k1, k2))) => (isNumber(n) ? n : $default)
    , safeIntegerProduct2 = (o, k1, k2, $factor, $default, n = asInteger(prop2(o, k1, k2))) => (isNumber(n) ? parseInt(
        String(n * $factor)) : $default)
    , safeTimestamp2      = (o, k1, k2, $default, n = asFloat(prop2(o, k1, k2))) => (isNumber(n) ? parseInt(
        String(n * 1000)) : $default)
    , safeValue2          = (o, k1, k2, $default, x = prop2(o, k1, k2)) => (hasProps(x) ? x : $default)
    , safeString2         = (o, k1, k2, $default, x = prop2(o, k1, k2)) => (isStringCoercible(x) ? String(x) : $default)
    , safeStringLower2    = (o, k1, k2, $default, x = prop2(o, k1, k2)) => (isStringCoercible(x) ? String(x).
        toLowerCase() : $default)
    , safeStringUpper2    = (o, k1, k2, $default, x = prop2(o, k1, k2)) => (isStringCoercible(x) ? String(x).
        toUpperCase() : $default);
/*  .............................................   */

export {

    isNumber
    , isInteger
    , isArray
    , isBuffer
    , isObject
    , isString
    , isStringCoercible
    , isHexString
    , isDictionary

    , hasProps
    , prop

    , asFloat
    , asInteger

    , safeFloat
    , safeInteger
    , safeIntegerProduct
    , safeTimestamp
    , safeValue
    , safeString
    , safeStringLower
    , safeStringUpper

    , safeFloat2
    , safeInteger2
    , safeIntegerProduct2
    , safeTimestamp2
    , safeValue2
    , safeString2
    , safeStringLower2
    , safeStringUpper2,

};
