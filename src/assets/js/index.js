$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  });

  var picker = new Pikaday({
    field: document.getElementById('date-picker-input'),
    format: 'YYYY-MM-DD',
    i18n: {
      previousMonth : 'الشهر السابق',
      nextMonth     : 'الشهر التالي',
      months        : ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
      weekdays      : ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
      weekdaysShort : ['أحد','إثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت']
    },
    isRTL: true, // Set to true for right-to-left languages like Arabic
    yearRange: [1900, moment().year()] // Adjust the range as needed
  });