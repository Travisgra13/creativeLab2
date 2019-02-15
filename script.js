
document.getElementById("submit").addEventListener("click", function(event) {
	var type = document.getElementById("userName").value;
  event.preventDefault();
  if (type === "")
    return;
  const url = "http://apilayer.net/api/live?access_key=6b957eb46e5de3f35f1fb5c4be2d689a&currencies=AUD,AFN,AOA,EUR,GBP"
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
		var currencies = [
	  "USDAUD : Australian Dollar",
	  "USDAFN : Afghan Afhani",
	  "USDAOA : Angolan Kwanza",
	  "USDEUR : Europe",
	  "USDGBP : Great Britain"
	  ];
      let results = "";
	  var numCurr = 0;
	  for (i in currencies) {
		  results += '<h2>' + currencies[i] + '</h2>';
		  	  var numJson = 0;
		  for (j in json.quotes) {
			  if (numCurr === numJson) {
		  results += '<p>' + (json.quotes[j]) + '</p>';
			  }
			  numJson++;
	  }
	  numCurr++;
	  }
      document.getElementById("moneyResults").innerHTML = results;
    });
})
//http://apilayer.net/api/list?access_key=6b957eb46e5de3f35f1fb5c4be2d689a