const videosData = [
    {
        title: "Mr Bean",
        description: "Food SHOPPING With Bean! | Mr Bean Cartoon Season 1",
        category: "cartoon",
        url: "https://www.youtube.com/embed/RyP5iLAaAac"
      },
      {
        title: "KFC Style Popcorn Chicken",
        description: "Homemade KFC Style Popcorn Chicken | Juicy Popcorn chicken",
        category: "food",
        url: "https://www.youtube.com/embed/gqOTOLldgs4" 
      },
      {
        title: " Snacks Recipe",
        description: "6 Mouthwatering Snacks Recipe",
        category: "cartoon",
        url:"https://www.youtube.com/embed/njAWJHGqsPs"
      },
      {
        title: " Money Heist ",
        description: "Money Heist - Part 2 | Official Trailer | Netflix",
        category: "series",
        url:"https://www.youtube.com/embed/ZAXA1DV4dtI" 
      },
      {
        title: " Karikku ",
        description: "HAPPY BIRTHDAY | Karikku | Comedy",
        category: "comedy",
        url:"https://www.youtube.com/embed/5Yp-WZqJNx8"  
      },
      {
        title: " TEDx Talks",
        description: "A well educated mind vs a well formed mind: Dr. Shashi Tharoor at TEDxGateway 2013",
        category: "Motivational speech",
        url:"https://www.youtube.com/embed/kcW4ABcY3zI" 
      },
      {
        title: " MS Dhoni ",
        description: "MS Dhoni BEST FINISH IN ODI HISTORY",
        category: "Sports",
        url:"https://www.youtube.com/embed/kYeJk38rZ3o"
      },
      {
        title: " Arijit Singh ",
        description: "Arijit Singh MTV India Tour 2018 | Magical Voice | (1080p HD)",
        category: "Music",
        url:"https://www.youtube.com/embed/46TyJXgt7AM" 
      },
      {
        title: "Best Home Decor Ideas  ",
        description: "Amazing Table Lamb | Cement Pot Light | Night Lamb Ideas | Cement Hand Light | Best Home Decor Ideas",
        category: "Crafts",
        url:"https://www.youtube.com/embed/S3wdHPuJxNs" 
      },
      {
        title: "Minions ",
        description: "Minions Mini Movie 2019 - Despicable Me Animations Funny Clips",
        category: "Cartoon",
        url:"https://www.youtube.com/embed/sL3kLxsy-Lg" 
      },
      {
        title: "Cricket ",
        description: "Pandya's power seals series win for India with epic chase | Dettol T20I Series 2020",
        category: "Sports",
        url:"https://www.youtube.com/embed/dMGRTR97Ito" 
      },
      {
        title: "Apple",
        description: "Introducing AirPods Max — Apple",
        category: "Tech",
        url:"https://www.youtube.com/embed/FXI_-OesT3A"
      },
      {
        title: "OnePlus",
        description: "OnePlus 8T - Designed to Perform",
        category: "Tech",
        url:"https://www.youtube.com/embed/YcA9GtqKAok" 
      },
      {
        title: "Mercedes-Benz",
        description: " Mercedes-Benz Classic – Dream Cars",
        category: "Cars",
        url:"https://www.youtube.com/embed/Jxm206I9Z6s"
      },
      {
        title: "Tom & Jerry",
        description: " Tom & Jerry | Best of Little Quacker | Classic Cartoon Compilation | WB Kids",
        category: "Cartoon",
        url:"https://www.youtube.com/embed/AGBjI0x9VbM" 
      },
      {
        title: " Karikku ",
        description: "PK | Comedy | Karikku",
        category: "comedy",
        url:"https://www.youtube.com/embed/HOwa8uJZibw" 
      },
      {
        title: " Karikku ",
        description: "Muthoot Fincorp Scoot | Ep01 | Kaalil Chuttiya Valli | Karikku Fliq | Mini Webseries",
        category: "comedy",
        url:"https://www.youtube.com/embed/yK_FlXruc-U" 
      },
      {
        title: " Khoya Kulfi Recipe",
        description: "Street Style Khoya Kulfi Recipe By Food Fusion",
        category: "food",
        url: "https://www.youtube.com/embed/hWIdzUO7WFM" 
      },
      {
        title: " Karikku ",
        description: "Eastern Rock Paper Scissors | S01 Ep1 | Masala Tea | Karikku Fliq | Mini Webseries",
        category: "comedy",
        url:"https://www.youtube.com/embed/_0_7E9w09zE"
      },
      {
        title: "Pinkvilla  ",
        description: "Dulquer Salmaan: What's on my phone | Bollywood | Pinkvilla | Karwaan",
        category: "Entertainment",
        url:"https://www.youtube.com/embed/a4o7OL5lmtM" 
      }
  ];
  

  
 
  
  function videoTemplate(video) {
    return `
      <div class="videoPlayer">
      <a href="${video.url} "target="_blank" ><iframe  class="videoLink" src="${video.url}" ></iframe
      <h2 class="video-name">${video.title} <span class="category">(${video.category})</span></h2>
    <h3 class="description">${video.description}</h3>

  </a>
  <i class="fa fa-thumbs-up" onclick="like()" style="font-size:24px;color:red"></i>&nbsp;&nbsp;
  <i class="fa fa-share-alt" onclick="share()" style="font-size:24px;color:red"></i>&nbsp;&nbsp;
  <i class="fa fa-thumbs-down" onclick="dislike()" style="font-size:24px;color:red"></i>
      </div>
    `;
  }
 like=()=>{
  swal("Good job!", "You Liked the video!", "success");
}
 share=()=>{
  swal("Are you sure you want to share this video?", {
    buttons: ["No", "Yes!"],
  });
}
 dislike=()=>{
  swal("Oh no!", "You Disliked the video!", "warning");
}
  
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Videos (${videosData.length} results)</h1>
    ${videosData.map(videoTemplate).join("")}
    <p class="footer">These ${videosData.length} videos were added recently. Check back soon for updates.</p>
  `;
  