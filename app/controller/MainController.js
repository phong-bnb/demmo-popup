Ext.define("MyApp.controller.MainController", {
  extend: "Ext.app.Controller",

  views: ["HoSo.ThemTapPopup_View"],

  init: function () {
    this.control({
      "ThemTapPopup_View #openPopupButton": {
        click: this.onOpenPopup,
      },
    });
  },

  onOpenPopup: function () {
    var popup = Ext.create("MyApp.view.HoSo.Popup.Popup_View");
    popup.show();
  },
});
