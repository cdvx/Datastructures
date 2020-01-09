// Hashtable using chaining for colision resolution and
// with dynamic length

let Hashtable = function(){
    let table = new Array();
   
    this.buildChains = (() => {
        table.forEach ((i)=> {
          table[i] = new Array();
        })
      })()

    let hash =(string)=> {
        const H   = 53;
        let total = 0;
    
        Array.from(string).forEach ((i)=> {
          total += H * total + string.charCodeAt(i);
          return total
        })
        total %= table.length;
        if (total < 1) {
          table.length -1
        }
        return parseInt(total);
      }

    let put = (key, value)=>{
        const pos = hash(key);
        const bucket = table[pos]
        if (bucket !== undefined) {
            bucket.push(value)
        }
        else {
            table[pos] = [value]
        }
    }

    let get = (key) => {
        const pos = hash(key)
        return table[pos].length > 1 ? table[pos] : table[pos][0];
    }
    

    return Object.freeze({
        table,
        hash,
        put,
        get
    })
}

module.exports = Hashtable;