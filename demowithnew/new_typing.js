function Typing(string,type_speed=100,blink_speed=300,backspace_speed=100,mainspanid="typothis",blinkerid="blinker"){
   return function(){
      var sin=string;
      var sout="";

      //also need to check if this element exists as done in line 80, 86 & 114

      var mainspan=document.getElementById(mainspanid);
      var time_order=0;
      var blinkercontrol;
      function startblinker(){
          blinkercontrol=setInterval(function(){
                            let blinker=document.getElementById(blinkerid);

                            //see if the element exists

                            if (blinker){
                              if(blinker.style.visibility==""){
                                      blinker.style.visibility="hidden";
                              }
                             else{
                                      blinker.style.visibility="";
                              }
                            }
                           },blink_speed);
      }
     function stopblinker(){
              clearInterval(blinkercontrol);
              let blinker=document.getElementById(blinkerid);
              blinker.style.visibility="";
     }
     for(let i=0;i<sin.length+1;i++){
           if(sin[i]=="~"){
              let pause_det=calctime(i);
              pause(i,pause_det[1]);
              i=pause_det[0];
           }
           else if(sin[i]=="@"){
              next_line(i);
           }
           else if(sin[i]=="*"){
              let sen_back=wordsreplace(i)
              back_space(i,sen_back[1],backspace_speed);
              i=sen_back[0];
           }
           else if(sin[i]==undefined){
               setTimeout(function(){
               startblinker()},time_order);
           }
           else{
             put(i)
           }
      }
      function calctime(a){
         a++;
         let int=""
         while(sin[a]!="~"){
            int=int+sin[a];
             a++;
           }
         let time=Number(int);
         return [a,time]
      }
      function wordsreplace(a){
            a++;
            let line=""
            while(sin[a]!="*"){
                line=line+sin[a];
                 a++;
             }
            return [a,line]
      }
      function back_space(a,text,speed){
             a=text.length+1;
             let index=text.length-1;
             while(index>=0){
                 time_order=time_order+speed;
                  (function(word){
                          setTimeout(function(){
                                if(word==sout[sout.length-1]){
                                   sout=sout.substring(0, sout.length -1);
                                   if (mainspan) {
                                    mainspan.innerHTML=sout;
                                   }
                                   }
                                else if(sout[sout.length-1]==">") {
                                    sout=sout.substring(0, sout.length -5);
                                    if (mainspan) {
                                     mainspan.innerHTML=sout;
                                    }
                                  }
                                },time_order)
                      })(text[index]);
            index--;
            }
        }
      function next_line(a){
          setTimeout(function(){
             sout=sout+"<br>";
               mainspan.innerHTML=sout;
             },time_order)
      }
      function pause(a,time){
         setTimeout(function(){
                 startblinker();
             },time_order)
         setTimeout(function(){
              stopblinker();
            },time_order+time)
         time_order=time_order+time;
      }
      function put(a){
      time_order=time_order+(type_speed)
      setTimeout(function(){
          sout=sout+sin[a];
          if (mainspan) {
           mainspan.innerHTML=sout;
          }
         },time_order)
        }
}
}

//adding a event listener for when the page is loaded so dont have to include the script files in the html file.

document.addEventListener("DOMContentLoaded", function(event) {
  //targeting th element

  var typoElement = document.getElementById("typothis");

  //check if this exists

  if (typoElement) {
    //setting style to inline for divs ehich have block style so blinker doesnt appear on the next line
    typoElement.style.display = "inline-block";
    // adding the blinker so the user doesnt have to
    typoElement.insertAdjacentHTML('afterend', '<span id="blinker">|</span>');
    var typing=Typing(typoElement.innerHTML)
    typing();
  }
});
