const defaultOptions = {
    sourceType: "script",
    sourceFilename: undefined,
    startLine: 1,
    allowAwaitOutsideFunction: false,
    allowReturnOutsideFunction: false,
    allowImportExportEverywhere: false,
    allowSuperOutsideMethod: false,
    plugins: [],
    strictMode: null,
    ranges: false,
    tokens: false,
    createParenthesizedExpressions: false
};

function getOptions(opts) {
    const options = {}
    Object.keys(defaultOptions).forEach(propName => {
        const value = defaultOptions[propName]
        options[propName] = opts && opts[propName] != null ? opts[propName] : value
    })
    return options
}

export default class Parser {
    constructor(options, iput) {
        options = getOptions(options)
        console.log(options)
    }
}