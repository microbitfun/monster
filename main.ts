basic.showIcon(IconNames.Skull)
basic.forever(function () {
    servos.P1.setAngle(input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
})
