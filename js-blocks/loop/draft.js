let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = 'Countdown 10';    
    }
    else if (i === 0) {        
        para.textContent = 'Blass off!';
    }
    else {
        para.textContent = i;
    }        
    output.appendChild(para);
}
// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);



const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
for (const person of people) {    
    if ((person === 'Phil') || (person === 'Lola') ) {
        refused.textContent += `${person}, `;        
    } else {
        admitted.textContent += `${person}, `;
    }
}
admitted.textContent = admitted.textContent.substring(0, admitted.textContent.length-2) + '.';
refused.textContent = refused.textContent.substring(0, refused.textContent.length-2) + '.';
