import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    roots: [
        "<rootDir>/tests"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.ts?$": "ts-jest"
    },
    testRegex: "(.+)\.test\.(jsx?|tsx?|ts?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    /*   watchPlugins: [
           "jest-watch-typeahead/filename",
           "jest-watch-typeahead/testname"
       ],*/
    moduleNameMapper: {
        "~/(.*)": "<rootDir>/types/$1",
        "@M/(.*)": "<rootDir>/src/$1",
    },
    // runInBand: true
    // detectOpenHandles: true,
    json: true
};
export default config;

/*
// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
    };
};*/
