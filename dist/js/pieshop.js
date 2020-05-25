window.onload=function(){loadAllPies();setSeasonalLink();setFavorite();// loadNutritionInfo();
};function setSeasonalLink(){let seasonalElement=document.getElementById("seasonal");let fresh=isFreshPieSeason();if(fresh){seasonalElement.innerText="Fresh Seasonal Pies"}else{seasonalElement.innerText="Frozen Pies"}}function isFreshPieSeason(){let currentMonth=new Date().getMonth();if(currentMonth>=9||currentMonth<=3){return true;// October-April
}else{return false;// May-September
}}function setFavorite(newFavorite){if(newFavorite){saveFavorite(newFavorite)}else{newFavorite=getFavoritePie()}let favoriteElement=document.getElementById("favorite");favoriteElement.innerText=newFavorite}function loadAllPies(){let pieTable=document.getElementById("pieTableBody");fetch("/api/pies").then(response=>response.json()).then(data=>{// console.groupCollapsed('pie data');
// console.dir(data);
// console.table(data);
// console.groupEnd();
// console.assert(data.length === 11, {pieCount: data.length, reason: 'Wrong number of pies'});
let string_data=JSON.stringify(data);let pieMarkup="";data.forEach(element=>{pieMarkup+=`
        <tr>
          <td><img src=${element.imageURL} width="100" onclick="setFavorite('${element.name}')"></td>
          <td>${element.name}</td>
          <td>${element.description}</td>
          <td>${element.price}</td>
          <td>View Details</td>
        </tr>
      `});pieTable.innerHTML=pieMarkup;// console.trace();
})}function loadNutritionInfo(){console.info("Attempting to retrieve the nutritional information from the server.");fetch("/api/nutrition").then(response=>response.json()).then(data=>console.log(data)).catch(err=>console.error("There was a problem retrieving the nutritional information."));console.warn("Eating too much pie is not good for you!")}
function saveFavorite(favorite){localStorage.setItem("favoritePie",favorite)}function getFavoritePie(){let favorite="No favorite specified.";if(window.localStorage){let storage=window.localStorage;if(storage.getItem("favoritePie")){favorite=storage.getItem("favoritePie")}}return favorite}

//# sourceMappingURL=pieshop.js.map