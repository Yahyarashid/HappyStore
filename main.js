$( document ).ready(function() {
    //alert( "ready!" );

////////////////////////////////////////////////

// Data Valuse

////////////////////////////////////////////////

    var prodL = []
    var cusL = []
    var catL = []

    catL[0] = catF('food',"img/cat/wat.jpg");
    catL[1] = catF('drink',"img/cat/food.jpg");

    prodL[0] = prodF("Doritos", 0.9 , "Doritos 100 gm", "hellolemon 500 gmlemon 500 gmlemon 500 gmlemon 500 gm", "img/homepage/pro1.jpeg",0);

    prodL[1] = prodF("Mr.Chips", "0.90 JOD", "Mr.Chips 100 gm","hello lemon 500 gmlemon 500 gmlemon 500 gmlemon 500 gm", "img/homepage/pro2.jpg",1);

    prodL[2] = prodF("lemon", "4.30 JOD", "lemon 500 gm", "hello lemon 500 gmlemon 500 gmlemon 500 gmlemon 500 gmlemon 500 gm","img/homepage/pro3.jpg",0);

    prodL[3] = prodF("Banana", "2.00 JOD", "Banana 500 gm", "hello","img/homepage/pro4.jpg",1);

    prodL[4] = prodF("Apple", "3.5 JOD", "Apple 500 gm", "hello","img/homepage/pro5.jpg",0);

    prodL[5] = prodF("Struppary", "5.00 JOD", "Strawbery 500 gm", "hello","img/homepage/strawberries.png",1);

    cusL[0] = cusF("Name1", "123")

    cusL[1] = cusF("Name2", "321")

    cusL[2] = cusF("Name3", "213")

	// console.log(prodL)
	// console.log(cusL)
	// console.log(catL)

	var $mainContVal = $('<div></div>')
    var $mainContID = $('#mainContID')

    //console.log($mainContVal)

    var $drob ='';
    $drob = '<div class="form-group">'+'<label for="sel1">Prodects:</label>'
	+'<select>'
    for(var i=0;i<=10;i++){
    	$drob+="<option >"+i+"</option>"
    }
    $drob+='</select>' +'</div>'

////////////////////////////////////////////////
// Factory Functions:
////////////////////////////////////////////////

    function prodF(Name, Price, DescriptionApstrac, DescriptionAll, Img, CatID){
    	return {
    		Name: Name,
    		Price: Price,
    		DescriptionApstrac: DescriptionApstrac,
    		DescriptionAll: DescriptionAll,
    		Img: Img,
    		catN: catL[CatID]
    	}
    }

    function cusF(Name, Pass) {
    	return {
    		Name: Name,
    		Pass: Pass,
    	}
    }

    function catF(Name, Img) {
    	// catF Start
    	return {
    		Name: Name,
    		Img: Img,
    	}
    	// catF Ends
    }

////////////////////////////////////////////////
// Displays Functions
////////////////////////////////////////////////

function createCatL(){
	var str =	'<div class="container row">'
	for(var i= 0; i < catL.length; i++ ) {
		str += 	 	'<div class="container col-md-4">'
		str +=			'<h2><a href="#"><span>' + catL[i].Name +'</span></a></h2>'
		str +=			'<div class="card" >'
		str +=				'<img class="card-img-top" src="'+ catL[i].Img +' " alt="Card image cap" >'
		str +=			'</div>'
		str +=		'</div>'
	}
		str+=	'</div>'
	return str;
}

function createCat(num){
	var str =	'<div class="container row">'

		str += 	 	'<div class="container col-md-4">'
		str +=			'<h2><a href="#"><span>' + catL[num].Name +'</span></a></h2>'
		str +=			'<div class="card" >'
		str +=				'<img class="card-img-top" src="'+ catL[num].Img +' " alt="Card image cap" >'
		str +=			'</div>'
		str +=		'</div>'
		str+=	'</div>'
	return str;
}

function createProdL(){
	var str = '<div class="container row " >'

	for(var i = 0; i < prodL.length; i++) {
		
		str += '<div class="container col-md-4">';
		str += 		'<h2><a href="#"><span>' + prodL[i].Name + '</span></a></h2>';
		str += 		'<div class="card" >';
		str += 			'<img class="card-img-top " src="' + prodL[i].Img + '" alt="Card image cap" >';
		str += 			'<div class="card-body">' + prodL[i].DescriptionApstrac + '</div>';
		str += 			'<div class="card-footer">' + prodL[i].Price + '</div>';

		str +=		'</div>'
		str += '</div>'
		
	}

	str+='</div>'
	//str+='</div>'



	return str;
}



function createProd(num){

	// alert(num)
	
	var str='';

	str += '<div class="container col-md-4">';
	str += 		'<h2><a href="#"><span>' +prodL[num].Name +'</span></a></h2>';
	str += 		'<div class="card" >';
	str += 			'<img class="card-img-top " src="' + prodL[num].Img + ' " alt="Card image cap" >';
	str += 			'<div class="card-body">' + prodL[num].DescriptionAll + '</div>';
	str += 			'<div class="card-footer">' + prodL[num].Price + $drob + '</div>';
	str += 		'</div>'
	str += '</div>'
	
	return str;
}



function searchP(name) {
	for(var i = 0; i < prodL.length; i++) {
		if (prodL[i].Name == name) {
			//alert(prodL[i].Name, i)
			//alert( i)
			return i
		}
	}

	return -1
}

function searchC(name) {
	alert("searhC " + name)
	for(var i = 0; i < catL.length; i++) {
		if (catL[i].Name == name) {
			//
			alert(catL[i].Name, i)
			//
			alert( i)
			return i
		}
	}

	return -1
}


/////////////////////////////////////////////////////////
// Click Events

$('#catID').click(function(){
// alert("Category List")

	$mainContVal.html(createCatL());
	$mainContID.html('')
	$mainContVal.appendTo($mainContID)
	$('#slideID').hide()
	//$('#mainContID')
			$('span').on('click', function(){
		// alert("Span")
			var catName = $(this).text()
			alert(catName)

			$mainContID.html('')
			$mainContVal.html(createCat(searchC(catName)));
			$mainContVal.appendTo($mainContID)
		});
});


//////
$('#prodsID').click(function(){
//	alert("Products List")
	$mainContVal.html(createProdL());
	$mainContID.html('')
	$mainContVal.appendTo($mainContID)
	$('#slideID').hide()

		$('span').on('click', function(){
		// alert("Span")
			var prodName = $(this).text()
			alert(prodName)

			$mainContID.html('')
			$mainContVal.html(createProd(searchP(prodName))); //searchP(prodName)
			$mainContVal.appendTo($mainContID)
		});
});


//////////
$('#prodID').click(function(){
//	alert("One Product")
	$('#mainContID').html(createProd(0));
});

});

