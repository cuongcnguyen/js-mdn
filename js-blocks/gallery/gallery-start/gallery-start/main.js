const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


// const img = document.createElement('img');
// img.src = 'xxx';
// img.alt = 'xxx';
// thumbBar.appendChild(img);


/* Declaring the alternative text for each image file */

const alts = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */

for (let i = 0; i < images.length; i++) {
    // let alt = img.alt.replace('xxx', images[i]);
    // let src = img.src.replace('xxx', `images/${images[i]}`);
    // img.src = src;
    // img.alt = alt;
    
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);

    thumbBar.addEventListener('click', (e) =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>{
    if ( btn.getAttribute('class') ==='dark' ) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
} )