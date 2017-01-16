var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

function numberRentalDays(startdate,enddate)
{
	var jour_s = startdate.substring(8,10);	
	var jour_e = enddate.substring(8,10);
	var diffdate=parseInt(jour_e)-parseInt(jour_s);
	return diffdate+1
	
	;
}


function rentalPrice()
{
	for(var i=0,c=rentals.length;i<c;i++)
	{
		var idCars;
		if(rentals[i].carId =="p-boxster")
			idCars = 2;
		if(rentals[i].carId == "rr-sport")
			idCars = 1;
		if(rentals[i].carId == "p306")
			idCars = 0;
		var timec = cars[idCars].pricePerDay * numberRentalDays(rentals[i].pickupDate, rentals[i].returnDate);
		var distancec=cars[idCars].pricePerKm*rentals[i].distance;
		var rentalprice=timec+distancec;
		rentals[i].Price=rentalprice;
	}
	
}
rentalPrice();
console.log(rentals);

		
		
