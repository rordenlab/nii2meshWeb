## About

This web page uses web assembly to convert a voxel-based NIfTI image (.nii; .nii.gz) to a triangle-based mesh format (.gii, .mz3, .obj, .ply, .stl, .vtk). For more details, see [nii2mesh](https://github.com/neurolabusc/nii2mesh).

## Live Demo

 - [Live demo hosted on GitHub](https://rordenlab.github.io/nii2meshWeb/)

## Local Usage

You can clone the project and test it locally using [http-server](https://www.npmjs.com/package/http-server). The repository comes with pre-compiled WebAssembly, but you can recompile the WASM code with the command `make wasm`. Note that Github allows you to publish your repositories as web pages, allowing you to publicly share your modifications. Commands for local testing include:

```
git clone https://github.com/rordenlab/nii2meshWeb
cd nii2meshWeb
make wasm
http-server
```

## Links

 - [nii2mesh](https://github.com/neurolabusc/nii2mesh) provides details on the core code.
 - [vtk.js](https://kitware.github.io/vtk-js/examples/ImageMarchingCubes.html) provides an alternate method for marching cubes.
 - Will Usher has created a [rust-based WASM](https://github.com/Twinklebear/webgl-marching-cubes) Marching Cubes with a nice [live demo](https://www.willusher.io/webgl-marching-cubes/#Fuel).
 - Web page and javascript wrapper based on work by [MyMiniFactory](https://github.com/MyMiniFactory/Fast-Quadric-Mesh-Simplification).