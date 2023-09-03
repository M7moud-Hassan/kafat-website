$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    $(function () {

      // INITIALIZE DATEPICKER PLUGIN
      $('.datepicker').datepicker({
          clearBtn: true,
          format: "dd/mm/yyyy"
      });
  
  
      // FOR DEMO PURPOSE
      $('#reservationDate').on('change', function () {
          var pickedDate = $('input').val();
          $('#pickedDate').html(pickedDate);
      });
  });
  });

