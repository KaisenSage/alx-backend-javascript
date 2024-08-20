// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(req.databaseFilePath);
            let output = 'This is the list of our students\n';

            for (const field of Object.keys(students).sort()) {
                output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            }

            res.status(200).send(output.trim());
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(req.databaseFilePath);
            const list = students[major] || [];
            res.status(200).send(`List: ${list.join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;

