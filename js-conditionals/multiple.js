const salary = 25001;
const isBCS = true;
const height = 78;
const hasCar = false;
height = 71;

// if(salary > 20000 && height > 66){
//     console.log('Su--------patro');
// }
// else{
//     console.log('onno patro khuji');  
// }

if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
}
else{
    console.log('vagg tui mokbul');
}


// -------- COMPLEX CONDITION---------
if((salary > 25000 && hasCar == true) || isBCS == true){
    console.log('tomar 14 gosti raji')
}
if((salary > 25000 || hasCar == true) && isBCS == true){
    console.log('tomar 14 gosti raji')
}
