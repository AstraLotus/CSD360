var i = 842;
document.write(i + i % 3 / 7 - 2 + 7 ** 3);
document.write(((i + i % 3) / 7 - 2 + 7 ** 3).toFixed(14));
document.write(((i + i % 3) / 7 - 2 + 7 ** 3 + 2.115).toFixed(1));
document.write((i + (i % 3 / 7) - 2 + 7 ** 3).toFixed(13));
document.write(((i + i % 3) / (7 - 2 + 7 ** 3)).toFixed(14));
document.write(((i + i % 3) / 7 - 2 + 7 ** (3 / 2)).toFixed(1));
document.write((i + i % (3 / 7) - 2 + 7 ** 3).toFixed(2));
