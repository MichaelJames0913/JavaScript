           /////////////////////////////////////// lab 1 ///////////////////////////////////////
           function confirmlink(linkname) {
               if (confirm("Are you sure you want to jump to " + linkname + "?"))
                   location = linkname
           }

           /////////////////////////////////////// lab 2 ///////////////////////////////////////

           var myname = "Michael Schmidt";
           var classdescription = "JavaScript";
           var thedate = "8-27-17";
           var customertype = "direct";

           function WebPageInformation() {
               alert("name: " + myname + " class: " + classdescription + " date: " + thedate)
           }

           /////////////////////////////////////// lab 3 ///////////////////////////////////////
           // declare this variable outside of your functions
           currentspecial = 1 // selects which item that is "on special"

           function displayspecial() {

               console.log("currentspecial changed: " + currentspecial)

               if (currentspecial == 1) {
                   alert("The current special is #1")
               }
               if (currentspecial == 2) {
                   alert("The current special is #2")
               }
               if (currentspecial == 3) {
                   alert("The current special is #3")
               }
               currentspecial = currentspecial + 1
               if (currentspecial > 3) {
                   currentspecial = 1
               }
           }

           /////////////////////////////////////// lab 4 ///////////////////////////////////////
           function changetype() {
               //console.log("Change Customer Type") testing 
               var newtype;

               if (customertype == "direct") {
                   newtype = "advertising"
               }
               if (customertype == "advertising") {
                   newtype = "subscription"
               }
               if (customertype == "subscription") {
                   newtype = "direct"
               }
               customertype = newtype;
           }

           function displaytype() {

               if (customertype == "direct") {
                   alert("Buy Now! From this web page! My children need new shoes!")
               }
               if (customertype == "advertising") {
                   alert("Support our advertisers! Click on an ad, so I can make money!")
               }
               if (customertype == "subscription") {
                   alert("Renew your subscription today! My children need medicine!")
               }

           }

           ///////////////////////////////////////  lab 5 ///////////////////////////////////////
           function productPage(data1, data2, data3, data4, data5) { // productPage 
               //document.getElementById("main");
               document.body.style.backgroundColor = "lightblue";
               document.getElementById("main").innerHTML = buildProduct(data1, data2, data3, data4, data5);
               //document.getElementById('main').innerHTML = buildProduct(data1,data2,data3,data4); 
           }

           function mainPage() { // go back to the main page 
               //document.getElementById('productPage').innerHTML = location.reload();
               //document.getElementById("productPage");
               document.getElementById("main").innerHTML = location.reload();
           }

           function buildProduct(data1, data2, data3, data4, data5) {
               var data // data holds the String
               // this is where I had a bug, use'='first then use'+='when creating the html string                 
               data = makeHeader(); // you get Undefined at top of page, you have to set data equal to somthing first 
               data += product(data1, data2, data3, data4, data5); // this code thats in product could be done here. 
               data += makeFooter()
               data += "<div style='text-align:center'><a href='Javascript:mainPage()'>link back to main</a></div>";
               return (data); // return the String 
           }

           function buildProduct2(data1, data2, data3, data4, data5) {
               var data // data holds the String
               // this is where I had a bug, use'='first then use'+='when creating the html string                 
               data = makeHeader(); // you get Undefined at top of page, you have to set data equal to somthing first 
               data += product(data1, data2, data3, data4, data5); // this code thats in product could be done here. 
               data += makeFooter()
               return (data); // return the String 
           }

           function makeHeader() {
               var data = "<TABLE style='width:100%'><TR style='background-color:lightyellow'><TD >"
               data += "<H1 style='text-align:center'> Product Description Page</H1>"
               data += "</TD></TR></TABLE>"
               return (data)
           }

           function product(data1, data2, data3, data4, data5) {
               var data = "<TABLE style='width:100%'><TR style='background-color:lightyellow'><TD >"
               data += "<TABLE style='width:100%' border=1 cellpadding=10><TR><TD rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>"
               data += "<IFRAME src="
               data += "'" + data4 + "'"
               data += "height='220' width='220' id='productarea' name='productarea' frameborder='0' marginheight='0'>Warning your Browser does not support IFRAMES</IFRAME></TD>"
               data += "<TD><B>product</B>: " + data1 + " " + "</TD><TD style='text-align:left'<B>productNumber</B>" + ":  " + data2 + "</TD></TR><TR>"
               data += "<TD style='text-align:center' colspan=2>"
               //////////////////////////////////////////////////////////////////////////////
               // Shoping Cart Code // 
               //data += "<div>"
               data += this.buildShopingCartButton(data1, data2)
               data += this.buildViewCart()
               // data += "</div>"
               // end of shoping cart code 
               //////////////////////////////////////////////////////////////////////////////
               data += "</TD></TR>"
               data += "<TR>"
               data += "<TD><B>Product Description</B>"
               data += ":  " + data3 + " "
               data += "</TD>"
               data += "<TD><B>Product PRICE:</B>" + " " + data5 + "</TD>"
               data += "</TR></TABLE>"
               return (data)
           }

           function makeFooter() {
               var data = "<TABLE style='width:100%' ><TR style='background-color:lightyellow'><TD>"
               data += "<P style='text-align:center'><B>Copyright 2013 BOB's DVD </B></P>"
               data += "</TD></TR></TABLE>"
               return (data)
           }

           ////////////////////////////////// lab 6 ///////////////////////////////////////
           function doSearch() {

               var searchValue = document.getElementById("mySearch").value;
               var dataString;
               var pageData;

               if (searchValue == "44262") {
                   pageData = buildProduct2('7 movies', '44262', '7 movies, great for building a collection', 'images/44262.jpg', '40');
               } else if (searchValue == "88123") {
                   pageData = buildProduct2('HD DVD Twister', '88123', 'HD DVD Twister, rare collecters item HD DVD', 'images/88123.jpg', '100');
               } else if (searchValue == "24000") {
                   pageData = buildProduct2('DVD LOT', '24000', '100 random DVD $200', 'images/24000.png', '200');
               } else if(searchValue == "44263"){
                   pageData = buildProduct2('CD LOT', '44263', 'over 100 random CD $300', 'images/44263.jpg', '300'); 
               } else if (searchValue == "44264") {
                    pageData = buildProduct2('Death metal', '44264', '24 hard core CDs', 'images/88124.jpg', '40'  )
               } else {
                   pageData = searchValue + " " + "search not found";
               }
               document.getElementById('iframe').srcdoc = '<html><meta http-equiv="Content-type" content="text/html;charset=UTF-8"><body>' + pageData + '</body></html>';
           }

           ////////////////////////////////// lab 7 ///////////////////////////////////////      
           var ad_Num1 = 1;
           var ad_Num2 = 1;

           function switchImage(imageNum) {

               if (imageNum == 0 && ad_Num1 == 1) {
                   ad_Num1 = 2;
                   document.getElementById("image1").src = "images/44262.jpg";
                   document.getElementById("image2").src = "images/DVD_week.png";
               } else if (imageNum == 0 && ad_Num1 == 2) {
                   ad_Num1 = 1;
                   document.getElementById("image1").src = "images/88123.jpg";
                   document.getElementById("image2").src = "images/DVD_DAY.png";
               }
           }

           function productPage2() { // productPage 
               document.getElementById("main");
               document.body.style.backgroundColor = "lightblue";

               var data1;
               var data2;
               var data3;
               var data4 = document.getElementById("image1").src;
               var data5

               if (ad_Num1 == 2) {
                   data1 = "7 movies";
                   data2 = "44262";
                   data3 = "7 movies, great for building a collection";
                   data5 = '40'
               } else if (ad_Num1 == 1) {
                   data1 = "HD DVD Twister";
                   data2 = "88123";
                   data3 = "HD DVD Twister, rare collecters item HD DVD $100";
                   data5 = '100'
               }
               document.getElementById("main").innerHTML = buildProduct(data1, data2, data3, data4, data5);
               //document.getElementById('main').innerHTML = buildProduct(data1,data2,data3,data4); 
           }

           ////////////////////////////////// lab 8 /////////////////////////////////////// 
           function getData() {

               return navigator.userAgent
           }

           function makeColorTableTag() {

               var theString = navigator.userAgent

               console.log(theString);


               if (theString.indexOf('Media') >= 0) {
                   return "<TABLE style='width:100%;background-color:lightblue' >"; // Output style sheet that works for Netscape/Mozilla/Firefox
               } else if (theString.indexOf('Firefox') >= 0) {
                   return "<TABLE style='width:100%;background-color:lightgreen' >"; // Output style sheet that works for Netscape/Mozilla/Firefox
               } else if (theString.indexOf('Chrome') >= 0) {
                   return "<TABLE style='width:100%;background-color:orange' >";
               }
           }

           function getBrowser() {
               var theString = navigator.userAgent

               if (theString.indexOf('Media') >= 0) {
                   return "Internet Explorer"
               } else if (theString.indexOf('Firefox') >= 0) {
                   return "mozilla firefox"
               } else if (theString.indexOf('Chrome') >= 0)
                   return "Google Chrome"
           }
           /*
            // somthing Wrong with geting the version number not sure how to do this yet?
            // get back to this 
            function getVersion(){ 
              var theString = navigator.userAgent 
                
                var majornumber = 0
                var minornumber = 0 

                if(theString.indexOf('Media') >= 0 ){
            var position  = theString.indexOf(':');
            majornumber = theString.charAt(position + 1);
            minornumber = theString.charAt(position + 2);

              } else if ( theString.indexOf('Firefox') >= 0) {
              
          } else if (theString.indexOf('Chrome') >=0) 

          return (majornumber + minornumber);     
            }
            */
           ////////////////////////////////// lab 9 /////////////////////////////////////// 
           function getDate() {
               var d = new Date();
               return d
           }

           function buildShopingCartButton(ProductName, productNum) {
               // Shoping Cart Code // 
               var data = ""
               data += "<form name='_xclick' target='paypal' action='https://www.paypal.com' method='post'>"
               data += "<input type='hidden' name='cmd' value='_cart'>"
               data += "<input type='hidden' name='business' value='nora-alice@paypal.com'>"
               // here we need to Dynamically get the product details 
               data += "<input type='hidden' name='item_name' value=" + ProductName + ">"
               data += "<input type='hidden' name='amount' value='24.99'>"
               data += "<input type='hidden' name='item_number' value=" + productNum + ">"
               data += "<input type='image' src='http://www.paypal.com/en_US/i/btn/sc-but-01.gif' border='0' name='submit' alt='Make payments with PayPal - it's fast, free and secure!'>"
               data += "<input type='hidden' name='add' value='1'>"
               data += "</form>"
               // end of shoping cart code               
               return (data)
           }

           function buildViewCart() {
               var data = "<form name='_xclick' target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post' method='post'>"
               data += "<input type='hidden' name='cmd' value='_cart'>"
               data += "<input type='hidden' name='business' value='nora-alice@paypal.com'>"
               data += "<input type='image' src='https://www.paypal.com/en_US/i/btn/view_cart.gif' border='0' name='submit'alt='Make payments with PayPal - it's fast, free and secure!''>"
               data += "<input type='hidden' name='display' value='1'>"
               data += "</form>"
               return data
           }

           ////////////////////////////////// lab 10 - 11 //////////////////////////////////////

           function buildBlackJackPage() {
               var currentGAMEspecial = Math.floor(Math.random() * (5 - 1 + 1) + 1); // here is where we get the number to display the ad 
               document.body.style.backgroundColor = "lightgreen";
               document.getElementById("main").innerHTML = buildBlackTable() + gameAD(currentGAMEspecial)
           }

           function buildBlackTable() {
               var data = " ";
               data += "<table border=0 style='margin:auto'><tr>";
               data += "<td><form><input type='BUTTON' onClick='Javascript:dealCards(2)' value='Deal > > >'></form></td>";
               data += this.showCards(7)
               data += "<td><form><input type='BUTTON' onClick='Javascript:hitCard()' value='< < < Hit Me'></form></td>";
               data += "</tr></table>";
               data += "<div><center><h1 id='gameMessage'>Black Jack!</h1></center></div>"
               return (data);
           }

           function showCards(imagenum) {
               var data = ""
               count = 0
               while (count < imagenum) {
                   data += "<td><img src='http://www.college1.com/images/cards/gbCard52.gif' NAME='card" + count + "'></td>"
                   count = count + 1
               }
               return data
           }

           function gameAD(AD_NUM) {
               //console.log(AD_NUM) // testing 
               var data = " "

               if (AD_NUM == 1) {
                   data = buildProduct('7 movies', '44262', '7 movies, great for building a collection', 'images/44262.jpg', '40')
               }
               if (AD_NUM == 2) {
                   data = buildProduct('HD DVD Twister', '88123', 'HD DVD Twister, rare collecters item HD DVD', 'images/88123.jpg', '100')
               }
               if (AD_NUM == 3) {
                   data = buildProduct('DVD LOT', '24000', '100 random DVD $200', 'images/24000.png', '200')
               }
               if (AD_NUM == 4) { 
                   data = buildProduct('Death metal', '44264', '24 hard core CDs', 'images/88124.jpg', '40' )
               }
               if (AD_NUM == 5){
                   data = buildProduct('CD LOT', '44263', 'over 100 random CD $300', 'images/44263.jpg', '300')
               }
               return data
           }
           ////////////////////////////////// lab 11 ///////////////////////////////////////

           var hand // array holds the cards in players hands 
           var cardsinhand = 0 // number of cards in hand 
           var bust = false // value to tell if the player bust  
           //var hasACE = 0

           function dealCards(numcards) {

               if (hand != null) { // there must be cards in hand to clear and deal new cards 
                   this.clearHand()
               }

               bust = false // rest this value   
               hand = new Array(numcards) // array holds the cards in players hands
               var lastCard = 0 // what was the last card drawn 

               for (i = 0; i < numcards; i++) {

                   img = new Image() // image object 

                   do {
                       card = Math.floor(Math.random() * 1000 % 52)
                   } while (lastCard > 0 && card == lastCard)

                   lastCard = card
                   img.src = "http://www.college1.com/images/cards/gbCard" + card + ".gif"
                   hand[i] = card

                   document.images[i].src = img.src

                   cardsinhand = 2 // set the number of cards that are in the hand 
               }
               message() // display the message 
           }

           function clearHand() {
               for (i = 0; i < hand.length; i++) {
                   document.images[i].src = "http://www.college1.com/images/cards/gbCard52.gif"
               }
           }

           function hitCard() {
               if (bust == false) { // if the player busts, the player souldent be able to hit no more 

                   do {
                       var inDeck = false
                       card = Math.floor(Math.random() * 1000 % 52) // pick a card 
                       for (i = 0; i < hand.length; i++) { // loop the deck 
                           if (card == hand[i]) { // to see if the card is already in the hand 
                               inDeck = true // yes the card is in the deck loop again and pick another card
                           }
                       }
                   } while (inDeck == true) // loop while the card picked is in the hand 

                   cardsinhand = cardsinhand + 1 // add one to the number of cards in hand 
                   img.src = "http://www.college1.com/images/cards/gbCard" + card + ".gif"
                   hand[cardsinhand - 1] = card // put the card number in the hand array 
                   document.images[cardsinhand - 1].src = img.src

                   if (getHandValue() > 21) { // did we bust ? 
                       /*
                       if (hasACE == 1 && (getHandValue() - 10) > 21) {
                           bust = true
                       } else {
                           bust = true
                       }
                       */
                       bust = true
                   }
               } // end of if statement 
               message() // display the message 
           }

           function message() {

               if (cardsinhand == 2) {
                   var element = document.getElementById("gameMessage")
                   element.innerHTML = "Deal ! are you going to hit? " + getHandValue()
               }
               if (cardsinhand > 2) {
                   /*
                     if (getHandValue() > 21 && hasACE != 1) {

                         var element = document.getElementById("gameMessage")
                         element.innerHTML = "BUST !" + getHandValue()

                     } else if (hasACE == 1 && (getHandValue() - 10) < 21) {

                         console.log("right where We need to be: " + getHandValue() - 10)

                         var element = document.getElementById("gameMessage")
                         element.innerHTML = "HIT ! " + (getHandValue() - 10)
                     } else {
                         var element = document.getElementById("gameMessage")
                         element.innerHTML = "Hit !" + getHandValue()
                     }
                     */
                   if (getHandValue() > 21) {
                       var element = document.getElementById("gameMessage")
                       element.innerHTML = "BUST !" + getHandValue()
                   } else {
                       var element = document.getElementById("gameMessage")
                       element.innerHTML = "Hit !" + getHandValue()
                   }
               }
           }

           function getHandValue() {

               var currentValue = 0
               for (i = 0; i < hand.length; i++) {
                   var cardNum = hand[i]
                   currentValue = currentValue + getCardValue(cardNum)
               }
               return currentValue
           }

           function getCardValue(cardNum) {

               var value
               cardNum %= 13;

               if (cardNum == 0) {
                   value = 11; // ace
                   //hasACE = hasACE + 1
                   //console.log(hasACE + "inside getCardValue");
               } else if (cardNum == 10 || cardNum == 11 || cardNum == 12)
                   value = 10;
               else
                   value = cardNum + 1;

               return value
           }

           ////////////////////////////////// lab 13 ///////////////////////////////////////

           var new_win = null
           var lastAd = 1
           function popupAd() {

              do{

                var adNumber = Math.floor(Math.random() * (5 - 1) + 1)

              }while(adNumber == lastAd) 

              lastAd = adNumber 


               console.log(adNumber)

               var ad1 = "<TABLE WIDTH=640 HEIGHT=150 BGCOLOR=lightgreen><TR><TD><h1 ALIGN=CENTER>Bob's DVD's ! 1000's of DVD and CD's</H1></TD></TR></TABLE>"
               var ad2 =  popAd("Twister", "HD DVD Twister, rare collecters item ", "images/88123.jpg", "yellow")
               var ad3 =  popAd('DVD LOT','100 random DVD $200', 'images/24000.png', "orange")
               var ad4 =  popAd('Death metal', '24 hard core CDs', 'images/88124.jpg', "blue" )

               new_win = open("", "dynamicHTML", "width=650,height=200")
               // here we display the the right ad 
               if (adNumber == 1) {
                   new_win.document.writeln(ad1)
               }
               if (adNumber == 2) {
                   new_win.document.writeln(ad2)
               }
               if (adNumber == 3) {
                   new_win.document.writeln(ad3)
               }
               if(adNumber == 4){
                  new_win.document.writeln(ad4)
               }
               // other Window things 
               new_win.document.close()
               new_win.focus()

           }

           function popAd(input1, input2, input3, input4){ 
            var data 

            data = "<TABLE WIDTH=640 HEIGHT=150 BGCOLOR="+input4+">"
            data += "<TR>"
            data += "<TD><h1>"+ input1 +"</h1></TD>"
            data += "<TD><h2>"+ input2 + "</h2></TD>"
            data += "<TD><IFRAME src="
            data += "'" + input3 + "'"
            data += "width='100%'' height='60%'' id='productarea' name='productarea' frameborder='0' marginheight='0'>Warning your Browser does not support IFRAMES</IFRAME></TD>"
            data += "</TR></TABLE>"

            return data 

           }

            ////////////////////////////////// lab 14 ///////////////////////////////////////
            
            function showForm(){

              document.body.style.backgroundColor = "lightblue"
              document.getElementById("main").innerHTML = TheFORM()
           }

           function buildTHEForm(){
            var data =  ""
              data += "<IFRAME src='' width='200' height='150' ID='test_iframe3' NAME='test_iframe3' frameborder='1' >Warning your Browser does not support IFRAMES</IFRAME>"

              return data 
           }

           function TheFORM(){
            data = "<h1>Welcome to site, make an Account</h1>"
            data += " <FORM onSubmit='return checkForm()' NAME='customerform'  ACTION='http://www.college1.com/classes/javascript/survey.php' METHOD='POST' style='background-color:lightyellow' >"
            data += "<TABLE WIDTH=100% BORDER=1>"
            data += "<TR><TD>First Name: <INPUT TYPE='TEXT' NAME='firstname'></TD>"
            data += "<TD ALIGN=RIGHT> Last Name: <INPUT TYPE='TEXT' NAME='lastname'></TD></TR>"
            data += "<TR><TD COLSPAN=2>Address: <INPUT TYPE='TEXT' NAME='address' size =50></TD></TR>"
            data += "<TR><TD>City: <INPUT TYPE='TEXT' NAME='city'></TD>"
            data += "<TD ALIGN=RIGHT>State: <INPUT TYPE='TEXT' NAME='state' size=3> Zip: <INPUT TYPE='TEXT' NAME='zip' size=6></TD>"
            data += "<TR><TD COLSPAN=2>Email Address: <INPUT TYPE='TEXT' NAME='emailaddr' size=50></TD></TR>"
            data += "<TR><TD>Credit Card Info: "
            data += "<SELECT NAME='cardtype'>"
            data += "<OPTION>Card Type<OPTION>MasterCard<OPTION>Visa<OPTION>Discover</SELECT>"
            data += "<SELECT NAME='month'>"
            data += "<OPTION>Month<OPTION>Jan<OPTION>Feb<OPTION>Mar<OPTION>Apr<OPTION>May<OPTION>Jun<OPTION>Jul<OPTION>Aug<OPTION>Sep<OPTION>Oct<OPTION>Nov<OPTION>Dec</SELECT>"
            data += " <SELECT NAME='year'>"
            data += "<OPTION>Year<OPTION>2014<OPTION>2015<OPTION>2016<OPTION>2017<OPTION>2018</SELECT>"
            data += "</TD>"
            data += "<TD ALIGN=RIGHT>Card Number: <INPUT TYPE='TEXT' NAME='ccnumber'></TD>"
            data += "</TR>"
            data += "<TR><TD><INPUT TYPE='submit' value='Submit'></TD>"
            data += "<TD ALIGN=RIGHT><INPUT TYPE='reset'></TD></TR>"
            data += "</TABLE></FORM>"
            data += "<div style='text-align:center'><a href='Javascript:mainPage()'>link back to main</a></div>"; 
           
            return data 
           }

