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

document.getElementById('roll01').addEventListener('click',
    function () {
        document.getElementById("roll01").disabled = true;
        document.getElementById("end01").disabled = false;

        if (played01 == true) {
            roll(player01.one + player01.two + player01.three + player01.four + player01.five + player01.six)
        } else {
            roll(6);
            player01scoreround = 0;
        }

    }
);

document.getElementById('end01').addEventListener('click', end01);

function end01() {
    player01score += player01scoreround
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
    player01 = false
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
        player01arr.push(Math.ceil(Math.random() * 6));
    }
    count()
    console.log(player01arr)
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
    if (player01.one > 0 || player01.two > 2 || player01.three > 2 || player01.four > 2 || player01.five > 0 || player01.six > 2) {
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
    document.getElementById("score01round").innerText = `Your score this round: ${player01scoreround}`
    document.getElementById("rolled01").innerHTML = `<p>ones: ${player01.one}, twos: ${player01.two}, threes: ${player01.three}, fourths: ${player01.four}, fives: ${player01.five}, sixs: ${player01.six}</p>`
    if (played01 == true) {
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

