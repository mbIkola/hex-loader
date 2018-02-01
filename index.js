/*
 *   MIT License http://www.opensource.org/licenses/mit-license.php
 *     Author Nickolay "mbIkola" Kharchevin <kharchevyn@gmail.com>
 *
 */
module.exports = function(source) {
        return 'module.exports = "' + source.toString('hex') + '"' ;
}
module.exports.raw = true;




