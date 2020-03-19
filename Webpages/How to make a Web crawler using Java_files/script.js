var checker = false,
    images,
    loadedImage = 0,
    frHoldtime = '3,3,3';

var startTime;

var checkRL = function () {
    if (myFT.richloadsLoaded) {
        clearInterval(startTime);
        instantInit();
    }
}

var checkIA = function () {
    if (myFT.instantAdsLoaded && myFT.richloadsLoaded) {
        clearInterval(startTime);
        textConstructor();
    }
}

function ftInit() {
    myFT.on("richload", function (e) {
        startTime = setInterval(checkRL, 500);
    });
}


function instantInit() {
    myFT.on("instantads", function (e) {
        startTime = setInterval(checkIA, 500);
    });
}

function textConstructor() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
      var element = document.querySelector('#endfrHead');
      var theCSSprop = window.getComputedStyle(element, null).getPropertyValue("word-spacing");
      var total = parseInt(theCSSprop) - 1;

      element.style.wordSpacing = total+"px";
    }

    f1HeadTop.style.left = myFT.instantAds.Fr1_HeadlineTop_XY.split(',')[0] + "px";
    f1HeadTop.style.top = myFT.instantAds.Fr1_HeadlineTop_XY.split(',')[1] + "px";
    document.getElementById("f1HeadTop").innerHTML = myFT.instantAds.Fr1_HeadlineTop_txt;
    
    f1Head.style.left = myFT.instantAds.Fr1_Headline_XY.split(',')[0] + "px";
    f1Head.style.top = myFT.instantAds.Fr1_Headline_XY.split(',')[1] + "px";
    f1Head.style.width=(myFT.manifestProperties.width-2*myFT.instantAds.Fr1_Headline_XY.split(',')[0])+"px";
    document.getElementById("f1Head").innerHTML += wrapLines(myFT.instantAds.Fr1_Headline_txt);
    
    f2HeadTop.style.left = myFT.instantAds.Fr2_HeadlineTop_XY.split(',')[0] + "px";
    f2HeadTop.style.top = myFT.instantAds.Fr2_HeadlineTop_XY.split(',')[1] + "px";
    document.getElementById("f2HeadTop").innerHTML = myFT.instantAds.Fr2_HeadlineTop_txt;
    
    f2Head.style.left = myFT.instantAds.Fr2_Headline_XY.split(',')[0] + "px";
    f2Head.style.top = myFT.instantAds.Fr2_Headline_XY.split(',')[1] + "px";
    f2Head.style.width=(myFT.manifestProperties.width-2*myFT.instantAds.Fr1_Headline_XY.split(',')[0])+"px";
    document.getElementById("f2Head").innerHTML += wrapLines(myFT.instantAds.Fr2_Headline_txt);
    
    f3HeadTop.style.left = myFT.instantAds.Fr3_HeadlineTop_XY.split(',')[0] + "px";
    f3HeadTop.style.top = myFT.instantAds.Fr3_HeadlineTop_XY.split(',')[1] + "px";
    document.getElementById("f3HeadTop").innerHTML = myFT.instantAds.Fr3_HeadlineTop_txt;
    
    f3Head.style.left = myFT.instantAds.Fr3_Headline_XY.split(',')[0] + "px";
    f3Head.style.top = myFT.instantAds.Fr3_Headline_XY.split(',')[1] + "px";
    f3Head.style.width=(myFT.manifestProperties.width-2*myFT.instantAds.Fr1_Headline_XY.split(',')[0])+"px";
    document.getElementById("f3Head").innerHTML += wrapLines(myFT.instantAds.Fr3_Headline_txt);
    
    endfrHeadTop.style.left = myFT.instantAds.EndFr_HeadlineTop_XY.split(',')[0] + "px";
    endfrHeadTop.style.top = myFT.instantAds.EndFr_HeadlineTop_XY.split(',')[1] + "px";
    document.getElementById("endfrHeadTop").innerHTML = myFT.instantAds.EndFr_HeadlineTop_txt;
    
    endfrHeadline.style.left = myFT.instantAds.EndFr_Headline_XY.split(',')[0] + "px";
    endfrHeadline.style.top = myFT.instantAds.EndFr_Headline_XY.split(',')[1] + "px";
    document.getElementById("endfrHead").innerHTML = myFT.instantAds.EndFr_Headline_txt;

    if (myFT.instantAds.Fr_Holdtime == "" || myFT.instantAds.Fr_Holdtime == null || myFT.instantAds.Fr_Holdtime == "0,0,0"){

    } else {
        frHoldtime = myFT.instantAds.Fr_Holdtime;
    }

    console.log(frHoldtime);

    exit.addEventListener("click",addclickTag);

    function addclickTag(){
        myFT.clickTag(1, myFT.instantAds.Clicktag_url);
    }

    preload();
}

