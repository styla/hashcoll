#![no_std]
#![feature(core_intrinsics, lang_items)]

extern crate alloc;
extern crate wee_alloc;
w
use alloc::vec::Vec;

use wasm_bindgen;
use wasm_bindgen::prelude::*;
use alloc::string::String;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct HashSet {
    set: hashbrown::HashSet<String>,
}

#[wasm_bindgen]
impl HashSet {
    #[wasm_bindgen(constructor)]
    pub fn new() -> HashSet {
        HashSet {
            set: hashbrown::HashSet::new(),
        }
    }

    pub fn with_capacity(capacity: u32) -> HashSet {
        HashSet {
            set: hashbrown::HashSet::with_capacity(
                capacity as usize,
            ),
        }
    }

    pub fn remove(&mut self, value: String) -> bool {
        self.set.remove(&*value)
    }

    pub fn insert(&mut self, value: String) -> bool {
        self.set.insert(value)
    }

    pub fn contains(&self, value: String) -> bool {
        self.set.contains(&*value)
    }

    pub fn get(&self, value: String) -> Option<String> {
        self.set.get(&*value).cloned()
    }

    pub fn len(&self) -> usize {
        self.set.len()
    }
    pub fn is_empty(&self) -> bool {
        self.set.is_empty()
    }
    pub fn clear(&mut self) {
        self.set.clear()
    }
    pub fn capacity(&self) -> usize {
        self.set.capacity()
    }
}

#[wasm_bindgen]
pub struct HashSetRaw {
    set: hashbrown::HashSet<Vec<u8>>,
}

#[wasm_bindgen]
impl HashSetRaw {
    #[wasm_bindgen(constructor)]
    pub fn new() -> HashSetRaw {
        HashSetRaw {
            set: hashbrown::HashSet::new(),
        }
    }

    pub fn with_capacity(capacity: u32) -> HashSetRaw {
        HashSetRaw {
            set: hashbrown::HashSet::with_capacity(
                capacity as usize,
            ),
        }
    }

    pub fn remove(&mut self, value: Vec<u8>) -> bool {
        self.set.remove(&*value)
    }

    pub fn insert(&mut self, value: Vec<u8>) -> bool {
        self.set.insert(value)
    }

    pub fn contains(&self, value: Vec<u8>) -> bool {
        self.set.contains(&*value)
    }

    pub fn get(&self, value: Vec<u8>) -> Option<Vec<u8>> {
        self.set.get(&*value).cloned()
    }

    pub fn len(&self) -> usize {
        self.set.len()
    }
    pub fn is_empty(&self) -> bool {
        self.set.is_empty()
    }
    pub fn clear(&mut self) {
        self.set.clear()
    }
    pub fn capacity(&self) -> usize {
        self.set.capacity()
    }
}

#[wasm_bindgen]
pub struct HashMap {
    map: hashbrown::HashMap<String, String>,
}

#[wasm_bindgen]
impl HashMap {
    #[wasm_bindgen(constructor)]
    pub fn new() -> HashMap {
        HashMap {
            map: hashbrown::HashMap::new(),
        }
    }

    pub fn with_capacity(capacity: u32) -> HashMap {
        HashMap {
            map: hashbrown::HashMap::with_capacity(
                capacity as usize,
            ),
        }
    }

    pub fn remove(&mut self, value: String) -> Option<String> {
        self.map.remove(&*value)
    }

    pub fn insert(&mut self, key: String, value: String) -> Option<String> {
        self.map.insert(key, value)
    }

    pub fn contains(&self, value: String) -> bool {
        self.map.contains_key(&*value)
    }

    pub fn get(&self, value: String) -> Option<String> {
        self.map.get(&*value).cloned()
    }

    pub fn len(&self) -> usize {
        self.map.len()
    }
    pub fn is_empty(&self) -> bool {
        self.map.is_empty()
    }
    pub fn clear(&mut self) {
        self.map.clear()
    }
    pub fn capacity(&self) -> usize {
        self.map.capacity()
    }
}

#[wasm_bindgen]
pub struct HashMapRaw {
    map: hashbrown::HashMap<String, Vec<u8>>,
}

#[wasm_bindgen]
impl HashMapRaw {
    #[wasm_bindgen(constructor)]
    pub fn new() -> HashMapRaw {
        HashMapRaw {
            map: hashbrown::HashMap::new(),
        }
    }

    pub fn with_capacity(capacity: u32) -> HashMapRaw {
        HashMapRaw {
            map: hashbrown::HashMap::with_capacity(
                capacity as usize,
            ),
        }
    }

    pub fn remove(&mut self, key: String) -> Option<Vec<u8>> {
        self.map.remove(&*key)
    }

    pub fn insert(&mut self, key: String, value: Vec<u8>) -> Option<Vec<u8>> {
        self.map.insert(key, value)
    }

    pub fn contains(&self, value: String) -> bool {
        self.map.contains_key(&*value)
    }

    pub fn get(&self, value: String) -> Option<Vec<u8>> {
        self.map.get(&*value).cloned()
    }

    pub fn len(&self) -> usize {
        self.map.len()
    }
    pub fn is_empty(&self) -> bool {
        self.map.is_empty()
    }
    pub fn clear(&mut self) {
        self.map.clear()
    }
    pub fn capacity(&self) -> usize {
        self.map.capacity()
    }
}
