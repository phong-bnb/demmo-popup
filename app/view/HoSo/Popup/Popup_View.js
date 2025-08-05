Ext.define("MyApp.view.HoSo.Popup.Popup_View", {
  extend: "Ext.window.Window",
  xtype: "Popup_View",
  controller: "Popup_ViewController",
  title: "Thông tin mở tập",
  width: 600,
  height: 400,
  layout: "fit",
  initComponent: function () {
    var me = this;
    me.items = [
      {
        xtype: "form",
        padding: 10,
        layout: "vbox",
        defaults: {
          xtype: "textfield",
          labelWidth: 100,
          width: "100%",
          margin: "0 0 10 0",
        },
        items: [
          {
            fieldLabel: "Ngày mở tập",
            name: "ngayMoTap",
          },
          {
            fieldLabel: "Phần",
            name: "phan",
          },
          {
            fieldLabel: "Tập số",
            name: "tap",
          },
          {
            fieldLabel: "Trạng thái",
            name: "trangthai",
          },
        ],
      },
    ];

    me.dockedItems = [
      {
        xtype: "toolbar",
        dock: "bottom",
        items: [
          {
            text: "Lưu",
            itemId: "btnLuu",
            handler: "handleLuuThongTin",
          },
          {
            text: "Đóng",
            itemId: "btnDong",
            handler: "onClose",
          },
        ],
      },
    ];

    me.callParent(arguments);
  },
});
