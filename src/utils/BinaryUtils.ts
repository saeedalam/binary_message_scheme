export class BinaryUtils {
    public static stringToBytes(str: string): Uint8Array {
      const encoder = new TextEncoder();
      return encoder.encode(str);
    }
  
    public static bytesToString(bytes: Uint8Array): string {
      const decoder = new TextDecoder();
      return decoder.decode(bytes);
    }
  
    public static indexOf(source: Uint8Array, search: Uint8Array): number {
      let i = 0;
      let j = 0;
  
      while (i < source.length && j < search.length) {
        if (source[i] === search[j]) {
          i++;
          j++;
        } else {
          i -= j - 1;
          j = 0;
        }
      }
  
      if (j === search.length) {
        return i - j;
      }
  
      return -1;
    }
  
    public static concatArrays(arrays: Uint8Array[]): Uint8Array {
      const totalLength = arrays.reduce((length, arr) => length + arr.length, 0);
      const result = new Uint8Array(totalLength);
  
      let offset = 0;
  
      for (const arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
      }
  
      return result;
    }
  }
  