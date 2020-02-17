var dataURL = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:';

var App = new Vue({

  el: '#app',
  data: {
    title: 'Choisissez un auteur',
    posts: []
  },
  methods: {
    getData(autor){
        this.dataURL = dataURL+autor;
        console.log("URL : "+this.dataURL);
        var self = this // create a closure to access component in the callback below
        $.getJSON(dataURL, function(data) {
        self.posts = data.items;
        });
        
    }
  }
})
  
  