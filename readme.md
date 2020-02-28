# hashcoll-fast

Fast hashset and hashmap implementation, written in Rust and compiled to Webassembly, based on hashbrown, a Rust port of Google's high-performance SwissTable hash map. 

### Usage

```sh
$ yarn add hashcoll-fast
```

#### HashSet

```javascript
const HashSet = require("hashcoll-fast").HashSet;

const set = new HashSet(4);

set.insert('foo');
set.insert('bar');

set.contains('foo'); // true
set.contains('tree'); // false

set.remove('foo');
```

#### HashMap

```javascript
const HashMap = require("hashcoll-fast").HashMap;

const map = new HashMap(4);

set.insert('foo', 'bar');
set.insert('tree', 'house');

set.contains('foo'); // true
set.contains('zig'); // false

set.remove('foo'); // 'bar'
```

### Build

```sh
$ make
```
