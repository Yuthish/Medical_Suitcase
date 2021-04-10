const crypto = require("crypto");
const { monitorEventLoopDelay } = require("perf_hooks");

const hash_block = (block) =>{
    block = JSON.stringify(block);
    return crypto.createHash('sha256').update(block).digest('base64');
}
// console.log(hash_block({a:12,tranc:"jofin"}))


const mine = (difficulty) =>{
    const nonce = (Math.random()) * 999999999;
    var salt = 0;
    diff = new Array(difficulty + 1).join( 0 );
    while (crypto.createHash('md5').update(String(salt + nonce)).digest('base64').substring(0, difficulty) !== diff){
        salt += 1;
        
    }
    return salt;
}
// console.log(mine(3));

module.exports = {
    hash_block,
    mine
}