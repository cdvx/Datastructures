let stack = function () {

    let items = []
    function push(item) {
        items.push(item)
    }
    return Object.freeze({
        push,
        items
    })
}

module.exports = stack