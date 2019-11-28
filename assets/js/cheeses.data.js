var cheeses = [
    {
        "name": "Fromager d'Affinois",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Soft",
        "texture": "Creamy, smooth",
        "flavor": "Grassy, mild, milky, sweet"
    },
    {
        "name": "Manchego",
        "origin": "Spain",
        "animal": "Sheep",
        "pasteurized": false,
        "type": null,
        "texture": "Firm, supple",
        "flavor": "Fruity, nutty, sweet, tangy"
    },
    {
        "name": "Caciotta al Tartufo",
        "origin": "Italy",
        "animal": "Cow, sheep",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Firm",
        "flavor": "Mild, tangy"
    },
    {
        "name": "Challerhocker",
        "origin": "Switzerland",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Hard",
        "texture": "Creamy, dense, smooth",
        "flavor": "Caramel, nutty, salty, sweet"
    },
    {
        "name": "Midnight Moon",
        "origin": "Netherlands",
        "animal": "Goat",
        "pasteurized": true,
        "type": "Hard",
        "texture": "Dense, firm, grainy, smooth",
        "flavor": "Butterscotch, buttery, caramel, nutty, favory, sweet"
    },
    {
        "name": "Mozzarella di Bufala",
        "origin": "Italy",
        "animal": "Water buffalo",
        "pasteurized": true,
        "type": "Soft",
        "texture": "Creamy, smooth, springy",
        "flavor": "Floral, mild, milky, sour"
    },
    {
        "name": "Morbier",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": null,
        "type": "Semi-soft",
        "texture": "Creamy, springy, supple",
        "flavor": "Citrusy, fruity, full-flavored, tangy"
    },
    {
        "name": "Halloumi",
        "origin": "Cyprus",
        "animal": "Cow, sheep, goat",
        "pasteurized": null,
        "type": "Semi-soft",
        "texture": "Chewy, creamy, firm, springy",
        "flavor": "Salty, savory, tangy"
    },
    {
        "name": "Red Dragon Truckle",
        "origin": "Wales",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Firm, smooth",
        "flavor": "Buttery, mild, spicy, tangy"
    },
    {
        "name": "Idiazabal",
        "origin": "Spain",
        "animal": "Sheep",
        "pasteurized": false,
        "type": "Hard",
        "texture": "Compact, oily, open, supple",
        "flavor": "Buttery, nutty, smokey"
    },
    {
        "name": "Emmental Grand Cru",
        "origin": "Switzerland",
        "animal": "Cow",
        "pasteurized": false,
        "type": null,
        "texture": "Firm",
        "flavor": "Fruity, nutty, sweet"
    },
    {
        "name": "La Tur",
        "origin": "Italy",
        "animal": "Cow, sheep, goat",
        "pasteurized": true,
        "type": "Soft",
        "texture": "Creamy, fluffy, soft-ripened",
        "flavor": "Acidic, buttery, creamy, grassy, mushroomy"
    },
    {
        "name": "Paski Sir",
        "origin": "Croatia",
        "animal": "Sheep",
        "pasteurized": null,
        "type": "Hard",
        "texture": "Crumbly, flaky, grainy",
        "flavor": "Salty, savory, tangy"
    },
    {
        "name": "Danablu",
        "origin": "Denmark",
        "animal": "Cow",
        "pasteurized": null,
        "type": "Semi-soft",
        "texture": "Creamy, crumbly",
        "flavor": "Salty, sharp"
    },
    {
        "name": "Reblochon",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": null,
        "type": "Semi-soft",
        "texture": "Close, compact, smooth, supple",
        "flavor": "Fruity, mild, nutty"
    },
    {
        "name": "Beemster Extra Aged",
        "origin": "Netherlands",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Hard",
        "texture": "Brittle, crumbly, grainy",
        "flavor": "Butterscotch, nutty"
    },
    {
        "name": "Blu '61",
        "origin": "Italy",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Soft",
        "texture": "Creamy, soft",
        "flavor": "Creamy, pronounced, strong"
    },
    {
        "name": "Leonara",
        "origin": "Spain",
        "animal": "Goat",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Dense, smooth",
        "flavor": "Creamy, milky, tangy"
    },
    {
        "name": "Roquefort",
        "origin": "France",
        "animal": "Sheep",
        "pasteurized": false,
        "type": "Semi-soft",
        "texture": "Creamy, crumbly",
        "flavor": "Salty, sharp, tangy"
    },
    {
        "name": "Cahill's Irish Porter Cheddar",
        "origin": "Ireland",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-hard",
        "texture": "Creamy, firm",
        "flavor": "Full-flavored, tangy"
    },
    {
        "name": "Garrotxa",
        "origin": "Spain",
        "animal": "Goat",
        "pasteurized": true,
        "type": "Semi-hard",
        "texture": "Creamy, crumbly, flaky",
        "flavor": "Creamy, herbaceous, milky, nutty"
    },
    {
        "name": "Burrata",
        "origin": "Italy",
        "animal": "Water buffalo",
        "pasteurized": null,
        "type": "Soft",
        "texture": "Creamy, stringy",
        "flavor": "Buttery, milky"
    },
    {
        "name": "Comte",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": false,
        "type": "Semi-hard",
        "texture": "Dense, firm, grainy, open, smooth, supple",
        "flavor": "Fruity, nutty, salty, savory, smokey, sweet"
    },
    {
        "name": "Shropshire Blue",
        "origin": "United Kingdom",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy, smooth",
        "flavor": "Creamy, full-flavored, sharp, strong, tangy"
    },
    {
        "name": "Fontina Val d'Aosta",
        "origin": "Italy",
        "animal": "Cow",
        "pasteurized": false,
        "type": "Semi-soft",
        "texture": "Creamy, dense, firm, open, smooth, supple",
        "flavor": "Mild, nutty, strong, sweet, tangy"
    },
    {
        "name": "Mahon",
        "origin": "Spain",
        "animal": "Cow",
        "pasteurized": null,
        "type": "Semi-hard",
        "texture": "Crumbly, dense",
        "flavor": "Buttery, fruity, salty"
    },
    {
        "name": "Smoked Gouda",
        "origin": "Netherlands",
        "animal": "Cow",
        "pasteurized": null,
        "type": null,
        "texture": "Buttery, crumbly",
        "flavor": "Smokey"
    },
    {
        "name": "Saint Agur",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Soft",
        "texture": "Creamy, smooth, spreadable",
        "flavor": "Buttery, salty, sharp, spicy"
    },
    {
        "name": "Stilton",
        "origin": "England",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy, crumbly, smooth",
        "flavor": "Spicy, strong"
    },
    {
        "name": "Pecorino Romano",
        "origin": "Italy",
        "animal": "Sheep",
        "pasteurized": null,
        "type": "Hard",
        "texture": "Crumbly, dense, flaky, grainy",
        "flavor": "Salty, sharp, smokey, spicy"
    },
    {
        "name": "Brie",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": false,
        "type": "Soft",
        "texture": "Buttery, runny, soft-ripened",
        "flavor": "Fruity, mild, nutty, tangy"
    },
    {
        "name": "Monte Enebro",
        "origin": "Spain",
        "animal": "Goat",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Brittle, chalky, dense, runny",
        "flavor": "Acidic, lemony, pungent, tangy"
    },
    {
        "name": "Wensleydale with Cranberries",
        "origin": "United Kingdom",
        "animal": "Cow, sheep",
        "pasteurized": true,
        "type": "Fresh firm",
        "texture": "Firm",
        "flavor": "Creamy, sweet"
    },
    {
        "name": "Quadrello di Bufala",
        "origin": "Italy",
        "animal": "Water buffalo",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy, elastic, open, sticky",
        "flavor": "Grassy, sweet"
    },
    {
        "name": "Tomme Brulee",
        "origin": "France",
        "animal": "Sheep",
        "pasteurized": false,
        "type": "Hard",
        "texture": "Firm",
        "flavor": "Smokey, strong, sweet"
    },
    {
        "name": "Humboldt Fog",
        "origin": "United States",
        "animal": "Goat",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy, runny, smooth",
        "flavor": "Citrusy, herbaceous, tangy"
    },
    {
        "name": "Ricotta Salata",
        "origin": "Italy",
        "animal": "Sheep",
        "pasteurized": null,
        "type": null,
        "texture": "Firm",
        "flavor": "Salty"
    },
    {
        "name": "Brillat Savarin",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy, dense",
        "flavor": "Buttery, nutty, sour"
    },
    {
        "name": "Sage Derby",
        "origin": "England",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-hard",
        "texture": "Firm",
        "flavor": "Herbaceous, mild"
    },
    {
        "name": "Taleggio",
        "origin": "Italy",
        "animal": "Cow",
        "pasteurized": true,
        "type": "Semi-soft",
        "texture": "Creamy",
        "flavor": "Fruity, mild, tangy"
    },
    {
        "name": "Lamb Chopper",
        "origin": "Netherlands",
        "animal": "Sheep",
        "pasteurized": true,
        "type": "Hard",
        "texture": "Dense, firm, smooth",
        "flavor": "Buttery, caramel, creamy, nutty, sweet"
    },
    {
        "name": "Fourme d'Ambert",
        "origin": "France",
        "animal": "Cow",
        "pasteurized": null,
        "type": null,
        "texture": "Creamy, dense, supple",
        "flavor": "Savory, sharp, smooth, tangy"
    },
    {
        "name": "Appenzeller",
        "origin": "Switzerland",
        "animal": "Cow",
        "pasteurized": null,
        "type": "Hard",
        "texture": "Firm, open, smooth",
        "flavor": "Fruity, spicy, tangy"
    }
];