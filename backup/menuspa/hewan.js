$(document).ready(function(){
    $(".pilih").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_data = split[1];
        
        $(".pilih").removeClass('slide');
        $("#um_"+id_data).addClass('slide');
        
        $(".konten_").slideUp();
        
        $("#isi_1").slideUp();
        $("#isi_2").slideUp();
        $("#isi_3").slideUp();
        $("#isi_4").slideUp();
        $("#isi_"+id_data).slideToggle();
    });
});