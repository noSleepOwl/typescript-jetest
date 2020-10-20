import {walk, WalkNext, WalkStats} from "walk";
import {lstatSync, existsSync} from "fs"
import {extname} from 'path'
import {FileSorting} from "~/FileControl";

export namespace files {
    /**
     * 文件分组
     */
    class FileGroup {
        private typeSet: Set<string> = new Set<string>()

    }

    class Files {
        private type: string = '';
        private files: string[] = []

        set setType(type: string) {

        }
    }


    class FileSortingImpl implements FileSorting {
        constructor(private path: string) {
            this.pathCheck();
        }

        private pathCheck() {
            if (!this.path) {
                throw Error("路径不可为空")
            }
            if (!existsSync(this.path)) {
                throw Error("路径不存在")
            }
            const state = lstatSync(this.path)
            if (state.isFile()) throw Error("不是一个路径")
        }

        moveFile(): void {
        }

        sortingFile(): void {
        }

        walkFile(): void {
            walk(this.path, {
                listeners: {
                    file: function (base: string, names: WalkStats, next: WalkNext) {
                        const absolutePath = `${base}/${names.name}`
                        const fileType = extname(absolutePath)
                        next()
                    },
                }
            })
        }
    }

    export function walkFile(path: string) {
    }
}


files.walkFile("D:\\work\\project\\PRO_DEV\\WebRoot\\js\\borrow")
