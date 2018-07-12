class Adapter{
  static getEntries(){
    const baseURL = 'http://localhost:3000/api/v1/entries'
    // const options = {
    //   method: "GET",
    //   headers: {"Content-Type": 'application/json', 'Access-Control-Allow-Origin':'*'}
    // }
    return fetch(baseURL)
      .then(r => r.json())
  }

  static createEntry(entryObj){
    const baseURL = 'http://localhost:3000/api/v1/entries'
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8",'Access-Control-Allow-Origin':'*'},
      body: JSON.stringify(entryObj)
    }

    return fetch(baseURL, options)
      .then(r => r.json())
  }

}

// console.log('adapter.js running');
