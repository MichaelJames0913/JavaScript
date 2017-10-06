This is not my first javaScript Program, but what is important is about this web page is the 	
organization in the directory. The javaScrip is in separate file and that it is reference 
from index.html. why do this ? A pure JS code in a separate file will be cached, reducing the 
amount of data transfered on each request. this should always be done Unless you have a very 
small, page specific JS code, you shouldn't inline it.