// $(document).ready(function() {
//   $('li').click(function(e) {
//     var target = $(e.currentTarget);
//     var editableInput = $('<div></div>')
//                         .addClass('form-group')
//                         .append([$('<input>')
//                                 .addClass('form-control')
//                                 .attr('type', 'text')
//                                 .attr('name', 'updateNote')
//                                 .attr('value', target.html()),
//                                 $('<button></button>')
//                                 .addClass('btn btn-default')
//                                 .attr('type', 'submit')
//                                 .html('->'),
//                                 $('<button></button>')
//                                 .addClass('btn btn-default delBtn')
//                                 .attr('type', 'button')
//                                 .attr('id', target.attr('id'))
//                                 .html('&times;')]);
//     var form = $('<form></form>')
//               .addClass('updateNoteForm form-inline')
//               .attr('action', '/update/' + target.attr('id'))
//               .attr('method', 'post')
//               .append(editableInput);

//     target.replaceWith(form);

//     $('.delBtn').click(function(e) {
//       var id = $(e.currentTarget).attr('id');

//       $.ajax({
//         url: '/delete/' + id,
//         type: 'GET',
//         success: function(result) {
//           window.location = '/';
//         }
//       });

//     });
//   });
// });

$(document).ready(function() {
  
  var getNotes = $.ajax({
    url: '/notes',
    method: 'GET',
    success: function(data) {
      $('.notes').empty();
      for (var i = 0; i < data.length; i++) {
        $('.notes').append('<li id="' + data[i]._id + '">' + data[i].content + '</li>');
      }
    }
  });
  
  getNotes;
  
  $('.newNoteForm').on('submit', function(e) {
    e.preventDefault();
    
    var data = {
      newNote: $('#noteInput').val()
    };
    
    $.ajax({
      url: '/notes',
      method: 'POST',
      data: data,
      success: function() {
         console.log('notes', data);
      }
    });
  });
});