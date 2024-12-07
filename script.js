// Fungsi untuk menghitung diagonal bidang dan ruang pada kubus
function calculateCube() {
    const side = parseFloat(document.getElementById("side").value);
    if (isNaN(side) || side <= 0) {
        document.getElementById("cubeResults").innerText = "Masukkan nilai sisi yang valid!";
        return;
    }

    const diagonalField = side * Math.sqrt(2);
    const diagonalSpace = side * Math.sqrt(3);

    document.getElementById("cubeResults").innerText = 
        `Diagonal bidang: ${diagonalField.toFixed(2)} cm\n` +
        `Diagonal ruang: ${diagonalSpace.toFixed(2)} cm`;
}

// Fungsi untuk menghitung diagonal bidang dan ruang pada balok
function calculateRectangular() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(length) || isNaN(width) || isNaN(height) || length <= 0 || width <= 0 || height <= 0) {
        document.getElementById("rectangularResults").innerText = "Masukkan nilai panjang, lebar, dan tinggi yang valid!";
        return;
    }

    const diagonalBase = Math.sqrt(length ** 2 + width ** 2);
    const diagonalSpace = Math.sqrt(length ** 2 + width ** 2 + height ** 2);

    document.getElementById("rectangularResults").innerText = 
        `Diagonal bidang alas: ${diagonalBase.toFixed(2)} cm\n` +
        `Diagonal ruang: ${diagonalSpace.toFixed(2)} cm`;
}