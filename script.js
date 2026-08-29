
/* ==========================================
   PHOTO DATA
========================================== */

const photos = [

    {
        image: "images/photo1.jpg",
        message: "A beautiful memory to remember forever ❤️"
    },

    {
        image: "images/photo2.jpg",
        message: "Some moments become our favorite memories 💕"
    },

    {
        image: "images/photo3.jpg",
        message: "Keep smiling and keep creating memories ✨"
    },

    {
        image: "images/photo4.jpg",
        message: "Old memories, beautiful feelings and endless smiles ❤️"
    },

    {
        image: "images/photo5.jpg",
        message: "And this one will always be special 💖"
    }

];


let currentPhoto = 0;

let treeFinished = false;



/* ==========================================
   GET ELEMENTS
========================================== */

const treeIntro =
    document.getElementById("treeIntro");

const home =
    document.getElementById("home");

const message =
    document.getElementById("message");

const memories =
    document.getElementById("memories");

const final =
    document.getElementById("final");

const heartTree =
    document.getElementById("heartTree");

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");



/* ==========================================
   CREATE HEART TREE
========================================== */

function createHeartTree() {

    const totalHearts = 260;


    for (let i = 0; i < totalHearts; i++) {


        const heart =
            document.createElement("div");


        heart.classList.add("tree-heart");


        heart.innerHTML = "♥";


        /*
         * Create a heart-shaped canopy.
         *
         * x and y are calculated using
         * a mathematical heart curve.
         */


        const t =
            Math.random() * Math.PI * 2;


        const scale =
            Math.sqrt(Math.random());


        let x =
            16 *
            Math.pow(Math.sin(t), 3);


        let y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);


        x *= scale;

        y *= scale;


        /*
         * Convert mathematical coordinates
         * to screen coordinates.
         */


        const centerX = 50;

        const centerY = 40;


        const screenX =
            centerX + x * 2.0;


        const screenY =
            centerY - y * 1.7;


        heart.style.left =
            screenX + "%";


        heart.style.top =
            screenY + "%";


        /*
         * Random heart size
         */


        const size =
            8 + Math.random() * 13;


        heart.style.fontSize =
            size + "px";


        /*
         * Different pink shades
         */


        const colors = [

            "#ff3d83",
            "#ff5798",
            "#ff70a8",
            "#ff8db9",
            "#ffb0cb"

        ];


        heart.style.color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /*
         * Random animation delay
         */


        heart.style.animationDelay =
            (i * 0.018) + "s";


        heartTree.appendChild(heart);

    }


    /*
     * After tree is created,
     * show glowing effect.
     */

    setTimeout(function() {

        const hearts =
            document.querySelectorAll(
                ".tree-heart"
            );


        hearts.forEach(function(heart) {

            heart.classList.add("glow");

        });

    }, 7000);

}



/* ==========================================
   START TREE
========================================== */

createHeartTree();



/* ==========================================
   TREE → HOME
========================================== */

setTimeout(function() {

    treeFinished = true;


    treeIntro.classList.remove("active");

    home.classList.add("active");


    createCelebration();


}, 9000);



/* ==========================================
   START BIRTHDAY
========================================== */

function startBirthday() {


    home.classList.remove("active");


    message.classList.add("active");


    /*
     * Start music after user interaction.
     */

    music.play()
        .then(function() {

            musicButton.innerHTML =
                "🔊 Music";

        })
        .catch(function() {

            musicButton.innerHTML =
                "🔇 Music";

        });


    createCelebration();

}



/* ==========================================
   SHOW MEMORIES
========================================== */

function showMemories() {


    message.classList.remove("active");


    memories.classList.add("active");


    createDots();

}



/* ==========================================
   SHOW FINAL
========================================== */

function showFinal() {


    memories.classList.remove("active");


    final.classList.add("active");


    createCelebration();

}



/* ==========================================
   MUSIC
========================================== */

function toggleMusic() {


    if (music.paused) {


        music.play();


        musicButton.innerHTML =
            "🔊 Music";


    }

    else {


        music.pause();


        musicButton.innerHTML =
            "🔇 Music";


    }

}



/* ==========================================
   NEXT PHOTO
========================================== */

function nextPhoto() {


    currentPhoto++;


    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }


    changePhoto();

}



/* ==========================================
   PREVIOUS PHOTO
========================================== */

function previousPhoto() {


    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    changePhoto();

}



/* ==========================================
   CHANGE PHOTO
========================================== */

