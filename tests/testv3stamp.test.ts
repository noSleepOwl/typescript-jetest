import {genUrl} from "../src/utils/Utils";
import request from "supertest";

const BASE_URL = genUrl({
    schema: 'http',
    ip: '192.168.10.22',
    port: 8080,
    context: 'stamp'
})
const q = request(BASE_URL);
// jest.setTimeout(100000000)
describe('测试API', function () {
    it("获取用户", function (done) {
        q.get("/borrow/users")
            .end(function (err, res) {
                console.log(res.text)
                done()
            })
    })
    it("根据ID获取绑定用户", function (done) {
        q.get("/borrow/editUsers")
            .query({id: "123"})
            .expect(200)
    })
})
