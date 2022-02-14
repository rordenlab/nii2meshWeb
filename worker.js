self.addEventListener('message', function(e) {
	console.log(e.data)
    const file = e.data.blob;
    const percentage = e.data.percentage;
		const fillBubbles = e.data.fillBubbles
		const preSmooth  = e.data.preSmooth
		const isoDarkMediumBright123 = e.data.isoDarkMediumBright123
		const onlyLargest = e.data.onlyLargest
		const postSmooth = e.data.postSmooth
    const simplify_name = e.data.simplify_name;

    prepare_and_simplify(file, percentage, isoDarkMediumBright123, fillBubbles, preSmooth, onlyLargest, postSmooth, simplify_name);
}, false);

var Module = {
    'print': function(text) {
        self.postMessage({"log":text});
    }
};

self.importScripts("a.out.js");

let last_file_name = undefined;

function prepare_and_simplify(file, percentage, isoDarkMediumBright123, fillBubbles, preSmooth, onlyLargest, postSmooth,simplify_name) {

    var filename = file.name;

    // if simplify on the same file, don't even read the file
    if (filename === last_file_name) {
        console.log("skipping load and create data file");
        simplify(filename, percentage, simplify_name);
        return;
    } else { // remove last file in memory
        if (last_file_name !== undefined)
            Module.FS_unlink(last_file_name);
    }

    last_file_name = filename;
    var fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr. onloadend = function (e) {
        var data = new Uint8Array(fr.result);
        Module.FS_createDataFile(".", filename, data, true, true);
        simplify(filename, percentage, isoDarkMediumBright123, fillBubbles, preSmooth, onlyLargest, postSmooth,simplify_name);
    }
}

function simplify(filename, percentage, isoDarkMediumBright123=2, fillBubbles=0, preSmooth=1, onlyLargest=0, postSmooth=0,simplify_name='simplified.obj') {
    //let isoDarkMediumBright123 = 2; //Otsu isolevel: 1=dark, 2=medium, 3=bright
    //let preSmooth = 1; //0/1: no/yes
    //let onlyLargest = 0; //0/1: no/yes
    //let fillBubbles = 0; //0/1: no/yes
    //let postSmooth = 0; //0..4096: iterative, 
		console.log(filename, percentage, isoDarkMediumBright123, fillBubbles, preSmooth, onlyLargest, postSmooth, simplify_name)
    Module.ccall("simplify", // c function name
        undefined, // return
        ["string", "number", "number", "number", "number", "number", "number", "string"], // param
        [filename, isoDarkMediumBright123, preSmooth, onlyLargest, fillBubbles, postSmooth, percentage, simplify_name]
    );
    let out_bin = Module.FS_readFile(simplify_name);
    // sla should work for binary stl
    let file = new Blob([out_bin], {type: 'application/sla'});
    self.postMessage({"blob":file});
}