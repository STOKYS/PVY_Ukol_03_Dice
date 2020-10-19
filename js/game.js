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
let played02 = false

let round = 1;
let turn01 = false;
let turn02 = false;
let times = 0
let player = 0;

let arrIMG = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"]
let arrSRC = ["img/dice_1.png", "img/dice_2.png", "img/dice_3.png", "img/dice_4.png", "img/dice_5.png", "img/dice_6.png", "img/dice_background.png"]
let arrNUM = ["one", "two", "three", "four", "five", "six"]
let arrBTN01 = ["oneone", "threeone", "fourone", "fiveone", "sixone", "threetwo", "fourtwo", "fivetwo", "sixtwo", "threethree", "fourthree", "fivethree", "sixthree", "threefour", "fourfour", "fivefour", "sixfour", "onefive", "threefive", "fourfive", "fivefive", "sixfive", "threesix", "foursix", "fivesix", "sixsix", "line", "pair", "triple", "fourth"]
let arrBTN02 = ["oneone2", "threeone2", "fourone2", "fiveone2", "sixone2", "threetwo2", "fourtwo2", "fivetwo2", "sixtwo2", "threethree2", "fourthree2", "fivethree2", "sixthree2", "threefour2", "fourfour2", "fivefour2", "sixfour2", "onefive2", "threefive2", "fourfive2", "fivefive2", "sixfive2", "threesix2", "foursix2", "fivesix2", "sixsix2", "line2", "pair2", "triple2", "fourth2"]
let arrEND = ["one", "two", "three", "four", "five", "six"]
let arrSTR = ["one", "three", "four", "five", "six"]

let pairs01 = [];
let triplets01 = [];
let fourth01 = [];
let pairs02 = [];
let triplets02 = [];
let fourth02 = [];

document.getElementById('roll01').addEventListener('click',
    function () {
        new Audio('sounds/roll.mp3').play()
        if (played01 == true) {
            document.getElementById("roll01").disabled = true;
            document.getElementById("end01").disabled = true;
            roll01(player01.one + player01.two + player01.three + player01.four + player01.five + player01.six)
        } else {
            document.getElementById("roll01").disabled = true;
            document.getElementById("end01").disabled = true;
            player01scoreround = 0;
            played01 = true
            roll01(6);
        }
    }
);

document.getElementById('roll02').addEventListener('click',
    function () {
        new Audio('sounds/roll.mp3').play()
        if (played02 == true) {
            document.getElementById("roll02").disabled = true;
            document.getElementById("end02").disabled = true;
            roll02(player02.one + player02.two + player02.three + player02.four + player02.five + player02.six)
        } else {
            document.getElementById("roll02").disabled = true;
            document.getElementById("end02").disabled = true;
            player02scoreround = 0;
            played02 = true
            roll02(6);
        }
    }
);

document.getElementById('end01').addEventListener('click', end01);
document.getElementById('end02').addEventListener('click', end02);

function end01() {
    player01score += player01scoreround
    if (player01score >= 10000) {
        console.log("Player 1 won")
    }
    player01scoreround = 0
    clear01();
    document.getElementById("score01").innerText = `Your score: ${player01score}`
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
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
    document.getElementById("roll01").disabled = true;
    document.getElementById("end01").disabled = true;
    document.getElementById("roll02").disabled = false;
    document.getElementById("end02").disabled = true;
}

function end02() {
    round++
    player02score += player02scoreround
    if (player02score >= 10000) {
        console.log("Player 2 won")
    }
    player02scoreround = 0
    clear02();
    document.getElementById("score02").innerText = `Your score: ${player02score}`
    document.getElementById("score02round").innerText = `Your score this round: ${player02scoreround}`
    document.getElementById("round").innerText = `Round ${round}`
    player02arr = []
    player02 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    played02 = false
    document.getElementById("roll02").disabled = true;
    document.getElementById("end02").disabled = true;
    document.getElementById("roll01").disabled = false;
    document.getElementById("end01").disabled = true;
}

function roll01(x) {
    clear01(0)
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
        options01(i, numbry, 1, x)
    }
}


function roll02(x) {
    clear02(0)
    player02 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    player02arr = []
    for (i = 0; i < x; i++) {
        num = (Math.ceil(Math.random() * 6))
        player02arr.push(num)
        numbry = num - 1
        switch (num) {
            case 1:
                player02.one++;
                break;
            case 2:
                player02.two++;
                break;
            case 3:
                player02.three++;
                break;
            case 4:
                player02.four++;
                break;
            case 5:
                player02.five++;
                break;
            case 6:
                player02.six++;
                break;
        }
        options02(i, numbry, 1, x)
    }

}

