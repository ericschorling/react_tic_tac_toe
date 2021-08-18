const position = (number) =>{
    if(number < 40) {
        return 0
    } else if (number >= 40 && number <= 70) {
        return 1
    } else {
        return 2
    }
}

export const simplePlayLogic = (gameboard) => {
    let row = position(Math.floor((Math.random() *100) +1))
    let column = position(Math.floor((Math.random() *100) +1))
    let check = true
    while (check) {
        if (gameboard[row][column] === ''){
            return [row,column]
        } else {
            row = position(Math.floor((Math.random() *100) +1))
            column = position(Math.floor((Math.random() *100) +1))
        }
    }
}

export const aiPlayLogic = (gameboard) => {
    if (gameboard[1][1] === ''){
        return [1,1]
    }
}