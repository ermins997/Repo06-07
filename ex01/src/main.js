
//    var img = document.getElementById('img1');



//  function enlargeImg(id) {
//      debugger;
   
//     var img = document.getElementById(id);
//      img.style.width = "800px";
//      img.style.height = "600px";
//      img.style.transform = 'scale(2.5)';
//      img.style.transition = "transform 0.25s ease";

 
// }

 var imgs = document.querySelectorAll('img');

 for(let i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener('click', function(){
     imgs[i].style.transition = "transform 0.25s ease";
     if(imgs[i].style.width === '800px' && imgs[i].style.height === '600px') {
      imgs[i].style.width = '340px';
       imgs[i].style.height = '200px';
     } else {
       imgs[i].style.width = '800px';
        imgs[i].style.height = '600px';
     }
   })
 } 
