const weekdays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];

export const module = async () =>
     {

                  const apiUrl = `https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json`;
      
                  try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    console.log(data)
                    menu(data)
                  }
          
              catch(error){
              console.log("Ups- der skete en fejl");
              }

    function menu(data) {
let mondaydish = `${data.Days[0].Dish}`;
let tuesdaydish = `${data.Days[1].Dish}`;
let wednesdaydish = `${data.Days[2].Dish}`;
let thursdaydish = `${data.Days[3].Dish}`;
let fridaydish = `${data.Days[4].Dish}`;
let monday = document.querySelector(".desc1");

const dishes = [mondaydish, tuesdaydish, wednesdaydish, thursdaydish, fridaydish
]

const weekdaysArray = Array.from(document.querySelectorAll(".desc"));
console.log(weekdaysArray)

let text = dishes;
for (let i = 0; i < dishes.length; i++) {
  if(i === 0){
   monday += weekdaysArray[i] + "<br>"; 
  }
}

document.querySelectorAll(".desc").innerHTML = text;

// weekdaysArray.forEach(meal => {
//  meal.innerHTML = dishes;
// });


    }

  }


 
    
              


          

               
