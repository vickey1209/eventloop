
// //event loop in detail

// function first ()
// {
//     third ();
  
   
    
//     console.log("hello")
//     second();
// }
// function second ()
// {
//     console.log("2nd")
    
    
// }
// function third ()
// {
//     console.log("th")
//  console.trace()
// }
// first()
// third()


//=====================================================================================================================

// //using lib function
// //add every function under lib function 

// function lib ()
// {
//     function first ()
// {
//     third ();
  
   
    
//     console.log("first")
//     second();
// }
// function second ()
// {
//     console.log("second")
    
    
// }
// function third ()
// {
//     console.log("third")
//    console.trace()
// }
// first()


// }

// =======================================================================================================================
 
 //immediately invoked function

// (function lib ()
// {
//     function first ()
// {
//     third ();
  
   
    
//     console.log("first")
//     second();
// }
// function second ()
// {
//     console.log("second")
    
// }
// function third ()
// {
//     console.log("third")
//    console.trace()
// }
// first()

// })()

//======================================================================================================================

//using timeout in event loop 


// (function lib ()
// {
//     function first ()
// {
//     third ();
    
//     console.log("third")

//     setTimeout(()=>{
//      console.log("timer")
//     })
    
//     console.log("first")
//     second();
// }
// function second ()
// {
//     console.log("second")
    
// }
// function third ()
// {
//     console.log("third")

//    setTimeout(()=>{
//     console.log("timer")
//    })

// }

// first()

// })();

// in output timer will be at last 


//=====================================================================================================================


// (function lib ()
// {
//     function first ()
// {

//     process.nextTick(()=>{
//         console.log('picker')
//     })


    
//     setTimeout(()=>{
//         console.log("timer")
//        })

//        setImmediate(()=>{
//         console.log("immediate")
//      });
    
//     console.log("third")

    
    
//     console.log("first")
//     second();
// }

//     function second ()
// {
//     process.nextTick(()=>{
//         console.log('picker')
//     })

//     console.log("second")
    
//     setTimeout(()=>{
//         console.log("timer")
//        })

//        setImmediate(()=>{
//         console.log("immediate")
//      });

// }
      

//     function third ()

// {

//     console.log("third");

//     process.nextTick(()=>{
//         console.log('picker')
//     })
//        setImmediate(()=>{
//           console.log("immediate")
//        });

//        setTimeout(()=>{
//         console.log("timer")
//        })

//        setTimeout(()=>{
//         console.log("timer")
//        })
    
    
//     console.log("third");

   

// }

// first()

// })();

//========================================================================================================================
// USING read file in lib  


// const fs = require("fs");

// (function lib ()
// {
//     function first ()
// {

//     process.nextTick(()=>{
//         console.log('picker')
//     })


    
//     setTimeout(()=>{
//         console.log("timer1") 
//        })

//        setImmediate(()=>{
//         console.log("immediate")
//      });
    
//     console.log("third")

    
    
//     console.log("first")
//     second();
// }

//     function second ()
// {

//     const timeoutScheduled = Date.now();

//     setTimeout(() => {
//       const delay = Date.now() - timeoutScheduled;
    
//       console.log(`${delay}ms have passed since I was scheduled`);
//     }, 10);
   


//     setTimeout(() => {
//         console.log("timer 5")
//        }, 5);

//     process.nextTick(()=>{
//         console.log('picker')
//     })

//     console.log("second")
    
//     setTimeout(()=>{
//         console.log("timer2")
//        })

//        setImmediate(()=>{
//         console.log("immediate1")
//      });

// }
      

//     function third ()

// {

//     console.log("third");

//     process.nextTick(()=>{
//         console.log('picker')
//     })
//        setImmediate(()=>{
//           console.log("immediate2")
//        });

//        setTimeout(()=>{
//         console.log("timer3")
//        })

//        setTimeout(()=>{
//         console.log("timer2")
//        })

//        setTimeout(() => {
//         console.log("timer 4")
//        }, 100);
    

//        setTimeout(()=>{
//         console.log("timer6")
//        })
    
//     console.log("third");

// }

// // first()
// fs.readFile('./doc.txt', second);
// })();



