function transpose(matrix, width, height) {
    const result = new Array(matrix.length);

    matrix.map((v, i) => result[height * (i % width) + parseInt(i / width)] = v)

    return result;
}

export { transpose };