let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#d7d7d7 ${scrollValue}%, #000 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// let calcScrollValue = () => {
//     let scrollProgress = document.getElementById("porgress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     // console.log(pos);
//     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     // console.log(calcHeight);
//     let scrollValue = Math.round((pos * 100) / calcHeight);
//     // console.log(scrollValue);
//     if (pos > 100) {
//         scrollProgress.style.display = "grid";
//     }
//     else {
//         scrollProgress.style.display = "none";
//     }
//     scrollProgress.addEventListener("click", () => {
//         document.documentElement.scrollTop = 0;
//     });
//     scrollProgress.style.background = `conic-gradient(#ffc107ad ${scrollValue}%, #000 ${scrollValue}%)`;
// };

// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;


//--------------------------------------------------------------------------

/*Question Box JS */
var faq = document.getElementsByClassName("faq-box-question");
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");

    //answer

    var body=this.nextElementSibling;
    if(body.style.maxHeight === "100px"){
      body.style.maxHeight="0px";
    }
    else{
      body.style.maxHeight="100px";
    }
  });

}