/*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
$(function() {
  $('.nav-link').on('click', function () {
    $("#content-iframe").attr('src', $(this).attr('data-src'));
  });

  $("ul.nav li").click(function () {
    $("ul.nav li").removeClass('active');
    $(this).addClass('active');
  });

});