function preload() {
    images = new Array(
        myFT.instantAds.Fr1_Background_img,
        myFT.instantAds.Fr1_Logo_img,
        myFT.instantAds.Fr2_Background_img,
        myFT.instantAds.Fr2_Logo_img,
        myFT.instantAds.Fr3_Background_img,
        myFT.instantAds.Fr3_Logo_img,
        myFT.instantAds.EndFr_Background_img,
        myFT.instantAds.EndFr_Logo_img,
        myFT.instantAds.Endfr_SlideOut_img,
        myFT.instantAds.Endfr_CTA_img
    );

    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false);
    }
    console.log('Entering preload');
}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
        f1bkgImg.style.background = "url('" + images[0] + "') no-repeat";
        f1bkgImg.style.backgroundSize = "contain";
        f1logoImg.style.background = "url('" + images[1] + "') no-repeat";
        f1logoImg.style.backgroundSize = "contain";
        f2bkgImg.style.background = "url('" + images[2] + "') no-repeat";
        f2bkgImg.style.backgroundSize = "contain";
        f2logoImg.style.background = "url('" + images[3] + "') no-repeat";
        f2logoImg.style.backgroundSize = "contain";
        f3bkgImg.style.background = "url('" + images[4] + "') no-repeat";
        f3bkgImg.style.backgroundSize = "contain";
        f3logoImg.style.background = "url('" + images[5] + "') no-repeat";
        f3logoImg.style.backgroundSize = "contain";
        endfrbkgImg.style.background = "url('" + images[6] + "') no-repeat";
        endfrbkgImg.style.backgroundSize = "contain";
        endfrlogoImg.style.background = "url('" + images[7] + "') no-repeat";
        endfrlogoImg.style.backgroundSize = "contain";
        endfrSlideImg.style.background = "url('" + images[8] + "') no-repeat";
        endfrSlideImg.style.backgroundSize = "contain";
        endfrCtaImg.src = images[9];
        
        setTimeout(init, 1000);
    }
}

function wrapLines(str) {
    var myDiv = document.createElement("div");
    myDiv.innerHTML = "<span>" + str + "</span>";
    myDiv.innerHTML = wordWrap(myDiv);
    var words = myDiv.getElementsByClassName("word");
    for (var i = 0; i < words.length; i++) words[i].innerHTML = "<span class='headlineCont'><div class='move headline" + [i + 1] + " headPos slideDown'>" + words[i].innerHTML + "</div></span>"
    for (var j = 0; j < 5; j++) {
        var sps = myDiv.getElementsByTagName("span"),
            dvs = myDiv.getElementsByTagName("div");
        for (var i = 0; i < dvs.length; i++) {
            p = dvs[i].parentNode;
            if (dvs[i].parentNode.parentNode && dvs[i].parentNode.parentNode.innerHTML == myDiv.innerHTML && dvs[i].className != "word") dvs[i].style.display = dvs[i].style.display || "inline";
            if (dvs[i].innerHTML == "") p.removeChild(dvs[i]);
        }
        for (var i = 0; i < sps.length; i++) {
            p = sps[i].parentNode;
            if (sps[i].parentNode.parentNode && sps[i].parentNode.parentNode.innerHTML == myDiv.innerHTML && sps[i].className != "word") sps[i].style.display = sps[i].style.display || "inline";
            if (sps[i].innerHTML == "") p.removeChild(sps[i]);
        }
    }
    str = myDiv.innerHTML;
    return str.split("</span><span").join("</span> <span"); //.join("", str);
}

function wordWrap(obj) {
    for (var i = obj.childNodes.length - 1; i > -1; i--) {
        if (obj.childNodes[i].nodeType == 3 && obj.childNodes[i].nodeVale != " ") {
            var myDiv = document.createElement('div');
            myDiv.innerHTML = obj.childNodes[i].nodeValue;
            myDiv.innerHTML = "<span class='word'>" + myDiv.innerHTML.split(" ").join("</span> <span class='word'>") + "</span>";
            var added = myDiv.children.length;
            var tn = obj.childNodes[i],
                ma = [];
            for (var j = 0; j < myDiv.children.length; j++) ma.push(myDiv.children[j]);
            //ma.reverse();
            for (var j = ma.length - 1; j > -1; j--) obj.insertBefore(ma[j], tn.nextSibling);
            obj.removeChild(tn);
        } else {
            wordWrap(obj.childNodes[i]);
        }
    }
    return obj.innerHTML;
}

