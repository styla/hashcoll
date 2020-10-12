let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(String.raw`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let cachegetNodeBufferMemory0 = null;
function getNodeBufferMemory0() {
    if (cachegetNodeBufferMemory0 === null || cachegetNodeBufferMemory0.buffer !== wasm.memory.buffer) {
        cachegetNodeBufferMemory0 = Buffer.from(wasm.memory.buffer);
    }
    return cachegetNodeBufferMemory0;
}

function passStringToWasm0(arg, malloc) {

    const len = Buffer.byteLength(arg);
    const ptr = malloc(len);
    getNodeBufferMemory0().write(arg, ptr, len);
    WASM_VECTOR_LEN = len;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
*/
class HashMap {

    static __wrap(ptr) {
        const obj = Object.create(HashMap.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_hashmap_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.hashmap_new();
        return HashMap.__wrap(ret);
    }
    /**
    * @param {number} capacity
    * @returns {HashMap}
    */
    static with_capacity(capacity) {
        var ret = wasm.hashmap_with_capacity(capacity);
        return HashMap.__wrap(ret);
    }
    /**
    * @param {string} value
    * @returns {string | undefined}
    */
    remove(value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashmap_remove(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @param {string} key
    * @param {string} value
    * @returns {string | undefined}
    */
    insert(key, value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.hashmap_insert(retptr, this.ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v2;
            if (r0 !== 0) {
                v2 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v2;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @param {string} value
    * @returns {boolean}
    */
    contains(value) {
        var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashmap_contains(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {string} value
    * @returns {string | undefined}
    */
    get(value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashmap_get(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.hashmap_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    is_empty() {
        var ret = wasm.hashmap_is_empty(this.ptr);
        return ret !== 0;
    }
    /**
    */
    clear() {
        wasm.hashmap_clear(this.ptr);
    }
    /**
    * @returns {number}
    */
    capacity() {
        var ret = wasm.hashmap_capacity(this.ptr);
        return ret >>> 0;
    }
}
module.exports.HashMap = HashMap;
/**
*/
class HashMapRaw {

    static __wrap(ptr) {
        const obj = Object.create(HashMapRaw.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_hashmapraw_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.hashmap_new();
        return HashMapRaw.__wrap(ret);
    }
    /**
    * @param {number} capacity
    * @returns {HashMapRaw}
    */
    static with_capacity(capacity) {
        var ret = wasm.hashmapraw_with_capacity(capacity);
        return HashMapRaw.__wrap(ret);
    }
    /**
    * @param {string} key
    * @returns {Uint8Array | undefined}
    */
    remove(key) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashmapraw_remove(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getArrayU8FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @param {string} key
    * @param {Uint8Array} value
    * @returns {Uint8Array | undefined}
    */
    insert(key, value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.hashmapraw_insert(retptr, this.ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v2;
            if (r0 !== 0) {
                v2 = getArrayU8FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v2;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @param {string} value
    * @returns {boolean}
    */
    contains(value) {
        var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashmapraw_contains(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {string} value
    * @returns {Uint8Array | undefined}
    */
    get(value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashmapraw_get(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getArrayU8FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.hashmap_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    is_empty() {
        var ret = wasm.hashmap_is_empty(this.ptr);
        return ret !== 0;
    }
    /**
    */
    clear() {
        wasm.hashmapraw_clear(this.ptr);
    }
    /**
    * @returns {number}
    */
    capacity() {
        var ret = wasm.hashmap_capacity(this.ptr);
        return ret >>> 0;
    }
}
module.exports.HashMapRaw = HashMapRaw;
/**
*/
class HashSet {

    static __wrap(ptr) {
        const obj = Object.create(HashSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_hashset_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.hashmap_new();
        return HashSet.__wrap(ret);
    }
    /**
    * @param {number} capacity
    * @returns {HashSet}
    */
    static with_capacity(capacity) {
        var ret = wasm.hashset_with_capacity(capacity);
        return HashSet.__wrap(ret);
    }
    /**
    * @param {string} value
    * @returns {boolean}
    */
    remove(value) {
        var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashset_remove(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {string} value
    * @returns {boolean}
    */
    insert(value) {
        var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashset_insert(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {string} value
    * @returns {boolean}
    */
    contains(value) {
        var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashset_contains(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {string} value
    * @returns {string | undefined}
    */
    get(value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashset_get(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.hashmap_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    is_empty() {
        var ret = wasm.hashmap_is_empty(this.ptr);
        return ret !== 0;
    }
    /**
    */
    clear() {
        wasm.hashset_clear(this.ptr);
    }
    /**
    * @returns {number}
    */
    capacity() {
        var ret = wasm.hashmap_capacity(this.ptr);
        return ret >>> 0;
    }
}
module.exports.HashSet = HashSet;
/**
*/
class HashSetRaw {

    static __wrap(ptr) {
        const obj = Object.create(HashSetRaw.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_hashsetraw_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.hashmap_new();
        return HashSetRaw.__wrap(ret);
    }
    /**
    * @param {number} capacity
    * @returns {HashSetRaw}
    */
    static with_capacity(capacity) {
        var ret = wasm.hashsetraw_with_capacity(capacity);
        return HashSetRaw.__wrap(ret);
    }
    /**
    * @param {Uint8Array} value
    * @returns {boolean}
    */
    remove(value) {
        var ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashsetraw_remove(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {Uint8Array} value
    * @returns {boolean}
    */
    insert(value) {
        var ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashsetraw_insert(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {Uint8Array} value
    * @returns {boolean}
    */
    contains(value) {
        var ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.hashsetraw_contains(this.ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {Uint8Array} value
    * @returns {Uint8Array | undefined}
    */
    get(value) {
        try {
            const retptr = wasm.__wbindgen_export_2.value - 16;
            wasm.__wbindgen_export_2.value = retptr;
            var ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.hashsetraw_get(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getArrayU8FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_export_2.value += 16;
        }
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = wasm.hashmap_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    is_empty() {
        var ret = wasm.hashmap_is_empty(this.ptr);
        return ret !== 0;
    }
    /**
    */
    clear() {
        wasm.hashsetraw_clear(this.ptr);
    }
    /**
    * @returns {number}
    */
    capacity() {
        var ret = wasm.hashmap_capacity(this.ptr);
        return ret >>> 0;
    }
}
module.exports.HashSetRaw = HashSetRaw;

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'hashcoll_fast_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