function changePhoto() {


    const image =
        document.getElementById(
            "memoryPhoto"
        );


    const photoMessage =
        document.getElementById(
            "photoMessage"
        );


    const counter =
        document.getElementById(
            "photoCounter"
        );


    /*
     * Restart image animation.
     */


    image.style.animation = "none";


    void image.offsetWidth;


    /*
     * Change image.
     */


    image.src =
        photos[currentPhoto].image;


    /*
     * Change message.
     */


    photoMessage.innerHTML =
        photos[currentPhoto].message;


    /*
     * Change counter.
     */


    counter.innerHTML =
        (currentPhoto + 1)
        + " / "
        + photos.length;


    /*
     * Start animation again.
     */


    image.style.animation =
        "photoAppear 0.7s ease";


    updateDots();

}



/* ==========================================
   CREATE DOTS
========================================== */

function createDots() {


    const dots =
        document.getElementById("dots");


    dots.innerHTML = "";


    for (
        let i = 0;
        i < photos.length;
        i++
    ) {


        const dot =
            document.createElement("div");


        dot.classList.add("dot");


        if (i === currentPhoto) {

            dot.classList.add("active");

        }


        dot.onclick = function() {


            currentPhoto = i;


            changePhoto();

        };


        dots.appendChild(dot);

    }

}



/* ==========================================
   UPDATE DOTS
========================================== */

function updateDots() {


    const dots =
        document.querySelectorAll(
            ".dot"
        );


    dots.forEach(
        function(dot, index) {


            if (
                index === currentPhoto
            ) {

                dot.classList.add(
                    "active"
                );

            }

            else {

                dot.classList.remove(
                    "active"
                );

            }

        }
    );

}



/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHeart() {


    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const heartTypes = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"

    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100
        + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 25)
        + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5)
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        11000
    );

}


setInterval(
    createFloatingHeart,
    600
);



/* ==========================================
   BALLOONS
========================================== */

function createBalloon() {


    const balloon =
        document.createElement("div");


    balloon.classList.add(
        "balloon"
    );


    balloon.innerHTML = "🎈";


    balloon.style.left =
        Math.random() * 100
        + "vw";


    balloon.style.fontSize =
        (40 + Math.random() * 30)
        + "px";


    balloon.style.animationDuration =
        (7 + Math.random() * 6)
        + "s";


    document.body.appendChild(
        balloon
    );


    setTimeout(
        function() {

            balloon.remove();

        },
        15000
    );

}


setInterval(
    createBalloon,
    2500
);



/* ==========================================
   SPARKLES
========================================== */

function createSparkle() {


    const sparkle =
        document.createElement("div");


    sparkle.classList.add(
        "sparkle"
    );


    sparkle.innerHTML = "✦";


    sparkle.style.left =
        Math.random() * 100
        + "vw";


    sparkle.style.top =
        Math.random() * 100
        + "vh";


    sparkle.style.fontSize =
        (10 + Math.random() * 20)
        + "px";


    sparkle.style.color =
        "#ffd1e2";


    document.body.appendChild(
        sparkle
    );


    setTimeout(
        function() {

            sparkle.remove();

        },
        2000
    );

}


setInterval(
    createSparkle,
    700
);



/* ==========================================
   CELEBRATION
========================================== */

function createCelebration() {


    /*
     * Hearts
     */

    for (
        let i = 0;
        i < 25;
        i++
    ) {


        setTimeout(
            function() {

                createFloatingHeart();

            },
            i * 80
        );

    }


    /*
     * Balloons
     */

    for (
        let i = 0;
        i < 12;
        i++
    ) {


        setTimeout(
            function() {

                createBalloon();

            },
            i * 150
        );

    }


    /*
     * Sparkles
     */

    for (
        let i = 0;
        i < 35;
        i++
    ) {


        setTimeout(
            function() {

                createSparkle();

            },
            i * 70
        );

    }

}



/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener(
    "keydown",
    function(event) {


        /*
         * Left arrow
         */

        if (
            event.key === "ArrowLeft"
        ) {


            if (
                memories.classList.contains(
                    "active"
                )
            ) {

                previousPhoto();

            }

        }


        /*
         * Right arrow
         */

        if (
            event.key === "ArrowRight"
        ) {


            if (
                memories.classList.contains(
                    "active"
                )
            ) {

                nextPhoto();

            }

        }


        /*
         * Space = music
         */

        if (
            event.code === "Space"
        ) {


            /*
             * Don't interfere with buttons.
             */

            if (
                event.target.tagName !==
                "BUTTON"
            ) {

                event.preventDefault();

                toggleMusic();

            }

        }

    }
);
