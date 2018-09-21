$(document).ready(function () {

    var playerId = "" + getRandomInt(10000, 100000);
    var playerId2 = "" + getRandomInt(10000, 100000);
    var playerId3 = "" + getRandomInt(10000, 100000);

    var gameEndPoint = "https://uxrjfnban5.execute-api.us-east-1.amazonaws.com/prod/api-lambda-dynamo-crud";

    var jsonVoteDataHR = {
        "operation": "create",
        "tableName": "UserVoteTable",
        "payload": {
            "TableName": "UserVoteTable",
            "Item": {
                //"playId": "3434343",
                "playId": "1235",
                "userId": playerId ,
                "vote": "Home Run"
            }
        }
    };

    dataStrOfJsonHR = JSON.stringify(jsonVoteDataHR);
    console.log (dataStrOfJsonHR);


    $("#btnHomeRun").click(function(){
        console.log("Invoking Post to API from UI");
        $.ajax({
            url : gameEndPoint,
            type: "POST",
            data: dataStrOfJsonHR,
            dataType: "json",
            contentType: "application/json"
        });
        refreshPage();
    }); 

    /////////////------------------------------------------
    var jsonVoteDataFB = {
        "operation": "create",
        "tableName": "UserVoteTable",
        "payload": {
            "TableName": "UserVoteTable",
            "Item": {
                "playId": "1235",
                "userId": playerId2,
                "vote": "Foul Ball"
            }
        }
    };

    dataStrOfJsonFB = JSON.stringify(jsonVoteDataFB);
    console.log (dataStrOfJsonFB);

    $("#btnFoulBall").click(function(){
        console.log("Invoking Post to API from UI");
        $.ajax({
            url : gameEndPoint,
            type: "POST",
            data: dataStrOfJsonFB,
            dataType: "json",
            contentType: "application/json"
        });
        refreshPage();
    }); 

    /////////////////-----------------------------
    var jsonVoteDataSteal = {
        "operation": "create",
        "tableName": "UserVoteTable",
        "payload": {
            "TableName": "UserVoteTable",
            "Item": {
                "playId": "1235",
                "userId": playerId3,
                "vote": "Steal"
            }
        }
    };

    dataStrOfJsonSteal = JSON.stringify(jsonVoteDataSteal);
    console.log (dataStrOfJsonSteal);

    $("#btnSteal").click(function(){
        console.log("Invoking Post to API from UI");
        $.ajax({
            url : gameEndPoint,
            type: "POST",
            data: dataStrOfJsonSteal,
            dataType: "json",
            contentType: "application/json"
        });
        refreshPage();
    }); 


    /*
    $.get(
        "https://min-api.cryptocompare.com/data/all/coinlist",
        JSON,
        function(data){
            coinList = data;
            console.log("GET CoinList complete.");
            //console.log(coinList);
            console.log(coinList.Data);
        }
    );
    */

   function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function refreshPage(){
        window.location.reload();
    } 

    $('#from').on('change', function () {
        fromCurrency = this.value;
        console.log("fromCurrency=" + fromCurrency);

        if (fromCurrency && toCurrency) {
            getPrice();
        }
    });

    $('#to').on('change', function () {
        toCurrency = this.value;
        console.log("toCurrency=" + toCurrency);

        if (fromCurrency && toCurrency) {
            getPrice();
        }
    });

    function getPrice() {
        console.log("Got both currencies. Ready to call Price API.")
        let url = "https://min-api.cryptocompare.com/data/price?fsym=" + fromCurrency + "&tsyms=" + toCurrency;
        console.log(url);
        $.get(
            url,
            JSON,
            function (data) {
                console.log(data);
                console.log(data[toCurrency]);
                updateInputAmountRight(data[toCurrency]);
            }
        )
    }

    function updateInputAmountRight(valueToCurrency) {
        let amountLeft = $('input#amount_left').val();
        console.log("amountLeft=" + amountLeft);
        let amountRight = amountLeft * valueToCurrency;
        console.log("amountRight=" + amountRight);
        $('input#amount_right').val(amountRight);
    }
});