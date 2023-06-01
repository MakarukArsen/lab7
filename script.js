const resolveBtn = document.getElementById("resolve");

const result = document.getElementById("result");

const undirectedMatrix = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
];
const directedMatrix = [
    [0, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
];

function undirectedGraph(adjacencyMatrix) {
    const incidenceMatrix = [];
    const edgeList = [];
    const numRows = adjacencyMatrix.length;
    const numCols = adjacencyMatrix[0].length;

    for (let i = 0; i < numRows; i++) {
        incidenceMatrix.push([]);
    }

    for (let j = 0; j < numCols; j++) {
        for (let k = j; k < numCols; k++) {
            if (adjacencyMatrix[j][k] === 1) {
                const edge = [j, k];
                edgeList.push(edge);

                for (let i = 0; i < numRows; i++) {
                    incidenceMatrix[i].push(i === j || i === k ? 1 : 0);
                }
            }
        }
    }

    return { incidenceMatrix: incidenceMatrix, edgeList: edgeList };
}

function directedGraph(adjacencyMatrix) {
    const incidenceMatrix = [];
    const edgeList = [];
    const numRows = adjacencyMatrix.length;
    const numCols = adjacencyMatrix[0].length;

    for (let i = 0; i < numRows; i++) {
        incidenceMatrix.push([]);
    }

    for (let j = 0; j < numCols; j++) {
        for (let k = 0; k < numCols; k++) {
            if (adjacencyMatrix[j][k] === 1) {
                const edge = [j, k];
                edgeList.push(edge);

                for (let i = 0; i < numRows; i++) {
                    incidenceMatrix[i].push((i === j ? 1 : 0) - (i === k ? 1 : 0));
                }
            }
        }
    }

    return { incidenceMatrix: incidenceMatrix, edgeList: edgeList };
}

console.log(undirectedGraph(undirectedMatrix));
console.log(directedGraph(directedMatrix));
