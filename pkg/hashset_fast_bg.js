
const path = require('path').join(__dirname, 'hashset_fast_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./hashset_fast.js'] = require('./hashset_fast.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
