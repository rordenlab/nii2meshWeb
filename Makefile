CXX := -DNII2MESH -DUSE_CLASSIC_CUBES oldcubes.c nii2mesh.c isolevel.c meshify.c quadric.c base64.c bwlabel.c radixsort.c -lm
O3 := -O3
WASM := -DHAVE_ZLIB -s USE_ZLIB=1 -s DEMANGLE_SUPPORT=1 -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap", "FS_createDataFile", "FS_readFile", "FS_unlink"]' -s ALLOW_MEMORY_GROWTH=1 -s WASM=1 -s EXPORTED_FUNCTIONS='["_simplify"]'
#WASM := -s DEMANGLE_SUPPORT=1 -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap", "FS_createDataFile", "FS_readFile", "FS_unlink"]' -s ALLOW_MEMORY_GROWTH=1 -s WASM=1 -s EXPORTED_FUNCTIONS='["_simplify"]'
noWASM := -DHAVE_ZLIB -lz

all: release

release: CXX98 += ${O3}
release: debug

debug:
	g++ ${CXX} ${noWASM}

#make wasm
wasm:
	em++ ${CXX} ${WASM} ${O3}
wasm_debug:
	em++ ${CXX} ${WASM}