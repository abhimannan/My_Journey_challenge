let response =fetch("https://catfact.ninja/fact");

        // Parsing the response as JSON
        let data =response.json();
        console.log(data);
 