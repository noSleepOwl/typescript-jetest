
import 'chai-http'
import { request, use, expect, should } from 'chai'
import chaiHttp from 'chai-http';
use(chaiHttp);

import { name } from '!/main'

context('百度请求测试', () => {

    it('hello world', function () {
        console.log(name)
    })
})