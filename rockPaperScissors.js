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
    return (message)
}


/*             Este código permite introduzir a opção manualmente
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
*/

let pc =0;
let human = 0;
let pc_moves = [] ;
let pl_moves = [] ;
function game(result){                // após cada ronda, conta os pontos do vencedor
    if (human < 5 && pc <5){
            if (result == '1'){
                human++
            }
            else if (result== '2' ){
                pc++
            }
            else if (result== '0'){
                human++ ;
                pc++ ;
            }
            document.getElementById('pl_points').innerHTML = human
            document.getElementById('pc_points').innerHTML = pc
        }
    if (human==5 && pc ==5 ){
        info = 'A tie ! The world hangs while Ultron demands another round!'
    }
    else if (pc==5){
        info = 'You lost! Humanity is dommed!'
    }
    else if (human == 5){
        info = 'Hurrah! You defeated Ultron!'
    }
    document.getElementById('inf').innerHTML =info;
    }


let info = 'The world is in danger, Ultron has defeated every hero left and it all comes down to a Rock Paper Scissors Game ???? \n What is your first move ?'
document.getElementById('inf').innerHTML = info

function playRound(player,computer){
    pl_moves.push(player)
    pc_moves.push(computer)
    document.getElementById('pl_moves').innerHTML = pl_moves;
    document.getElementById('pc_moves').innerHTML = pc_moves;
    if (player == computer){
        document.getElementById('inf').innerHTML ="It's a Drawn";
        return '0'
    }
    else{
        switch (player) {
            case 'Rock' :
                if (computer == 'Scissors'){
                    info = `You Win!' ${player} beats ${computer}`;
                    document.getElementById('inf').innerHTML = info;
                    return '1';
                }
                else{
                    info = `You Lose! ${computer} beats ${player}`;
                    document.getElementById('inf').innerHTML = info;
                    return '2' ;
                }
            case 'Paper' :
                if (computer == 'Rock'){

                    info = `You Win! ${player} beats ${computer}`;
                    document.getElementById('inf').innerHTML = info;
                    return '1'
                }
                else{
                    info = `You Lose! ${computer} beats ${player}`;
                    document.getElementById('inf').innerHTML = info;
                    return '2'
                }

            case 'Scissors':
                if (computer == 'Paper'){
                    info = `You Win! ${player} beats ${computer}`;
                    document.getElementById('inf').innerHTML = info;
                    return '1'
                }
                else{
                    info = `You Lose! ${computer} beats ${player}`;
                    document.getElementById('inf').innerHTML = info;
                    return '2'
                }
            }
        }
    }

let move 

move = document.getElementById('rock').addEventListener('click',function() {
    game(playRound('Rock',computerPlay()))});
move =document.getElementById('paper').addEventListener('click',function() {
     game(playRound('Paper',computerPlay()))});
move = document.getElementById('scissors').addEventListener('click', function() {
    game(playRound('Scissors',computerPlay()))});


document.getElementById('restart').addEventListener('click', function(){
    pc =0;
    human = 0;
    pc_moves = [] ;
    pl_moves = [] ;
    document.getElementById('pl_points').innerHTML = '';
    document.getElementById('pc_points').innerHTML = '';
    info = 'The world is in danger, Ultron has defeated every hero left and it all comes down to a Rock Paper Scissors Game ???? \n What is your first move ?' ;
    document.getElementById('inf').innerHTML = info;

} );


