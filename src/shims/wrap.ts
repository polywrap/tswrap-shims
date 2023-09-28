import { encode } from "./msgpack";

export var __subinvoke = function (plugin: any, method: string, args: any) {
  if (Array.isArray(args)) {
    return __subinvoke(plugin, method, args);
  } else {
    return __subinvoke(plugin, method, clean(args));
  }
};

export function clean(obj: any, root = true) {
  const x = JSON.stringify(Array.from(encode(obj)));
  return JSON.parse(x);
}