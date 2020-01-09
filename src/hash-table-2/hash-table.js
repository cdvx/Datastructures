// Hashtable using chaining for colision resolution and
// with dynamic length

let Hashtable = function(){
    let table = new Array();

    let hash =(string)=> {
        const H   = 53;
        let total = 0;
    
        for (var i = 0; i < string.length; i++) {
          total += H * total + string.charCodeAt(i);
        }
        total %= table.length;
        if (total < 1) {
          table.length -1
        }
        return parseInt(total);
      }

    return Object.freeze({
        table,
        hash
    })
}

module.exports = Hashtable;