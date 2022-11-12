
const fetchData = (data)=>{
    // generate four random number 0 <= data.length
        let array = []
        for(let i = 0 ; i<4 ; i++) {
            array.push(Math.round(Math.random() * data.length))
        }
        // get 4 values of data with random indexes
        const values = [
             data[array[0]],
             data[array[1]],
             data[array[2]],
             data[array[3]],
        ]
        dom(values)
        // return 4 random value to dom function
    }
    
    
    