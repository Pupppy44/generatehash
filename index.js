var Crypto = require("crypto");

/**
 * Generates a random hash. Supports `sha1`, `md5`, `sha256`, and `sha512`.
 * @param {String} type 
 */
var GenHash = function(type) {
    if (!type) throw new Error("Hash method invalid or not supported");
    type = type.toLowerCase();
    switch(type) {
        case "sha1":
            return Crypto.createHash('sha1').update(Math.random().toString()).digest('hex');
            break;
        case "md5":
            return Crypto.createHash("md5").update(Math.random().toString()).digest("hex");
            break;
        case "sha512":
            return Crypto.createHash("sha512").update(Math.random().toString()).digest("hex");
            break;
        case "sha256":
            return Crypto.createHash("sha256").update(Math.random().toString()).digest("hex");
            break;
        default:
            throw new Error("Hash method invalid or not supported");
            break;
    }
}

module.exports = GenHash;