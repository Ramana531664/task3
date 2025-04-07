function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ffcc99', '#c9c9ff', '#ffb3e6'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}