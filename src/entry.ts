import filesystem from "fs";
import path from "path";

// Rollup plugin function

const shimModules = () => {
  let shimSources = filesystem.readFileSync(path.join(__dirname, "index.js"), "utf-8");
  shimSources = shimSources.replace('var TEXT_ENCODER_THRESHOLD = 50;', 'var TEXT_ENCODER_THRESHOLD = 1000000000;')

  return {
    name: "tswrap-shims",
    renderChunk(code: string) {
      return `${shimSources}
      const __temp = (function () { \n${code}\n return __main(); })();\nclean(__temp)`;
    }
  }
}

export default shimModules;