function init() {

  if (myFT.instantAds.Endfr_CTA_img.toLowerCase().indexOf("_2x") === -1) {
      var iH = endfrCtaImg.naturalHeight;
      var iW = endfrCtaImg.naturalWidth;
  } else {
      var iH = endfrCtaImg.naturalHeight / 2;
      var iW = endfrCtaImg.naturalWidth / 2;
  }
    
  endfrCtaImg.style.left = myFT.instantAds.Endfr_CTA_img_XY.split(",")[0] + "px";
  endfrCtaImg.style.top = myFT.instantAds.Endfr_CTA_img_XY.split(",")[1] + "px";
    
  endfrCtaImg.style.height = iH + "px";
  endfrCtaImg.style.width = iW + "px";
    
  main.style.display = "block";
  setTimeout(moveHeadline1,500);

}

function moveHeadline1() {
   animateText(f1Head);
   if(myFT.instantAds.Fr1_Headline_txt == ""){
       setTimeout(frame2In, (frHoldtime.split(",")[0]*1000)-100);
       console.log("nohead");
   } else {
       setTimeout(frame2In, (frHoldtime.split(",")[0]*1000));
   }

}

function frame2In() {
    frame1.style.opacity = 0;
    frame2.style.opacity = 1;
    setTimeout(moveHeadline2, 500);
}

function moveHeadline2() {
    animateText(f2Head);
    if(myFT.instantAds.Fr2_Headline_txt == ""){
        if(myFT.instantAds.Fr3_Background_img.toLowerCase().indexOf("blank.png") === -1) {
            setTimeout(frame3In, (frHoldtime.split(",")[1]*1000)-1000);
        } else {
            setTimeout(endFrameIn, (frHoldtime.split(",")[1]*1000)-1000);
        }
        console.log("nohead");
    } else {
        if(myFT.instantAds.Fr3_Background_img.toLowerCase().indexOf("blank.png") === -1) {
            setTimeout(frame3In, (frHoldtime.split(",")[1]*1000));
        } else {
           setTimeout(endFrameIn, (frHoldtime.split(",")[1]*1000)); 
        }
    }
    // setTimeout(frame3In, (frHoldtime.split(",")[1]*1000));
}

function frame3In() {
    frame2.style.opacity = 0;
    frame3.style.opacity = 1;
    setTimeout(moveHeadline3, 500);
}

function moveHeadline3() {
    animateText(f3Head);
    if(myFT.instantAds.Fr3_Headline_txt == ""){
        setTimeout(endFrameIn, (frHoldtime.split(",")[2]*1000) - 1000);
        // console.log(frHoldtime.split(",")[2]*1000);
        // console.log("nohead");
    } else {
        setTimeout(endFrameIn, (frHoldtime.split(",")[2]*1000));
    }
    // setTimeout(endFrameIn, (frHoldtime.split(",")[2]*1000));

}

function endFrameIn() {
    frame3.style.opacity = 0;
    endFrame.style.opacity = 1;
    setTimeout(moveEndFrHeadline, 1000);
}

function moveEndFrHeadline() {
    console.log("move head");
    endfrHead.classList.add('endfrHeadPos');
    setTimeout(logoSlideAnim, 1000);
}

function logoSlideAnim() {
    endfrSlideImg.classList.remove('slidePos');
    endfrCtaImg.style.opacity = 1;
    
    if (myFT.instantAds.Endfr_CTA_img.toLowerCase().indexOf("blank.png") === -1) {
        endfrCtaImg.addEventListener("click", function(){
            myFT.clickTag(2, myFT.instantAds.Clicktag2_url);
        });
        
        setTimeout(function(){
            endfrCtaImg.style.pointerEvents = "auto";
        },500);
    }
    
    // setTimeout(ctaIn, 4000);
}

// function ctaIn() {
//
// }

function animateText(e) {
      var x = 0;

      if (e.innerHTML == ""){
          e.style.display = "none";
      } else {
          var n = e.getElementsByClassName("move").length;
          for (x = 0; x < n; x++) {
              if (e.getElementsByClassName("move")[x] != undefined) {
                  e.getElementsByClassName("move")[x].classList.remove("headPos");
              }
          }
      }
}
