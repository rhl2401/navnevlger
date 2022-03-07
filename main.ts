input.onButtonPressed(Button.A, function () {
    // Hvis index har samme værdi som længden af navnelisten, så start forfra ved at sætte index til 0
    if (index == navneliste.length - 1) {
        index = 0
    } else {
        index += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Vis navnet på skærmen ved at finde navnet på listen på pladsen som index har
    basic.showString("" + (navneliste[index]))
})
let index = 0
let navneliste: string[] = []
navneliste = [
"Anna",
"Bjarne",
"Casper",
"Dorthe",
"Ella",
"Frederik",
"Grit",
"Helge",
"Ida"
]
