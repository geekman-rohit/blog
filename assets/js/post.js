$(document).ready(function(){

    var sidebarStatus=true;

    var width;

if($(window).width()<992) {

        $('.sidebar.sidebar-left').on("swipeleft",function(){
              hideSideBar();
        });
        /*
        $('body').on("swiperight",function(){
            showSideBar();
        });
        */
}
    var sideToggle=function(){
        if(sidebarStatus) {

            hideSideBar();
        }
        else {

            showSideBar();

        }
    }

    var hideSideBar=function(){

        width=$('.sidebar.sidebar-left').width()
        $('.sidebar.sidebar-left').animate({left:-width},200)
        sidebarStatus=false;
        $('.sidebar-toggle').removeClass('active')

    }

    var showSideBar=function(){

        width=$('.sidebar.sidebar-left').width()
        $('.sidebar.sidebar-left').animate({left:0},200)
        sidebarStatus=true;
        $('.sidebar-toggle').addClass('active')

    }
    $('.sidebar').css('height',$(window).height())
    sideToggle()
    $('.sidebar-toggle').click(sideToggle)
    $('img').on("load",hideSideBar)
    $('.posts-holder').css('min-height',$(window).height()-60)
})
