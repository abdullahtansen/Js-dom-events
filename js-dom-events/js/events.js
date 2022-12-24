// option 1 directly set on the html element

// option 2: add onclick function on the html element
// Important we will use this

{/* <button onclick="makeRed()">Make Red</button> */}
function makeRed(){
    document.body.style.backgroundColor='red';
}
// option 3
const greenBtn = document.getElementById('make-green');
greenBtn.onclick = makeGreen;
function makeGreen(){
 document.body.style.backgroundColor = 'green'
}
// option 3 another [we will use this some time]
const purpleBtn = document.getElementById('makePurple');
      purpleBtn.onclick = function makePurple(){
        document.body.style.background = 'purple';
      };

// option 4: 
const pinkButton = document.getElementById('make-pink');
      pinkButton.addEventListener('click', makePink)
      function makePink(){
        document.body.style.background = 'pink';
      }

    //   another
    const makeBlue = document.getElementById('make-blue');
    makeBlue.addEventListener('click', function makeBlue(){
      document.body.style.background = 'blue';
    })

    // final used
    document.getElementById('make-golden').addEventListener('click', function(){
        document.body.style.background ='goldenrod';
     })