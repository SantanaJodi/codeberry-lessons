/*
KOTAK JOMBLO
- Gambar sebuah kotak [fillRect()].
- Isi dengan warna hijau [fillStyle].
- Pindahkan sehingga berada di sudut kanan bawah kanvas canvas, 10 pixel dari tepinya.
- Saat menggambar variabel penggunaan persegi untuk lebar dan tinggi (tentukan variabel size sebelumnya).
- Gunakan hanya variabel ketika menjalankan fungsi fillRect()
*/

const canvasOne = document.getElementById('myCanvas1');
const contextOne = canvasOne.getContext('2d');

contextOne.fillStyle = 'green';
contextOne.fillRect(canvasOne.width-100, canvasOne.height-100, 90, 90);

/*
PERSEGI YANG TUMPANG TINDIH
- Gambar sebuah kotak warna merah.
- Gambarkan kotak merah lain (setiap kali kamu memanggil fungsi fillRect maka fungsi tersebut akan menggambar persegi panjang).
- Pindahkan dua kotak sehingga mereka menjadi saling tumpang tindih.
- Isi kotak kedua dengan warna biru (ubah nilai fillStyle sebelum menjalankan fillRect()).
- Beri dua kotak tersebut transparansi sebesar 50% [rgba()].
- Hanya gunakan variabel pada fungsi fillRect().
*/

const canvasTwo = document.getElementById('myCanvas2');
const contextTwo = canvasTwo.getContext('2d');

contextTwo.fillStyle = 'rgba(255,0,0,.5)';
contextTwo.fillRect(canvasTwo.width/2-20, canvasTwo.height/2-20, 80, 80);

contextTwo.fillStyle= 'rgba(0,0,255,.5)';
contextTwo.fillRect(canvasTwo.width/2-60, canvasTwo.height/2-60, 80, 80);


// FLAG OF HUNGARY
var canvasTri = document.getElementById('flag');
var contextTri = canvasTri.getContext('2d');

contextTri.fillStyle = 'red';
contextTri.fillRect(25, 25, 250, 50);
contextTri.fillStyle = 'white';
contextTri.fillRect(25, 75, 250, 50);
contextTri.fillStyle = 'green';
contextTri.fillRect(25, 125, 250, 50);

// DIAGONAL LINES
var lineCan = document.getElementById('line');
var lineCon = lineCan.getContext('2d');

lineCon.strokeStyle = 'red';

lineCon.beginPath()
lineCon.moveTo(0, 0);
lineCon.lineTo(lineCan.width, lineCan.height);
lineCon.stroke();

lineCon.beginPath()
lineCon.moveTo(lineCan.width, 0);
lineCon.lineTo(0, lineCan.height);
lineCon.stroke();

// TRIANGLE
var triCan = document.getElementById('triangle');
var triCon = triCan.getContext('2d');

triCon.strokeStyle = 'gray';
triCon.fillStyle = 'orange';

triCon.beginPath();
triCon.moveTo(triCan.width/2, 40);
triCon.lineTo(triCan.width/3, triCan.height-40);
triCon.lineTo(triCan.width-100, triCan.height-40);
triCon.lineTo(triCan.width/2, 40);
triCon.stroke();
triCon.fill();

// DIVIDING LINE
var divCan = document.getElementById('divL');
var divCon = divCan.getContext('2d');

divCon.strokeStyle = 'green';

divCon.beginPath();
divCon.moveTo(divCan.width/2, 0);
divCon.lineTo(divCan.width/2, divCan.height);
divCon.stroke();

divCon.strokeStyle = 'red';

divCon.beginPath();
divCon.moveTo(0, divCan.height/2);
divCon.lineTo(divCan.width, divCan.height/2);
divCon.stroke();

// PERSEGI DRY
var dryCan = document.getElementById('dry');
var dryCon = dryCan.getContext('2d');

dryCon.fillStyle = 'rgba(255,165,0,.5)';

var xyAxis = 0

for(var i=1; i<10; i++){
  xyAxis = xyAxis+15;
  dryCon.fillRect(xyAxis, xyAxis, 30, 30);
}

// ROW
var rowCan = document.getElementById('row');
var rowCon = rowCan.getContext('2d');

rowCon.fillStyle = 'orange';

var x = 5;
var y = 5;

var boxSize = 32

for(i=0; i<5; i++){
  for (j=0; j<5; j++){
    if (i-1!=j&&i-2!=j&&i-3!=j&&i-4!=j){
      rowCon.fillRect((x+boxSize)*i+10,(y+boxSize)*j+10,boxSize,boxSize);
    }
  }
}

// COLOR BOX
var boxColCan = document.getElementById('boxCol');
var boxColCon = boxColCan.getContext('2d');

for(i=0; i<5; i++){
  for(k=250; k>0; k=k-50){
    boxColCon.fillStyle = 'rgb(75,100,'+ k +')'
  }
  for(j=0; j<5; j++){
    boxColCon.fillRect((x+boxSize)*i+10,(y+boxSize)*j+10,boxSize,boxSize);
  }
}
