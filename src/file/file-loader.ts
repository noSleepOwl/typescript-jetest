import {walk, WalkNext, WalkStats} from "walk";
import {File} from '~/model/FileModels'
import {fileHash, getLogger} from "@M/utils";

const logger = getLogger();

function searchFile(path: string, end: (paths: string[]) => void) {
    const paths: string[] = [];
    const walker = walk(path)
    walker.on('file', (base: string, names: WalkStats, next: WalkNext) => {
        const absolutePath = `${base}/${names.name}`
        console.log(JSON.stringify(names))
        logger.debug("检索到文件==>", absolutePath)
        paths.push(absolutePath)
        next()
    })
    walker.on('end', () => {
        end(paths)
    })
    return paths;
}

export function eachFolder(path: string): File[] {
    const filePaths = searchFile(path, filePaths => {
        filePaths.map(pth => {
            logger.debug('开始计算文件hash', pth)
            return {path: pth, md5: fileHash(pth)}
        })
    });
    return filePaths.map(pth => {
        logger.debug('开始计算文件hash', pth)
        return {path: pth, md5: fileHash(pth)}
    })
}


