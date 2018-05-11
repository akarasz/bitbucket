function transpose(matrix, width, height) {
    const result = new Array(matrix.length);

    matrix.map((v, i) => result[height * (i % width) + Math.trunc(i / width)] = v)

    return result;
}

export { transpose };