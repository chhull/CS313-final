function getPulse(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`getPulse?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } /*else {
			  
             output.innerText = json[0].pulse;
			//output.innerText = JSON.stringify(json.rows);
          }*/
		  else {
          var string = json.map((item)=>{
            return item.pulse; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}
function exercise(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`getExercise?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } /*else {
			  
             output.innerText = json[0].pulse;
			//output.innerText = JSON.stringify(json.rows);
          }*/
		  else {
          var string = json.map((item)=>{
            return item.exercise; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}
function weight(e) {
	console.log("getPulse function");
    const id = document.querySelector('#input').value;
    fetch(`getWeight?id=${id}`)
      .then((res)=>{
          return res.json()
      })
      .then(json =>{
          console.log("inside fetch" + json);
          const output = document.querySelector('#output');
          if ("error" in json) {
            output.innerText = json.error;
          } /*else {
			  
             output.innerText = json[0].pulse;
			//output.innerText = JSON.stringify(json.rows);
          }*/
		  else {
          var string = json.map((item)=>{
            return item.weight; 
          })
          string = string.join(", ");
          output.innerText = string;
        }
      })

}


