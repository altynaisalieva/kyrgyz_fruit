const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
  counter.innerText= '0';

  const updateCounter = () =>{
    const target = +counter.getAttribute('data-target');
    const coun = +counter.innerText;

    const increment = target/200;

    if(coun<target){
      counter.innerText=`${Math.ceil(coun+increment)}`;
      setTimeout(updateCounter,1);}
    else{
      counter.innerText =target;
    }
      
  }
  updateCounter();

});