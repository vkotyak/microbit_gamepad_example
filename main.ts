gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    if (item.get(LedSpriteProperty.X) == 0) {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
        life += -1
        basic.pause(200)
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
    } else {
        item.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (started == 0) {
        life = 2
        score = 0
        bright = 100
        item = game.createSprite(2, 2)
        food = game.createSprite(0, 0)
        started = 1
    }
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    if (item.get(LedSpriteProperty.X) == 4) {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
        life += -1
        basic.pause(200)
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
    } else {
        item.change(LedSpriteProperty.X, 1)
    }
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    if (item.get(LedSpriteProperty.Y) == 4) {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
        life += -1
        basic.pause(200)
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
    } else {
        item.change(LedSpriteProperty.Y, 1)
    }
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    if (item.get(LedSpriteProperty.Y) == 0) {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
        life += -1
        basic.pause(200)
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
    } else {
        item.change(LedSpriteProperty.Y, -1)
    }
    music.playTone(587, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (score))
})
let food: game.LedSprite = null
let bright = 0
let score = 0
let life = 0
let item: game.LedSprite = null
let started = 0
music.setVolume(64)
basic.showString("Pres A to start game")
started = 0
basic.forever(function () {
    if (!(item.isDeleted())) {
        if (item.isTouching(food)) {
            score += 1
            food.delete()
            gamePad.vibratorMotor(gamePad.Vibrator.V1)
            basic.pause(500)
            gamePad.vibratorMotor(gamePad.Vibrator.V0)
            food = game.createSprite(randint(0, 4), randint(0, 4))
        }
    }
    if (!(food.isDeleted())) {
        if (life < 1) {
            food.delete()
            item.delete()
            basic.showString("Game over")
            basic.showString("" + (score))
            basic.showString("Pres A to start game")
            started = 0
        }
    }
})
basic.forever(function () {
    if (!(food.isDeleted())) {
        led.plotBrightness(food.get(LedSpriteProperty.X), food.get(LedSpriteProperty.Y), 0)
        basic.pause(500)
        led.plotBrightness(food.get(LedSpriteProperty.X), food.get(LedSpriteProperty.Y), 255)
    }
})
