const mario = document.querySelector('.mario');
const tube = document.querySelector('.tube');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
  
const loop = setInterval(() => {

    const tubePosition = tube.offsetLeft;

    if (tubePosition <= 120) {

        tube.style.animation = 'none';
        tube.style.left = '$(tubePosition)';

    }

}, 10)

document.addEventListener('keydown', jump);