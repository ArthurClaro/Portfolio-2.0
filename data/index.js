let menuButton=document.querySelector(".menu-button"),overlay=document.querySelector(".overlay"),nav=document.querySelector(".navbar");menuButton.addEventListener("click",()=>{console.log("clicko"),overlay.classList.add("show"),nav.style.display="flex"}),overlay.addEventListener("click",()=>{console.log("clickoou overflay"),overlay.classList.remove("show"),nav.style.display="none"});let bbw=document.querySelectorAll(".bbw");function bbww(){bbw.forEach(e=>{e.addEventListener("mouseover",function i(){e.classList.add("animate__rubberBand"),e.id=""}),e.addEventListener("mouseout",function i(){setTimeout(()=>{e.classList.remove("animate__rubberBand")},"500")})})}bbww();var canvas,canvasWidth,canvasHeight,context,centerX,centerY,mouseX,mouseY,PARTICLE_NUM=500,PARTICLE_BASE_RADIUS=.5,FL=500,DEFAULT_SPEED=2,BOOST_SPEED=300,speed=DEFAULT_SPEED,targetSpeed=DEFAULT_SPEED,particles=[];function loop(){context.save(),context.fillStyle="rgb(0, 0, 0)",context.fillRect(0,0,canvasWidth,canvasHeight),context.restore(),speed+=(targetSpeed-speed)*.01;var e,i,t,n,a,o,r,c,d,s,l,v,p,u,m,h,f=.5*Math.PI,g=Math.atan2,E=Math.cos,y=Math.sin;context.beginPath();for(var S=0;S<PARTICLE_NUM;S++){if((e=particles[S]).pastZ=e.z,e.z-=speed,e.z<=0){randomizeParticle(e);continue}i=centerX-(mouseX-centerX)*1.25,t=centerY-(mouseY-centerY)*1.25,n=e.x-i,a=e.y-t,r=i+n*(o=FL/e.z),c=t+a*o,d=PARTICLE_BASE_RADIUS*o,l=i+n*(s=FL/e.pastZ),v=t+a*s,p=PARTICLE_BASE_RADIUS*s,m=(u=g(v-c,l-r))+f,h=u-f,context.moveTo(l+p*E(m),v+p*y(m)),context.arc(l,v,p,m,h,!0),context.lineTo(r+d*E(h),c+d*y(h)),context.arc(r,c,d,h,m,!0),context.closePath()}context.fill()}function randomizeParticle(e){return e.x=Math.random()*canvasWidth,e.y=Math.random()*canvasHeight,e.z=1500*Math.random()+500,e}function Particle(e,i,t){this.x=e||0,this.y=i||0,this.z=t||0,this.pastZ=0}window.addEventListener("load",function(){canvas=document.getElementById("c");var e=function(){canvasWidth=canvas.width=window.innerWidth,canvasHeight=canvas.height=window.innerHeight,centerX=.5*canvasWidth,centerY=.5*canvasHeight,(context=canvas.getContext("2d")).fillStyle="rgb(255, 255, 255)"};document.addEventListener("resize",e),e(),mouseX=centerX,mouseY=centerY;for(var i=0;i<PARTICLE_NUM;i++)particles[i]=randomizeParticle(new Particle),particles[i].z-=500*Math.random();document.addEventListener("mousemove",function(e){mouseX=e.clientX,mouseY=e.clientY},!1),document.addEventListener("mousedown",function(e){targetSpeed=BOOST_SPEED},!1),document.addEventListener("mouseup",function(e){targetSpeed=DEFAULT_SPEED},!1),setInterval(loop,1e3/60)},!1);import{tech as e}from"./techs.js";import{certificates as i}from"./certificates.js";import{projects as t}from"./projects.js";let containerTech=document.querySelector("swiper-container");function createTech(){e.forEach(e=>{containerTech.insertAdjacentHTML("beforeend",`
   
    <swiper-slide class="slide11${e.id}">

    <i class="${e.icon}"></i>

    <div class="rigth_top_botton">

        <div id="cimaa${e.id}">
            <h2>${e.title}</h2>

            <div id="percent${e.id}">
                <h3 >${e.percent}</h3>
                <p >%</p>
            </div>
        </div>

        <span id="barraDeBaixo${e.id}">
            <span ></span>
        </span>

    </div>

</swiper-slide>
        `)})}let containerCertificate=document.querySelector("#certificates");function createCertificate(){i.forEach(e=>{containerCertificate.insertAdjacentHTML("beforeend",`
        <swiper-slide id=${e.id}>

        <h2>${e.nummero}</h2>
        <div class="texto_baixo_skills">
            <h3>${e.title}</h3>

            <div>
                <p>Institution:<em>${e.institution}</em></p>
                <p>Duration: <em>${e.duration}</em></p>
                <p>Conclusion year: <em>${e.conclusion}</em></p>
                <p>Certificate: <em><a href="${e.link}" target="_blank" >Click here</a></em></p>
            </div>
        </div>
    </swiper-slide>
        `)})}let containerProjectsTop=document.querySelector("#splide__list_Top"),containerProjectsBottom=document.querySelector("#splide__list_Bottom");function createProjects(){t.forEach(e=>{containerProjectsTop.insertAdjacentHTML("beforeend",`
		<li class="splide__slide" id=${e.id}>

        <img src="${e.img}" alt="">
		<div>
			<a id="e_commerce_link${e.id}"
				href="${e.link}"
				target="_blank">${e.title}
                
                <div class="fazer_Ainda_bloco_redondo_cima">
                    <i id='fazer_Ainda_bloco_redondo_cima_HTML5' class="${e.techs[0]}"></i>
                    <i class="${e.techs[1]}"></i>
                    <i class="${e.techs[2]}"></i>
                </div>
                </a>
                
		</div>
	</li>
        `),containerProjectsBottom.insertAdjacentHTML("beforeend",`
        <li class="splide__slide">
            <img src="${e.img}" alt="">
        </li>
        `)})}createProjects(),createTech(),createCertificate();var loader=document.getElementById("preloader");window.addEventListener("load",function(){setTimeout(()=>{loader.style.display="none"},"1300")}),setTimeout(()=>{var e=new Typed(".multiple",{strings:["Frontend Developer","Blogger","Designer"],typeSpeed:100,backSpeed:100,backDelay:1e3,loop:!0})},"4100"),$(document).ready(function(){$("#myCanvas").tagcanvas({textColour:"rgb(255, 255, 255)",outlineThickness:.5,outlineColour:"#fe0853",maxSpeed:.06,freezeActive:!0,shuffleTags:!0,shape:"sphere",zoom:1.1,noSelect:!0,textFont:null,pinchZoom:!0,freezeDecel:!0,fadeIn:3e3,initial:[.3,-.1],depth:.8})}),document.addEventListener("DOMContentLoaded",function(){var e=new Splide("#main-carousel",{type:"fade",wheel:!0,arrows:!1,start:0}),i=new Splide("#thumbnail-carousel",{fixedWidth:200,fixedHeight:50,gap:10,rewind:!0,pagination:!1,focus:1.5,isNavigation:!0,start:0,breakpoints:{600:{fixedWidth:60,fixedHeight:44}}});e.sync(i),e.mount(),i.mount()});let div1=document.querySelector(".div1"),div2=document.querySelector(".div2"),div3=document.querySelector(".div3"),div4=document.querySelector(".div4"),div5=document.querySelector(".div5");$(document).ready(function(){$("#pagepiling").pagepiling({direction:"vertical",loopBottom:!0,loopTop:!0,menu:"#navbar",anchors:["section1","section2","section3","section4","section5"],normalScrollElements:".cima_skills",navigation:!1,afterLoad:function(e,i){1==i&&(div5.id="hidden",div2.id="hidden"),2==i&&(div3.id="hidden",div1.id="hidden"),3==i&&(div2.id="hidden",div4.id="hidden"),4==i&&(div3.id="hidden",div5.id="hidden"),5==i&&(div4.id="hidden",div1.id="hidden")},onLeave:function(e,i,t){1==i?div1.id="":2==i?div2.id="":3==i?div3.id="":4==i?div4.id="":5==i&&(div5.id="")}})});var swiper=new Swiper(".mySwiper",{speed:600,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});VanillaTilt.init(document.querySelectorAll(".card"),{max:25,speed:400,glare:!0,"max-glare":1});