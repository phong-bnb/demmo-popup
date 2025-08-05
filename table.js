Ext.define("MyApp.view.HoSo.Table.ThemTapPopup_View", {
  extend: "Ext.form.Panel",
  xtype: "ThemTapPopup_View",
  controller: "ThemTapPopup_ViewController",
  layout: "vbox",
  scrollable: true,
  padding: 5,
  title: "Quản lý thông tin",
  width: 800,
  height: 600,
  initComponent: function () {
    var me = this;
    me.dataStore = Ext.create("Ext.data.Store", {
      fields: ["ngayMoTap", "phan", "tap", "trangthai"],
      data: [],
    });
    me.items = [
      {
        layout: "hbox",
        width: "100%",
        margin: "0 0 10 0",
        items: [
          {
            xtype: "textfield",
            fieldLabel: "Ngày mở tập",
            bind: "{formData.ngayMoTap}",
            flex: 1,
            margin: "0 5 0 0",
          },
          {
            xtype: "textfield",
            fieldLabel: "Phần",
            bind: "{formData.phan}",
            flex: 1,
            margin: "0 0 0 5",
          },
        ],
      },
      {
        xtype: "grid",
        reference: "dataGrid",
        title: "Danh sách dữ liệu",
        flex: 1,
        width: "100%",
        store: me.dataStore,
        columns: [
          {
            text: "Ngày mở tập",
            dataIndex: "ngayMoTap",
            flex: 1,
          },
          {
            text: "Phần",
            dataIndex: "phan",
            flex: 1,
          },
          {
            text: "Tập số",
            dataIndex: "tap",
            flex: 1,
          },
          {
            text: "Trạng thái",
            dataIndex: "trangthai",
            flex: 2,
          },
        ],
      },
    ];
    me.tbar = [
      {
        text: "Thêm mới",
        iconCls: "x-fa fa-plus",
        itemId: "openPopupButton",
        handler: function () {
          me.themTapPopup();
        },
      },
    ],
      me.callParent(arguments);
  },

  // Method để thêm dữ liệu vào table
  addDataToTable: function (data) {
    this.dataStore.add(data);
  },

  // Method để mở popup
  themTapPopup: function () {
    var me = this;
    // let form = Ext.create("MyApp.view.HoSo.Popup.Popup_View", {
    //   listeners: {
    //     save: function (data) {
    //       me.addDataToTable(data);
    //       popup.close()
    //     },
    //   },
    // });

    var popup = Ext.create('Ext.window.Window', {
      title: 'Thông tin tập mới',
      modal: true,
      width: '90%',
      height: 500,
      items: [{
        xtype: 'Popup_View',
        listeners: {
          save: function (data) {
            me.addDataToTable(data);
            popup.close()
          },
        },
      }]
    });

    popup.show();
  },

  setData: function (value) {
    // Method này có thể dùng để set data cho form fields nếu cần
    console.log("Setting data:", value);
  },
});