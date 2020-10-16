let player01arr = [];
let player01 = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}
let player01score = 0;
let player01scoreround = 0;
let played01 = false
let new01 = true

let player02arr = [];
let player02 = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}
let player02score = 0;
let player02scoreround = 0;

let round = 1;
let turn01 = 0;
let turn02 = 0;

let arrIMG = ["img1", "img2", "img3", "img4", "img5", "img6"]
let arrSRC = ["img/dice_1.png", "img/dice_2.png", "img/dice_3.png", "img/dice_4.png", "img/dice_5.png", "img/dice_6.png", "img/dice_background.png"]
let arrNUM = ["one", "two", "three", "four", "five", "six"]
let arrBTN = ["oneone", "threeone", "fourone", "fiveone", "sixone", "threetwo", "fourtwo", "fivetwo", "sixtwo", "threethree", "fourthree", "fivethree", "sixthree", "threefour", "fourfour", "fivefour", "sixfour", "onefive", "threefive", "fourfive", "fivefive", "sixfive", "threesix", "foursix", "fivesix", "sixsix", "line", "pair", "triple", "fourth"]
let arrEND = ["one", "two", "three", "four", "five", "six"]
let arrSTR = ["one", "three", "four", "five", "six"]

document.getElementById('roll01').addEventListener('click',
    function () {
        if (played01 == true) {
            roll(player01.one + player01.two + player01.three + player01.four + player01.five + player01.six, 1)
        } else {
            player01scoreround = 0;
            played01 = true
            roll(6, 1);
        }
    }
);

document.getElementById('end01').addEventListener('click', end01);

function end01() {
    player01score += player01scoreround
    if (player01score >= 10000) {
        console.log("Player 1 won")
    }
    player01scoreround = 0
    document.getElementById("score01").innerText = `Your score: ${player01score}`
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
    clear();
    player01arr = []
    player01 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    played01 = false
    turn01 = 0;
    document.getElementById("roll01").disabled = true;
    document.getElementById("end01").disabled = true;
    document.getElementById("roll02").disabled = false;
    document.getElementById("end02").disabled = true;
}

function roll(x, y) {
    player01 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    player01arr = []
    for (i = 0; i < x; i++) {
        num = (Math.ceil(Math.random() * 6))
        player01arr.push(num)
        numbry = num - 1
        switch (num) {
            case 1:
                player01.one++;
                break;
            case 2:
                player01.two++;
                break;
            case 3:
                player01.three++;
                break;
            case 4:
                player01.four++;
                break;
            case 5:
                player01.five++;
                break;
            case 6:
                player01.six++;
                break;
        }
        options(i, numbry, 1)
    }
}

function options(i, numbry, p) {
    if (p == 0) {
        for (i = 0; i < player01arr.length; i++) {
            ready(i, player01arr[i], 0)
        }
    } else {
        ready(i, numbry, p)
    }
}

function ready(i, numbry, p) {
    let pairs3 = [];
    let triplets = [];
    let fourth = [];
    if (p == 0) {
        numbry -= 1
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    } else {
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    }

    if (player01[arrNUM[numbry]] > 0 && ((arrNUM[numbry] == "one") || (arrNUM[numbry] == "five"))) {
        document.getElementById("one" + arrNUM[numbry]).style.display = "inline";
    }
    if (player01[arrNUM[numbry]] > 1) {
        pairs3.push(arrNUM[numbry]);
        if (player01[arrNUM[numbry]] > 2) {
            triplets.push(arrNUM[numbry]);
            document.getElementById("three" + arrNUM[numbry]).style.display = "inline";
            if (player01[arrNUM[numbry]] > 3) {
                fourth.push(arrNUM[numbry]);
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "one") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("four" + arrNUM[numbry]).style.display = "inline";
                if (player01[arrNUM[numbry]] > 4) {
                    document.getElementById("five" + arrNUM[numbry]).style.display = "inline";
                    if (player01[arrNUM[numbry]] > 5) {
                        document.getElementById("six" + arrNUM[numbry]).style.display = "inline";
                    }
                }
            }
        }
    }
    if ((player01.one == player01.two) && (player01.one == player01.three) && (player01.one == player01.four) && (player01.one == player01.five) && (player01.one == player01.six) && (player01.one != 0)) {
        document.getElementById("line").style.display = "inline";
    }
    if (pairs3.length == 3) {
        document.getElementById("pair").style.display = "inline";
    }
    if (triplets.length == 2) {
        document.getElementById("triple").style.display = "inline";
    }
    if (fourth.length == 1 && pairs3.length == 1) {
        document.getElementById("fourth").style.display = "inline";
    }
    document.getElementById("score01").innerText = `Your score: ${player01score}`
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
    document.getElementById("rolled01").innerText = `You rolled: ${player01.one}x One, ${player01.two}x Two, ${player01.three}x Three, ${player01.four}x Four, ${player01.five}x Five, ${player01.six}x Six`
}

function clear() {
    arrIMG.forEach(imag => {
        document.getElementById(imag).src = arrSRC[6]
    })
    $("#options01>button").each(function () {
        this.style.display = "none"
    })
    x = player01arr.length
    i = 0;
    options(i, x, 0)
}

function remove(numbe, max) {
    let removed = 0;
    for (i = 0; i < player01arr.length; i++) {
        if (player01arr[i] == numbe && removed < max) {
            player01arr.splice(i, 1);
            removed++
            i--
        }
    }
    clear()
}

$('#options01>button').bind("click", function () {
    let h, g;
    arrBTN.forEach(id => {
        if (id == this.id) {
            firstnum = id.substring(0, 2)
            lastnum = id.substring(id.length - 2, id.length)
            for (l=0; l < arrSTR.length; l++){
                if (arrSTR[l].substring(0, 2) == firstnum){
                    h = l + 1
                }
            } 
            for (k=0; k<arrEND.length; k++){
                if (arrEND[k].substring(arrEND[k].length-2, arrEND[k].length) == lastnum){
                    g = k + 1
                }
            }
            if (h < 7) {
                player01[arrEND[g - 1]] -= h
                if (h >= 4) {
                    player01scoreround += 1000 + (500 * (h - 4))
                } else if (h == 3) {
                    if (g != 1) {
                        player01scoreround += g * 100
                    } else {
                        player01scoreround += 300
                    }
                } else if (h == 1) {
                    if (g == 1) {
                        player01scoreround += 100
                    } else {
                        player01scoreround += 50
                    }
                }
            } else {
                player01scoreround += 1500
                if (id == "triple"){
                    player01scoreround += 1000 
                }
                end01()
            }
            remove(g, h)
        }
    })
})