Ext.application({
  name: "MyApp",
  appFolder: "app",

  // ExtJS 4 cho app HoSo
  launch: function () {
    // Tạo main view với popup
    Ext.create("MyApp.view.HoSo.ThemTapPopup_View", {
      renderTo: Ext.getBody(),
    });
  },
});
