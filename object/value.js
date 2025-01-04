const person = {
    name : 'sodoer uddin',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali','pataya'];
console.log(person);

const proName = 'profession';
person[proName] = 'devops';
console.log(person);

