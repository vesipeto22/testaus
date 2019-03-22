function osamaara(a, b) {
    if(a === undefined || a === null){
        throw new Error('ei luku');
    }
    if(b === undefined || b === null){
        throw new Error('ei luku');
    }
    if(a == 0){
        throw new Error('nollalla jako');
    }

    if(b == 0){
        throw new Error('nollalla jako');
    }
    return a / b;
} 
module.exports = osamaara;