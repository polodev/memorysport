/**
 * key: here I will mention keypoint which likelyhood to object name itself
 * time: when to when. or genral time like in morning
 * duration: hour format. How many hours I am going to do this
 * activity: main topic. each activity start with r_*
 * note: if we have any note, instructions will be mentioned here.
 *
 * blueprint will be copied everytime we need a new object
 *
 */
const blueprint = {
  key: "",
  time: "",
  duration: 2,
  activity: "practicing memory palace",
  note: ""
}
const r_memoryPalace = {
  key: "memory",
  time: "",
  duration: 2,
  activity: "practicing memory palace",
  note: "can be pick for deck of card or random number"
}
const r_dominic = {
  key: "dominic",
  time: "",
  duration: 1,
  activity: "be fluent in dominic",
  note: ""
}
const r_wordpress = {
  key: "wordpress",
  time: "",
  duration: 2,
  activity: "completing a template",
  note: ""
}
const r_vocabulary = {
  key: "vocabulary",
  time: "",
  duration: .5,
  activity: "Newspaper or Any kinda Book",
  note: ""
}
const r_math = {
  key: "math",
  time: "",
  duration: 1,
  activity: "saifurs bank math",
  note: ""
}
const r_memrise = {
  key: "memrise",
  time: "",
  duration: "1.5",
  activity: "language",
  note: ""
}
const r_goHugo = {
  key: "hugo",
  time: "",
  duration: 3,
  activity: "making a template for coding site",
  note: ""
}
const r_memorysport_website = {
  key: "memorysport web",
  time: "",
  duration: 2,
  activity: "fixing memory sport website or making game",
  note: ""
}
const r_book_reading = {
  key: "book",
  time: "",
  duration: .5,
  activity: "blinkist or any other book",
  note: ""
}
const r_php_book_reading = {
  key: "zend prep",
  time: "night",
  duration: .5,
  activity: "zend book reading",
  note: ""
}
const r_exercise_hidden = {
  key: 'exercise',
  time: "after every 30 minutes or one hour",
  duration: .5,
  activity: "doing 100 push up 100 situp before 9pm",
  note: ""
}

const r_exercise = {
  key: 'exercise',
  time: "anytime",
  duration: .5,
  activity: "long walk for 30 minutes",
  note: ""
}
const r_bimabd = {
  key: 'Bimabd',
  time: "before 2am",
  duration: 3,
  activity: "Completing trello task",
  note: "Update to server"
}
const r_freelance = {
  key: 'Freelance',
  time: "before 2am",
  duration: 2,
  activity: "Prepare for Freelance work - searching and finding",
  note: ""
}
const routines = {
  date: 'Oct 1, 2019',
  arr: [
    r_exercise,
    r_bimabd,
    r_freelance,
    // r_wordpress,
    // r_goHugo,
    // r_memoryPalace,
    // r_book_reading,
    // r_math,
    // r_memorysport_website,
    r_vocabulary,
    r_php_book_reading,
  ]
}

export default routines;