SHELL := /bin/bash

all:
	wasm-pack build --target nodejs --release

clean:
	rm -rfv pkg/ target/
