// Zenclass Program - Database
// users collection
db.users.insertMany([
    {
        "user_id": 1,
        "name": "Venkatesh",
        "email": "Venkatesh@gmail.com",
        "mentor_id": 1
    },
    {
        "user_id": 2,
        "name": "dinesh",
        "email": "dinesh@yahoo.com",
        "mentor_id": 2
    },
    {
        "user_id": 3,
        "name": "sathya",
        "email": "sathya@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 4,
        "name": "priya",
        "email": "priya@hotmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 5,
        "name": "ragu",
        "email": "ragu@outlook.com",
        "mentor_id": 1
    },
    {
        "user_id": 6,
        "name": "vishwa",
        "email": "vishwa@outlook.com",
        "mentor_id": 5
    },
    {
        "user_id": 7,
        "name": "vishnu",
        "email": "vishnu@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 8,
        "name": "jeeva",
        "email": "jeeva@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 9,
        "name": "arul",
        "email": "arul@outlook.com",
        "mentor_id": 2
    },
    {
        "user_id": 10,
        "name": "sridevi",
        "email": "sridevi@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 11,
        "name": "arun",
        "email": "arun@gmail.com",
        "mentor_id": 4
    },
    {
        "user_id": 12,
        "name": "sekhar",
        "email": "sekhar@outlook.com",
        "mentor_id": 2
    },
    {
        "user_id": 13,
        "name": "romio",
        "email": "romio@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 14,
        "name": "juliot",
        "email": "juliot@hotmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 15,
        "name": "ravi",
        "email": "ravi@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 16,
        "name": "shankar",
        "email": "shankar@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 17,
        "name": "kamala",
        "email": "kamala@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 18,
        "name": "vimala",
        "email": "vimala@outlook.com",
        "mentor_id": 2
    },
    {
        "user_id": 19,
        "name": "lakshmi",
        "email": "lakshmi@hotmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 20,
        "name": "sri",
        "email": "sri@yahoo.com",
        "mentor_id": 3
    },
    {
        "user_id": 21,
        "name": "sriHari",
        "email": "sriHari@yahoo.com",
        "mentor_id": 2
    },
    {
        "user_id": 22,
        "name": "vasantha",
        "email": "vasantha@yahoo.com",
        "mentor_id": 4
    }
]);

//Mentors collection
db.mentors.insertMany([
    {
        "mentor_id": 1,
        "mentor_name": "guna",
        "mentor_email": "guna@gmail.com"
    },
    {
        "mentor_id": 2,
        "mentor_name": "vasu",
        "mentor_email": "vasu@gmail.com"
    },
    {
        "mentor_id": 3,
        "mentor_name": "richy",
        "mentor_email": "richy@gmail.com"
    },
    {
        "mentor_id": 4,
        "mentor_name": "yamuna",
        "mentor_email": "yamuna@gmail.com"
    },
    {
        "mentor_id": 5,
        "mentor_name": "ganga",
        "mentor_email": "ganga@gmail.com"
    },
]);

// Attendance collection
db.attendance.insertMany([
    {
        "user_id": 1,
        "topic_id": 1,
        "presence": true
    },
    {
        "user_id": 2,
        "topic_id": 2,
        "presence": true
    },
    {
        "user_id": 3,
        "topic_id": 3,
        "presence": true
    },
    {
        "user_id": 4,
        "topic_id": 4,
        "presence": false
    },
    {
        "user_id": 5,
        "topic_id": 5,
        "presence": false
    },
    {
        "user_id": 6,
        "topic_id": 6,
        "presence": false
    },
    {
        "user_id": 7,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 8,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 9,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 10,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 11,
        "topic_id": 1,
        "presence": false
    },
    {
        "user_id": 12,
        "topic_id": 2,
        "presence": true
    },
    {
        "user_id": 13,
        "topic_id": 3,
        "presence": true
    },
    {
        "user_id": 14,
        "topic_id": 4,
        "presence": false
    },
    {
        "user_id": 15,
        "topic_id": 5,
        "presence": false
    },
    {
        "user_id": 16,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 17,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 18,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 19,
        "topic_id": 3,
        "presence": true
    },
    {
        "user_id": 20,
        "topic_id": 6,
        "presence": true
    },
    {
        "user_id": 21,
        "topic_id": 6,
        "presence": false
    }
]);

