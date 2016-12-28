function paste(el) {
	var text = document.getElementById("tempAdd").value;
	if (el.checked) {
		if (text != null || text != undefined) {
			document.getElementById("permAdd").value = text;
		}
	}
	
}

