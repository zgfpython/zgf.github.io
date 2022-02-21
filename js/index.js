$(function(){
             //加载模态框
             var $but = $('.btn-s');
             $('#myModal').modal();
         
             $(document).ready(function () {
                 $("#select").bind("change",function(){
                     if($(this).val()==0){
                         return;
                     }
                     else{
                         $("p").text($(this).val());
                     }
                 });
             });
             //选择触发事件
            function goUrl(obj){
                location.href=obj.value;
            }
            $('.btn-n').css({"background":"#469ad9"});
            alert(this.$('#imgs'));
            


            
});
