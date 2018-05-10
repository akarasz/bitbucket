import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";

function HorizontalHints() {
    return <Table
        height={HEIGHT}
        width={Math.ceil(WIDTH / 2)}
        className="Hints"
        cellType="hint"/>;
}

export default HorizontalHints;