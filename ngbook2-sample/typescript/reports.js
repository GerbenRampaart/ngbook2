var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Report = (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) { return console.log(line); });
    };
    return Report;
}());
function pad(s, len, pad) {
    s = s + '';
    var spaces = (len + 1) - s.length;
    return s + Array(spaces).join(pad);
}
var TabbedReport = (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        // determine max length for each column
        var lengths = headers.map(function (header, i) {
            var maxLength = header.length;
            values.forEach(function (data) {
                if (data[i].length > maxLength) {
                    maxLength = data[i].length;
                }
            });
            return maxLength;
        });
        // report data
        var data = [];
        // headers
        data.push(headers.map(function (h, i) { return pad(h, lengths[i], ' '); }).join(" "));
        // separators
        data.push(headers.map(function (h, i) { return pad('', lengths[i], '-'); }).join(" "));
        // data
        values.map(function (row) {
            data.push(row.map(function (col, i) { return pad(col, lengths[i], ' '); }).join(" "));
        });
        _super.call(this, data);
    }
    return TabbedReport;
}(Report));
var headers = ['Name', 'Gender', 'Age'];
var values = [
    ['Alice Green', 'Female', 55],
    ['Paul Pfifer', 'Male', 26],
    ['Louis Blakenship', 'Male', 44]
];
var r = new TabbedReport(headers, values);
r.run();
//# sourceMappingURL=reports.js.map