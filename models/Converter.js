function Converter(value, inputUnit, outputUnit) {
    this.value = value;
    this.inputUnit = inputUnit;
    this.outputUnit = outputUnit;

    this.convertResult = function () {
        let result = 0;
        let inMeters = 0;

        switch (this.inputUnit) {

            case"mm":
                inMeters = this.value / 1000;
                break;
            case"cm":
                inMeters = this.value / 100;
                break;
            case"m":
                inMeters = this.value;
                break;
            case"km":
                inMeters = this.value * 1000;
                break;
            case"mi":
                inMeters = this.value / 0.000621371192;
                break;
            case"yd":
                inMeters = this.value / 1.0936133;
                break;
            case"ft":
                inMeters = this.value / 3.2808399;
                break;
            case"in":
                inMeters = this.value / 39.3700787;
                break;
        }

        switch (this.outputUnit) {

            case"mm":
                result = inMeters * 1000;
                break;
            case"cm":
                result = inMeters * 100;
                break;
            case"m":
                result = inMeters;
                break;
            case"km":
                result = inMeters / 1000;
                break;
            case"mi":
                result = inMeters* 0.000621371192;
                break;
            case"yd":
                result = inMeters * 1.0936133;
                break;
            case"ft":
                result = inMeters * 3.2808399;
                break;
            case"in":
                result = inMeters * 39.3700787;
                break;
        }

        return result;
    }
}

module.exports = Converter;
