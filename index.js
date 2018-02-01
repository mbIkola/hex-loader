/*
 *   MIT License http://www.opensource.org/licenses/mit-license.php
 *     Author Nickolay "mbIkola" Kharchevin <kharchevyn@gmail.com>
 *     */
module.exports = function(source) {
        let str = Buffer.from(source).toString('hex');
            return 'module.exports = "' + str + '"' ;
}


