const centerItem = document.querySelector(".center")
const menu = document.querySelector(".menu")

centerItem.addEventListener("mouseover", () => {
    menu.classList.add("change")
})

menu.addEventListener("mouseleave", () => {
    menu.classList.remove("change")
})

// Definitions
var aboutPage = document.querySelector(".about-me")
var projectPage = document.querySelector(".projects-page")
var homePage = document.querySelector(".home-page")
var contactPage = document.querySelector(".contact-page")
var experiencePage = document.querySelector(".experience-page")

var aboutToHome = document.querySelector("#aboutToHome")
var projectToHome = document.querySelector("#projectToHome")
var contactToHome = document.querySelector("#contactToHome")
var experienceToHome = document.querySelector("#experienceToHome")

var contactBTN = document.querySelector(".contactBTN")
var aboutBTN = document.querySelector(".aboutBTN")
var projectBTN = document.querySelector(".projectBTN")
var experienceBTN = document.querySelector(".experienceBTN")

var video = document.querySelector("#video-main")

// Effects with gsap
const timelineAbout = gsap.timeline()
timelineAbout
    .from(".about-me .title h1", { duration: 2, opacity: 0, y: -50, ease: "power2" }, 2)
    .from(".about-me .title span", { duration: 2, opacity: 0, ease: "power2" }, 2.5)
    .from(".about-me .info .left-side", { duration: 2, y: "50", opacity: 0, ease: "power2" }, 2.5)
    .from(".about-me .info .left-side p", { duration: 2, height: 0, opacity: 0, ease: "power2" }, 3)
    .from(".about-me .info .right-side", { duration: 2, y: "50", opacity: 0, ease: "power2" }, 3.5)
    .from(".about-me .info .right-side .skill", { duration: 2, width: 0, opacity: 0, ease: "slow" }, 4)
    .from(".about-me .button button", { duration: 2, opacity: 0, ease: "slow" }, 5)

const timelineProject = gsap.timeline()
timelineProject
    .from(".projects-page .title h1", { duration: 2, opacity: 0, y: -50, ease: "power2" }, 2)
    .from(".projects-page .title span", { duration: 2, opacity: 0, ease: "power2" }, 2.5)
    .from(".projects-page .exp", { duration: 2, opacity: 0, y: 50, ease: "power2" }, 3)
    .from(".projects-page .project .project-details", { duration: 2, opacity: 0, y: -50, ease: "power2" }, 3.5)
    .from(".projects-page .project .photo-gallery img", { duration: 2, y: -350, ease: "power2" }, 4)
    .from(".projects-page .buttons .next", { duration: 1, x: 100, ease: "power2" }, 5)
    .from(".projects-page .button", { duration: 2, opacity: 0, y: 50, ease: "power2" }, 6)

const timelineContact = gsap.timeline()
timelineContact
    .from(".contact-page .title h1", { duration: 2, opacity: 0, y: -50, ease: "power2" }, 2)
    .from(".contact-page .title span", { duration: 2, opacity: 0, ease: "power2" }, 2.5)
    .from(".contact-page .left-side h3", { duration: 2, opacity: 0, ease: "power2" }, 3)
    .from(".contact-page .left-side .contact-item", { duration: 2, opacity: 0, ease: "power2" }, 3.5)
    .from(".contact-page .left-side .icons", { duration: 2, scale: 0, y: -50, opacity: 0, ease: "power2" }, 4)
    .from(".contact-page .right-side input", { duration: 1, height: 0, opacity: 0, ease: "power2" }, 4.5)
    .from(".contact-page .right-side textarea", { duration: 1, height: 0, opacity: 0, ease: "power2" }, 4.5)
    .from(".contact-page .button", { duration: 2, opacity: 0, y: 50, ease: "power2" }, 6)

const timelineExperience = gsap.timeline()
timelineExperience
    .from(".experience-page .title h1", { duration: 2, opacity: 0, y: -50, ease: "power2" }, 2)
    .from(".experience-page #video-main", { duration: 1, opacity: 0, ease: "power2" }, 3)
    .from(".experience-page .button", { duration: 2, opacity: 0, y: 50, ease: "power2" }, 4)

// Events
aboutBTN.addEventListener("click", () => {
    aboutPage.classList.add("change")
    homePage.classList.add("change1")
    timelineProject.pause()
    timelineContact.pause()
    timelineExperience.pause()
    timelineAbout.play(1)
})

projectBTN.addEventListener("click", () => {
    projectPage.classList.add("change")
    homePage.classList.add("change3")
    timelineAbout.pause()
    timelineContact.pause()
    timelineExperience.pause()
    timelineProject.play(1)
})

