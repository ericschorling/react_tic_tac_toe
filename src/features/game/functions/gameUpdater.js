export const gameUpdater =(gameBoard, posArray,team)=>{
    console.log(gameBoard, posArray)
    let updateValue
    let newBoard = [[...gameBoard[0]],[...gameBoard[1]],[...gameBoard[2]]]
    team === 2 ? updateValue = 'X' : updateValue ='O'
    newBoard[posArray[0]][posArray[1]] = updateValue

    let didWin = testWin(newBoard)
    if(didWin){
        console.log("Game Won")
        return [newBoard,1,didWin]
    } else {
        return [newBoard, undefined, undefined]
    }
    
}

export const testWin = (gameboard)=> {
    let teamOneAcross = 0
    let teamOneDown = 0
    let teamOneDiag = 0
    let teamTwoAcross = 0
    let teamTwoDown = 0
    let teamTwoDiag = 0
    for (let x = 0; x < gameboard.length; x++){
        for (let y = 0; y < gameboard.length; y++){
            if(gameboard[x][y] === 'X'){
                teamOneAcross += 1
            }
            if(gameboard[x][y] === 'O'){
                teamTwoAcross += 1
            }
        }
        console.log(teamOneAcross,teamTwoAcross)
        
        if (teamOneAcross === 3 || teamOneDown === 3 || teamOneDiag === 3) {
            return 'X'
        }
        if (teamTwoAcross === 3 || teamTwoDown === 3 ||teamTwoDiag === 3) {
            return 'O'
        }
        teamOneAcross = 0
        teamTwoAcross = 0
        for (let y = 0; y < gameboard.length; y++){
            if(gameboard[y][x] === 'X'){
                teamOneDown += 1
            }
            if(gameboard[y][x] === 'O'){
                teamTwoDown += 1
            }
        }
        if (teamOneAcross === 3 || teamOneDown === 3 || teamOneDiag === 3) {
            return 'X'
        }
        if (teamTwoAcross === 3 || teamTwoDown === 3 ||teamTwoDiag === 3) {
            return 'O'
        }
        teamOneDown = 0
        teamTwoDown = 0
    }
    for (let x = 0; x<3; x++){
        if(gameboard[x][x] === 'X'){
            teamOneDiag += 1
        }
        if(gameboard[x][x] === 'O'){
            teamTwoDiag += 1
        }
    }
    if (teamOneAcross === 3 || teamOneDown === 3 || teamOneDiag === 3) {
        return 'X'
    }
    if (teamTwoAcross === 3 || teamTwoDown === 3 ||teamTwoDiag === 3) {
        return 'O'
    }
    teamOneDiag = 0
    teamTwoDiag = 0

    if(gameboard[0][2] === 'X'){
        teamOneDiag +=1
    }
    if(gameboard[1][1] === 'X'){
        teamOneDiag +=1
    }
    if(gameboard[2][0] === 'X'){
        teamOneDiag +=1
    }
    if(gameboard[0][2] === 'O'){
        teamTwoDiag +=1
    }
    if(gameboard[1][1] === 'O'){
        teamTwoDiag +=1
    }
    if(gameboard[2][0] === 'O'){
        teamTwoDiag +=1
    }
    if (teamOneAcross === 3 || teamOneDown === 3 || teamOneDiag === 3) {
        return 'X'
    }
    if (teamTwoAcross === 3 || teamTwoDown === 3 ||teamTwoDiag === 3) {
        return 'O'
    }
    // return "No Win Yet"
}