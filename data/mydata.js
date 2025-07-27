
const categoriesData = {
    "1": {
        name: "Kopitari",
        products: [
            { id:"ko1", name: "Alpski kozorog", image: "images/kopitari/alpine-ibex-8208622_1280.jpg" },
            { id:"ko2", name: "Konj", image: "images/kopitari/horse.jpg" },
            { id:"ko3", name: "Ovca", image: "images/kopitari/sheep-8106018_1280.jpg" },
            { id:"ko4", name: "Planinski bongo", image: "images/kopitari/mountain-bongo-7401607_1280.jpg" },
            { id:"ko5", name: "Zebra", image: "images/kopitari/zebra-7605319_1280.jpg" },
        ]
    },
    "2": {
        name: "Kukci",
        products: [
            { id:"ku1", name: "Bubamara", image: "images/kukci/seven-spot--ladybird.jpg" },
            { id:"ku2", name: "Lisni žižak", image: "images/kukci/weevil.jpg" },
            { id:"ku3", name: "Muha zujara", image: "images/kukci/blue-bottle-fly.jpg" },
            { id:"ku4", name: "Prugasti smrdljivac", image: "images/kukci/Graphosoma-lineatum.jpg" },
            { id:"ku5", name: "Sličnokrilac", image: "images/kukci/damselfly-4353363_1280.jpg" },
            
        ]
    },
    "3": {
        name: "Mačke",
        products: [
            { id:"mač1", name: "Gepard", image: "images/macke/cheetah-7277665_1280.jpg" },
            { id:"mač2", name: "Kostarikanska puma", image: "images/macke/Costa-Rican-cougar-6971086_1280.jpg" },
            { id:"mač3", name: "Lav", image: "images/macke/lion-1972771_1280.jpg" },
            { id:"mač4", name: "Sibirski tigar", image: "images/macke/siberian-tiger-1975790_1280.jpg" },
            { id:"mač5", name: "Tabby mačka", image: "images/macke/tabby-cat.jpg" }
        ]
    },
    "4": {
        name: "Majmuni",
        products: [
            { id:"maj1", name: "Berbarski makaki", image: "images/majmuni/Barbary macaque.jpg" },
            { id:"maj2", name: "Humboldtova majmun-vjeverica", image: "images/majmuni/humboldt-totenkopfaffe.jpg" },
            { id:"maj3", name: "Javanski makaki", image: "images/majmuni/Crab-eating-macaque.jpg" },
            { id:"maj4", name: "Pug majmun", image: "images/majmuni/pug-monkey.jpg" },
            { id:"maj5", name: "Zlatni lavlji tamarin", image: "images/majmuni/golden-lion-tamarin.jpg" }
        ]
    },
    "5": {
        name: "Medvjedi",
        products: [
            { id:"med1", name: "Crvena panda", image: "images/medvjedi/red-panda.jpg" },
            { id:"med2", name: "Grizli", image: "images/medvjedi/grizzly-bear-1315128_1280.jpg" },
            { id:"med3", name: "Polarni medvjed", image: "images/medvjedi/polar-bear-7955893_1280.jpg" },
            { id:"med4", name: "Smeđi medvjed", image: "images/medvjedi/brown-bear.jpg" },
            { id:"med5", name: "Sunčev medvjed", image: "images/medvjedi/sun-bear.jpg" }
        ]
    },

    "6": {
        name: "Psi",
        products: [
            { id:"pa1", name: "Basset Hound", image: "images/psi/basset-hound-7861037_1280.jpg" },
            { id:"pa2", name: "Bulldog", image: "images/psi/bulldog-8439530_1280.jpg" },
            { id:"pa3", name: "Jack Russell Terrier", image: "images/psi/jack-russel-terrier.jpg" },
            { id:"pa4", name: "Jazavčar", image: "images/psi/dachshund-1519374_1280.jpg" },
            { id:"pa5", name: "Vajmarski ptičar", image: "images/psi/weimaraner.jpg" }
        ]
    },
    "7": {
        name: "Ptice",
        products: [
            { id:"pt1", name: "Annin kolibrić", image: "images/ptice/Anna's-hummingbird.jpg" },
            { id:"pt2", name: "Gak", image: "images/ptice/black-crowned--night--heron.jpg" },
            { id:"pt3", name: "Galeb", image: "images/ptice/seagull-7991991_1280.jpg" },
            { id:"pt4", name: "Južni maskirani tkalac", image: "images/ptice/southern-masked-weaver-5189346_1280.jpg" },
            { id:"pt5", name: "Žutokljuni labud", image: "images/ptice/whooper-swan-7606921_1280.jpg" }
        ]
    },
    "8": {
        name: "Ribe",
        products: [
            { id:"r1", name: "Crvena lavica", image: "images/ribe/red-lionfish-4482131_1280.jpg" },
            { id:"r2", name: "Heckel diskus", image: "images/ribe/red-discus-fish-1943755_1280.jpg" },
            { id:"r3", name: "Kirnja glavulja", image: "images/ribe/wreckfish.jpg" },
            { id:"r4", name: "Oskar", image: "images/ribe/oscar-fish-7767315_1280.jpg" },
            { id:"r5", name: "Sijamski borac", image: "images/ribe/siamese-fighting-fish.jpg" },
        ]
    },
    "9": {
        name: "Zmije",
        products: [
            { id:"z1", name: "Burmanski piton", image: "images/zmije/albino-burmese-python-8511553_1280.jpg" },
            { id:"z2", name: "Dasypeltis", image: "images/zmije/dasypeltis.jpg" },
            { id:"z3", name: "Smrtonosna guja", image: "images/zmije/commonDeathAdder.jpg" },
            { id:"z4", name: "Teksaška čegrtuša", image: "images/zmije/western-diamondback-rattlesnake-9014179_1280.jpg" },
            { id:"z5", name: "Zeleni piton", image: "images/zmije/greenTreePython.jpg" },
        ]
    },
    "10": {
        name: "Žabe",
        products: [
            { id:"ž1", name: "Australska zelena žaba", image: "images/zabe/greenTreeFrog.jpg" },
            { id:"ž2", name: "Crvenooka gatalinka", image: "images/zabe/red-eyedTreeFrog.jpg" },
            { id:"ž3", name: "Madagaskarska žaba rajčica", image: "images/zabe/Madagaskar-tomato-frog-208591_1280.jpg" },
            { id:"ž4", name: "Plava otrovna žaba", image: "images/zabe/bluePoisonDartFrog.jpg" },
            { id:"ž5", name: "Smaragdnooka žaba", image: "images/zabe/emerald-eyedTreeFrog.jpg" },
        ]
    }
    
};

module.exports = categoriesData;