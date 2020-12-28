scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom) && sprite.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanDepths2)) {
        if (first_touch) {
            info.changeScoreBy(1)
        }
        first_touch = false
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    Taco.destroy(effects.disintegrate, 500)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    first_touch = true
    mySprite.vy = -150
})
let projectile2: Sprite = null
let Taco: Sprite = null
let first_touch = false
let mySprite: Sprite = null
music.playMelody("F A C F - D G C ", 120)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . 
    . . f f 2 2 2 2 2 2 2 2 f f 
    f f f f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 9 9 9 9 9 2 2 f 
    f 2 2 f 2 6 9 9 9 9 9 6 2 f 
    f 2 2 f 2 2 6 6 6 6 6 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 2 f 
    f 2 2 f 2 2 2 f f 2 2 2 2 f 
    f 2 2 f 2 2 2 f f 2 2 2 2 f 
    f 2 2 f 2 2 2 f f 2 2 2 2 f 
    f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
game.showLongText("Hello Hi welcome to among us, fix the ship, look out for imposters", DialogLayout.Bottom)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000001010100000000000000000000000000000101000000000000000001000000000001010000000000010101010101000000010101010101010100000000010000000101000000000000000000000100000001010000000000000000000001000000010100000000010000000000010000000101010101010101000101010101010001010000000001000000010000000000010100000000000000000100000000000101000000000000000000000000000001010000000000000000000000000000010101000000010000000100000000010101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 . . . . . 2 
    2 . . . . . 2 2 2 2 2 2 . . . 2 
    2 2 2 2 2 2 2 . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . 2 . . . . . 2 . . . 2 
    2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
    2 . . . . 2 . . . 2 . . . . . 2 
    2 . . . . . . . . 2 . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 . . . 2 . . . 2 . . . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,sprites.builtin.brick], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
// the player is constantly "hitting" the wall when they are standing on it, but we only want to score one point per jump, so use this to track the first jump
first_touch = true
Taco = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . 5 2 2 2 2 2 5 . . . . 
    . . . . 5 2 7 7 7 7 7 2 5 . . . 
    . . . 5 2 7 5 5 5 5 5 7 2 5 . . 
    . . 5 2 7 5 5 5 5 5 5 5 7 2 5 . 
    . . 2 7 5 5 5 5 5 5 5 5 5 7 2 . 
    . . 7 5 5 5 5 5 5 5 5 5 5 5 7 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.setScore(0)
info.setLife(3)
