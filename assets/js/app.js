const wrapper = document.querySelector('.category-wrapper');
const categories = Array.from(document.querySelectorAll('.category'));
const rightArrow = document.querySelector(".scrollBtn.arrow.right");
const leftArrow = document.querySelector(".scrollBtn.arrow.left");
const mainTags = document.querySelector(".main-tags");


let currentIndex = 0;

function getPositions() {
    return categories.map((cat, i) => i === 0 ? 0 : cat.offsetLeft);
}
 
//Functions
function moveCards(index) {
    const visibleWidth = mainTags.offsetWidth;
    const positions = getPositions();
    const maxScroll = wrapper.scrollWidth -visibleWidth;
    let left = positions[index] || 0;
    if (left > maxScroll) left = maxScroll;
    wrapper.style.left = -left + "px";
    checkVisibility(left, maxScroll); 
}

function checkVisibility(left, maxScroll) {
    left.style.opacity = left <= 0 ? '0.5' : '1';
    rightArrow.style.opacity = left >= maxScroll ? '0.5' : '1';
} 

leftArrow.onclick = () => {
    if (currentIndex > 0) currentIndex--;
    moveCards(currentIndex);
};

rightArrow.onclick = () => {
    if (currentIndex < categories.length - 1) currentIndex++;
    moveCards(currentIndex);
};

moveCards(currentIndex);