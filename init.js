const fs = require("fs");

var Config = {
    titleLevel: "###",
    tableHeader: "|编号|选项|",
    tableNeck: "|:-|:-|",
    colorMark: '<font color="red">',
    origin: {
        switch: true,
        template: "txt",
        storage: "origin",
        extra: {
            file: [],
            dir: [],
        },
    },
    data: {
        switch: true,
        template: "json",
        storage: "data",
        extra: {
            file: [],
            dir: [],
        },
    },
    view: {
        template: "md",
        storage: "view",
    },
};

fs.writeFileSync("config.json", JSON.stringify(Config, null, "\t"));