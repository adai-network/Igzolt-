/* IGZOLT Interface Engine v1 */

document.addEventListener("DOMContentLoaded", () => {

    const node = document.querySelector(".node-svg");
    const hotspots = document.querySelectorAll(".hotspot");

    if(!node) return;

    /* subtle rotation movement */

    let angle = 0;

    function animateNode(){
        angle += 0.002;

        node.style.transform =
            "rotateY(" + Math.sin(angle) * 2 + "deg) " +
            "rotateX(" + Math.cos(angle) * 1.5 + "deg)";

        requestAnimationFrame(animateNode);
    }

    animateNode();

    /* glow pulse */

    setInterval(() => {

        node.style.filter =
            "drop-shadow(0 0 20px rgba(255,220,150,.25)) " +
            "drop-shadow(0 0 80px rgba(255,220,150,.15))";

        setTimeout(() => {
            node.style.filter = "";
        }, 900);

    }, 4000);


    /* hotspot interaction */

    hotspots.forEach(h => {

        h.addEventListener("mouseenter", () => {

            node.style.transform += " scale(1.02)";

        });

        h.addEventListener("mouseleave", () => {

            node.style.transform = node.style.transform.replace(" scale(1.02)", "");

        });

    });

});
