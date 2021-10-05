let size = 0;
let unit = 'Кб';
if (size >=1 && unit == 'Кб') {
    size = size * 1024;
    console.log(size);
} else if (size >= 1 && unit === 'Мб') {
    size = size * (1024*1024);
    console.log(size);
} else if (size >= 1 && unit === 'Гб') {
    size = size * (1024 *1024*1024);
    console.log(size);
}
