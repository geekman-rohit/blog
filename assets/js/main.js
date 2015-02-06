$(document).ready(function(){

    var sidebarStatus=false;
    var firstTime=true;
    var width;

    $(document).on("swipeleft",function(){
          showSideBar();
    });
    $(document).on("swiperight",function(){
          hideSideBar();
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

    }

    var showSideBar=function(){

        width=$('.sidebar.sidebar-left').width()
        if(firstTime) {
            $('.sidebar.sidebar-left').css('left',-width)
            $('.sidebar.sidebar-left').show()
            firstTime=false

        }

        $('.sidebar.sidebar-left').show()
        $('.sidebar.sidebar-left').animate({left:0},200)
        sidebarStatus=true;

    }



    $('.sidebar-toggle').click(sideToggle)
    $('.posts-holder').css('min-height',$(window).height())

})
