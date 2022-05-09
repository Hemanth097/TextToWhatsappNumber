		function GenerateURL() {

			var texturl = encodeURIComponent(document.getElementById("wtext").value);
			var comurl = "https://wa.me/91" + document.getElementById('wno').value + "?text=" + texturl + "";

			document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";
           	//window.open("https://wa.me/91" + document.getElementById("wno").value + "?text=" + texturl + "", "_blank");

        }
           function sendMessage() {

	var texturl = encodeURIComponent(document.getElementById("wtext").value);
	var comurl = "https://wa.me/91" + document.getElementById('wno').value + "?text=" + texturl + "";

	//document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";
        window.open("https://wa.me/91" + document.getElementById("wno").value + "?text=" + texturl + "", "_blank");

        }
