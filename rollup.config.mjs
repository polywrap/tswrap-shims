import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      dir: "./build",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ sourceMap: true }), nodeResolve()],
};
