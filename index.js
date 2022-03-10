function convertHtmlToDocAndDownload(content, fileName) {
  const source = 'data:text/plain;charset=utf-8,' + content;
  const fileDownload = document.createElement("a");

  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = fileName ? fileName : 'report.json';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}
