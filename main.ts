basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    servos.P1.setAngle(input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
})
