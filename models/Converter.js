function Converter(Operand, operator, operator2) {
    this.Operand = Operand;
    this.operator = operator;
    this.operator2 = operator2;

    this.convertResult = function () {
        let result = 0;
        let inMeter = 0;

        switch (this.operator) {

            case"mm":
                inMeter = this.Operand / 1000;
                break;
            case"cm":
                inMeter = this.Operand / 100;
                break;
            case"m":
                inMeter = this.Operand;
                break;
            case"km":
                inMeter = this.Operand * 1000;
                break;
            case"mi":
                inMeter = this.Operand / 0.000621371192;
                break;
            case"yd":
                inMeter = this.Operand / 1.0936133;
                break;
            case"ft":
                inMeter = this.Operand / 3.2808399;
                break;
            case"in":
                inMeter = this.Operand / 39.3700787;
                break;
        }

        switch (this.operator2) {

            case"mm":
                result = inMeter * 1000;
                break;
            case"cm":
                result = inMeter * 100;
                break;
            case"m":
                result = inMeter;
                break;
            case"km":
                result = inMeter / 1000;
                break;
            case"mi":
                result = inMeter* 0.000621371192;
                break;
            case"yd":
                result = inMeter * 1.0936133;
                break;
            case"ft":
                result = inMeter * 3.2808399;
                break;
            case"in":
                result = inMeter * 39.3700787;
                break;
        }

        return result;
    }
}

module.exports = Converter;