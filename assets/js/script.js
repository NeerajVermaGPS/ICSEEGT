/* 
Author: Neeraj Verma
LinkedIn: https://www.linkedin.com/in/neerajvermagps/
Updated on: 07-07-2025
*/

const menuIcon = document.querySelector(".menu-nav-ico");
const menuNav = document.querySelector(".menu-nav");
const mainNav = document.querySelector(".main-nav");
const menuHeader = document.querySelector(".main-header");
const navLinks = document.querySelectorAll(".menu-line");
const logo = document.querySelector(".logo img");
const launchDate = new Date(2025, 11, 12, 0, 0, 0);
const countdownElement = document.querySelector(".countdown-blocks");

// Navbar
menuIcon.addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    navLinks[i].classList.toggle("animateMenu");
  }
  mainNav.classList.toggle("nav-height");
  menuNav.classList.toggle("mhbg");
  menuHeader.classList.toggle("header-height")
});

function menuBG() {
	if(window.innerWidth < 850) {
		if (window.scrollY > 50) {
			menuHeader.style.background = "rgba(0, 0, 0, 0.7)";
		} else {
			menuHeader.style.background = "transparent";
		}
	}
}

// Slide in on intersection with Viewport
function slideInViewportComponent() {
    const elements = document.querySelectorAll('.fade-in-comp');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => {
      observer.observe(el);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    slideInViewportComponent();
})

// Countdown
const createBlock = (label, value) => {
	const block = document.createElement("div");
	block.className = "time-block";

	const valueEl = document.createElement("span");
	valueEl.className = "time-value";
    
	valueEl.textContent = value < 10 ? `0${value}` : value;

	const labelEl = document.createElement("p");
	labelEl.className = "time-label";
	labelEl.textContent = label;

	if (label === "Seconds") {
		valueEl.style.animation = "pulse 1s infinite";
	}

	block.appendChild(valueEl);
	block.appendChild(labelEl);
	return block;
};

const updateCountdown = () => {
	const now = new Date();
	const difference = launchDate - now;

	if (difference > 0) {
		const timeLeft = {
			Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			Minutes: Math.floor((difference / 1000 / 60) % 60),
			Seconds: Math.floor((difference / 1000) % 60)
		};

		countdownElement.innerHTML = "";
		for (const [label, value] of Object.entries(timeLeft)) {
			countdownElement.appendChild(createBlock(label, value));
		}
	} else {
		countdownElement.innerHTML = "";
		document.querySelector(".countdown-title").textContent = "Launch Day!";
		document.querySelector(".countdown-description").textContent =
			"The day has arrived!";

		const messageBlock = document.createElement("div");
		messageBlock.className = "time-block expired-message";
		messageBlock.style.gridColumn = "1 / -1";
		messageBlock.style.padding = "2rem";
		messageBlock.textContent = "We're live now!";

		countdownElement.appendChild(messageBlock);
		clearInterval(timer);
	}
};

// updateCountdown();
// const timer = setInterval(updateCountdown, 1000);

// Call for Papers card
document.querySelectorAll('.view-more-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const list = this.previousElementSibling;
    list.classList.toggle('expanded');
    this.innerHTML = list.classList.contains('expanded') ? 'View Less <img src="assets/icons/down.svg" alt="down" style="transform: rotateZ(180deg)">' : 'View More <img src="assets/icons/down.svg" alt="down">';
  });
})

// window.addEventListener("scroll", function () {
//   menuBG();
// });