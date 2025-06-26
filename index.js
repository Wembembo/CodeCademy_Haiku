//Haiku line 1
let haikuLine1 =["Morning breaks the fog, ",
  "Silent crows take flight, ",
  "Old stones line the path, ",
  "The sky hums with rain, ",
  "Lanterns swing at dusk, ",
  "Cold wind bites my face, ",
  "Shadows fill the street, ",
  "The hills hide their scars, ",
  "Ashes stain the grass, ",
  "Frost clings to the leaves, ",
  "The river runs slow, ",
  "Fireflies drift by, ",
  "Distant thunder calls, ",
  "The branches reach high, ",
  "Crickets fill the night, ",
  "Clouds blanket the stars, ",
  "Mist curls on the lake, ",
  "A fox watches still, ",
  "Snow falls on my coat, ",
  "Moonlight strokes the sea, "
];

//Haiku line 2
let haikuLine2 =["Petals scatter in the wind, ",
  "Lanterns sway and softly glow, ",
  "The mountains forget my name, ",
  "Shadows dance across the fields, ",
  "Raindrops whisper on the glass, ",
  "Crickets hum their ancient song, ",
  "The forest forgets to speak, ",
  "Footsteps fade into the dark, ",
  "Clouds drift slowly past the moon, ",
  "Memories are lost in rain, ",
  "The river forgets to flow, ",
  "Stars fall quiet through the sky, ",
  "Leaves tumble along the road, ",
  "Fire creeps beneath the snow, ",
  "The tide pulls my thoughts away, ",
  "Birds vanish into the mist, ",
  "Frost settles upon my hair, ",
  "Dusk slips through my open hands, ",
  "The ground shivers as I walk, ",
  "Winter hides the world from me, "]

//Haiku line 3
let haikuLine3 =["And I disappear",
  "Beneath frozen stars",
  "It all fades to grey",
  "Lost among the trees",
  "On a quiet shore",
  "As the shadows fall",
  "I forget to breathe",
  "With the falling leaves",
  "Gone without a sound",
  "Held within the dark",
  "Slipping through the cracks",
  "Nothing left but ash",
  "Where the silence grows",
  "Alone in the snow",
  "In the fading light",
  "Dreaming of the sea",
  "Wrapped in drifting mist",
  "Still the night returns",
  "Beneath broken clouds",
  "Waiting for the dawn"]

function haikuStorage(input){
    var output = [input];
    document.getElementById("haikuBox").classList.remove("invisible");
    return output;
}


const haiku = `${haikuLine1[Math.floor(Math.random() * haikuLine1.length)]}` + `${haikuLine2[Math.floor(Math.random() * haikuLine2.length)]}` + `${haikuLine3[Math.floor(Math.random() * haikuLine3.length)]}`;

console.log(haikuStorage(haiku));

document.getElementById("haikuBox").innerHTML = haiku;