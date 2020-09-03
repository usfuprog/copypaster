
var delimeter = ":";

// ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID ID 
var compare_key_id = 
{

"Jméno_part_1": "fyzickaJmeno",
"Jméno_part_2": "fyzickaPrijmeni",
"IČ": "pravnickaIc",
"DIČ": "pravnickaDic",
"PSČ": "pscId",
"Telefon": "czTelefon",
"E-mail": "adresatFormId_bean_hodnotaKontakt",
"Číslo objednávky": "idEp",
"Obec": "obecDivId",
"Ulice": "uliceDivId",
//"Ulice_part_2": "cisloDivId",
"Celková cena objednávky": "adresatFormId_bean_data_adresatBank_predcisli",
//postaonline.cz ^^^




"Jméno_2_part_1": "frm-packetDraftsForm-form-name",
"Jméno_2_part_2": "frm-packetDraftsForm-form-surname",
"Telefon_2": "frm-packetDraftsForm-form-phone",
"E-mail_2": "frm-packetDraftsForm-form-email",
"Číslo objednávky_2": "frm-packetDraftsForm-form-number",
"Firma": "frm-packetDraftsForm-form-company",
//zasilkovna  ^^^



//special special special special special special special special special special special special special special special special special special 

"_Vaše objednavka č.": "idEp",                               //postaonline.cz
"_Vaše oBjednavka č.": "frm-packetDraftsForm-form-number",   //zasilkovna
/* 
Jaka koli lina, ktera je zde propsana a obsahue "č.", bude parsena do cisla. Toto cislo by mnelo byt otdeleno mezerama, jinak ne bude nalezeno.
"idEp" to je cilovej input, do ktereho bude cislo vlozeno. Special zacina vzdy ze znaku "_". Special ma prioritu nad bezne propsanyma inputama. 
Pokud nahore toto id, "idEp" v dannem pripade, je propsano pro vkladani nejake hodnoty, tato hodnota bude prepsana specialem, v pripade ze cislo 
najde. Pokud ve skopirovanyh dateh je treba lina "Zakaznicka objednavka c.", pro zapnuti speciala je treba propsat do toho to fajlu linu: 
"_Zakaznicka objednavka č.": "id_inputu"
 Pro podporu vice webu najednou, namisto sintaxisu ktery je u obycejnych inputu, to znamena, namisto "Telefon" bylo psano "Telefon_2", u 
 specialu je treba pozmenit minimalne jeden znak to CapsLocku. Nahore je napsano "objednavka" pro postaonline i "oBjednavka" pro zasilkovnu.
*/

"_cislo_popisne_id": "cisloDivId",                           //postaonline.cz
//"_Cislo_popisnE_id": "frm-packetDraftsForm-form-company",    //zasilkovna

"_cislo_popisne_source": "Ulice",                            //"_source" by mne byt jeden, bez klonovani CapsLockem
/*
 Pro zapnuti toho to specialu, je treba propsat dve hodnoty. Prvni je id, do ktereho cislo popisne bude vlozeno. Druhou je lina, ve skopirivanyh 
 dateh, ze ktere bude cislo popisne hledano. V dannem pripade "Ulice". Pokud ve skopirovanyh dateh bude treba "Address", je treba to propsat do 
 liny, jako zdroj cisla popisneho. Tento special zacina vzdy "_cislo_popisne_", a potom bud "id", nebo "source". Pokud script najde cislo popisne 
 v line "source", propise ho do id inputu, a odstrani ze zdrojove liny. Aby bylo nalezeno, cislo popisne by mnelo otdeleno od jineho kontentu 
 mezerama, a mnelo by obsahovat jenom cislice nebo znaky "/" "\". 
 "_cislo_popisne_id" i "_cislo_popisne_source" jsou presne nazvy, maji byt napsany bez diaktriky. Pro podporu vice webu, je treba zmenit na 
 CapsLock minimalne jeden znak v "_cislo_popisne_id". Nahore je napsano "_cislo_popisne_id" pro postaonline i "_Cislo_popisnE_id" pro zasilkovnu.
"_cislo_popisne_source" by mnel byt jeden, bez klonovani CapsLockem. 
*/

//special cases ^^^
"_final_property": null
}





















