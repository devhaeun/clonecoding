document.body.addEventListener('mousemove', (e) => {
    // console.log(e);
    document.querySelector('.ghost').style.left = e.pageX + 'px';
    document.querySelector('.ghost').style.top = e.pageY + 'px';
})