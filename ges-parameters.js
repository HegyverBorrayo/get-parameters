//Puedes recorrer los valores, claves y pares completos.
const urlParams  = "http://www.galileo.edu//user/portrait/?form:mode=edit&form:id=portrait_upload&__confirmed_p=0&__refreshing_p=0&__submit_button_name=&__submit_button_value=&user_id=13279&return_url=/dotlrn/control-panel&upload_file=VILMAPOP.jpg&upload_file.content-type=image/jpeg&upload_file.tmpfile=/tmp/file9d3qnz"
function getUrlVars() {
    var vars = {};
    var parts = urlParams.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

console.log(getUrlVars())