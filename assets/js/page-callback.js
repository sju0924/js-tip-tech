var fnObj = {};

fnObj.pageStart = function () {
  console.log("pageStarted");
  fnObj.init();
};

fnObj.init = function () {
  fnObj.usersHtml(undefined, true);
  fnObj.workspaceHtml(undefined, true);

  this.getUsers()
    .then(this.usersHtml)
    .catch(function () {
      alert("error");
    });

  this.getWorkspace()
    .then(this.workspaceHtml)
    .catch(function () {
      alert("error");
    });

  // Promise.all([this.getUsers(), this.getWorkspace()])
  //   .then((values) => {
  //     this.usersHtml(values[0]);
  //     this.workspaceHtml(values[1]);
  //   })
  //   .catch(function () {
  //     alert("error");
  //   });
};

fnObj.getUsers = function () {
  return new Promise(function (resolve, reject) {
    $.ajax({ url: "http://localhost:3000/users" })
      .done(function (data) {
        setTimeout(function () {
          resolve(data);
        }, 1000);
      })
      .fail(function (jqXHR, textStatus) {
        reject(textStatus);
      });
  });
};

fnObj.usersHtml = function (data, loading) {
  if (loading) {
    $("#users-target").html("loading...");
    return;
  }
  $("#users-target").html(
    "<ul>" +
      data
        .map(function (item) {
          return "<li>Name : " + item.name + "</li>";
        })
        .join("") +
      "</ul>"
  );
};

fnObj.getWorkspace = function () {
  return new Promise(function (resolve, reject) {
    $.ajax({ url: "http://localhost:3000/workspaces" })
      .done(function (data) {
        resolve(data);
      })
      .fail(function (jqXHR, textStatus) {
        reject(textStatus);
      });
  });
};

fnObj.workspaceHtml = function (data, loading) {
  if (loading) {
    $("#workspace-target").html("loading...");
    return;
  }
  $("#workspace-target").html(
    "<ul>" +
      data
        .map(function (item) {
          return "<li>Name : " + item.name + "</li>";
        })
        .join("") +
      "</ul>"
  );
};

$(document).ready(fnObj.pageStart);
