// TODO: when user cuts text from any field then submit button should become disabled(alt+x doesn't create any problem cuz its entered through keyboard)
$(function() {
	$("#name,#age,#tempAdd,#permAdd").keyup(function() {
		var name = $("input[name='Name']").val();
		var age = $("input[name='Age']").val();
		var tempAdd = $("input[name='TemporaryAddress']").val();
		var permAdd = $("input[name='PermanentAddress']").val();

		if (name != "" && age  != "" && tempAdd != "" && permAdd != "") {// dont use "== null
			$("#submit").prop("disabled",false);
			$("#submit").class("");
			// document.getElementById("submit").disabled = false;
		}
		else {
			// $("#submit").attr("disabled","disabled");
			$("#submit").prop("disabled",true);
			// document.getElementById("submit").disabled = true;
		}

	});
});

function paste(el) {
	var name = $("input[name='Name']").val();
	var age = $("input[name='Age']").val();
	var tempAdd = $("input[name='TemporaryAddress']").val();
	var permAdd = $("input[name='PermanentAddress']").val();
	var text = document.getElementById("tempAdd").value;
	if (el.prop("checked")) {
		if (text != "") { //  if (text != "" || text != undefined)
			// document.getElementById("permAdd").value = text;
			$("#permAdd").val(text);
			$("#permAdd").prop("disabled",true);

			if (name != "" && age  != "" && tempAdd != "" && permAdd != "") {
				$("#submit").prop("disabled",false);
				// document.getElementById("submit").disabled = false;
			}
			else {
				$("#submit").prop("disabled",true);
			}

		}
	}
	else {
			$("#permAdd").prop("disabled",false);
	}
}