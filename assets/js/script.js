const timeline = gsap.timeline()
let buttons = document.querySelectorAll('.nav-links')
let checkButton = document.querySelector('.price-button')
let priceRow= document.querySelector('.price-row')
let Div_Button = document.querySelector('.price-button-div')
let Contact_button= document.querySelector('.contact-button')

gsap.registerPlugin(ScrollTrigger)



Contact_button.addEventListener('click',function(){
        $('.contact-button').animate({'opacity':'0'},function(){
            $('.contact-button').css('display','none')
            $('#start-div').css('display','flex')
            $('.insider-div').animate({'width':'50%'},2000,function(){
                $('.insider-div').animate({'height':'60%'},2000,function(){
                    $('.insider-text').animate({'opacity':'1'})
                    $('.insider-text').css({'pointer-events':'all'})
                    $('.insider-text').css({'cursor':'auto'})
                })
            })
            // timeline.to('.insider-div',{width:'75%',duration:2}).to('.insider-div',{height:'75%',duration:2}).to('.insider-text',{opacity:1})
        })
})


checkButton.addEventListener('click',function(){
    gsap.to('.price-button',{opacity:0})
    priceRow.classList.remove('d-none')
    gsap.from('.cardHolder',{opacity:0,x:'-100%',duration:3,stagger:0.3})
    Div_Button.classList.add('d-none')
    ScrollTrigger.refresh()
})

let tl=gsap.timeline()
tl.from('.container1',{x:'-100%'})
.from('.container2',{x:'100%'})
.from('.container3',{y:'-100%'})




ScrollTrigger.create({
    trigger:'.trial-section',
    animation:tl,
    pin:true,
    scrub:1,
    duration:2,
    start:'top top',
    end: '+=4000',
})

$(document).ready(function(){
    $('.loading-i').fadeOut(2000,function(){
        $('.background-div').fadeOut(2000)
        $('#isloading').slideUp(2000,function(){
            $('.background-div').remove()
            $('.navbar').css('display','block')
            $('#isloading').remove()
            $('body').css('overflow','auto')
            timeline.from('.main-div',{opacity:0,scale:0.6,ease:'Power2.easeOut',duration:2})
            .from('.navbar',{y:'-100%',opacity:0})
            .to('.text-reveal',{clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,duration:3})
            ScrollTrigger.refresh()
        })
    })
})