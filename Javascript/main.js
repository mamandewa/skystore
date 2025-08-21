document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi').innerHTML;
        let judul = parent.querySelector('.MANDEWA').innerHTML;
        console.log(`judul : ${judul}`);
        
        let tombolmodal = document.querySelector('.btnModal');
        tombolmodal.click();

        document.querySelector('.modalTittle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6285813068534';
        let pesan = `https://wa.me/send?phone=${nohp}&text= Hallo Kak Saya Mau Beli Produk Baju SKY STORE ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
        document.querySelector('.gambar').href = pesan;



    });
});