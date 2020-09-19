var randomID = require("randomid");

// Chú ý:
// membersID:
// Priority -->1: Cao, 2: Trung bình, 3: Thấp

const TasksData = [
  {
    id: randomID(5),
    name: "Soạn ReactJS",
    labelArr: ["Frontend", "Backend", "API"],
    priority: 2,
    memberIDArr: ["user_2"],
    status: 2,
    description: "Phải soạn ReactJS kèm với NodeJS và Redux"
  },
  {
    id: randomID(5),
    name: "Dạy AngularJS",
    labelArr: ["Frontend", "API"],
    priority: 2,
    memberIDArr: ["user_4", "user_5"],
    status: 1,
    description: "Nội dung của Angular rất dài và khó"
  },
  {
    id: randomID(5),
    name: "Soạn Python",
    labelArr: ["Backend"],
    priority: 3,
    memberIDArr: ["user_3", "user_5"],
    status: 1,
    description: "Soạn python phải tập trung vào game và giải quyết vấn đề"
  },
  {
    id: randomID(5),
    name: "Thi Hackathon",
    labelArr: ["Frontend", "Backend", "Issue"],
    priority: 3,
    memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
    status: 3,
    description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
  }
];

export default TasksData;
