module.exports = {
    default: {
        requireModule: [
            'ts-node/register'
        ],

        require: [
            'tests/support/*.ts',
            'tests/stepdefinitions/*.ts'
        ],

        paths: [
            'tests/Features/*.feature'
        ],

        format: [
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json',
            'progress'
        ],
    }
};