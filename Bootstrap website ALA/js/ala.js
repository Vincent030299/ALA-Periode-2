/**
 * Created by Vincent on 18-11-2015.
 */
window.onload = function start(){
    klantnaam();
    function klantnaam(){
        var naam=prompt("Wat is uw naam?");
        if(naam.length < 1){
        klantnaam();
        }
        else{
            document.getElementById("naam").innerHTML = ("Klantnaam: " + naam);
            modem();
        }
    }
    function modem() {
        var naam = prompt("Wat is het merk en uw type modem?");
        if (naam.length < 1) {
            modem();
        }
        else {
            document.getElementById("modem").innerHTML = ("Modem: " + naam);
            datum();
            internet();
        }
    }
        function datum(){
            var datum = new Date();
            var dag = datum.getDate();
            var maand = datum.getMonth() + 1;
            var jaar = datum.getFullYear();
            var vandaag = dag + maand + jaar;
            document.getElementById("datum").innerHTML = ("Datum: " + datum.getDate() +"-" + maand +"-"+ datum.getFullYear());
    }
    function internet(){
        var internet = confirm("Heeft u een probleem met het internet");
        if(internet == true){
            document.getElementById("internet1").innerHTML = "De klant heeft een probleem met het internet";
            nu();
        }
        else{
            document.getElementById("internet1").innerHTML = "De klant heeft geen probleem met het internet";
        }
    }
    function nu() {
        var nu = confirm("Kunt u browsen naar www.nu.nl ?");
        if(nu == true){
            document.getElementById("nu").innerHTML = "De klant kan browsen naar www.nu.nl";
           reload();
        }
        else{
            document.getElementById("nu").innerHTML = "De klant kan niet browsen naar www.nu.nl";
        }
    }
    function reload() {
        var reload = confirm("Reageert de pagina snel na het indrukken van f5");
        if(reload == true){
            document.getElementById("reload").innerHTML = "De pagina van de klant laadt snel";
            document.getElementById("reload1").innerHTML = " U kunt browsen en uw pagina's laden snel. U heeft geen internet probleem";
            document.getElementById("reload2").innerHTML = "<ul><li>De klant kan browsen naar www.nu.nl</li><li>De pagina laadt snel</li></ul>";
            klacht();
        }
        else{
            document.getElementById("reload").innerHTML = "De pagina van de klant laadt niet snel";
            klacht();
        }
    }
    function klacht(){
        var klacht = confirm("Heeft u een klacht over Internet");
        if(klacht == true){
            document.getElementById("klacht").innerHTML = "Klant meldt probleem met Bellen";
            kiestoon();
        }
        else{
            document.getElementById("klacht").innerHTML = "Klant meldt geen probleem met Bellen";
        }
    }
    function kiestoon(){
        var kiestoon = confirm("Hoort u een kiestoon?");
        if(kiestoon == true){
            document.getElementById("kiestoon").innerHTML = "Klant hoort een kiestoon";
            mobiel();
        }
        else{
            document.getElementById("kiestoon").innerHTML = "Klant hoort niet een kiestoon";
            mobiel();
        }
    }
    function mobiel(){
        var mobiel = confirm("Kunt u uzelf bellen?");
        if(mobiel == true){
            document.getElementById("nummer").innerHTML = "De Klant kan zichzelf bellen";
            iemandbellen()
        }
        else{
            document.getElementById("nummer").innerHTML = "De klant kan zichzelf niet bellen";
            iemandbellen()
        }
    }
    function iemandbellen(){
        var iemandbellen = confirm("Kunt u iemand anders bellen?");
        if(iemandbellen == true){
            document.getElementById("iemandbellen").innerHTML = "De klant kan iemand anders bellen";
            televisie()
        }
        else{
            document.getElementById("iemandbellen").innerHTML = "De klant kan niet iemand anders bellen";
            televisie()
        }
    }
    function televisie(){
        var televisie = confirm("Heeft u een klacht over de televisie?");
        if(televisie == true){
            document.getElementById("televisie").innerHTML = "De klant heeft een klacht over de televisie";
            aantal();
        }
        else{
            document.getElementById("televisie").innerHTML = "De klant heeft geen klacht over de televisie";
        }
    }
    function aantal(){
            var tv=prompt("Hoeveel tv's heeft u ?");
            if(tv.length < 1){
                aantal();
            }
            else{
                document.getElementById("tv").innerHTML = ("Aantal TV's: " + tv);
                splitter();
            }
    }
    function splitter(){
            var splitter= confirm("Is uw splitter goed aangesloten?");
            if(splitter == true){
                document.getElementById("splitter").innerHTML = "De splitter van de klant is goed aangesloten";
                settop();
            }
            else{
                document.getElementById("splitter").innerHTML = "De splitter van de klant is niet goed aangesloten";
                settop();
            }
    }
    function settop(){
        var settop = confirm("Is uw settopbox goed aangesloten?");
        if(settop == true){
            document.getElementById("settop").innerHTML = "De settopbox is goed aangesloten";
            zenders();
        }
        else{
            document.getElementById("settop").innerHTML = "De settopbox is niet goed aangesloten";
            zenders();
        }
    }
    function zenders(){
        var zenders = confirm("Kan u de zenders vinden?");
        if(zenders == true){
            document.getElementById("zenders").innerHTML = "De klant kan zenders vinden";
        }
        else{
            document.getElementById("zenders").innerHTML = "De klant kan geen zenders vinden";
        }
    }
};


