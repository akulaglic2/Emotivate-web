# Emotivate-web

Ova aplikacija je inspirisana Emotivate mobilnom android aplikacijom, koju sam navela u svom cv-u, te istu 
mozete pronaci na "Play store"-u.
Prvobitno je bilo osmisljeno da imam jos jednu android aplikaciju, koju bi koristili samo admini. Medjutim, 
javila se ideja da napravim web aplikaciju. To se cinilo dosta jednostavnijim, zbog dodavanja kategorija i izlistavanja
svih citata. 

Pri ulasku na stranicu pojavi se Login screen. 

Username: azra1234
Password: azra1234

Ukoliko korisnik unese pogresan username ili password, alert dialog ga upozori.

Nakon Login-a, slijedi prikaz citata na "Home" screen-u po kategorijama. Ovo su motivacioni citati, koji bi inspirisali
korisnika u svakodnevnim zivotnim iskustvima. Takodjer postoji opcija brisanja citata na crveni kruzic sa "x" znakom.
U "Create From" screen-u se dodaju citati, kategorije i autori, te se isti azuriraju u "Home" screen-u.
Na kraju postoji i opcija Sign out, koja odjavljuje korisnika sa stranice.

Za spasavanje tokena sam koristila sessionStorage.
Koristila sam Ajax za API pozive.