////////////////////////////////// lab 14 / 15 ///////////////////////////////////////
        
        function checkForm(){
      
          var data1 = true
          var data2 = true
          var data3 = true
          var data4 = true
          var data5 = true
          var data6 = true
          var data7 = true
          var data8 = true
          var data9 = true
          var data10 = true
          var data11 = true
                                      
          // firstname
          if (document.customerform.firstname.value.length <= 0) {
              data1 = false
          }
          // lastname
          if (document.customerform.lastname.value.length <= 0) {
              data2 = false
          }
          // address
          if (document.customerform.address.value.length <= 0) {
              data3 = false
          }
          // orderform
          if (document.customerform.city.value.length <= 0) {
              data4 = false
          }
          // state
          if (document.customerform.state.value.length <= 0) {
              data5 = false
          }
          // zip
          if (document.customerform.zip.value.length <= 0) {
              data6 = false
          }
          // Email Check // I know it's not another function, could not get the call from this point to work ?? needs work 
          var email = document.customerform.emailaddr.value   // this code works 
          var message = ""
          if (email.length == 0 ) { // if nothing in box 
              data7 = false
              message = " No Email"
          }else if (email.length > 0){
              atoffset = email.indexOf('@',0)         //   where is the @ sign in the address
      
              if (atoffset == -1 )     // check #2, no @ sign in the address
              {
                  message +=  "\n" + "' does not contain an '@'n"
              }
              if (atoffset == 0 || atoffset == (email.length-1))     // Check #3 @ at beginning or end
              {
                  message += "\n" + "' must not start or end with a '@'n" + "\n"
              }
              if (email.indexOf('.',atoffset) == -1 ) // check #4 no '.' (period or dot) in the address after @
              {
                  message += "\n" + "' does not have a '.'(dot) after the '@'n"
              }
              if (email.indexOf('.',atoffset) == (email.length-1) ) // check #5 do not end with '.' period
              {
                  message += "\n" + "' should not end with a '.' (period)n" 
              }
              if (message.length != 0)   // when length is zero, no problem found
              {
                  data7 = false
              } 
          }
            
          if (document.customerform.cardtype.value == "Card Type") { 
          // if the user has not selected a card type
              data8 = false
          }
          if (document.customerform.month.value == "Month") {
              data9 = false
          }
          if (document.customerform.year.value == "Year") {
             data10 = false
          }
          var card = document.customerform.ccnumber.value
          if (card.length < 16 || card.length > 16 ) {
             data11 = false
          }
         
          // are we good ?? 
          if((data1 && data2 && data3 && data4 && data5 && data6 && data7 && data8 && data9 && data10 && data11) === false){
              
            var badData = "BAD DATA" + "\n"
      
            if(data1 === false){
              badData += "Need firstname" + "\n"
            }
            if(data2 === false){
              badData += "Need lastname" + "\n" 
            }
            if(data3 === false){
              badData += "Need address" + "\n"
            }
            if(data4 === false){
              badData += "Need city" + "\n"
            }
            if(data5 === false){
              badData += "Need state " + "\n" 
            }
            if(data6 === false){
              badData += "Need zip " + "\n" 
            }
            if(data7 === false){
              badData += "Need email" + message + "\n"
            }
            if(data8 === false){
              badData += "Need cardtype" + "\n"
            }         
            if(data9 === false){
              badData += "Need month" + "\n"
            }
            if(data10 === false){
              badData += "Need year" + "\n"
            }
            if(data11 === false){
              badData += "Need 16 digits for  card number" + "\n"
            }  
              alert(badData)
              return false  // no 
          }else{
              alert("data GOOD thank you for your input") // yes 
            }
        } // end of check function  
  