Promise.resolve(100)
       .then((res) => { 
           console.log('1. then result: ' + res); 
           return 200; 
        }) 
       .then((res) => { 
           console.log('2. then result: ' + res); 
           return Promise.resolve(300);
        }) 
        .then((res) => { 
           console.log('3. then result: ' + res); 
           return 400; 
        }) ;
