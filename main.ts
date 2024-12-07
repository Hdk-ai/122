input.onButtonPressed(Button.A, function () {
	
})
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    tm.showNumber(222)
    basic.pause(100)
})
