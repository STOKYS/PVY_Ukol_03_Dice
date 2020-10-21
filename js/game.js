let playerArr = [];
let player = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}
let number = 1
let played = false
let playerscoreround = 0;
let player01score = 0
let player02score = 0
let round = 1;
let turn = false;
let arrIMG = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"]
let arrSRC = ["../../img/dice_1.png", "../../img/dice_2.png", "../../img/dice_3.png", "../../img/dice_4.png", "../../img/dice_5.png", "../../img/dice_6.png", "../../img/dice_background.png"]
let arrNUM = ["one", "two", "three", "four", "five", "six"]
let arrBTN01 = ["oneone1", "threeone1", "fourone1", "fiveone1", "sixone1", "threetwo1", "fourtwo1", "fivetwo1", "sixtwo1", "threethree1", "fourthree1", "fivethree1", "sixthree1", "threefour1", "fourfour1", "fivefour1", "sixfour1", "onefive1", "threefive1", "fourfive1", "fivefive1", "sixfive1", "threesix1", "foursix1", "fivesix1", "sixsix1", "line1", "pair1", "triple1", "fourth1"]
let arrBTN02 = ["oneone2", "threeone2", "fourone2", "fiveone2", "sixone2", "threetwo2", "fourtwo2", "fivetwo2", "sixtwo2", "threethree2", "fourthree2", "fivethree2", "sixthree2", "threefour2", "fourfour2", "fivefour2", "sixfour2", "onefive2", "threefive2", "fourfive2", "fivefive2", "sixfive2", "threesix2", "foursix2", "fivesix2", "sixsix2", "line2", "pair2", "triple2", "fourth2"]
let arrEND01 = ["one1", "two1", "three1", "four1", "five1", "six1"]
let arrEND02 = ["one2", "two2", "three2", "four2", "five2", "six2"]
let pairs = [];
let triplets = [];
let fourth = [];

document.onkeyup = function (key) {
    if (key.keyCode == 13 && (player01score > 9999 || player02score > 9999)) {
        location.reload();
    }
}

const startButton = document.querySelectorAll('.mainbtn > *')

startButton.forEach(buttons => {
    buttons.addEventListener("click", function () {
        if ((buttons.id).substring(0, 1) == "r") {
            start(((buttons.id.substring(buttons.id.length - 1, buttons.id.length)) == "1") ? 1 : 2)
        } else {
            end(((buttons.id.substring(buttons.id.length - 1, buttons.id.length)) == "1") ? 1 : 2)
        }
    })

})

function start() {
    new Audio('../../sounds/roll.mp3').play()
    if (played == true) {
        document.getElementById("roll0" + number).disabled = true;
        document.getElementById("end0" + number).disabled = true;
        roll(player.one + player.two + player.three + player.four + player.five + player.six)
    } else {
        document.getElementById("roll0" + number).disabled = true;
        document.getElementById("end0" + number).disabled = true;
        playerscoreround = 0;
        played = true
        roll(6);
    }
}

function end() {
    if (number == 1){
        player01score += playerscoreround
    } else {
        player02score += playerscoreround
    }
    if (player01score >= 10000 || player02score >= 10000) {
        document.getElementById("end").style.display = "inline"
        if (number == 1) {
            document.getElementById("end_text").innerText = "Player 2 Won!"
        }
    }
    playerscoreround = 0
    playerArr = []
    player = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    played = false
    document.getElementById("score0" + number).innerText = `${(number == 1) ? player01score : player02score}`
    document.getElementById("score0" + number + "round").innerText = `Your score this round: ${playerscoreround}`
    document.getElementById("roll0" + number).disabled = true;
    document.getElementById("end0" + number).disabled = true;
    document.getElementById("roll0" + ((number == 2) ? 1 : 2)).disabled = false;
    document.getElementById("end0" + ((number == 2) ? 1 : 2)).disabled = true;
    clear(0);
    if (number == 2){
        round++
    }
    number = (number == 1) ? 2 : 1
    console.log(number)
    document.getElementById("round").innerText = `Round ${round}`
}

function clear(z) {
    pairs = [];
    triplets = [];
    fourth = [];
    arrIMG.forEach(imag => {
        document.getElementById("rolled0" + number).innerText = `You rolled:`
        document.getElementById(imag).src = arrSRC[6]
    })
    $(".options>button").each(function () {
        this.style.display = "none"
    })
    if (z == 1) {
        x = playerArr.length
        i = 0;
        options(i, x, 0)
    }
}

function roll(x) {
    console.log(number)
    clear(0, number)
    player = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    playerArr = []
    for (i = 0; i < x; i++) {
        random = (Math.ceil(Math.random() * 6))
        playerArr.push(random)
        numbry = random - 1
        switch (random) {
            case 1:
                player.one++;
                break;
            case 2:
                player.two++;
                break;
            case 3:
                player.three++;
                break;
            case 4:
                player.four++;
                break;
            case 5:
                player.five++;
                break;
            case 6:
                player.six++;
                break;
        }
        options(i, numbry, 1, x)
    }
}

