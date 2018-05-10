import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";

function VerticalHints() {
    return <Table
        height={Math.ceil(HEIGHT / 2)}
        width={WIDTH}
        className="Hints"
        cellType="hint"/>;
}

export default VerticalHints;