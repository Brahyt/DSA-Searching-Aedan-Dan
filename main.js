const {binarySearch, numArray, BST} = require('./search');
const BinarySearchTree = require('./binary-test');
const Hash = require('./Hash')
const Queue = require('./queue')

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

// 1. How many Searches?
const howManyArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
function howMany(array, searchNum){
  console.log("Results: ", binarySearch(array, searchNum))
}


// 2. Adding a React UI
// -refer to the react folder

// 3. Find a Book
// # Hash Method
// - Create a hash
// - for each entry in library
// - hash.set(dewey, bookData)
// - hash.get(dewey)
//
// # linear
// - create for loop to loop through the library
// - look for a dewey number
// - if found dewey number check to see if title matches
// - if match return book object
// - if no title matchs or no dewey, then book isnt found

function whereDewey(array, key){
  const libraryMap = new Hash();
  array.forEach(x => {
    libraryMap.set(x.dewey, x)
  })
  return libraryMap.get(key)
}
// - Another function to search a book out.
function findTheBook(array, dewey, title){
  for (let i = 0; i < array.length; i++){
    if (dewey === array[i].dewey) {
      if (title === array[i].title) return `
      Found Book:
        Title: ${array[i].title}
        Author: ${array[i].author}
        Dewey: ${array[i].dewey}`
    }
  }
  return 'Book Not found'
}

// 4. Searching in a BST
// pre     :  (parent, left, right)
// in-order:  (left, parent, right)
// post    :  (left, right, parent)
// 4.1 in-order : 14 15 19 25 27 35 79 89 90 91
//     pre-order: 35 25 15 14 19 27 89 79 91 90
//     post     : 14 19 15 27 25 79 90 91 89 35
//
// 4.2 post :  5  7  6  9 11 10  8
//     pre  :  8  6  5  7 10  9 11

//5. Implement diffrent tree traversals
function traverse(){
  const arr1 = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
  const tra = new BinarySearchTree()
  arr1.forEach(x => {
    tra.insert(x)
  })  
  tra.preOrder()
  tra.inOrder()
  tra.postOrder()
}

//6. Find next Commanding Officer
// output => Picard, Riker, Data, Worf, Laforge
//           Crusher, LSO, Selar
//
function commandOfficer(){
  const ship = new BinarySearchTree()
  const reserves = new Queue()
  ship.insert(10, "Captian Picard");
  ship.insert(6, "Commander Riker");
  ship.insert(15, "Commander Data");
  ship.insert(4, "Worf");
  ship.insert(5, "LaForge");
  ship.insert(20, "Crusher")
  ship.insert(2, "LSO")
  ship.insert(18, "Selar")
  console.log(ship.bfs(ship))
}
//7. Max profit
function maxProfit(){
  const arr1 = [128, 97, 121, 98, 97, 105]
  let maxPrice = 0;
  let day = 1;
  for (let i = 0; i < arr1.length; i++) {
    let diffrence = arr1[i] - arr1[i - 1];
    if (diffrence > maxPrice){
      maxPrice = diffrence;
      day = i + 1;
    }
  }
  console.log(`buy:${day - 1} sell: ${day}`)
}

//8. I would drop the egg every 10 floors then when it breaks start at 9 floors below that floor till it breaks.

function main () {
  //  howMany(howManyArray, 8)
  //  howMany(howManyArray, 16)
  //  console.log(whereDewey(library, '005.133'))
  //  console.log(findTheBook(library, '005.133', "The REXX Language"))
  //  console.log(findTheBook(library, '005.133', 'The'))
  //  traverse()
  //maxProfit()
  commandOfficer()
}


main()
