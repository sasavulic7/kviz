import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Ko je bio prvi čovek koji je kročio na Mesec?",
    options: [
      "Jurij Gagarin",
      "Buzz Aldrin",
      "Neil Armstrong",
      "Michael Collins"
    ],
    answer: "Neil Armstrong"
  },
  {
    question: "Koji je najveći kontinent na svetu?",
    options: ["Afrika", "Evropa", "Azija", "Južna Amerika"],
    answer: "Azija"
  },
  {
    question: "Koja je hemijska formula za vodu?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Koliko planeta ima Sunčev sistem?",
    options: ["7", "8", "9", "10"],
    answer: "8"
  },
  {
    question: "Koja država je najveća po površini?",
    options: ["Kanada", "Kina", "Sjedinjene Američke Države", "Rusija"],
    answer: "Rusija"
  },
  {
    question: "Koja je valuta u Velikoj Britaniji?",
    options: ["Euro", "Dinar", "Funta", "Franak"],
    answer: "Funta"
  },
  {
    question: "Koji je najveći okean na Zemlji?",
    options: ["Atlantski", "Tihi", "Indijski", "Arktički"],
    answer: "Tihi"
  },
  {
    question: "Koji je glavni grad Australije?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Koji je simbol hemijskog elementa zlata?",
    options: ["Ag", "Fe", "Au", "Pb"],
    answer: "Au"
  },
  {
    question: "Koje godine je počeo Prvi svetski rat?",
    options: ["1912.", "1914.", "1918.", "1939."],
    answer: "1914."
  },
  {
    question: "Ko je napisao roman 'Rat i mir'?",
    options: [
      "Fjodor Dostojevski",
      "Leo Tolstoj",
      "Anton Čehov",
      "Maksim Gorki"
    ],
    answer: "Leo Tolstoj"
  },
  {
    question: "Koji je glavni grad Japana?",
    options: ["Osaka", "Kyoto", "Tokio", "Hiroshima"],
    answer: "Tokio"
  },
  {
    question: "Ko je osnivač kompanije Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
    answer: "Bill Gates"
  },
  {
    question: "Koji je najduži rečni sistem na svetu?",
    options: ["Amazonski", "Nil", "Misisipi", "Jangce"],
    answer: "Amazonski"
  },
  {
    question: "Koja država ima najviše stanovnika na svetu?",
    options: ["Indija", "Sjedinjene Američke Države", "Brazil", "Kina"],
    answer: "Indija"
  },
  {
    question: "Koji je glavni grad Francuske?",
    options: ["Berlin", "Pariz", "London", "Madrid"],
    answer: "Pariz"
  },
  {
    question: "Koji element je označen simbolom 'O'?",
    options: ["Zlato", "Kiseonik", "Ugljenik", "Hidrogen"],
    answer: "Kiseonik"
  },
  {
    question: "Koja planeta je najbliža Suncu?",
    options: ["Merkur", "Venera", "Zemlja", "Mars"],
    answer: "Merkur"
  },
  {
    question: "Ko je autor romana 'Na Drini ćuprija'?",
    options: ["Ivo Andrić", "Mesa Selimović", "Branko Ćopić", "Milan Rakić"],
    answer: "Ivo Andrić"
  },
  {
    question: "Koji je najviši vrh na svetu?",
    options: ["K2", "Kangchenjunga", "Makalu", "Everest"],
    answer: "Everest"
  },
  {
    question: "Ko je otkrio Ameriku?",
    options: [
      "Vasco da Gama",
      "Krištofer Kolumbo",
      "Ferdinand Magelan",
      "Vladar iz Venecije"
    ],
    answer: "Krištofer Kolumbo"
  },

  {
    question: "Koji je najbrži kopneni životinja?",
    options: ["Gepard", "Gazela", "Krokodil", "Slon"],
    answer: "Gepard"
  },
  {
    question: "Ko je napisao 'Hamleta'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain"
    ],
    answer: "William Shakespeare"
  },
  {
    question: "Koja je najdublja tačka u okeanima?",
    options: ["Marijanski rov", "Tonga rov", "Puerto Rico rov", "Java rov"],
    answer: "Marijanski rov"
  },
  {
    question: "Koji je najveći sisar na svetu?",
    options: ["Plavi kit", "Slon", "Žirafa", "Afrički nosorog"],
    answer: "Plavi kit"
  },
  {
    question: "Koja je glavna svrha DNS-a u mrežama?",
    options: [
      "Prevođenje URL-a u IP adresu",
      "Šifrovanje podataka",
      "Praćenje mrežnog saobraćaja",
      "Upravljanje bazama podataka"
    ],
    answer: "Prevođenje URL-a u IP adresu"
  },
  {
    question: "Koja država je domaćin Olimpijadi 2024. godine?",
    options: [
      "Japan",
      "Sjedinjene Američke Države",
      "Francuska",
      "Velika Britanija"
    ],
    answer: "Francuska"
  },
  {
    question: "Koji je simbol hemijskog elementa za srebro?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Ag"
  },
  {
    question: "Koja je najvažnija komponenta u proizvodnji čelika?",
    options: ["Gvožđe", "Kobalt", "Aluminijum", "Bakar"],
    answer: "Gvožđe"
  },
  {
    question: "Koji planetarni sistem je najbliži Zemlji?",
    options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Vega"],
    answer: "Proxima Centauri"
  },
  {
    question: "Koji je najvažniji umetnik renesanse?",
    options: ["Leonardo da Vinci", "Mikelanđelo", "Rafael", "Donatelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Koji je glavni grad Kanade?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    answer: "Ottawa"
  },
  {
    question: "Koja je najnovija verzija operativnog sistema Windows?",
    options: ["Windows 10", "Windows 11", "Windows 7", "Windows XP"],
    answer: "Windows 11"
  },
  {
    question: "Koja je najpopularnija društvena mreža?",
    options: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    answer: "Facebook"
  },
  {
    question: "Koja je najskuplja tečnost na svetu?",
    options: ["Krv", "Safran", "Terapijski serum", "Ružina vodica"],
    answer: "Krv"
  },
  {
    question: "Koja biljka je najpoznatija za proizvodnju čaja?",
    options: ["Zeleni čaj", "Kamiličica", "Crni čaj", "Rooibos"],
    answer: "Zeleni čaj"
  },
  {
    question: "Koji je najduži most na svetu?",
    options: [
      "Danyang–Kunshan Grand Bridge",
      "Hangzhou Bay Bridge",
      "Tianjin Grand Bridge",
      "Changhua-Kaohsiung Viaduct"
    ],
    answer: "Danyang–Kunshan Grand Bridge"
  },
  {
    question: "Koja je najpoznatija knjiga J.K. Rowling?",
    options: [
      "Harry Potter i Kamen mudrosti",
      "Harry Potter i Odaja tajni",
      "Harry Potter i Logor Feniksa",
      "Harry Potter i Kamen mudrosti"
    ],
    answer: "Harry Potter i Kamen mudrosti"
  },
  {
    question: "Koji je najstariji grad u Europi?",
    options: ["Atena", "Rim", "Pariz", "London"],
    answer: "Rim"
  },
  {
    question: "Koji je najpopularniji sport na svetu?",
    options: ["Fudbal", "Košarka", "Tenis", "Ragbi"],
    answer: "Fudbal"
  },
  {
    question: "Koja država je poznata po proizvodnji satova?",
    options: ["Švajcarska", "Nemačka", "Francuska", "Japan"],
    answer: "Švajcarska"
  },
  {
    question: "Koji je najveći grad u Australiji po broju stanovnika?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Sydney"
  },
  {
    question: "Koji je najviši vodopad na svetu?",
    options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    answer: "Angel Falls"
  },
  {
    question: "Koji planet je poznat kao 'Crvena planeta'?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: "Mars"
  },
  {
    question: "Koja je najmlađa država na svetu?",
    options: [
      "Sjedinjene Američke Države",
      "Južni Sudan",
      "Kuvajt",
      "Sveta Lucija"
    ],
    answer: "Južni Sudan"
  },
  {
    question: "Koji je najpoznatiji američki univerzitet?",
    options: ["Harvard", "MIT", "Stanford", "Yale"],
    answer: "Harvard"
  },
  {
    question:
      "Koja država je poznata po tradicionalnim draguljima kao što je dijamant?",
    options: ["Belgija", "Indija", "Južnoafrička Republika", "Brazil"],
    answer: "Južnoafrička Republika"
  },
  {
    question: "Koja je najvažnija funkcija ljudskog srca?",
    options: [
      "Pumpanje krvi kroz telo",
      "Filtriranje krvi",
      "Proizvodnja hormona",
      "Skladištenje hranljivih materija"
    ],
    answer: "Pumpanje krvi kroz telo"
  },
  {
    question: "Koji je najpoznatiji muzej u Parizu?",
    options: ["Louvre", "Orsay", "Pompidou", "Rodin"],
    answer: "Louvre"
  },
  {
    question: "Koja planeta ima najviše meseca?",
    options: ["Saturn", "Jupiter", "Mars", "Uran"],
    answer: "Saturn"
  },
  {
    question: "Koja je najpopularnija vrsta čokolade?",
    options: [
      "Crna čokolada",
      "Mlečna čokolada",
      "Bela čokolada",
      "Pikantna čokolada"
    ],
    answer: "Mlečna čokolada"
  },
  {
    question: "Koji je najpoznatiji festival u Brazilu?",
    options: ["Oktoberfest", "Karneval", "Coachella", "Burning Man"],
    answer: "Karneval"
  },
  {
    question: "Koja reka je najduža u Evropi?",
    options: ["Dunav", "Rajna", "Temza", "Loara"],
    answer: "Dunav"
  },
  {
    question: "Koji je glavni grad Italije?",
    options: ["Milano", "Firenca", "Rim", "Napulj"],
    answer: "Rim"
  },
  {
    question: "Koji je najvažniji prirodni resurs u Saudijskoj Arabiji?",
    options: ["Nafta", "Voda", "Gvožđe", "Bakar"],
    answer: "Nafta"
  },
  {
    question: "Koji je najpoznatiji film Stevena Spielberga?",
    options: ["Jaws", "E.T.", "Jurassic Park", "Schindler's List"],
    answer: "Jaws"
  },
  {
    question: "Koji je najpoznatiji nemački brend automobila?",
    options: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"],
    answer: "Volkswagen"
  },
  {
    question: "Koji je najpoznatiji muzički festival u svetu?",
    options: ["Glastonbury", "Woodstock", "Coachella", "Lollapalooza"],
    answer: "Woodstock"
  },
  {
    question: "Koja je najviša zgrada na svetu?",
    options: [
      "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al Bait",
      "Ping An Finance Centre"
    ],
    answer: "Burj Khalifa"
  },
  {
    question: "Koja ptica ne može da leti?",
    options: ["Sova", "Pingvin", "Orao", "Spariv"],
    answer: "Pingvin"
  },
  {
    question: "Koji je najvažniji izvor energije za Zemlju?",
    options: [
      "Zemljina unutrašnja toplota",
      "Sunčeva svetlost",
      "Vetrovna energija",
      "Geotermalna energija"
    ],
    answer: "Sunčeva svetlost"
  },
  {
    question: "Koji je najveći kontinent po broju stanovnika?",
    options: ["Afrika", "Azija", "Evropa", "Južna Amerika"],
    answer: "Azija"
  },
  {
    question: "Koji je najpoznatiji slikarski pravac u 20. veku?",
    options: ["Impresionizam", "Kubizam", "Renesansa", "Barok"],
    answer: "Kubizam"
  },
  {
    question: "Koji je najpoznatiji muzički kompozitor iz perioda klasicizma?",
    options: [
      "Ludwig van Beethoven",
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Franz Schubert"
    ],
    answer: "Wolfgang Amadeus Mozart"
  },
  {
    question: "Koja država je najpoznatija po proizvodnji vina?",
    options: ["Francuska", "Italija", "Španija", "Portugal"],
    answer: "Francuska"
  },
  {
    question: "Koja planina je najviša u Evropi?",
    options: ["Mont Blanc", "Matterhorn", "Elbrus", "Monte Rosa"],
    answer: "Elbrus"
  },
  {
    question: "Koji je najpoznatiji naučni istraživač iz 19. veka?",
    options: [
      "Isaac Newton",
      "Charles Darwin",
      "Galileo Galilei",
      "Albert Einstein"
    ],
    answer: "Charles Darwin"
  },
  {
    question:
      "Koji je najvažniji izvor u svetu za proizvodnju električne energije?",
    options: [
      "Solarni paneli",
      "Nuklearni reaktori",
      "Hidroelektrane",
      "Vetroturbine"
    ],
    answer: "Hidroelektrane"
  },
  {
    question: "Koja reka teče kroz Egipat?",
    options: ["Nil", "Amazon", "Misisipi", "Yangtze"],
    answer: "Nil"
  },
  {
    question: "Koja je najvažnija osobina klime na ekvatoru?",
    options: ["Suvo vreme", "Tropske kiše", "Sneg", "Hladno vreme"],
    answer: "Tropske kiše"
  },
  {
    question: "Koji je najpoznatiji svetski brend za elektroniku?",
    options: ["Samsung", "Sony", "Apple", "LG"],
    answer: "Apple"
  },
  {
    question: "Koji je najpoznatiji srpski fudbaler?",
    options: [
      "Dejan Stanković",
      "Nemanja Bjelica",
      "Aleksandar Kolarov",
      "Dušan Tadić"
    ],
    answer: "Dejan Stanković"
  },
  {
    question: "Koji je najviši vodopad u Evropi?",
    options: ["Rheinfall", "Vikos", "Terni", "Dettifoss"],
    answer: "Dettifoss"
  },
  {
    question: "Koji je najpoznatiji roman Džordža Orvela?",
    options: ["1984", "Životinjska farma", "Na farmi", "Kratki dani"],
    answer: "1984"
  },
  {
    question: "Koji je najpoznatiji američki prezenter vesti?",
    options: ["Walter Cronkite", "Anderson Cooper", "Tom Brokaw", "David Muir"],
    answer: "Walter Cronkite"
  },
  {
    question: "Koji je najvažniji grad za finansijski sektor?",
    options: ["New York", "London", "Tokyo", "Hong Kong"],
    answer: "New York"
  },
  {
    question: "Koji je najpopularniji sistem za upravljanje bazama podataka?",
    options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
    answer: "MySQL"
  },
  {
    question: "Koji je najpoznatiji film iz serijala 'Star Wars'?",
    options: [
      "The Phantom Menace",
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi"
    ],
    answer: "The Empire Strikes Back"
  },
  {
    question: "Koja je najpoznatija vrsta papagaja?",
    options: ["Ara", "Kakadu", "Senegal", "Amazon"],
    answer: "Ara"
  },
  {
    question: "Koji je najpoznatiji američki predsednik iz 20. veka?",
    options: [
      "Franklin D. Roosevelt",
      "Theodore Roosevelt",
      "John F. Kennedy",
      "Dwight D. Eisenhower"
    ],
    answer: "Franklin D. Roosevelt"
  },
  {
    question: "Ko je bio prvi predsednik Sjedinjenih Američkih Država?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John Adams"
    ],
    answer: "George Washington"
  },
  {
    question: "Koji je događaj označio početak Prvog svetskog rata?",
    options: [
      "Ubistvo nadvojvode Ferdinanda",
      "Napad na Pearl Harbor",
      "Početak revolucije u Rusiji",
      "Potezanje francuskih trupa"
    ],
    answer: "Ubistvo nadvojvode Ferdinanda"
  },
  {
    question: "Koja je civilizacija izgradila piramide u Egiptu?",
    options: ["Egipćani", "Mesopotamci", "Maje", "Inke"],
    answer: "Egipćani"
  },
  {
    question: "Ko je bio vođa Sovjetskog Saveza tokom Drugog svetskog rata?",
    options: [
      "Joseph Stalin",
      "Vladimir Lenin",
      "Leon Trotsky",
      "Nikita Khrushchev"
    ],
    answer: "Joseph Stalin"
  },
  {
    question: "Koja je bitka poznata kao preokret u Napoleonovim ratovima?",
    options: [
      "Bitka kod Vaterloa",
      "Bitka kod Borodina",
      "Bitka kod Austerlitza",
      "Bitka kod Trafalgara"
    ],
    answer: "Bitka kod Vaterloa"
  },
  {
    question:
      "Koja je poznata carstva bila smeštena na teritoriji današnje Turske?",
    options: [
      "Osmansko Carstvo",
      "Mongolsko Carstvo",
      "Rimsko Carstvo",
      "Persijsko Carstvo"
    ],
    answer: "Osmansko Carstvo"
  },
  {
    question: "Ko je bio prvi imperator Kine?",
    options: ["Qin Shi Huang", "Han Wudi", "Liu Bang", "Tang Taizong"],
    answer: "Qin Shi Huang"
  },
  {
    question: "Ko je bio lider Indijskog pokreta za nezavisnost?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Bhagat Singh"
    ],
    answer: "Mahatma Gandhi"
  },
  {
    question:
      "Koja revolucija je dovela do oslobađanja Francuske od monarhije?",
    options: [
      "Francuska revolucija",
      "Američka revolucija",
      "Ruska revolucija",
      "Engleska revolucija"
    ],
    answer: "Francuska revolucija"
  },
  {
    question: "Koji je dokument službeno završio Američki rat za nezavisnost?",
    options: [
      "Deklaracija o nezavisnosti",
      "Ugovor iz Pariza",
      "Ustav SAD",
      "Bill of Rights"
    ],
    answer: "Ugovor iz Pariza"
  },
  {
    question:
      "Koja poznata ličnost je bila kraljica Engleske tokom vladavine najduže u istoriji?",
    options: ["Elizabeta I", "Viktorija", "Henrik VIII", "George III"],
    answer: "Viktorija"
  },
  {
    question: "Ko je bio vođa Velikog vojnog ustanka u Rusiji 1917. godine?",
    options: [
      "Vladimir Lenin",
      "Leon Trotsky",
      "Joseph Stalin",
      "Alexander Kerensky"
    ],
    answer: "Vladimir Lenin"
  },
  {
    question: "Koji su narodi učestvovali u Hladnom ratu?",
    options: [
      "Sjedinjene Američke Države i Sovjetski Savez",
      "Francuska i Engleska",
      "Nemačka i Italija",
      "Japan i Kina"
    ],
    answer: "Sjedinjene Američke Države i Sovjetski Savez"
  },
  {
    question: "Ko je bio vođa borbe za prava crnaca u Americi tokom 1960-ih?",
    options: [
      "Martin Luther King Jr.",
      "Malcolm X",
      "Rosa Parks",
      "James Baldwin"
    ],
    answer: "Martin Luther King Jr."
  },
  {
    question: "Koji poznati istraživač je otkrio Ameriku 1492. godine?",
    options: [
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Vasco da Gama",
      "Hernán Cortés"
    ],
    answer: "Christopher Columbus"
  },
  {
    question: "Koji je najvažniji događaj u istoriji Američke revolucije?",
    options: [
      "Bitka kod Saratoge",
      "Bitka kod Yorktowna",
      "Bitka kod Lexingtona",
      "Bitka kod Bunker Hill"
    ],
    answer: "Bitka kod Yorktowna"
  },
  {
    question:
      "Koji je najznačajniji rimski imperator bio poznat po izgradnji Koloseuma?",
    options: ["Vespazijan", "Augustus", "Trajan", "Hadrian"],
    answer: "Vespazijan"
  },
  {
    question: "Koja poznata civilizacija je izgradila Machu Picchu?",
    options: ["Inke", "Maje", "Egipćani", "Azteci"],
    answer: "Inke"
  },
  {
    question: "Koji je najvažniji događaj u američkoj građanskoj ratu?",
    options: [
      "Bitka kod Gettysburga",
      "Bitka kod Antietama",
      "Bitka kod Bull Run",
      "Kapitulacija u Appomattoxu"
    ],
    answer: "Kapitulacija u Appomattoxu"
  },
  {
    question: "Ko je bio vođa prve krstaške vojne?",
    options: [
      "Urban II",
      "Richard Lavljeg Srca",
      "Friedrich Barbarossa",
      "Saladin"
    ],
    answer: "Urban II"
  },
  {
    question: "Koji je najvažniji događaj iz perioda Rimske republike?",
    options: [
      "Cezarov prelazak reke Rubikon",
      "Bitka kod Actiuma",
      "Povratak iz Egipta",
      "Bitka kod Cannae"
    ],
    answer: "Cezarov prelazak reke Rubikon"
  },
  {
    question: "Ko je bio poslednji car Rusije?",
    options: ["Nikola II", "Aleksandar III", "Petar Veliki", "Ivan IV"],
    answer: "Nikola II"
  },
  {
    question:
      "Koja je najvažnija manifestacija u istoriji američkog kolonijalnog perioda?",
    options: [
      "Boston Tea Party",
      "Prvi kontinetalni kongres",
      "Boston Massacre",
      "Bitka kod Lexingtona"
    ],
    answer: "Boston Tea Party"
  },
  {
    question: "Koji je najveći okean na svetu?",
    options: [
      "Atlantski okean",
      "Tihi okean",
      "Indijski okean",
      "Arktički okean"
    ],
    answer: "Tihi okean"
  },
  {
    question: "Koja reka je najduža na svetu?",
    options: ["Amazon", "Nil", "Yangtze", "Misisipi"],
    answer: "Nil"
  },
  {
    question: "Koji je najviši vrh na svetu?",
    options: ["K2", "Mont Blanc", "Everest", "Makalu"],
    answer: "Everest"
  },

  {
    question: "Koji je najveći kontinent po površini?",
    options: ["Afrika", "Azija", "Evropa", "Južna Amerika"],
    answer: "Azija"
  },
  {
    question: "Koja država ima najdužu obalu na svetu?",
    options: ["Kanada", "Rusija", "Sjedinjene Američke Države", "Australija"],
    answer: "Kanada"
  },
  {
    question: "Koji je najveći grad u Brazilu?",
    options: ["Rio de Janeiro", "Salvador", "São Paulo", "Belo Horizonte"],
    answer: "São Paulo"
  },
  {
    question: "Koji je najveći jezero u Africi?",
    options: [
      "Jezero Viktorija",
      "Jezero Tanganjika",
      "Jezero Malawi",
      "Jezero Albert"
    ],
    answer: "Jezero Viktorija"
  },
  {
    question: "Koji je glavni grad Japana?",
    options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
    answer: "Tokyo"
  },

  {
    question: "Koji je najduži most na svetu?",
    options: [
      "Danyang–Kunshan Veliki most",
      "Most na Akashiju",
      "Verrazano-Narrows most",
      "Most na Hangzhou"
    ],
    answer: "Danyang–Kunshan Veliki most"
  },
  {
    question: "Koji je najpoznatiji planinski lanac u Južnoj Americi?",
    options: ["Andi", "Alpi", "Rockies", "Karpati"],
    answer: "Andi"
  },
  {
    question: "Koji je najdeblji vulkan na svetu?",
    options: ["Mauna Loa", "Kilauea", "Mount Fuji", "Mount St. Helens"],
    answer: "Mauna Loa"
  },
  {
    question: "Koja je najdeblja reka na svetu?",
    options: ["Amazon", "Niger", "Mississippi", "Jangce"],
    answer: "Amazon"
  },
  {
    question: "Koji je najveći arhipelag na svetu?",
    options: ["Indonezija", "Filipini", "Škotska", "Kanarski ostrva"],
    answer: "Indonezija"
  },
  {
    question: "Koja zemlja ima najviše vulkanskih ostrva?",
    options: ["Japan", "Indonezija", "Havaji", "Filipini"],
    answer: "Indonezija"
  },
  {
    question: "Koja reka teče kroz Pariz?",
    options: ["Seina", "Rajna", "Loara", "Dijana"],
    answer: "Seina"
  },
  {
    question: "Koji je najveći grad u Australiji?",
    options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
    answer: "Sydney"
  },
  {
    question: "Koja je najdublja tačka na Zemlji?",
    options: [
      "Marijanski rov",
      "Rov Challenger",
      "Rov Puerto Rico",
      "Rov Java"
    ],
    answer: "Marijanski rov"
  },
  {
    question: "Koji je najveći zaliv na svetu?",
    options: [
      "Zaliv Hudson",
      "Zaliv Bengalski",
      "Zaliv Meksički",
      "Zaliv Persijski"
    ],
    answer: "Zaliv Bengalski"
  },
  {
    question: "Koja država je najbliža Antarktici?",
    options: ["Čile", "Argentina", "Australija", "Novi Zeland"],
    answer: "Argentina"
  },
  {
    question: "Koji je najduži naziv države u Evropi?",
    options: [
      "Republika Malta",
      "Savez Republike Jugoslavije",
      "Velika Britanija",
      "Republika Moldavija"
    ],
    answer: "Republika Moldavija"
  },
  {
    question: "Koji je najviši aktivni vulkan na svetu?",
    options: ["Ojos del Salado", "Mount St. Helens", "Kilauea", "Etna"],
    answer: "Ojos del Salado"
  },
  {
    question: "Koji je najveći grad u Nemačkoj?",
    options: ["Berlin", "Hamburg", "Minhen", "Frankfurt"],
    answer: "Berlin"
  },
  {
    question: "Koji je najpoznatiji prirodni park u SAD-u?",
    options: ["Yellowstone", "Yosemite", "Grand Canyon", "Zion"],
    answer: "Yellowstone"
  },
  {
    question: "Koja je najvažnija reka u Egiptu?",
    options: ["Nil", "Amazon", "Tigra", "Eufrat"],
    answer: "Nil"
  },
  {
    question: "Koji je najpoznatiji nacionalni park u Kanadi?",
    options: ["Banff", "Jasper", "Yoho", "Kootenay"],
    answer: "Banff"
  },
  {
    question: "Koji je najhladniji grad na svetu?",
    options: ["Norilsk", "Jakutsk", "Barrow", "Oymyakon"],
    answer: "Oymyakon"
  },
  {
    question: "Koji je najpoznatiji prirodni fenomen u Norveškoj?",
    options: ["Aurora Borealis", "Vojvodina", "Gejziri", "Sveta Sofija"],
    answer: "Aurora Borealis"
  },
  {
    question: "Koji je najveći ostrvski grad na svetu?",
    options: ["Jakarta", "Honolulu", "Hong Kong", "Manila"],
    answer: "Jakarta"
  },
  {
    question: "Koji je najvažniji grad u Južnoj Koreji?",
    options: ["Seul", "Busan", "Incheon", "Gwangju"],
    answer: "Seul"
  },
  {
    question: "Koji je najviši vodopad u svetu?",
    options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    answer: "Angel Falls"
  },
  {
    question: "Koji je najpoznatiji prirodni most na svetu?",
    options: [
      "Bridge of Sighs",
      "Natural Bridge",
      "The Stone Arch Bridge",
      "Devils Bridge"
    ],
    answer: "Natural Bridge"
  },
  {
    question: "Koji je najpoznatiji sistem rečnih delta na svetu?",
    options: [
      "Delta Nila",
      "Delta Amazona",
      "Delta Mississippija",
      "Delta Mekonga"
    ],
    answer: "Delta Nila"
  },
  {
    question: "Koji je najpoznatiji prirodni park u Australiji?",
    options: ["Great Barrier Reef", "Kakadu", "Uluru-Kata Tjuta", "Daintree"],
    answer: "Great Barrier Reef"
  },
  {
    question: "Ko je napisao roman 'Sto godina samoće'?",
    options: [
      "Gabriel García Márquez",
      "Miguel de Cervantes",
      "Pablo Neruda",
      "Mario Vargas Llosa"
    ],
    answer: "Gabriel García Márquez"
  },
  {
    question: "Koji roman je napisao Dostojevski?",
    options: [
      "Zločin i kazna",
      "Anna Karenjina",
      "Braća Karamazovi",
      "Rat i mir"
    ],
    answer: "Zločin i kazna"
  },
  {
    question: "Ko je autor knjige 'Ponos i predrasude'?",
    options: [
      "Jane Austen",
      "Charlotte Brontë",
      "Emily Brontë",
      "Mary Shelley"
    ],
    answer: "Jane Austen"
  },
  {
    question:
      "Koji književni pravac je poznat po detaljnom prikazu unutrašnjih monologa?",
    options: ["Realizam", "Modernizam", "Romantizam", "Barok"],
    answer: "Modernizam"
  },
  {
    question: "Ko je napisao 'Mali princ'?",
    options: [
      "Antoine de Saint-Exupéry",
      "Victor Hugo",
      "Jules Verne",
      "Marcel Proust"
    ],
    answer: "Antoine de Saint-Exupéry"
  },
  {
    question: "Koji je najpoznatiji roman Charlesa Dickensa?",
    options: [
      "Oliver Twist",
      "David Copperfield",
      "A Tale of Two Cities",
      "Great Expectations"
    ],
    answer: "Great Expectations"
  },
  {
    question: "Ko je napisao pesmu 'Božanstvena komedija'?",
    options: ["Dante Alighieri", "Giovanni Boccaccio", "Petrarca", "Virgil"],
    answer: "Dante Alighieri"
  },
  {
    question: "Koja knjiga je napisana u obliku pisama i ima naslov 'Drakula'?",
    options: [
      "Bram Stoker",
      "Mary Shelley",
      "Robert Louis Stevenson",
      "H.G. Wells"
    ],
    answer: "Bram Stoker"
  },
  {
    question: "Koji pisac je poznat po trilogiji 'Gospodar prstenova'?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "J.K. Rowling",
      "George R.R. Martin"
    ],
    answer: "J.R.R. Tolkien"
  },
  {
    question: "Ko je napisao 'Peti dan'?",
    options: ["Joan Didion", "Ray Bradbury", "Stephen King", "Marge Piercy"],
    answer: "Ray Bradbury"
  },
  {
    question: "Koji roman je napisao Ernest Hemingway?",
    options: [
      "Za kim je zvono zapevalo",
      "Starac i more",
      "Sunce se ponovo rađa",
      "I svi su se smejali"
    ],
    answer: "Starac i more"
  },
  {
    question: "Koji roman je napisao Leo Tolstoj?",
    options: [
      "Rats i mir",
      "Ana Karenjina",
      "Zločin i kazna",
      "Braća Karamazovi"
    ],
    answer: "Ana Karenjina"
  },
  {
    question: "Koji je najpoznatiji roman Marka Tvena?",
    options: [
      "Avanture Huckleberry Finna",
      "Tom Sojer",
      "Otok s blagom",
      "David Copperfield"
    ],
    answer: "Avanture Huckleberry Finna"
  },
  {
    question: "Ko je autor 'Ubijeni u strahu'?",
    options: [
      "Stephen King",
      "James Patterson",
      "Agatha Christie",
      "Dan Brown"
    ],
    answer: "Stephen King"
  },
  {
    question: "Koja knjiga je napisana od strane Haruki Murakamija?",
    options: [
      "1Q84",
      "Norwegian Wood",
      "Kafka na obali",
      "Svetlost koju nismo videli"
    ],
    answer: "1Q84"
  },
  {
    question: "Koji roman je napisala J.K. Rowling?",
    options: [
      "Harry Potter i Kamen mudraca",
      "Gospodar prstenova",
      "Svetlucavi svet",
      "Pusti svet"
    ],
    answer: "Harry Potter i Kamen mudraca"
  },
  {
    question: "Koja knjiga je napisana od strane Georgea Orwella?",
    options: ["1984", "Farma životinja", "Ponos i predrasude", "Veliki Gatsby"],
    answer: "1984"
  },
  {
    question: "Ko je napisao knjigu 'Ubiti pticu rugalicu'?",
    options: [
      "Harper Lee",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain"
    ],
    answer: "Harper Lee"
  },
  {
    question: "Koja knjiga je napisana od strane Marguerite Yourcenar?",
    options: [
      "Memoari Hadrijana",
      "Pogled iz mog prozora",
      "Vođa",
      "Povratak na farmu"
    ],
    answer: "Memoari Hadrijana"
  },
  {
    question: "Koji roman je napisao Gabriel García Márquez?",
    options: [
      "Sto godina samoće",
      "Ljubav u vreme kolere",
      "Kao voda za čokoladu",
      "Kratki romani"
    ],
    answer: "Sto godina samoće"
  },
  {
    question: "Koji pisac je autor romana 'Ubićemo sve komarce'?",
    options: [
      "David Foster Wallace",
      "Philip Roth",
      "Thomas Pynchon",
      "Don DeLillo"
    ],
    answer: "David Foster Wallace"
  },
  {
    question: "Ko je napisao knjigu 'Kreacija'?",
    options: [
      "J. G. Ballard",
      "William Gibson",
      "Aldous Huxley",
      "Harlan Ellison"
    ],
    answer: "Aldous Huxley"
  },
  {
    question: "Koji je pisac romana 'Američki psiho'?",
    options: [
      "Bret Easton Ellis",
      "Chuck Palahniuk",
      "Don Delillo",
      "Jay McInerney"
    ],
    answer: "Bret Easton Ellis"
  },
  {
    question: "Koja knjiga je napisao Kazuo Ishiguro?",
    options: [
      "Nikad me ne ostavi",
      "Obećana zemlja",
      "Muzej i biblioteka",
      "Zemlja predaka"
    ],
    answer: "Nikad me ne ostavi"
  },
  {
    question: "Ko je autor romana 'Zlato od 5000 dinara'?",
    options: [
      "Branislav Nušić",
      "Milan Kundera",
      "Ivo Andrić",
      "Radoje Domanović"
    ],
    answer: "Radoje Domanović"
  },
  {
    question: "Koji je hemijski simbol za zlato?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au"
  },
  {
    question:
      "Koja planeta u našem Sunčevom sistemu je poznata kao 'Crvena planeta'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Koji gas čini najveći deo Zemljine atmosfere?",
    options: ["Azot", "Kisik", "Argon", "Karbondioksid"],
    answer: "Azot"
  },
  {
    question: "Ko je poznati fizičar koji je razvio teoriju relativnosti?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Niels Bohr"
    ],
    answer: "Albert Einstein"
  },
  {
    question: "Koja je najvrednija jedinica u kvantnoj mehanici?",
    options: [
      "Planckova konstanta",
      "Gravitaciona konstanta",
      "Brinova konstanta",
      "Avogadrova konstanta"
    ],
    answer: "Planckova konstanta"
  },
  {
    question: "Šta je fotosinteza?",
    options: [
      "Proces proizvodnje hrane u biljkama",
      "Proces proizvodnje energije u ljudskom telu",
      "Proces stvaranja novih ćelija",
      "Proces razgradnje materijala"
    ],
    answer: "Proces proizvodnje hrane u biljkama"
  },
  {
    question: "Koja je osnovna jedinica genetskog materijala?",
    options: ["Hromozom", "Gen", "RNA", "Protein"],
    answer: "Gen"
  },
  {
    question: "Koji je najčešći element u ljudskom telu?",
    options: ["Kiseonik", "Ugljenik", "Vodonik", "Azot"],
    answer: "Kiseonik"
  },
  {
    question: "Koja vrsta zračenja je poznata kao alfa zračenje?",
    options: [
      "Ponderirani protoni",
      "Neutronski talasi",
      "Helijumova jezgra",
      "Fotoni"
    ],
    answer: "Helijumova jezgra"
  },
  {
    question: "Ko je poznat kao 'otac genetike'?",
    options: [
      "Gregor Mendel",
      "Charles Darwin",
      "Louis Pasteur",
      "James Watson"
    ],
    answer: "Gregor Mendel"
  },
  {
    question: "Koji hemijski element je poznat po simbolu 'Hg'?",
    options: ["Zlato", "Živa", "Srebro", "Cink"],
    answer: "Živa"
  },
  {
    question: "Koja naučna disciplina proučava ponašanje organizama?",
    options: ["Biologija", "Hemija", "Fizika", "Astronomija"],
    answer: "Biologija"
  },
  {
    question:
      "Koji je osnovni princip termodinamike poznat kao 'zlatno pravilo'?",
    options: [
      "Energent se ne može stvoriti niti uništiti",
      "Svi sistemi teže stabilnosti",
      "Svaka akcija ima svoju reakciju",
      "Energetski transfer je uvek neefikasan"
    ],
    answer: "Energent se ne može stvoriti niti uništiti"
  },
  {
    question: "Koji je najdublji okean na svetu?",
    options: [
      "Atlantski okean",
      "Tihi okean",
      "Indijski okean",
      "Arktički okean"
    ],
    answer: "Tihi okean"
  },
  {
    question: "Koja je osnovna jedinica u biologiji?",
    options: ["Ćelija", "Organizam", "Tkivo", "Organ"],
    answer: "Ćelija"
  },
  {
    question: "Koja je najvažnija komponenta vazduha za sagorevanje?",
    options: ["Azot", "Kisik", "Argon", "Karbondioksid"],
    answer: "Kisik"
  },
  {
    question: "Koji je najvažniji proces za proizvodnju energije u biljkama?",
    options: ["Fotosinteza", "Respiracija", "Fermentacija", "Oksidacija"],
    answer: "Fotosinteza"
  },
  {
    question: "Koja je osnovna jedinica električne energije?",
    options: ["Volt", "Amper", "Oma", "Joule"],
    answer: "Joule"
  },
  {
    question: "Koja naučna disciplina proučava zvezde i galaksije?",
    options: ["Astronomija", "Astrofizika", "Geologija", "Meteorologija"],
    answer: "Astronomija"
  },
  {
    question: "Koji je najteži element u periodnom sistemu?",
    options: ["Uranijum", "Plutonijum", "Toriijum", "Radijum"],
    answer: "Plutonijum"
  },
  {
    question: "Ko je otkrio penicilin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Robert Koch",
      "Joseph Lister"
    ],
    answer: "Alexander Fleming"
  },
  {
    question: "Koja je funkcija crvenih krvnih zrnaca?",
    options: [
      "Prenos kiseonika",
      "Odbrana od infekcija",
      "Regulacija temperature",
      "Koagulacija krvi"
    ],
    answer: "Prenos kiseonika"
  },
  {
    question: "Koji je poznati umetnik poznat po slikanju 'Mona Lise'?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet"
    ],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Ko je autor čuvenog dela 'Sveti Petar u Rimu'?",
    options: ["Michelangelo", "Raphael", "Caravaggio", "Titian"],
    answer: "Michelangelo"
  },
  {
    question:
      "Koji umetnički pravac se povezuje sa radovima Vincenta van Gogha?",
    options: ["Impresionizam", "Postimpresionizam", "Realizam", "Kubizam"],
    answer: "Postimpresionizam"
  },
  {
    question: "Ko je autor poznatog remek-dela 'Noćna straža'?",
    options: ["Rembrandt", "Vermeer", "Goya", "Renoir"],
    answer: "Rembrandt"
  },
  {
    question: "Koji umetnik je poznat po svom delu 'Guernica'?",
    options: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Henri Matisse",
      "Marc Chagall"
    ],
    answer: "Pablo Picasso"
  },
  {
    question: "Ko je autor 'Poslednje večere'?",
    options: ["Leonardo da Vinci", "Titian", "Botticelli", "Gustav Klimt"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Koja umetnička dela su stvorena tokom renesanse?",
    options: [
      "David i Mona Liza",
      "Starac i more",
      "Prikazanje sveta",
      "Gospodar prstenova"
    ],
    answer: "David i Mona Liza"
  },
  {
    question: "Koji umetnik je poznat po radu u stilu nadrealizma?",
    options: [
      "Salvador Dalí",
      "Claude Monet",
      "Jackson Pollock",
      "Edvard Munch"
    ],
    answer: "Salvador Dalí"
  },
  {
    question: "Ko je autor poznatog dela 'Skrivanje ljubavi'?",
    options: ["Jan van Eyck", "Gustav Klimt", "Albrecht Dürer", "Paul Cézanne"],
    answer: "Gustav Klimt"
  },
  {
    question: "Koji umetnik je stvorio 'Pikassoov portret'?",
    options: ["Pablo Picasso", "Henri Matisse", "Marc Chagall", "Paul Gauguin"],
    answer: "Pablo Picasso"
  },
  {
    question: "Koji umetnik je bio osnivač impresionizma?",
    options: [
      "Claude Monet",
      "Édouard Manet",
      "Pierre-Auguste Renoir",
      "Camille Pissarro"
    ],
    answer: "Claude Monet"
  },
  {
    question: "Ko je autor poznatog dela 'Osmica'?",
    options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "El Greco"],
    answer: "El Greco"
  },
  {
    question: "Koji umetnik je bio poznat po svojoj tehnici 'splash' slikanja?",
    options: [
      "Jackson Pollock",
      "Andy Warhol",
      "Mark Rothko",
      "Willem de Kooning"
    ],
    answer: "Jackson Pollock"
  },
  {
    question: "Ko je autor 'Slikanja žene u zelenoj haljini'?",
    options: [
      "Édouard Manet",
      "Auguste Renoir",
      "Henri Toulouse-Lautrec",
      "Berthe Morisot"
    ],
    answer: "Édouard Manet"
  },
  {
    question:
      "Koji umetnički pravac se povezuje sa radovima Wassily Kandinskyja?",
    options: [
      "Apstraktni ekspresionizam",
      "Futurizam",
      "Surrealizam",
      "Impresionizam"
    ],
    answer: "Apstraktni ekspresionizam"
  },
  {
    question: "Ko je autor 'Mladog pijaniste'?",
    options: [
      "Édouard Manet",
      "Pierre-Auguste Renoir",
      "Claude Monet",
      "Gustav Klimt"
    ],
    answer: "Pierre-Auguste Renoir"
  },
  {
    question:
      "Koji umetnik je poznat po stvaranju skulptura u stilu minimalizma?",
    options: ["Donald Judd", "Jeff Koons", "Richard Serra", "Louise Bourgeois"],
    answer: "Donald Judd"
  },
  {
    question: "Ko je autor 'Povezanosti'?",
    options: ["Marc Chagall", "Kandinsky", "Miro", "Dali"],
    answer: "Joan Miró"
  },
  {
    question: "Koji umetnik je poznat po seriji 'Campbell's Soup Cans'?",
    options: [
      "Andy Warhol",
      "Roy Lichtenstein",
      "Jasper Johns",
      "Robert Rauschenberg"
    ],
    answer: "Andy Warhol"
  },
  {
    question: "Ko je autor 'Osmice'?",
    options: ["El Greco", "Goya", "Velázquez", "Murillo"],
    answer: "El Greco"
  },
  {
    question: "Ko je autor 'Slike Sunčevog sjaja'?",
    options: [
      "Claude Monet",
      "Vincent van Gogh",
      "Paul Cézanne",
      "Gustav Klimt"
    ],
    answer: "Claude Monet"
  },
  {
    question: "Koji je najpopularniji pretraživač na svetu?",
    options: ["Yahoo", "Bing", "Google", "DuckDuckGo"],
    answer: "Google"
  },
  {
    question: "Koji je najveći online maloprodajni gigant?",
    options: ["eBay", "Walmart", "Amazon", "Alibaba"],
    answer: "Amazon"
  },
  {
    question: "Koji je najpoznatiji električni automobil proizvođač?",
    options: ["Tesla", "Nissan", "Ford", "Chevrolet"],
    answer: "Tesla"
  },
  {
    question: "Koja zemlja je domaćin letnjih Olimpijskih igara 2024. godine?",
    options: ["Francuska", "Japan", "Sjedinjene Američke Države", "Nemačka"],
    answer: "Francuska"
  },
  {
    question:
      "Koja globalna organizacija je osnovana 1945. godine kako bi promovisala međunarodni mir i sigurnost?",
    options: ["Evropska unija", "UNESCO", "NATO", "Ujedinjene nacije"],
    answer: "Ujedinjene nacije"
  },
  {
    question:
      "Koja je najvrednija kompanija u svetu prema tržišnoj kapitalizaciji u 2024. godini?",
    options: ["Apple", "Microsoft", "Saudi Aramco", "Amazon"],
    answer: "Apple"
  },
  {
    question: "Koji je najpopularniji mobilni operativni sistem?",
    options: ["iOS", "Android", "Windows Phone", "HarmonyOS"],
    answer: "Android"
  },
  {
    question:
      "Koja zemlja ima najviši bruto domaći proizvod (BDP) po kupovnoj moći?",
    options: ["Sjedinjene Američke Države", "Kina", "Japan", "Indija"],
    answer: "Sjedinjene Američke Države"
  },
  {
    question:
      "Koji je najnoviji svetski rekord u brzini internetske konekcije?",
    options: ["1 Gbps", "10 Gbps", "100 Gbps", "1 Tbps"],
    answer: "1 Tbps"
  },
  {
    question: "Koja je najpopularnija video platforma na svetu?",
    options: ["YouTube", "Vimeo", "Dailymotion", "Twitch"],
    answer: "YouTube"
  },
  {
    question: "Koji je najnoviji trend u oblasti veštačke inteligencije?",
    options: [
      "Samoučeći algoritmi",
      "Automatsko prepoznavanje lica",
      "Razgovorni AI",
      "Računarska vizija"
    ],
    answer: "Razgovorni AI"
  },
  {
    question:
      "Koji je najnoviji model pametnog telefona proizveden od strane Apple-a?",
    options: ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    answer: "iPhone 15"
  },
  {
    question: "Koji je najpopularniji streaming servis za video sadržaj?",
    options: ["Netflix", "Hulu", "Disney+", "Amazon Prime Video"],
    answer: "Netflix"
  },
  {
    question:
      "Koja globalna ekološka inicijativa ima cilj da se smanji emisija ugljen-dioksida?",
    options: ["Pariški sporazum", "Kyoto protokol", "Rio+20", "Agenda 2030"],
    answer: "Pariški sporazum"
  },
  {
    question:
      "Koja je najpoznatija tehnološka kompanija koja se bavi proizvodnjom čipova?",
    options: ["Intel", "AMD", "Qualcomm", "NVIDIA"],
    answer: "Intel"
  },
  {
    question: "Koja zemlja je prvi put uspešno sletela na Mars sa roverom?",
    options: ["Sjedinjene Američke Države", "Kina", "Rusija", "Evropska unija"],
    answer: "Sjedinjene Američke Države"
  },
  {
    question:
      "Koja je najvažnija globalna organizacija za borbu protiv pandemija?",
    options: [
      "Svetska zdravstvena organizacija (WHO)",
      "Centar za kontrolu bolesti (CDC)",
      "UNICEF",
      "Globalni fond"
    ],
    answer: "Svetska zdravstvena organizacija (WHO)"
  },
  {
    question: "Koja je najnovija verzija Windows operativnog sistema?",
    options: ["Windows 10", "Windows 11", "Windows 12", "Windows Vista"],
    answer: "Windows 11"
  },
  {
    question: "Koji grad je domaćin najvećeg godišnjeg tehnološkog sajma CES?",
    options: ["San Francisco", "Las Vegas", "New York", "Los Angeles"],
    answer: "Las Vegas"
  },
  {
    question: "Koji je najpopularniji operativni sistem za desktop računare?",
    options: ["Linux", "Windows", "macOS", "Android"],
    answer: "Windows"
  },
  {
    question: "Koji je najpoznatiji programski jezik za razvoj web aplikacija?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Koji algoritam koristi 'Divide and Conquer' pristup?",
    options: ["Bubble sort", "Merge sort", "Insertion sort", "Selection sort"],
    answer: "Merge sort"
  },
  {
    question:
      "Koji protokol se koristi za sigurno preuzimanje datoteka preko interneta?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: "HTTPS"
  },
  {
    question: "Šta je 'virtualna mašina' u kontekstu računarstva?",
    options: [
      "Softverski emulator fizičkog računara",
      "Hardverski uređaj za obrada podataka",
      "Programski jezik za mašinsko učenje",
      "Vrsta operativnog sistema"
    ],
    answer: "Softverski emulator fizičkog računara"
  },
  {
    question:
      "Koji je najpoznatiji sistem za upravljanje relacijskim bazama podataka?",
    options: ["MySQL", "MongoDB", "Redis", "SQLite"],
    answer: "MySQL"
  },
  {
    question: "Šta znači 'API' u kontekstu razvoja softvera?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Automated Programming Interface",
      "Application Performance Index"
    ],
    answer: "Application Programming Interface"
  },
  {
    question:
      "Koji programski jezik je razvijen za upravljanje i manipulaciju web stranicama?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: "JavaScript"
  },
  {
    question:
      "Koji je najčešći oblik skladišta podataka u modernim bazama podataka?",
    options: ["XML", "JSON", "CSV", "YAML"],
    answer: "JSON"
  },
  {
    question: "Šta predstavlja 'hash funkciju' u računarstvu?",
    options: [
      "Funkciju koja generiše nasumične brojeve",
      "Funkciju koja vraća jedinstven kod za podatke",
      "Funkciju za pretraživanje podataka",
      "Funkciju za šifrovanje podataka"
    ],
    answer: "Funkciju koja vraća jedinstven kod za podatke"
  },
  {
    question: "Koji je najpopularniji verzioni sistem za kontrolu koda?",
    options: ["Subversion", "Git", "Mercurial", "CVS"],
    answer: "Git"
  },
  {
    question: "Šta znači 'Big Data' u kontekstu analize podataka?",
    options: [
      "Velike količine nestrukturiranih podataka",
      "Male količine strukturiranih podataka",
      "Podaci koji se nalaze u cloud-u",
      "Podaci koji su zaštićeni šifrom"
    ],
    answer: "Velike količine nestrukturiranih podataka"
  },
  {
    question:
      "Koji algoritam koristi 'K-nearest neighbors' metod za klasifikaciju podataka?",
    options: [
      "K-means clustering",
      "Decision Tree",
      "Support Vector Machine",
      "K-nearest neighbors"
    ],
    answer: "K-nearest neighbors"
  },
  {
    question:
      "Koji je najpoznatiji jezik za razvoj aplikacija u mašinskom učenju?",
    options: ["Java", "R", "Python", "C#"],
    answer: "Python"
  },
  {
    question: "Šta je 'enkripcija' u kontekstu zaštite podataka?",
    options: [
      "Proces kompresije podataka",
      "Proces pretvaranja podataka u nečitljiv format",
      "Proces pravljenja sigurnosnih kopija podataka",
      "Proces pretraživanja podataka"
    ],
    answer: "Proces pretvaranja podataka u nečitljiv format"
  },
  {
    question: "Koji operativni sistem koristi 'Open Source' model?",
    options: ["Windows", "macOS", "Linux", "iOS"],
    answer: "Linux"
  },
  {
    question:
      "Koji je najpoznatiji framework za izgradnju korisničkog interfejsa u JavaScript-u?",
    options: ["Angular", "React", "Vue.js", "Ember"],
    answer: "React"
  },
  {
    question: "Šta je 'cloud computing'?",
    options: [
      "Korišćenje lokalnih servera za skladištenje podataka",
      "Korišćenje udaljenih servera za skladištenje i obrada podataka",
      "Korišćenje fizičkih računara za obrada podataka",
      "Korišćenje mobilnih aplikacija za skladištenje podataka"
    ],
    answer: "Korišćenje udaljenih servera za skladištenje i obrada podataka"
  },
  {
    question: "Šta znači 'open source' u kontekstu softverskog razvoja?",
    options: [
      "Softver koji je besplatan za preuzimanje",
      "Softver čiji izvorni kod je dostupan javnosti",
      "Softver koji se koristi za kompresiju podataka",
      "Softver koji je dizajniran za samo jedan operativni sistem"
    ],
    answer: "Softver čiji izvorni kod je dostupan javnosti"
  },
  {
    question: "Koja je osnovna funkcija 'operativnog sistema'?",
    options: [
      "Obrada podataka",
      "Izrada grafičkog dizajna",
      "Upravljanje resursima računara",
      "Razvoj softverskih aplikacija"
    ],
    answer: "Upravljanje resursima računara"
  },
  {
    question: "Koji je osnovni element 'internet protokola' (IP) adrese?",
    options: [
      "Naziv domene",
      "Broj portova",
      "Broj koji identifikuje uređaj na mreži",
      "Verzija operativnog sistema"
    ],
    answer: "Broj koji identifikuje uređaj na mreži"
  },
  {
    question: "Koji je najpoznatiji protokol za slanje e-pošte?",
    options: ["POP3", "SMTP", "IMAP", "HTTP"],
    answer: "SMTP"
  },
  {
    question: "Šta je 'machine learning' u kontekstu veštačke inteligencije?",
    options: [
      "Proces učenja mašine bez ljudske intervencije",
      "Proces programiranja mašine za rešavanje matematičkih problema",
      "Proces automatizacije poslovnih procesa",
      "Proces analize podataka bez ljudske intervencije"
    ],
    answer: "Proces učenja mašine bez ljudske intervencije"
  },
  {
    question: "Koji je osnovni gradivni blok proteina?",
    options: ["Amino kiselina", "Nukleotid", "Monosaharid", "Masna kiselina"],
    answer: "Amino kiselina"
  },
  {
    question: "Koji organ u ljudskom telu proizvodi insulin?",
    options: ["Jetra", "Gušterača", "Bubrezi", "Srce"],
    answer: "Gušterača"
  },
  {
    question:
      "Koji proces omogućava biljci da proizvodi hranu koristeći sunčevu svetlost?",
    options: ["Fotosinteza", "Respiracija", "Fermentacija", "Transpiracija"],
    answer: "Fotosinteza"
  },
  {
    question: "Koji je najvažniji organ za filtraciju krvi u ljudskom telu?",
    options: ["Bubrezi", "Jetra", "Slezina", "Pluća"],
    answer: "Bubrezi"
  },
  {
    question: "Šta je DNA?",
    options: [
      "Dezoksiribonukleinska kiselina",
      "Ribonukleinska kiselina",
      "Proteinski kompleks",
      "Složeni šećer"
    ],
    answer: "Dezoksiribonukleinska kiselina"
  },
  {
    question: "Koji je najvažniji element u ljudskom kosturu?",
    options: ["Kalcijum", "Magnezijum", "Natrijum", "Gvožđe"],
    answer: "Kalcijum"
  },
  {
    question: "Koji tip ćelije ima jedro koje je jasno odvojeno od citoplazme?",
    options: [
      "Prokariotske ćelije",
      "Eukariotske ćelije",
      "Bakterijske ćelije",
      "Virusne ćelije"
    ],
    answer: "Eukariotske ćelije"
  },
  {
    question: "Koja biološka jedinica je osnovna jedinica života?",
    options: ["Organizam", "Ćelija", "Tkivo", "Organ"],
    answer: "Ćelija"
  },
  {
    question:
      "Koji organ u ljudskom telu je odgovoran za proizvodnju crvenih krvnih zrnaca?",
    options: ["Slezina", "Pluća", "Jetra", "Koštana srž"],
    answer: "Koštana srž"
  },
  {
    question: "Koji je najvažniji proces za obnavljanje ćelija i tkiva?",
    options: [
      "Mitotska deoba",
      "Mejotska deoba",
      "Transkripcija",
      "Replikacija"
    ],
    answer: "Mitotska deoba"
  },
  {
    question: "Koji je osnovni element koji čini molekule vode?",
    options: [
      "Kisik i vodonik",
      "Kalcijum i kiseonik",
      "Ugljenik i vodonik",
      "Azot i vodonik"
    ],
    answer: "Kisik i vodonik"
  },
  {
    question: "Koji je najvažniji faktor za održavanje ravnoteže ekosistema?",
    options: ["Biodiverzitet", "Klima", "Voda", "Gnojiva"],
    answer: "Biodiverzitet"
  },
  {
    question: "Koji je najvažniji genetski materijal u organizmu?",
    options: ["RNA", "DNA", "Proteini", "Lipidi"],
    answer: "DNA"
  },
  {
    question:
      "Koji organ je odgovoran za kontrolu i koordinaciju pokreta u ljudskom telu?",
    options: ["Moždana stabljika", "Mozak", "Spinalna moždina", "Nervi"],
    answer: "Mozak"
  },
  {
    question: "Šta su enzimi?",
    options: ["Biološki katalizatori", "Hormon", "Energija", "Krvne ćelije"],
    answer: "Biološki katalizatori"
  },
  {
    question: "Koji je proces pomoću kojeg biljke apsorbuju vodu iz tla?",
    options: [
      "Transpiracija",
      "Osmotski pritisak",
      "Evaporacija",
      "Apsorpcija"
    ],
    answer: "Apsorpcija"
  },
  {
    question: "Koji je najvažniji organ za disanje u ljudskom telu?",
    options: ["Srce", "Jetra", "Bubrezi", "Pluća"],
    answer: "Pluća"
  },
  {
    question: "Šta je osnovna funkcija mitohondrija?",
    options: [
      "Proizvodnja energije",
      "Sinteza proteina",
      "Dekodiranje DNK",
      "Transport hranljivih materija"
    ],
    answer: "Proizvodnja energije"
  },
  {
    question: "Koji tip biljaka ne proizvodi cvetove?",
    options: ["Cvećare", "Papratnje", "Jabuke", "Jela"],
    answer: "Papratnje"
  },
  {
    question:
      "Koji je najvažniji hranljivi materijal za rast i razvoj organizma?",
    options: ["Vitamini", "Minerali", "Ugljeni hidrati", "Voda"],
    answer: "Ugljeni hidrati"
  },
  {
    question: "Koji je najvažniji proces za proizvodnju energije u ćeliji?",
    options: [
      "Glikoliza",
      "Krebsov ciklus",
      "Elektronski transportni lanac",
      "Fotosinteza"
    ],
    answer: "Elektronski transportni lanac"
  },
  {
    question: "Koja je najbliža zvezda našem Sunčevom sistemu?",
    options: ["Proxima Centauri", "Sirius", "Betelgeuse", "Aldebaran"],
    answer: "Proxima Centauri"
  },
  {
    question:
      "Koja planeta u našem Sunčevom sistemu je poznata kao 'Crvena planeta'?",
    options: ["Venera", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Koji je najveći planet u našem Sunčevom sistemu?",
    options: ["Jupiter", "Saturn", "Uran", "Neptun"],
    answer: "Jupiter"
  },
  {
    question: "Šta uzrokuje promene u godišnjim dobima na Zemlji?",
    options: [
      "Rotacija Zemlje",
      "Nagib Zemljine ose",
      "Gravitacija Meseca",
      "Promene u Sunčevoj aktivnosti"
    ],
    answer: "Nagib Zemljine ose"
  },
  {
    question: "Koji planetarni sistem je najbliži našem Sunčevom sistemu?",
    options: [
      "Alpha Centauri",
      "Barnard's Star",
      "Tau Ceti",
      "Epsilon Eridani"
    ],
    answer: "Alpha Centauri"
  },
  {
    question: "Koji astronom je prvi koristio teleskop za posmatranje neba?",
    options: [
      "Nikola Kopernik",
      "Galileo Galilei",
      "Johannes Kepler",
      "Isaac Newton"
    ],
    answer: "Galileo Galilei"
  },
  {
    question: "Koji fenomen nastaje kada Mesec prelazi između Zemlje i Sunca?",
    options: [
      "Pomračenje Sunca",
      "Pomračenje Meseca",
      "Aurora Borealis",
      "Zvezdana kiša"
    ],
    answer: "Pomračenje Sunca"
  },
  {
    question: "Koji je najpoznatiji krater na Mesecu?",
    options: ["Tycho", "Crisium", "Copernicus", "Clavius"],
    answer: "Tycho"
  },
  {
    question: "Koji je najstariji poznati galaksijski tip?",
    options: [
      "Spiralni",
      "Eliptični",
      "Irregularni",
      "Aktivni galaksijski jezgri"
    ],
    answer: "Eliptični"
  },
  {
    question: "Šta je crna rupa?",
    options: [
      "Objekt sa velikom gravitacijom iz koje ništa ne može da pobegne",
      "Vrsta zvezde u terminalnoj fazi",
      "Planeta bez atmosfere",
      "Kometa koja se raspada"
    ],
    answer: "Objekt sa velikom gravitacijom iz koje ništa ne može da pobegne"
  },
  {
    question: "Koja zvezda je najbliža Zemlji nakon Sunca?",
    options: ["Alpha Centauri", "Sirius", "Proxima Centauri", "Betelgeuse"],
    answer: "Proxima Centauri"
  },
  {
    question: "Koji je najvažniji teleskop za posmatranje udaljenih galaksija?",
    options: ["Hubble", "Chandra", "James Webb", "Spitzer"],
    answer: "Hubble"
  },
  {
    question: "Šta predstavlja 'zvezdana kiša'?",
    options: [
      "Meteoriti koji ulaze u atmosferu",
      "Pojava zvezda na noćnom nebu",
      "Eksplozije supernova",
      "Pojava aurora na Zemlji"
    ],
    answer: "Meteoriti koji ulaze u atmosferu"
  },
  {
    question: "Koji planetarni prsten je najširi u našem Sunčevom sistemu?",
    options: [
      "Saturnov prsten",
      "Jupiterov prsten",
      "Uranov prsten",
      "Neptunov prsten"
    ],
    answer: "Saturnov prsten"
  },
  {
    question: "Koja je osnovna funkcija radioteleskopa?",
    options: [
      "Detekcija radio talasa iz svemira",
      "Posmatranje vidljive svetlosti",
      "Merenje infracrvenih zračenja",
      "Analiza UV svetlosti"
    ],
    answer: "Detekcija radio talasa iz svemira"
  },
  {
    question: "Koji je najveći known asteroid u našem Sunčevom sistemu?",
    options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
    answer: "Ceres"
  },
  {
    question: "Šta uzrokuje 'auroru borealis' ili 'severnu svetlost'?",
    options: [
      "Interakcija solarnih vetrova sa Zemljinom atmosferom",
      "Refleksija svetlosti od Meseca",
      "Eksplozije u svemiru",
      "Odraz svetlosti sa površine Sunca"
    ],
    answer: "Interakcija solarnih vetrova sa Zemljinom atmosferom"
  },
  {
    question: "Koji planet ima najveći broj poznatih meseca?",
    options: ["Jupiter", "Saturn", "Uran", "Neptun"],
    answer: "Saturn"
  },
  {
    question: "Koji fenomen opisuje 'crvenu pomeranje' u spektru svetlosti?",
    options: [
      "Povećanje talasne dužine svetlosti zbog udaljavanja",
      "Smanjenje talasne dužine svetlosti zbog približavanja",
      "Promena u svetlosnoj intenzitetu",
      "Ubrzanje svetlosti u vakuumu"
    ],
    answer: "Povećanje talasne dužine svetlosti zbog udaljavanja"
  },
  {
    question:
      "Koji je najpoznatiji program za modelovanje svemirskih objekata?",
    options: ["Celestia", "Stellarium", "Starry Night", "Universe Sandbox"],
    answer: "Stellarium"
  },
  {
    question:
      "Koji je najpoznatiji teleskop za posmatranje infracrvenih talasa?",
    options: ["Hubble", "James Webb", "Chandra", "Spitzer"],
    answer: "James Webb"
  },
  {
    question: "Ko je reditelj filma 'Pulp Fiction'?",
    options: [
      "Quentin Tarantino",
      "Steven Spielberg",
      "Martin Scorsese",
      "Francis Ford Coppola"
    ],
    answer: "Quentin Tarantino"
  },
  {
    question: "Koji film je osvojio Oskara za najbolji film 1994. godine?",
    options: [
      "Forrest Gump",
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Braveheart"
    ],
    answer: "Forrest Gump"
  },
  {
    question: "Koji glumac je igrao ulogu Jacka Dawson-a u filmu 'Titanic'?",
    options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"],
    answer: "Leonardo DiCaprio"
  },
  {
    question: "Koji film je poznat po rečenici 'I'll be back'?",
    options: ["Terminator", "Predator", "RoboCop", "Total Recall"],
    answer: "Terminator"
  },
  {
    question: "Koji film je prvi osvojio Oskara za najbolji animirani film?",
    options: ["Toy Story", "Finding Nemo", "Shrek", "The Incredibles"],
    answer: "Toy Story"
  },
  {
    question:
      "Koji film je poznat po sceni u kojoj se lik Jack Nicholson uzvikuje 'Here's Johnny!'?",
    options: [
      "The Shining",
      "A Few Good Men",
      "One Flew Over the Cuckoo's Nest",
      "Chinatown"
    ],
    answer: "The Shining"
  },
  {
    question:
      "Koji film iz 1999. godine je poznat po rečenici 'I see dead people'?",
    options: ["The Sixth Sense", "Fight Club", "American Beauty", "The Matrix"],
    answer: "The Sixth Sense"
  },
  {
    question:
      "Koji film je najuspešniji film svih vremena po bruto prihodu (pre inflacije)?",
    options: [
      "Avatar",
      "Titanic",
      "Avengers: Endgame",
      "Star Wars: A New Hope"
    ],
    answer: "Avatar"
  },
  {
    question: "Koji je najpoznatiji film Alfreda Hitchcocka?",
    options: ["Psycho", "Vertigo", "Rear Window", "North by Northwest"],
    answer: "Psycho"
  },
  {
    question: "Koji film je osvojio Oskara za najbolji film 2019. godine?",
    options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
    answer: "Parasite"
  },
  {
    question: "Koji film je bio prvi film u serijalu 'Star Wars'?",
    options: [
      "A New Hope",
      "The Phantom Menace",
      "The Empire Strikes Back",
      "Return of the Jedi"
    ],
    answer: "A New Hope"
  },
  {
    question: "Koji film je prvi osvojio Oskara za najbolju režiju?",
    options: ["Wings", "Sunrise", "The Broadway Melody", "The Broadway Melody"],
    answer: "Wings"
  },
  {
    question: "Koji glumac je igrao glavnu ulogu u filmu 'The Dark Knight'?",
    options: ["Christian Bale", "Heath Ledger", "Michael Caine", "Gary Oldman"],
    answer: "Christian Bale"
  },
  {
    question: "Koji film iz 1994. godine je režirao Robert Zemeckis?",
    options: [
      "Forrest Gump",
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Dumb and Dumber"
    ],
    answer: "Forrest Gump"
  },
  {
    question: "Koji film je poznat po rečenici 'Houston, we have a problem'?",
    options: ["Apollo 13", "Gravity", "The Martian", "Interstellar"],
    answer: "Apollo 13"
  },
  {
    question:
      "Koji je film najpoznatiji po rečenici 'You can't handle the truth!'?",
    options: ["A Few Good Men", "The Firm", "The Pelican Brief", "JFK"],
    answer: "A Few Good Men"
  },
  {
    question:
      "Koji film je poznat po sceni u kojoj lik smešta tajnu poruku u zamrznuti dres?",
    options: [
      "Inception",
      "Interstellar",
      "The Prestige",
      "The Usual Suspects"
    ],
    answer: "Interstellar"
  },
  {
    question: "Koji film iz 1982. godine je režirao Steven Spielberg?",
    options: [
      "E.T. the Extra-Terrestrial",
      "Raiders of the Lost Ark",
      "Close Encounters of the Third Kind",
      "Jaws"
    ],
    answer: "E.T. the Extra-Terrestrial"
  },
  {
    question:
      "Koji film je poznat po sceni u kojoj se lik Tom Hanks nalazi na ostrvu sa teniskom lopticom koju naziva Wilson?",
    options: [
      "Cast Away",
      "Forrest Gump",
      "Saving Private Ryan",
      "The Green Mile"
    ],
    answer: "Cast Away"
  },
  {
    question:
      "Koji film je poznat po rečenici 'Life is like a box of chocolates'?",
    options: [
      "Forrest Gump",
      "The Shawshank Redemption",
      "The Godfather",
      "Titanic"
    ],
    answer: "Forrest Gump"
  }
];

