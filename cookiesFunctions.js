// http://www.javascripter.net/faq/settinga.htm
//alert("generalFuncion");

function getCookie(NameOfCookie){
    if (document.cookie.length > 0) { 
		var theCookie=" "+document.cookie;
		var begin=theCookie.indexOf(" "+NameOfCookie+"=");
		if (begin==-1) begin=theCookie.indexOf(";"+NameOfCookie+"=");	
		if (begin != -1) {           
		  begin += NameOfCookie.length+1;
		  end = document.cookie.indexOf(";", begin);
		  if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(begin, end));
		} 
	}
  return null;
}

function setCookie(NameOfCookie, value, expiredays) {
  var ExpireDate = new Date ();
  ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));

  var sCookie = NameOfCookie + "=" + escape(value) + 
  ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString()); //+";path=/";
  document.cookie = sCookie;

//  alert("Set: "+sCookie);
//  alert("Today: "+new Date().toGMTString()+" Exp: "+ExpireDate.toGMTString() +" Date(0): "+new Date(0).toGMTString())
}

function delCookie (NameOfCookie) {
  if (getCookie(NameOfCookie)) {
    document.cookie = NameOfCookie + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
