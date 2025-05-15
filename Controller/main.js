const img = document.getElementById('androidImage');
const text = document.getElementById('text1');

img.addEventListener('mouseover', () => {
  img.src = 'View/images/android2.png';
  text.style.color = '#009cd0'; // Cambia el color del texto al pasar el cursor
});

img.addEventListener('mouseout', () => {
  img.src = 'View/images/android.png';
  text.style.color = ''; // Restaura el color original del texto
});


const img2 = document.getElementById('appleImage');
const text2 = document.getElementById('text2');

img2.addEventListener('mouseover', () => {
  img2.src = 'View/images/apple2.png';
  text2.style.color = '#009cd0'; // Cambia el color del texto al pasar el cursor
});

img2.addEventListener('mouseout', () => {
  img2.src = 'View/images/apple.png';
  text2.style.color = ''; // Restaura el color original del texto
});

function androidScreen() {
  $('#mainS').css('display','none')
  $('#iosS').css('display','none')
  $('#androidS').css('display','block')
}

function iosScreen() {
  $('#mainS').css('display','none')
  $('#androidS').css('display','none')
  $('#iosS').css('display','block')
}