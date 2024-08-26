document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('pre > code').forEach(function(codeBlock) {
      var button = document.createElement('button');
      button.className = 'copy-button';
      button.innerText = '複製';

      var codeContainer = document.createElement('div');
      codeContainer.className = 'code-container';

      var pre = codeBlock.parentNode;
      pre.parentNode.insertBefore(codeContainer, pre);
      codeContainer.appendChild(pre);
      codeContainer.appendChild(button);

      button.addEventListener('click', function() {
          var textarea = document.createElement('textarea');
          textarea.value = codeBlock.innerText.trim();  // 去除首尾空白字符
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);

          button.innerText = '已經複製';
          button.disabled = true;  // 禁用按钮防止重复点击
      });
  });
});
document.querySelectorAll('details').forEach(function(details) {
  var markdownContent = details.querySelector('.markdown-content');
  if (markdownContent) {
      markdownContent.innerHTML = marked(markdownContent.innerHTML.trim());
  }
});