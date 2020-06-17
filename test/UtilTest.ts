import { FileUtils } from 'Utils'

describe.only("工具类测试", function () {
    describe("FILE 工具，测试", function () {
        it("读取文件列表", function () {
            FileUtils.dirList("../")
        })
    })
})