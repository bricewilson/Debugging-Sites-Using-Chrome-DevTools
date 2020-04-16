function saveFavorite(favorite) {
  localStorage.setItem('favoritePie', favorite);
}

function getFavoritePie() {

  let favorite = 'No favorite specified.';

  if(window.localStorage)
  {
      let storage = window.localStorage;
      if(storage.getItem('favoritePie'))
      {
          favorite = storage.getItem('favoritePie');
      }
  }

  return favorite;
}