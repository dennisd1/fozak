var Crawler = require("crawler");
var fs = require('fs'); //!!! added


var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});

//get monitor

var monitor;
fs.readFile('monitor.txt', function (err, data) {
  if (err) throw err;
  monitor = data;
  console.log(monitor);
});


// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'https://bankrot.fedresurs.ru/TradeList.aspx', 
    jQuery: true,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
		var $ = res.$;
         	$(".bank td:nth-child(3)").each(function (){
		  		console.log("date=", $(this).text());
				hrefdebtor = $(this).nextAll().eq(1).children("a").attr('href');  //reads secon column
				//console.log(hrefdebtor);
				var string = ""+hrefdebtor;  //to convert to date - STRANGE but working
				
                                if( string.indexOf("PrivatePersonCard") !== -1) {
					console.log("THIS IS PRIVATE PERSON");
				}
				else
				{
				var last32 = string.slice(-32);
				console.log("COMPANYID=",last32);
				}
  		});

            //console.log('Grabbed', res.body.length, 'bytes');
             //console.log('Grabbed', res.$("body").text());
            //console.log('Grabbed', res.$(".StaticText").text());
            //fs.appendFileSync('cardcardcard.html', res.$("body").html());
             //bodytext = res.$("body").text();
             //var regex = /\d{13}/g;
             //var substr = bodytext.match(regex);
             //console.log("OGRN=",substr[0]);
        }
        done();
    }
}]);
