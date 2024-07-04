let navWidth = $('#sideNav .side-icon').prev().outerWidth(true);
///open and close side navbar
$('#sideNav')
            .animate({left: -navWidth},0)
        
            let isOpen = false;

$('#sideNav .side-icon')
            .on('click', function(){
                
                $(this).parent()
                .animate({left:  isOpen ? -navWidth :0},1000)

                isOpen = !isOpen;

            })


$('.closeBtn')
            .on('click' , function(){
                // console.log('hi')
                $(this).parent().parent()
                .animate({left: -navWidth},2000)
            
                
            })

            ////////////

        const res = $('.slide-down').offset()

$(window).on('scroll' , function(){
    const top = $(window).scrollTop();
    console.log(top)
    if(top> res.top){
    $('.openNav').addClass('d-none')

    }
    else{
    $('.openNav').removeClass('d-none')

    }
})
/////////////// linker 

$('.infor a[href^="#"]')    
            .on('click' , function(e){
                // console.log(this);
               const sectionId = $(this).attr("href")
                const {top } = $(sectionId).offset()
                $('html , body')
                    .animate({ scrollTop : top} , 500)
            })

////////////////////////

            $('#slide-down .toggle').on('click' , function(){
                $('.slide-content').not($(this).next()).slideUp(500);
                $(this).next().slideToggle(500);
            })
            


///////////////// 

            window.onload = function() {
   
                countDownToTime("24 july 2024 10:55:00");
              }
            
              function countDownToTime(count) {
              
                    let nextDate = new Date(count);
                nextDate = (nextDate.getTime()/1000);
            
                let now = new Date();
                now = (now.getTime()/1000);
            
                timeDifference = (nextDate- now);
                    
               let days = Math.floor( timeDifference / (24*60*60));
               let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
               let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
               let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
            
            
                $(".day").html(`${days} D`);
                $(".hour").html(`${hours} h`);
                $(".min").html(`${ mins } m`);
                $('.sec').html(`${ secs} s`)
            
              
                setInterval(function() {  countDownToTime(count); }, 1000);
              }
            
            
    /////////////////////////////////



function updateCharacterCount() {
    var inputText = document.querySelector('#textInput').value;
    var currentLength = inputText.length;

    var maxLength = 100;
    var charactersLeft = maxLength - currentLength;

    var charCountElement = document.querySelector('#charCount');
    charCountElement.textContent = charactersLeft;
}

document.querySelector('#textInput').addEventListener('input', updateCharacterCount);

updateCharacterCount();





