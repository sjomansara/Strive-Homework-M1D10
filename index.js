//JS EXERCISES

      //  21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

      let x = "John"
      let y = "Doe"
      
      console.log(x + " <> " + y)

      //  22) Create an object with properties such name, surname, email

     const person = {
         name: "Sara",
         surname: "Sjöman",
         email: "sara.sjoman@hotmail.com"
     }

     console.log(person)

      //  23) Delete Email from the previously created object

     delete person.email

     console.log(person)

      //  24) Create an array with 10 strings in it

     const myArray = ["Kittens", "Puppies", "Ducks", "Chickens", "Frogs", "Cows", "Bunnies", "Horses", "Pigs", "Elephants"]

      //  25) Print in the console every string in the previous array

     console.log(myArray)

      //  26) Create an array with 100 random numbers in it

      let randomNumbers = function() {
        return Math.floor(Math.random() * 100)
       }
      let random = Array(100).fill(0).map(randomNumbers)

      console.log(random)

      //  27) Wrote a function to get the MAX and the MIN from the previously created array

      function minAndMax() {
        let maxValue = Math.max(...random)
        let minValue = Math.min(...random)

        return [minValue, maxValue]
      }

      console.log(minAndMax())

      //  28) Create an array of arrays, in which every array has 10 random numbers

      let emptyArray = []
      for (let i = 0; i < 10; i++) {
        let newEmptyArray = []
        for (let j = 0; j < 10; j++) {
            newEmptyArray.push(Math.random() * 10)
        }
        emptyArray.push(newEmptyArray)
      }

      console.log(emptyArray)

      //  29) Create a function that gets 2 arrays and returns the longest one

      let returnLongest = function (array1, array2) {
        if (array1.length > array1.length) {
            return array1 
        } else {
          return array2
        }
       }

      console.log(returnLongest([1, 2, 3, 4], [2, 3, 4, 5 ,6, 7]))

      //  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

      let returnHigherSum = function (firstArray, secondArray) {
          let firstArraySum = 0
          for (let i = 0; i < firstArray.length; i++) {
              firstArraySum += firstArray[i]
          }
          let secondArraySum = 0
          for (let j = 0; j < secondArray.length; j++) {
              secondArraySum += secondArray[j]
          }
          if (firstArraySum > secondArraySum) {
              return firstArray
          } else {
              return secondArray
          }
      }

      console.log(returnHigherSum([1, 2, 3, 4], [2, 3, 4, 5]))