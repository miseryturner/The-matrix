function matrixFun() {
    const m = document.getElementById('matrix');
    const ctx = m.getContext('2d');

    m.width = window.innerWidth;
    m.height = window.innerHeight;

    let arr = '你好你好嗎我坐在這裡很無聊';
    arr = arr.split('');

    let fontSize = 20;

    let columns = m.width / fontSize;
    let drop = [];

    for(let i = 0; i < columns; i++) {
        drop[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, m.width, m.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px arial';

        for(let i = 0; i < drop.length; i++) {
            let text = arr[Math.floor(Math.random() * arr.length)];
            ctx.fillText(text, i * fontSize, drop[i] * fontSize);
            if(drop[i] * fontSize > m.height && Math.random() > 0.975)
                drop[i] = 0;
            drop[i]++;
        }
    }
    setInterval(draw, 1);
}

matrixFun();

window.onresize = () => {
    matrixFun()
}