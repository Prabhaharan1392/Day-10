function f1(){
    setTimeout(()=>{
        document.write(" 10 ");
    },1000);
    f2();
    function f2(){
        setTimeout(()=>{
            document.write(" 9 ");
        },2000);
                                        
                                        setTimeout(()=>{
                                            document.write(" 8 ");
                                        },3000);
                                        setTimeout(()=>{
                                            document.write(" 7 ");
                                        },4000);
                                        setTimeout(()=>{
                                            document.write(" 6 ");
                                        },5000);
                                        setTimeout(()=>{
                                            document.write(" 5 ");
                                        },6000);
                                        setTimeout(()=>{
                                            document.write(" 4 ");
                                        },7000);
                                        setTimeout(()=>{
                                            document.write(" 3 ");
                                        },8000);
                                        setTimeout(()=>{
                                            document.write(" 2 ");
                                        },9000);
                                        setTimeout(()=>{
                                            document.write(" 1 ");
                                        },10000);
                                        setTimeout(()=>{
                                            document.write("  Happy Independence Day  ");
                                        },11000);
                                    }
}
                                        
  f1(); 

//   function f1(){
//     var first = document.getElementById('first').value
//     console.log(first)

//     var second = document.getElementById('second').value
//     console.log(second)

//     var third = document.getElementById('third').value
//     console.log(third)
    
//     var fourth = document.getElementById('fourth').value
//     console.log(fourth)
    
//     var fifth = document.getElementById('fifth').value
//     console.log(fifth)
    
//     var sixth = document.getElementById('sixth').value
//     console.log(sixth)

//     var seventh = document.getElementById('seventh').value
//     console.log(seventh)

//     var eight = document.getElementById('eight').value
//     console.log(eight)

//     var ninth = document.getElementById('ninth').value
//     console.log(ninth)

//     var tenth = document.getElementById('tenth').value
//     console.log(tenth)

//     var eleven = document.getElementById('eleven').value
//     console.log(eleven)
    
//     var td1 = document.getElementById('10')
//     console.log(td1)
//     td1.innerHTML=first
//     var td2 = document.getElementById('9')
//     console.log(td2) 
//     td2.innerHTML=second
//     var td3 = document.getElementById('8')
//     console.log(td3)
//     td3.innerHTML=third
//     var td4 = document.getElementById('7')
//     console.log(td4)
//     td4.innerHTML=fourth
//     var td5 = document.getElementById('6')
//     console.log(td5)
//     td5.innerHTML=fifth
//     var td6 = document.getElementById('5')
//     console.log(td6)
//     td6.innerHTML=sixth
//     var td7 = document.getElementById('4')
//     console.log(td7)
//     td7.innerHTML=seventh
//     var td8 = document.getElementById('3')
//     console.log(td8)
//     td8.innerHTML=eight
//     var td9 = document.getElementById('2')
//     console.log(td9)
//     td9.innerHTML=ninth
//     var td10 = document.getElementById('1')
//     console.log(td10)
//     td10.innerHTML=tenth
//     var td11 = document.getElementById('Happy Independence Day')
//     console.log(td11)
//     td11.innerHTML=eleven

//   }