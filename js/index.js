"use strict";

import Joke from "./Joke.js";

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch ("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10")
        .then(response => response.json())
     .then (function(response){
        return response.json();
     })
        .then (function(json){
            json.jokes.forEach(function(jokeData){
                const joke = new Joke(jokeData.category, jokeData.delivery, jokeData.setup);
                app.items.push(joke);

            });
        });
    },
    onSearch() {
    },
    render(list) {
        document.querySelector("#list").innerHTML = list.map(item => item.render()).join(" ");
        
    }

    
};
app.init();