function options(i, numbry, p, x) {
    if (p == 0) {
        for (i = 0; i < playerArr.length; i++) {
            document.getElementById("roll0" + number).disabled = false
            document.getElementById("end0" + number).disabled = false
            ready(i, playerArr[i], 0, x)
        }
    } else {
        ready(i, numbry, p, x)
    }
}

function ready(i, numbry, p, x) {
    let pairtimes = 0
    let triptimes = 0
    arrEND = eval("arrEND0" + number)
    if (number == 2){
        i += 6
    }
    if (p == 0) {
        numbry -= 1
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    } else {
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    }
    if (player[arrNUM[numbry]] > 0 && ((arrNUM[numbry] == "one") || (arrNUM[numbry] == "five"))) {
        document.getElementById("one" + arrEND[numbry]).style.display = "inline";
    }
    if (player[arrNUM[numbry]] > 1) {
        pairs.forEach(pair => {
            if (pair == arrNUM[numbry]) {
                pairtimes++
            }
        })
        if (pairtimes == 0) {
            pairs.push(arrNUM[numbry])
        }
        if (player[arrNUM[numbry]] > 2) {
            triplets.forEach(pair => {
                if (pair == arrNUM[numbry]) {
                    triptimes++
                }
            })
            if (triptimes == 0) {
                triplets.push(arrNUM[numbry]);
            }
            document.getElementById("three" + arrEND[numbry]).style.display = "inline";
            if (player[arrNUM[numbry]] > 3) {
                fourth.push(arrNUM[numbry]);
                document.getElementById("four" + arrEND[numbry]).style.display = "inline";
                if (player[arrNUM[numbry]] > 4) {
                    document.getElementById("five" + arrEND[numbry]).style.display = "inline";
                    if (player[arrNUM[numbry]] > 5) {
                        document.getElementById("six" + arrEND[numbry]).style.display = "inline";
                    }
                }
            }
        }
    }
    if ((player.one == player.two) && (player.one == player.three) && (player.one == player.four) && (player.one == player.five) && (player.one == player.six) && (player.one != 0)) {
        document.getElementById("line" + number).style.display = "inline";
    }
    if (pairs.length == 3) {
        document.getElementById("pair" + number).style.display = "inline";
    }
    if (triplets.length == 2) {
        document.getElementById("triple" + number).style.display = "inline";
    }
    if (fourth.length == 1 && pairs.length == 2) {
        document.getElementById("fourth" + number).style.display = "inline";
    }
    if (x == playerArr.length) {
        turn = true
    }
    if (player.one < 1 && player.two < 3 && player.three < 3 && player.four < 3 && player.five < 1 && player.six < 3 && turn == true) {
        document.getElementById("roll0" + number).disabled = true;
        document.getElementById("end0" + number).disabled = false;
        playerscoreround = 0;
    }
    document.getElementById("score0" + number).innerText = `${(number == 1) ? player01score : player02score}`
    document.getElementById("score0" + number + "round").innerText = `Your score this round: ${playerscoreround}`
    document.getElementById("rolled0" + number).innerText = `You rolled: ${player.one}x One, ${player.two}x Two, ${player.three}x Three, ${player.four}x Four, ${player.five}x Five, ${player.six}x Six`
}

function remove(numbe, max){
    let removed = 0;
    for (i = 0; i < playerArr.length; i++) {
        if (playerArr[i] == numbe && removed < max) {
            playerArr.splice(i, 1);
            removed++
            i--
            console.log (playerArr)
        }
    }
    clear(1)
}

$(".options>button").bind("click", function () {
    console.log("zid" + number)
    let h, g;
    turn = false
    arrBTN = eval("arrBTN0" + number)
    arrEND = eval("arrEND0" + number)
    arrBTN.forEach(id => {
        if (id == this.id) {
            firstnum = id.substring(0, 2)
            lastnum = id.substring(id.length - 3, id.length)
            for (l = 0; l < arrEND.length; l++) {
                if (id == "fourth" + number) {
                    h = 8
                } else if (arrEND[l].substring(0, 2) == firstnum) {
                    h = l + 1
                }
                if (arrEND[l].substring(arrEND[l].length - 3, arrEND[l].length) == lastnum) {
                    g = l + 1
                }
            }
            if (h < 6) {
                player[arrNUM[g - 1]] -= h
                if (h >= 4) {
                    playerscoreround += 1000 + (500 * (h - 4))
                } else if (h == 3) {
                    if (g != 1) {
                        playerscoreround += g * 100
                    } else {
                        playerscoreround += 300
                    }
                } else if (h == 1) {
                    if (g == 1) {
                        playerscoreround += 100
                    } else {
                        playerscoreround += 50
                    }
                }
            } else {
                playerscoreround += 1500
                if (id == ("triple" + number)) {
                    playerscoreround += 1000
                }
                end()
            }
            remove(g, h)
        }
    })
})