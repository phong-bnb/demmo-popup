Ext.define("MyApp.view.HoSo.Popup.Popup_View", {
  extend: "Ext.form.Panel",
  controller: "Popup_ViewController",
  xtype: "Popup_View",
  // layout: "vbox",
  // scrollable: true,
  // padding: 5,
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
            handler: function (btn) {
              var form = btn.up('window').down('form').getForm();
              if (form.isValid()) {
                var values = form.getValues();
                console.log('values      asdsadsad ', values);
                me.fireEvent('save', values);  // Gọi listener "save"
                // Chứ không phải btn.up('window').fireEvent('save', values);
                // btn.up('window').fireEvent('save', values);
                // me.close();
              }
            },
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