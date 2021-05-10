var fnObj = {};

fnObj.pageStart = function () {
  console.log("pageStarted");
  fnObj.init();
};

fnObj.init = function () {
  fnObj.getUsers();
};

fnObj.getUsers = function () {
  $.ajax({ url: "http://localhost:3000/users" }).done(function (data) {
    console.log(data);
  });
};

$(document).ready(fnObj.pageStart);
