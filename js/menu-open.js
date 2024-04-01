const $menuOpen = document.querySelector(".menu-open");
const $gnb = document.querySelector("header .gnb");
const $close = document.querySelector(".close");

$menuOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  // alert('메뉴버튼 클릭!');
  $gnb.style.right = "0";
});

const menuCloseHandler = () => {
  $gnb.style.right = "-100%";
};

$close.addEventListener("click", menuCloseHandler);

document.body.addEventListener("click", menuCloseHandler);
