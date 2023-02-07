 //Problem Number 1
 function mindGame(number){
      var number =number*3
      var number = number+10;
      var number = number/2;
      var number = number-5;
      return number;
}

var myNumbers = mindGame(5);
console.log(myNumbers);



//Problem number 2
function evenOdd(paraString){
     var  paraStringOfLength = paraString.length;  
     if(paraStringOfLength % 2 == 0){
          return "even"
     }else{
          return "odd"
     }
     
}
var myValue = evenOdd("delwar");
console.log(myValue);



//Problem Number 3

function isLGSeven(number){
     var difference = number - 7
     
     if(difference<=7){
          return difference;
     }else if(difference>7){
          return number*2;
     }else{
          return 'not valid';
     }

}

var result =isLGSeven(15);
console.log(result);

 

 



// Problem number 4
     function findingBadData(arr) {
          if (Array.isArray(arr) === true) {
          let bad = 0;
          for (let index = 0; index < arr.length; index++) {
          if (arr[index] < 0) {
          bad++;
          }
          }
          return bad;
          }
          else {
          return "Your input is not an array, Please input an array."
          }
     }
  
// Problem number 5
    function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem){
          var firstFriend = firstFriendGem * 21;
          var secondFriend = secondFriendGem * 32;
          var thirdFriend = thirdFriendGem * 43;
          var total = firstFriend + secondFriend + thirdFriend;
     
          if(total >= 2000){
               return total - 2000;
          }else{
               return total;
          }
 }

 var result = gemsTODiaMond(25, 26, 27);
 console.log(result);
 
 

 





 
     
 







 
  
  
     

     
     
     

 