//Codeketa collection
db.codekata.insertMany([
    {
        "user_id": 1,
        "no_of_problems_solved": 60
    },
    {
        "user_id": 2,
        "no_of_problems_solved": 40
    },
    {
        "user_id": 3,
        "no_of_problems_solved": 50
    },
    {
        "user_id": 4,
        "no_of_problems_solved": 55
    },
    {
        "user_id": 5,
        "no_of_problems_solved": 50
    },
    {
        "user_id": 6,
        "no_of_problems_solved": 34
    },
    {
        "user_id": 7,
        "no_of_problems_solved": 20
    },
    {
        "user_id": 8,
        "no_of_problems_solved": 30
    },
    {
        "user_id": 9,
        "no_of_problems_solved": 49
    },
    {
        "user_id": 10,
        "no_of_problems_solved": 50,
    },
    {
        "user_id": 11,
        "no_of_problems_solved": 10
    },
    {
        "user_id": 12,
        "no_of_problems_solved": 20
    },
    {
        "user_id": 13,
        "no_of_problems_solved": 37
    },
    {
        "user_id": 14,
        "no_of_problems_solved": 40
    },
    {
        "user_id": 15,
        "no_of_problems_solved": 50
    },
    {
        "user_id": 16,
        "no_of_problems_solved": 10
    },
    {
        "user_id": 17,
        "no_of_problems_solved": 22
    },
    {
        "user_id": 18,
        "no_of_problems_solved": 30
    },
    {
        "user_id": 19,
        "no_of_problems_solved": 45
    },
    {
        "user_id": 20,
        "no_of_problems_solved": 51
    },
    {
        "user_id": 21,
        "no_of_problems_solved": 30
    },
    {
        "user_id": 22,
        "no_of_problems_solved": 17
    },
]);

// topics collection
db.topics.insertMany([
    {
        "topic_id": 1,
        "topic": "HTML",
        "topic_date": new Date("2020-10-01")
    },
    {
        "topic_id": 2,
        "topic": "CSS",
        "topic_date": new Date("2020-10-12")
    },
    {
        "topic_id": 3,
        "topic": "Javascript",
        "topic_date": new Date("2020-10-19")
    },
    {
        "topic_id": 4,
        "topic": "React",
        "topic_date": new Date("2020-11-01")
    },
    {
        "topic_id": 5,
        "topic": "NodeJs",
        "topic_date": new Date("2020-11-04")
    },
    {
        "topic_id": 6,
        "topic": "AWS",
        "topic_date": new Date("2020-11-05")
    },
]);

// tasks collection
db.tasks.insertMany([
    {
        "task_id": 1,
        "user_id": 1,
        "task": "Simple HTML task",
        "due_date": new Date("2020-10-01"),
        "submitted": true
    },
    {
        "task_id": 2,
        "user_id": 2,
        "task": "Simple CSS task",
        "due_date": new Date("2020-10-15"),
        "submitted": true
    },
    {
        "task_id": 3,
        "user_id": 3,
        "task": "Simple Javascript task",
        "due_date": new Date("2020-10-19"),
        "submitted": false
    },
    {
        "task_id": 4,
        "user_id": 4,
        "task": "Simple React task",
        "due_date": new Date("2020-11-01"),
        "submitted": false
    },
    {
        "task_id": 5,
        "user_id": 5,
        "task": "Simple Node task",
        "due_date": new Date("2020-11-04"),
        'submitted': true
    },
    {
        "task_id": 6,
        "user_id": 6,
        "task": "Simple AWS task",
        "due_date": new Date("2020-11-05"),
        'submitted': true
    },
]);

