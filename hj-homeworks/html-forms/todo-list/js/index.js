const checkboxes = document.querySelectorAll('.list-block input');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', onCheckboxChange);
});

function onCheckboxChange(event) {
  const {finished, all} = getTasksCount();
  const listBlock = document.querySelector('.list-block');

  if (finished === all) {
    listBlock.classList.add('complete');
  } else {
    listBlock.classList.remove('complete');
  }

  showTodoCount({finished, all});
}

function getTasksCount() {
  let tasksCount = 0,
      finishedTasksCount = 0;

  Array.from(checkboxes).forEach(checkbox => {
    tasksCount++;
    if (checkbox.checked) finishedTasksCount++;
  });

  return {
    finished: finishedTasksCount,
    all: tasksCount
  };
}

function showTodoCount({finished, all}) {
  document.querySelector('.list-block output').value = `${finished} из ${all}`;
}

showTodoCount(getTasksCount());