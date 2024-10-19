let na1 = document.getElementsByClassName("na1");

let btn = () => {
   
    for (let i = 0; i < na1.length; i++) {
       
        if (na1[i].style.display === 'block') {
            na1[i].style.display = 'none'; 
        } else {
            na1[i].style.display = 'block';
            
        }
    }
};
