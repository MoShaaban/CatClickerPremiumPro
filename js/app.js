
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
            model.Cats.push({
                name: arr[i],
                photo: arr[i] + '.jpg',
                score: 0
                })
         };
    }(model.cats)),

    // rendering the cats list by invoking listView.render function
    renderList: function (h) {
        listView.render(h);
    },
    // rendering the admin view and show the displayed photo info in the form
     renderAdmin: 
     $("#admin").on('click', function (e) {
        e.preventDefault();
        adminView.render(); 
         disCatName = $("#catsDisplay").children("span").text();
        var clicks = $("#catsDisplay").children("p").text();
        $("#cName").val(disCatName);
        $("#cImg").val("images/"+disCatName+".jpg");
        $("#clicksNo").val(clicks);
     }),
     catEdit:
     $("form").submit('submit', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var newCatName = $("#cName").val();
        //var catIndex = model.cats.indexOf(disCatName);
        //model.cats[catIndex] = newCatName;
        var oldNameInList = $( ".catTitle:contains("+disCatName+")" ).text(newCatName);
        adminView.render(); 
        
        
     })
     
}

var listView = {
    render: (function (CatArr) {
        for (var i = 0; i < CatArr.length; i++) {  
            var li = document.createElement('li')
            var catti = li.innerHTML = "<span class='catTitle'>"+CatArr[i].name+"</span><br><img src='images/"+CatArr[i].photo+"'>";
            oct.catsList().appendChild(li);
        }    
    }(model.Cats))
}

$(document).on('click', '.catDisPic', function (e) {
    e.preventDefault();
    var count = parseInt($(this).parent().find('p').html());
    $(this).parent().find('p').html(++count);
});

var mainView = {
    liDis: (function () { 
                 $(document).on('click', 'li', function (e) {
                     e.preventDefault();
                     score = 0;
                    var catobject = $(this).html();
                    $( "#catsDisplay" ).html( catobject + "<br><p id='score'>" + 0 + "</p>");
                 })
    }()),
    countScore: (function () {
        $( "#catsDisplay" ).on('click', 'img', function (e) {
        e.preventDefault();
        $('#score').html(++score);
        })
    }())
}




var adminView = {
    render: function () {
         $( "form" ).toggleClass( "hiddenadmin" ); 
    }
}


