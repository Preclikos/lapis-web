/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
var fs = require("fs");
var path = require("path");
function findFiles(rootDir, excludes) {
    var files = [];
    function getFiles(folder) {
        var items = fs.readdirSync(folder, { withFileTypes: true });
        items.forEach(function (item) {
            if (!excludes.includes(item.name)) {
                if (!item.isDirectory()) {
                    if (path.extname(item.name) === ".css") {
                        files.push(path.join(folder, item.name));
                    }
                }
                else {
                    getFiles(path.join(folder, item.name));
                }
            }
        });
    }
    getFiles(rootDir);
    return files;
}
function concatFiles(options) {
    if (options.src) {
        var files = findFiles(options.src, options.excludes || []);
        var data_1 = "";
        files.forEach(function (file) {
            data_1 += fs.readFileSync(file) + "\n";
        });
        var directory = options.dest;
        if (options.dest !== "" && !fs.existsSync(directory)) {
            directory = fs.mkdirSync(options.dest, { recursive: true });
        }
        var destPath = path.join(directory, options.name);
        fs.writeFileSync(destPath, data_1);
    }
    else {
        console.log("\x1b[31m%s\x1b[0m", "please enter in the valid format as per the readme.");
    }
}
export default concatFiles;
//# sourceMappingURL=concat.js.map