export default function App() {
  const [newName, setNewName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [showInput, setShowInput] = useState(true); // Za prikazivanje inputa
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Funkcija za prikaz imena i prelazak na pitanja
  const showGreeting = () => {
    if (newName.trim()) {
      setGreeting(newName[0].toUpperCase() + newName.slice(1).toLowerCase());
      setNewName("");
      setShowInput(false); // Sakrij input nakon submitovanja

      // Randomizuj pitanja i izaberi prvih 20
      const shuffledQuestions = [...questions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
      setRandomQuestions(shuffledQuestions);
    }
  };

  // Funkcija za proveru odgovora
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === randomQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(selectedAnswer);
  };

  // Funkcija za prelazak na sledeće pitanje
  const nextQuestion = () => {
    setSelectedOption(""); // Resetuj odabranu opciju
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Pređi na sledeće pitanje
  };

  // Funkcija za resetovanje kviza
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowInput(true);
    setRandomQuestions([]);
    setGreeting("");
  };

  return (
    <div>
      {/* Prikaži ime */}
      {greeting && <h1>Zdravo, {greeting}</h1>}

      {/* Prikaži input za unos imena ako je vidljiv */}
      {showInput && (
        <InputName
          newName={newName}
          setNewName={setNewName}
          showGreeting={showGreeting}
        />
      )}

      {/* Kada ime bude prikazano, prikazuj pitanja ispod */}
      {!showInput && currentQuestionIndex < randomQuestions.length && (
        <Questions
          questions={randomQuestions}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          selectedOption={selectedOption}
          nextQuestion={nextQuestion}
        />
      )}

      {/* Prikaži rezultat i dugme za reset nakon poslednjeg pitanja */}
      {currentQuestionIndex >= randomQuestions.length &&
        randomQuestions.length > 0 && (
          <div>
            <h2>
              Završili ste kviz! Vaš rezultat je: {score} od{" "}
              {randomQuestions.length}
            </h2>
            <Reset resetQuiz={resetQuiz} />
          </div>
        )}
    </div>
  );
}

