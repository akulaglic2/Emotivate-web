# Emotivate-web

Ova aplikacija je inspirisana Emotivate mobilnom android aplikacijom, koju sam navela u svom cv-u, te istu 
mozete pronaci na "Play store"-u.
Prvobitno je bilo osmisljeno da imam jos jednu android aplikaciju, koju bi koristili samo admini. Medjutim, 
javila se ideja da napravim web aplikaciju. To se cinilo dosta jednostavnijim, zbog dodavanja kategorija i izlistavanja
svih citata. 

URL za develop stranicu: https://emotivate-web-develop.herokuapp.com

Pri ulasku na stranicu pojavi se Login screen. 

Username: azra1234
Password: azra1234

Nakon Login-a, slijedi prikaz citata na "Home" screen-u po kategorijama. Ovo su motivacioni citati, koji bi inspirisali
korisnika u svakodnevnim zivotnim iskustvima. Takodjer postoji opcija brisanja citata na crveni kruzic sa "x" znakom.
U "Create From" screen-u se dodaju citati, kategorije i autori, te se isti azuriraju u "Home" screen-u.
Na kraju postoji i opcija Sign out, koja odjavljuje korisnika sa stranice.

Na stranici mozete koristiti dodavanje citata, kategorija, autora te brisanje citata. Ovo je samo development okruzenje u kojem imate slobodu da testirate mogucnosti admin stranice.

Za spasavanje tokena sam koristila sessionStorage.
Koristila sam Ajax za API pozive.
