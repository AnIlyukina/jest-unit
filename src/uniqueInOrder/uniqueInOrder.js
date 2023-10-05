const uniqueInOrder=function(iterable){
    let result = []
    let uniqSymbol = null
    for (let i = 0; i < iterable.length; i++) {
        if (!uniqSymbol) {
            uniqSymbol = iterable[i]
            result.push(uniqSymbol)
        }
        if (uniqSymbol !== iterable[i + 1] && iterable[i + 1]) {
            uniqSymbol = iterable[i + 1]
            result.push(uniqSymbol)
        }
    }
    return result
}

const result = uniqueInOrder([1,2,2,3,3])