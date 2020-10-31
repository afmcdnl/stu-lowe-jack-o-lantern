input.onButtonPressed(Button.A, function () {
    lights += 1
})
input.onButtonPressed(Button.B, function () {
    flicker = 1 - flicker
})
let flicker = 0
let lights = 0
flicker = 0
let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (lights == 0) {
        strip.clear()
        strip.show()
    }
    if (lights == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (lights == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (lights == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (lights == 4) {
        strip.showRainbow(1, 360)
        lights = 5
    }
    if (lights == 5) {
        strip.rotate(1)
        strip.show()
    }
    if (lights >= 6) {
        lights = 0
    }
})
basic.forever(function () {
    if (flicker == 1) {
        strip.setBrightness(0)
        basic.pause(randint(0, 10))
        strip.setBrightness(255)
        basic.pause(randint(50, 200))
    } else {
        strip.setBrightness(255)
    }
})
