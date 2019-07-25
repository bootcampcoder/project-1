var trendingEvents;


function loadHomeEvents(){

// var queryURL = "https://www.eventbriteapi.com/v3/events/search?location.longitude="+longitutde+"&location.latitude="+latitude+"&price=free";
var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Toronto&location.within=20km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";
var settings1 = {
  "async": true,
  "crossDomain": true,
  "url": queryURL,
  "method": "GET",
  // headers: {
  //    "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
  //    "Content-Type": "application/json",
  //  },
};

  $.ajax(settings1).done(function(data) {
      console.log(data);
     //  console.log(data.categories[0].id);
    //   console.log(data1.categories[0].name);

       console.log(data.events[0].url);
                   // data.events[i].logo.original.url

    for(var i=0;i<4;i++)
    { debugger;
       var desc = data.events[i].description.text;
       desc = desc.substring(0,50);
       console.log(desc);
       var title =data.events[i].name.text;
       title=title.substring(0,15);
       console.log(title);

      $("#events-4").append(`<div class="col s12 m7" id="Result${i}">
      <a  id="result${i}-link" href=${data.events[i].url} rel="noopener noreferrer">
      <div id="result${i}-card" class="card">
        <div class="card-image">
          <img height="150px" src=${ data.events[i].logo.original.url}>
          
        </div>
        <div class="card-content">
        <span class="card-title">${title}</span>
          <p> ${desc}</p>
        </div>
        <div class="card-action">
          <a href=${data.events[i].url}>Find Tickets Here</a>
        </div>
      </div>
    </a>
    </div>`);

    }

    


    
  });
 
}

function loadHomeCategories()
{
  
    var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
    var settings1 = {
      "async": true,
      "crossDomain": true,
      "url": queryURL1,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
        "Content-Type": "application/json",
      },
    };
  
      $.ajax(settings1).done(function(data1) {
          console.log(data1);
           console.log(data1.categories[0].id);
        //   console.log(data1.categories[0].name);
  
        let categories = data1.categories;
            cat = categories;
        
        
            // for(var i=0; i<=categories.length;i++)
            // {
            //     debugger;
    //         $("#categories-list").append(`<div class="col s3 m7" id="Result${i}">
    //   <a  id="result${i}-link" href=${data1.url} rel="noopener noreferrer">
    //   <div id="result${i}-card" class="card">
    //     <div class="card-image">
    //       <img height="150px" src=${ data1.events[i].logo.original.url}>
          
    //     </div>
    //     <div class="card-content">
    //     <span class="card-title">${title}</span>
    //       <p> ${desc}</p>
    //     </div>
    //     <div class="card-action">
    //       <a href=${data1.events[i].url}>Find Tickets Here</a>
    //     </div>
    //   </div>
    // </a>
    // </div>`);
  
   //    }
  
      });
    
  }
   // var selCategory ="";
loadHomeEvents();
loadHomeCategories();
