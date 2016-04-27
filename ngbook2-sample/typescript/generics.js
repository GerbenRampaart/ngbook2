var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Vehicle = (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Parser = (function () {
    function Parser(c, fields) {
        this.targetClass = c;
        this.fields = fields;
    }
    Parser.prototype.parse = function (data) {
        var _this = this;
        var result = [];
        var lines = data.split("\n");
        return lines.map(function (line) {
            var object = new _this.targetClass();
            var values = line.split(",");
            _this.fields.forEach(function (field, i) {
                object[field] = values[i];
            });
            return object;
        });
        return result;
    };
    return Parser;
}());
var personData = "John,36\nAaron,30\nPeter,20";
var personParser = new Parser(Person, ['name', 'age']);
var people = personParser.parse(personData);
console.log("*** People list:");
people.forEach(function (p) { return console.log(p); });
var vehicleData = "Toyota,Camry,2010,Blue,James Owen\nHonda,Civic,2001,Black,Adrian Snipes\nHonda,Accord,2014,White,Brian Adams\nVolkswagen,New Beatle,2007,Yellow,Alicia Keys\nMitsubishi,Eclipse,1998,Red,Joss Stone";
var vehicleParser = new Parser(Vehicle, ['brand', 'model', 'year', 'color', 'owner']);
var vehicles = vehicleParser.parse(vehicleData);
console.log("*** Vehicle list:");
vehicles.forEach(function (v) { return console.log(v); });
//# sourceMappingURL=generics.js.map