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

  mesesTotal: [],

  loadMonths: function() {
    var list = new Array();

    this.MONTHS.forEach(async (month, index) => {
      var xobj = new XMLHttpRequest();

      xobj.overrideMimeType("application/json");
      xobj.open("GET", "./months/" + month + ".json", true); // Replace 'my_data' with the path to your file
      xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == "200") {
          let responseList = JSON.parse(xobj.responseText);
          // console.log(responseList);
          if (responseList.length > 0) {
            list = list.concat(responseList);
          }
        }
        console.log(list);
      };

      xobj.setRequestHeader("Content-Type", "application/json");
      xobj.withCredentials = true;
      xobj.send(null);
    });

    console.log(list);
  }
};
