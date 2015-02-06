$(document).ready(function(){

    var sidebarStatus=true;

    var width;
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
        $('.sidebar.sidebar-left').animate({left:0},200)
        sidebarStatus=true;

    }
    sideToggle()
    $('.sidebar-toggle').click(sideToggle)
    $('.posts-holder').css('min-height',$(window).height()-60)
})
