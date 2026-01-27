let states = [
    "Andhra Pradesh",
    "Bihar",
    "Assam",
    "Gujarat",
    "Odisha",
    "Uttar Pradesh",
    "Kerala",
    "Maharashtra",
    "Rajasthan",
    "Tamil Nadu"
];

let filteredStates = states.filter(state => {
    let firstChar = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(filteredStates);