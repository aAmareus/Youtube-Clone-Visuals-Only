const wrapper = document.querySelector('.category-wrapper');
const categories = Array.from(document.querySelectorAll('.category'));
const rightArrow = document.querySelector(".scrollBtn.arrow.right");
const leftArrow = document.querySelector(".scrollBtn.arrow.left");


let currentIndex = 0;

const visibleWidth = DocumentFragment.querySelector('.main-tags').offsetWidth;

const positions = categories.map((cat, i) => {
    return i == 0 ? 0 : categories[i - 1].offsetLeft + categories[i - 1].offsetWidth + 10;
});

//Functionss

function moveCards(index) {
    const maxScroll = wrapper.scrollWidth - visibleWidth;
    let left = positions[index] || 0;
    if (left > maxScroll) left = maxScroll;
    wrapper.style.left = -left + "px";
    checkVisibility(left, maxScroll)
}

function checkVisibility(left, maxScroll) {
    leftArrow.style.opacity = left <= 0 ? '0' : '1';
    rightArrow.style.opacity = left >= maxScroll ? '0' : '1';
}

leftArrow.onclick = () => {
    if (currentIndex > 0) currentIndex--;
    moveCards(currentIndex)
}

rightArrow.onclick = () => {
    if (currentIndex < categories.lenght - 1) currentIndex++;
    moveCards(currentIndex)
}

moveCards(currentIndex);