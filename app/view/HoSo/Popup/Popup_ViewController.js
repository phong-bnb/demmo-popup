Ext.define("MyApp.view.HoSo.Popup.Popup_ViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.Popup_ViewController",

  handleLuuThongTin: function (btn) {
    const formPanel = btn.up("window").down("form");
    if (formPanel.isValid()) {
      const values = formPanel.getValues();
      btn.up("window").fireEvent("save", values);
      document.dispatchEvent(new CustomEvent("saveData", { detail: values }));
    }

    btn.up("window").close();
  },
  onSave: function (values) {
    const me = this;
    this.fireEvent("save", values);
    me.fireEvent("Close");
  },

  onClose: function (btn) {
    btn.up("window").close();
  },
});
