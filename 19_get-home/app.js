console.log('Kalkulator telah dimuat dan siap-sedia.');

function calculateFuelToOffLoad(){
  var totalDistanceToTravel = prompt('Berapa jarak total yang ingin kamu tempuh, dalam kilometer? Masukkan angka.');
  var averageLitersOverHundred = prompt('Berapa konsumsi bahan bakar rata-rata pesawatmu, dalam liter? Masukkan angka.');
  var tankCapacity = prompt('Berapa kapasitas total dari tangki bahan bakar? Masukkan angka.');

  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  var fuelToOffload = tankCapacity - requiredFuel;
  
  alert('Bahan bakar yang di butuhkan: ' + requiredFuel + ' Liter\n' + 'Bahan bakar yang dikurangi: ' + fuelToOffload + ' Liter');
}

calculateFuelToOffLoad()
