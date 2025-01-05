// var housekeeper = {
//     name: "Aniket",
//     age: 22,
//     experience : 4,
//     last_work_place: "jha house",
//     work_types: ["cleaning","Cooking", "House Management", "Baby Seating" ]

// };
function keeper(name, age, experience, last_work_place, work_types){
    this.name=name;
    this.age= age;
    this.experience=experience;
    this.last_work_place=last_work_place;
    this.work_types=work_types;
}
var housekeeper1 = new keeper("sandeep", 35, 12, "yadav house",["cleaning","Cooking", "House Management", "Baby Seating"]);
console.log(housekeeper1.name);
console.log(housekeeper1.work_types);