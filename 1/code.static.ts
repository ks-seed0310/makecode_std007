input.onButtonPressed(Button.A, function () {
    // (f2=0)
    if ((~(f1|f2))&1) {
        // f1==0&&f2==0
        f1 = 1
    } else {
        flag_reset(2)
    }
})
function flag_reset (mode: number) {
    f1 = 0
    f2 = 0
    f3_stat_1 = 0
    f3_activ = 0
    if (mode == 0) {
        basic.clearScreen()
    } else if (mode == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
    } else if (mode == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # # .
            # # . # .
            # . . . #
            . # . # #
            . # # . .
            `)
        basic.pause(100)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.pause(100)
        }
        flag_reset(0)
        return 1
    }
    basic.pause(1000)
    f3_activ = 1
    return 0
}
input.onGesture(Gesture.Shake, function () {
    if (f1&f2) {
        flag_reset(1)
    } else {
        flag_reset(2)
    }
    flag_reset(0)
})
input.onButtonPressed(Button.B, function () {
    // (f1=0)
    if ((f1 & ~f2) & 1) {
        // f1==1&&f2==0
        f2 = 1
    } else {
        flag_reset(2)
    }
})
let f3_activ = 0
let f3_stat_1 = 0
let f2 = 0
let f1 = 0
flag_reset(0)
basic.forever(function () {
    if (f3_activ) {
        if (f3_stat_1) {
            led.unplot(2, 2)
            f3_stat_1 = 0
        } else {
            led.plot(2, 2)
            f3_stat_1 = 1
        }
        basic.pause(500)
    } else {
    	
    }
})
