import {readFileSync} from "fs";
import {createHash} from "crypto";

/**
 * 获取文件has
 * @param file 文件路径或者数据
 */
export function fileHash(file: Buffer | string): string {
    const fsHash = createHash('md5')
    if (typeof file === 'string') {
        const buffer = readFileSync(file)
        fsHash.update(buffer);
    } else {
        fsHash.update(file)
    }
    return fsHash.digest('hex');
}

