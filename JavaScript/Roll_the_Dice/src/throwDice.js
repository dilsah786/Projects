const memberA = () => {

let randomval=Math.floor(Math.random()*6);
var memberA = document.getElementById("member-a");
memberA.textContent = randomval;
console.log(randomval);


return randomval;
};


const memberB = () => {
  let randomval=Math.round(Math.random()*6);
  let memberB = document.getElementById("member-b");
   memberB.textContent = randomval;
   console.log(randomval)
   return randomval;

};



  const memberC = () => {
    let randomval=Math.round(Math.random()*6);
    let memberC = document.getElementById("member-c");
     memberC.textContent = randomval;
     memberC.style.backgroundColor="red";
     console.log(randomval)
     return randomval;
  
};


const findWinner = (val1, val2, val3) => {
  let memberA = document.getElementById("member-a");
  let memberB = document.getElementById("member-b");
  let memberC = document.getElementById("member-c");
  let winner = document.getElementById("winner");

  var arr =[val1,val2,val3];

  arr =arr.sort((a,b) => b-a);

  if(val1==arr[0]){
    winner.textContent="The winner : Member A"
    memberA.style.backgroundColor="green";
    if(val2>val3){
      memberB.style.backgroundColor="yellow";
      memberC.style.backgroundColor="red";
    } else{
      memberB.style.backgroundColor="red";
      memberC.style.backgroundColor="yellow";
    }
  }
  
  
  if(val2==arr[0]){
    winner.textContent="The winner : Member B"
    memberB.style.backgroundColor="green";
    if(val1>val3){
      memberA.style.backgroundColor="yellow";
      memberC.style.backgroundColor="red";
    } else{
      memberA.style.backgroundColor="red";
      memberC.style.backgroundColor="yellow";
    }
  }
  
  
  if(val3==arr[0]){
    winner.textContent="The winner : Member C"
    memberC.style.backgroundColor="green";
    if(val1>val2){
      memberA.style.backgroundColor="yellow";
      memberB.style.backgroundColor="red";
    } else{
      memberB.style.backgroundColor="yellow";
      memberA.style.backgroundColor="red";
    }
  }
  
  if(val1==val2 && val2==val3){
    winner.textContent="It's a draw!"
    memberA.style.backgroundColor="blue";
    memberB.style.backgroundColor="blue";
    memberC.style.backgroundColor="blue";
  }
  
  if(val1==val2 &&val2!==val3){
    memberA.style.backgroundColor="blue";
    memberB.style.backgroundColor="blue";
    if(val3==arr[0]){
      winner.textContent="The winner : Member C"
      memberC.style.backgroundColor="green"
    } else{
      winner.textContent="It's a draw!"
      memberC.style.backgroundColor="red";
    }
    if(val1>val3){
      memberC.style.backgroundColor="red";
    }else{
      memberC.style.backgroundColor="green"
    }
  }


  if(val1==val3 &&val3!=val2){
    memberA.style.backgroundColor="blue";
    memberC.style.backgroundColor="blue";

    if(val2==arr[0]){
      winner.textContent="The winner : Member B"
      memberB.style.backgroundColor="green"
    } else{
      winner.textContent="It's a draw!"
      memberB.style.backgroundColor="red";
    }

    if(val1>val2){
      memberB.style.backgroundColor="red";
    }else{
      winner.textContent="The winner : Membe B"
      memberB.style.backgroundColor="green"
    }
  }
  
  if(val2==val3 && val2!=val1){
    memberB.style.backgroundColor="blue";
    memberC.style.backgroundColor="blue";
    if(val1==arr[0]){
      winner.textContent="The winner : Member A";
      memberA.style.backgroundColor="green";
    } else{
      winner.textContent="It's a draw!"
    }

    if(val2>val1){
      memberA.style.backgroundColor="red";
    }
    else{
      winner.textContent="The winner : Member A"
      memberA.style.backgroundColor="green"
    }
  }


}

window.onload = function () {

  var rollTheDice = document.getElementById("roll");
  rollTheDice.addEventListener("click",() => {
   findWinner(memberA(),memberB(),memberC());
  })
  //  get the button here and add click event
};

// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    memberA,
    memberB,
    memberC,
    findWinner,
  };
}
