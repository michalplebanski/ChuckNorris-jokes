
var url = "http://api.icndb.com/jokes/random";
var $text = $("#joke");
var $btn = $("#get-joke").click(function() {
	getJoke();
});

function getJoke() {
	$.ajax ({
		method: "GET",
		url: url,
		success: function(response) {
			$text.text(response.value.joke);
		}
	});
}
