

module.exports = {

    reporters:[
        'default',
        ['jest-junit',{
            outputDirectory: "/jestTest",
            outputName: "jestReport"
        }

        ]
    ]

}