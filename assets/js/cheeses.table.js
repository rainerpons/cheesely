$(document).ready(function() {
    $("#cheese-table").DataTable({
        "data": cheeses,
        "scrollX": true,
        "lengthMenu": [
            [10, 20, -1],
            [10, 20, 'All']
        ],
        "pagingType": "full_numbers",
        "columns": [
            { "data" : "name" },
            {
                "data" : "origin",
                "render": function(data, type, row, meta) {
                    switch(data) {
                        case "Croatia":
                            return data.concat(" 🇭🇷");
                        case "Cyprus":
                            return data.concat(" 🇨🇾");
                        case "Denmark":
                            return data.concat(" 🇩🇰");
                        case "England":
                            return data.concat(" 🏴󠁧󠁢󠁥󠁮󠁧󠁿");
                        case "France":
                            return data.concat(" 🇫🇷");
                        case "Ireland":
                            return data.concat(" 🇮🇪");
                        case "Italy":
                            return data.concat(" 🇮🇹");
                        case "Netherlands":
                            return data.concat(" 🇳🇱");
                        case "Spain":
                            return data.concat(" 🇪🇸");
                        case "Switzerland":
                            return data.concat(" 🇨🇭");
                        case "United Kingdom":
                            return data.concat(" 🇬🇧");
                        case "United States":
                            return data.concat(" 🇺🇸");
                        case "Wales":
                            return data.concat(" 🏴󠁧󠁢󠁷󠁬󠁳󠁿");
                        default:
                            return data;
                    }
                }
            },
            {
                "data" : "animal",
                "render": function(data, type, row, meta) {
                    switch(data) {
                        case "Cow":
                            return data.concat(" 🐄");
                        case "Cow, sheep":
                            return data.concat(" 🐄🐑");
                        case "Cow, sheep, goat":
                            return data.concat(" 🐄🐑🐐");
                        case "Goat":
                            return data.concat(" 🐐");
                        case "Sheep":
                            return data.concat(" 🐑");
                        case "Water buffalo":
                            return data.concat(" 🐃");
                        default:
                            return data;
                    }
                }
            },
            {
                "data" : "pasteurized",
                "render": function(data, type, row, meta) {
                    if (data == true) {
                        return "Yes";
                    }
                    if (data == false) {
                        return "No";
                    }
                    return null;
                }
            },
            { "data" : "type" },
            { "data" : "texture" },
            { "data" : "flavor" }
        ]
    });
});