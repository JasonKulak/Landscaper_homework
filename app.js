//Creating a game that utilizes alert() and prompt() to send messages and receive input from the user
//I have a landscaping business and I cut lawns with my teeth
//I make $1/day cutting lawns and I can do this as much as I want
//You can upgrade your tools when you have enough money
//You win when you have a Team of Starving Students and $1000


const Tools = [
    {name: 'Teeth', revenue: 1, cost: 0}
    {name: 'Rusty Scissors', revenue: 5, cost: 5} 
    {name: 'Old-Timey Push Mower', revenue: 50, cost: 25}
    {name: 'Battery-Powered Lawn Mower', revenue: 100, cost: 250}
    {name: 'Team of Starving Students', revenue: 250, cost: 500'}
]

//what do the palyer(s) need to win?
const player = {
    money: 0
    tool: 0
}

//what happens when I mow a lawn?
function mowLawn() {
    const tool = tools[player.tool];
    alert(`You mowed a lawn with ${tool.name} and make ${tool.revenue} dollars`)
    player.money += tool.generates
}

//what happens when I upgrade my tools?
//what happens when I run out of tools? (if statement/conditional)
function upgrade(){
    if (player.tool + 1 < tools.length){
    const nextTool = tools[player.tool + 1];
    if (nextTool.price < player.money){
        money -= nextTool.price
        player.tool += 1;
    } else {
        alert("not enough money to upgrade")
    }
    } else {
        alert("Out of upgrades");
    }
}

//how do I win?
function winConditions(){
    if (player.tool === tools.length - 1 && player.money >= 1000){
        alert("You have won the game")
        player.wonGame = true
    }
}