/*    Tyto [name] i [id] lze najit v consoli, pote co zmacknuto ctrl + v


akceMetodaHidden <<< [name]       Uzivatel_akceMetodaHidden <<< [id] go_script.js:77:21
akceMetoda <<< [name]       Uzivatel_akceMetoda <<< [id] go_script.js:77:21
__checkbox_akceMetoda <<< [name]       __checkbox_Uzivatel_akceMetoda <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.idEp <<< [name]       idEp <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.typ <<< [name]       osobniFormId_bean_data_adresatOsUdaje_typ1 <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.typ <<< [name]       osobniFormId_bean_data_adresatOsUdaje_typ2 <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.jmeno <<< [name]       fyzickaJmeno <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.indOP <<< [name]       indOpCheckId <<< [id] go_script.js:77:21
__checkbox_bean.data.adresatOsUdaje.indOP <<< [name]       __checkbox_indOpCheckId <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.prijmeni <<< [name]       fyzickaPrijmeni <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.nazev <<< [name]       pravnickaNazev <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.idKarty <<< [name]       idKarty <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.doplnek <<< [name]       doplnek <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.specifikace <<< [name]       specifikace <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.ic <<< [name]       pravnickaIc <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.dic <<< [name]       pravnickaDic <<< [id] go_script.js:77:21
obecSelect <<< [name]       obecSelect <<< [id] go_script.js:77:21
uliceSelect <<< [name]       uliceSelect <<< [id] go_script.js:77:21
cisloSelect <<< [name]       cisloSelect <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       formTypAdresy1 <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       formTypAdresy2 <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       formTypAdresy3 <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       formTypAdresy4 <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       formTypAdresy6 <<< [id] go_script.js:77:21
pobockySelectForm <<< [name]       pscNpId <<< [id] go_script.js:77:21
pobockySelectForm_widget <<< [name]       pscNpId_widget <<< [id] go_script.js:77:21
pobockySelectForm <<< [name]       pscBalikovnaId <<< [id] go_script.js:77:21
pobockySelectForm_widget <<< [name]       pscBalikovnaId_widget <<< [id] go_script.js:77:21
psc <<< [name]       pscId <<< [id] go_script.js:77:21
 <<< [name]        <<< [id] 2 go_script.js:77:21
pobox <<< [name]       poboxId <<< [id] go_script.js:77:21
posteRestante <<< [name]       posterestanteId <<< [id] go_script.js:77:21
naPostu <<< [name]       napostuId <<< [id] go_script.js:77:21
balikomat <<< [name]       balikomatId <<< [id] go_script.js:77:21
balikovna <<< [name]       balikovnaId <<< [id] go_script.js:77:21
 <<< [name]        <<< [id] go_script.js:77:21
poboxPosteRestanteCpCo <<< [name]       poboxPosteRestanteCpCoId <<< [id] go_script.js:77:21
bean.data.adresatAdresa.obec <<< [name]       obecCizId <<< [id] go_script.js:77:21
bean.data.adresatAdresa.ulice <<< [name]       uliceCizId <<< [id] go_script.js:77:21
bean.data.adresatAdresa.psc <<< [name]       pscCizId <<< [id] go_script.js:77:21
bean.data.adresatAdresa.cisloBytu <<< [name]       cisloBytuCizId <<< [id] go_script.js:77:21
bean.data.adresatAdresa.region <<< [name]       regionCizId <<< [id] go_script.js:77:21
bean.nazevKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.idKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.hodnotaKontakt <<< [name]       czMobil <<< [id] go_script.js:77:21
bean.hodnotaKontakt <<< [name]       cizinaMobil <<< [id] go_script.js:77:21
bean.nazevKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.idKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.hodnotaKontakt <<< [name]       czTelefon <<< [id] go_script.js:77:21
bean.hodnotaKontakt <<< [name]       cizinaTelefon <<< [id] go_script.js:77:21
bean.nazevKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.idKontakt <<< [name]        <<< [id] go_script.js:77:21
bean.hodnotaKontakt <<< [name]       adresatFormId_bean_hodnotaKontakt <<< [id] go_script.js:77:21
bean.data.adresatBank.predcisli <<< [name]       adresatFormId_bean_data_adresatBank_predcisli <<< [id] go_script.js:77:21
bean.data.adresatBank.ucet <<< [name]       adresatFormId_bean_data_adresatBank_ucet <<< [id] go_script.js:77:21
tileInput <<< [name]       adresatFormId_tileInput <<< [id] go_script.js:77:21
tileNext <<< [name]       adresatFormId_tileNext <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.idEp <<< [name]       idEp_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.typ <<< [name]       typ_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.indOP <<< [name]       indOP_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.jmeno <<< [name]       jmeno_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.prijmeni <<< [name]       prijmeni_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.nazev <<< [name]       nazev_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.doplnek <<< [name]       doplnek_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.ic <<< [name]       ic_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.dic <<< [name]       dic_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.specifikace <<< [name]       specifikace_ <<< [id] go_script.js:77:21
bean.data.adresatOsUdaje.idKarty <<< [name]       idKarty_ <<< [id] go_script.js:77:21
bean.stat <<< [name]       adresatFormId_bean_stat <<< [id] go_script.js:77:21
formTypAdresy <<< [name]       adresatFormId_formTypAdresy <<< [id] go_script.js:77:21
psc <<< [name]       adresatFormId_psc <<< [id] go_script.js:77:21
obecSelect <<< [name]       adresatFormId_obecSelect <<< [id] go_script.js:77:21
uliceSelect <<< [name]       adresatFormId_uliceSelect <<< [id] go_script.js:77:21
cisloSelect <<< [name]       adresatFormId_cisloSelect <<< [id] go_script.js:77:21
cisloSelectKey <<< [name]       adresatFormId_cisloSelectKey <<< [id] go_script.js:77:21
obecCizId <<< [name]       adresatFormId_obecCizId <<< [id] go_script.js:77:21
uliceCizId <<< [name]       adresatFormId_uliceCizId <<< [id] go_script.js:77:21
pscCizId <<< [name]       adresatFormId_pscCizId <<< [id] go_script.js:77:21
cisloBytu <<< [name]       adresatFormId_cisloBytu <<< [id] go_script.js:77:21
region <<< [name]       adresatFormId_region <<< [id] go_script.js:77:21
action:AdresatUloz <<< [name]       adresatFormId_button_uloz <<< [id] go_script.js:77:21
action:Adresat!vyhledatAdresat <<< [name]       adresatFormId_button_zpet <<< [id]











number <<< [name]       frm-packetDraftsForm-form-number <<< [id] go_script.js:77:21
email <<< [name]       frm-packetDraftsForm-form-email <<< [id] go_script.js:77:21
phone <<< [name]       frm-packetDraftsForm-form-phone <<< [id] go_script.js:77:21
name <<< [name]       frm-packetDraftsForm-form-name <<< [id] go_script.js:77:21
surname <<< [name]       frm-packetDraftsForm-form-surname <<< [id] go_script.js:77:21
company <<< [name]       frm-packetDraftsForm-form-company <<< [id] go_script.js:77:21
street <<< [name]       frm-packetDraftsForm-form-street <<< [id] go_script.js:77:21
house <<< [name]       frm-packetDraftsForm-form-house <<< [id] go_script.js:77:21
city <<< [name]       frm-packetDraftsForm-form-city <<< [id] go_script.js:77:21
zip <<< [name]       frm-packetDraftsForm-form-zip <<< [id] go_script.js:77:21
userSize[0] <<< [name]       frm-packetDraftsForm-form-userSize-0 <<< [id] go_script.js:77:21
userSize[1] <<< [name]       frm-packetDraftsForm-form-userSize-1 <<< [id] go_script.js:77:21
userSize[2] <<< [name]       frm-packetDraftsForm-form-userSize-2 <<< [id] go_script.js:77:21
cod <<< [name]       frm-packetDraftsForm-form-cod <<< [id] go_script.js:77:21
value <<< [name]       frm-packetDraftsForm-form-value <<< [id] go_script.js:77:21
weight <<< [name]       frm-packetDraftsForm-form-weight <<< [id] go_script.js:77:21
adultContent <<< [name]       frm-packetDraftsForm-form-adultContent <<< [id] go_script.js:77:21
deliverOnToggle <<< [name]       frm-packetDraftsForm-form-deliverOnToggle <<< [id] go_script.js:77:21
deliverOn <<< [name]       frm-packetDraftsForm-form-deliverOn <<< [id] go_script.js:77:21
attributes[deliveryCostEur] <<< [name]       frm-packetDraftsForm-form-attributes-deliveryCostEur <<< [id] go_script.js:77:21
attributes[deliveryCost] <<< [name]       frm-packetDraftsForm-form-attributes-deliveryCost <<< [id] go_script.js:77:21
items[0][customsCode] <<< [name]       frm-packetDraftsForm-form-items-0-customsCode <<< [id] go_script.js:77:21
items[0][productEan] <<< [name]       frm-packetDraftsForm-form-items-0-productEan <<< [id] go_script.js:77:21
items[0][valueEur] <<< [name]       frm-packetDraftsForm-form-items-0-valueEur <<< [id] go_script.js:77:21
items[0][value] <<< [name]       frm-packetDraftsForm-form-items-0-value <<< [id] go_script.js:77:21
items[0][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-0-productNameEn <<< [id] go_script.js:77:21
items[0][productName] <<< [name]       frm-packetDraftsForm-form-items-0-productName <<< [id] go_script.js:77:21
items[0][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-0-countryOfOrigin <<< [id] go_script.js:77:21
items[0][currency] <<< [name]       frm-packetDraftsForm-form-items-0-currency <<< [id] go_script.js:77:21
items[0][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-0-invoiceNumber <<< [id] go_script.js:77:21
items[0][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-0-invoiceIssueDate <<< [id] go_script.js:77:21
items[0][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-0-unitsCount <<< [id] go_script.js:77:21
items[0][weight] <<< [name]       frm-packetDraftsForm-form-items-0-weight <<< [id] go_script.js:77:21
items[0][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-0-isFoodBook <<< [id] go_script.js:77:21
items[0][isVoc] <<< [name]       frm-packetDraftsForm-form-items-0-isVoc <<< [id] go_script.js:77:21
items[1][customsCode] <<< [name]       frm-packetDraftsForm-form-items-1-customsCode <<< [id] go_script.js:77:21
items[1][productEan] <<< [name]       frm-packetDraftsForm-form-items-1-productEan <<< [id] go_script.js:77:21
items[1][valueEur] <<< [name]       frm-packetDraftsForm-form-items-1-valueEur <<< [id] go_script.js:77:21
items[1][value] <<< [name]       frm-packetDraftsForm-form-items-1-value <<< [id] go_script.js:77:21
items[1][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-1-productNameEn <<< [id] go_script.js:77:21
items[1][productName] <<< [name]       frm-packetDraftsForm-form-items-1-productName <<< [id] go_script.js:77:21
items[1][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-1-countryOfOrigin <<< [id] go_script.js:77:21
items[1][currency] <<< [name]       frm-packetDraftsForm-form-items-1-currency <<< [id] go_script.js:77:21
items[1][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-1-invoiceNumber <<< [id] go_script.js:77:21
items[1][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-1-invoiceIssueDate <<< [id] go_script.js:77:21
items[1][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-1-unitsCount <<< [id] go_script.js:77:21
items[1][weight] <<< [name]       frm-packetDraftsForm-form-items-1-weight <<< [id] go_script.js:77:21
items[1][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-1-isFoodBook <<< [id] go_script.js:77:21
items[1][isVoc] <<< [name]       frm-packetDraftsForm-form-items-1-isVoc <<< [id] go_script.js:77:21
items[2][customsCode] <<< [name]       frm-packetDraftsForm-form-items-2-customsCode <<< [id] go_script.js:77:21
items[2][productEan] <<< [name]       frm-packetDraftsForm-form-items-2-productEan <<< [id] go_script.js:77:21
items[2][valueEur] <<< [name]       frm-packetDraftsForm-form-items-2-valueEur <<< [id] go_script.js:77:21
items[2][value] <<< [name]       frm-packetDraftsForm-form-items-2-value <<< [id] go_script.js:77:21
items[2][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-2-productNameEn <<< [id] go_script.js:77:21
items[2][productName] <<< [name]       frm-packetDraftsForm-form-items-2-productName <<< [id] go_script.js:77:21
items[2][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-2-countryOfOrigin <<< [id] go_script.js:77:21
items[2][currency] <<< [name]       frm-packetDraftsForm-form-items-2-currency <<< [id] go_script.js:77:21
items[2][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-2-invoiceNumber <<< [id] go_script.js:77:21
items[2][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-2-invoiceIssueDate <<< [id] go_script.js:77:21
items[2][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-2-unitsCount <<< [id] go_script.js:77:21
items[2][weight] <<< [name]       frm-packetDraftsForm-form-items-2-weight <<< [id] go_script.js:77:21
items[2][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-2-isFoodBook <<< [id] go_script.js:77:21
items[2][isVoc] <<< [name]       frm-packetDraftsForm-form-items-2-isVoc <<< [id] go_script.js:77:21
items[3][customsCode] <<< [name]       frm-packetDraftsForm-form-items-3-customsCode <<< [id] go_script.js:77:21
items[3][productEan] <<< [name]       frm-packetDraftsForm-form-items-3-productEan <<< [id] go_script.js:77:21
items[3][valueEur] <<< [name]       frm-packetDraftsForm-form-items-3-valueEur <<< [id] go_script.js:77:21
items[3][value] <<< [name]       frm-packetDraftsForm-form-items-3-value <<< [id] go_script.js:77:21
items[3][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-3-productNameEn <<< [id] go_script.js:77:21
items[3][productName] <<< [name]       frm-packetDraftsForm-form-items-3-productName <<< [id] go_script.js:77:21
items[3][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-3-countryOfOrigin <<< [id] go_script.js:77:21
items[3][currency] <<< [name]       frm-packetDraftsForm-form-items-3-currency <<< [id] go_script.js:77:21
items[3][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-3-invoiceNumber <<< [id] go_script.js:77:21
items[3][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-3-invoiceIssueDate <<< [id] go_script.js:77:21
items[3][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-3-unitsCount <<< [id] go_script.js:77:21
items[3][weight] <<< [name]       frm-packetDraftsForm-form-items-3-weight <<< [id] go_script.js:77:21
items[3][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-3-isFoodBook <<< [id] go_script.js:77:21
items[3][isVoc] <<< [name]       frm-packetDraftsForm-form-items-3-isVoc <<< [id] go_script.js:77:21
items[4][customsCode] <<< [name]       frm-packetDraftsForm-form-items-4-customsCode <<< [id] go_script.js:77:21
items[4][productEan] <<< [name]       frm-packetDraftsForm-form-items-4-productEan <<< [id] go_script.js:77:21
items[4][valueEur] <<< [name]       frm-packetDraftsForm-form-items-4-valueEur <<< [id] go_script.js:77:21
items[4][value] <<< [name]       frm-packetDraftsForm-form-items-4-value <<< [id] go_script.js:77:21
items[4][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-4-productNameEn <<< [id] go_script.js:77:21
items[4][productName] <<< [name]       frm-packetDraftsForm-form-items-4-productName <<< [id] go_script.js:77:21
items[4][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-4-countryOfOrigin <<< [id] go_script.js:77:21
items[4][currency] <<< [name]       frm-packetDraftsForm-form-items-4-currency <<< [id] go_script.js:77:21
items[4][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-4-invoiceNumber <<< [id] go_script.js:77:21
items[4][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-4-invoiceIssueDate <<< [id] go_script.js:77:21
items[4][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-4-unitsCount <<< [id] go_script.js:77:21
items[4][weight] <<< [name]       frm-packetDraftsForm-form-items-4-weight <<< [id] go_script.js:77:21
items[4][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-4-isFoodBook <<< [id] go_script.js:77:21
items[4][isVoc] <<< [name]       frm-packetDraftsForm-form-items-4-isVoc <<< [id] go_script.js:77:21
items[5][customsCode] <<< [name]       frm-packetDraftsForm-form-items-5-customsCode <<< [id] go_script.js:77:21
items[5][productEan] <<< [name]       frm-packetDraftsForm-form-items-5-productEan <<< [id] go_script.js:77:21
items[5][valueEur] <<< [name]       frm-packetDraftsForm-form-items-5-valueEur <<< [id] go_script.js:77:21
items[5][value] <<< [name]       frm-packetDraftsForm-form-items-5-value <<< [id] go_script.js:77:21
items[5][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-5-productNameEn <<< [id] go_script.js:77:21
items[5][productName] <<< [name]       frm-packetDraftsForm-form-items-5-productName <<< [id] go_script.js:77:21
items[5][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-5-countryOfOrigin <<< [id] go_script.js:77:21
items[5][currency] <<< [name]       frm-packetDraftsForm-form-items-5-currency <<< [id] go_script.js:77:21
items[5][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-5-invoiceNumber <<< [id] go_script.js:77:21
items[5][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-5-invoiceIssueDate <<< [id] go_script.js:77:21
items[5][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-5-unitsCount <<< [id] go_script.js:77:21
items[5][weight] <<< [name]       frm-packetDraftsForm-form-items-5-weight <<< [id] go_script.js:77:21
items[5][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-5-isFoodBook <<< [id] go_script.js:77:21
items[5][isVoc] <<< [name]       frm-packetDraftsForm-form-items-5-isVoc <<< [id] go_script.js:77:21
items[6][customsCode] <<< [name]       frm-packetDraftsForm-form-items-6-customsCode <<< [id] go_script.js:77:21
items[6][productEan] <<< [name]       frm-packetDraftsForm-form-items-6-productEan <<< [id] go_script.js:77:21
items[6][valueEur] <<< [name]       frm-packetDraftsForm-form-items-6-valueEur <<< [id] go_script.js:77:21
items[6][value] <<< [name]       frm-packetDraftsForm-form-items-6-value <<< [id] go_script.js:77:21
items[6][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-6-productNameEn <<< [id] go_script.js:77:21
items[6][productName] <<< [name]       frm-packetDraftsForm-form-items-6-productName <<< [id] go_script.js:77:21
items[6][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-6-countryOfOrigin <<< [id] go_script.js:77:21
items[6][currency] <<< [name]       frm-packetDraftsForm-form-items-6-currency <<< [id] go_script.js:77:21
items[6][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-6-invoiceNumber <<< [id] go_script.js:77:21
items[6][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-6-invoiceIssueDate <<< [id] go_script.js:77:21
items[6][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-6-unitsCount <<< [id] go_script.js:77:21
items[6][weight] <<< [name]       frm-packetDraftsForm-form-items-6-weight <<< [id] go_script.js:77:21
items[6][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-6-isFoodBook <<< [id] go_script.js:77:21
items[6][isVoc] <<< [name]       frm-packetDraftsForm-form-items-6-isVoc <<< [id] go_script.js:77:21
items[7][customsCode] <<< [name]       frm-packetDraftsForm-form-items-7-customsCode <<< [id] go_script.js:77:21
items[7][productEan] <<< [name]       frm-packetDraftsForm-form-items-7-productEan <<< [id] go_script.js:77:21
items[7][valueEur] <<< [name]       frm-packetDraftsForm-form-items-7-valueEur <<< [id] go_script.js:77:21
items[7][value] <<< [name]       frm-packetDraftsForm-form-items-7-value <<< [id] go_script.js:77:21
items[7][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-7-productNameEn <<< [id] go_script.js:77:21
items[7][productName] <<< [name]       frm-packetDraftsForm-form-items-7-productName <<< [id] go_script.js:77:21
items[7][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-7-countryOfOrigin <<< [id] go_script.js:77:21
items[7][currency] <<< [name]       frm-packetDraftsForm-form-items-7-currency <<< [id] go_script.js:77:21
items[7][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-7-invoiceNumber <<< [id] go_script.js:77:21
items[7][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-7-invoiceIssueDate <<< [id] go_script.js:77:21
items[7][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-7-unitsCount <<< [id] go_script.js:77:21
items[7][weight] <<< [name]       frm-packetDraftsForm-form-items-7-weight <<< [id] go_script.js:77:21
items[7][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-7-isFoodBook <<< [id] go_script.js:77:21
items[7][isVoc] <<< [name]       frm-packetDraftsForm-form-items-7-isVoc <<< [id] go_script.js:77:21
items[8][customsCode] <<< [name]       frm-packetDraftsForm-form-items-8-customsCode <<< [id] go_script.js:77:21
items[8][productEan] <<< [name]       frm-packetDraftsForm-form-items-8-productEan <<< [id] go_script.js:77:21
items[8][valueEur] <<< [name]       frm-packetDraftsForm-form-items-8-valueEur <<< [id] go_script.js:77:21
items[8][value] <<< [name]       frm-packetDraftsForm-form-items-8-value <<< [id] go_script.js:77:21
items[8][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-8-productNameEn <<< [id] go_script.js:77:21
items[8][productName] <<< [name]       frm-packetDraftsForm-form-items-8-productName <<< [id] go_script.js:77:21
items[8][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-8-countryOfOrigin <<< [id] go_script.js:77:21
items[8][currency] <<< [name]       frm-packetDraftsForm-form-items-8-currency <<< [id] go_script.js:77:21
items[8][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-8-invoiceNumber <<< [id] go_script.js:77:21
items[8][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-8-invoiceIssueDate <<< [id] go_script.js:77:21
items[8][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-8-unitsCount <<< [id] go_script.js:77:21
items[8][weight] <<< [name]       frm-packetDraftsForm-form-items-8-weight <<< [id] go_script.js:77:21
items[8][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-8-isFoodBook <<< [id] go_script.js:77:21
items[8][isVoc] <<< [name]       frm-packetDraftsForm-form-items-8-isVoc <<< [id] go_script.js:77:21
items[9][customsCode] <<< [name]       frm-packetDraftsForm-form-items-9-customsCode <<< [id] go_script.js:77:21
items[9][productEan] <<< [name]       frm-packetDraftsForm-form-items-9-productEan <<< [id] go_script.js:77:21
items[9][valueEur] <<< [name]       frm-packetDraftsForm-form-items-9-valueEur <<< [id] go_script.js:77:21
items[9][value] <<< [name]       frm-packetDraftsForm-form-items-9-value <<< [id] go_script.js:77:21
items[9][productNameEn] <<< [name]       frm-packetDraftsForm-form-items-9-productNameEn <<< [id] go_script.js:77:21
items[9][productName] <<< [name]       frm-packetDraftsForm-form-items-9-productName <<< [id] go_script.js:77:21
items[9][countryOfOrigin] <<< [name]       frm-packetDraftsForm-form-items-9-countryOfOrigin <<< [id] go_script.js:77:21
items[9][currency] <<< [name]       frm-packetDraftsForm-form-items-9-currency <<< [id] go_script.js:77:21
items[9][invoiceNumber] <<< [name]       frm-packetDraftsForm-form-items-9-invoiceNumber <<< [id] go_script.js:77:21
items[9][invoiceIssueDate] <<< [name]       frm-packetDraftsForm-form-items-9-invoiceIssueDate <<< [id] go_script.js:77:21
items[9][unitsCount] <<< [name]       frm-packetDraftsForm-form-items-9-unitsCount <<< [id] go_script.js:77:21
items[9][weight] <<< [name]       frm-packetDraftsForm-form-items-9-weight <<< [id] go_script.js:77:21
items[9][isFoodBook] <<< [name]       frm-packetDraftsForm-form-items-9-isFoodBook <<< [id] go_script.js:77:21
items[9][isVoc] <<< [name]       frm-packetDraftsForm-form-items-9-isVoc <<< [id] go_script.js:77:21
termsAgreement <<< [name]       frm-packetDraftsForm-form-termsAgreement <<< [id] go_script.js:77:21
save <<< [name]        <<< [id] go_script.js:77:21
send <<< [name]        <<< [id] go_script.js:77:21
validate <<< [name]        <<< [id] go_script.js:77:21
id <<< [name]        <<< [id] go_script.js:77:21
itemCount <<< [name]        <<< [id] go_script.js:77:21
_do <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_start <<< [name]        <<< [id] go_script.js:77:21
daterangepicker_end <<< [name]        <<< [id]


*/










