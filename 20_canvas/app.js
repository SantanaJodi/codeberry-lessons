console.log('yay')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.strokeStyle = 'red';

// fillRect(x, y, width, height)
// context.fillRect(20,20,250,175);

context.fillRect(150, 75, canvas.width, canvas.height);
context.beginPath();
context.moveTo(100,70);
context.lineTo(150,100);
context.stroke();
