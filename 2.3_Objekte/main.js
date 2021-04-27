let me = {
    name: "Timon",
    surname: "Hueppi",
    age: 18,
    country: "Switzerland",
    profession: "Computer Scientist",
    professionGrade: "Apprentice",
    languages: [
        "German",
        "English",
        "French"
    ]
};

//keys
console.log(Object.keys(me));

//values
console.log(Object.values(me));

//extraction
let myProfession = {
    profession: me.profession,
    professionGrade: me.professionGrade
};
console.log(myProfession);

//add value
myProfession.civilStatus = "single";
console.log(myProfession);