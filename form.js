function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6283831393134',
    walink2 = 'Halo kak, saya ingin membuat website',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua Formulir lalu klik Send.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_select2 = $("#wa_select1 :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_email1 = $("#wa_email").val(),
    input_number1 = $("#wa_number").val(),
    input_url1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + " " +  "untuk" + " " + input_select2 + " " +  "dengan" + " " + input_select1 + '%0A%0A' +
    '*Nama* : ' + input_name1 + '%0A' +
    '*Email* : ' + input_email1 + '%0A' +
    '*Pilihan Paket* : ' + input_select1 + '%0A' +
    '*No Telp* : ' + input_number1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});
