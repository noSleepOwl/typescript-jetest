import {genUrl} from '@M/utils'
import {Response} from 'superagent'
import request from 'supertest'

let baseUrl = genUrl({
    schema: 'http',
    ip: '192.168.2.222',
    port: 11002,
    context: 'api'
})
const q = request(baseUrl);

type CallbackHandler = (err: any, res: Response) => void;


test("/version/getVersion", done => {
    q.post("/version/getVersion")
        .end((err, res) => {
            console.log(err)
            console.log(res.text)
        })
})

describe('API请求测试', function () {
    function requestPost(path: string) {
        return () => q.post(path);
    }

    let getToken = requestPost('/token/getToken')

    function getTokenTest(query: object, callBack?: CallbackHandler) {
        return getToken()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .query(query)
            .end(callBack)
    }

    let token = ''
    beforeAll(function (done: jest.DoneCallback) {
        getTokenTest({restname: 'tes', password: '123456'}, (err, res) => {
            if (!err) throw new Error(err);
            token = res.body.data.token;
            done();
        })
    });

    describe("token 模块", function () {
        describe('getToken', function () {
            it('获取token', function (done: jest.DoneCallback) {
                getTokenTest({restname: 'tes', password: '123456'}, (err, res) => {
                    expect(err).not.toBeNull;
                    expect(res).toHaveProperty('status', 200)
                })
            })
        })
    })
})