function options01(i, numbry, p, x) {
    if (p == 0) {
        for (i = 0; i < player01arr.length; i++) {
            document.getElementById("roll01").disabled = false
            document.getElementById("end01").disabled = false
            ready01(i, player01arr[i], 0, x)
        }
    } else {
        ready01(i, numbry, p, x)
    }
}


function options02(i, numbry, p, x) {
    if (p == 0) {
        for (i = 0; i < player02arr.length; i++) {
            document.getElementById("roll02").disabled = false
            document.getElementById("end02").disabled = false
            ready02(i, player02arr[i], 0, x)
        }
    } else {
        ready02(i, numbry, p, x)
    }
}


function ready01(i, numbry, p, x) {
    let pairtimes01 = 0
    let triptimes01 = 0
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
        pairs01.forEach(pair => {
            if (pair == arrNUM[numbry]){
                pairtimes01++
            }
        })
        if (pairtimes01 == 0){
            pairs01.push(arrNUM[numbry])
        }
        if (player01[arrNUM[numbry]] > 2) {
            triplets01.forEach(pair => {
                if (pair == arrNUM[numbry]){
                    triptimes01++
                }
            })
            if (triptimes01 == 0){
                triplets01.push(arrNUM[numbry]);
            }
            document.getElementById("three" + arrNUM[numbry]).style.display = "inline";
            if (player01[arrNUM[numbry]] > 3) {
                fourth01.push(arrNUM[numbry]);
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
    if (pairs01.length == 3) {
        document.getElementById("pair").style.display = "inline";
    }
    if (triplets01.length == 2) {
        document.getElementById("triple").style.display = "inline";
    }
    if (fourth01.length == 1 && pairs01.length == 2) {
        document.getElementById("fourth").style.display = "inline";
    }
    if (x == player01arr.length) {
        turn01 = true
    }
    if (player01.one < 1 && player01.two < 3 && player01.three < 3 && player01.four < 3 && player01.five < 1 && player01.six < 3 && turn01 == true) {
        document.getElementById("roll01").disabled = true;
        document.getElementById("end01").disabled = false;
        player01scoreround = 0;
    }
    document.getElementById("score01").innerText = `Your score: ${player01score}`
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
    document.getElementById("rolled01").innerText = `You rolled: ${player01.one}x One, ${player01.two}x Two, ${player01.three}x Three, ${player01.four}x Four, ${player01.five}x Five, ${player01.six}x Six`
}

function ready02(i, numbry, p, x) {
    let pairtimes02 = 0
    let triptimes02 = 0
    i += 6
    if (p == 0) {
        numbry -= 1
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    } else {
        document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    }
    if (player02[arrNUM[numbry]] > 0 && ((arrNUM[numbry] == "one") || (arrNUM[numbry] == "five"))) {
        document.getElementById("one" + arrNUM[numbry] + "2").style.display = "inline";
    }
    if (player02[arrNUM[numbry]] > 1) {
        pairs02.forEach(pair => {
            if (pair == arrNUM[numbry]){
                pairtimes02++
            }
        })
        if (pairtimes02 == 0){
            pairs02.push(arrNUM[numbry])
        }
        if (player02[arrNUM[numbry]] > 2) {
            triplets02.forEach(pair => {
                if (pair == arrNUM[numbry]){
                    triptimes02++
                }
            })
            if (triptimes02 == 0){
                triplets02.push(arrNUM[numbry]);
            }
            document.getElementById("three" + arrNUM[numbry] + "2").style.display = "inline";
            if (player02[arrNUM[numbry]] > 3) {
                fourth02.push(arrNUM[numbry]);
                document.getElementById("four" + arrNUM[numbry] + "2").style.display = "inline";
                if (player02[arrNUM[numbry]] > 4) {
                    document.getElementById("five" + arrNUM[numbry] + "2").style.display = "inline";
                    if (player02[arrNUM[numbry]] > 5) {
                        document.getElementById("six" + arrNUM[numbry] + "2").style.display = "inline";
                    }
                }
            }
        }
    }
    if ((player02.one == player02.two) && (player02.one == player02.three) && (player02.one == player02.four) && (player02.one == player02.five) && (player02.one == player02.six) && (player02.one != 0)) {
        document.getElementById("line2").style.display = "inline";
    }
    if (pairs02.length == 3) {
        document.getElementById("pair2").style.display = "inline";
    }
    if (triplets02.length == 2) {
        document.getElementById("triple2").style.display = "inline";
    }
    if (fourth02.length == 1 && pairs02.length == 2) {
        document.getElementById("fourth2").style.display = "inline";
    }
    if (x == player02arr.length) {
        turn02 = true
    }
    if (player02.one < 1 && player02.two < 3 && player02.three < 3 && player02.four < 3 && player02.five < 1 && player02.six < 3 && turn02 == true) {
        document.getElementById("roll02").disabled = true;
        document.getElementById("end02").disabled = false;
        player02scoreround = 0;
    }
    document.getElementById("score02").innerText = `Your score: ${player02score}`
    document.getElementById("score02round").innerText = `Your score this round: ${player02scoreround}`
    document.getElementById("rolled02").innerText = `You rolled: ${player02.one}x One, ${player02.two}x Two, ${player02.three}x Three, ${player02.four}x Four, ${player02.five}x Five, ${player02.six}x Six`
}

function clear01(z) {
    pairs01 = [];
    triplets01 = [];
    fourth01 = [];
    arrIMG.forEach(imag => {
        document.getElementById("rolled01").innerText = `You rolled:`
        document.getElementById(imag).src = arrSRC[6]
    })
    $("#options01>button").each(function () {
        this.style.display = "none"
    })
    if (z == 1) {
        x = player01arr.length
        i = 0;
        options01(i, x, 0)
    }
}

function clear02(z) {
    pairs02 = [];
    triplets02 = [];
    fourth02 = [];
    document.getElementById("rolled02").innerText = `You rolled:`
    arrIMG.forEach(imag => {
        document.getElementById(imag).src = arrSRC[6]
    })
    $("#options02>button").each(function () {
        this.style.display = "none"
    })
    if (z == 1) {
        x = player02arr.length
        i = 0;
        options02(i, x, 0)
    }
}

function remove01(numbe, max) {
    let removed = 0;
    for (i = 0; i < player01arr.length; i++) {
        if (player01arr[i] == numbe && removed < max) {
            player01arr.splice(i, 1);
            removed++
            i--
        }
    }
    clear01(1)
}

function remove02(numbe, max) {
    let removed = 0;
    for (i = 0; i < player02arr.length; i++) {
        if (player02arr[i] == numbe && removed < max) {
            player02arr.splice(i, 1);
            removed++
            i--
        }
    }
    clear02(1)
}

$('#options01>button').bind("click", function () {
    let h, g;
    turn01 = false
    arrBTN01.forEach(id => {
        if (id == this.id) {
            firstnum = id.substring(0, 2)
            lastnum = id.substring(id.length - 2, id.length)
            for (l = 0; l < arrEND.length; l++) {
                if (id == "fourth"){
                    h = 8
                }
                else if (arrEND[l].substring(0, 2) == firstnum) {
                    h = l + 1
                }
            }
            for (k = 0; k < arrEND.length; k++) {
                if (arrEND[k].substring(arrEND[k].length - 2, arrEND[k].length) == lastnum) {
                    g = k + 1
                }
            }
            if (h < 6) {
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
                if (id == "triple") {
                    player01scoreround += 1000
                }
                end01()
            }
            remove01(g, h)
        }
    })
})

$('#options02>button').bind("click", function () {
    let h, g;
    turn02 = false
    arrBTN02.forEach(id => {
        if (id == this.id) {
            firstnum = id.substring(0, 2)
            lastnum = (id.substring(id.length - 3, id.length)).slice(0, -1)
            for (l = 0; l < arrEND.length; l++) {
                if (id == "fourth2"){
                    h = 8
                }
                else if (arrEND[l].substring(0, 2) == firstnum) {
                    h = l + 1
                }
            }
            for (k = 0; k < arrEND.length; k++) {
                if (arrEND[k].substring(arrEND[k].length - 2, arrEND[k].length) == lastnum) {
                    g = k + 1
                }
            }
            if (h < 6) {
                player02[arrEND[g - 1]] -= h
                if (h >= 4) {
                    player02scoreround += 1000 + (500 * (h - 4))
                } else if (h == 3) {
                    if (g != 1) {
                        player02scoreround += g * 100
                    } else {
                        player02scoreround += 300
                    }
                } else if (h == 1) {
                    if (g == 1) {
                        player02scoreround += 100
                    } else {
                        player02scoreround += 50
                    }
                }
            } else {
                player02scoreround += 1500
                if (id == "triple") {
                    player02scoreround += 1000
                }
                end02()
            }
            remove02(g, h)
        }
    })
})