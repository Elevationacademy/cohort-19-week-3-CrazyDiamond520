//exrecise 1 - Callbacks

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }

//   const pushPull = function(pushOrPull) {
//      pushOrPull()
//   }

//   pushPull(push)

  //exrecise 2- Callbacks

//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

//   const getTime = function(alertTime){
//       const time = new Date()
//       alertTime(time);

//   }
  
//   getTime(returnTime)

  //exrecise 3- Callbacks

  
//   const logDataFunc = function(data){
//       console.log(data)
//   }

//   const alertDataFunc = function (data){
//       alert(data)
//   }

//   const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
//   logData = logDataFunc("i like do something else and not party")
//   displayData(alert, logData, "I like to party")

  //exrecise 4 - Arrow Functions

  const getSum = (a,b,c) => a+b+c

  console.log(getSum(1,2,5))

  //exrecise 5- Arrow Functions

  const capitalize = (strName) => strName.charAt(0).toUpperCase() + strName.toLowerCase().slice(1   )

  console.log(capitalize("eZpZlemonSQUIZY"))

  //exrecise 6- Arrow Functions

  const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = (temp) => "its " + determineWeather(temp)

  console.log(commentOnWeather(30))
  console.log(commentOnWeather(22))