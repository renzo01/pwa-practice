if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js ")
    .then((registered) =>
      console.log("serviceWorker is registered", registered)
    )
    .catch((error) => console.log("Services worker is not installed", error));
} else {
  console.log("Servrice worker not allowed");
}
