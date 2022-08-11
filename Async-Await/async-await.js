const resource = 'async-await.json';
let stuff;

//Asynchronous Function
async function getFile(file) {
    try {
        let result = await fetch(file);
        console.log(result);
        let data = await result.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

//Cannot log the JSON data into the console until the asynchronous function is finished
getFile(resource)
    .then((data) => {
        stuff = data;
        console.log(stuff.name, stuff.age, stuff.grade);
    })
    .catch((e) => console.error(e));