import { forEach, map, isObject } from 'lodash';

function toCamelFromSnake(str) {
    return str.replace(/_([a-z])/g, (c) => {
        return c[1].toUpperCase();
    });
}

export function client(obj) {
    const ret = {};

    forEach(obj, (v, k) => {
        const key = toCamelFromSnake(k);
        let value;

        if (isObject(v) && !Array.isArray(v)) {
            value = client(v);
        } else if (Array.isArray(v)) {
            value = allClient(v);
        } else {
            value = v;
        }

        ret[key] = value;
    });

    return ret;
}

export function allClient(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return map(arr, (obj) => {
        if (!isObject(obj)) {
            return obj;
        }

        return client(obj);
    });
}
