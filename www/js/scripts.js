window.onload = function () {

document.addEventListener("deviceready", init, false); // check that Mobile devices is ready, if it is, run init() function.
//init(); // use for testing on chrome

};

function init() {
    
//CAMERA

    //pronghorn
    
    var prongOptions ={

            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA
        }
        
        $("#pronghorn").on("click", pronghorn)

        function pronghorn() {

            navigator.camera.getPicture(prongSuccess, prongError, prongOptions);
        }

        function prongSuccess(imageData) {

            var img ="<img src='" + imageData + "'alt=''> ";
            $("#prong").append(img);
            
            $("#1").css("background-color","#E81E25");
        }

        function prongError (message) {

            document.write(message);
        }
    
    //Buffalo
    
    var buffOptions ={

            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA
        }
        
        $("#buffalo").on("click", buffalo)

        function buffalo() {

            navigator.camera.getPicture(buffSuccess, buffError, buffOptions);
        }

        function buffSuccess(imageData) {

            var img ="<img src='" + imageData + "'alt=''> ";
            $("#buff").append(img);

            $("#2").css("background-color","#E81E25");
        }

        function buffError (message) {

            document.write(message);
        }
    
    //Mural
    var murOptions ={

            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA
        }
        
        $("#mural").on("click", mural)

        function mural() {

            navigator.camera.getPicture(murSuccess, murError, murOptions);
        }

        function murSuccess(imageData) {

            var img ="<img src='" + imageData + "'alt=''> ";
            $("#mur").append(img);
            
            $("#3").css("background-color","#E81E25");

        }

        function murError (message) {

            document.write(message);
        }
    
    //eBlock
    var eBlockOptions ={

            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA
        }
        
        $("#eBlock").on("click", eBlock)

        function eBlock() {

            navigator.camera.getPicture(eBlockSuccess, eBlockError, eBlockOptions);
        }

        function eBlockSuccess(imageData) {

            var img ="<img src='" + imageData + "'alt=''> ";
            $("#eB").append(img);
            
            $("#4").css("background-color","#E81E25");

        }

        function eBlockError (message) {

            document.write(message);
        }
    
    //luxie
    var luxOptions ={

            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA
        }
        
        $("#luxie").on("click", luxie)

        function luxie() {

            navigator.camera.getPicture(luxSuccess, luxError, luxOptions);
        }

        function luxSuccess(imageData) {

            var img ="<img src='" + imageData + "'alt=''> ";
            $("#lux").append(img);
            
            $("#5").css("background-color","#E81E25");

        }

        function luxError (message) {

            document.write(message);
        }
    }

    

