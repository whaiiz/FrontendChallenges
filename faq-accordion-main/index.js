document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion');

  accordionItems.forEach(item => {
    const expandIcon = item.querySelector('.expand');
    const content = item.querySelector('.content');

    item.addEventListener('click', () => {
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        expandIcon.src = "assets/images/icon-plus.svg"
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        expandIcon.src = "assets/images/icon-minus.svg"
      } 
    });
  })
});