/**
 * 文件分拣器
 */
export interface FileSorting {
    /**
     *查询路径下的文件
     */
    walkFile(): void

    /**
     *分类文件
     */
    sortingFile(): void

    /**
     *移动文件
     */
    moveFile(): void
}
