window.onload = () => {
    let getSymbol = () => {
        let symbols = ["\u2660", "\u2663", "\u2665", "\u2666"];
        let num = Math.floor(Math.random() * 4); 
        return symbols[num];
    };
    
    let getCardNumber = () => {
        let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        let num = Math.floor(Math.random() * 13); 
        return cardNumbers[num];
    }
    
    let symbol = getSymbol()
    let character = getCardNumber()
    
    let changeColor = (symbol, character) => {
        if (symbol == "\u2665" || symbol == "\u2666"){
            document.querySelector("#symbolTop").innerText = symbol;
            document.querySelector("#character").innerText = character;
            document.querySelector("#symbolBottom").innerText = symbol;
            document.querySelector("#symbolTop").style.color = "red";
            document.querySelector("#character").style.color = "red";
            document.querySelector("#symbolBottom").style.color = "red";
        } else {
            document.querySelector("#symbolTop").innerText = symbol;
            document.querySelector("#character").innerText = character;
            document.querySelector("#symbolBottom").innerText = symbol;
        }
    };
    
        changeColor(symbol, character);
};

