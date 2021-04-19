var soundurls = [];
const notenames = ['A-1', 'A#-1', 'B-1', 'C0', 'C#0', 'D0', 'D#0', 'E0', 'F0', 'F#0', 'G0', 'G#0', 'A0', 'A#0', 'B0', 'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6', 'C7']
var keybindings = {};
for (i = 1; i <= (88); i++) {
    soundurls.push("/sounds/" + i + ".mp3");
}
var binding = 0
let sounds = new Array(soundurls.length);
soundurls.forEach((url, i) => {sounds[i] = new Howl({ src: [url]})
});
var mappednotes = {};

notenames.forEach((key,i) => {mappednotes[key] = sounds[i];
    let elem = document.createElement("button");
    elem.class = "btn";
    elem.id = `playBtn${key}`;
    elem.addEventListener('click', () => mappednotes[key].play());
    elem.innerText = `Play Sound ${key}`
    document.body.append(elem);

});

document.addEventListener('keydown', handlekey);

function bindkey(){
    terriblecode = prompt("Please enter a piano note, press ok, and then press the key on your keyboard you would like to bind to that note.", "A#-1");
    binding =1;
}
    
function handlekey(e){
if (binding==1){
    keybindings[e.key] = terriblecode;
    binding = 0;
};
mappednotes[keybindings[e.key]].play();
};

