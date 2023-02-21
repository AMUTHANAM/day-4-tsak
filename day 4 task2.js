
           // Square of a number
//Swapping 2 numbers
//Addition of 3 numbers
//Celsius to Fahrenheit conversion
//Meter to miles
//Pounds to kg
//Calculate Batting Average
//Calculate five test scores and print their average
//Power of any number x ^ y.
//Calculate Simple Interest
//Calculate area of an equilateral triangle
//Area Of Isosceles Triangle
//Volume Of Sphere
//Volume Of Prism
//Find area of a triangle.
//Give the Actual cost and Sold cost, Calculate Discount Of Product
//Given their radius of a circle and find its diameter, circumference and area.
//Given two numbers and perform all arithmetic operations.
//Display the asterisk pattern as shown below(No loop needed):

//Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
//Program To Calculate CGPA



                            // 1 Square of a number

                            
                            for(i=0;i<5;i++)
                            {
                                //console.log(i*i)
                            }


                            //2 Swapping 2 numbers


                            let a =100;
                            let b =200;
                             [a,b] = [b,a] // using arry of destructure method
                          //console.log(`the  a value is${a} and b value is ${b}`)


        //3. Addition of 3 numbers

        let num=0
        for(i=0;i<=3;i++)
        {
            num+=i
        
        }
        //console.log(num)


        // 4.Celsius to Fahrenheit conversion

        var cel = 20
      // console.log((cel*1.8)+32)

     // 5.Meter to miles

    var meter = 10000

     console.log(meter* 0.000621371)


     //6.Pounds to kg
    
     var pound = 25
     console.log(25*0.4535)



       6. //Calculate five test scores and print their average


       let score =[223,400,356,456,467]
            let value=0
            let avg=(score.length)
           
       for(i=0;i<score.length;i++){
        value+=score[i]
           // console.log(value)
       }
      // console.log(value/avg)


      // / 7.Power of any number x
       
      
      console.log(Math.pow(3, 3))


      
      // 8.Calculate Batting Average

      var runs = [63,52,96,102,63]
      var val = 0
      for(i=0;i<runs.length;i++)
      {
        val+=runs[i]
      }
     let sum = val
     console.log(val/5)



       //9. Given two numbers and perform all arithmetic operations.

        

         var num1 = 100
         var num2 = 200
         var result1 = (num1 + num2)
         var result2 =  (num1 - num2)
         var result3 = (num1 * num2)
         var result4 =  (num1 / num2)
         console.log(`the sum of ${num1} and ${num2} is ${result3}`)

            
         // 10 Calculate Simple Interest
      

         var p =1000
            r = 5
            t = 3

            console.log(1000*5*3/100)


         // 11  Calculate area of an equilateral triangle

         var a1 =10
         //console.log(Math.sqrt(3)/4 * Math.pow(a1,2))
         
        
         // 12.Area Of Isosceles Triangle

         var b1= 15
         var hb = 15
         console.log(b1*hb/2)

        // 13.Volume Of Sphere

        var r = 5
        console.log((4/3) * Math.PI * Math.pow(r,3) )

        // 14.Volume Of Prism




       // 16.Find area of a triangle.

       var b2= 12
       var h2=13
       console.log(0.5*12*13)


       // 17.Give the Actual cost and Sold cost, Calculate Discount Of Product

       var Ac = 150
       var Sc  = 140
       let pre=(Ac/100)
       console.log(pre*(Ac-Sc))


      //18. Given their radius of a circle and find its diameter, circumference and area.

      var radius = 10

    //diameter

    console.log(radius*2)

    //circumferences
    console.log(2*Math.PI*radius)

    //area
    console.log(Math.PI * Math.pow(radius,2))

   // 19. Display the asterisk pattern as shown below
     var string= " "
   
    for(i=0;i<5;i++){

    string+="*"
    }
 
   console.log(string)
   console.log(string)
   console.log(string)
   console.log(string)
   console.log(string)


       