// companydrives collection
db.company_drives.insertMany([
    {
        "user_id": 1,
        "drive_date": new Date("2020-10-15"),
        "company": "Google"
    },
    {
        "user_id": 14,
        "drive_date": new Date("2020-10-17"),
        "company": "Yahoo"
    },
    {
        "user_id": 2,
        "drive_date": new Date("2020-10-20"),
        "company": "Amazon"
    },
    {
        "user_id": 4,
        "drive_date": new Date("2020-10-22"),
        "company": "Walmart"
    },
    {
        "user_id": 7,
        "drive_date": new Date("2020-10-22"),
        "company": "Zoho"
    },
    {
        "user_id": 9,
        "drive_date": new Date("2020-12-22"),
        "company": "Dell"
    },
]);

//Questions with Answers
// 1). Find all the topics and tasks which are thought in the month of October
// ANS:
db.topics.aggregate(
    [
        {
            $lookup:
            {
                from: "tasks",
                localField: "topic_id",
                foreignField: "task_id",
                as: "Oct_tasks"
            }
        },
        {
            $match: {
                topic_date: { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") },
                "Oct_tasks.due_date": { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") }
            }
        }, {
            $unwind: "$Oct_tasks"
        }, {
            $addFields: {
                task: "$Oct_tasks.task"
            }
        }, {
            $project: {
                _id: 0,
                topic: 1,
                "task": 1
            }
        }
    ]
)

// 2). Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// ANS:
db.company_drives.find({ drive_date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") } })

// 3). Find all the company drives and students who are appeared for the placement.
// ANS:
db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "user_id",
            as: "placment_details"
        }
    },
    {
        $project: {
            _id: 0,
            company: 1,
            "placment_details.name": 1
        }
    },
    {
        $unwind: "$placment_details"
    },
    {
        $addFields: {
            User_appeared_for_placement: "$placment_details.name"
        }
    },
    {
        $project: {
            company: 1,
            User_appeared_for_placement: 1
        }
    }
])

// 4). Find the number of problems solved by the user in codekata
// ANS: 
db.users.aggregate([
    {
        $lookup: {
            from: "codekata",
            localField: "user_id",
            foreignField: "user_id",
            as: "codekata_record"
        }
    },
    {
        $unwind: "$codekata_record"
    },
    {
        $addFields: {
            no_of_problems_solved: "$codekata_record.no_of_problems_solved"
        }
    },
    {
        $project: {
            _id: 0,
            user_id: 1,
            user_name: 1,
            no_of_problems_solved: 1
        }
    }
])

// 5). Find all the mentors with who has the mentee's count more than 15
// ANS:
db.users.aggregate([
    {
        $lookup: {
            from: "mentors",
            localField: "mentor_id",
            foreignField: "mentor_id",
            as: "mentors_and_users"
        }
    },
    {
        $unwind: "$mentors_and_users"
    },
    {
        $addFields: {
            mentor_name: "$mentors_and_users.mentor_name",
            mentor_id: "$mentors_and_users.mentor_id"
        }
    },
    {
        $group: {
            _id: "$mentor_id",
            mentor_id_with_15_mentees: { $addToSet: "$mentor_name" },
            mentorCount: { $sum: 1 }
        }
    }, {
        $match: {
            mentorCount: { $gte: 15 }
        }
    }
])

//  6). Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
// ANS:
db.attendance.aggregate([
    {
        $lookup: {
            from: "tasks",
            localField: "user_id",
            foreignField: "user_id",
            as: "tasks_record"
        }
    },
    {
        $unwind: "$tasks_record"
    },
    {
        $addFields: {
            task_record: "$tasks_record.due_date",
            task_submission: "$tasks_record.submitted"
        }
    },
    {
        $match: {
            presence: { $eq: false },
            task_submission: { $eq: false }
        }
    },
    {
        $group: {
            _id: "$user_id",
            count: { $addToSet: "$presence" },
            No_of_users_absent_and_not_submitted_tasks: { $sum: 1 }
        }
    },
    {
        $project: {
            No_of_users_absent_and_not_submitted_tasks: 1
        }
    }
])

