/**
 * 文件列表的虚拟model，获取文件的源数据，
 */
export interface File {
    path: string;
    type?: string;
    md5: string;
}

