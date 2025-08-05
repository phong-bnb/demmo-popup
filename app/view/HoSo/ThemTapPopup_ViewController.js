Ext.define("MyApp.view.HoSo.ThemTapPopup_ViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.ThemTapPopup_ViewController",

  onOpenPopup: function () {
    var me = this;
    var popup = Ext.create("MyApp.view.HoSo.Popup.Popup_View", {
      listeners: {
        save: function (data) {
          me.getView().addDataToTable(data);
        },
      },
    });
    popup.show();
  },
});
