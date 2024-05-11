const myPromise = new Promise(function (resolve, reject) {
  if (false) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });

// async, await
async function fetchData() {
  try {
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error("Data loading failed", error);
  }
}

fetchData();
