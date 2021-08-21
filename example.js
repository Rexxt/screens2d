screens2d.canvas.init("kangaroo")
screens2d.canvas.rect(0, 0, "full", "full", 0, "white")
screens2d.canvas.rect(0, 0, "full", 50, 0, "brown")
screens2d.canvas.text(20, 30, "Roboto", "500 18px", "About kangaroos", "white")
screens2d.canvas.text(20, 80, "Roboto", "16px", "I like kangaroos.", "black")
screens2d.canvas.image(20, 100, "kangaroo.jpeg", 200, 300)

document.addEventListener('mousemove', (e) => {
    screens2d.canvas.rect(e.clientX-5, e.clientY-5, 10, 10, 5, "black")
});