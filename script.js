let i;
function multipleOf3(){
for(i=1;i<=30;i++){
    if(i%3==0){
        console.log("Fizz");
    } else{
        console.log(i);
    }
}
}
function arrayNumber(){
    let numberList=[1,2,3,4,5,6,7,8,9,10];
    console.log(`Initial array is ${numberList}`);
    for(let i=0;i<numberList.length;i++){
        numberList[i]=numberList[i]*5;
    }
    console.log(`New array is ${numberList}`);
}
function arrayString(){
    let wordsArray=["cat","window","bottle","car","javaScript"];
    for(let i=0;i<wordsArray.length;i++){
        if(wordsArray[i].length>4){
        console.log(`Long Word Alert! ${wordsArray[i]}`);
    } else {
        console.log(wordsArray[i]);
    }
}
}

function paragraphDisplay(){
    
    for(let i=1;i<=5;i++){
        let paragraph=document.getElementById(`paragraph${i}`);
        console.log(`ID of my paragraph is ${i}`);
        paragraph.textContent=`ID of my paragraph is ${i}`;
    }
    
}
function oddNumber(){
    for(let i=1;i<=20;i++){
        if(i%2!==0){
            console.log(i);
        }
        
        
    }
}