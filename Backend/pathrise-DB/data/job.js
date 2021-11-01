var csv = require('csv-parser');
var json2csv = require('json2csv');
var fs = require('fs');

var jobBoards = require('./jobBoards.json');
function resolveJobSource(data) {

    /* 
    The following regex would fail in tons of cases, for example ".co.uk". 
    However, because we are only concerned with matching against a small subset of TLD's, provided in job_boards.json, this solution works.
    */
    let regex = /([a-zA-Z0-9]+\.[a-zA-Z]+|[0-9\.]+|[a-zA-Z0-9]+)(?=\/)/;
    let domain = regex.exec(data.JobURL);

    if (domain != null){
        let board = jobBoards.find(content => content.root_domain.toLowerCase() == domain[0].toLowerCase())?.name;
        // Return board name if domain[0] matches root from jobBoards.json.
        if (board) return board;

        // Return "Company Website" if domain[0] matches CompanyName field.
        if (domain[0].split('.')[0].toLowerCase() == data.CompanyName.toLowerCase()) return 'Company Website';
    };
    return 'Unknown';
}

var jsonData = [];
fs.createReadStream('job_opportunities.csv')
    .pipe(csv())
    .on('data', function (data) {
        data.JobSource = resolveJobSource(data);
        jsonData.push(data);
    })
    .on('end', function () {
        var result = json2csv.parse(jsonData, { fields: Object.keys(jsonData[0]) });
        fs.writeFileSync('job_opportunities.csv', result);
    });

