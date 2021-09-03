
const textAnim=document.querySelector('h1');

new Typewriter(textAnim,{
    loop:true
})

.typeString('Moi C\'est Diallo Apprenant En Programmation')
.pauseFor(300)
.typeString(" Mon Rêve Integrer ")
.pauseFor(1000)
.typeString("la Formation P4 ")
.pauseFor(1000)
.typeString("Dev&Mobile De ")
.pauseFor(1000)
.typeString("SIMPLON.")
.pauseFor(1000)
.start()