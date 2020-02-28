# hashcoll-fast

Fast hashset and hashmap implementation, written in Rust and compiled to Webassembly, based on hashbrown, a Rust port of Google's high-performance SwissTable hash map. 

### Usage

```sh
$ yarn add hashcoll-fast
```

#### String

##### `HashSet<String>`

```javascript
const HashSet = require("hashcoll-fast").HashSet;

const set = new HashSet(4);

set.insert('foo');
set.insert('bar');

set.contains('foo'); // true
set.contains('tree'); // false

set.remove('foo');
```

##### `HashMap<String, String>`

```javascript
const HashMap = require("hashcoll-fast").HashMap;

const map = new HashMap(4);

map.insert('foo', 'bar');
map.insert('tree', 'house');

map.contains('foo'); // true
map.contains('zig'); // false

map.remove('foo'); // 'bar'
```

#### `Vec<u8>`

##### `HashSetRaw<Vec<u8>>`

```javascript
const HashSetRaw = require("./pkg").HashSetRaw;

const set = new HashSetRaw(4);

set.insert(Buffer.from('foo'));
set.insert(Buffer.from('bar'));

set.contains(Buffer.from('foo')); // true
set.contains(Buffer.from('tree')); // false

set.remove(Buffer.from('foo')); // Uint8Array(3) [ 102, 111, 111 ]
```

##### `HashMap<String, Vec<u8>>`

```javascript
const HashMapRaw = require("hashcoll-fast").HashMap;

const map = new HashMapRaw(4);

map.insert('foo', Buffer.from('bar'));
map.insert('tree', Buffer.from('house'));

map.get('foo'); // // Uint8Array(3) [ 102, 111, 111 ]
map.get('trexe'); // undefined

map.contains('foo'); // true
map.contains('zig'); // false

map.remove('foo'); // Uint8Array(3) [ 102, 111, 111 ]
```

### Build

```sh
$ make
```
