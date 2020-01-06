let queue = function () {

    let items = []

    function enqueue(item){
        return items.push(item)
    }
    
    return Object.freeze({
        items,
        enqueue
    })
}

module.exports = queue