const handleCalendarFormatting = event => {
    // This input is the same userInput
    // let input = event.target.value.replace(/[^\d]/g, "").substring(0, 8);

    const input = event.replace(/[^\d]/g, '').substring(0, 8);
    if (input.length === 8) {
        const year = input.substring(4, 8) * 1;
        const day = input.substring(2, 4) * 1;
        const month = input.substring(0, 2) * 1 - 1;
        const date = new Date(year, month, day)
            .toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})
            .replace(/[^ -~]/g, '');
        console.log(date);
    }
};

const arr = [
    // '02',
    // '0225',
    // '0225',
    '02252s020',
    // '02252s020',
    // '0 2252s020',
    '00252020',
    '02022000',
    // '02252020',
    // '20190809',
];
for (let i = 0; i < arr.length; i++) {
    handleCalendarFormatting(arr[i]);
}
