const rocketship = document.getElementById('animation');

rocketship.style.top = '15px';
rocketship.style.left = '200px';
rocketship.style.position = 'absolute';

setInterval(() => {rocketship.style.left !== '600px' ? rocketship.style.left = parseInt(rocketship.style.left) + 1 + 'px' : rocketship.style.left = '200px';}, 10);
