function copyToClipboard(element) {
    var text = document.querySelector(element).innerText;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("已複製到剪貼簿");
  }
  