#!/bin/sh

(
    set -ex
    
    cd perf-inspect
    yarn tsc
    yarn rollup -c
    sass sass/main.scss dist/tracecap-viewer.css
)
