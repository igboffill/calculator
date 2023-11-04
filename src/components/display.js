function Display({ formula = [] }) {
    const formulaOuput = formula.map(i => {
        if (i.type === "operand" || i.type === 'solution') {
            let value = i.value;
            if (i.point && i.decimals) {
                value += '.' + i.decimals;
            }
            if (i.negative) {
                value = '-' + value;
            }

            return value;
        }

        return i.value;
    }).join(''),

        outputItem = formula.findLast(i=>i.type === "operand" || i.type === 'solution');

        let outputValue = outputItem.value;
    

        if (outputItem.point && outputItem.decimals) {
            outputValue += '.' + outputItem.decimals;
        }
        if (outputItem.negative) {
            outputValue = '-' + outputValue;
        }

    return (<div className="display">
        <div className="formula-display">{formulaOuput}</div>
        <div className="output-display" id="display">{outputValue}</div>
    </div>)
}

export default Display;