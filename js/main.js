
            // ie detect
            function ieCheck() {
                var myNav = navigator.userAgent.toLowerCase();
                return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : ((navigator.appName == 'Netscape' && myNav.indexOf('trident') != -1) ? '11' : false);

            }
            var checkIE = ieCheck();
            if (checkIE && (ieCheck() < 9)) {
                location.href = 'caution.html';
            }

            $(document).ready(function(){
                $(".slider_counter").prepend('0<strong class="current-index"></strong>');
                $('.bxslider').bxSlider({
                    maxSliders:1,
                    // mode:'fade',
                    auto:true ,
                    speed: 1400,
                    pause: 4000,
                    infiniteLoop: true,
                    autoControls: false,
                    captions: true,
                    pager:true ,
                    controls:true,
                    touchEnabled: true,
                    swipeThreshold: 50,
                    // preventDefaultSwipeX: true,
                    // preventDefaultSwipeY: true,
                    // oneToOneTouch:false,
                    responsive :true,
                    nextSelector:'.slider_next',
                    prevSelector:'.slider_prev',
                    nextText: '<img src="img/next_btn.png" alt="next">',
                    prevText: '<img src="img/prev_btn.png" alt="prev">',
                    onSliderLoad: function (currentIndex){
                        $('.slider_counter .current-index').text(currentIndex + 1)
                        $(".slider_txt").text($('.nth1').find("img").attr("alt"));
                    },
                    onSlideBefore: function ($slideElement, oldIndex, newIndex){
                        $('.slider_counter .current-index').text(newIndex + 1)
                        $(".slider_txt").html($slideElement.find("img").attr("alt"));
                    }
                });

                $(".logo").on("click", function(){
                    $('html, body').animate({
                        scrollTop : 0
                    }, 500);
                    return false;
                });
                // var onTouchMove = function (e) {
                //     if (slider.settings.mode != 'fade') {
                //         var orig = e.originalEvent;
                //         var value = 0;
                //         // if horizontal, drag along x axis
                //         if (slider.settings.mode == 'horizontal')
                //         {
                //             var hchange = orig.changedTouches[0].pageX - slider.touch.start.x;
                //             var vchange = orig.changedTouches[0].pageY - slider.touch.start.y;

                //             if(Math.abs(hchange)>20 && Math.abs(hchange)>Math.abs(vchange))
                //             {
                //                 value = slider.touch.originalPos.left + hchange;
                //                 setPositionProperty(value, 'reset', 0);
                //                 e.preventDefault();
                //             }
                //             // if vertical, drag along y axis
                //         } else{
                //             e.preventDefault();
                //             var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                //             value = slider.touch.originalPos.top + change;
                //             setPositionProperty(value, 'reset', 0);
                //         }

                //     }
                // }

                $('.scroll_down').click (function() {
                  $('html, body').animate({scrollTop: $('.s2').offset().top }, 'slow');
                  return false;
                });

                // logoChange();
            });

            window.onload = function () {
                var elm = ".box";
                var moveTop = $(window).scrollTop();
               $(elm).each(function (index) {
                   // 媛쒕퀎�곸쑝濡� Wheel �대깽�� �곸슜
                   $(this).on("mousewheel DOMMouseScroll", function (e) {
                        e.preventDefault();
                        var delta = 0;
                        if (!event) event = window.event;
                        if (event.wheelDelta) {
                            delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                        }
                        else if (event.detail)
                        delta = -event.detail / 3;
                        var moveTop = $(window).scrollTop();
                        var elmSelecter = $(elm).eq(index);

                        // 留덉슦�ㅽ쑀�� �꾩뿉�� �꾨옒濡�
                        if (delta < 0) {
                            if ($(elmSelecter).next() != undefined) {
                                try{
                                    moveTop = $(elmSelecter).next().offset().top;
                                }catch(e){}
                            }
                        // 留덉슦�ㅽ쑀�� �꾨옒�먯꽌 �꾨줈
                        } else {
                            if ($(elmSelecter).prev() != undefined) {
                                try{
                                   moveTop = $(elmSelecter).prev().offset().top;
                                }catch(e){}
                            }
                        }

                        // �붾㈃ �대룞 0.8珥�(800)
                        $("html,body").stop().animate({
                           scrollTop: moveTop + 'px'
                        },1600, "easeInOutExpo");
                    });
               });
                if($(window).width()>800){
                }
                // else {
                //     // $(".wrap").height("100%");
                //     $(".wrap").height($(window).height());
                //     $(".full").height($(window).height());
                //     $(".full .box").height($(window).height());

                //     var startTouchY = null;
                //     var moveTouchY = null;
                //     var startPositionY = null;

                //     $('.box').bind('touchstart',function(event){
                //         var e = event.originalEvent;
                //         // startTouchX = e.targetTouches[0].pageX;
                //         startTouchY = e.targetTouches[0].pageY;
                //         // startPositionX = $(this).css('left');
                //         // startPositionY = $(this).css('top');
                //     });
                //     $('.box').bind('touchmove', function(event){
                //         var e = event.originalEvent;
                //         // moveTouchX = e.targetTouches[0].pageX;
                //         moveTouchY = e.targetTouches[0].pageY;
                //         // $(this).css({top: (moveTouchY - 50), left: (moveTouchX - 5)});
                //     });
                //     $('.box').bind('touchend', function(event){
                //         var tt = moveTouchY - startTouchY;
                //         var elmSelecter = $(elm).eq();
                //         console.log(tt);

                //         var curWheel = 0;
                //         var curWheel2 = 0;
                //         var _isHasScroll = false, _isScrollEnd = false, _isScrollStart = false;
                //         var isWheelMove = false;

                //         if(_isHasScroll && _isScrollStart){
                //             setTimeout(function(){
                //                 if( tt < 0 ){

                //                     if( curWheel ===1 ){
                //                         isWheelMove = true;
                //                         TweenMax.to($(".s1"), 0, {'top' : '-100%', ease:Power3.easeOut});
                //                     TweenMax.to($(".s1"), 1, {'top' : '0', ease:Power3.easeOut});
                //                     TweenMax.to($(".s2"), 1, {'top' : '100%', ease:Power3.easeOut, onComplete:function(){
                //                         curWheel = 0;
                //                         curWheel2 = 0;
                //                         isWheelMove = false;
                //                     }});
                //                     }
                //                 }
                //                 if( tt > 0 ){
                //                     if ($(elmSelecter).prev() != undefined) {
                //                         try{
                //                            moveTop = $(elmSelecter).prev().offset().top;
                //                         }catch(e){}
                //                     }
                //                 }
                //             });
                //         }
                //         // �붾㈃ �대룞 0.8珥�(800)
                //         $("html,body").stop().animate({
                //            scrollTop: moveTop + 'px'
                //         },800, "easeInOutExpo");
                //     });


                //     var lastY;
                //     $(document).bind('touchmove', function (e){

                //         var elmSelecter = $(elm).eq();
                //         var currentY = e.originalEvent.touches[0].clientY;
                //         if(currentY > lastY){// moved down
                //             console.log("�꾨옒");
                //             if ($(elmSelecter).next() != undefined) {
                //                 try{
                //                     moveTop = $(elmSelecter).next().offset().top;
                //                 }catch(e){}
                //             }
                //         }else if(currentY < lastY){// moved up
                //             console.log("��");
                //             if ($(elmSelecter).prev() != undefined) {
                //                 try{
                //                    moveTop = $(elmSelecter).prev().offset().top;
                //                 }catch(e){}
                //             }
                //         }
                //         // �붾㈃ �대룞 0.8珥�(800)
                //             $("html,body").stop().animate({
                //                scrollTop: moveTop + 'px'
                //             },800, "easeInOutExpo");
                //          lastY = currentY;
                //     });


                //     /*console.log("��");
                //     var bStartEvent = false; //touchstart �대깽�� 諛쒖깮 �щ� �뚮옒洹�
                //     var nMoveType = -1; //�꾩옱 �먮떒�� �ъ슜�� ��吏곸엫�� 諛⑺뼢
                //     var htTouchInfo = { //touchstart �쒖젏�� 醫뚰몴�� �쒓컙�� ���ν븯湲�
                //         nStartX : -1,
                //         nStartY : -1,
                //         nStartTime : 0
                //     };
                //     //�섏쭅 諛⑺뼢�� �먮떒�섎뒗 湲곗� 湲곗슱湲�
                //     var nHSlope = ((window.innerHeight) / window.innerWidth / 2).toFixed(2) * 1;

                //     function initTouchInfo() { //�곗튂 �뺣낫�ㅼ쓽 媛믪쓣 珥덇린�뷀븯�� �⑥닔
                //         htTouchInfo.nStartX = -1;
                //         htTouchInfo.nStartY = -1;
                //         htTouchInfo.nStartTime = 0;
                //     }

                //     //touchstart 醫뚰몴媛믨낵 鍮꾧탳�섏뿬 �꾩옱 �ъ슜�먯쓽 ��吏곸엫�� �먮떒�섎뒗 �⑥닔
                //     function getMoveType(x, y) {
                //         //0�� �섑룊諛⑺뼢, 1�� �섏쭅諛⑺뼢
                //         var nMoveType = -1;

                //         var nX = Math.abs(htTouchInfo.nStartX - x);
                //         var nY = Math.abs(htTouchInfo.nStartY - y);
                //         var nDis = nX + nY;
                //         //�꾩옱 ��吏곸씤 嫄곕━媛� 湲곗� 嫄곕━蹂대떎 �묒쓣 �� 諛⑺뼢�� �먮떒�섏� �딅뒗��.
                //         if(nDis < 25) { return nMoveType }

                //         var nSlope = parseFloat((nY / nX).toFixed(2), 10);

                //         if(nSlope > nHSlope) {
                //             nMoveType = 1;
                //         } else {
                //             nMoveType = 0;
                //         }

                //         return nMoveType;
                //     }

                //     function onStart(e) {
                //         initTouchInfo(); //�곗튂 �뺣낫瑜� 珥덇린�뷀븳��.
                //         nMoveType = -1; //�댁쟾 �곗튂�� ���� 遺꾩꽍�� ��吏곸엫�� 諛⑺뼢�� 珥덇린�뷀븳��.
                //         //touchstart �대깽�� �쒖젏�� �뺣낫瑜� 媛깆떊�쒕떎.
                //         htTouchInfo.nStartX = e.$value().changedTouches[0].pageX;
                //         htTouchInfo.nStartY = e.$value().changedTouches[0].pageY;
                //         htTouchInfo.nStartTime = e.$value().timeStamp;
                //         bStartEvent = true;
                //     }

                //     function onMove(e) {
                //         if(!bStartEvent) {
                //             return
                //         }
                //         var nX = e.$value().changedTouches[0].pageX;
                //         var nY = e.$value().changedTouches[0].pageY;
                //             console.log(nY);

                //         //�꾩옱 touchmMove�먯꽌 �ъ슜�� �곗튂�� ���� ��吏곸엫�� �먮떒�쒕떎.
                //         nMoveType = getMoveType(nX, nY);

                //         //�꾩옱 �ъ슜�� ��吏곸엫�� �섏쭅�쇰줈 �먮떒�� 湲곕낯 釉뚮씪�곗��� �ㅽ겕濡� 湲곕뒫�� 留됯퀬 �띠쑝硫� �꾨옒 肄붾뱶瑜� �ъ슜�쒕떎.
                //         if(nMoveType === 1) {
                //             e.stop(jindo.$Event.CANCLE_DEFAULT);
                //         }

                //     }

                //     function onEnd(e) {
                //         if(!bStartEvent) {
                //             return
                //         }

                //         //touchmove�먯꽌 ��吏곸엫�� �먮떒�섏� 紐삵뻽�ㅻ㈃ touchend �대깽�몄뿉�� �ㅼ떆 �먮떒�쒕떎.
                //         if(nMoveType < 0) {
                //             var nX = e.$value().changedTouches[0].pageX;
                //             var nY = e.$value().changedTouches[0].pageY;
                //             nMoveType = getMoveType(nX, nY);
                //         }
                //         bStartEvent = false;
                //         nMoveType = -1; //遺꾩꽍�� ��吏곸엫�� 諛⑺뼢�� 珥덇린�뷀븳��.
                //         initTouchInfo(); //�곗튂 �뺣낫瑜� 珥덇린�뷀븳��.
                //     }*/
                // }

            //    var mapContainer = document.getElementById("map"), // 吏��꾨� �쒖떆�� div
            //     mapOption = {
            //         center: new daum.maps.LatLng(37.654342, 126.775856), // 吏��꾩쓽 以묒떖醫뚰몴
            //         level: 3 // 吏��꾩쓽 �뺣� �덈꺼
            //     };

            //     var map = new daum.maps.Map(mapContainer, mapOption); // 吏��꾨� �앹꽦�⑸땲��

            //     var imageSrc = "http://ilsan.chamc.co.kr/img/marker.png", // 留덉빱�대�吏��� 二쇱냼�낅땲��
            //         imageSize = new daum.maps.Size(54, 57), // 留덉빱�대�吏��� �ш린�낅땲��
            //         imageOption = {offset: new daum.maps.Point(25,35)}; // 留덉빱�대�吏��� �듭뀡�낅땲��. 留덉빱�� 醫뚰몴�� �쇱튂�쒗궗 �대�吏� �덉뿉�쒖쓽 醫뚰몴瑜� �ㅼ젙�⑸땲��.
            //     // 留덉빱�� �대�吏��뺣낫瑜� 媛�吏�怨� �덈뒗 留덉빱�대�吏�瑜� �앹꽦�⑸땲��
            //     var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
            //         markerPosition = new daum.maps.LatLng(37.654342, 126.775856); // 留덉빱媛� �쒖떆�� �꾩튂�낅땲��

            //     // 留덉빱媛� �쒖떆�� �꾩튂�낅땲��
            //     var markerPosition  = new daum.maps.LatLng(37.654342, 126.775856);

            //     // 留덉빱瑜� �앹꽦�⑸땲��
            //     var marker = new daum.maps.Marker({
            //         position: markerPosition,
            //         image: markerImage // 留덉빱�대�吏� �ㅼ젙
            //     });

            //     // 留덉빱媛� 吏��� �꾩뿉 �쒖떆�섎룄濡� �ㅼ젙�⑸땲��
            //     marker.setMap(map);

            //     map.setZoomable(true);
            }

            // function logoChange() {
            //     var scroll = document.documentElement.scrollTop;
            //     var hei = document.documentElement.clientHeight;
            //     var img = $(".header_area a.pc img");
            //     var logo = "img/logo.png";
            //     var logoW = "img/logo_white.png";
            //     if( scroll < hei ){
            //         img.attr("src",logoW);
            //     } else {
            //         img.attr("src",logo);
            //     }
            // }
            $(window).scroll(function(){
                // logoChange();
            });

            // el = document.querySelector(".wrap");
            // var mc = new Hammer.Manager(el); //Hammer �대깽�� 愿�由ъ옄 �앹꽦 諛� �대깽�� �깅줉
            // mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
            // mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
            // mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
            // mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

            // mc.on("pinchstart pinchmove", onPinch); //��移� �대깽��- �몃뱾�� �깅줉
            // function onPinch(ev) {
            //     if(ev.type == 'pinchstart') {
            //         initScale = transform.scale || 1;
            //     }
            //     // if(ev.type == 'pinchstart') {
            //     //     initScale = transform.scale || 1;
            //     // }

            //     alert("��");
            // }