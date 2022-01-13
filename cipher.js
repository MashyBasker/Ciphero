


function rot13() { // LBH QVQ VG!
    var str=document.getElementById('input').value;
    var re = new RegExp("[a-z]", "i");
    var min = 'A'.charCodeAt(0);
    var max = 'Z'.charCodeAt(0);
    var factor = 13;
    var result = "";
    str = str.toUpperCase();
    
    for (var i=0; i<str.length; i++) {
      result += (re.test(str[i]) ?
        String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
    }
    
    return result;
  }
  function caesar(){
    n=10;
    let newalpha='';
    let alphabet=document.getElementById('input').value;
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
    return newalpha;
}
function base64(){
    let decodedString=document.getElementById('input').value;
    let encodedString=btoa(decodedString);
    return encodedString;
}
