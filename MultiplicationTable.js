function printMultiplicationTable(tableOf, tableTill) {
    console.log(tableOf, tableTill);

    for(let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${i * tableOf}`);
    }
}

// function printMultiplicationTable(tableOf, tableTill) {

// }
printMultiplicationTable(4, 10);

function printMultiplicationTable2(tableOf, tableTill) {

    for(let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
        console.log(i);
        
    }
}

printMultiplicationTable2(4,10)