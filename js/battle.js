var pkmList = [
    {
        name: 'charizard',
        maxHP: 550,
        url: "../images/charizard_1.gif",
        attackSets: [
            ['Flame', 80, 40, 0],
            ['Dragon', 60, 30, 0],
            ['Normal', 50, 50, 0],
            ['Lifelink', 50, 50, 30]
        ],
        background: "../images/fire_2.gif"
    },
    {
        name: 'blastoise',
        maxHP: 1000,
        url: "../images/blastoise_1.gif",
        attackSets: [
            ['Surf', 50, 30, 0],
            ['Crunch', 40, 20, 0],
            ['Normal', 30, 30, 0],
            ['Lifelink', 30, 30, 15]
        ],
        background: "../images/water_1.gif"
    },
    {
        name: 'venusaur',
        maxHP: 200,
        url: "../images/venusaur_1.gif",
        attackSets: [
            ['Blizzard', 200, 150, 0],
            ['Bomb', 150, 100, 0],
            ['Normal', 100, 100, 0],
            ['Lifelink', 100, 100, 50],
        ],
        background: "../images/poison_1.gif"
    }]

//pick between 3 different Pokemon from homepage, set cookie for the selection and read the cookie in the battle page
var userSelection = Cookies.get('pkmSelection');
console.log(userSelection)
var userHealth = Cookies.get('userCurrentHP');
var computerHealth = Cookies.get('computerCurrentHP');
var compPkmGet = Cookies.get('compPkm')

for (let k = 0; k < pkmList.length; k++) {
    selection = document.getElementById('selection-user');
    if (userSelection == pkmList[k].name) {
        selection.innerHTML = pkmList[k].url
        selection.setAttribute("src", pkmList[k].url)
        document.getElementById("user-background").setAttribute("style", "background-image: url("+ pkmList[k].background + ");background-repeat: no-repeat;background-size: cover"); 
        for (i = 0; i < 4; i++) {
            document.getElementById('m' + i).innerHTML = pkmList[k].attackSets[i][0];
        }
        var userMaxHP = pkmList[k].maxHP;
        Cookies.set("userMaxHP", userMaxHP)
        console.log(userMaxHP)
        var maxAttack1 = pkmList[k].attackSets[0][1];
        var minAttack1 = pkmList[k].attackSets[0][2];
        var maxAttack2 = pkmList[k].attackSets[1][1];
        var minAttack2 = pkmList[k].attackSets[1][2];
        var maxAttack3 = pkmList[k].attackSets[2][1];
        var minAttack3 = pkmList[k].attackSets[2][2];
        var maxAttack4 = pkmList[k].attackSets[3][1];
        var minAttack4 = pkmList[k].attackSets[3][2];
        var healingPoint4 = pkmList[k].attackSets[3][3];

        // randomly create computer-player
        if (compPkmGet == undefined) {
            computerCreation();
        } else {
            compSelection = document.getElementById('selection-computer');
            var compPkm = Cookies.get("compPkm")
            for (t = 0; t < pkmList.length; t++) {
                if (compPkm == pkmList[t].name) {
                    for (s = 0; s < 4; s++) {
                        document.getElementById('n' + s).innerHTML = pkmList[t].attackSets[s][0];
                    }
                    compSelection.innerHTML = pkmList[t].url
                    compSelection.setAttribute("src", pkmList[t].url)
                    document.getElementById("computer-background").setAttribute("style", "background-image: url("+ pkmList[t].background + ");background-repeat: no-repeat;background-size: cover"); 
                }
            }
        }

        var userCurrentHP = userMaxHP;
        var computerMaxHP = Cookies.get("computerMaxHP")
        console.log(computerMaxHP)
        if (userHealth == undefined) {
            userCurrentHP = userMaxHP;
            console.log(userCurrentHP)
            computerCurrentHP = computerMaxHP;
        } else {
            userCurrentHP = parseInt(userHealth);
            computerCurrentHP = parseInt(computerHealth);
        }

        document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
        document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';

        function attackOne() {
            var compDamagePoint1 = Math.floor(Math.random() * (maxAttack1 - minAttack1 + 1)) + minAttack1;
            console.log(compDamagePoint1);
            computerCurrentHP = computerCurrentHP - compDamagePoint1;
            console.log(computerCurrentHP);
            Cookies.set('userCurrentHP', userCurrentHP);
            Cookies.set('computerCurrentHP', computerCurrentHP);
            document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
            // checkWinner();
            computerAttack();
            checkWinner();
        }

        function attackTwo() {
            var compDamagePoint2 = Math.floor(Math.random() * (maxAttack2 - minAttack2 + 1)) + minAttack2;
            console.log(compDamagePoint2);
            computerCurrentHP = computerCurrentHP - compDamagePoint2;
            console.log(computerCurrentHP);
            Cookies.set('userCurrentHP', userCurrentHP);
            Cookies.set('computerCurrentHP', computerCurrentHP);
            document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
            // checkWinner();
            computerAttack();
            checkWinner();
        }

        function attackThree() {
            var compDamagePoint3 = maxAttack3;
            console.log(compDamagePoint3);
            computerCurrentHP = computerCurrentHP - compDamagePoint3;
            console.log(computerCurrentHP);
            Cookies.set('userCurrentHP', userCurrentHP);
            Cookies.set('computerCurrentHP', computerCurrentHP);
            document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
            // checkWinner();
            computerAttack();
            checkWinner();
        }

        function attackFour() {
            var compDamagePoint4 = maxAttack4;
            console.log(compDamagePoint4);
            computerCurrentHP = computerCurrentHP - compDamagePoint4;
            console.log(computerCurrentHP);
            userCurrentHP = userCurrentHP + healingPoint4;
            console.log(userCurrentHP)
            Cookies.set('userCurrentHP', userCurrentHP);
            Cookies.set('computerCurrentHP', computerCurrentHP);
            document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
            // checkWinner();
            computerAttack();
            checkWinner();
        }
    }
    // } else {
    //     selection.innerHTML = "<p>Invalid Choice!</p>";
    // }
}

