var simpletask = {
  name: 'Simpletask'
};

function getSummaryTask() {
  return $("#simpletask-task-summary").val();
}

function cleanSummaryTask() {
  $("#simpletask-task-summary").val('');
}

$(
  function ($) {
    $("#simpletask-title").text(simpletask.name);

    $("#simpletask-add-task").click(function(event, data) {
      alert(getSummaryTask());

      cleanSummaryTask();
    });
  }
);