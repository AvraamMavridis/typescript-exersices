"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fixPolishFlag(rows) {
    let indexOfWhite = rows.indexOf('W');
    let lastIndexOfRed = rows.lastIndexOf('R');
    let moves = 0;
    while (indexOfWhite < lastIndexOfRed) {
        [rows[indexOfWhite], rows[lastIndexOfRed]] = [rows[lastIndexOfRed], rows[indexOfWhite]];
        indexOfWhite = rows.indexOf('W');
        lastIndexOfRed = rows.lastIndexOf('R');
        moves++;
    }
    return { flag: rows, moves };
}
exports.default = fixPolishFlag;
