function QuoteController() {

	var quoteService = new QuoteService()

	quoteService.getQuote(function (quoteData) {
	draw(quoteData)
	
	})
	function draw(quoteData) {
		var elem = document.getElementById("quote")
		var template = `
  <h3>${quoteData.quote}</h3>`
	elem.innerHTML = template
	}
}
