$(document).ready(function(){

    var sidebarStatus=false;
    var firstTime=true;
    var width;

    $('body').on("swipeleft",function(){
          hideSideBar();
    });
    $('body').on("swiperight",function(){
        showSideBar();
    });

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
        if(firstTime) {
            $('.sidebar.sidebar-left').css('left',-width)
            $('.sidebar.sidebar-left').show()
            firstTime=false
            $('.sidebar-toggle').addClass('active')
        }

        $('.sidebar.sidebar-left').show()
        $('.sidebar.sidebar-left').animate({left:0},200)
        sidebarStatus=true;

    }



    $('.sidebar-toggle').click(sideToggle)
    $('.posts-holder').css('min-height',$(window).height())

})
