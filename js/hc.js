$(document).ready(function () {
  $dropdown = $('.site-overlay.the');

  $('.menu-dropdown').click(function (e) {
    $current_dropdown = $(this).next('.site-overlay');
    if ($dropdown.is(":visible") && !$current_dropdown.is(":visible")) {
      $dropdown.hide(100);
    }
    $current_dropdown.toggle(100);
  });


  // Bind the click to everything
  $(document).mouseup(function (e) {

    // If the dropdown is visible
    // and the thing we've clicked is not a descendent of the dropdown
    if ($dropdown.is(":visible") && $(e.target).parents('.search-wrapper').length == 0) {
      $dropdown.hide(100);
    }
  });

  $('.chosen-select').chosen();

  if ($.isFunction($.fn.dataTable)) {
    $('.data-table').dataTable({
    "language": {
      "lengthMenu": "每页显示 _MENU_ 条记录",
      "zeroRecords": "未找到搜索结果",
      "info": "第_PAGE_页 共_PAGES_页",
      "infoEmpty": "无数据",
      "infoFiltered": "(筛选自全部 _MAX_ 条记录)",
      "search": "搜索:",
      "paginate": {
        "first": "首页",
        "last": "尾页",
        "next": "下一页",
        "previous": "上一页"
      }
    }
  });
  }

});
