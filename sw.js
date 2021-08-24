const nombreCache = "apv-v1";
const archivos = [
  "/",
  "/index.html",
  "/css/bootstrap.css",
  "/css/style.css",
  "/js/app.js",
  "/js/apv.js",
];

self.addEventListener("install", (e) => {
  console.log("Service Worker installing");
  console.log(e);
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service worker activated");
  console.log(e);
});

self.addEventListener("fetch", (e) => {
  console.log("Fetch... ", e);
  e.responseWith(
    caches.match(e.request).then((respuestaCahce) => {
      return respuestaCahce;
    })
  );
});
