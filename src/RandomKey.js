
function RandomKey() {
    
        var ranNums =[];
        var flag = true;
        while (flag === true) {
            var rand = Math.floor(Math.random() * 10000);
            var i = 0;
            console.log(rand)
            for(i=0; i<ranNums.length; i++){
                if(ranNums[i]===rand) {
                    break;
                }
            }
            if(i===ranNums.length){

                console.log(rand);
                 ranNums.push(rand);
                return rand;            
            }
           
        }
    }

