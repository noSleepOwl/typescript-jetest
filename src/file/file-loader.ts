import {walk, WalkNext, WalkStats} from "walk";


function searchFile(path: string) {
    walk(path, {
        listeners: {
            file: function (base: string, names: WalkStats, next: WalkNext) {
                const absolutePath = `${base}/${names.name}`
                next()
            },
        }
    })
}


