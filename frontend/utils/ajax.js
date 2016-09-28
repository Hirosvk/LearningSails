export const AjaxUtils = {
  fetchAllRestaurants(callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/restaurant/');

    xhr.onreadystatechange = function(){
      if (xhr.status === 200 && xhr.readyState === 4){
        let parsedRes = JSON.parse(xhr.responseText);
        callback(parsedRes);
      }
    };
    xhr.send();
  }
};
