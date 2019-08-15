$(function(){
  function buildHTML(message){
    var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<div class=message>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${imagehtml}
                    </div>
                  </div> `
    return html;
　}

$('#new_message').on('submit', function(){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
   .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  })
  //$.ajax().doneまたは$.ajax().failとなっている
    })
  //ここでsubmitにonした時の一連の流れは終わり
  });
  //ここでjsファイルの記述終わり
  
 
 
 
 
  // return false;




//   function buildHTML(message){
//     var insertImage = '';
//     if (message.image_url) {
//       insertImage = `<img src="${message.image_url}">`;
//     }
//     var html = `<div class='message' data-id="${message.id}">
//                   <div class='upper-mesaage__user-name'>
//                     ${message.name}
//                   </div>
//                   <div class='upper-message__date'>
//                     ${message.created_at}
//                   </div>
//                   <div class='lower-message'>
//                     ${message.body}
//                       </div>
//                     ${insertImage}
//                   </div>
//                 </div>`;
//     return html;
//   }

//   $('#new_message').on('submit', function(e) {
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })

//     .done(function(data) {
//       var html = buildHTML(data);
//       $('.messages').append(html)
//       $('#message_body').val('')
//       $('.message').animate({scrollTop: $(".message")[0].scrollHeight}, 1500);
//     })
//     .fail(function(){
//       alert('メッセージの送信に失敗しました');
//     })
//   })

//   function scroll() {
//     $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast')
//   }

//   var interval = setInterval(function() {
//       if (window.location.href.match(/\/groups\/\d+\/messages/)) {
//     $.ajax({
//       url: location.href.json,
//       type: 'GET',
//       dataType: 'json'
//     })

//     .done(function(json) {
//       var last_message_id = $('.message:last').data('id');
//       var insertHTML = '';
//       json.messages.forEach(function(message) {
//         if (message.id > last_message_id ) {
//           insertHTML += buildHTML(message);
//         }
//       });
//       $('..messages').append(insertHTML);
//     scroll()
//     })

//     .fail(function(json) {
//       alert('自動更新に失敗しました');
//     });
//     } else {
//     clearInterval(interval);
//    }} , 5 * 1000 );
// });
// ©