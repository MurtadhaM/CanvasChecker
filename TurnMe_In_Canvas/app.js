const axios = require('axios');
const env = require('dotenv').config();
const fs = require('fs');


let courseID =  env.parsed.COURSE_ID || process.env.courseID || 207131;
let token  = env.parsed.CANVAS_TOKEN || process.env.CANVAS_TOKEN;
let assignmentID = env.parsed.ASSIGNMENT_ID || process.env.ASSIGNMENT_ID || 1864872;


/**
 * Check if the token is valid
 */


if (!token || token == '' || courseID == '' || !courseID || !assignmentID || assignmentID == '') {
    console.log('Please set your CANVAS_TOKEN in the .env file');
    process.exit(1);
}

/**
 * Check if the Token is valid
 *  */

async function checkToken() {
    const url = 'https://uncc.instructure.com/api/v1/courses/' + courseID;
    return await axios

        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },

        })
        .then((response) => {
            console.log('Token is valid');
            console.log(response.data);
            return true;
        })
        .catch((error) => {
            console.log('Token is invalid');
            console.log(error);
            process.exit(1);
        });
}
/**
 * Check if the token is valid
 */




async function listSubmissions(assignmentID) {
    /**
     * Canvas API call to list all submissions for an assignment
     **/
    const url = `https://uncc.instructure.com/api/v1/courses/${courseID}/assignments/${assignmentID}/submissions`;
    return await axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}


async function postAssignment(assignmentID, text) {
    /**
     * Canvas API call to post an assignment
     */
    const url = `https://uncc.instructure.com/api/v1/courses/${courseID}/assignments/${assignmentID}/submissions`;
    const data = `

        submission[submission_type]=online_text_entry \
        submission[body]=${text}& \
        submission[comment]= ${text}& \
        turnitin_pledge"=1 \
        
    `

    /**
     * Convert the data to form data
     */
    const formdata = new FormData();
    formdata.append('submission[submission_type]', 'online_text_entry');
    formdata.append('submission[body]', text);
    formdata.append('submission[comment]', text);
    formdata.append('turnitin_pledge', '1');





    /**
     * Make the API call
     * */

    return await axios
        .post(url, formdata, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error.response.data);
            return error;
        });
}





function submitAssignment(){
 

let created_assignment = postAssignment(1864872, text).then((response) => {
    console.log(`Submission ID: ${response.id} preview_url: ${response.preview_url}`);
   return  response;
     
}
).catch((error) => {
    console.log(error);
    return error;
}
);
}





function listReport(){
    listSubmissions(1864872).then((submissions) => {
        let reports = []
        /**
         * For each submission, print the Submission ID and the Student ID
         */
        let baseURL = 'https://uncc.instructure.com/';
        for (let i = 0; i < submissions.length; i++) {
            
            let submission = submissions[i];
            // get keys of the submission object
            let keys = Object.keys(submission.turnitin_data)
            let report = submission.turnitin_data[keys[1]];

            /**
             * if the status is scored
             */
            if (report.status == 'scored') {
                console.log(`State: ${report.state} \n Similarity: ${report.similarity_score} \n Url: ${baseURL}/${report.report_url}` );
                reports.push(report);
            }
        }
        return reports;
    }
    );
}


/**
 * Main function to run the program
 * @param {string} text - The text to submit
 * @param {boolean} submit - If true, submit the assignment to Canvas
 * @param {boolean} list - If true, list the reports
 * 
 * @returns {string} - Response from the API
 *   */

async function main(text, submit, list) {
    /**
     * Check if the token is valid
     */
//    await checkToken();
    /**
     * If the submit flag is true, submit the assignment
     */
    if (submit && text != '') {
        submitAssignment();
    }
    /**
     * If the list flag is true, list the reports
     */
    else if (list) {
    let reports =         listReport();
    }
}

/**
 * Parse the command line arguments
 * 
 */
const args = process.argv.slice(2);
if (args.length == 0) {
    console.log('No arguments provided')
    console.log('Usage: node app.js <list|submit> <text-file>');
    process.exit(1);
}
let text = args[1];
let submit = false;
let list = false;
/**
 * Checking if text file is provided or stdin is provided
 */
if(fs.existsSync(text)){
    text = fs.readFileSync(text, 'utf8');
}else{
    console.log('File does not exist or input is too short');
    text = '';
    process.exit(1);
}


/**
 * If the length of the arguments is greater than 1, then check if the first argument is list or submit
 *  */







if (args.length > 1) {
    if (args[0] == 'list') {
        list = true;
    } else if (args[0] == 'submit') {
        submit = true;
    } else {
        console.log('Usage: node app.js <list|submit> <text-file>');
        process.exit(1);
    }
}



main(text, submit, list);