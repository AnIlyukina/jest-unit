function pigIt(str){
    //Code here
    return str
        .split(' ')
        .map(item => !/^[\W]+$/.test(item) ? item.slice(1) + item[0] + 'ay' : item)
        .join(' ')
}