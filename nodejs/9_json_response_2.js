var http = require('http');
//create array of object 
const dishes = [
    {
        dishName: "Bateta_Bhungla",
        nutrition: {
            calories: 500,
            protein: "25g",
            fat: "20g",
            carbohydrates: "55g"
        }
    },
    {
        dishName: "Palak Paneer",
        nutrition: {
            calories: 300,
            protein: "15g",
            fat: "20g",
            carbohydrates: "15g"
        }
    },
    {
        dishName: "Masala Dosa",
        nutrition: {
            calories: 350,
            protein: "10g",
            fat: "15g",
            carbohydrates: "45g"
        }
    },
    {
        dishName: "Chole Bhature",
        nutrition: {
            calories: 450,
            protein: "12g",
            fat: "18g",
            carbohydrates: "60g"
        }
    },
    {
        dishName: "Paneer Butter Masala",
        nutrition: {
            calories: 400,
            protein: "14g",
            fat: "28g",
            carbohydrates: "20g"
        }
    },
    {
        dishName: "Rogan Josh",
        nutrition: {
            calories: 500,
            protein: "30g",
            fat: "25g",
            carbohydrates: "20g"
        }
    },
    {
        dishName: "Aloo Gobi",
        nutrition: {
            calories: 200,
            protein: "5g",
            fat: "10g",
            carbohydrates: "25g"
        }
    },
    {
        dishName: "Butter Chicken",
        nutrition: {
            calories: 450,
            protein: "22g",
            fat: "30g",
            carbohydrates: "15g"
        }
    },
    {
        dishName: "Idli Sambar",
        nutrition: {
            calories: 300,
            protein: "8g",
            fat: "6g",
            carbohydrates: "50g"
        }
    },
    {
        dishName: "Fish Curry",
        nutrition: {
            calories: 350,
            protein: "25g",
            fat: "15g",
            carbohydrates: "20g"
        }
    }
];

var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'application/json'});
    //url = http://localhost:5000/reactjs
    var url = request.url.substr(1);  //url =  Masala dosa
    var index = 0;
    let output_as_json;
    for(index=0;index<dishes.length;index++)
    {
        console.log(url, dishes[index].dishName);
        if(url === dishes[index].dishName)
        {
            output_as_json = JSON.stringify(dishes[index]);
            break;
        }
    }    
    if(index === dishes.length)
    {
        output_as_json = JSON.stringify({'success':'no','message':'dish not found'});
    }    
    response.write(output_as_json);
    response.end();
});

server.listen(5000);
console.log('ready to accept request...');
