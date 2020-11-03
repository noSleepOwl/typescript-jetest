import {eachFolder} from "@M/file";


eachFolder("F:\\book").forEach(res => {
    console.log(res.path, res.md5)
})