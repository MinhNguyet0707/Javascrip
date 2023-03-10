function changeProducr(type,element){
   let tabs = document.getElementsByClassName('tab-item');
   for(i=0;i<tabs.length;i++){
    tabs[i].getElementsByClassName.background ='#b14c38';

   }
   element.style.background='#ee4d2d2d';
   document.getElementById(type).style.display='block';
 switch(type){
    case'trend':
    
    document.getElementById('new').style.display='none';
    document.getElementById('best-sel').style.display='none';
    break;
    case'new':
    document.getElementById('trend').style.display='none';
    document.getElementById('best-sel').style.display='none';
    break;
    case'best-sel':
    document.getElementById('trend').style.display='none';
    document.getElementById('new').style.display='none';

    break;
 }
}