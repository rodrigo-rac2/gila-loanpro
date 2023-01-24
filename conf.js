const {browser} = require("protractor");

exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },
    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './cucumber/*.feature'
    ],

    // cucumber command line options
    cucumberOpts: {
        require: ['./cucumber/*.js'],
        tags: [],
        strict: true,
        format: ["pretty"],
        'dry-run': false,
        compiler: []
    },
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};
