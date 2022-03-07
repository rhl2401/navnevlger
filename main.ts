input.onButtonPressed(Button.A, function () {
    // Hvis index har samme værdi som længden af navnelisten, så start forfra ved at sætte index til 0
    if (index == navneliste.length - 1) {
        index = 0
    } else {
        index += 1
    }
    plotTal(index)
})
function plotTal (tal: number) {
    clear()
    // Plot den aktuelle værdi vha. modulos og division
    led.plot(tal % 5, Math.floor(tal / 5))
}
function clear () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    clear()
    // Vis navnet på skærmen ved at finde navnet på listen på pladsen som index har
    basic.showString("" + (navneliste[index]))
    // Gå tilbage og vis tallet igen
    plotTal(index)
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
plotTal(index)
