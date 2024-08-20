// full_server/utils.js
import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Cannot load the database: ${err.message}`);
                return;
            }

            const lines = data.trim().split('\n').slice(1); // Ignore the header
            const students = {};

            lines.forEach((line) => {
                const [firstname, field] = line.split(',');
                if (!students[field]) students[field] = [];
                students[field].push(firstname);
            });

            resolve(students);
        });
    });
};