contactBTN.addEventListener("click", () => {
    contactPage.classList.add("change")
    homePage.classList.add("change1")
    timelineAbout.pause()
    timelineProject.pause()
    timelineExperience.pause()
    timelineContact.play(1)
})

experienceBTN.addEventListener("click", () => {
    experiencePage.classList.add("change")
    homePage.classList.add("change2")
    timelineAbout.pause()
    timelineProject.pause()
    timelineContact.pause()
    timelineExperience.play(1)
    video.playbackRate = 2;
    video.play()
})

// Return Home Buttons
experienceToHome.addEventListener("click", () => {
    experiencePage.classList.remove("change")
    homePage.classList.remove("change2")
    video.pause()
    video.currentTime = 0
    video.load()
})

projectToHome.addEventListener("click", () => {
    projectPage.classList.remove("change")
    homePage.classList.remove("change3")
})

aboutToHome.addEventListener("click", () => {
    aboutPage.classList.remove("change")
    homePage.classList.remove("change1")
})

contactToHome.addEventListener("click", () => {
    contactPage.classList.remove("change")
    homePage.classList.remove("change1")
})

window.addEventListener("load", () => {
    experiencePage.classList.remove("change")
    aboutPage.classList.remove("change")
    projectPage.classList.remove("change")
    contactPage.classList.remove("change")
})

// Gallery images
var img = document.querySelectorAll(".photo-gallery img")

for (let i = 0; i < img.length; i++) {
    img[i].onmouseover = function () {
        img[i].style.transform = "scale(1.05)"
    }
    img[i].onmouseout = function () {
        img[i].style.transform = "scale(1)"
    }
}

// About Me Canvas
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

let w, h, particles;
let particleDistance = 40;
let mouse = {
    x: undefined,
    y: undefined,
    radius: 100
}

function init() {
    resizeReset();
    animationLoop();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    particles = [];

    for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
        for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
            particles.push(new Particle(x, y));
        }
    }
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop);
}

function drawScene() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    drawLine();
}

// Lines
function drawLine() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < particleDistance * 1.5) {
                opacity = 1 - (distance / (particleDistance * 1.5));
                ctx.strokeStyle = "rgba(100,100,200," + opacity + ")";
                ctx.lineWidth = .5;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

//Mouse move
function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}

function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}

// Particles
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;

        this.speed = (Math.random() * 25) + 0
        // Particles Change Speed || If you change it to higher value, 
        // when you hover , particles scatter faster to the edges.
    }

    draw() {
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance; // 0-1
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let directionX = forceDirectionX * force * this.speed; //speed
        let directionY = forceDirectionY * force * this.speed;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // return of dots
            if (this.x != this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 100 //return speed
            }
            if (this.y != this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 100
            }
        }
    }
}

// Init function
init()
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);


// Scroll for gallery
function isScrollEnd(container) {
    return Math.floor(container.scrollLeft) + container.offsetWidth === container.scrollWidth
}
function isScrollBegin(container) {
    return container.scrollLeft === 0
}
function hasHorizontalScroll(container) {
    return container.scrollWidth > container.offsetWidth
}
function scrollControl(scrollable, container) {

    // yatay scroll var ise
    if (hasHorizontalScroll(container)) {

        // scroll başlangıçta ise
        if (isScrollBegin(container)) {
            scrollable.classList.remove('left')
            // prev.setAttribute('disabled', 'disabled')
        } else {
            scrollable.classList.add('left')
            // prev.removeAttribute('disabled')
        }

        // scroll sonda ise
        if (isScrollEnd(container)) {
            scrollable.classList.remove('right')
            // next.setAttribute('disabled', 'disabled')
        } else {
            scrollable.classList.add('right')
            // next.removeAttribute('disabled')
        }
    }
}

const scrollables = document.querySelectorAll('.project')

scrollables.forEach(scrollable => {
    const container = scrollable.querySelector('.photo-gallery'),
        next = scrollable.querySelector('.next'),
        prev = scrollable.querySelector('.prev')

    next.addEventListener('click', () => {
        if (isScrollEnd(container)) {
            container.scrollLeft = 0
        }
        container.scrollLeft += container.offsetWidth - 100
    })
    prev.addEventListener('click', () => {
        if (isScrollBegin(container)) {
            container.scrollLeft = container.scrollWidth
        }
        container.scrollLeft -= container.offsetWidth - 100
    })
    container.addEventListener('scroll', () => scrollControl(scrollable, container))
    new ResizeObserver(() => scrollControl(scrollable, container)).observe(container)
})