/*


Jméno: Gálina Pašlik
Město: České Budějovice
PSČ: 32005
Firma: microsoft
IČ: 019231
DIČ: 001234
Telefon: 605061351
E-mail: galinapaslik@google.com
Dodací adresa:
Č. p./ Č. o.: qwerty 0987
Ulice: V. Talicha 456/73
Obec: Středočeský kraj
Číslo objednávky: 404044


PSČ: 320 05
Celková cena objednávky: 444 Kč

Ulice: U Louže 380/29
Číslo objednávky: no name
Vaše objednavka č. 49275 ze dne 19.01.2020, 23:21:27 byla přijata.

Ulice: Husinecká 2632

U Louže 380, Přemyšlení, 250 66 Zdiby, objekt - Města a obce





























.........................................................................
Vaše objednavka č. 49444 ze dne 19.01.2020, 23:21:27 byla přijata.               //отфильтровано число заказа
Jméno: Gálina Pašlik                                                          // разделено на два инпута, имя и фамилия
Město: České Budějovice
PSČ: 320 05
Firma: microsoft
IČ: 019231
DIČ: 001234
Telefon: 605061351
E-mail: galinapaslik@google.com
Ulice: V. Talicha 456/73          // разделено на два инпута, отдельно из улицы и числа
Obec: Středočeský kraj
Celková cena objednávky: 5.55 eur
Číslo objednávky: 400400




Vaše objednavka č. 49444 ze dne 19.01.2020, 23:21:27 byla přijata.
Jméno: Gálina Pašlik
Město: České Budějovice
PSČ: 320 05
Firma: microsoft
IČ: 019231
DIČ: 001234
Telefon: 605061351
E-mail: galinapaslik@google.com
Ulice: V. Talicha 456/73
Obec: Středočeský kraj
Celková cena objednávky: 5.55 eur
Číslo objednávky: 400400

*/

