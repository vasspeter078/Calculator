let calculator = {
    input: [],
    addInput: function (newInput) {
        if (/^[0-9]*\.?[0-9]*$/.test(newInput)) {
            if (/^[0-9]*\.?[0-9]*$/.test(this.input[this.input.length - 1])) {
                this.input[this.input.length - 1] += newInput
            } else {
                this.input.push(newInput)
            }
        } else {
            this.input.push(newInput)
        }
    },
    getInput: function () {
        let str = ""
        for (let i = 0; i < this.input.length; ++i) {
            str += this.input[i]
        }
        return str
    },
    cancelInput: function () {
        if (this.input.length >= 1) {
            this.input[this.input.length - 1] = this.input[this.input.length - 1].toString().slice(0, -1)
            if (this.input[this.input.length - 1] == "") {
                this.input.pop()
            }
        }
    },
    clearInput: function () {
        this.input = []
    },
    evaluate: function () {
        let size = this.input.length
        for (let i = 0; i < size; ++i) {
            if (this.input[i] == "/") {
                this.input.splice(i - 1, 3, this.input[i - 1] / this.input[i + 1])
                i -= 2
            }
        }
        size = this.input.length
        for (let i = 0; i < size; ++i) {
            if (this.input[i] == "*") {
                this.input.splice(i - 1, 3, this.input[i - 1] * this.input[i + 1])
                i -= 2
            }
        }
        size = this.input.length
        for (let i = 0; i < size; ++i) {
            if (this.input[i] == "-") {
                this.input.splice(i - 1, 3, this.input[i - 1] - this.input[i + 1])
                i -= 2
            }
        }
        size = this.input.length
        for (let i = 0; i < size; ++i) {
            if (this.input[i] == "+") {
                this.input.splice(i - 1, 3, +this.input[i - 1] + +this.input[i + 1])
                i -= 2
            }
        }
        return this.input
    }
}

$(document).ready(function(){
    $("#onoff-button").click(function(){
        calculator.clearInput()
        $("#outputtext").val(calculator.getInput())
        $("#outputtext").css("background-color", $("#outputtext").css("background-color") == "rgb(255, 255, 255)" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)")
    })

    $("#clear-button").click(function(){
        calculator.clearInput()
        $("#outputtext").val(calculator.getInput())
    })

    $("#cancel-button").click(function(){
        calculator.cancelInput()
        $("#outputtext").val(calculator.getInput())
    })

    $("#zero-button").click(function(){
        calculator.addInput("0")
        $("#outputtext").val(calculator.getInput())
    })

    $("#one-button").click(function(){
        calculator.addInput("1")
        $("#outputtext").val(calculator.getInput())
    })

    $("#two-button").click(function(){
        calculator.addInput("2")
        $("#outputtext").val(calculator.getInput())
    })

    $("#three-button").click(function(){
        calculator.addInput("3")
        $("#outputtext").val(calculator.getInput())
    })

    $("#four-button").click(function(){
        calculator.addInput("4")
        $("#outputtext").val(calculator.getInput())
    })

    $("#five-button").click(function(){
        calculator.addInput("5")
        $("#outputtext").val(calculator.getInput())
    })

    $("#six-button").click(function(){
        calculator.addInput("6")
        $("#outputtext").val(calculator.getInput())
    })

    $("#seven-button").click(function(){
        calculator.addInput("7")
        $("#outputtext").val(calculator.getInput())
    })

    $("#eight-button").click(function(){
        calculator.addInput("8")
        $("#outputtext").val(calculator.getInput())
    })

    $("#nine-button").click(function(){
        calculator.addInput("9")
        $("#outputtext").val(calculator.getInput())
    })

    $("#plus-button").click(function(){
        calculator.addInput("+")
        $("#outputtext").val(calculator.getInput())
    })

    $("#minus-button").click(function(){
        calculator.addInput("-")
        $("#outputtext").val(calculator.getInput())
    })

    $("#mul-button").click(function(){
        calculator.addInput("*")
        $("#outputtext").val(calculator.getInput())
    })

    $("#div-button").click(function(){
        calculator.addInput("/")
        $("#outputtext").val(calculator.getInput())
    })

    $("#equals-button").click(function(){
        calculator.input = calculator.evaluate()
        $("#outputtext").val(calculator.getInput())
    })

    $("#comma-button").click(function(){
        calculator.addInput(".")
        $("#outputtext").val(calculator.getInput())
    })
})