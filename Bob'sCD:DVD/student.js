	var myname = "Michael Schmidt"; 
    var classdescription ="JavaScript"; 
    var thedate = "8-27-17";


	function confirmlink(linkname) {
    	if (confirm("Are you sure you want to jump to " + linkname + "?"))
        	location = linkname
        }
            
    function confirmlink2(linkname) {
        if (alert(myname  + linkname + "?"))
            location = linkname
        }
  