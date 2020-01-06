let queue = function () {

    let items = []

    function enqueue(item){
        return items.push(item)
    }
    function dequeue(){
        return items.shift()
    }
    
    return Object.freeze({
        items,
        enqueue,
        dequeue
    })
}

module.exports = queue