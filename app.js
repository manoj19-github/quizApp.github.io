
class startQuiz{
  constructor(){
    this.name="";
    this.category="";
    this.difficulty="";
  }
  validateFormData(){
    if(this.name!=="" || this.category!=="" || this.difficulty!==""){
      return true;
    }
    return false;
  }
  getFormData(){
    this.name=document.querySelector("input[name='name']").value;
    this.category=document.querySelector("select[name='category']").value;
    this.difficulty=document.querySelector("select[name='name']").value ;
    return this;
  }
  goToQuiz(){
    if(this.validateFormData()){

      window.location.href=`index2.html?name=${this.name}&category=${this.category}&difficulty=${this.difficulty}`;
    }

  }
}


const startQuizBtn=document.querySelector(".btn-quiz");
const closeQuizBtn=document.querySelector(".close");
const quizStartForm=document.querySelector(".form");
startQuizBtn.addEventListener("click",()=>{
  quizStartForm.classList.toggle("hide");
});
closeQuizBtn.addEventListener("click",()=>{
  quizStartForm.classList.toggle("hide");
});
const showError=(curr)=>{
  if(curr.value.trim()===""){
    curr.parentElement.lastElementChild.classList.add("show_error");
  }else{

    curr.parentElement.lastElementChild.className="error_message";
  }
}
let myquiz=new startQuiz();
const startquiz=()=>{
  console.log("start quix");

  myquiz.getFormData();
  setTimeout(()=>{
    if(myquiz.validateFormData()){
      myquiz.goToQuiz();
    }

  },2400);
}
