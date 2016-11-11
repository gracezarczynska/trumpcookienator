
var trumpList = new Array();
var check = "";
var srcList = new Array();


$(document).bind('DOMSubtreeModified', findTrump());

function findTrump(){
    $('img').each(function(){
      srcList.push(this);
    });
    jQuery.each(srcList, function(key, value){
      check = $(value).attr('alt');
      check2 = $(value).attr("title");
      check3 = $(value).attr("src");

        if (check != null){
          check = check.toLowerCase();
          if (check.indexOf("trump") > -1){
            trumpList.push(srcList[key]);
          }
        }
        if (check2 != null){
          check2 = check2.toLowerCase();
          if (check2.indexOf("trump") > -1 ){
            trumpList.push(srcList[key]);
          }
        }
        if (check3 != null){
          check3 = check3.toLowerCase();
          if (check3.indexOf("trump") > -1){
            trumpList.push(srcList[key]);
          }
        }

      });
    if (trumpList.length > 0){
      Cookienator(trumpList);
    }
}

function Cookienator(imgs) {
    var shapes = {
            "w_rect": ["tumblr_mohxt1V6a91svhqpoo1_500.gif", "tumblr_md0q05wMJb1rxis0k.gif", "tumblr_ml0nmjWpX41snjjivo1_500.gif", "CastDance_322x183.gif", "CookieDawn_322x183.gif", "Painting_322x183.gif"],
            "t_rect": ["CookieMonster-Sitting.jpg", "487961_10150955894571587_1215263686_n.jpg", "534767_10151516100086587_1790492047_n.jpg", "Static.jpg"],
            "square": ["cookie_monster.jpg", "935823_10151502554911587_1547641144_n.jpg", "902502_10151355606796587_45192127_o.jpg", "cookie-monster.jpg", "Cookie_250x250.gif"]
        },
        img_path = "//downloads.cdn.sesame.org/sw/OmNomNomify/";

    function chooseImg(shape) {
        return img_path + shapes[shape][Math.floor(Math.random() * shapes[shape].length)]
    }

    function getShape(h, w) {
        return h === w ? "square" : h > w ? "t_rect" : "w_rect"
    }

    var  img, h, w, shape;
    for (var i = 0, len = imgs.length; i < len; i++) {
        img = imgs[i], h = img.height, w = img.width, s = getShape(h, w);
        img.setAttribute("height", h);
        img.setAttribute("width", w);
        img.src = chooseImg(s)
    };
    return void 0;
}
