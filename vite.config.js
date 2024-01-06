import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig ({
    resolve: {
        alias: {
            "0": resolve(__dirname, "src"),
        },
    },
});