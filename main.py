def my_function():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
gamePad.on_event(GamerBitPin.P8, GamerBitEvent.DOWN, my_function)

def on_forever():
    pass
basic.forever(on_forever)
