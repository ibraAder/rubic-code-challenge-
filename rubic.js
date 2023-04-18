document.addEventListener("DOMContentLoaded",() => {
  
    const form=document.getElementById("votes-form");
    const votecount=document.getElementById("vote-count");
    let currentVotes=0;
  
  document.addEventListener("submit", (event) => {
    event.preventDefault();  
   
     let votes=parseInt(document.getElementById("votes").value);
     if(isNaN(votes)){
     votes=0;
  }
  currentVotes += votes;
  votecount.innerHTML=currentVotes;
  form.reset();
  });
  const resetbtn=document.getElementById("reset-btn");
  resetbtn.addEventListener("click", ()=>{
    currentVotes=0;
    votecount.innerHTML=currentVotes;
  });
  });
  
  