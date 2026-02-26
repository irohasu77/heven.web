function showTab(file) {
  const content = document.getElementById('content');
  content.innerHTML = "読み込み中...";

  fetch(file)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    })
    .catch(err => {
      content.innerHTML = "読み込みエラー";
    });
}