const btn = document.querySelector('.btnup');
btn.addEventListener ('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


