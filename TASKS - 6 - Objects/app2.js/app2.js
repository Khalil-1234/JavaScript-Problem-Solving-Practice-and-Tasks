//Now you need to print the name and topics separately, how would you do that?

let books = [{
    name: "The Lean Startup",
    topics: ["entrepreneurship", "startups"],
},
{
    name: "War and Peace",
    topics: ["peace", "politics"],
}
];
for (i = 0; i < books.length; i++)

{
console.log(books[i].name + " : " + books[i].topics);
}

//. Take the above array of objects and add a book of your choice to it with the same properties.
// books.length = books.length + 1;
// books[books.length - 1] = {
//     name: " The God of Small Thing",
//     topics: ["Heart broken", "Societal taboos"],
//     console.log(books);
// }

