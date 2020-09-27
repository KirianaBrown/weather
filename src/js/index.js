import '../sass/main.scss';

import x from './test';

const y = 44

document.querySelector('.btn').addEventListener('click', e => {
    e.preventDefault();
    console.log('button has been pressed')
})

console.log(`I have successfully imported ${x} from another module called test.js, and variable y is ${y}`)