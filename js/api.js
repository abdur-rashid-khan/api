const clickedBtn =document.getElementById('load-data');
clickedBtn.addEventListener('click',()=>{
   fetch('https://restcountries.com/v3.1/all')
   .then(getData=>getData.json())
   .then(data=>displayData(data));
   clickedBtn.innerText='Loading...';
   clickedBtn.setAttribute('disabled',true);
});


// display data show 
const displayData=(data)=>{
   const append = document.getElementById('show-data');
   let i=0;
   for(const allCountry of data){
      // creat a new tr tag 
      const tr=document.createElement('tr');
      tr.classList.add('table-info')
      append.appendChild(tr)
      i=i+1;
      // show id 
      const idTh = document.createElement('th');
      idTh.innerText=`${i}`;
      tr.appendChild(idTh);
      // show all contry name
      let getName=allCountry.name.common;
      const nameTh=document.createElement('th');
      nameTh.innerText=`${getName}`;
      nameTh.classList.add('text-start');
      nameTh.classList.add('pl-5');
      nameTh.classList.add('ml-5');
      tr.appendChild(nameTh);
      // show region 
      let showReg =allCountry.region; 
      const regTh=document.createElement('th');
      regTh.innerText=`${showReg}`;
      regTh.classList.add('px-5');
      regTh.classList.add('mx-5');
      tr.appendChild(regTh);
      // show political type in total desh around the world
      let official =allCountry.name.official;
      const poliTh=document.createElement('th');
      poliTh.innerText=`${official}`;
      poliTh.classList.add('text-start');
      poliTh.classList.add('pl-5');
      poliTh.classList.add('ml-5');
      tr.appendChild(poliTh);
      clickedBtn.style.display='none';
   }
}