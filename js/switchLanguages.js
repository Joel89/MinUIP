/**
 * Created by Joel_ on 2017-02-25.
 */

/*--------------- Switch languages --------------------------------------------------------
 https://www.youtube.com/watch?v=Tjt_u_OSh40 */

function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
/* Function that start the page and calls the neccessary functions. */
function indexPageLoaded() {
    language();
}

/* Array consisting of json objects, for example in the json object 'en'
 has 'start': 'START' there 'start' is the key and 'START' is the value.
 */
var arrLang = {
    'en' : {
        /*--------- Header -----------*/
        'start': 'START',
        'menu': 'MENU',
        'about': 'ABOUT US',
        'events': 'EVENTS',
        'logIn': 'LOG IN',
        'welcome': 'WELCOME',
        'enter' : 'ENTER',
        /* ---------------------------*/

        /*--------- menuPage -----------*/
        'orderlist':'Orderlist',
        'total':'Total: $0',
        'amountOfDrinks':'Amount of drinks: 0',
        'undoButton':'UNDO',
        'orderButton': 'ORDER',
        /* ---------------------------*/

        /*--------- aboutPage -----------*/
        'firstSectionText': "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
        "printer took a galley of type and scrambled it to make a type specimen book. It has survived " +
        "not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

        'secondSectionText': "Contrary to popular belief, Lorem Ipsum " +
        "is not simply random text. It has roots in a piece of classical Latin" +
        " literature from 45 BC, making it over 2000 years old. Richard McClintock, " +
        "a Latin professor at Hampden-Sydney College in Virginia, looked up one of the " +
        "more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through " +
        "the cites of the word in classical literature, discovered the undoubtable source.",
        /* ---------------------------*/

        /*--------- logInPage -----------*/
        'username':'Username:',
        'password':'Password:'
        /* ---------------------------*/
    },
    'sv' : {
        /*--------- Header -----------*/
        'start': 'START',
        'menu': 'MENY',
        'about': 'OM OSS',
        'events': 'EVENTS',
        'logIn': 'LOGGA IN',
        'welcome': 'VÄLKOMMEN',
        'enter' : 'START',
        /* ---------------------------*/

        /*--------- menuPage -----------*/
        'orderlist':'Beställning',
        'total':'Totalt: $0',
        'amountOfDrinks':'Antal drycker: 0',
        'undoButton':'ÅNGRA',
        'orderButton': 'BESTÄLL',
        /* ---------------------------*/

        /*--------- aboutPage -----------*/
        'firstSectionText': "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin." +
        "Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att " +
        "antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har " +
        "inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan " +
        "större förändringar.I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord." +
        " Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, och " +
        "är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på Hampden-Sydney" +
        " College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem" +
        " Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur. " +
        "Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av de Finibus Bonorum et Malorum (Ytterligheterna" +
        " av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var " +
        "väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, Lorem Ipsum dolor sit amet..., " +
        "kommer från stycke 1.10.32." ,

        'secondSectionText': 'Det är ett välkänt faktum att läsare distraheras av läsbar text på ' +
        ' en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ' +
        'ordflöde, till skillnad från "Text här, Text här", och ger intryck av att vara läsbar text. ' +
        ' Många publiseringprogram och webbutvecklare använder Lorem Ipsum som test-text, och en ' +
        'sökning efter "Lorem Ipsum" avslöjar många webbsidor under uteckling. Olika versioner har dykt' +
        ' upp under åren, ibland av olyckshändelse, ibland med flit (mer eller mindre humoristiska)',
        /* ---------------------------*/

        /*--------- logInPage -----------*/
        'username':'Användarnamn:',
        'password':'Lösenord:'
        /* ---------------------------*/
    }
};

/* Function that activates when the user clicks on some of the flag images, depending
on which flag the language is chosen.
 */
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        /* Need to save the chosen language so we can use the variable in the function language. */
        localStorage.setItem("languageChosen", lang);

        /*Loop through every element with that has the class lang. */
        $('.lang').each(function (index,element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });

});


function language() {
    var selectedLanguage = localStorage.languageChosen;
    console.log(selectedLanguage);

    $('.lang').each(function (index,element) {
        $(this).text(arrLang[selectedLanguage][$(this).attr('key')]);
    });
};