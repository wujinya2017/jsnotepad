/* exported $dlg*/
var $dlgnote = (function() {
  var $dlg = $(''
      +'<div class="notepad">'  
        +'<div class="notepad-menubar">'
          +'<ul class="menu-title">'
            +'<li class="title title1">文件(F)</li>'
            +'<li class="title title2">编辑(E)</li>'
            +'<li class="title title3">格式(O)</li>'
            +'<li class="title title4">查看(V)</li>'
            +'<li class="title title5">帮助(H)</li>'
          +'</ul>'
          +'<div class="line"></div>'
          +'<ul class="menus menus1">'
            +'<li class="menu-item">新建(N)<span class="shortcut">Ctrl+N</span></li>'
            +'<li class="menu-item">打开(O)...<span class="shortcut">Ctrl+O</span></li>'
            +'<li class="menu-item">保存(S)<span class="shortcut">Ctrl+S</span></li>'
            +'<li class="menu-item">另存为(A)...</li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">页面设置(U)</li>'
            +'<li class="menu-item">打印(P)...<span class="shortcut">Ctrl+P</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">退出(X)</li>'
          +'</ul>'
          +'<ul class="menus menus2">'
            +'<li class="menu-item">撤销(U)<span class="shortcut">Ctrl+Z</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="disabled menu-item">剪切(T)<span class="shortcut">Ctrl+X</span></li>'
            +'<li class="disabled menu-item">复制(C)<span class="shortcut">Ctrl+C</span></li>'
            +'<li class="menu-item">粘贴(P)<span class="shortcut">Ctrl+V</span></li>'
            +'<li class="disabled menu-item">删除(L)<span class="shortcut">Del</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">查找(F)...<span class="shortcut">Ctrl+F</span></li>'
            +'<li class="menu-item">查找下一个(N)<span class="shortcut">F3</span></li>'
            +'<li class="menu-item">替换(R)...<span class="shortcut">Ctrl+H</span></li>'
            +'<li class="disabled menu-item">转到(G)...<span class="shortcut">Ctrl+G</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">全选(A)<span class="shortcut">Ctrl+A</span></li>'
            +'<li class="menu-item">时间/日期(D)<span class="shortcut">F5</span></li>' 
          +'</ul>'
          +'<ul class="menus menus3">'      
            +'<li class="menu-item">自动换行(W)</li>'
            +'<li class="menu-item setfont">字体(F)...</li>'
          +'</ul>'
          +'<ul class="menus menus4">'      
            +'<li class="disabled menu-item">状态栏(S)</li>'
          +'</ul>'
          +'<ul class="menus menus5">'      
            +'<li class="menu-item">查看帮助(H)</li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">关于记事本(A)</li>'
          +'</ul>'
        +'</div>'
        + '<div class="notepad-editor">'
          + '<textarea spellcheck="false"></textarea>'
        + '</div>'
      +'</div>');
  
  var $settingfont = $(''
      
      
      );
 

  function show() {
    $('body').append($dlg);
    $('.title1').click(function(){
      $('.menus1').css('display','inline-block');
      $('.menus1').siblings('.menus').css('display', 'none');  
    })
    $('.title2').click(function(){
      $('.menus2').css('display','inline-block');
      $('.menus').css('left','54px');
      $('.menus2').siblings('.menus').css('display', 'none');  
    })
    $('.title3').click(function(){
      $('.menus3').css('display','inline-block');
      $('.menus').css('left','108px');
      $('.menus').css('width','150px');
      $('.menus3').siblings('.menus').css('display', 'none');  
    })
    $('.title4').click(function(){
      $('.menus4').css('display','inline-block');
      $('.menus').css('left','162px');
      $('.menus').css('width','150px');
      $('.menus4').siblings('.menus').css('display', 'none');  
    })

    $('.title5').click(function(){
      $('.menus5').css('display','inline-block');
      $('.menus').css('left','216px');
      $('.menus').css('width','150px');
      $('.menus5').siblings('.menus').css('display', 'none');  
    })



    $('.setfont').click(function(){
      $('body').append($settingfont);
    })
  }
  

  return {
    show: show,
  };
}());



function comList() {
  var $comList = $(''
      + '<div class="notepad-com-list">'
        + '<input class="editor" type="text"><br>'
        + '<ul class="list">'
        + '</ul>'
      + '</div>');

  var $editor = $comList.find('.editor'),
      $list = $comList.find('.list'),
      $items;

  var cfg = {
    container: '',
    list: [],
    select: 0,
    width: '200px',
    isFont: false,
    isFontStyle: false,
    selectHandler: null
  };

  function setFontStyle(item, style) {
    if(style === '斜体') {
      item.css({'font-style': 'italic'});
      return;
    }

    if(style === '粗体') {
      item.css({'font-weight': 'bold'});
      return;
    }

    if(style === '粗偏斜体') {
      item.css({'font-weight': 'bold', 'font-style': 'italic'});
      return;
    }
  }

  function fillData() {
    var i = 0, $item;

    if(cfg.isFont) {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<ol class="item"></ol>');
        $item.css({'font-family': cfg.list[i]});
        $list.append($item.html(cfg.list[i]));
      }
    } else if(cfg.isFontStyle) {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<ol class="item"></ol>');
        setFontStyle($item, cfg.list[i]);
        $list.append($item.html(cfg.list[i]));
      }
    } else {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<ol class="item"></ol>');
        $list.append($item.html(cfg.list[i]));
      }
    }

    $items = $list.find('.item');
  }

  function setSelect(n) {
    $($items[n]).addClass('selected');
    $editor.val(cfg.list[n]);
    $editor.select();
  }

  function init() {
    var $oldList = $(cfg.container).find('.notepad-com-list');
    if($oldList.length !== 0) $oldList.remove();
     
    $(cfg.container).append($comList);
    
    $comList.css({ width: cfg.width });
    fillData();
    setSelect(cfg.select);
  }

  this.show = function(conf) {
    $.extend(cfg, conf);
    init();

    $list.click(function(e) {
      $($items[cfg.select]).removeClass('selected');
      cfg.select = cfg.list.indexOf($(e.target).html());
      $($items[cfg.select]).addClass('selected');
      $editor.val(cfg.list[cfg.select]);
      $editor.select();
      cfg.selectHandler(cfg.select);
    });

    $editor.keyup(function() {
      var i = 0;

      for(i=0; i<cfg.list.length; i++) {
        if(cfg.list[i].indexOf($editor.val()) === 0) break;
      }

      if(i === cfg.list.length) return;

      $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
      $($items[cfg.select]).removeClass('selected');
      $($items[i]).addClass('selected');
      cfg.select = i;
    });
  };
}
