function fetchData(callback){
    setTimeout(() => {
        callback("Data has been fetched.")
    }, 6000);
}

function processData (data) {
    console.log(`Data Received: ${data}`);
}
fetchData(processData);