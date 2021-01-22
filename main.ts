let flash = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 2 2 2 2 f 2 f . . . 
    . . . f f 2 2 2 2 2 2 2 2 f . . 
    . . . f 2 2 2 2 2 2 2 2 2 f . . 
    . . . f 5 5 5 2 2 2 2 2 2 2 f . 
    . . . f 2 2 2 2 f f f f 2 2 f . 
    . . f f f f f f f 2 2 2 f f f . 
    . . f f 2 2 2 5 5 f 2 2 2 2 f . 
    . . f 2 2 2 2 2 2 f 2 2 2 f . . 
    . 5 5 f 2 2 2 2 2 2 2 2 f . . . 
    . 5 . . f f 2 2 2 5 2 2 f . . . 
    5 5 . 5 5 2 2 2 2 2 2 2 f . . . 
    . . . 5 . 2 2 2 2 2 2 2 f . . . 
    . 5 5 5 . f 2 2 f 2 2 2 f . . . 
    . . . . . 5 f f f f f f . . . . 
    . . 5 5 5 5 . f f f . . . . . . 
    `, SpriteKind.Player)
flash.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(flash, 500, 500)
