function lippu(a) {
    
    if(a === undefined || a === null){
        throw new Error('ei luku');
    }
        if (a <= 7){
            return '0€';
        }
        else if(a <= 16) {
            return '1€';
        }
        else if(a <= 25) {
            return '1.5€';
        }
        else if(a <= 64) {
            return '3€';
        }
        else if(a >= 65) {
            return '1.5€';
        }
    }
    module.exports = lippu;