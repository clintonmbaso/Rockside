// Drilling and Matching

const mgHonours06 = [

  {
    "question": "What is one objective of drilling related to maintaining an organized unit?",
    "options": [
      { "text": "Morale", "isCorrect": false },
      { "text": "Self Control", "isCorrect": false },
      { "text": "Order", "isCorrect": true },
      { "text": "Leadership", "isCorrect": false }
    ]
  },
  {
    "question": "Which objective of drilling promotes fun and imagination?",
    "options": [
      { "text": "Self Control", "isCorrect": false },
      { "text": "Enjoyment", "isCorrect": true },
      { "text": "Fellowship", "isCorrect": false },
      { "text": "Respect", "isCorrect": false }
    ]
  },
  {
    "question": "What is the formation where elements are side by side?",
    "options": [
      { "text": "Column", "isCorrect": false },
      { "text": "Line", "isCorrect": true },
      { "text": "File", "isCorrect": false },
      { "text": "Rank", "isCorrect": false }
    ]
  },
  {
    "question": "How is a rank defined in Pathfinder drill formation?",
    "options": [
      { "text": "A line that is only one element in depth", "isCorrect": true },
      { "text": "A single column", "isCorrect": false },
      { "text": "Elements side by side", "isCorrect": false },
      { "text": "Distance between people in a column", "isCorrect": false }
    ]
  },
  {
    "question": "What is an interval in a formation?",
    "options": [
      { "text": "The distance between persons standing next to each other", "isCorrect": true },
      { "text": "The arrangement of elements", "isCorrect": false },
      { "text": "The distance between people within a column", "isCorrect": false },
      { "text": "The alignment with the person in front", "isCorrect": false }
    ]
  },
  {
    "question": "What does a column formation involve?",
    "options": [
      { "text": "Elements side by side", "isCorrect": false },
      { "text": "Standing one behind one another", "isCorrect": true },
      { "text": "A single row of people", "isCorrect": false },
      { "text": "Distance between people in a row", "isCorrect": false }
    ]
  },
  {
    "question": "What is a file in Pathfinder drill terminology?",
    "options": [
      { "text": "A single column", "isCorrect": true },
      { "text": "A formation with elements side by side", "isCorrect": false },
      { "text": "A distance between people", "isCorrect": false },
      { "text": "A formation that is only one element in depth", "isCorrect": false }
    ]
  },
  {
    "question": "What does distance refer to in a column?",
    "options": [
      { "text": "Space between people in a row", "isCorrect": false },
      { "text": "Space between people within a column (front to back)", "isCorrect": true },
      { "text": "Arrangement of elements", "isCorrect": false },
      { "text": "Distance between people standing next to each other", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the cover command?",
    "options": [
      { "text": "To align with the person in front while maintaining distance", "isCorrect": true },
      { "text": "To form a column", "isCorrect": false },
      { "text": "To stand side by side", "isCorrect": false },
      { "text": "To increase the interval between persons", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'flank' refer to in a formation?",
    "options": [
      { "text": "The right or left side of a formation", "isCorrect": true },
      { "text": "The distance between people", "isCorrect": false },
      { "text": "The space between people standing one behind the other", "isCorrect": false },
      { "text": "The alignment of people in front", "isCorrect": false }
    ]
  },
  {
    "question": "What is cadence in the context of drilling?",
    "options": [
      { "text": "The distance between persons", "isCorrect": false },
      { "text": "The uniform rhythm in which a movement is executed", "isCorrect": true },
      { "text": "The arrangement of elements in formation", "isCorrect": false },
      { "text": "The alignment with the person in front", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct description of 'formation'?",
    "options": [
      { "text": "A line with elements side by side", "isCorrect": false },
      { "text": "The arrangement of the elements in a prescribed manner", "isCorrect": true },
      { "text": "The distance between people within a column", "isCorrect": false },
      { "text": "The alignment with the person in front", "isCorrect": false }
    ]
  },
  {
    "question": "What is the definition of 'line' in a formation?",
    "options": [
      { "text": "A single column", "isCorrect": false },
      { "text": "Elements standing one behind another", "isCorrect": false },
      { "text": "Elements side by side or abreast of each other", "isCorrect": true },
      { "text": "The distance between persons standing next to each other", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'rank' describe in a formation?",
    "options": [
      { "text": "A line that is only one element in depth", "isCorrect": true },
      { "text": "Elements side by side", "isCorrect": false },
      { "text": "A single column", "isCorrect": false },
      { "text": "The distance between people within a column", "isCorrect": false }
    ]
  },
  {
    "question": "What does 'interval' refer to?",
    "options": [
      { "text": "The distance between people in a column", "isCorrect": false },
      { "text": "The space between people standing next to each other", "isCorrect": true },
      { "text": "The alignment of people in front", "isCorrect": false },
      { "text": "The arrangement of elements", "isCorrect": false }
    ]
  },
  {
    "question": "What is a column formation?",
    "options": [
      { "text": "A single row of people", "isCorrect": false },
      { "text": "Elements standing side by side", "isCorrect": false },
      { "text": "People standing one behind another", "isCorrect": true },
      { "text": "The alignment of people in front", "isCorrect": false }
    ]
  },
  {
    "question": "What is a file?",
    "options": [
      { "text": "A formation with elements side by side", "isCorrect": false },
      { "text": "A single column", "isCorrect": true },
      { "text": "A line that is only one element in depth", "isCorrect": false },
      { "text": "The distance between persons", "isCorrect": false }
    ]
  },
  {
    "question": "How is distance defined in a column?",
    "options": [
      { "text": "The space between people within a column (front to back)", "isCorrect": true },
      { "text": "The space between people standing next to each other", "isCorrect": false },
      { "text": "The arrangement of elements in a formation", "isCorrect": false },
      { "text": "The alignment of people in front", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the cover command?",
    "options": [
      { "text": "To align with the person in front while maintaining distance", "isCorrect": true },
      { "text": "To form a line", "isCorrect": false },
      { "text": "To stand side by side", "isCorrect": false },
      { "text": "To create a column", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'flank' refer to?",
    "options": [
      { "text": "The right or left side of a formation", "isCorrect": true },
      { "text": "The distance between people in a column", "isCorrect": false },
      { "text": "The arrangement of elements", "isCorrect": false },
      { "text": "The alignment with the person in front", "isCorrect": false }
    ]
  },
  {
    "question": "Which command is the most strict of the following: At Ease, Stand At Ease, and Parade Rest?",
    "options": [
      { "text": "Stand At Ease", "isCorrect": false },
      { "text": "At Ease", "isCorrect": false },
      { "text": "Parade Rest", "isCorrect": true },
      { "text": "None of the above", "isCorrect": false }
    ]
  },
  {
    "question": "What action should Pathfinders take to assume Parade Rest?",
    "options": [
      { "text": "Feet about 8 inches apart, hands at sides", "isCorrect": false },
      { "text": "Feet together, hands on hips", "isCorrect": false },
      { "text": "Left leg out, hands in the small of the back with right hand on top of left", "isCorrect": true },
      { "text": "Feet together, hands clasped in front", "isCorrect": false }
    ]
  },
  {
    "question": "In Parade Rest, where should the head and eyes be directed?",
    "options": [
      { "text": "Looking at the ground", "isCorrect": false },
      { "text": "Looking straight ahead", "isCorrect": true },
      { "text": "Looking to the right", "isCorrect": false },
      { "text": "Looking to the left", "isCorrect": false }
    ]
  },
  {
    "question": "Which command allows Pathfinders to move around but remain silent?",
    "options": [
      { "text": "Parade Rest", "isCorrect": false },
      { "text": "Stand At Ease", "isCorrect": true },
      { "text": "At Ease", "isCorrect": false },
      { "text": "REST", "isCorrect": false }
    ]
  },
  {
    "question": "What is the difference between Stand At Ease and Parade Rest regarding head and eyes movement?",
    "options": [
      { "text": "In Stand At Ease, the head and eyes follow the commander; in Parade Rest, they do not", "isCorrect": true },
      { "text": "In Stand At Ease, the head and eyes are fixed ahead; in Parade Rest, they follow the commander", "isCorrect": false },
      { "text": "In both, the head and eyes follow the commander", "isCorrect": false },
      { "text": "In both, the head and eyes are fixed ahead", "isCorrect": false }
    ]
  },
  {
    "question": "Which position allows talking while standing?",
    "options": [
      { "text": "Parade Rest", "isCorrect": false },
      { "text": "Stand At Ease", "isCorrect": false },
      { "text": "At Ease", "isCorrect": false },
      { "text": "REST", "isCorrect": true }
    ]
  },
  {
    "question": "What action is prohibited in the At Ease position?",
    "options": [
      { "text": "Moving the right foot", "isCorrect": true },
      { "text": "Moving both feet", "isCorrect": false },
      { "text": "Talking", "isCorrect": false },
      { "text": "Looking around", "isCorrect": false }
    ]
  },
  {
    "question": "From which position can the commands Stand At Ease, At Ease, or REST be given?",
    "options": [
      { "text": "Attention", "isCorrect": false },
      { "text": "Parade Rest", "isCorrect": true },
      { "text": "Stand At Ease", "isCorrect": false },
      { "text": "REST", "isCorrect": false }
    ]
  },
  {
    "question": "What additional command can be given from the At Ease position?",
    "options": [
      { "text": "Parade Rest", "isCorrect": false },
      { "text": "Stand At Ease", "isCorrect": false },
      { "text": "REST", "isCorrect": true },
      { "text": "Attention", "isCorrect": false }
    ]
  },
  {
    "question": "What position is slightly more relaxed than Parade Rest?",
    "options": [
      { "text": "At Ease", "isCorrect": false },
      { "text": "REST", "isCorrect": false },
      { "text": "Stand At Ease", "isCorrect": true },
      { "text": "Attention", "isCorrect": false }
    ]
  },
  {
    "question": "What does the command 'Mark Time' instruct a unit to do?",
    "options": [
      { "text": "March in place", "isCorrect": true },
      { "text": "March forward", "isCorrect": false },
      { "text": "Stand still", "isCorrect": false },
      { "text": "Run in place", "isCorrect": false }
    ]
  },
  {
    "question": "From which positions can 'Mark Time' be properly executed?",
    "options": [
      { "text": "Attention and Halt", "isCorrect": false },
      { "text": "Quick Time and Half Step", "isCorrect": true },
      { "text": "Double Time and Attention", "isCorrect": false },
      { "text": "Halt and Quick Time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct foot movement during 'Mark Time'?",
    "options": [
      { "text": "Raise each foot 2 inches off the ground alternately", "isCorrect": true },
      { "text": "Raise each foot 4 inches off the ground alternately", "isCorrect": false },
      { "text": "Keep feet flat on the ground", "isCorrect": false },
      { "text": "Lift feet as high as possible", "isCorrect": false }
    ]
  },
  {
    "question": "What is the cadence for 'Quick Time' marching?",
    "options": [
      { "text": "90 counts per minute", "isCorrect": false },
      { "text": "120 counts per minute", "isCorrect": true },
      { "text": "150 counts per minute", "isCorrect": false },
      { "text": "180 counts per minute", "isCorrect": false }
    ]
  },
  {
    "question": "How should the arms be positioned during 'Quick Time' marching?",
    "options": [
      { "text": "Swing naturally 9 inches forward and 6 inches rear", "isCorrect": true },
      { "text": "Swing straight forward and back", "isCorrect": false },
      { "text": "Keep arms at the sides", "isCorrect": false },
      { "text": "Fold arms across the chest", "isCorrect": false }
    ]
  },
  {
    "question": "What is the cadence for 'Double Time' marching?",
    "options": [
      { "text": "120 counts per minute", "isCorrect": false },
      { "text": "150 counts per minute", "isCorrect": false },
      { "text": "180 counts per minute", "isCorrect": true },
      { "text": "90 counts per minute", "isCorrect": false }
    ]
  },
  {
    "question": "What position should the forearms be in when starting 'Double Time' from a halt?",
    "options": [
      { "text": "Horizontal with fingers and thumb closed", "isCorrect": true },
      { "text": "Vertical with fingers spread", "isCorrect": false },
      { "text": "At the sides", "isCorrect": false },
      { "text": "Raised above the head", "isCorrect": false }
    ]
  },
  {
    "question": "Which movements can be executed at 'Double Time'?",
    "options": [
      { "text": "Halt, Quick Time, Column Right/Left, Column Half Right/Left", "isCorrect": true },
      { "text": "Halt, Quick Time, Left Face, Right Face", "isCorrect": false },
      { "text": "March Forward, Backward, Halt, Column Right/Left", "isCorrect": false },
      { "text": "Halt, Column Right/Left, About Face, Mark Time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the proper way to execute 'Present, ARMS'?",
    "options": [
      { "text": "Raise the right arm to touch the eyebrow, with the upper arm parallel to the ground", "isCorrect": true },
      { "text": "Raise both arms to shoulder level, with fingers spread", "isCorrect": false },
      { "text": "Salute with both hands while standing at attention", "isCorrect": false },
      { "text": "Touch the brim of the hat with the right hand", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done when the command 'Order, ARMS' is given?",
    "options": [
      { "text": "Lower the right arm smartly to the side", "isCorrect": true },
      { "text": "Raise both arms to shoulder height", "isCorrect": false },
      { "text": "Swing the right arm forward", "isCorrect": false },
      { "text": "Touch the cap brim with the right hand", "isCorrect": false }
    ]
  },
  {
    "question": "What is the difference between 'Hand Salute' and 'Present, ARMS'?",
    "options": [
      { "text": "Hand Salute is done without a command; Present, ARMS is done with a command", "isCorrect": true },
      { "text": "Hand Salute involves both hands; Present, ARMS involves only the right hand", "isCorrect": false },
      { "text": "Hand Salute is a marching movement; Present, ARMS is stationary", "isCorrect": false },
      { "text": "Hand Salute is given from a halt; Present, ARMS can be given while moving", "isCorrect": false }
    ]
  },
  {
    "question": "When executing 'Present, ARMS', where should the right hand be placed if glasses are worn?",
    "options": [
      { "text": "On the rim of the glasses", "isCorrect": true },
      { "text": "On the top of the head", "isCorrect": false },
      { "text": "At the side of the face", "isCorrect": false },
      { "text": "Touching the cap brim", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done if a cap or hat is worn while executing 'Present, ARMS'?",
    "options": [
      { "text": "Touch the brim of the hat", "isCorrect": true },
      { "text": "Touch the top of the hat", "isCorrect": false },
      { "text": "Salute with both hands", "isCorrect": false },
      { "text": "Remove the hat before saluting", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct way to report or render courtesy while saluting?",
    "options": [
      { "text": "Turn the head and eyes toward the person addressed while saluting", "isCorrect": true },
      { "text": "Bow the head while saluting", "isCorrect": false },
      { "text": "Wave the hand while saluting", "isCorrect": false },
      { "text": "Maintain a fixed gaze ahead while saluting", "isCorrect": false }
    ]
  },
  {
    "question": "When executing 'Double Time' from Quick Time, what should be done at the command 'MARCH'?",
    "options": [
      { "text": "Take one more step at Quick Time and step off with the trailing foot at Double Time", "isCorrect": true },
      { "text": "Immediately raise the arms to shoulder height and step off with the leading foot", "isCorrect": false },
      { "text": "Hold the current position and then march forward", "isCorrect": false },
      { "text": "Step off with both feet simultaneously", "isCorrect": false }
    ]
  },
  {
    "question": "What position should the fingers and thumb be in when raising the forearms for 'Double Time' from a halt?",
    "options": [
      { "text": "Closed, with knuckles out", "isCorrect": true },
      { "text": "Spread wide", "isCorrect": false },
      { "text": "Curled inward", "isCorrect": false },
      { "text": "Extended straight out", "isCorrect": false }
    ]
  },
  {
    "question": "During 'Mark Time', what should Pathfinders do to maintain proper intervals and distances?",
    "options": [
      { "text": "Adjust and maintain intervals and distances while marching in place", "isCorrect": true },
      { "text": "Stand still without adjusting intervals", "isCorrect": false },
      { "text": "March forward while maintaining intervals", "isCorrect": false },
      { "text": "Move side to side to adjust distances", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct arm swing range during 'Quick Time' marching?",
    "options": [
      { "text": "9 inches forward and 6 inches rear", "isCorrect": true },
      { "text": "12 inches forward and 8 inches rear", "isCorrect": false },
      { "text": "5 inches forward and 10 inches rear", "isCorrect": false },
      { "text": "8 inches forward and 5 inches rear", "isCorrect": false }
    ]
  },
  {
    "question": "When executing 'RIGHT FLANK, MARCH', when should the preparatory command be given?",
    "options": [
      { "text": "As the left foot strikes the ground", "isCorrect": false },
      { "text": "As the right foot strikes the ground", "isCorrect": true },
      { "text": "After the command 'MARCH'", "isCorrect": false },
      { "text": "Before the foot strikes the ground", "isCorrect": false }
    ]
  },
  {
    "question": "What should each Pathfinder do at the command 'MARCH' for 'LEFT FLANK'?",
    "options": [
      { "text": "Take one more step, turn on the ball of the leading foot, and step off in the new direction", "isCorrect": true },
      { "text": "Stop, turn around, and march back", "isCorrect": false },
      { "text": "Take two steps forward, turn 180 degrees, and march", "isCorrect": false },
      { "text": "Turn on the heel of the trailing foot and step off", "isCorrect": false }
    ]
  },
  {
    "question": "How should Pathfinders dress when executing a flank movement?",
    "options": [
      { "text": "Glance out of the corner of the eye and dress to the right", "isCorrect": true },
      { "text": "Look straight ahead and maintain alignment", "isCorrect": false },
      { "text": "Glance to the left and dress to the left", "isCorrect": false },
      { "text": "Look down and adjust intervals", "isCorrect": false }
    ]
  },
  {
    "question": "From which positions can the command 'COLUMN RIGHT, MARCH' be given?",
    "options": [
      { "text": "From the halt or while marching", "isCorrect": true },
      { "text": "Only from the halt", "isCorrect": false },
      { "text": "Only while marching", "isCorrect": false },
      { "text": "Only while standing still", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first action of the lead Pathfinder when the command 'COLUMN LEFT, MARCH' is given from the halt?",
    "options": [
      { "text": "Execute a 90 degree turn and step off with the left foot", "isCorrect": true },
      { "text": "Execute a 45 degree turn and march in place", "isCorrect": false },
      { "text": "Step off with the right foot and turn 90 degrees", "isCorrect": false },
      { "text": "Turn 180 degrees and march forward", "isCorrect": false }
    ]
  },
  {
    "question": "What should the lead Pathfinders in other columns do when the command 'COLUMN RIGHT, MARCH' is given?",
    "options": [
      { "text": "Execute a 45 degree turn and step off with the left foot", "isCorrect": true },
      { "text": "Execute a 90 degree turn and continue marching forward", "isCorrect": false },
      { "text": "March in place until the lead Pathfinder catches up", "isCorrect": false },
      { "text": "Turn 180 degrees and align with the lead Pathfinder", "isCorrect": false }
    ]
  },
  {
    "question": "What distance should the lead Pathfinders take when executing 'COLUMN RIGHT, MARCH'?",
    "options": [
      { "text": "24 inch step", "isCorrect": true },
      { "text": "12 inch step", "isCorrect": false },
      { "text": "36 inch step", "isCorrect": false },
      { "text": "48 inch step", "isCorrect": false }
    ]
  },
  {
    "question": "When all leaders are abreast after a 'COLUMN RIGHT' movement, what should they do?",
    "options": [
      { "text": "Step off with a 24 inch step without command", "isCorrect": true },
      { "text": "Maintain the Half Step until further instructions", "isCorrect": false },
      { "text": "Halt and wait for further commands", "isCorrect": false },
      { "text": "Execute a 90 degree turn to align with the rest of the column", "isCorrect": false }
    ]
  },
  {
    "question": "What should all other club members do when executing a column movement?",
    "options": [
      { "text": "March forward on the command of execution and execute the movement in the same manner as the unit leaders", "isCorrect": true },
      { "text": "Follow the lead Pathfinders only when they are at the same location", "isCorrect": false },
      { "text": "Halt and adjust intervals before resuming the movement", "isCorrect": false },
      { "text": "Continue marching straight without adjusting for the column movement", "isCorrect": false }
    ]
  },
  {
    "question": "What is the interval between the preparatory command and the command of execution for 'RIGHT FLANK'?",
    "options": [
      { "text": "One step", "isCorrect": true },
      { "text": "Two steps", "isCorrect": false },
      { "text": "Half a step", "isCorrect": false },
      { "text": "No interval", "isCorrect": false }
    ]
  },
  {
    "question": "What foot should the lead Pathfinder step off with when executing 'COLUMN LEFT, MARCH' from the halt?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false },
      { "text": "The trailing foot", "isCorrect": false }
    ]
  },
  {
    "question": "How should Pathfinders adjust their movement while executing a column movement from the halt?",
    "options": [
      { "text": "Step off in an arc and take up the Half Step as they come abreast", "isCorrect": true },
      { "text": "March straight forward until the entire column is aligned", "isCorrect": false },
      { "text": "Execute a series of turns to align with the lead Pathfinder", "isCorrect": false },
      { "text": "Remain stationary until the entire column catches up", "isCorrect": false }
    ]
  },
  {
    "question": "What is the proper way to execute a flank movement when marching?",
    "options": [
      { "text": "The preparatory command and the command of execution are given as the foot in the indicated direction strikes the ground", "isCorrect": true },
      { "text": "The preparatory command is given while marching, and the command of execution is given at a halt", "isCorrect": false },
      { "text": "Both commands are given while standing still", "isCorrect": false },
      { "text": "The preparatory command is given before the march begins, and the command of execution is given after the first step", "isCorrect": false }
    ]
  },
  {
    "question": "What action should Pathfinders take when the command 'COLUMN RIGHT, MARCH' is given while marching?",
    "options": [
      { "text": "The preparatory command and the command of execution are given as the foot in the indicated direction strikes the ground", "isCorrect": true },
      { "text": "Pathfinders should halt and then execute the movement", "isCorrect": false },
      { "text": "Execute a 90 degree turn immediately and step off with the leading foot", "isCorrect": false },
      { "text": "Adjust alignment and then continue marching forward", "isCorrect": false }
    ]
  },
  {
    "question": "What should Pathfinders do when the command 'COLUMN LEFT, MARCH' is given from a halt?",
    "options": [
      { "text": "Execute a 90 degree turn with the left foot and step off", "isCorrect": true },
      { "text": "Execute a 45 degree turn and continue marching", "isCorrect": false },
      { "text": "Step off immediately with the right foot and turn 180 degrees", "isCorrect": false },
      { "text": "Remain in place and wait for further instructions", "isCorrect": false }
    ]
  },
  {
    "question": "When executing 'COLUMN RIGHT, MARCH' while marching, what should be done at the command of execution?",
    "options": [
      { "text": "Follow the same procedure as described for executing from the halt", "isCorrect": true },
      { "text": "Stop immediately and then execute the movement", "isCorrect": false },
      { "text": "Change direction abruptly without turning", "isCorrect": false },
      { "text": "Adjust to the new direction while maintaining the same pace", "isCorrect": false }
    ]
  },
  {
    "question": "When standing at attention, what angle should your toes be?",
    "options": [
      { "text": "45 degrees", "isCorrect": true },
      { "text": "90 degrees", "isCorrect": false },
      { "text": "30 degrees", "isCorrect": false },
      { "text": "60 degrees", "isCorrect": false }
    ]
  },
  {
    "question": "In the ATTENTION position, how should your hands be positioned?",
    "options": [
      { "text": "Curled as if holding a coin roll with the thumb over the first knuckle of your index finger", "isCorrect": true },
      { "text": "Placed flat at your sides", "isCorrect": false },
      { "text": "Clenched into fists", "isCorrect": false },
      { "text": "In pockets", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do when in the PARADE REST position?",
    "options": [
      { "text": "Move your left foot away from your right foot and place your hands behind you with the left hand behind the right hand", "isCorrect": true },
      { "text": "Keep your feet together and hands at your sides", "isCorrect": false },
      { "text": "Bend your knees and rest your hands on your thighs", "isCorrect": false },
      { "text": "Stand with hands on your hips and feet apart", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main difference between STAND AT EASE and PARADE REST?",
    "options": [
      { "text": "In STAND AT EASE, your head and eyes should follow the instructor until they move beyond your shoulder", "isCorrect": true },
      { "text": "In STAND AT EASE, your feet are closer together", "isCorrect": false },
      { "text": "In STAND AT EASE, your hands are placed on your hips", "isCorrect": false },
      { "text": "In STAND AT EASE, you must keep your hands at your sides", "isCorrect": false }
    ]
  },
  {
    "question": "What must be done during the AT EASE position?",
    "options": [
      { "text": "Keep your right foot in place, but you may move as needed", "isCorrect": true },
      { "text": "Maintain a strict stance without any movement", "isCorrect": false },
      { "text": "Move freely and make no effort to stay aligned", "isCorrect": false },
      { "text": "Keep both feet in place and stand perfectly still", "isCorrect": false }
    ]
  },
  {
    "question": "When executing DRESS RIGHT DRESS, which person in the group does not move?",
    "options": [
      { "text": "The right most file", "isCorrect": true },
      { "text": "The left most file", "isCorrect": false },
      { "text": "The second person from the right", "isCorrect": false },
      { "text": "The person in the middle of the group", "isCorrect": false }
    ]
  },
  {
    "question": "What additional action is required during PRAYER ATTENTION compared to PARADE REST?",
    "options": [
      { "text": "Bow your head and remove headgear if applicable", "isCorrect": true },
      { "text": "Place hands in front of you", "isCorrect": false },
      { "text": "Stand with feet closer together", "isCorrect": false },
      { "text": "Maintain a strict silence", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do when the command PRESENT ARMS is given?",
    "options": [
      { "text": "Raise your right hand to just above your eyebrow with the upper arm horizontal", "isCorrect": true },
      { "text": "Place both hands on your hips", "isCorrect": false },
      { "text": "Raise your left hand to shoulder level", "isCorrect": false },
      { "text": "Place your hands behind your back", "isCorrect": false }
    ]
  },
  {
    "question": "How is ORDER ARMS executed from PRESENT ARMS?",
    "options": [
      { "text": "Bring your arm down to your side without slapping it against your leg", "isCorrect": true },
      { "text": "Swing your arm down sharply and stop abruptly", "isCorrect": false },
      { "text": "Move your arm in a circular motion to your side", "isCorrect": false },
      { "text": "Drop your arm immediately to your side", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do to execute a RIGHT FACE command?",
    "options": [
      { "text": "Lift your right toes and left heel, pivot on your right heel and left toes to the right", "isCorrect": true },
      { "text": "Lift your left toes and right heel, pivot on your left heel and right toes to the left", "isCorrect": false },
      { "text": "Turn your body 360 degrees on the spot", "isCorrect": false },
      { "text": "Step back with your left foot and turn to the right", "isCorrect": false }
    ]
  },
  {
    "question": "What is the procedure for executing a LEFT FACE command?",
    "options": [
      { "text": "Lift your left toes and right heel, pivot on your left heel and right toes to the left", "isCorrect": true },
      { "text": "Lift your right toes and left heel, pivot on your right heel and left toes to the right", "isCorrect": false },
      { "text": "Turn 360 degrees to the left", "isCorrect": false },
      { "text": "Step forward with your right foot and turn to the left", "isCorrect": false }
    ]
  },
  {
    "question": "How should you perform an ABOUT FACE?",
    "options": [
      { "text": "Place your right foot behind your left heel, turn right until you face the opposite direction", "isCorrect": true },
      { "text": "Turn left on the spot and face the new direction", "isCorrect": false },
      { "text": "Step back with both feet and turn 180 degrees", "isCorrect": false },
      { "text": "Pivot on your heels while turning left", "isCorrect": false }
    ]
  },
  {
    "question": "What does the command FALL OUT allow you to do?",
    "options": [
      { "text": "Break from formation but stay near the instructor", "isCorrect": true },
      { "text": "Leave the formation and walk wherever you want", "isCorrect": false },
      { "text": "Sit down immediately", "isCorrect": false },
      { "text": "Change positions within the formation", "isCorrect": false }
    ]
  },
  {
    "question": "From which position can the command DRESS RIGHT DRESS be executed?",
    "options": [
      { "text": "Only from ATTENTION", "isCorrect": false },
      { "text": "From ATTENTION", "isCorrect": true },
      { "text": "From PARADE REST", "isCorrect": false },
      { "text": "From STAND AT EASE", "isCorrect": false }
    ]
  },
  {
    "question": "When executing the command STAND AT EASE, what should you do with your head and eyes?",
    "options": [
      { "text": "Follow the instructor until they move beyond your shoulder", "isCorrect": true },
      { "text": "Keep your head fixed forward and avoid looking at the instructor", "isCorrect": false },
      { "text": "Look down at your feet", "isCorrect": false },
      { "text": "Look around the formation", "isCorrect": false }
    ]
  },
  {
    "question": "What is required for the PRAYER ATTENTION position?",
    "options": [
      { "text": "Bow your head and remove headgear if applicable", "isCorrect": true },
      { "text": "Stand with your hands behind your back", "isCorrect": false },
      { "text": "Keep your feet apart", "isCorrect": false },
      { "text": "Stand with arms at your sides", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done when the command AT EASE is given?",
    "options": [
      { "text": "Keep your right foot in place, but you may move as needed", "isCorrect": true },
      { "text": "Remain completely still with feet together", "isCorrect": false },
      { "text": "Move freely and talk as needed", "isCorrect": false },
      { "text": "Stand with feet apart and hands on hips", "isCorrect": false }
    ]
  },
  {
    "question": "Which command involves placing your right foot behind your left heel and turning to face the opposite direction?",
    "options": [
      { "text": "RIGHT FACE", "isCorrect": false },
      { "text": "LEFT FACE", "isCorrect": false },
      { "text": "ABOUT FACE", "isCorrect": true },
      { "text": "FALL OUT", "isCorrect": false }
    ]
  },
  {
    "question": "During PRAYER ATTENTION, what additional action is required compared to PARADE REST?",
    "options": [
      { "text": "Extend your left arm", "isCorrect": false },
      { "text": "Bow your head", "isCorrect": true },
      { "text": "Raise your right hand", "isCorrect": false },
      { "text": "Pivot on your right heel", "isCorrect": false }
    ]
  },
  {
    "question": "Which command allows for some movement, but requires you to stay quiet and keep your right foot in place?",
    "options": [
      { "text": "STAND AT EASE", "isCorrect": false },
      { "text": "AT EASE", "isCorrect": true },
      { "text": "ATTENTION", "isCorrect": false },
      { "text": "PARADE REST", "isCorrect": false }
    ]
  },
  {
    "question": "Which command requires the left foot to move away from the right foot to a shoulder-width distance?",
    "options": [
      { "text": "ATTENTION", "isCorrect": false },
      { "text": "STAND AT EASE", "isCorrect": false },
      { "text": "PARADE REST", "isCorrect": true },
      { "text": "DRESS RIGHT DRESS", "isCorrect": false }
    ]
  },
  {
    "question": "What must you do with your left arm when the command DRESS RIGHT DRESS is given?",
    "options": [
      { "text": "Place it behind your back", "isCorrect": false },
      { "text": "Extend it outward", "isCorrect": true },
      { "text": "Raise it to your eyebrow", "isCorrect": false },
      { "text": "Place it on your hip", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following commands can only be issued from the ATTENTION position?",
    "options": [
      { "text": "ABOUT FACE", "isCorrect": false },
      { "text": "PRAYER ATTENTION", "isCorrect": false },
      { "text": "FALL OUT", "isCorrect": false },
      { "text": "All of the above", "isCorrect": true }
    ]
  },
  {
    "question": "When called to STAND AT EASE, what should happen to your hands?",
    "options": [
      { "text": "They should be placed on your hips", "isCorrect": false },
      { "text": "They should be lowered behind your back", "isCorrect": true },
      { "text": "They should be raised above your head", "isCorrect": false },
      { "text": "They should be held at your sides", "isCorrect": false }
    ]
  },
  {
    "question": "In the PRESENT ARMS position, where should your right hand be?",
    "options": [
      { "text": "Behind your back", "isCorrect": false },
      { "text": "Above your eyebrow", "isCorrect": true },
      { "text": "At your side", "isCorrect": false },
      { "text": "Extended forward", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main difference between PARADE REST and PRAYER ATTENTION?",
    "options": [
      { "text": "In PRAYER ATTENTION, your hands are raised", "isCorrect": false },
      { "text": "In PRAYER ATTENTION, your head is bowed", "isCorrect": true },
      { "text": "In PARADE REST, your feet are together", "isCorrect": false },
      { "text": "In PARADE REST, you are allowed to speak", "isCorrect": false }
    ]
  },
  {
    "question": "Which command brings you back to ATTENTION from PRESENT ARMS?",
    "options": [
      { "text": "RIGHT FACE", "isCorrect": false },
      { "text": "ABOUT FACE", "isCorrect": false },
      { "text": "ORDER ARMS", "isCorrect": true },
      { "text": "STAND AT EASE", "isCorrect": false }
    ]
  },
  {
    "question": "When the command 'Mark time, march' is given, what should the unit do?",
    "options": [
      { "text": "March in place", "isCorrect": true },
      { "text": "Halt immediately", "isCorrect": false },
      { "text": "March forward", "isCorrect": false },
      { "text": "Pivot to the left", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit correct when the command 'Mark time, march' is given?",
    "options": [
      { "text": "Intervals and distances", "isCorrect": true },
      { "text": "Foot placement", "isCorrect": false },
      { "text": "Hand position", "isCorrect": false },
      { "text": "Arm swing", "isCorrect": false }
    ]
  },
  {
    "question": "When 'Halt' is called after 'Mark time, march', what should the unit be able to do?",
    "options": [
      { "text": "Dress right, dress and cover", "isCorrect": true },
      { "text": "Stand at ease", "isCorrect": false },
      { "text": "Pivot to the left", "isCorrect": false },
      { "text": "Forward march", "isCorrect": false }
    ]
  },
  {
    "question": "Which foot steps out first when 'Forward march' is called?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Both feet together", "isCorrect": false },
      { "text": "Any foot", "isCorrect": false }
    ]
  },
  {
    "question": "In 4/4 time, on which beat does the left foot land?",
    "options": [
      { "text": "Odd beat", "isCorrect": true },
      { "text": "Even beat", "isCorrect": false },
      { "text": "First beat only", "isCorrect": false },
      { "text": "Fourth beat only", "isCorrect": false }
    ]
  },
  {
    "question": "In 4/4 time, what is the correct order of steps when marching?",
    "options": [
      { "text": "Left, Right, Left, Right", "isCorrect": true },
      { "text": "Right, Left, Right, Left", "isCorrect": false },
      { "text": "Right, Right, Left, Left", "isCorrect": false },
      { "text": "Left, Left, Right, Right", "isCorrect": false }
    ]
  },
  {
    "question": "If marching without music, who is 'in step'?",
    "options": [
      { "text": "The rightmost person in the front rank", "isCorrect": true },
      { "text": "The leftmost person in the front rank", "isCorrect": false },
      { "text": "The person in the middle of the unit", "isCorrect": false },
      { "text": "The person in the rear rank", "isCorrect": false }
    ]
  },
  {
    "question": "What should everyone do if they are not in step with the rightmost person in the front rank?",
    "options": [
      { "text": "Get in step with that person", "isCorrect": true },
      { "text": "Ignore it", "isCorrect": false },
      { "text": "Follow the person next to them", "isCorrect": false },
      { "text": "Wait for another command", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when the command 'Right Flank' is called?",
    "options": [
      { "text": "The unit pivots 90° to the right", "isCorrect": true },
      { "text": "The unit pivots 90° to the left", "isCorrect": false },
      { "text": "The unit marches forward", "isCorrect": false },
      { "text": "The unit halts", "isCorrect": false }
    ]
  },
  {
    "question": "Who becomes the marker after the 'Right Flank' command is executed?",
    "options": [
      { "text": "The person who was last in the right-most column", "isCorrect": true },
      { "text": "The person who was first in the right-most column", "isCorrect": false },
      { "text": "The person in the middle of the unit", "isCorrect": false },
      { "text": "The person at the rear of the unit", "isCorrect": false }
    ]
  },
  {
    "question": "On which foot should the 'Right Flank' command be called?",
    "options": [
      { "text": "Right foot", "isCorrect": true },
      { "text": "Left foot", "isCorrect": false },
      { "text": "Both feet together", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false }
    ]
  },
  {
    "question": "After executing a right flank, what is the first foot that steps out?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Both feet together", "isCorrect": false },
      { "text": "Any foot", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when the command 'Left Flank' is called?",
    "options": [
      { "text": "The unit pivots 90° to the left", "isCorrect": true },
      { "text": "The unit pivots 90° to the right", "isCorrect": false },
      { "text": "The unit marches forward", "isCorrect": false },
      { "text": "The unit halts", "isCorrect": false }
    ]
  },
  {
    "question": "Who becomes the marker after the 'Left Flank' command is executed?",
    "options": [
      { "text": "The person who was first in the left-most column", "isCorrect": true },
      { "text": "The person who was last in the left-most column", "isCorrect": false },
      { "text": "The person in the middle of the unit", "isCorrect": false },
      { "text": "The person at the rear of the unit", "isCorrect": false }
    ]
  },
  {
    "question": "On which foot should the 'Left Flank' command be called?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Both feet together", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false }
    ]
  },
  {
    "question": "After executing a left flank, what is the first foot that steps out?",
    "options": [
      { "text": "Right foot", "isCorrect": true },
      { "text": "Left foot", "isCorrect": false },
      { "text": "Both feet together", "isCorrect": false },
      { "text": "Any foot", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit do after pivoting during a 'Right Flank' command?",
    "options": [
      { "text": "Continue marching in the new direction", "isCorrect": true },
      { "text": "Halt immediately", "isCorrect": false },
      { "text": "Mark time", "isCorrect": false },
      { "text": "Stand at ease", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit do after pivoting during a 'Left Flank' command?",
    "options": [
      { "text": "Continue marching in the new direction", "isCorrect": true },
      { "text": "Halt immediately", "isCorrect": false },
      { "text": "Mark time", "isCorrect": false },
      { "text": "Stand at ease", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct action for the unit when 'Forward March' is called?",
    "options": [
      { "text": "Step out with the left foot and march forward", "isCorrect": true },
      { "text": "Step out with the right foot and march forward", "isCorrect": false },
      { "text": "March in place", "isCorrect": false },
      { "text": "Pivot to the left and march", "isCorrect": false }
    ]
  },
  {
    "question": "When 'Column Right, March' is called, which person initiates the turn?",
    "options": [
      { "text": "The person in the front rank on the right", "isCorrect": true },
      { "text": "The person in the rear rank on the right", "isCorrect": false },
      { "text": "The person in the front rank on the left", "isCorrect": false },
      { "text": "The person in the rear rank on the left", "isCorrect": false }
    ]
  },
  {
    "question": "During 'Column Right, March,' what should the remaining members of the rank do after the initial turn?",
    "options": [
      { "text": "They should remain in a straight line side by side of one another", "isCorrect": true },
      { "text": "They should stop and wait for the next command", "isCorrect": false },
      { "text": "They should pivot individually", "isCorrect": false },
      { "text": "They should form a diagonal line", "isCorrect": false }
    ]
  },
  {
    "question": "At what point should the next rank execute the turn during 'Column Right, March'?",
    "options": [
      { "text": "When they reach the same point where the front rank turned", "isCorrect": true },
      { "text": "Immediately after the front rank turns", "isCorrect": false },
      { "text": "When they are halfway through the march", "isCorrect": false },
      { "text": "When the last rank turns", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of holding onto a broomstick or pole while practicing 'Column Right, March'?",
    "options": [
      { "text": "To help keep the rank in a straight line", "isCorrect": true },
      { "text": "To measure the distance", "isCorrect": false },
      { "text": "To assist with speed control", "isCorrect": false },
      { "text": "To increase the difficulty", "isCorrect": false }
    ]
  },
  {
    "question": "When 'Column Left, March' is called, which person initiates the turn?",
    "options": [
      { "text": "The person in the front rank on the left", "isCorrect": true },
      { "text": "The person in the rear rank on the left", "isCorrect": false },
      { "text": "The person in the front rank on the right", "isCorrect": false },
      { "text": "The person in the rear rank on the right", "isCorrect": false }
    ]
  },
  {
    "question": "During 'Column Left, March,' what should the remaining members of the rank do after the initial turn?",
    "options": [
      { "text": "They should remain in a straight line abreast of one another", "isCorrect": true },
      { "text": "They should spread out to cover more ground", "isCorrect": false },
      { "text": "They should stop and face forward", "isCorrect": false },
      { "text": "They should pivot individually", "isCorrect": false }
    ]
  },
  {
    "question": "Which foot is the command 'Rear March' called on?",
    "options": [
      { "text": "Right foot", "isCorrect": true },
      { "text": "Left foot", "isCorrect": false },
      { "text": "Both feet", "isCorrect": false },
      { "text": "It can be either foot", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step after 'Rear March' is called?",
    "options": [
      { "text": "Take a step with the left foot", "isCorrect": true },
      { "text": "Take a step with the right foot", "isCorrect": false },
      { "text": "Pivot to the left", "isCorrect": false },
      { "text": "Halt", "isCorrect": false }
    ]
  },
  {
    "question": "What should marchers do after pivoting during 'Rear March'?",
    "options": [
      { "text": "Step out again with the left foot", "isCorrect": true },
      { "text": "Step out with the right foot", "isCorrect": false },
      { "text": "Take a half-step", "isCorrect": false },
      { "text": "Halt immediately", "isCorrect": false }
    ]
  },
  {
    "question": "When should the command 'Rear March' be called?",
    "options": [
      { "text": "When the unit is marching or marking time", "isCorrect": true },
      { "text": "When the unit is at rest", "isCorrect": false },
      { "text": "When the unit is turning", "isCorrect": false },
      { "text": "When the unit is halted", "isCorrect": false }
    ]
  },
  {
    "question": "On which foot should the command 'Halt' be called?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false },
      { "text": "Both feet", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct procedure after 'Halt' is called?",
    "options": [
      { "text": "Take a step with the right foot and then a half-step with the left foot", "isCorrect": true },
      { "text": "Stop immediately", "isCorrect": false },
      { "text": "Take a step with the left foot and then a half-step with the right foot", "isCorrect": false },
      { "text": "Take two more full steps", "isCorrect": false }
    ]
  },
  {
    "question": "After executing the 'Halt' command, what position should the marchers be in?",
    "options": [
      { "text": "At attention", "isCorrect": true },
      { "text": "At ease", "isCorrect": false },
      { "text": "Facing right", "isCorrect": false },
      { "text": "Marking time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key action for the person on the left in 'Column Left, March'?",
    "options": [
      { "text": "Make a tight pivot turn to the left by 90°", "isCorrect": true },
      { "text": "Make a wide turn to the left", "isCorrect": false },
      { "text": "Move to the right", "isCorrect": false },
      { "text": "Halt and wait", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main purpose of the 'Rear March' command?",
    "options": [
      { "text": "To have the unit face the opposite direction", "isCorrect": true },
      { "text": "To have the unit stop and turn", "isCorrect": false },
      { "text": "To prepare the unit for 'Column Left'", "isCorrect": false },
      { "text": "To start marking time", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit do after completing a 'Column Left, March'?",
    "options": [
      { "text": "Continue marching forward in the new direction", "isCorrect": true },
      { "text": "Stop and wait for further instructions", "isCorrect": false },
      { "text": "Turn right", "isCorrect": false },
      { "text": "Mark time", "isCorrect": false }
    ]
  },
  {
    "question": "Which action is correct for the rank during 'Column Right, March'?",
    "options": [
      { "text": "The rank should pivot to the right and continue in a straight line", "isCorrect": true },
      { "text": "The rank should pivot to the left and spread out", "isCorrect": false },
      { "text": "The rank should halt", "isCorrect": false },
      { "text": "The rank should pivot to the right and stop", "isCorrect": false }
    ]
  },
  {
    "question": "In 'Column Right, March,' what happens after the entire front rank has turned?",
    "options": [
      { "text": "They continue marching forward in the new direction", "isCorrect": true },
      { "text": "They halt and face forward", "isCorrect": false },
      { "text": "They turn left", "isCorrect": false },
      { "text": "They wait for the next rank", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit do after the entire front rank has turned during 'Column Right, March'?",
    "options": [
      { "text": "They continue marching forward in the new direction", "isCorrect": true },
      { "text": "They halt and face forward", "isCorrect": false },
      { "text": "They turn left", "isCorrect": false },
      { "text": "They wait for the next rank", "isCorrect": false }
    ]
  },
  {
    "question": "Who initiates the turn during 'Column Right, March'?",
    "options": [
      { "text": "The person in the front rank on the right", "isCorrect": true },
      { "text": "The person in the rear rank on the right", "isCorrect": false },
      { "text": "The person in the front rank on the left", "isCorrect": false },
      { "text": "The person in the rear rank on the left", "isCorrect": false }
    ]
  },
  {
    "question": "When is the command 'Column Right, March' typically given?",
    "options": [
      { "text": "Only when the unit is in motion", "isCorrect": true },
      { "text": "When the unit is stationary", "isCorrect": false },
      { "text": "When the unit is marking time", "isCorrect": false },
      { "text": "Only during a halt", "isCorrect": false }
    ]
  },
  {
    "question": "What should the remaining members of the rank do after the initial turn during 'Column Right, March'?",
    "options": [
      { "text": "Remain in a straight line side by side of one another", "isCorrect": true },
      { "text": "Pivot individually", "isCorrect": false },
      { "text": "Form a diagonal line", "isCorrect": false },
      { "text": "Stop and wait for the next command", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of practicing with a broomstick or pole during 'Column Right, March'?",
    "options": [
      { "text": "To help keep the rank in a straight line", "isCorrect": true },
      { "text": "To increase the difficulty", "isCorrect": false },
      { "text": "To measure the distance", "isCorrect": false },
      { "text": "To assist with speed control", "isCorrect": false }
    ]
  },
  {
    "question": "When should the next rank execute the turn during 'Column Right, March'?",
    "options": [
      { "text": "When they reach the same point where the front rank turned", "isCorrect": true },
      { "text": "Immediately after the front rank turns", "isCorrect": false },
      { "text": "When they are halfway through the march", "isCorrect": false },
      { "text": "When the last rank turns", "isCorrect": false }
    ]
  },
  {
    "question": "What action initiates 'Column Left, March'?",
    "options": [
      { "text": "The person in the front rank on the left makes a tight pivot turn to the left by 90°", "isCorrect": true },
      { "text": "The person in the front rank on the right pivots to the left", "isCorrect": false },
      { "text": "The person in the rear rank on the left pivots to the left", "isCorrect": false },
      { "text": "The entire unit halts and then turns left", "isCorrect": false }
    ]
  },
  {
    "question": "What do the other members in the rank do after the initial turn during 'Column Left, March'?",
    "options": [
      { "text": "They remain in a straight line abreast of one another", "isCorrect": true },
      { "text": "They pivot individually", "isCorrect": false },
      { "text": "They form a diagonal line", "isCorrect": false },
      { "text": "They stop and wait for the next command", "isCorrect": false }
    ]
  },
  {
    "question": "When should the next rank execute the turn during 'Column Left, March'?",
    "options": [
      { "text": "When they reach the same point where the front rank turned", "isCorrect": true },
      { "text": "Immediately after the front rank turns", "isCorrect": false },
      { "text": "When they are halfway through the march", "isCorrect": false },
      { "text": "When the last rank turns", "isCorrect": false }
    ]
  },
  {
    "question": "Which foot is the command 'Rear March' called on?",
    "options": [
      { "text": "Right foot", "isCorrect": true },
      { "text": "Left foot", "isCorrect": false },
      { "text": "Both feet", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step after 'Rear March' is called?",
    "options": [
      { "text": "Take a step with the left foot", "isCorrect": true },
      { "text": "Take a step with the right foot", "isCorrect": false },
      { "text": "Pivot to the left", "isCorrect": false },
      { "text": "Halt", "isCorrect": false }
    ]
  },
  {
    "question": "What should marchers do after pivoting during 'Rear March'?",
    "options": [
      { "text": "Step out again with the left foot", "isCorrect": true },
      { "text": "Step out with the right foot", "isCorrect": false },
      { "text": "Take a half-step", "isCorrect": false },
      { "text": "Halt immediately", "isCorrect": false }
    ]
  },
  {
    "question": "When should the command 'Rear March' be called?",
    "options": [
      { "text": "When the unit is marching or marking time", "isCorrect": true },
      { "text": "When the unit is at rest", "isCorrect": false },
      { "text": "When the unit is turning", "isCorrect": false },
      { "text": "When the unit is halted", "isCorrect": false }
    ]
  },
  {
    "question": "On which foot should the command 'Halt' be called?",
    "options": [
      { "text": "Left foot", "isCorrect": true },
      { "text": "Right foot", "isCorrect": false },
      { "text": "Either foot", "isCorrect": false },
      { "text": "Both feet", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct procedure after 'Halt' is called?",
    "options": [
      { "text": "Take a step with the right foot and then a half-step with the left foot", "isCorrect": true },
      { "text": "Stop immediately", "isCorrect": false },
      { "text": "Take a step with the left foot and then a half-step with the right foot", "isCorrect": false },
      { "text": "Take two more full steps", "isCorrect": false }
    ]
  },
  {
    "question": "After executing the 'Halt' command, what position should the marchers be in?",
    "options": [
      { "text": "At attention", "isCorrect": true },
      { "text": "At ease", "isCorrect": false },
      { "text": "Facing right", "isCorrect": false },
      { "text": "Marking time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key action for the person on the left in 'Column Left, March'?",
    "options": [
      { "text": "Make a tight pivot turn to the left by 90°", "isCorrect": true },
      { "text": "Make a wide turn to the left", "isCorrect": false },
      { "text": "Move to the right", "isCorrect": false },
      { "text": "Halt and wait", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main purpose of the 'Rear March' command?",
    "options": [
      { "text": "To have the unit face the opposite direction", "isCorrect": true },
      { "text": "To have the unit stop and turn", "isCorrect": false },
      { "text": "To prepare the unit for 'Column Left'", "isCorrect": false },
      { "text": "To start marking time", "isCorrect": false }
    ]
  },
  {
    "question": "What should the unit do after completing a 'Column Left, March'?",
    "options": [
      { "text": "Continue marching forward in the new direction", "isCorrect": true },
      { "text": "Stop and wait for further instructions", "isCorrect": false },
      { "text": "Turn right", "isCorrect": false },
      { "text": "Form a new line", "isCorrect": false }
    ]
  },
  {
    "question": "Which direction does the unit turn during 'Rear March'?",
    "options": [
      { "text": "To the right", "isCorrect": true },
      { "text": "To the left", "isCorrect": false },
      { "text": "Forward", "isCorrect": false },
      { "text": "Backward", "isCorrect": false }
    ]
  },
  {
    "question": "What does the unit do after executing a 'Rear March'?",
    "options": [
      { "text": "Step out again with the left foot", "isCorrect": true },
      { "text": "Step out again with the right foot", "isCorrect": false },
      { "text": "Halt immediately", "isCorrect": false },
      { "text": "Continue marking time", "isCorrect": false }
    ]
  },
  {
    "question": "In 'Column Right, March,' what is the role of the other ranks after the front rank turns?",
    "options": [
      { "text": "They turn at the same point where the front rank turned", "isCorrect": true },
      { "text": "They turn immediately after the front rank", "isCorrect": false },
      { "text": "They turn at the next corner", "isCorrect": false },
      { "text": "They continue straight ahead", "isCorrect": false }
    ]
  },
  {
    "question": "During 'Column Right, March,' what should the front rank do after making the 90° turn?",
    "options": [
      { "text": "Continue marching forward in the new direction", "isCorrect": true },
      { "text": "Halt and wait for the next command", "isCorrect": false },
      { "text": "Turn left immediately", "isCorrect": false },
      { "text": "Slow down the pace", "isCorrect": false }
    ]
  },
  {
    "question": "What happens if 'Halt' is called when the unit is marching?",
    "options": [
      { "text": "The unit will stop after completing the next step sequence", "isCorrect": true },
      { "text": "The unit will immediately stop in place", "isCorrect": false },
      { "text": "The unit will march in place", "isCorrect": false },
      { "text": "The unit will pivot and then halt", "isCorrect": false }
    ]
  },
  {
    "question": "In 'Column Left, March,' when does the next rank execute the turn?",
    "options": [
      { "text": "When they reach the same point where the front rank turned", "isCorrect": true },
      { "text": "Immediately after the front rank turns", "isCorrect": false },
      { "text": "After a full step sequence", "isCorrect": false },
      { "text": "When commanded by the leader", "isCorrect": false }
    ]
  },
  {
    "question": "Which rank member initiates the turn in 'Column Left, March'?",
    "options": [
      { "text": "The person in the front rank on the left", "isCorrect": true },
      { "text": "The person in the rear rank on the left", "isCorrect": false },
      { "text": "The person in the front rank on the right", "isCorrect": false },
      { "text": "The person in the rear rank on the right", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Rear March' command?",
    "options": [
      { "text": "To have the unit face the opposite direction", "isCorrect": true },
      { "text": "To start a new movement", "isCorrect": false },
      { "text": "To initiate a halt", "isCorrect": false },
      { "text": "To mark time", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct action after 'Rear March' is called?",
    "options": [
      { "text": "Pivot on the toes of both feet until facing the opposite direction", "isCorrect": true },
      { "text": "Step out with the right foot", "isCorrect": false },
      { "text": "Continue marching forward", "isCorrect": false },
      { "text": "Turn left and march", "isCorrect": false }
    ]
  },
  {
    "question": "Which command is typically called on the left foot?",
    "options": [
      { "text": "Halt", "isCorrect": true },
      { "text": "Column Right, March", "isCorrect": false },
      { "text": "Rear March", "isCorrect": false },
      { "text": "Column Left, March", "isCorrect": false }
    ]
  },
  {
    "question": "How should the marchers be aligned after executing 'Halt'?",
    "options": [
      { "text": "They should remain at attention", "isCorrect": true },
      { "text": "They should be at ease", "isCorrect": false },
      { "text": "They should face forward", "isCorrect": false },
      { "text": "They should mark time", "isCorrect": false }
    ]
  },
  {
    "question": "What should marchers do after completing the pivot in 'Rear March'?",
    "options": [
      { "text": "Step out again with the left foot", "isCorrect": true },
      { "text": "Step out with the right foot", "isCorrect": false },
      { "text": "Halt immediately", "isCorrect": false },
      { "text": "Pivot again", "isCorrect": false }
    ]
  }
];