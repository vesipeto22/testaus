function ika(a) {
    if(a === undefined || a === null){
        throw new Error('ei luku');
    }
    if (a >= 18){
        return true;
    }
    else {
         return false;
        }
    }
    module.exports = ika;