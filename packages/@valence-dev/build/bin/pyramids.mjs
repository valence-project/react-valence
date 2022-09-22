#! /usr/bin/env node
import { bundle } from '@valence-dev/build';
import * as fs from 'fs';

let pkgpath = `../../../` + process.argv[2];

var filename = pkgpath + '/package.json';

let pkgjson = await import(filename, {
    assert: {
        type: "json",
    },
});

//console.log("▲ " + process.argv[2])

bundle(pkgjson.default);