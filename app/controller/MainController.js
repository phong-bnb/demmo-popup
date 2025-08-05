Ext.define("MyApp.controller.MainController", {
  extend: "Ext.app.Controller",

  views: ["HoSo.ThemTapPopup_View"],

  init: function () {
    this.control({
      "ThemTapPopup_View #openPopupButton": {
        click: this.onOpenPopup,
      },
      Popup_View: {
        save: this.onDataSaved,
      },
    });
  },

  onOpenPopup: function () {
    const popup = Ext.create("MyApp.view.HoSo.Popup.Popup_View");
    popup.on("save", this.onDataSaved, this);
    popup.show();
  },

  onDataSaved: function (values) {
    const grid = Ext.ComponentQuery.query("ThemTapPopup_View")[0];
    if (grid && grid.addDataToTable) {
      grid.addDataToTable(values);
    }
  },
});
