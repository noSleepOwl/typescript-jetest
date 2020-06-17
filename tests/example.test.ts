import { isArrayLike, sum } from '../src/index'


beforeEach(function () {
})

describe('my-app:isArrayLike', () => {
    test('isArrayLike(): true', () => {
        expect(
            isArrayLike([]),
        ).toBe(true)
    })

    test('isArrayLike(): false', () => {
        expect(
            isArrayLike({}),
        ).toBe(false)
    })
    test.only('Mock function test ', function () {
        const myMock = jest.fn();

        const a = new myMock();
        const b = {};
        const bound = myMock.bind(b);
        bound();

        console.log(myMock.mock.instances);
    })
})

test('sum(1，2) 正常计算', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});


// 使用的是什么情况？  我在用的问题 ？？ 
