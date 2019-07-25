var query="";
var searchcat="";
var searchsubcat="";

$('.search-btn').click(function(e){
    e.preventDefault();
    
    //alert("clicked");
    query = $(".query").val();
    console.log(query);

    if(query == null || query== undefined)
    {
        window.location.href='index.html';
    }
    
    else{


        getData(query);
        //window.location.href='searchResult.html';
       

    }
 });

 function getData(query)
 {
     debugger;
     console.log($("#sel-category").val());
     console.log($("#sel-sub-category").val())
    if(query==""){
        if($("#sel-category").val() == undefined || $("#sel-sub-category").val() == undefined || $("#sel-category").val() == "Select one" || $("#sel-sub-category").val() == "Select one" ){
            
            var queryURL1 = "https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";
        }
        else
        {
           
            console.log($("#sel-category").find(":selected").attr("data-id"));
            console.log($("#sel-sub-category").find(":selected").attr("data-id"));
            searchcat = $("#sel-category").find(":selected").attr("data-id");
            searchsubcat = $("#sel-sub-category").find(":selected").attr("data-id");
            
             //https://www.eventbriteapi.com/v3/events/search/?q=event&location.address=Toronto&location.within=10km&categories=101&subcategories=1010&price=free&token=VNY6JP3JJDWS6LAXZSVY   
            //var queryURL1 = `https://www.eventbriteapi.com/v3/events/search/?categories=${searchcat}?subcategories=?${searchsubcat}location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY`;
            //var queryURL1 = `https://www.eventbriteapi.com/v3/events/search/?subcategories=${searchsubcat}?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY`;
            var queryURL1 = `https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&subcategories=${searchsubcat}&price=free&token=VNY6JP3JJDWS6LAXZSVY`;

            //Code to display search page
           
        }
    } 
    else{
        
        if($("#sel-category").val() == undefined || $("#sel-sub-category").val() == undefined || $("#sel-category").val() == "Select one" || $("#sel-sub-category").val() == "Select one" )
          {
            //$('#aioConceptName').find(":selected") 
            var queryURL1 = "https://www.eventbriteapi.com/v3/events/search/?q="+query+"&price=free&token=VNY6JP3JJDWS6LAXZSVY";
    
           
            }
            else
            {
               debugger;
                console.log($("#sel-category").find(":selected").attr("data-id"));3
                console.log($("#sel-sub-category").find(":selected").attr("data-id"));
                searchcat = $("#sel-category").find(":selected").attr("data-id");
            searchsubcat = $("#sel-sub-category").find(":selected").attr("data-id");
         //   https://www.eventbriteapi.com/v3/events/search/?location.address=Toronto&location.within=10km&subcategories=1010&price=free&token=VNY6JP3JJDWS6LAXZSVY
          //  https://www.eventbriteapi.com/v3/events/search/?q=event&location.address=Toronto&location.within=10km&subcategories=1010&price=free&token=VNY6JP3JJDWS6LAXZSVY
                //var queryURL1 = "https://www.eventbriteapi.com/v3/events/search/?q="+query+"&price=free&token=VNY6JP3JJDWS6LAXZSVY";
               // var queryURL1 = `https://www.eventbriteapi.com/v3/events/search/?q=${query}?categories=${searchcat}?subcategories=${searchsubcat}?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY`;
                var queryURL1 = `https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.address=toronto&location.within=10km&subcategories=${searchsubcat}&price=free&token=VNY6JP3JJDWS6LAXZSVY`;
            }
    }
     
    var settings1 = {
      "async": true,
      "crossDomain": true,
      "url": queryURL1,
      "method": "GET",
    // //   "headers": {
    // //     "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
    // //     "Content-Type": "application/json",
    //   },
    };
  
      $.ajax(settings1).done(function(data1) {
          console.log(data1);
           console.log(data1.events[0].id);
           console.log(data1.events[0].name.text);
           console.log(data1.events[0].url);
           console.log(data1.events[0].logo.url);
        //   console.log(data1.categories[0].name);
  
        let events = data1.events;
        
        

        
        });

 }