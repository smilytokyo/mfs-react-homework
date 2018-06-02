function ajaxGet(url) {
    const promise = new Promise(function (resolve, reject){
        const stateChange = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };

        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = stateChange;
        httpRequest.open("GET", url);
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });

    return promise;
}

//串行
const gen = function* () {
    try{
        let url = 'http://api.learning.mafengshe.com/news?pageSize=30&page='
        for(let i=1;i<11;i++){
            let result = yield ajaxGet(url+i);
        }
    } catch (e) {
        console.log(e);
    }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(gen);

//并行
const promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (id) {
    let url = 'http://api.learning.mafengshe.com/news?pageSize=30&page=' + id
    return ajaxGet(url);
});
  
Promise.all(promises).then(function (result) {
    console.log(result)
  }).catch(function(e){
    console.log(e)
});
