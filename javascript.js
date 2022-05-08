		function sendMessage() {

			var texturl = encodeURIComponent(document.getElementById("wtext").value);
			document.getElementById("urcode").innerHTML = "url generated is https://wa.me/" + document.getElementById('ccode').value + "" + document.getElementById('wno').value + "?text=" + texturl + "";
           	window.open("https://wa.me/91" + document.getElementById("wno").value + "?text=" + texturl + "", "_blank");

        }