
function fetchData (){
    return new Promise (resolve => {
    const response = {status: "ok", timestamp: new Date()}
    setTimeout(() => {
            resolve(response)}
        , 1000)
    })
}

export default fetchData