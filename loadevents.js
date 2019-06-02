module.exports = {
  MONTHS: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],

  mesesTotal: new Array(),

  loadMonths: function() {
    let list = new Array();

    this.MONTHS.forEach(async (month, index) => {
      let url = "./months/" + month + ".json";
      this.loadFile(url);
    });
  },

  xhrSuccess: function() {
    this.callback.apply(this);
  },
  xhrError: function() {
    console.error(this.statusText);
  },

  showMessage: function(sMsg) {
    alert(sMsg + this.responseText);
  },

  loadFile: function(
    sURL,
    fCallback /*, argumentToPass1, argumentToPass2, etc. */
  ) {
    var xobj = new XMLHttpRequest();
    xobj.callback = fCallback;
    xobj.overrideMimeType("application/json");
    xobj.setRequestHeader("Content-Type", "application/json");
    xobj.onload = this.xhrSuccess;
    xobj.onerror = this.xhrError;
    xobj.withCredentials = true;
    xobj.open("GET", sURL, true);
    xobj.send(null);
  }
};
