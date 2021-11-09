'use strict';

// ----------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const uuid = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const uuid16 = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e5] + 1e2 + 4e2 + 8e3).replace(/[018]/g,   uuid16);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const uuid22 = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + 1e3 + 4e3 + 8e5).replace(/[018]/g,  uuid22);

// hasFetchOHLCV → has_fetch_ohlcv; parseHTTPResponse → parse_http_response
const unCamelCase = s => s.match(/^[A-Z0-9_]+$/) ? s : (s.replace(/[a-z0-9][A-Z]/g, x => x[0] + '_' + x[1]).
    replace(/[A-Z0-9][A-Z0-9][a-z]/g, x => x[0] + '_' + x[1] + x[2]).    toLowerCase());
const capitalize = s => s.length ? (s.charAt(0).toUpperCase() + s.slice(1)) : s;
const strip = s => s.replace(/^\s+|\s+$/g, '');
// ----------------------------------------------------------------------------

export {
    uuid
    , uuid16
    , uuid22
    , unCamelCase
    , capitalize
    , strip,
};
