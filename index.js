const yesBtn = document.querySelector('#yesBtn'); 

yesBtn.addEventListener('click',function () {
    alert('Yeeeeei, Sabía que no dirías que no jejejeje')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}&)`);
})