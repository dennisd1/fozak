 function geturl(geturl)  {
  //just test url class below
  

  //______________________________________________________
    if (geturl==="t-list") {
        console.log("EXTERNAL T_LIST FOUND!!!");
         $.getScript( "http://listjs.com/assets/javascripts/list.min.js", function() {
               console.log("http://listjs.com/assets/javascripts/list.min.js loaded.");
                 var options = {
           valueNames: [ 'id', 'name', 'age', 'city' ]
         };
          
         //HIDING DS TOPIC  - switchedof
         // $(".regular").toggle();

         // Init list
         var contactList = new List('contacts', options);

         var idField = $('#id-field'),
             nameField = $('#name-field'),
             ageField = $('#age-field'),
             cityField = $('#city-field'),
             addBtn = $('#add-btn'),
             editBtn = $('#edit-btn').hide(),
             removeBtns = $('.remove-item-btn'),
             editBtns = $('.edit-item-btn');

         // Sets callbacks to the buttons in the list
         refreshCallbacks();

         addBtn.click(function() {
           contactList.add({
             id: Math.floor(Math.random()*110000),
             name: nameField.val(),
             age: ageField.val(),
             city: cityField.val()
           });
           clearFields();
           refreshCallbacks();
         });

         editBtn.click(function() {
           var item = contactList.get('id', idField.val())[0];
           item.values({
             id:idField.val(),
             name: nameField.val(),
             age: ageField.val(),
             city: cityField.val()
           });
           clearFields();
           editBtn.hide();
           addBtn.show();
         });

         function refreshCallbacks() {
           // Needed to add new buttons to jQuery-extended object
           removeBtns = $(removeBtns.selector);
           editBtns = $(editBtns.selector);

           removeBtns.click(function() {
             var itemId = $(this).closest('tr').find('.id').text();
             contactList.remove('id', itemId);
           });

           editBtns.click(function() {
             var itemId = $(this).closest('tr').find('.id').text();
             var itemValues = contactList.get('id', itemId)[0].values();
             idField.val(itemValues.id);
             nameField.val(itemValues.name);
             ageField.val(itemValues.age);
             cityField.val(itemValues.city);

             editBtn.show();
             addBtn.hide();
           });
         }

         function clearFields() {
           nameField.val('');
           ageField.val('');
           cityField.val('');
         }
            });
//-end-of function
     
     $.get("http://community.yoch.tv/raw/230", function(data){  //test list data
                     
                    $('#divtoappend').html(data);
                    //console.log("2. content form raw added");
                 });
    }
  //end of t-list
    if (geturl==="t-session") {
    console.log("SESSION FOUND!!!");

     //$("#post_1.main-avatar").find("img.avatar").css("width"," 100px");

$("#post_1").find("img.avatar").css("height"," 100px"); //just to see effect
       
$( "p:contains('?')").each(function( index ) {
  $(this).html("<h1>"+$(this).text()+"</h1>");
$(this).parents(".topic-body").prev(".topic-avatar").css( "display", "none" );
});

//$( "p:contains('Подписаться')").html('<div class="ui blue button tosubcribe">'+$(this).text()+'</div>'); //Не работает
$( "p:contains('Подписаться')").html('<div class="tosubcribe">'+'</div>'); 


//--------------------------------------------------REAL STAFF
$('span.btn-group.notification-options>button.widget-button').removeClass().addClass("ui blue button trackingbutton");
$('span.btn-group.notification-options:last').insertAfter('.tosubcribe');


$('.trackingbutton').on('click',function() {
console.log('tracking button clicked');
//console.log($('.dropdown-menu').find('li:last').);
$('.dropdown-menu').find('li:last').css('display','none'); //not workign
});
//--------------------------------------------------REAL STAFF

$('.tosubcribe').click(function() {
//$('span.btn-group.notification-options>button.widget-button').trigger('click'); //notworking
 //$('span.btn-group.notification-options:last').insertAfter('.tosubcribe'); //WORKING

//$('span.btn-group.notification-options>button.widget-button').addClass('d-hover'); //   12
//$('.widget-button.d-hover').trigger('click');//  13 not working
//$('.widget-button.d-hover').css('color','red');//  14 
//$('.notification-options.tracking').click();  //15
//console.log('I am clicked');
});

$('span.btn-group.notification-options>button.widget-button').click(function() {
//$('.regular').parent('a').hide();  //hiding TRACKING option //notworking
//console.log('I am clicked');
});
    }
}
