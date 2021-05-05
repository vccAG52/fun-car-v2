input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
basic.showString("DRIVE!")
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
