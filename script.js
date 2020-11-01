
var p = document.createElement('p');
p.innerText = 'Git is a source code version control too';

function show(){
    document.getElementById('btn').insertAdjacentElement('afterend', p);
}

document.getElementById('btn').innerHTML = 'Click Me';
document.getElementById('btn').onclick = show;

console.log('Script ran.');