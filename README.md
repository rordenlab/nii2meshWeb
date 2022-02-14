## About

This web page uses web assembly to convert a voxel-based NIfTI image (*.nii; .nii.gz) to a triangle-based mesh in [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file) format. For more details, see [nii2mesh](https://github.com/neurolabusc/nii2mesh).

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

## Limitations

This is a minimal demonstration project. The parent [nii2mesh](https://github.com/neurolabusc/nii2mesh) project includes many more adjustments. This minimal project can only read single file NIfTI images (.nii; .nii.gz). It only exports .obj format meshes.

## Links

 - [nii2mesh](https://github.com/neurolabusc/nii2mesh) provides details on the code.
 - The web page and javascript code is based on work by [MyMiniFactory](https://github.com/MyMiniFactory/Fast-Quadric-Mesh-Simplification).