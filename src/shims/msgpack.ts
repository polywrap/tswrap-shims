import { encode as msgpackEncode } from "@msgpack/msgpack"

export const encode = (obj: any) => {
  return msgpackEncode(obj);
}
