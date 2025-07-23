(function(){
    const fonts =["cursive","sans-serif","momospace"];
    let captchaValue = "";
    function generateCaptcha(){
        let value = btoa(Math.random()*100000000000000000);
        value = value.substring(0,5+math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
       let html= captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(math.random()*30);
            const font = math.trunc(Math.random()*fonts.length);
            return '<Span style=" transform:rotate(${rotate}deg); font-family:${fonts[font]}">${char}</span>';
        }).join
    document.querySelector(".submit-from .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".submit-from .captcha .captcha-refresh").addEventListener("click",function(){
            generateCaptcha();
            setCaptcha();
        });
    }
    initCaptcha();

    document.querySelector(".submit-form #submit-btn").addEventListener("click",function(){
        let inputCaptchaValue = document.querySelector(".submit-from .captcha-form .Captcha-input").value;
        if(inputCaptchaValue === CaptchaValue){
            swal("","Logging Int","success");
        } else {
            swal("Invalid captcha");
        }
    });
});