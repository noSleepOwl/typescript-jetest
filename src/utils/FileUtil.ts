import {readFileSync} from "fs";
import {createHash} from "crypto";

/**
 * 获取文件has
 * @param buffer 文件buffer
 */
function fileHash(file: Buffer | string): string {
    if (typeof file === 'string') {

    }
    const buffer = readFileSync(file)
    const fsHash = createHash('md5')
    fsHash.update(buffer);
    return fsHash.digest('hex');
}

