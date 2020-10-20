import {genUrl} from '@M/Utils'

test("hello world ...", () => {
    expect(genUrl()).toBe("http://localhost:8080/api")
})
