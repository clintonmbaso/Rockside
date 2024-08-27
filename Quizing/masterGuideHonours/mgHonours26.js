// Housekeeping

const mgHonours26 = [

  {
    "question": "What is the main item used for sweeping in house cleaning?",
    "options": [
      { "text": "Vacuum cleaner", "isCorrect": false },
      { "text": "Mop and bucket", "isCorrect": false },
      { "text": "Broom and dustpan", "isCorrect": true },
      { "text": "Scrub brushes", "isCorrect": false }
    ]
  },
  {
    "question": "What should you use to clean windows?",
    "options": [
      { "text": "Furniture polish", "isCorrect": false },
      { "text": "Window cleaner", "isCorrect": true },
      { "text": "All-purpose cleaners", "isCorrect": false },
      { "text": "Paper towels", "isCorrect": false }
    ]
  },
  {
    "question": "Which item is best for cleaning a stovetop immediately after a spill?",
    "options": [
      { "text": "Scrub brushes", "isCorrect": false },
      { "text": "Vacuum cleaner", "isCorrect": false },
      { "text": "Mop and bucket", "isCorrect": false },
      { "text": "Dust cloths", "isCorrect": true }
    ]
  },
  {
    "question": "How should you clean the inside of a microwave oven?",
    "options": [
      { "text": "Wipe with a dry cloth", "isCorrect": false },
      { "text": "Scrub with steel wool", "isCorrect": false },
      { "text": "Clean immediately after spills", "isCorrect": true },
      { "text": "Use only water", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do to prevent items in the basement from molding?",
    "options": [
      { "text": "Store items on the floor", "isCorrect": false },
      { "text": "Keep the basement dry", "isCorrect": true },
      { "text": "Cover items with plastic", "isCorrect": false },
      { "text": "Carpet the basement floor", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended order for washing dishes?",
    "options": [
      { "text": "Silver, glass, kitchen dishes, table dishes", "isCorrect": false },
      { "text": "Table dishes, silver, glass, kitchen dishes", "isCorrect": false },
      { "text": "Glass, silver, table dishes, kitchen dishes", "isCorrect": true },
      { "text": "Kitchen dishes, glass, silver, table dishes", "isCorrect": false }
    ]
  },
  {
    "question": "How should sinks be cleaned?",
    "options": [
      { "text": "With a vacuum cleaner", "isCorrect": false },
      { "text": "With dish soap and a sponge", "isCorrect": true },
      { "text": "With window cleaner", "isCorrect": false },
      { "text": "With a mop and bucket", "isCorrect": false }
    ]
  },
  {
    "question": "What is important to remember when cleaning a toilet?",
    "options": [
      { "text": "Only clean the seat", "isCorrect": false },
      { "text": "Use a toilet brush and cleaner", "isCorrect": true },
      { "text": "Wipe with a paper towel", "isCorrect": false },
      { "text": "Vacuum the toilet", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do to keep carpets clean?",
    "options": [
      { "text": "Vacuum frequently and steam-clean occasionally", "isCorrect": true },
      { "text": "Wash with soap and water", "isCorrect": false },
      { "text": "Shake outside", "isCorrect": false },
      { "text": "Use only a mop", "isCorrect": false }
    ]
  },
  {
    "question": "How should papered walls be cleaned?",
    "options": [
      { "text": "With a dry cloth", "isCorrect": false },
      { "text": "With soapy water", "isCorrect": false },
      { "text": "With a slightly dampened cloth", "isCorrect": true },
      { "text": "With window cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "What should you avoid when cleaning ashes from a fireplace?",
    "options": [
      { "text": "Waiting at least 12 hours after a fire", "isCorrect": false },
      { "text": "Covering ashes with damp newspaper", "isCorrect": false },
      { "text": "Dousing the fire with water", "isCorrect": true },
      { "text": "Shoveling ashes into a bag", "isCorrect": false }
    ]
  },
  {
    "question": "Under what conditions do germs and pests thrive?",
    "options": [
      { "text": "Clean environments", "isCorrect": false },
      { "text": "Dry conditions", "isCorrect": false },
      { "text": "Filthy environments", "isCorrect": true },
      { "text": "Organized spaces", "isCorrect": false }
    ]
  },
  {
    "question": "How should basements be maintained to prevent mold and mildew?",
    "options": [
      { "text": "Carpeted and items stored on the floor", "isCorrect": false },
      { "text": "Swept frequently and kept dry", "isCorrect": true },
      { "text": "Left untreated", "isCorrect": false },
      { "text": "Items stored in the basement without any precautions", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done if a basement is prone to wetness?",
    "options": [
      { "text": "Carpet the basement floor", "isCorrect": false },
      { "text": "Place items directly on the floor", "isCorrect": false },
      { "text": "Place items on pallets or shelves", "isCorrect": true },
      { "text": "Ignore the wetness", "isCorrect": false }
    ]
  },
  {
    "question": "How should closets be maintained?",
    "options": [
      { "text": "Keep them disorganized", "isCorrect": false },
      { "text": "Air them out occasionally and keep them neat", "isCorrect": true },
      { "text": "Store everything on the floor", "isCorrect": false },
      { "text": "Never sweep or vacuum", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended way to clean cupboards?",
    "options": [
      { "text": "Periodically empty and wipe down", "isCorrect": true },
      { "text": "Ignore them until they are visibly dirty", "isCorrect": false },
      { "text": "Use only paper towels", "isCorrect": false },
      { "text": "Only clean the outside", "isCorrect": false }
    ]
  },
  {
    "question": "How should sinks be cleaned?",
    "options": [
      { "text": "With only water", "isCorrect": false },
      { "text": "With dish soap and a sponge or wash cloth", "isCorrect": true },
      { "text": "With a vacuum cleaner", "isCorrect": false },
      { "text": "With window cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done to maintain a stainless steel sink?",
    "options": [
      { "text": "Clean it with a dishcloth", "isCorrect": false },
      { "text": "Scrub it with steel wool", "isCorrect": true },
      { "text": "Use only water", "isCorrect": false },
      { "text": "Avoid cleaning it regularly", "isCorrect": false }
    ]
  },
  {
    "question": "How should floors be cleaned?",
    "options": [
      { "text": "Only sweep", "isCorrect": false },
      { "text": "Sweep and mop hardwood, tile, or linoleum floors", "isCorrect": true },
      { "text": "Only vacuum carpeted floors", "isCorrect": false },
      { "text": "Use only a mop on all types of floors", "isCorrect": false }
    ]
  },
  {
    "question": "What is the best way to clean a toilet?",
    "options": [
      { "text": "Wipe with a paper towel", "isCorrect": false },
      { "text": "Scrub with a toilet brush and cleaner", "isCorrect": true },
      { "text": "Use a vacuum cleaner", "isCorrect": false },
      { "text": "Only clean the seat", "isCorrect": false }
    ]
  },
  {
    "question": "Which area of the toilet requires special attention during cleaning?",
    "options": [
      { "text": "The seat", "isCorrect": false },
      { "text": "The inside of the bowl, especially under the rim", "isCorrect": true },
      { "text": "The tank only", "isCorrect": false },
      { "text": "The floor around the toilet", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done to freshen up a sink with a garbage disposal?",
    "options": [
      { "text": "Run citrus peels through the disposal", "isCorrect": true },
      { "text": "Use only water", "isCorrect": false },
      { "text": "Scrub the disposal with steel wool", "isCorrect": false },
      { "text": "Ignore the disposal", "isCorrect": false }
    ]
  },
  {
    "question": "How often should carpets be vacuumed?",
    "options": [
      { "text": "Once a month", "isCorrect": false },
      { "text": "Weekly", "isCorrect": true },
      { "text": "Only when visibly dirty", "isCorrect": false },
      { "text": "Never", "isCorrect": false }
    ]
  },
  {
    "question": "What should be used to clean papered walls?",
    "options": [
      { "text": "A damp cloth", "isCorrect": true },
      { "text": "Soapy water", "isCorrect": false },
      { "text": "Window cleaner", "isCorrect": false },
      { "text": "A dry cloth", "isCorrect": false }
    ]
  },
  {
    "question": "What should be avoided when cleaning ashes from a fireplace?",
    "options": [
      { "text": "Covering ashes with damp newspaper", "isCorrect": false },
      { "text": "Shoveling ashes into a bag", "isCorrect": false },
      { "text": "Dousing the fire with water", "isCorrect": true },
      { "text": "Waiting at least 12 hours", "isCorrect": false }
    ]
  },
  {
    "question": "How should painted walls be cleaned?",
    "options": [
      { "text": "With a slightly dampened cloth", "isCorrect": false },
      { "text": "With soapy water", "isCorrect": true },
      { "text": "With window cleaner", "isCorrect": false },
      { "text": "With a dry cloth", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done with leftover food before washing dishes?",
    "options": [
      { "text": "Leave it on the dishes", "isCorrect": false },
      { "text": "Scrape it into the garbage disposal or trash", "isCorrect": true },
      { "text": "Rinse the dishes without scraping", "isCorrect": false },
      { "text": "Wash the dishes without removing the food", "isCorrect": false }
    ]
  },
  {
    "question": "Why might dishes with tough, stuck-on food need to be soaked?",
    "options": [
      { "text": "To make them easier to clean", "isCorrect": true },
      { "text": "To make them more difficult to clean", "isCorrect": false },
      { "text": "To make them smell better", "isCorrect": false },
      { "text": "To change their color", "isCorrect": false }
    ]
  },
  {
    "question": "What happens if oatmeal hardens in a dish?",
    "options": [
      { "text": "It becomes easy to clean", "isCorrect": false },
      { "text": "It becomes almost cement-like", "isCorrect": true },
      { "text": "It dissolves on its own", "isCorrect": false },
      { "text": "It softens further", "isCorrect": false }
    ]
  },
  {
    "question": "Do modern dishwashers require dishes to be rinsed before washing?",
    "options": [
      { "text": "Yes, they must be rinsed", "isCorrect": false },
      { "text": "No, they do not need to be rinsed", "isCorrect": true },
      { "text": "Only if they are very dirty", "isCorrect": false },
      { "text": "Only if they have large food particles", "isCorrect": false }
    ]
  },
  {
    "question": "Why is it important to rinse dishes before washing them by hand?",
    "options": [
      { "text": "To avoid spoiling the water", "isCorrect": true },
      { "text": "To make them cleaner", "isCorrect": false },
      { "text": "To speed up the washing process", "isCorrect": false },
      { "text": "To save soap", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended order for washing dishes?",
    "options": [
      { "text": "Silverware, glasses, kitchen dishes, table dishes", "isCorrect": false },
      { "text": "Kitchen dishes, table dishes, glasses, silverware", "isCorrect": false },
      { "text": "Glasses, silverware, table dishes, kitchen dishes", "isCorrect": true },
      { "text": "Table dishes, glasses, silverware, kitchen dishes", "isCorrect": false }
    ]
  },
  {
    "question": "Why should glasses be washed first?",
    "options": [
      { "text": "They are the dirtiest", "isCorrect": false },
      { "text": "They are difficult to clean if the water is greasy", "isCorrect": true },
      { "text": "They are the easiest to clean", "isCorrect": false },
      { "text": "They should be washed last for better drying", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done if the dishwater becomes disgusting?",
    "options": [
      { "text": "Keep using it", "isCorrect": false },
      { "text": "Change it", "isCorrect": true },
      { "text": "Add more soap", "isCorrect": false },
      { "text": "Rinse the dishes quickly", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main reason for soaking dishes with tough, stuck-on food?",
    "options": [
      { "text": "To soften the food for easier cleaning", "isCorrect": true },
      { "text": "To make the dish smell better", "isCorrect": false },
      { "text": "To make the food harder", "isCorrect": false },
      { "text": "To prevent the dish from breaking", "isCorrect": false }
    ]
  },
  {
    "question": "How should dishes be stacked for washing?",
    "options": [
      { "text": "Randomly", "isCorrect": false },
      { "text": "In the order they were used", "isCorrect": false },
      { "text": "By type and in a neat stack", "isCorrect": true },
      { "text": "In a pile without any order", "isCorrect": false }
    ]
  },
  {
    "question": "When should tough, stuck-on food be soaked?",
    "options": [
      { "text": "Immediately after the meal", "isCorrect": false },
      { "text": "Before cleaning the dishes", "isCorrect": true },
      { "text": "After cleaning the dishes", "isCorrect": false },
      { "text": "When the dish is about to be used again", "isCorrect": false }
    ]
  },
  {
    "question": "What is the reason for cleaning glasses first in the washing process?",
    "options": [
      { "text": "They are always the least dirty", "isCorrect": false },
      { "text": "They are most difficult to clean if the water is greasy", "isCorrect": true },
      { "text": "They need the most soap", "isCorrect": false },
      { "text": "They are the most fragile", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of dish should be washed last?",
    "options": [
      { "text": "Glasses", "isCorrect": false },
      { "text": "Silverware", "isCorrect": false },
      { "text": "Table dishes", "isCorrect": false },
      { "text": "Kitchen dishes", "isCorrect": true }
    ]
  },
  {
    "question": "What should be done with dishes that are soaked?",
    "options": [
      { "text": "Wash them immediately after soaking", "isCorrect": true },
      { "text": "Let them air dry before washing", "isCorrect": false },
      { "text": "Discard them", "isCorrect": false },
      { "text": "Rinse them with clean water only", "isCorrect": false }
    ]
  },
  {
    "question": "Why should silverware be washed after glasses?",
    "options": [
      { "text": "Because it is always less dirty", "isCorrect": false },
      { "text": "Because it is more likely to be greasy", "isCorrect": false },
      { "text": "Because glasses should be washed first to avoid grease", "isCorrect": true },
      { "text": "Because it needs the most soap", "isCorrect": false }
    ]
  },
  {
    "question": "How should rugs be cleaned?",
    "options": [
      { "text": "By vacuuming only", "isCorrect": false },
      { "text": "By shaking out or beating them", "isCorrect": true },
      { "text": "By scrubbing with soapy water", "isCorrect": false },
      { "text": "By steam cleaning only", "isCorrect": false }
    ]
  },
  {
    "question": "How often should carpets be vacuumed?",
    "options": [
      { "text": "Rarely", "isCorrect": false },
      { "text": "Frequently", "isCorrect": true },
      { "text": "Only when spills occur", "isCorrect": false },
      { "text": "Once a month", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do immediately after a spill on a carpet?",
    "options": [
      { "text": "Scrub the area with soap", "isCorrect": false },
      { "text": "Place an absorbent material over the spill and press", "isCorrect": true },
      { "text": "Ignore it until later", "isCorrect": false },
      { "text": "Pour water over the spill", "isCorrect": false }
    ]
  },
  {
    "question": "What is a recommended method to prevent permanent staining on carpets from spills?",
    "options": [
      { "text": "Let the spill dry out", "isCorrect": false },
      { "text": "Use an upholstery/carpet cleaner immediately", "isCorrect": true },
      { "text": "Scrub the spill with a brush", "isCorrect": false },
      { "text": "Rinse the area with vinegar", "isCorrect": false }
    ]
  },
  {
    "question": "How should pillows be cleaned?",
    "options": [
      { "text": "By washing the entire pillow in the machine", "isCorrect": false },
      { "text": "By removing the cover and washing it while airing out the pillow", "isCorrect": true },
      { "text": "By vacuuming only", "isCorrect": false },
      { "text": "By wiping with a damp cloth", "isCorrect": false }
    ]
  },
  {
    "question": "How should cloth-upholstered furniture be maintained?",
    "options": [
      { "text": "By dusting only", "isCorrect": false },
      { "text": "By vacuuming regularly and using upholstery cleaner", "isCorrect": true },
      { "text": "By scrubbing with soap", "isCorrect": false },
      { "text": "By washing with water", "isCorrect": false }
    ]
  },
  {
    "question": "How should leather-upholstered furniture be cleaned?",
    "options": [
      { "text": "By vacuuming only", "isCorrect": false },
      { "text": "By wiping with a damp cloth and occasional leather cleaner", "isCorrect": true },
      { "text": "By scrubbing with soap", "isCorrect": false },
      { "text": "By using any household cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "How should papered walls be cleaned?",
    "options": [
      { "text": "With soapy water", "isCorrect": false },
      { "text": "With a slightly dampened cloth", "isCorrect": true },
      { "text": "With a dry cloth", "isCorrect": false },
      { "text": "With window cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "What type of paint finish is recommended for high-traffic areas like kitchens?",
    "options": [
      { "text": "Flat paint", "isCorrect": false },
      { "text": "Glossy finish", "isCorrect": true },
      { "text": "Satin finish", "isCorrect": false },
      { "text": "Matte finish", "isCorrect": false }
    ]
  },
  {
    "question": "How should hardwood, tile, or linoleum floors be cleaned?",
    "options": [
      { "text": "By sweeping only", "isCorrect": false },
      { "text": "By mopping only", "isCorrect": false },
      { "text": "By sweeping frequently and mopping occasionally", "isCorrect": true },
      { "text": "By vacuuming only", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct method for mopping a floor?",
    "options": [
      { "text": "Sweep first and then mop using warm water and floor cleaner", "isCorrect": true },
      { "text": "Mop without sweeping", "isCorrect": false },
      { "text": "Rinse the floor with water only", "isCorrect": false },
      { "text": "Use cold water and no cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "What should be used to wash windows?",
    "options": [
      { "text": "Soap and water", "isCorrect": false },
      { "text": "Vinegar and water mixture or window cleaner", "isCorrect": true },
      { "text": "Dish soap", "isCorrect": false },
      { "text": "Wipes only", "isCorrect": false }
    ]
  },
  {
    "question": "How should you clean glass windows to avoid streaks?",
    "options": [
      { "text": "Wipe both sides with the same direction", "isCorrect": false },
      { "text": "Make the last pass horizontally on the inside and vertically on the outside", "isCorrect": true },
      { "text": "Use a dry cloth only", "isCorrect": false },
      { "text": "Use only newspaper", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done if the spilled substance on a carpet is very difficult to clean?",
    "options": [
      { "text": "Leave it until it dries", "isCorrect": false },
      { "text": "Use an upholstery/carpet cleaner immediately", "isCorrect": true },
      { "text": "Scrub the area with a hard brush", "isCorrect": false },
      { "text": "Vacuum the area", "isCorrect": false }
    ]
  },
  {
    "question": "What should be avoided when cleaning papered walls?",
    "options": [
      { "text": "Using a slightly dampened cloth", "isCorrect": false },
      { "text": "Getting the paper too wet", "isCorrect": true },
      { "text": "Cleaning gently", "isCorrect": false },
      { "text": "Using a non-abrasive cleaner", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done to carpets after vacuuming?",
    "options": [
      { "text": "Leave them as they are", "isCorrect": false },
      { "text": "Steam-clean them periodically", "isCorrect": true },
      { "text": "Scrub them with soap", "isCorrect": false },
      { "text": "Rinse them with water", "isCorrect": false }
    ]
  },
  {
    "question": "What is the proper way to handle an absorbent material when cleaning a spill on a carpet?",
    "options": [
      { "text": "Place it over the spill and press, then move a dry area of the towel over the spill", "isCorrect": true },
      { "text": "Rub it back and forth on the spill", "isCorrect": false },
      { "text": "Soak the spill with water before placing the towel", "isCorrect": false },
      { "text": "Leave it on the spill without pressing", "isCorrect": false }
    ]
  },
  {
    "question": "How should upholstered furniture be cleaned?",
    "options": [
      { "text": "With a vacuum cleaner only", "isCorrect": false },
      { "text": "By vacuuming and using an upholstery cleaner", "isCorrect": true },
      { "text": "With a damp cloth only", "isCorrect": false },
      { "text": "By washing with water", "isCorrect": false }
    ]
  },
  {
    "question": "How should leather furniture be cleaned?",
    "options": [
      { "text": "With a damp cloth and occasional leather cleaner", "isCorrect": true },
      { "text": "With any household cleaner", "isCorrect": false },
      { "text": "With a vacuum cleaner only", "isCorrect": false },
      { "text": "By washing with water", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done before mopping a floor?",
    "options": [
      { "text": "Vacuum the floor", "isCorrect": false },
      { "text": "Sweep the floor", "isCorrect": true },
      { "text": "Wipe the floor with a dry cloth", "isCorrect": false },
      { "text": "Scrub the floor with soap", "isCorrect": false }
    ]
  },
  {
    "question": "How should you handle trash disposal in your community?",
    "options": [
      { "text": "By following the local government's guidelines", "isCorrect": true },
      { "text": "By burning it all at home", "isCorrect": false },
      { "text": "By disposing of it in any random location", "isCorrect": false },
      { "text": "By mixing all types of waste together", "isCorrect": false }
    ]
  },
  {
    "question": "What is a common method of disposing of waste?",
    "options": [
      { "text": "Placing it in a landfill or incinerating it", "isCorrect": true },
      { "text": "Burying it in the backyard", "isCorrect": false },
      { "text": "Dumping it in the ocean", "isCorrect": false },
      { "text": "Hoarding it until it can be sorted", "isCorrect": false }
    ]
  },
  {
    "question": "What should you check before cleaning out a fireplace?",
    "options": [
      { "text": "Ensure the ash contains no embers", "isCorrect": true },
      { "text": "Make sure the fire is still burning", "isCorrect": false },
      { "text": "Verify that the hearth is clean", "isCorrect": false },
      { "text": "Confirm that the fireplace is not too hot", "isCorrect": false }
    ]
  },
  {
    "question": "How long should you wait after a fire before cleaning out the fireplace?",
    "options": [
      { "text": "12 hours", "isCorrect": true },
      { "text": "1 hour", "isCorrect": false },
      { "text": "24 hours", "isCorrect": false },
      { "text": "6 hours", "isCorrect": false }
    ]
  },
  {
    "question": "What should be used to cover the ashes during fireplace cleaning?",
    "options": [
      { "text": "Damp newspaper", "isCorrect": true },
      { "text": "Plastic wrap", "isCorrect": false },
      { "text": "Aluminum foil", "isCorrect": false },
      { "text": "A wet cloth", "isCorrect": false }
    ]
  },
  {
    "question": "Why should you avoid dousing a fireplace fire with water?",
    "options": [
      { "text": "It can crack the firebox and harden the ash", "isCorrect": true },
      { "text": "It makes the fire burn longer", "isCorrect": false },
      { "text": "It cleans the firebox more effectively", "isCorrect": false },
      { "text": "It cools down the fireplace too quickly", "isCorrect": false }
    ]
  },
  {
    "question": "How often should the chimney be cleaned by a professional?",
    "options": [
      { "text": "Annually", "isCorrect": true },
      { "text": "Every two years", "isCorrect": false },
      { "text": "Monthly", "isCorrect": false },
      { "text": "Every five years", "isCorrect": false }
    ]
  },
  {
    "question": "What is a good practice when shoveling ash from a fireplace?",
    "options": [
      { "text": "Wearing a dust mask and covering the hearth with a tarp", "isCorrect": true },
      { "text": "Using a broom and sweeping the ash", "isCorrect": false },
      { "text": "Wiping the ashes with a damp cloth", "isCorrect": false },
      { "text": "Cleaning the ash immediately without precautions", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done if a fire in the fireplace is still burning when cleaning?",
    "options": [
      { "text": "Wait until it has completely extinguished", "isCorrect": true },
      { "text": "Start cleaning immediately", "isCorrect": false },
      { "text": "Add more fuel to keep it going", "isCorrect": false },
      { "text": "Douse it with water to speed up the process", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of waste does not typically require sorting in many communities?",
    "options": [
      { "text": "Toxic waste", "isCorrect": false },
      { "text": "Construction waste", "isCorrect": false },
      { "text": "Yard waste", "isCorrect": false },
      { "text": "Household waste", "isCorrect": true }
    ]
  },
  {
    "question": "What does it mean to keep a home 'baby safe'?",
    "options": [
      { "text": "Taking actions to prevent a baby from endangering itself or others", "isCorrect": true },
      { "text": "Allowing a baby to explore without any restrictions", "isCorrect": false },
      { "text": "Providing unrestricted access to all household items", "isCorrect": false },
      { "text": "Keeping all rooms off-limits to the baby", "isCorrect": false }
    ]
  },
  {
    "question": "What should be done with unused electrical outlets to keep a baby safe?",
    "options": [
      { "text": "Cover them to prevent insertion of objects", "isCorrect": true },
      { "text": "Leave them open for easy access", "isCorrect": false },
      { "text": "Use them frequently for testing purposes", "isCorrect": false },
      { "text": "Place furniture in front of them", "isCorrect": false }
    ]
  },
  {
    "question": "Where should cleaners and toxic items be stored in a baby-safe home?",
    "options": [
      { "text": "Out of the baby's reach or locked away", "isCorrect": true },
      { "text": "On low shelves for easy access", "isCorrect": false },
      { "text": "In open containers on the floor", "isCorrect": false },
      { "text": "Mixed with baby toys for convenience", "isCorrect": false }
    ]
  },
  {
    "question": "Why are stairways gated in a baby-safe home?",
    "options": [
      { "text": "To prevent the baby from falling or climbing up and falling", "isCorrect": true },
      { "text": "To create a play area for the baby", "isCorrect": false },
      { "text": "To keep the baby entertained", "isCorrect": false },
      { "text": "To separate different areas of the house", "isCorrect": false }
    ]
  },
  {
    "question": "What size items should be stored out of a baby's reach?",
    "options": [
      { "text": "Items smaller than a golf ball", "isCorrect": true },
      { "text": "Items larger than a football", "isCorrect": false },
      { "text": "Items with sharp edges", "isCorrect": false },
      { "text": "All household items", "isCorrect": false }
    ]
  },
  {
    "question": "Why should baby-safe homes be checked and maintained regularly?",
    "options": [
      { "text": "To ensure continued safety and prevent accidents", "isCorrect": true },
      { "text": "To redecorate according to new trends", "isCorrect": false },
      { "text": "To create a new play area for the baby", "isCorrect": false },
      { "text": "To remove unused furniture", "isCorrect": false }
    ]
  },
  {
    "question": "What is a common behavior of babies that increases the need for a baby-safe home?",
    "options": [
      { "text": "Exploring with their mouths", "isCorrect": true },
      { "text": "Playing quietly with toys", "isCorrect": false },
      { "text": "Sitting still for long periods", "isCorrect": false },
      { "text": "Reading books independently", "isCorrect": false }
    ]
  },
  {
    "question": "What is an effective way to prevent a baby from accessing harmful items?",
    "options": [
      { "text": "Store items out of reach or lock them away", "isCorrect": true },
      { "text": "Place them on low tables", "isCorrect": false },
      { "text": "Keep them in open containers", "isCorrect": false },
      { "text": "Hide them under furniture", "isCorrect": false }
    ]
  },
  {
    "question": "What precaution should be taken when cleaning up a spill on a carpet?",
    "options": [
      { "text": "Use an absorbent material and treat stains immediately", "isCorrect": true },
      { "text": "Scrub the spill with water immediately", "isCorrect": false },
      { "text": "Leave the spill to dry naturally", "isCorrect": false },
      { "text": "Use a vacuum cleaner without treating the stain", "isCorrect": false }
    ]
  },
  {
    "question": "What should be the focus when planning and doing household work for a week?",
    "options": [
      { "text": "Completing tasks thoroughly and ensuring cleanliness", "isCorrect": true },
      { "text": "Focusing on redecorating the house", "isCorrect": false },
      { "text": "Ignoring minor tasks to save time", "isCorrect": false },
      { "text": "Only addressing major cleaning tasks", "isCorrect": false }
    ]
  }
];