// Komponenta za unos imena
function InputName({ newName, setNewName, showGreeting }) {
  return (
    <div className="input-name-container">
      <input
        type="text"
        placeholder="Unesi svoje ime🙂"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={showGreeting}>Potvrdi ime</button>
    </div>
  );
}

// Komponenta za prikaz pitanja i odgovora
function Questions({
  questions,
  onAnswer,
  currentQuestionIndex,
  selectedOption,
  nextQuestion
}) {
  const { question, options, answer } = questions[currentQuestionIndex];

  return (
    <div>
      {/* Prikaz broja pitanja */}
      <h2>
        Pitanje {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          disabled={!!selectedOption} // Onemogući izbor nakon odabira
          style={{
            backgroundColor:
              selectedOption === option
                ? option === answer
                  ? "green"
                  : "red"
                : "black"
          }}
        >
          {option}
        </button>
      ))}
      {/* Prikaži dugme "Sledeće pitanje" ako je korisnik izabrao odgovor */}
      {selectedOption && (
        <button onClick={nextQuestion}>Sledeće pitanje</button>
      )}
    </div>
  );
}

// Komponenta za resetovanje kviza
function Reset({ resetQuiz }) {
  return (
    <div className="reset-container">
      <h2>Probaj ponovo</h2>
      <button onClick={resetQuiz}>Resetuj kviz</button>
    </div>
  );
}
