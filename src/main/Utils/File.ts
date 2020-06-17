import { resolve } from 'path'
export function dirList(path: string) {
    console.log('..........................................')
    console.log(path);
    console.log(__dirname)
    console.log(resolve(__dirname, '../'))
}