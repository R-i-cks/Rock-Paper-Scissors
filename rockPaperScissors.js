function computerPlay(){
    const jogada =Math.floor(Math.random()*3);
    let message ='Play'
    if (jogada == 0) {
        message = 'Rock'
    }
    else if (jogada == 1) {
        message = 'Paper'
    }
    else{
        message ='Scissors'
    }
    message = message.toLowerCase();
    return message
}

function playerSelection(){
    const choice = prompt('Rock, Paper or Scissors?');
    const realChoice = choice.toLowerCase();
    if (realChoice=='rock' || realChoice =='paper' || realChoice=='scissors'){
        return realChoice
    }
    else{
        return('Invalid Entry! Try again!');
    }
}

function playing(player,pc){

    if (player == pc){
        return(`It's a Drawn`)
    }
    else{
        switch (player) {
            case 'rock' :
                if (pc == 'scissors'){
                    return(`You Win! ${player} beats ${pc}`);
                }
                else{
                    return(`You Lose! ${pc} beats ${player}`);
                }
            case 'paper' :
                if (pc == 'rock'){
                    return(`You Win! ${player} beats ${pc}`);
                }
                else{
                    return(`You Lose! ${pc} beats ${player}`);
                }

            case 'scissors':
                if (pc == 'paper'){
                    return(`You Win! ${player} beats ${pc}`);
                }
                else{
                    return(`You Lose! ${pc} beats ${player}`);
                }
            case 'Invalid Entry! Try again!':
                return('Invalid Entry! Try again!')
            }
    }
}




function game(){
    let pc =0
    let human =0
    for (let i=0 ; i<5; i++){
        let ver = playing(playerSelection(),computerPlay()) ;
        console.log(ver);
        let result = ver.split('!');    // splits the message returned by playing()
        result = result[0];
        if (result =='You Win'){
            human++
        }
        else if (result=='You Lose'){
            pc++
        }
        else if (result=='Invalid Entry'){
            i--
        }
        else{
            human++ ;
            pc++ ;
        }
        console.log(`You: ${human}  PC: ${pc}`)
    }
    if (human>pc){
        console.log(`You won by ${human-pc} points!`)
    }
    else {
        console.log('Better luck next time!')
    }
}


game();

