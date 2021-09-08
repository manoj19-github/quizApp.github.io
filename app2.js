  ////////////////////////   target the dom node  //////////////////////////////////////////
  let currindex=0;
  const questionIndexBox=document.querySelector("div.question-index-sidebar");
  const totalQuestionNumber=document.querySelector("span.question-number-total");
  const curentQuestionNumber=document.querySelector("p.question-num");
  const timerText=document.querySelector("span.timer-text");
  const questionText=document.querySelector("h2.question-text");
  const answerBar=document.querySelector("div.answer-bar");
  const skipButton=document.querySelector("button.skip-button");
  const nextButton=document.querySelector("button.next-button");
  const grandContainer=document.querySelector("div.grand-container");
  const answeredCount=document.querySelector("span.question-number-answered");
  const skippedCount=document.querySelector("span.question-number-skipped");
  let answerscript=[];



  ////   get the data from url   //////////////////

  const userdata=location.href.split("=");
  const _apiHost=`https://quizapi.io/api/v1/questions`;
  const realdata=userdata.map(data=>data.split("&"));
  const[[],[name],[category],[hard]]=realdata;
  const myparams={name,category,hard,limit:20};
  ///////////////////////////////////////////////////////



  const currDate=new Date();
  let currMinutes=currDate.getMinutes();
  currMinutes+=5;
  const countDownTime=new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate(),currDate.getHours(),currMinutes,currDate.getSeconds());







  /////////////////////    code for data
  class fetchData{
    constructor(params,method="GET"){
      this.params=params
      this.method=method;
      this.url="";
    }
    objectToQueryString(obj){

      return Object.keys(obj).map(key=>`${key}=${obj[key]}`).join("&");
    }
    async request(){
      const options={
        method:this.method,
        headers:{
          'Content-Type':'application/json'
        }
      };

      if(this.params){
        const  myapi= {apiKey:"CVMVzXpW1pbdogN3TnZCLlpu91JAB8JiMp9HvPR4"};
        if(this.method==="GET"){

          this.url+='?'+this.objectToQueryString({...myapi,...this.params});
        }else{
          options.body=JSON.stringify(this.params);
        }
      }
      console.log(_apiHost+this.url);
      const response =await fetch(_apiHost+this.url,options);
      const result=await response.json();
      return result;

    }
  }

  let mydata=new fetchData(myparams);

  const getdata=(data,questionshow,currindex=0,first=null)=>{


    const alldata=data;

    ///////////////////////////////    get correct answers  //////////////////////////////
    rightAnswerData=alldata.map(data=>{
      const {answers,correct_answers}=data;
      let correct_ans;
      for([key,value] of Object.entries(correct_answers)){
        if(value==="true")
          correct_ans=key;
      }

      /////////////////////////////////   get all answers   ///////////////////////////////////////
      const adata=[];
      for([key,value] of Object.entries(answers)){
        if(value!=null)
          adata.push({[key]:value,isanswered:false});
      }
        return {
          id:data.id,
          question:data.question,
          correct_answer:correct_ans,
          answers:adata,
        }
      });


      rightAnswerData.map((mydata,index)=>{
        if(index==currindex || currindex==mydata.id)
          questionText.innerText=mydata.question

      });
      console.log("rightAnswerData",rightAnswerData);
      console.log(currindex);
      questionshow(rightAnswerData,currindex,first);               /////////////   call questionshow
  }
  const questionshow=(data,currindex=0,first)=>{




    data?.map((mydata,mindex)=>{
      const {answers,id,correct_answer}=mydata;
      //console.log("answers",answers);
      console.log("mydata manoj",mydata);
      if(currindex==mindex|| currindex==mydata.id ){
        questionText.innerText=mydata.question;
        answerBar.innerHTML="";
        console.log("answers",answers);
        answers?.map((ans,index)=>{
          console.log("ans",ans);
          const mydata=Object.entries(ans);


          answerBar.innerHTML+=`<div class="answer-bar-block" data-id='${mydata[0][0]}' data-ans='${mydata[0][1]}' onclick="setAns(${id},'${mydata[0][0]}','${mydata[0][1]}',${mindex},${index},${currindex},'${correct_answer}')"> ${mydata[0][1]}</div>`;
          curentQuestionNumber.innerText=currindex+1;





        });
      }
      if(first){
          span=document.createElement("SPAN");
          span.innerText=mindex+1;
          span.setAttribute("onclick",`mydata.request().then(data=>getdata(data,questionshow,${mindex}))`);

          questionIndexBox.appendChild(span);
          console.log(currindex);
          questionIndexBox.children[0].classList.add("active");



        }
      });


      }
  (function(){
        mydata.request().then(data=>getdata(data,questionshow,0,true));
        //questionIndexBox.children[0].style.background="skyblue";

      let  startTimer=setInterval(()=>{
         const currDate=new Date();
         const distance=countDownTime.getTime()-currDate.getTime();
         if(distance){
           const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
           const seconds=Math.floor((distance%(1000*60))/1000);

           timerText.innerText=`00:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`;

         }else{
           clearInterval(startTimer);
         }

         if(distance<0){
           timerText.setAttribute("class","timer-text alertText");
           timerText.innerText=`Times up !`;
           submitquiz();
           setTimeout(()=>{
             location.assign("index.html");
           },10000);
         }else{
           if(timerText.getAttribute("class")==='timer-text alertText')
             timerText.setAttribute("class","timer-text");
         }


       },1000);

    }()
  );

  nextButton.addEventListener("click",()=>{
    console.log(currindex);
    for(let i=0;i<questionIndexBox.children.length;i++){
        if(questionIndexBox.children[i].classList.contains("active")){
          questionIndexBox.children[i].classList.remove("active");
        }
    }





    questionIndexBox.children[currindex+1].classList.add("active");
    const skippedcounttext=()=>{
      let count=1;
        for(let i=0;i< questionIndexBox.children.length;i++){
          if( questionIndexBox.children[i].classList.contains("skipped") && !questionIndexBox.children[i].classList.contains("complete skipped")){
            count++;
        }
      }


      skippedCount.innerText=Math.abs(count-answerscript.length);
    }
    skippedcounttext();

    questionIndexBox.children[currindex].classList.add("skipped");


    if(currindex>=20) currindex=0;
    if(currindex<0) currindex=19;
    mydata.request().then(data=>getdata(data,questionshow,currindex));
    currindex++;



  });
function setAns(qid,id,data,index,cindex,currindex,correct_answer){
    answerscript.push({questionId:qid,answerId:id,answerdata:data,isanswered:true,ansindex:index,cindex:cindex,currentindex:currindex,correct_answer:correct_answer});
    let answerblock= document.querySelectorAll("div.answer-bar-block");
    let questionblock= document.querySelectorAll("div.question-index-sidebar span");

    for(let i=0;i<answerblock.length;i++){
      if(answerblock[i].classList.contains("active")){
        answerblock[i].classList.remove("active");
      }
    }
    answerblock[cindex].classList.add("active");
    questionblock[index].classList.add("complete");

    answeredCount.innerText=answerscript.length;






    console.log("myans2",answerscript);
    console.log(currindex);


}

function submitquiz(){
  let points=0;
  let skipped=parseInt(skippedCount.innerText);
  answerscript?.map(({answerId,correct_answer})=>{
    if(`${answerId}_correct`==correct_answer){
      points++;

    }



  });
  swal({ title: "Congrats",
  text: `Your Scored is : ${points}   out of 20 `,
  icon: "success",
  button: "Ok",})
  .then(() => {
    location.assign("index.html");
});
}
