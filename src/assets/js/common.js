$(function(){
    $('.layui-colla-item li.active').eq(0)//初始化的时候初始化左侧菜单的状态
        .parents('.layui-colla-content').addClass('layui-show')
        .parents('.layui-colla-item').addClass('active');

    $('.layui-colla-item li').click(function(){
        $('.layui-colla-item li').removeClass('active');
        $(this).addClass('active');
    });
    $('.selectGroup .item').click(function(){//选择项的样式改变
        $(this).addClass('active').siblings().removeClass('active');
    });
    layui.use('element', function(){
        var element = layui.element;
        element.on('collapse(aside)', function(data){
            if(data.show){
                $(data.title).parent().addClass('active').siblings().removeClass('active');
            }else{
                $(data.title).parent().removeClass('active');
            }
        });
    });
});

