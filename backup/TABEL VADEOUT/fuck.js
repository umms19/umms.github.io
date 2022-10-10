$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_um = rid[1];
        let mhs = $('#mhs_'+id_um).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`yakin deck mau di hapus ${mhs}?`);
            if(!konfirmasi) return;

            $('#um_'+id_um).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})
