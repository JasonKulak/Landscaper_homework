//Creating a game that utilizes alert() and prompt() to send messages and receive input from the user
//I have a landscaping business and I cut lawns with my teeth
//I make $1/day cutting lawns and I can do this as much as I want
//You can upgrade your tools when you have enough money
//You win when you have a Team of Starving Students and $1000


const tools = [
    {name: 'your teeth', revenue: 1, cost: 0},
    {name: 'rusty scissors', revenue: 5, cost: 5},
    {name: 'old-timey push mower', revenue: 50, cost: 25},
    {name: 'battery-powered lawn mower', revenue: 100, cost: 250},
    {name: 'team of starving students', revenue: 250, cost: 500}
];

//what do the palyer(s) need to win?
const player = {
    money: 0,
    tool: 0,
    wonGame: false
};

//what happens when I mow a lawn?
function mowLawn() {
    const tool = tools[player.tool];
    alert(`You mowed a lawn with ${tool.name} and made ${tool.revenue} dollars`);
    player.money += tool.revenue;
}

//what happens when I upgrade my tools?
//what happens when I run out of tools? (if statement/conditional)
//Do I have enough money?
function upgrade(){
    if (player.tool + 1 < tools.length){
    const nextTool = tools[player.tool + 1];
    if (nextTool.cost <= player.money){
        player.money -= nextTool.cost;
        player.tool += 1;
    } else {
        alert("not enough money to upgrade");
    }
    } else {
        alert("No more tools to upgrade");
    }
}

//how do I win?
function winConditions(){
    if (player.tool === tools.length - 1 && player.money >= 1000){
        alert("You have won the game")
        player.wonGame = true
    }
}

alert("Welcome to Landscaper!!!");

while(!player.wonGame){
    const response = prompt(`You currently have ${player.money} dollars, do you want to [m]ow lawns or [u]pgrade`);

    if (response === 'm'){
        mowLawn()
    }

    if (response === 'u'){
        upgrade()
    }

    if (response !== 'u' && response !== 'm'){
        alert("that's not a valid option, type 'm' or 'u'")
    }

    winConditions()
}