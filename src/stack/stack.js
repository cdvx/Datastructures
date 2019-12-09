let stack = function () {

    let items = []
    function push(item) {
        items.push(item)
    }
    function pop(item){
        return items.pop(item)
    }

    return Object.freeze({
        push,
        items,
        pop
    })
}

module.exports = stack