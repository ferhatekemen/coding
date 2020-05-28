document.write((function aa() { return 2 * 3 })(), `\n Bu satir 5 harfli kelimeleri büyük harfe dönüştürmektedir.`.split(' ').map(aa => { if (aa.length === 5) { return aa.toUpperCase() } else { return aa } }).join(' '));
         function bb() {
            var paragraph = document.getElementById(`po`);
            var photo = document.getElementById('denizle');
            paragraph.style.color = 'green';
            paragraph.style.backgroundColor = ``;
            paragraph.style.fontSize = "";
            paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
            photo.style.width = '20%';
            photo.style.borderRadius = '5%';
        };

        (function cc() {
            setInterval(bb, 2000)
        })(); 