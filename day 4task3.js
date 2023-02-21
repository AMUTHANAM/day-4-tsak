//1. Write a loop that makes seven calls to console.log to 
//output the following triangle:

   var tri = ''
   for(var i=1;i<=7;i++){
   for(var j=1;j<=i;j++){

    tri+='*'
   // console.log(i)

    }
   tri+='\n'

    }
    console.log(tri)




//2. Iterate through the string array and print it contents

      var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

      for(i=0;i<strArray.length;i++)
      {
       // console.log(strArray[i])
      }

      

// 3. write a code to count the elements in the array . Don’t use length property

//Declare an empty array;

      var myarray=[11,22,33,44,55]

      myarray.forEach((element,i)=>{

        //console.log(element,i)
      })

      for (key in myarray){
       // console.log(key)
      }


// 4 Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

        let foods=['chicken','mutton','chicken rice','rotti','panner masal','chicken65','butter chicken','mutton curry'
                    ,'iddly','thosai','sampar','curdrice','sambarrice','lemonrice','termarin rice','puttu','onion thosai',
                    'butter dosai','podi dosai','special dosai' ]

                    console.log(foods.length)
                    console.log(foods[14])

// 5 Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

                let friends = ["mari","mary jane","captionAmerica","munnabai","jeff"," AAK chandran"]

                       // let change = (friends[0].mari.Munnapai)
                       // console.log(friends[0])
// 6. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica. 
            
            let friends1 = ["mari","mary jane","captionAmerica","munnabai","jeff"," AAK chandran"]

            for(i=0;i<friends1.length-4;i++)
            {
               // console.log(friends1[i])
 
            }
            console.log(friends1[i])


// 7.Find the average in the array below.
            //Make sure you add only the numbers and do avg.

      const friendinfo = [6, 12, 'mari', 1, true, 'Munnabai', '200','captionamerica', 8, 10];

                console.log(friendinfo.length)

                 var val = friendinfo[0]  
                 
                 var val1 = friendinfo[1]  
                 var val2 =  (friendinfo[3])  
                 var val3 = friendinfo[6]  
                 var val4 = friendinfo[8]  
                 var val5 = friendinfo[9]  
                 let ans = (parseInt(val3)+val1+val2+val4+val5+val)

                    console.log(ans/6)