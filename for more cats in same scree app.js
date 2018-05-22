
var model =  {
    // the array with cats names
    cats: ['mew', 'meo', 'meaw', 'memaw', 'mesaw', 'metaw'],
    // The array of cats objects
    Cats: []
    }


var oct = {
    // selecting the list on the left of the container
    catsList: function () {
         return document.querySelector('#catsList');
    },
    //selecting the cat display div
    catsDisplay: function () {
         return document.querySelector('#catsDisplay');
    },
     // creating the Cat object and push it to the Cats array
    addCat: (function (arr) {
         for (var i = 0; i < arr.length; i++) {
            model.Cats.push((function (n) {
                return {
                name: n,
                photo: n + '.jpg',
                score: 0
                };
             }(arr[i])));
         };
    }(model.cats))

}

var listView = {
    render: (function (CatArr) {
        for (var i = 0; i < CatArr.length; i++) {  
            var li = document.createElement('li')
            var catti = li.innerHTML = CatArr[i].name+"<br><img src='images/"+CatArr[i].photo+"'>";
            oct.catsList().appendChild(li);
        }    
    }(model.Cats))
}

var mainView = {
    liDis: (function () { 
        var liList = oct.catsList().getElementsByTagName('li'); 
        for (var i = 0; i < liList.length; i++) {
            (function (arr) {
                 arr[i].addEventListener('click', function () {
                    oct.catsDisplay.innerHTML = "<p>ss</p>";
                 })
            }(liList))
        }
    }())
}