let stack = function () {

    let items = []
    function push(item) {
        items.push(item)
    }
    function pop(item){
        return items.pop(item)
    }
    function shift(){
        shifted = items[0]
        items = items.slice(1)
        return shifted
    }
    return Object.freeze({
        push,
        items,
        pop,
        shift
    })
}

module.exports = stack