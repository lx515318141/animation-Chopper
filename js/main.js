{
    let view = {
        el: "html",
        init(){
            this.$el = $(this.el)
        },
        duration: 50,
        n: 0,
        writeCode(prefix, code, fn){
            // let $code = $('#code')
            // let $styleTag = $('#styleTag')
            let codeDom = document.querySelector('#code')
            let styleTagDom = document.querySelector('#styleTag')
            
            let id;
            console.log(code)
            let _code = code
            let _this = this
            id = setTimeout(function run () {
                _this.n += 1
                // let container = _code.substring(0,n)
                // let container = Prism.highlight(container, Prism.languages.css)
                // $code.html(Prism.highlight(container, Prism.languages.css)) 
                // $styleTag.html(container)
                // console.log(_this.duration)
                codeDom.innerHTML = Prism.highlight(prefix + _code.substring(0, _this.n), Prism.languages.css)
                styleTagDom.innerHTML = prefix + _code.substring(0, _this.n)
                // $code.scrollTop($code.height())
                codeDom.scrollTop = codeDom.scrollHeight
                if(_this.n < _code.length){
                    id = setTimeout(run, _this.duration)
                }else{
                    // 判断fn是否存在，存在则执行fn
                    fn && fn()
                }

            }, _this.duration)
            
        },
        stop(){

        },
        replay(data){
            this.duration = 50;
            this.n = 0
            setTimeout(() => {
                let $rButton = $('.action > button:nth-child(2)')
                this.activeItem($rButton)
            }, 100);
            document.querySelector('#code').innerHTML = ''
            document.querySelector('#styleTag').innerHTML = ''
            console.log(data)
            this.writeCode('', data, ()=>{})
        },
        activeItem(button){
            button.addClass('active').siblings('.active').removeClass('active')
        }
    };
    let model = {
        data: `
        /* 
         * 今天我们来画一个一碰就哭哭的乔巴
         * 首先给乔巴进行定位 
         */
        .chopper-container{
            position: relative;
            margin: auto;
        }

        /* 先画帽子，这样可以更好地确定脸和鹿角的位置 */
        .chopper-hat{
            margin: auto;
        }
        .chopper-hat .chopper-hat-top{
            height: 180px;
            width: 310px;
            background: #E9746D;
            position: absolute;
            border: 6px solid #000;
            border-radius: 50% / 30% 30% 1% 1%;
            left: 115px;
            top: -144px;
            overflow: hidden;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-shadow{
            background: rgba(0, 0, 0, 0.3);
            width: 55%;
            height: 100%;
            position: absolute;
            border-radius: 0 150px 0 0;
            z-index: 2;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-x{
            display: flex;
            justify-content: center;
            transform: rotate(45deg);
            margin: 34px 0 0 26px;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-x .chopper-hat-top-x-center{
            background: #fff;
            width: 44px;
            height: 30px;
            margin-top: 41px;
            z-index: 1;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-x::after,
        .chopper-hat .chopper-hat-top .chopper-hat-top-x::before{
            content: '';
            position: absolute;
            background: white;
            border: 6px solid #000;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-x::before{
            width: 100px;
            height: 30px;
            top: 35px;
        }
        .chopper-hat .chopper-hat-top .chopper-hat-top-x::after{
            width: 30px;
            height: 100px;
        }
        .chopper-hat .chopper-hat-brim{
            position: relative;
            border: 6px solid #000;
            width: 540px;
            height: 220px;
            background: #E9746D;
            border-radius: 50% / 50% 50% 35% 35%;
            overflow: hidden;
            z-index: 100;
        }
        .chopper-hat .chopper-hat-brim .chopper-hat-brim-shadow{
            background: #A3514C;
            position: absolute;
            left: 0;
            height: 100%;
            width: 40%;
            border-radius: 50px;
        }
        .chopper-hat .chopper-hat-brim::after{
            content: '';
            width: 100%;
            height: 80%;
            background: #94474D;
            position: absolute;
            bottom: 0;
            border: 6px solid #000;
            border-radius: 50% / 70% 70% 20% 20%;
            left: -6px;
            z-index: 3;
        }
        
        /* 然后画鹿角，这个鹿角很复杂可能需要的时间有点久 */
        .chopper-container .chopper-antlers{
            background: #82603B;
            width: 164px;
            height: 98px;
            border: 5px solid #000;
            border-top: 0;
            position: absolute;
            top: -80px;
            z-index: 4;
        }
        .chopper-antlers::before{
            content: '';
            position: absolute;
            background: #fff;
            width: 15%;
            height: 33%;
            border-radius: 0 0 50% 50%;
            border: 5px solid #000;
            right: 50px;
            z-index: 10;
            border-top: 0;
            top: -10px;
        }
        .chopper-right-antlers::before{
            right: 79px;
        }
        .chopper-antlers::after{
            content: '';
            position: absolute;
            background: #82603B;
            width: 160px;
            height: 60px;
            border-radius: 50% / 20% 20% 28% 38%;
            transform: rotate(-5deg);
        }
        .chopper-right-antlers::after{
            transform: rotate(5deg);
        }
        .chopper-antlers > li:nth-child(6){
            position: absolute;
            border: 6px solid #000;
            border-top: 0;
            width: 30px;
            height: 60px;
        }
        .chopper-left-antlers > li:nth-child(6){
            transform: rotate(-37deg);
            right: -10px;
            bottom: -40px;
        }
        .chopper-right-antlers > li:nth-child(6){
            transform: rotate(37deg);
            left: -10px;
            bottom: -40px;
        }
        .chopper-antlers > li{
            background: #82603B;
            height:112px;
            width: 17%;
            border: 5px solid #000;
            border-bottom: 0;
            position: absolute;
        }
        .chopper-left-antlers{
            left: -48px;
            border-radius: 50% / 20% 20% 80% 62%;
        }
        .chopper-right-antlers{
            right: -48px;
            border-radius: 50% / 20% 20% 62% 80%;
        }
        .chopper-left-antlers > li:nth-child(1){
            border-radius: 50% 40% 0 40%;
            top: -63px;
            left: -10px;
            transform: rotate(2deg);
        }
        .chopper-left-antlers > li:nth-child(2){
            border-radius: 50% 40% 0 40%;
            top: -78px;
            left: 16px;
        }
        .chopper-left-antlers > li:nth-child(3){
            border-radius: 50% 40% 0 40%;
            top: -90px;
            left: 46px;
        }
        .chopper-left-antlers > li:nth-child(4){
            top: -100px;
            right: 17px;
            border-radius: 44% 44% 40% 10%;
        }
        .chopper-left-antlers > li:nth-child(5){
            top: -84px;
            right: -15px;
            border-radius: 44% 44% 45% 30%;
            transform: rotate(1deg);
        }
        .chopper-right-antlers > li:nth-child(1){
            top: -63px;
            right: -10px;
            border-radius: 40% 50% 40% 0;
            transform: rotate(-2deg);
        }
        .chopper-right-antlers > li:nth-child(2){
            top: -78px;
            right: 16px;
            border-radius: 40% 50% 0 40%;
        }
        .chopper-right-antlers > li:nth-child(3){
            border-radius: 40% 50% 0 30%;
            top: -90px;
            right: 46px;
        }
        .chopper-right-antlers > li:nth-child(4){
            border-radius: 44% 44% 10% 40%;
            top: -100px;
            left: 17px;
        }
        .chopper-right-antlers > li:nth-child(5){
            border-radius: 44% 44% 30% 45%;
            top: -84px;
            left: -15px;
            transform: rotate(-1deg);
        }
        .chopper-left-antlers > li:nth-child(2),
        .chopper-left-antlers > li:nth-child(3),
        .chopper-left-antlers > li:nth-child(5){
            box-shadow: -5px 8px 0px 0px rgba(0,0,0,0.2);
        }
        .chopper-right-antlers > li:nth-child(2),
        .chopper-right-antlers > li:nth-child(3),
        .chopper-right-antlers > li:nth-child(5){
            box-shadow: 5px 8px 0px 0px rgba(0,0,0,0.2);
        }
        
        /* 现在开始画脸 */
        .chopper-face{
            width: 300px;
            height: 220px;
            background: #DFB47D;
            border: 6px solid #000;
            position: absolute;
            top: 90px;
            left: 120px;
            z-index: 200;
            border-radius: 50% 50% 46% 46%/ 29% 29% 51% 51%;
            box-shadow: 0px 20px 0px 0px rgba(0,0,0,0.2) inset;
            overflow: hidden;
        }
        
        /* 然后画眼睛 */
        .chopper-face .eye{
            display: flex;
            padding: 36px 30px;
            
        }
        .chopper-face .eye .chopper-eye .white{
            width: 60px;
            height: 60px;
            border: 6px solid #000;
            border-radius: 50%;
            background: #fff;
            position: relative;
        }
        .chopper-face .eye .chopper-eye .black{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #000;
            position: absolute;
            top: 48px;
            left: 42px;
            z-index: 400;
        }
        .chopper-face .eye .chopper-right-eye .black{
            left: 210px;
        }
        .chopper-face .eye .chopper-right-eye .white{
            margin-left: 96px;
        }
        .chopper-face .eye .chopper-eye .black::before{
            content: '';
            position: absolute;
            background: #fff;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            top: 10px;
            left: 10px;
        }

        /* 下面是乔巴的鼻子 */
        .chopper-face .chopper-nose{
            background: #41588C;
            border: 6px solid #000;
            height: 17px;
            width: 30px;
            position: absolute;
            top: 90px;
            left: 129px;
            border-radius: 60% / 40% 40% 100% 100%;
            z-index: 300;
        }
        .chopper-face .chopper-nose::before{
            background: #fff;
            content: '';
            position: absolute;
            width: 8px;
            height: 6px;
            border-radius: 3px;
            left: 2px;
            top: 2px;
        }

        /* 现在画乔巴的上嘴唇 */
        .chopper-face .lip{
            display: flex;
            position: absolute;
            top: 87px;
            left: 87px;
            z-index: 200;
        }
        .chopper-face .lip .chopper-lip{
            width: 60px;
            height: 62px;
            border: 6px solid #000;
            border-top: 0;
            border-radius: 50%;
            background: #DFB47D;
        }
        .chopper-face .lip .chopper-lip::before{
            background: #DFB47D;
            content: '';
            width: 130%;
            height: 30px;
            position: absolute;
        }
        .chopper-face .lip .chopper-left-lip{
            border-left: 0;
            transform: rotate(20deg);
        }
        .chopper-face .lip .chopper-left-lip::before{
            transform: rotate(-40deg);
            left: -20px;
            top: 15px;
        }
        .chopper-face .lip .chopper-right-lip{
            border-right: 0;
            margin-left: -6px;
            transform: rotate(-20deg);
        }
        .chopper-face .lip .chopper-right-lip::before{
            transform: rotate(40deg);
            right: -20px;
            top: 15px;
        }

        /* 乔巴的嘴巴最后画 */
        .chopper-face .choper-mouse{
            height: 92px;
            width: 50px;
            border: 6px solid #000;
            background: #7E4031;
            margin-top: -10px;
            margin: -28px 119px 0 119px;
            border-radius: 50% / 0 0 70% 70%;
            overflow: hidden;
            position: relative;
        }
        .chopper-face .choper-mouse::after{
            content: '';
            position: absolute;
            background: #DF8968;
            border: 6px solid #000;
            border-radius: 50% / 50% 50% 0 0;
            width: 70px;
            height: 80px;
            bottom: -40px;
            left: -16px;
        }
        
        /* 以下是乔巴哭的时候各部位的样式 */
        /* 鼠标放在乔巴脸上时，乔巴哭的表情就会激活 */
        /* 此时就可以看到画乔巴哭泣时候表情的细节了 */ 
        .prompt .make-cry{
            display: block;
        }
        .chopper-face:hover .eye .chopper-eye li{
            display: inline-block;
        }
        .chopper-face:hover .eye .chopper-eye .white{
            border: 6px solid #fff;
        }
        .chopper-face:hover .chopper-lip-cry{
            display: block;
        }
        .chopper-face:hover .chopper-nose ul{
            display: block;
        }
        .chopper-face:hover .lip{
            display: none;
        }
        .chopper-face:hover .choper-mouse{
            display: none;
        }

        /* 这里画乔巴哭的时候的眼泪 */
        .chopper-face .eye .chopper-eye li{
            display: none;
        }
        .chopper-face .eye .chopper-eye .white li{
            background: #fff;
            position: absolute;
            border-radius: 50%;
            z-index: 300;
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(1){
            top: 13px;
            left: -13px;
            width: 38px;
            height: 38px;
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(2){
            top: -8px;
            left: -1px;
            width: 43px;
            height: 35px;
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(3){
            top: -7px;
            left: 31px;
            width: 39px;
            height: 44px;
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(4){
            top: 30px;
            left: 36px;
            width: 31px;
            height: 31px;
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(5){
            top: 49px;
            left: 36px;
            width: 16px;
            height: 29px;
            transform: rotate(-30deg);
        }
        .chopper-face .eye .chopper-eye .white li:nth-child(6){
            top: 51px;
            left: 6px;
            width: 12px;
            height: 32px;
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(1){
            top: 13px;
            left: 35px;
            width: 38px;
            height: 38px;
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(2){
            top: -8px;
            left: 18px;
            width: 43px;
            height: 35px;
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(3){
            top: -7px;
            left: -10px;
            width: 39px;
            height: 44px;
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(4){
            top: 30px;
            left: -7px;
            width: 31px;
            height: 31px;
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(5){
            top: 49px;
            left: 12px;
            width: 16px;
            height: 29px;
            transform: rotate(30deg);
        }
        .chopper-face .eye .chopper-right-eye .white li:nth-child(6){
            top: 51px;
            left: 42px;
            width: 12px;
            height: 32px;
        }
        .chopper-face .eye .chopper-eye .black li{
            background: #000;
            border-radius: 50%;
            position: absolute;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(1){
            width: 35px;
            height: 35px;
            top: 7px;
            left: -10px;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(2){
            width: 40px;
            height: 32px;
            top: -7px;
            left: -3px;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(3){
            width: 36px;
            height: 39px;
            top: -6px;
            left: 21px;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(4){
            width: 28px;
            height: 28px;
            top: 22px;
            left: 25px;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(5){
            width: 28px;
            height: 28px;
            top: 25px;
            left: 5px;
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(6){
            background: #fff;
            width: 10px;
            height: 6px;
            top: 3px;
            left: 8px;
            transform: rotate(-19deg);
        }
        .chopper-face .eye .chopper-eye .black li:nth-child(7){
            background: #fff;
            width: 10px;
            height: 10px;
            top: 21px;
            left: -3px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(1){
            width: 35px;
            height: 35px;
            top: 7px;
            left: 23px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(2){
            width: 40px;
            height: 32px;
            top: -7px;
            left: 11px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(3){
            width: 36px;
            height: 39px;
            top: -6px;
            left: -9px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(4){
            width: 28px;
            height: 28px;
            top: 22px;
            left: -5px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(5){
            width: 28px;
            height: 28px;
            top: 25px;
            left: 15px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(6){
            transform: rotate(19deg);
            top: 3px;
            left: 29px;
        }
        .chopper-face .eye .chopper-right-eye .black li:nth-child(7){
            top: 21px;
            left: 41px;
        }
        
        /* 这里画乔巴哭的时候的鼻涕 */ 
        .chopper-face .chopper-nose ul{
            display: none;
            position: relative;
        }
        .chopper-face .chopper-nose li{
            background: #fff;
            top: 20px;
            border-radius: 50% / 70% 70% 30% 30%;
        }
        .chopper-face .chopper-nose li:nth-child(1){
            height: 30px;
            width: 8px;
            position: absolute;
            transform: rotate(8deg);
            top: 21px;
        }
        .chopper-face .chopper-nose li:nth-child(2){
            height: 20px;
            width: 5px;
            position: absolute;
            right: 0px;
            transform: rotate(-8deg);
        } 

        /* 这里画乔巴哭的时候上嘴唇的变化 */ 
        .chopper-face .chopper-lip-cry{
            display: none;
            width: 150px;
            height: 40px;
            background: #DFB47D;
            border-top: 3px solid #000;
            border-radius: 50% / 80% 80% 0 0;
            position: absolute;
            top: 95px;
            left: 75px;
        }
        .chopper-face .chopper-lip-cry::before{
            content: '';
            position: absolute;
            width: 1px;
            background: #000;
            height: 50px;
            left: 75px;
            z-index: 1;
        }
        .chopper-face .chopper-lip-cry::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 20px;
            background: #DFB47D;
            top: 19px;
        }

        /* 最后再给乔巴哭的时候的嘴巴加上样式，你看他哭的多伤心 */ 
        .chopper-face .chopper-mouse-cry{
            width: 181px;
            height: 80px;
            border-radius: 50%;
            border: 1px solid #000;
            margin: 3px 60px;
            overflow: hidden;
            position: relative;
        }
        .chopper-face .chopper-mouse-cry .upper-teeth{
            background: #fff;
            width: 100%;
            height: 100%;
        }
        .chopper-face .chopper-mouse-cry .upper-teeth li{
            width: 3px;
            height: 100%;
            background: #000;
            margin-left: 20px;
            display: inline-block;
        }
        .chopper-face .chopper-mouse-cry .tongue{
            position: absolute;
            width: 180px;
            height: 80%;
            background: #7E4031;
            border: 2px solid #000;
            border-radius: 50% / 45% 45% 0 0;
            bottom: -2px;
            left: -2px;
        }
        .chopper-face .chopper-mouse-cry .tongue::after{
            content: '';
            position: absolute;
            background: #DF8968;
            width: 70px;
            height: 30px;
            border-radius: 50%;
            top: 6px;
            left: 53px;
        }
        .chopper-face .chopper-mouse-cry .lower-teeth{
            background: #fff;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 28px;
            left: 0px;
            border-radius: 50% / 50% 50% 0 0;
            overflow: hidden;
        }
        .chopper-face .chopper-mouse-cry .lower-teeth li{
            width: 3px;
            height: 100%;
            background: #000;
            margin-left: 20px;
            display: inline-block;
        }
        .chopper-face .chopper-mouse-cry .lower-teeth::after{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background: #DFB47D;
            border-radius: 50% / 50% 50% 0 0;
            border: 1px solid #000;
            bottom: -12px;
            left: -1px;
        }
        .chopper-face .chopper-mouse-cry::after{
            width: 70px;
            height: 15px;
            content: '';
            position: absolute;
            background: #DFB47D;
            border-top: 3px solid #000;
            border-radius: 50% / 80% 80% 0 0;
            bottom: 20px;
            left: 54px;
        }
        .prompt .make-cry{
            display: none;
        }
        .prompt .complete{
            display: block;
        }
        `
    };
    let controller = {
        init(view, model){
            this.view = view;
            this.view.init()
            this.model = model;
            this.bindEvents()
            this.view.writeCode('', this.model.data, () => {})
        },
        bindEvents(){
            this.view.$el.find('.action').on('click', 'button', (e) => {
                let $button = $(e.currentTarget)
                let speed = $button.attr('data-speed')
                this.view.activeItem($button)
                switch(speed){
                    case 'slow':
                        this.view.duration = 200;
                        break;
                    case 'normal':
                        this.view.duration = 50;
                        break;
                    case 'fast':
                        this.view.duration = 10;
                        break;
                    case 'replay':
                        this.view.stop();
                        this.view.replay(this.model.data);
                        break;
                }
            })
        }
    };
    controller.init(view, model)
}
