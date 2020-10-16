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
let turn01 = 0;
let turn02 = 0;

let arrIMG = ["img1", "img2", "img3", "img4", "img5", "img6"]
let arrSRC = ["img/dice_1.png", "img/dice_2.png", "img/dice_3.png", "img/dice_4.png", "img/dice_5.png", "img/dice_6.png", "img/dice_background.png"]

document.getElementById('roll01').addEventListener('click',
    function () {
        document.getElementById("roll01").disabled = true;
        document.getElementById("end01").disabled = false;
        turn01 = 0
        if (played01 == true) {
            roll(player01.one + player01.two + player01.three + player01.four + player01.five + player01.six)
        } else {
            player01scoreround = 0;
            played01 = true
            roll(6);
        }
    }
);

document.getElementById('end01').addEventListener('click', end01);

function end01() {
    player01score += player01scoreround
    if (player01score >= 10000){
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
    player02arr = []
    player02 = {
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


function roll(x) {
    player01arr = []
    player01 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }

    for (i = 0; i < x; i++) {
       num = (Math.ceil(Math.random() * 6))
       player01arr.push(num)
       numbry = num - 1
       document.getElementById(arrIMG[i]).src = arrSRC[numbry]
    }
    console.log(player01arr)
    count()
}

function count() {

    player01arr.forEach(dice => {
        switch (dice) {
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
    });
    if ((player01.one > 0 || player01.two > 2 || player01.three > 2 || player01.four > 2 || player01.five > 0 || player01.six > 2) || ((played01.one + player01.two + player01.three + player01.four + player01.five + player01.six) == 6)) {
        options()
    } else {
        document.getElementById("roll01").disabled = true;
        document.getElementById("end01").disabled = false;
        player01scoreround = 0;
        document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
        document.getElementById("score01").innerText = `Your score: ${player01score}`
    }

}

function options() {
    clear()
    turn01++
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
    document.getElementById("rolled01").innerText = `You rolled: ${player01.one}x One, ${player01.two}x Two, ${player01.three}x Three, ${player01.four}x Four, ${player01.five}x Five, ${player01.six}x Six`
    if (turn01 > 1) {
        document.getElementById("roll01").disabled = false;
    }
    let pairs3 = [];
    let triplets = [];
    let fourth = [];

    if (player01.one > 0) {
        document.getElementById("oneone").style.display = "inline";
        if (player01.one > 1) {
            pairs3.push("one");
            if (player01.one > 2) {
                triplets.push("one");
                document.getElementById("threeone").style.display = "inline";
                if (player01.one > 3) {
                    fourth.push("one");
                    for (i = 0; i < pairs3.length; i++) {
                        if (pairs3[i] == "one") {
                            pairs3.splice(i, 1);
                        }
                    }
                    document.getElementById("fourone").style.display = "inline";
                    if (player01.one > 4) {
                        document.getElementById("fiveone").style.display = "inline";
                        if (player01.one > 5) {
                            document.getElementById("sixone").style.display = "inline";
                        }
                    }
                }
            }
        }
    }
    if (player01.two > 1) {
        pairs3.push("two");
        if (player01.two > 2) {
            triplets.push("two");
            document.getElementById("threetwo").style.display = "inline";
            if (player01.two > 3) {
                fourth.push("two");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "two") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourtwo").style.display = "inline";
                if (player01.two > 4) {
                    document.getElementById("fivetwo").style.display = "inline";
                    if (player01.two > 5) {
                        document.getElementById("sixtwo").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player01.three > 1) {
        pairs3.push("three");
        if (player01.three > 2) {
            triplets.push("three");
            document.getElementById("threethree").style.display = "inline";
            if (player01.three > 3) {
                fourth.push("three");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "three") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourthree").style.display = "inline";
                if (player01.three > 4) {
                    document.getElementById("fivethree").style.display = "inline";
                    if (player01.three > 5) {
                        document.getElementById("sixthree").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player01.four > 1) {
        pairs3.push("four");
        if (player01.four > 2) {
            triplets.push("four");
            document.getElementById("threefour").style.display = "inline";
            if (player01.four > 3) {
                fourth.push("fourth");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "four") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourfour").style.display = "inline";
                if (player01.four > 4) {
                    document.getElementById("fivefour").style.display = "inline";
                    if (player01.four > 5) {
                        document.getElementById("sixfour").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player01.five > 0) {
        document.getElementById("onefive").style.display = "inline";
        if (player01.five > 1) {
            pairs3.push("five");
            if (player01.five > 2) {
                triplets.push("five");
                document.getElementById("threefive").style.display = "inline";
                if (player01.five > 3) {
                    fourth.push("five");
                    for (i = 0; i < pairs3.length; i++) {
                        if (pairs3[i] == "fix") {
                            pairs3.splice(i, 1);
                        }
                    }
                    document.getElementById("fourfive").style.display = "inline";
                    if (player01.five > 4) {
                        document.getElementById("fivefive").style.display = "inline";
                        if (player01.five > 5) {
                            document.getElementById("sixfive").style.display = "inline";
                        }
                    }
                }
            }
        }
    }
    if (player01.six > 1) {
        pairs3.push("six");
        if (player01.six > 2) {
            triplets.push("six");
            document.getElementById("threesix").style.display = "inline";
            if (player01.six > 3) {
                fourth.push("six");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "six") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("foursix").style.display = "inline";
                if (player01.six > 4) {
                    document.getElementById("fivesix").style.display = "inline";
                    if (player01.six > 5) {
                        document.getElementById("sixsix").style.display = "inline";
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

    played01 = true;
}

function clearImg(){
    arrIMG.forEach(imag => {
        console.log(imag)
        document.getElementById(imag).src = arrSRC[6]
    });
}

function clear() {
    document.getElementById("oneone").style.display = "none"
    document.getElementById("threeone").style.display = "none"
    document.getElementById("fourone").style.display = "none"
    document.getElementById("fiveone").style.display = "none"
    document.getElementById("sixone").style.display = "none"
    document.getElementById("threetwo").style.display = "none"
    document.getElementById("fourtwo").style.display = "none"
    document.getElementById("fivetwo").style.display = "none"
    document.getElementById("sixtwo").style.display = "none"
    document.getElementById("threethree").style.display = "none"
    document.getElementById("fourthree").style.display = "none"
    document.getElementById("fivethree").style.display = "none"
    document.getElementById("sixthree").style.display = "none"
    document.getElementById("threefour").style.display = "none"
    document.getElementById("fourfour").style.display = "none"
    document.getElementById("fivefour").style.display = "none"
    document.getElementById("sixfour").style.display = "none"
    document.getElementById("onefive").style.display = "none"
    document.getElementById("threefive").style.display = "none"
    document.getElementById("fourfive").style.display = "none"
    document.getElementById("fivefive").style.display = "none"
    document.getElementById("sixfive").style.display = "none"
    document.getElementById("threesix").style.display = "none"
    document.getElementById("foursix").style.display = "none"
    document.getElementById("fivesix").style.display = "none"
    document.getElementById("sixsix").style.display = "none"
    document.getElementById("line").style.display = "none"
    document.getElementById("pair").style.display = "none"
    document.getElementById("triple").style.display = "none"
    document.getElementById("fourth").style.display = "none"
}

document.getElementById("oneone").addEventListener("click", function () {
    player01.one--
    player01scoreround += 100
    options()
})
document.getElementById("threeone").addEventListener("click", function () {
    player01.one -= 3
    player01scoreround += 300
    options()
})
document.getElementById("fourone").addEventListener("click", function () {
    player01.one -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fiveone").addEventListener("click", function () {
    player01.one -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixone").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})



document.getElementById("threetwo").addEventListener("click", function () {
    player01.two -= 3
    player01scoreround += 200
    options()
})
document.getElementById("fourtwo").addEventListener("click", function () {
    player01.two -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fivetwo").addEventListener("click", function () {
    player01.two -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixtwo").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})



document.getElementById("threethree").addEventListener("click", function () {
    player01.three -= 3
    player01scoreround += 300
    options()
})
document.getElementById("fourthree").addEventListener("click", function () {
    player01.three -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fivethree").addEventListener("click", function () {
    player01.three -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixthree").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})


document.getElementById("threefour").addEventListener("click", function () {
    player01.four -= 3
    player01scoreround += 400
    options()
})
document.getElementById("fourfour").addEventListener("click", function () {
    player01.four -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fivefour").addEventListener("click", function () {
    player01.four -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixfour").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})



document.getElementById("onefive").addEventListener("click", function () {
    player01.five -= 1
    player01scoreround += 50
    options()
})
document.getElementById("threefive").addEventListener("click", function () {
    player01.five -= 3
    player01scoreround += 500
    options()
})
document.getElementById("fourfive").addEventListener("click", function () {
    player01.five -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fivefive").addEventListener("click", function () {
    player01.five -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixfive").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})



document.getElementById("threesix").addEventListener("click", function () {
    player01.six -= 3
    player01scoreround += 600
    options()
})
document.getElementById("foursix").addEventListener("click", function () {
    player01.six -= 4
    player01scoreround += 1000
    options()
})
document.getElementById("fivesix").addEventListener("click", function () {
    player01.six -= 5
    player01scoreround += 1500
    options()
})
document.getElementById("sixsix").addEventListener("click", function () {
    player01scoreround += 2000
    end01()
})



document.getElementById("line").addEventListener("click", function () {
    player01scoreround += 1500
    end01()
})
document.getElementById("pair").addEventListener("click", function () {
    player01scoreround += 1500
    end01()
})
document.getElementById("triple").addEventListener("click", function () {
    player01scoreround += 2500
    end01()
})
document.getElementById("fourth").addEventListener("click", function () {
    player01scoreround += 1500
    end01()
})



document.getElementById('roll02').addEventListener('click',
    function () {
        document.getElementById("roll02").disabled = true;
        document.getElementById("end02").disabled = false;
        turn02 = 0
        if (played02 == true) {
            roll2(player02.one + player02.two + player02.three + player02.four + player02.five + player02.six)
        } else {
            played02 = true
            player02scoreround = 0;
            roll2(6);
        }

    }
);

document.getElementById('end02').addEventListener('click', end02);

function end02() {
    round++
    player02score += player02scoreround
    if (player02score >= 10000){
        console.log("Player 2 won")
    }
    player02scoreround = 0
    document.getElementById("score02").innerText = `Your score: ${player02score}`
    document.getElementById("score02round").innerText = `Your score this round: ${player02scoreround}`
    clear2();
    player02arr = []
    player02 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    player01arr = []
    player01 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    played02 = false
    turn02 = 0
    document.getElementById("round").innerText = `Round: ${round}`
    document.getElementById("roll01").disabled = false;
    document.getElementById("end01").disabled = true;
    document.getElementById("roll02").disabled = true;
    document.getElementById("end02").disabled = true;
}


function roll2(x) {
    player02arr = []
    player02 = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    }
    for (i = 0; i < x; i++) {
        player02arr.push(Math.ceil(Math.random() * 6));
    }
    console.log(player02arr)
    count2()
}

function count2() {

    player02arr.forEach(dice => {
        switch (dice) {
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
    });
    if ((player02.one > 0 || player02.two > 2 || player02.three > 2 || player02.four > 2 || player02.five > 0 || player02.six > 2) || ((played02.one + player02.two + player02.three + player02.four + player02.five + player02.six) == 6)) {
        options2()
    } else {
        document.getElementById("roll02").disabled = true;
        document.getElementById("end02").disabled = false;
        player02scoreround = 0;
        document.getElementById("score02round").innerText = `Your score this round: ${player02scoreround}`
        document.getElementById("score02").innerText = `Your score: ${player02score}`
    }

}

function options2() {
    clear2()
    turn02++
    document.getElementById("score02round").innerText = `Your score this round: ${player02scoreround}`
    document.getElementById("rolled02").innerText = `You rolled: ${player02.one}x One, ${player02.two}x Two, ${player02.three}x Three, ${player02.four}x Four, ${player02.five}x Five, ${player02.six}x Six`
    if (turn02 > 1) {
        document.getElementById("roll02").disabled = false;
    }
    let pairs3 = [];
    let triplets = [];
    let fourth = [];

    if (player02.one > 0) {
        document.getElementById("oneone2").style.display = "inline";
        if (player02.one > 1) {
            pairs3.push("one");
            if (player02.one > 2) {
                triplets.push("one");
                document.getElementById("threeone2").style.display = "inline";
                if (player02.one > 3) {
                    fourth.push("one");
                    for (i = 0; i < pairs3.length; i++) {
                        if (pairs3[i] == "one") {
                            pairs3.splice(i, 1);
                        }
                    }
                    document.getElementById("fourone2").style.display = "inline";
                    if (player02.one > 4) {
                        document.getElementById("fiveone2").style.display = "inline";
                        if (player02.one > 5) {
                            document.getElementById("sixone2").style.display = "inline";
                        }
                    }
                }
            }
        }
    }
    if (player02.two > 1) {
        pairs3.push("two");
        if (player02.two > 2) {
            triplets.push("two");
            document.getElementById("threetwo2").style.display = "inline";
            if (player02.two > 3) {
                fourth.push("two");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "two") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourtwo2").style.display = "inline";
                if (player02.two > 4) {
                    document.getElementById("fivetwo2").style.display = "inline";
                    if (player02.two > 5) {
                        document.getElementById("sixtwo2").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player02.three > 1) {
        pairs3.push("three");
        if (player02.three > 2) {
            triplets.push("three");
            document.getElementById("threethree2").style.display = "inline";
            if (player02.three > 3) {
                fourth.push("three");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "three") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourthree2").style.display = "inline";
                if (player02.three > 4) {
                    document.getElementById("fivethree2").style.display = "inline";
                    if (player02.three > 5) {
                        document.getElementById("sixthree2").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player02.four > 1) {
        pairs3.push("four");
        if (player02.four > 2) {
            triplets.push("four");
            document.getElementById("threefour2").style.display = "inline";
            if (player01.four > 3) {
                fourth.push("fourth");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "four") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("fourfour2").style.display = "inline";
                if (player02.four > 4) {
                    document.getElementById("fivefour2").style.display = "inline";
                    if (player02.four > 5) {
                        document.getElementById("sixfour2").style.display = "inline";
                    }
                }
            }
        }
    }
    if (player02.five > 0) {
        document.getElementById("onefive2").style.display = "inline";
        if (player02.five > 1) {
            pairs3.push("five");
            if (player02.five > 2) {
                triplets.push("five");
                document.getElementById("threefive2").style.display = "inline";
                if (player02.five > 3) {
                    fourth.push("five");
                    for (i = 0; i < pairs3.length; i++) {
                        if (pairs3[i] == "fix") {
                            pairs3.splice(i, 1);
                        }
                    }
                    document.getElementById("fourfive2").style.display = "inline";
                    if (player02.five > 4) {
                        document.getElementById("fivefive2").style.display = "inline";
                        if (player02.five > 5) {
                            document.getElementById("sixfive2").style.display = "inline";
                        }
                    }
                }
            }
        }
    }
    if (player02.six > 1) {
        pairs3.push("six");
        if (player02.six > 2) {
            triplets.push("six");
            document.getElementById("threesix2").style.display = "inline";
            if (player02.six > 3) {
                fourth.push("six");
                for (i = 0; i < pairs3.length; i++) {
                    if (pairs3[i] == "six") {
                        pairs3.splice(i, 1);
                    }
                }
                document.getElementById("foursix2").style.display = "inline";
                if (player02.six > 4) {
                    document.getElementById("fivesix2").style.display = "inline";
                    if (player02.six > 5) {
                        document.getElementById("sixsix2").style.display = "inline";
                    }
                }
            }
        }
    }
    if ((player02.one == player02.two) && (player02.one == player02.three) && (player02.one == player02.four) && (player02.one == player02.five) && (player02.one == player02.six) && (player02.one != 0)) {
        document.getElementById("line2").style.display = "inline";
    }
    if (pairs3.length == 3) {
        document.getElementById("pair2").style.display = "inline";
    }
    if (triplets.length == 2) {
        document.getElementById("triple2").style.display = "inline";
    }
    if (fourth.length == 1 && pairs3.length == 1) {
        document.getElementById("fourth2").style.display = "inline";
    }

    played02 = true;
}

function clear2() {
    document.getElementById("oneone2").style.display = "none"
    document.getElementById("threeone2").style.display = "none"
    document.getElementById("fourone2").style.display = "none"
    document.getElementById("fiveone2").style.display = "none"
    document.getElementById("sixone2").style.display = "none"
    document.getElementById("threetwo2").style.display = "none"
    document.getElementById("fourtwo2").style.display = "none"
    document.getElementById("fivetwo2").style.display = "none"
    document.getElementById("sixtwo2").style.display = "none"
    document.getElementById("threethree2").style.display = "none"
    document.getElementById("fourthree2").style.display = "none"
    document.getElementById("fivethree2").style.display = "none"
    document.getElementById("sixthree2").style.display = "none"
    document.getElementById("threefour2").style.display = "none"
    document.getElementById("fourfour2").style.display = "none"
    document.getElementById("fivefour2").style.display = "none"
    document.getElementById("sixfour2").style.display = "none"
    document.getElementById("onefive2").style.display = "none"
    document.getElementById("threefive2").style.display = "none"
    document.getElementById("fourfive2").style.display = "none"
    document.getElementById("fivefive2").style.display = "none"
    document.getElementById("sixfive2").style.display = "none"
    document.getElementById("threesix2").style.display = "none"
    document.getElementById("foursix2").style.display = "none"
    document.getElementById("fivesix2").style.display = "none"
    document.getElementById("sixsix2").style.display = "none"
    document.getElementById("line2").style.display = "none"
    document.getElementById("pair2").style.display = "none"
    document.getElementById("triple2").style.display = "none"
    document.getElementById("fourth2").style.display = "none"
}

document.getElementById("oneone2").addEventListener("click", function () {
    player02.one--
    player02scoreround += 100
    options2()
})
document.getElementById("threeone2").addEventListener("click", function () {
    player02.one -= 3
    player02scoreround += 300
    options2()
})
document.getElementById("fourone2").addEventListener("click", function () {
    player02.one -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fiveone2").addEventListener("click", function () {
    player02.one -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixone2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})



document.getElementById("threetwo2").addEventListener("click", function () {
    player02.two -= 3
    player02scoreround += 200
    options2()
})
document.getElementById("fourtwo2").addEventListener("click", function () {
    player02.two -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fivetwo2").addEventListener("click", function () {
    player02.two -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixtwo2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})



document.getElementById("threethree2").addEventListener("click", function () {
    player02.three -= 3
    player02scoreround += 300
    options2()
})
document.getElementById("fourthree2").addEventListener("click", function () {
    player02.three -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fivethree2").addEventListener("click", function () {
    player02.three -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixthree2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})


document.getElementById("threefour2").addEventListener("click", function () {
    player02.four -= 3
    player02scoreround += 400
    options2()
})
document.getElementById("fourfour2").addEventListener("click", function () {
    player02.four -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fivefour2").addEventListener("click", function () {
    player02.four -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixfour2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})



document.getElementById("onefive2").addEventListener("click", function () {
    player02.five -= 1
    player02scoreround += 50
    options2()
})
document.getElementById("threefive2").addEventListener("click", function () {
    player02.five -= 3
    player02scoreround += 500
    options2()
})
document.getElementById("fourfive2").addEventListener("click", function () {
    player02.five -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fivefive2").addEventListener("click", function () {
    player02.five -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixfive2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})



document.getElementById("threesix2").addEventListener("click", function () {
    player02.six -= 3
    player02scoreround += 600
    options2()
})
document.getElementById("foursix2").addEventListener("click", function () {
    player02.six -= 4
    player02scoreround += 1000
    options2()
})
document.getElementById("fivesix2").addEventListener("click", function () {
    player02.six -= 5
    player02scoreround += 1500
    options2()
})
document.getElementById("sixsix2").addEventListener("click", function () {
    player02scoreround += 2000
    end02()
})



document.getElementById("line2").addEventListener("click", function () {
    player02scoreround += 1500
    end02()
})
document.getElementById("pair2").addEventListener("click", function () {
    player02scoreround += 1500
    end02()
})
document.getElementById("triple2").addEventListener("click", function () {
    player02scoreround += 2500
    end02()
})
document.getElementById("fourth2").addEventListener("click", function () {
    player02scoreround += 1500
    end02()
})
