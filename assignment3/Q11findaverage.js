const input = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Output object
const output = {};

// Calculate average for each student
Object.keys(input).forEach(student => {
    const subjects = input[student];

    const marks = Object.values(subjects);

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    const average = Math.floor(total / marks.length);

    output[student] = {
        average: average
    };
});

// Display result clearly
console.log(output);