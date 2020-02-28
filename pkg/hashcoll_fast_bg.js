
const path = require('path').join(__dirname, 'hashcoll_fast_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./hashcoll_fast.js'] = require('./hashcoll_fast.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
