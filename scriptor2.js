document.getElementById('submitBtn').addEventListener('click', function() {
  const carBrand = document.getElementById('carBrand').value;
  const carModel = document.getElementById('carModel').value;
  const dateOfPurchase = document.getElementById('dateOfPurchase').value;
  const carDistance = document.getElementById('carDistance').value;
  const maintenance = document.getElementById('maintenance').checked;

  let message = `Warranty requested for a ${carBrand} ${carModel} purchased on ${dateOfPurchase}.`;
  message += `\nThe car has covered ${carDistance} km.`;
  if (maintenance) {
    message += `\nThis car has had maintenance performed outside of the official service center.`
  }

  alert(message);


  document.getElementById('warrantyForm').reset();
});
