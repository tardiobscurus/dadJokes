var jokes = [
    '"Dad, did you get a haircut?" "No, I got them all cut!"',
    '"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!"',
    '"How do you get a squirrel to like you? Act like a nut."',
    '"Why don\'t eggs tell jokes? They\'d crack each other up."',
    '"I\'m on a seafood diet. I see food and I eat it."',
    '"Why did the scarecrow win an award? Because he was outstanding in his field."',
    '"I made a pencil with two erasers. It was pointless."',
    '"How do you make a Kleenex dance? Put a little boogie in it!"',
    '"Did you hear about the guy who invented the knock-knock joke? He won the \'no-bell\' prize."',
    '"What\'s brown and sticky? A stick."',
    '"Can February March? No, but April May!"',
    '"Spring is here! I got so excited I wet my plants."',
    '"When does a joke become a dad joke? When it becomes apparent."',
    '"What do you call a fake noodle? An impasta."'
];
var rating = [
    '1/10',
    '4/10',
    '2/10',
    '7/10',
    '5/10',
    '4/10',
    '7/10',
    '10/10',
    '8/10',
    '5/10',
    '6/10',
    '4/10',
    '10/10',
    '10/10'
];

var button = document.querySelector(".main button");
var displayJoke = document.querySelector(".main .maintext #joke");
var displayRating = document.querySelector(".main .maintext #funnyScale");

button.addEventListener("click", function() {
    displayJoke.style.animation = "change ease 1s forwards"
    var rand = Math.floor(Math.random() * jokes.length);
    displayJoke.innerHTML = jokes[rand];
    displayRating.innerHTML = rating[rand];
});