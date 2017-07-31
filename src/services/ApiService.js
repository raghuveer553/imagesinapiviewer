var request = require('request-promise');
const Promise = require('bluebird');

var ApiService = function(){

}

ApiService.makeGETApiCall = function(inURL){
  return new Promise((resolve,reject)=>{

    let apiCall = {
        uri: inURL,
        method: "GET"
      }

      request(apiCall).then(JSON.parse).then(
        (responseDict)=>{
          resolve(responseDict);
        },
        (err)=>{
          resolve(err);
        }
      );
  });
}

module.exports = ApiService