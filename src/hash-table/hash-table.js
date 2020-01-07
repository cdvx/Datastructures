class hashTable {
  constructor() {
    this.table  = new Array(137);
    this.values = new Array();
  }
}

let HashTable = function(){
    let table = new hashTable().table
    // let 

    return Object.freeze({
        table
    })
}

module.exports = HashTable