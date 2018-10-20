$(document).ready(function() {
    var maxAdded = 3; //maximum input boxes allowed
    var wrapper = $("#items"); //Fields wrapper
    var addFieldButton = $(".addParticipantFieldButton"); //Add button ID

    var x = 1; //initlal text box count
    $(addFieldButton).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < maxAdded) { //max input box allowed
            x++; //text box increment
            $(wrapper).append(
                '<select name="participant" id="participant">' +
                '<option value="">choose participant</option>' +
                '<option value="1">Panther Bear</option>' +
                '<option value="2">Moco Loco</option>' +
                '</select>');
        }
    }