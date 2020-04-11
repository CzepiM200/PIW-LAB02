const rocketship = document.getElementById('animation');

rocketship.style.top = '15px';
rocketship.style.left = '110px';
rocketship.style.position = 'absolute';

setInterval(() => {rocketship.style.left !== '510px' ? rocketship.style.left = parseInt(rocketship.style.left) + 1 + 'px' : rocketship.style.left = '110px';}, 10);
