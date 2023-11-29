/**
 * Creates a class with all sounds in the game
 * @date 11/22/2023 - 12:17:08 PM
 *
 * @class Audios
 * @typedef {Audios}
 * @extends {DrawableObject}
 */
class Audios extends DrawableObject {
    charackter_jump = new Audio('audio/jump.mp3');
    collectCoinMusic = new Audio('audio/collect_coin.mp3');
    collectBottleMusic = new Audio('audio/collect_bottle.mp3');
    enemyDead = new Audio('audio/chicken.mp3');
    bottleHit = new Audio('audio/glass.mp3');
    gameMusic = new Audio('audio/game_music.mp3');
    bossHit = new Audio('audio/boss_hit.mp3');
    chicksHit = new Audio('audio/chicks_sound.mp3');
}
