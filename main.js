fetch(url, {
               method: "POST",
               headers: {
                  "content-type": "application/json"
               },
               body: JSON.stringify({
                  name: "roven",
                  email: "roven@yahoo.com"
               })
            })
               .then((res) => {
                  if (res.ok) {
                     // if response has no error
                     return res.json();
                  } else {
                     console.log("error");
                  }
               })
               .then((data) => {
                  displayData(data);
               });
