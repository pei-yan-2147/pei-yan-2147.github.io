function copyToClipboard(element) {
  console.log('Button clicked, starting copy process');  // 添加這一行來測試
  var text = document.querySelector(element).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  var successful = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (successful) {
      alert("已複製到剪貼簿");
  } else {
      alert("複製失敗，請手動選取並複製");
  }
}
