import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
            exports: "named"
        },
        {
            file: "dist/index.js",
            format: "esm",
            sourcemap: true
        },
        {
            file: "dist/index.umd.js",
            format: "umd",
            name: "MaskAnyNumber",
            sourcemap: true
        },
        {
            file: "dist/index.umd.min.js",
            format: "umd",
            name: "MaskAnyNumber",
            plugins: [terser()],
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        json()
    ]
};
