
let HashTable = function(){
    let table = new Array(137);
    let values = new Array();

    let hash =(string)=> {
        // use odd prime multiplier empirically tested to have less chance of collisions
        const H   = 37;
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
    
    let put =(key, data)=>{
        const pos = hash(key);
        if(table[pos] === undefined) {
          table[pos]  = key;
          values[pos] = data;
        } else {
          while(table[pos] !== undefined) {
            pos++;
          }
          table[pos]  = key;
          values[pos] = data;
        }
      }

    return Object.freeze({
        table,
        put,
        hash,
        values
    })
}

module.exports = HashTable