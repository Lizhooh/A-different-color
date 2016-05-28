
    /*
     *  Time        : 2016-05-28
     *  Application : 颜色库
     *  Author      : lizhooh
     */

    $(function(){
        var free   = document.getElementById("free"),
            onebtn = document.getElementById("onebtn"),
            buttonName = '',

            button = [
                '216安全颜色',
                '柔和色',
                '英文名颜色',
                'rgba转换',
                '红色',
                '绿色',
                '蓝色',
                '黄色',
                '紫色',
                '紫红色',
                '黄红色',
                '天蓝色',
                '蓝绿色',
                '黄红色',
                '灰色',
            ],

            scroll = {
                X: function(){      /*滚动条的位置*/
                    return document.documentElement.scrollTop || document.body.scrollTop;
                },

                H: function(){      /*滚屏长度*/
                    return document.documentElement.scrollHeight || document.body.scrollHeight;
                },

                h: function(){      /*滚动条长度*/
                    return  document.documentElement.clientHeight || document.body.clientHeight;
                },

                Speed: function(flag){      /* true:top, false:bottom*/
                    if(flag)
                        return (this.X()/4) < 700 ? 700 : (this.X()/4);
                    else
                        return ((this.H()-this.h())/4) < 900 ? 900 : ((this.H()-this.h())/4);
                },

                To: function(index, flag){
                    $('html,body').stop().animate({scrollTop: index}, this.Speed(flag));
                }
            },

            Color = {
                /*
                 *  (255,n,         n)      红       red
                 *  (n,     255,    n)      绿       green
                 *  (n,     n,      255)    蓝       blue
                 *  (255,   255,    n)      黄       yellow
                 *  (255,   n,      255)    紫       purple
                 *  (255,   0,      n)      紫红      purplered
                 *  (255,   n,      0)      黄红      yellowred
                 *  (n,     255,    255)    天蓝      azure
                 *  (0,     255,    n)      蓝绿      bluegreen
                 *  (n,     255,    0)      黄绿      yellowgreen
                 *
                var*/
                /*英文名颜色*/
                Colorname: [
                    { key   :    "aliceblue"        ,     value :   "240,248,255"   }   ,
                    { key   :    "antiquewhite"     ,     value :   "250,235,215"   }   ,
                    { key   :    "aqua"             ,     value :   "0,255,255"     }   ,
                    { key   :    "aquamarine"       ,     value :   "127,255,212"   }   ,
                    { key   :    "azure"            ,     value :   "240,255,255"   }   ,
                    { key   :    "beige"            ,     value :   "245,245,220"   }   ,
                    { key   :    "bisque"           ,     value :   "255,228,196"   }   ,
                    { key   :    "black"            ,     value :   "0,0,0"         }   ,

                    { key   :    "blanchedalmond"   ,     value :   "255,235,205"   }   ,
                    { key   :    "blue"             ,     value :   "0,0,255"       }   ,
                    { key   :    "blueviolet"       ,     value :   "138,43,226"    }   ,
                    { key   :    "brown"            ,     value :   "165,42,42"     }   ,
                    { key   :    "burlywood"        ,     value :   "222,184,135"   }   ,
                    { key   :    "cadetblue"        ,     value :   "95,158,160"    }   ,
                    { key   :    "chartreuse"       ,     value :   "127,255,0"     }   ,
                    { key   :    "chocolate"        ,     value :   "210,105,30"    }   ,
                    { key   :    "coral"            ,     value :   "255,127,80"    }   ,

                    { key   :    "cornflowerblue"   ,     value :   "100,149,237"   }   ,
                    { key   :    "cornsilk"         ,     value :   "255,248,220"   }   ,
                    { key   :    "crimson"          ,     value :   "220,20,60"     }   ,
                    { key   :    "cyan"             ,     value :   "0,255,255"     }   ,
                    { key   :    "darkblue"         ,     value :   "0,0,139"       }   ,
                    { key   :    "darkcyan"         ,     value :   "0,139,139"     }   ,
                    { key   :    "darkgoldenrod"    ,     value :   "184,134,11"    }   ,
                    { key   :    "darkgray"         ,     value :   "169,169,169"   }   ,
                    { key   :    "darkgreen"        ,     value :   "0,100,0"       }   ,

                    { key   :    "darkkhaki"        ,     value :   "189,183,107"   }   ,
                    { key   :    "darkmagenta"      ,     value :   "139,0,139"     }   ,
                    { key   :    "darkolivegreen"   ,     value :   "85,107,47"     }   ,
                    { key   :    "darkorange"       ,     value :   "255,140,0"     }   ,
                    { key   :    "darkorchid"       ,     value :   "153,50,204"    }   ,
                    { key   :    "darkred"          ,     value :   "139,0,0"       }   ,
                    { key   :    "darksalmon"       ,     value :   "233,150,122"   }   ,
                    { key   :    "darkseagreen"     ,     value :   "143,188,143"   }   ,

                    { key   :    "darkslateblue"    ,     value :   "72,61,139"     }   ,
                    { key   :    "darkslategray"    ,     value :   "47,79,79"      }   ,
                    { key   :    "darkturquoise"    ,     value :   "0,206,209"     }   ,
                    { key   :    "darkviolet"       ,     value :   "148,0,211"     }   ,
                    { key   :    "deeppink"         ,     value :   "255,20,147"    }   ,
                    { key   :    "deepskyblue"      ,     value :   "0,191,255"     }   ,
                    { key   :    "dimgray"          ,     value :   "105,105,105"   }   ,

                    { key   :    "dodgerblue"       ,     value :   "30,144,255"    }   ,
                    { key   :    "firebrick"        ,     value :   "178,34,34"     }   ,
                    { key   :    "floralwhite"      ,     value :   "255,250,240"   }   ,
                    { key   :    "forestgreen"      ,     value :   "34,139,34"     }   ,
                    { key   :    "fuchsia"          ,     value :   "255,0,255"     }   ,
                    { key   :    "gainsboro"        ,     value :   "220,220,220"   }   ,
                    { key   :    "ghostwhite"       ,     value :   "248,248,255"   }   ,
                    { key   :    "gold"             ,     value :   "255,215,0"     }   ,
                    { key   :    "goldenrod"        ,     value :   "218,165,32"    }   ,

                    { key   :    "gray"             ,     value :   "128,128,128"   }   ,
                    { key   :    "green"            ,     value :   "0,128,0"       }   ,
                    { key   :    "greenyellow"      ,     value :   "173,255,47"    }   ,
                    { key   :    "honeydew"         ,     value :   "240,255,240"   }   ,
                    { key   :    "hotpink"          ,     value :   "255,105,180"   }   ,
                    { key   :    "indianred"        ,     value :   "205,92,92"     }   ,
                    { key   :    "indigo"           ,     value :   "75,0,130"      }   ,
                    { key   :    "ivory"            ,     value :   "255,255,240"   }   ,
                    { key   :    "khaki"            ,     value :   "240,230,140"   }   ,
                    { key   :    "lavender"         ,     value :   "230,230,250"   }   ,

                    { key   :    "lavenderblush"    ,     value :   "255,240,245"   }   ,
                    { key   :    "lawngreen"        ,     value :   "124,252,0"     }   ,
                    { key   :    "lemonchiffon"     ,     value :   "255,250,205"   }   ,
                    { key   :    "lightblue"        ,     value :   "173,216,230"   }   ,
                    { key   :    "lightcoral"       ,     value :   "240,128,128"   }   ,
                    { key   :    "lightcyan"        ,     value :   "224,255,255"   }   ,

                    { key   :    "lightgreen"       ,     value :   "211,211,211"   }   ,
                    { key   :    "lightgrey"        ,     value :   "144,238,144"   }   ,
                    { key   :    "lightpink"        ,     value :   "255,182,193"   }   ,
                    { key   :    "lightsalmon"      ,     value :   "255,160,122"   }   ,
                    { key   :    "lightseagreen"    ,     value :   "32,178,170"    }   ,
                    { key   :    "lightskyblue"     ,     value :   "135,206,250"   }   ,
                    { key   :    "lightslategray"   ,     value :   "119,136,153"   }   ,

                    { key   :    "lightsteelblue"   ,     value :   "176,196,222"   }   ,
                    { key   :    "lightyellow"      ,     value :   "255,255,224"   }   ,
                    { key   :    "lime"             ,     value :   "0,255,0"       }   ,
                    { key   :    "limegreen"        ,     value :   "50,205,50"     }   ,
                    { key   :    "linen"            ,     value :   "250,240,230"   }   ,
                    { key   :    "magenta"          ,     value :   "255,0,255"     }   ,
                    { key   :    "maroon"           ,     value :   "128,0,0"       }   ,

                    { key   :    "mediumblue"       ,     value :   "0,0,205"       }   ,
                    { key   :    "mediumorchid"     ,     value :   "186,85,211"    }   ,
                    { key   :    "mediumpurple"     ,     value :   "147,112,219"   }   ,
                    { key   :    "mediumseagreen"   ,     value :   "60,179,113"    }   ,
                    { key   :    "mediumslateblue"  ,     value :   "123,104,238"   }   ,

                    { key   :    "mediumturquoise"  ,     value :   "72,209,204"    }   ,
                    { key   :    "mediumvioletred"  ,     value :   "199,21,133"    }   ,
                    { key   :    "midnightblue"     ,     value :   "25,25,112"     }   ,
                    { key   :    "mintcream"        ,     value :   "245,255,250"   }   ,
                    { key   :    "mistyrose"        ,     value :   "255,228,225"   }   ,
                    { key   :    "moccasin"         ,     value :   "255,228,181"   }   ,
                    { key   :    "navajowhite"      ,     value :   "255,222,173"   }   ,
                    { key   :    "navy"             ,     value :   "0,0,128"       }   ,

                    { key   :    "oldlace"          ,     value :   "253,245,230"   }   ,
                    { key   :    "olive"            ,     value :   "128,128,0"     }   ,
                    { key   :    "olivedrab"        ,     value :   "107,142,35"    }   ,
                    { key   :    "orange"           ,     value :   "255,165,0"     }   ,
                    { key   :    "orangered"        ,     value :   "255,69,0"      }   ,
                    { key   :    "orchid"           ,     value :   "218,112,214"   }   ,
                    { key   :    "palegoldenrod"    ,     value :   "238,232,170"   }   ,
                    { key   :    "palegreen"        ,     value :   "152,251,152"   }   ,
                    { key   :    "paleturquoise"    ,     value :   "175,238,238"   }   ,

                    { key   :    "palevioletred"    ,     value :   "219,112,147"   }   ,
                    { key   :    "papayawhip"       ,     value :   "255,239,213"   }   ,
                    { key   :    "peachpuff"        ,     value :   "255,218,185"   }   ,
                    { key   :    "peru"             ,     value :   "205,133,63"    }   ,
                    { key   :    "pink"             ,     value :   "255,192,203"   }   ,
                    { key   :    "plum"             ,     value :   "221,160,221"   }   ,
                    { key   :    "powderblue"       ,     value :   "176,224,230"   }   ,
                    { key   :    "purple"           ,     value :   "128,0,128"     }   ,
                    { key   :    "red"              ,     value :   "255,0,0"       }   ,
                    { key   :    "rosybrown"        ,     value :   "188,143,143"   }   ,

                    { key   :    "royalblue"        ,     value :   "65,105,225"    }   ,
                    { key   :    "saddlebrown"      ,     value :   "139,69,19"     }   ,
                    { key   :    "salmon"           ,     value :   "250,128,114"   }   ,
                    { key   :    "sandybrown"       ,     value :   "244,164,96"    }   ,
                    { key   :    "seagreen"         ,     value :   "46,139,87"     }   ,
                    { key   :    "seashell"         ,     value :   "255,245,238"   }   ,
                    { key   :    "sienna"           ,     value :   "160,82,45"     }   ,
                    { key   :    "silver"           ,     value :   "192,192,192"   }   ,
                    { key   :    "skyblue"          ,     value :   "135,206,235"   }   ,

                    { key   :    "slateblue"        ,     value :   "106,90,205"    }   ,
                    { key   :    "slategray"        ,     value :   "112,128,144"   }   ,
                    { key   :    "snow"             ,     value :   "255,250,250"   }   ,
                    { key   :    "springgreen"      ,     value :   "0,255,127"     }   ,
                    { key   :    "steelblue"        ,     value :   "70,130,180"    }   ,
                    { key   :    "tan"              ,     value :   "210,180,140"   }   ,
                    { key   :    "teal"             ,     value :   "0,128,128"     }   ,
                    { key   :    "thistle"          ,     value :   "216,191,216"   }   ,
                    { key   :    "tomato"           ,     value :   "255,99,71"     }   ,
                    { key   :    "turquoise"        ,     value :   "64,224,208"    }   ,

                    { key   :    "violet"           ,     value :   "238,130,238"   }   ,
                    { key   :    "wheat"            ,     value :   "245,222,179"   }   ,
                    { key   :    "white"            ,     value :   "255,255,255"   }   ,
                    { key   :    "whitesmoke"       ,     value :   "245,245,245"   }   ,
                    { key   :    "yellow"           ,     value :   "255,255,0"     }   ,
                    { key   :    "yellowgreen"      ,     value :   "154,205,50"    }   ,
                ],

                s:                  "0123456789ABCDEF",
                a:                  256,
                b:                  2,
                len:                128,

                Color216:           [[255, 204, 153, 102, 51, 0], ['FF', 'CC', '99', '66', '33', '00']],
                Colorgray:          [[], []],
                Colorred:           [[], []],
                Colorgreen:         [[], []],
                Colorblue:          [[], []],
                Coloryellow:        [[], []],
                Colorpurple:        [[], []],
                Colorpurplered:     [[], []],
                Coloryellowred:     [[], []],
                Colorazure:         [[], []],
                Colorbluegreen:     [[], []],
                Coloryellowgreen:   [[], []],
                Colorsoft:          [[255, 204, 153, 102], ['FF', 'CC', '99', '66']],

                /*初始化颜色*/
                init: function(Colors){
                    for(var i=0; i<=this.len; i++){
                        Colors[0][i] = this.b*i-1;
                        Colors[0][0] = 0;

                        var n = Colors[0][i] % 16,
                            m = parseInt(Colors[0][i] / 16, 10) % 16;

                        Colors[1][i] = this.s[m] + this.s[n];
                    }
                },

                construct:  function(){
                    var btnhtml = '';

                    for(var i=0; i<button.length; i++){
                        btnhtml += '<button class="button">' + button[i] + '</button>';
                    }
                    $(".left-Piece").html(btnhtml).children().first().css("background-color", "#FFFFCC");

                    /*红色rgb(255, n, n)*/
                    this.init(this.Colorred);

                    /*绿色rgb(n, 255, n)*/
                    this.init(this.Colorgreen);

                    /*蓝色rgb(n, n, 255)*/
                    this.init(this.Colorblue);

                    /*黄色rgb(255, 255, n)*/
                    this.init(this.Coloryellow);

                    /*紫色rgb(255, n, 255)*/
                    this.init(this.Colorpurple);

                    /*紫红色rgb(255, 0, n)*/
                    this.init(this.Colorpurplered);

                    /*黄红色rgb(255, n, 0)*/
                    this.init(this.Coloryellowred);

                    /*天蓝色rgb(n, 255, 255)*/
                    this.init(this.Colorazure);

                    /*蓝绿色rgb(0, 255, n)*/
                    this.init(this.Colorbluegreen);

                    /*rgb(n, 255, 0)*/
                    this.init(this.Coloryellowgreen);

                    this.Color_216(free);

                    return true;
                },

                boxstr: function(Color, k, j, i){       /*颜色盒子*/
                    /*rgb => Hex */
                    k = parseInt(k, 10), j = parseInt(j, 10), i = parseInt(i, 10);

                    var str =
                    '<li>' +
                        '<div class="pick">' +
                            '<div class="box" onselectstart="return false;" style="background-color: rgba(' + Color[0][k] + ',' + Color[0][j] + ',' + Color[0][i] +', 1);"></div>' +
                            '<table>' +
                                '<tr>' +
                                    '<td>Hex</td> <td>#'+ Color[1][k] + Color[1][j] + Color[1][i] + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>Rgb</td> <td>'+ Color[0][k] + ',' + Color[0][j] + ',' + Color[0][i] + '</td>' +
                                '</tr>' +
                            '</table>' +
                        '</div>' +
                    '</li>';
                    return str;
                },

                Color_216: function(free){      /*215安全色*/
                    var len = this.Color216[0].length,
                        Htmlstr = '';

                    for(var k=0; k<len; k++){
                        for(var j=0; j<len; j++){
                            for(var i=0; i<len; i++){
                                Htmlstr += this.boxstr(this.Color216, k, j, i);
                            }
                        }
                    }

                    free.innerHTML = Htmlstr;
                },

                soft: function(free){           /*柔和色*/
                    var len = this.Colorsoft[0].length,
                        Htmlstr = '';

                    for(var k=0; k<len; k++){
                        for(var j=0; j<len; j++){
                            for(var i=0; i<len; i++){
                                Htmlstr += this.boxstr(this.Colorsoft, k, j, i);
                            }
                        }
                    }

                    free.innerHTML = Htmlstr;
                },

                Eng: function(free){            /*英文色*/
                    var Htmlstr = '',
                        len = this.Colorname.length;

        //              //非线性排序
        //              this.Colorname.sort(
        //                  function(x, y){
        //                      var xs = x.value.split(','),
        //                          ys = y.value.split(','),
        //                          ch = "0123456789ABCDEF",
        //                          XHex = '',
        //                          YHex = '',
        //                          i = xs.length;
        //
        //                      while(i--){
        //                          xs[i] = parseInt(xs[i], 10);
        //                          ys[i] = parseInt(ys[i], 10);
        //
        //                          XHex += ch[xs[i] % 16] + ch[parseInt(xs[i] / 16, 10) % 16];
        //                          YHex += ch[ys[i] % 16] + ch[parseInt(ys[i] / 16, 10) % 16];
        //                      }
        //
        ////                        while(i--){
        ////                            if(xs[i] > ys[i]) return 1;
        ////                            if(xs[i] < ys[i]) return -1;
        ////                        }
        //
        ////                        return 0;
        //
        //                      return XHex <= YHex ? 1 : -1;
        //                  }
        //              );

                    for(var i=0; i<len; i++){
                        Htmlstr +=
                        '<li>' +
                            '<div class="pick">' +
                                '<div class="box" onselectstart="return false;" style="background-color: rgba(' + this.Colorname[i].value +', 1);"></div>' +
                                '<table>' +
                                    '<tr>' +
                                        '<td style="padding-left: 0px;">Eng</td> <td>' + this.Colorname[i].key + '</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td style="padding-left: 0px;">Rgb</td> <td>'+ this.Colorname[i].value + '</td>' +
                                    '</tr>' +
                                '</table>' +
                            '</div>' +
                        '</li>';
                    }

                    free.innerHTML = Htmlstr;
                },

                gray: function(free){           /*灰色*/
                    var len = this.s.length,
                        Htmlstr = '';

                    /*灰色rgb(n, n, n)*/
                    for(var i=0; i<len; i++){
                        this.Colorgray[0][i] = i*17;
                        this.Colorgray[1][i] = this.s[i] + this.s[i];
                    }

                    for(var i=len-1; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorgray, i, i, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                red: function(free){            /*红色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorred, this.len, i, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                green: function(free){          /*绿色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorgreen, i, this.len, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                blue: function(free){           /*蓝色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorblue, i, i, this.len);
                    }

                    free.innerHTML = Htmlstr;
                },

                yellow: function(free){         /*黄色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Coloryellow, this.len, this.len, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                purple: function(free){         /*紫色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorpurple, this.len, i, this.len);
                    }

                    free.innerHTML = Htmlstr;
                },

                purplered: function(free){      /*紫红色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorpurplered, this.len, 0, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                yellowred: function(free){      /*黄红色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Coloryellowred, this.len, i, 0);
                    }

                    free.innerHTML = Htmlstr;
                },

                azure: function(free){          /*天蓝色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorazure, i, this.len, this.len);
                    }

                    free.innerHTML = Htmlstr;
                },

                bluegreen: function(free){      /*蓝绿色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Colorbluegreen, 0, this.len, i);
                    }

                    free.innerHTML = Htmlstr;
                },

                yellowgreen: function(free){    /*黄绿色*/
                    var Htmlstr = '';

                    for(var i=this.len; i>=0; i--){
                        Htmlstr += this.boxstr(this.Coloryellowgreen, i, this.len, 0);
                    }

                    free.innerHTML = Htmlstr;
                },
            },

            Rgba = {
                callback: function(idname){
                    $("#" + idname).bind("keydown keyup",
                        function(){
                            var value = $(this).val(),
                                len = value.length;

                            /*过滤当前输入*/
                            if( !((value[len - 1] >= '0' && value[len - 1] <= '9') && len <= 3)){
                                $(this).val(value.substr(0, len-1));
                            }

                            if(parseInt(value, 10) > 255){
                                $(this).val(value.substr(0, len-1));
                            }

                            Rgba.show();
                        }
                    );

                },

                checkout: function(idname, callback){   /*回调函数*/
                    if(typeof callback === 'function'){
                        callback(idname);
                    }
                },

                construct:  function(){
                    var idname = ['r', 'g', 'b'],
                        l = idname.length;

                    for(var i in idname){
                        this.checkout(idname[i], this.callback);
                    }

                    this.checkout('a',
                        function(idname){
                            $("#" + idname).bind("keydown keyup",
                                function(){
                                    var value = $(this).val(),
                                        len = value.length;

                                    /*过滤当前输入*/
                                    if(value[0] === '1' && value[1] === '.'){
                                        $(this).val(value.substr(0, len-1));
                                    }

                                    /*过滤多个小数点*/
                                    if(value[len - 1] === '.' && value[len - 2] != '.' && value[len - 3] != '.' && len <= 4)
                                        return;

                                    /*过滤非数字*/
                                    if( !((value[len - 1] >= '0' && value[len - 1] <= '9') && len <= 4)){
                                        $(this).val(value.substr(0, len-1));
                                    }

                                    /*过滤 > 1的数值*/
                                    if(parseFloat(value, 10) > 1){
                                        $(this).val(value.substr(0, len-1));
                                    }

                                    Rgba.show();
                                }
                            );
                        }
                    );

                    this.checkout('hex',
                        function(idname){
                            $("#" + idname).bind("keydown keyup",
                                function(){
                                    var value = $(this).val(),
                                        len = value.length;

                                    /*过滤当前输入*/
                                    if(!((value[len - 1] >= '0' && value[len - 1] <= '9' && len <= 6) ||
                                         (value[len - 1] >= 'A' && value[len - 1] <= 'F' && len <= 6) ||
                                         (value[len - 1] >= 'a' && value[len - 1] <= 'f' && len <= 6))){
                                        $(this).val(value.substr(0, len-1));
                                    }

                                    /****show****/
                                    var r = $("#r"),
                                        g = $("#g"),
                                        b = $("#b"),
                                        a = $("#a"),
                                        hex = $(this).val();
                                        str = '';

                                    if(hex === '#') return;

                                    var returnto = function(hex1, hex2){ /*16 => 10*/
                                        hex1.toUpperCase();
                                        hex2.toUpperCase();

                                        /*转换失败中断函数执行*/
                                        return parseInt(parseInt(hex1, 16)*16 + parseInt(hex2, 16), 10);
                                    };

                                    r.val(returnto(hex[0], hex[1]));
                                    g.val(returnto(hex[2], hex[3]));
                                    b.val(returnto(hex[4], hex[5]));

                                    str +=  '<span>browse</span>' +
                                        '<div class="box" onselectstart="return false;" style="background-color: rgba(' + r.val() + ',' + g.val() + ',' + b.val() + ',' + a.val() + ');"></div>' +
                                        '<table>' +
                                            '<tr>' +
                                                '<td>Hex:</td> <td>#' + hex + '</td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td>Rgba:</td> <td>' + r.val() + ',' + g.val() + ',' + b.val() + ',' + a.val() + '</td>' +
                                            '</tr>'
                                        '</table>';

                                    $(".rgbabox").html(str);
                                }
                            );
                        }
                    );
                },

                show: function(){
                    var r = $("#r").val(),
                        g = $("#g").val(),
                        b = $("#b").val(),
                        a = $("#a").val(),
                        hex = $("#hex");
                        str = '';

                    /*数值不存在,退出函数*/
                    if(r === '' || g === '' || b === '' || a === '') return;

                    var to = function(n){ /*10 => 16*/
                        var s = '0123456789ABCDEF';
                        return s[parseInt(n / 16, 10) % 16] + s[n % 16];
                    };

                    var R = to(r),
                        G = to(g),
                        B = to(b);

                    hex.val(R + G + B);

                    str +=  '<span>browse</span>' +
                            '<div class="box" onselectstart="return false;" style="background-color: rgba(' + r + ',' + g + ',' + b + ',' + a + ');"></div>' +
                            '<table>' +
                                '<tr>' +
                                    '<td>Hex:</td> <td>#' + R + G + B + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>Rgba:</td> <td>' + r + ',' + g + ',' + b + ',' + a + '</td>' +
                                '</tr>'
                            '</table>';

                    $(".rgbabox").html(str);

                    return true;
                }

            };

        Rgba.construct();
        Rgba.show();
        Color.construct();

        $(".left-Piece .button").click(
            function(){
                var con = $(this).text();

                if(buttonName === con)  /*防止多次点击按钮，产生闪烁*/
                    return;

                $(free).hide();
                buttonName = con;

                /*改变背景颜色*/
                $(this).css('background-color', '#FFFFCC').siblings().css('background-color', 'white');

                $(".right-Piece > .title").text(con);
                $(".rgba").hide();

                switch(con){
                    case '216安全颜色':
                        Color.Color_216(free);
                        break;
                    case '柔和色':
                        Color.soft(free);
                        break;
                    case '英文名颜色':
                        Color.Eng(free);
                        break;
                    case '红色':
                        Color.red(free);
                        break;
                    case '绿色':
                        Color.green(free);
                        break;
                    case '蓝色':
                        Color.blue(free);
                        break;
                    case '黄色':
                        Color.yellow(free);
                        break;
                    case '紫色':
                        Color.purple(free);
                        break;
                    case '紫红色':
                        Color.purplered(free);
                        break;
                    case '黄红色':
                        Color.yellowred(free);
                        break;
                    case '天蓝色':
                        Color.azure(free);
                        break;
                    case '蓝绿色':
                        Color.bluegreen(free);
                        break;
                    case '黄绿色':
                        Color.yellowgreen(free);
                        break;
                    case '灰色':
                        Color.gray(free);
                        break;
                    case "rgba转换":
                        free.innerHTML = '';
                        $(".rgba").stop().fadeIn(1500);
                        break;
                    default:
                        break;
                }

                $(free).stop().fadeIn(1500);
            }
        );

        $(".totop").click(
            function(){
                scroll.To(0, true);
            }
        );

        $(".tobottom").click(
            function(){
                scroll.To(scroll.H(), false);
            }
        );

        /*

        $(window).scroll(
            function(){
                //监控滚动条
            }
        );

        window.onscroll = function(){
            //监控滚动条
        };

        */

    });




