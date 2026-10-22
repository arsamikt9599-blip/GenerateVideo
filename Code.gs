/**
 * FEEDING REALISTIC AI - Code.gs
 * Menampilkan halaman web app. Seluruh logika generator berjalan di sisi pengguna (Index.html).
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('FEEDING REALISTIC AI')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .addMetaTag('mobile-web-app-capable', 'yes')
    .addMetaTag('theme-color', '#12332b')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
