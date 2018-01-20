module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    globals: {
        NODE_ENV: 'test'
    },
    moduleFileExtensions: ['js', 'jsx', 'json'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
