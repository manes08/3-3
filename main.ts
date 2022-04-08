input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    pausa = 0
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    pausa = 0
})
let pausa = 0
let pilato = game.createSprite(2, 2)
basic.forever(function () {
    let sprite: game.LedSprite = null
    sprite.move(1)
    sprite.ifOnEdgeBounce()
})