//define user-player and computer-player's attributes

//define functions for four attack modes
//The user-player select an attack, and the computer player attack after with four attack modes at random


function checkWinner() {
    if (Cookies.get("userCurrentHP") <= 0 && Cookies.get("computerCurrentHP") > 0) {
        document.getElementById("battle-result").innerHTML = "Computer Wins!";
        document.getElementById('hp1').innerHTML = '<p>HP: ' + Cookies.get("userCurrentHP") + '/' + userMaxHP + '</p>';
    } else if (Cookies.get("computerCurrentHP") <= 0 && Cookies.get("userCurrentHP") > 0) {
        document.getElementById("battle-result").innerHTML = "You Wins!";
        document.getElementById('hp2').innerHTML = '<p>HP: ' + Cookies.get("computerCurrentHP") + '/' + computerMaxHP + '</p>';
    } else if (Cookies.get("userCurrentHP") < 0 && Cookies.get("computerCurrentHP") < 0) {
        document.getElementById("battle-result").innerHTML = "Tie!";
        document.getElementById('hp1').innerHTML = '<p>HP: ' + Cookies.get("userCurrentHP") + '/' + userMaxHP + '</p>';
        document.getElementById('hp2').innerHTML = '<p>HP: ' + Cookies.get("computerCurrentHP") + '/' + computerMaxHP + '</p>';
    }
    return
}

function computerAttack() {
    compPkmGet = Cookies.get("compPkm");
    for (j = 0; j < pkmList.length; j++) {
        if (compPkmGet == pkmList[j].name) {
            var compAttackSet = pkmList[j].attackSets[Math.floor(Math.random() * 4)];
            var userDamagePoint = Math.floor(Math.random() * (compAttackSet[1] - compAttackSet[2] + 1)) + compAttackSet[2];
            console.log(userDamagePoint)
            var computerHealingPoint = compAttackSet[3]
            userCurrentHP = userCurrentHP - userDamagePoint
            console.log(userCurrentHP);
            computerCurrentHP = computerCurrentHP + computerHealingPoint
            console.log(computerCurrentHP)
            Cookies.set("userCurrentHP", userCurrentHP)
            document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + Cookies.get("userMaxHP") + '</p>';
            document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + Cookies.get("computerMaxHP") + '</p>';
        }
    }
}


function computerCreation() {
    compSelection = document.getElementById('selection-computer');
    var compPkm = pkmList[Math.floor(Math.random() * 3)]
    for (n = 0; n < pkmList.length; n++) {
        if (compPkm.name == pkmList[n].name) {
            for (s = 0; s < 4; s++) {
                document.getElementById('n' + s).innerHTML = pkmList[n].attackSets[s][0];
            }
            compSelection.innerHTML = pkmList[n].url
            compSelection.setAttribute("src", pkmList[n].url)
            document.getElementById("computer-background").setAttribute("style", "background-image: url("+ pkmList[n].background + ");background-repeat: no-repeat;background-size: cover"); 
            Cookies.set("imageUrl", pkmList[n].url)
            Cookies.set("compPkm", compPkm.name);
            Cookies.set("computerMaxHP", compPkm.maxHP)
        }
    }
}