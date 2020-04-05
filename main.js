/* exported $dlg*/
var $dlgnote = (function() {
  var $dlg = $(''
      +'<div class="notepad">'  
        +'<div class="notepad-menubar">'
          +'<ul class="menu-title">'
            +'<li class="title">文件(F)</li>'
            +'<li class="title">编辑(E)</li>'
            +'<li class="title">格式(O)</li>'
            +'<li class="title">查看(V)</li>'
            +'<li class="title">帮助(H)</li>'
          +'</ul>'
          +'<div class="line"></div>'
          +'<ul class="menus">'
            +'<li class="menu-item">新建(N)<span class="shortcut">Ctrl+N</span></li>'
            +'<li class="menu-item">打开(O)...<span class="shortcut">Ctrl+O</span></li>'
            +'<li class="menu-item">保存(S)<span class="shortcut">Ctrl+S</span></li>'
            +'<li class="menu-item">另存为(A)...</li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">页面设置(U)</li>'
            +'<li class="disabled menu-item">打印(P)...<span class="shortcut">Ctrl+P</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">退出(X)</li>'
          +'</ul>'
        +'</div>'
      +'</div>'
  );
  
 
  function show() {
    $('body').append($dlg);
    $('.title').click({
      $('.menus').css('display','inline');
     
    })
  }
  
  return {
    show: show,
  };
}());
