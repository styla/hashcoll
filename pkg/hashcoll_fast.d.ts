/* tslint:disable */
/* eslint-disable */
/**
*/
export class HashMap {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} capacity 
* @returns {HashMap} 
*/
  static with_capacity(capacity: number): HashMap;
/**
* @param {string} value 
* @returns {string | undefined} 
*/
  remove(value: string): string | undefined;
/**
* @param {string} key 
* @param {string} value 
* @returns {string | undefined} 
*/
  insert(key: string, value: string): string | undefined;
/**
* @param {string} value 
* @returns {boolean} 
*/
  contains(value: string): boolean;
/**
* @param {string} value 
* @returns {string | undefined} 
*/
  get(value: string): string | undefined;
/**
* @returns {number} 
*/
  len(): number;
/**
* @returns {boolean} 
*/
  is_empty(): boolean;
/**
*/
  clear(): void;
/**
* @returns {number} 
*/
  capacity(): number;
}
/**
*/
export class HashMapRaw {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} capacity 
* @returns {HashMapRaw} 
*/
  static with_capacity(capacity: number): HashMapRaw;
/**
* @param {string} key 
* @returns {Uint8Array | undefined} 
*/
  remove(key: string): Uint8Array | undefined;
/**
* @param {string} key 
* @param {Uint8Array} value 
* @returns {Uint8Array | undefined} 
*/
  insert(key: string, value: Uint8Array): Uint8Array | undefined;
/**
* @param {string} value 
* @returns {boolean} 
*/
  contains(value: string): boolean;
/**
* @param {string} value 
* @returns {Uint8Array | undefined} 
*/
  get(value: string): Uint8Array | undefined;
/**
* @returns {number} 
*/
  len(): number;
/**
* @returns {boolean} 
*/
  is_empty(): boolean;
/**
*/
  clear(): void;
/**
* @returns {number} 
*/
  capacity(): number;
}
/**
*/
export class HashSet {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} capacity 
* @returns {HashSet} 
*/
  static with_capacity(capacity: number): HashSet;
/**
* @param {string} value 
* @returns {boolean} 
*/
  remove(value: string): boolean;
/**
* @param {string} value 
* @returns {boolean} 
*/
  insert(value: string): boolean;
/**
* @param {string} value 
* @returns {boolean} 
*/
  contains(value: string): boolean;
/**
* @param {string} value 
* @returns {string | undefined} 
*/
  get(value: string): string | undefined;
/**
* @returns {number} 
*/
  len(): number;
/**
* @returns {boolean} 
*/
  is_empty(): boolean;
/**
*/
  clear(): void;
/**
* @returns {number} 
*/
  capacity(): number;
}
/**
*/
export class HashSetRaw {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} capacity 
* @returns {HashSetRaw} 
*/
  static with_capacity(capacity: number): HashSetRaw;
/**
* @param {Uint8Array} value 
* @returns {boolean} 
*/
  remove(value: Uint8Array): boolean;
/**
* @param {Uint8Array} value 
* @returns {boolean} 
*/
  insert(value: Uint8Array): boolean;
/**
* @param {Uint8Array} value 
* @returns {boolean} 
*/
  contains(value: Uint8Array): boolean;
/**
* @param {Uint8Array} value 
* @returns {Uint8Array | undefined} 
*/
  get(value: Uint8Array): Uint8Array | undefined;
/**
* @returns {number} 
*/
  len(): number;
/**
* @returns {boolean} 
*/
  is_empty(): boolean;
/**
*/
  clear(): void;
/**
* @returns {number} 
*/
  capacity(): number;
}
