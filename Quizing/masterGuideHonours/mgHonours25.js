// Prayer

const mgHonours25 = [

  {
    "question": "What is prayer according to the text?",
    "options": [
      { "text": "A method of talking to God without everyone watching, just you and Him.", "isCorrect": true },
      { "text": "A public act of worship.", "isCorrect": false },
      { "text": "A way to discuss personal issues with friends.", "isCorrect": false },
      { "text": "A ritual performed only in church.", "isCorrect": false }
    ]
  },
  {
    "question": "Why is prayer important according to the discussion?",
    "options": [
      { "text": "It is how we communicate with God, praise Him, and address our needs.", "isCorrect": true },
      { "text": "It is only important during church services.", "isCorrect": false },
      { "text": "It is a way to gain social recognition.", "isCorrect": false },
      { "text": "It is a method to achieve personal goals.", "isCorrect": false }
    ]
  },
  {
    "question": "Can a person be a Christian and not pray?",
    "options": [
      { "text": "No, prayer is essential to being a Christian.", "isCorrect": true },
      { "text": "Yes, if they attend church regularly.", "isCorrect": false },
      { "text": "Yes, if they perform good deeds.", "isCorrect": false },
      { "text": "No, as long as they read the Bible.", "isCorrect": false }
    ]
  },
  {
    "question": "What does Matthew 6:9-13 include that Luke 11:2-4 does not?",
    "options": [
      { "text": "The doxology: 'For Yours is the kingdom and the power and the glory forever. Amen.'", "isCorrect": true },
      { "text": "The request for daily bread.", "isCorrect": false },
      { "text": "The petition for forgiveness of sins.", "isCorrect": false },
      { "text": "The plea for deliverance from the evil one.", "isCorrect": false }
    ]
  },
  {
    "question": "Why might there be differences between the versions of the Lord's Prayer?",
    "options": [
      { "text": "Different translations and possible variations in manuscripts.", "isCorrect": true },
      { "text": "Errors in copying by early scribes.", "isCorrect": false },
      { "text": "Intentional changes by early church leaders.", "isCorrect": false },
      { "text": "Modern interpretations by different denominations.", "isCorrect": false }
    ]
  },
  {
    "question": "What is a notable feature of the Lord's Prayer as recorded in Luke 11:2-4 compared to Matthew 6:9-13?",
    "options": [
      { "text": "It is shorter and lacks the doxology.", "isCorrect": true },
      { "text": "It includes a different request for daily bread.", "isCorrect": false },
      { "text": "It is written in a different language.", "isCorrect": false },
      { "text": "It has an additional line about forgiveness.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the prayer of Hannah in 1 Samuel 2:1 express?",
    "options": [
      { "text": "A prayer of praise and thanksgiving.", "isCorrect": true },
      { "text": "A request for guidance.", "isCorrect": false },
      { "text": "A plea for healing.", "isCorrect": false },
      { "text": "A confession of sins.", "isCorrect": false }
    ]
  },
  {
    "question": "Which prayer is an example of supplication in the Bible?",
    "options": [
      { "text": "The Prayer of Jabez in 1 Chronicles 4:9-10.", "isCorrect": true },
      { "text": "David’s prayer in Psalm 51.", "isCorrect": false },
      { "text": "The prayer at the end of Jude.", "isCorrect": false },
      { "text": "The Lord’s Prayer in Matthew 6:9-13.", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of prayer is demonstrated by Psalm 107:1?",
    "options": [
      { "text": "Thanksgiving.", "isCorrect": true },
      { "text": "Adoration.", "isCorrect": false },
      { "text": "Confession.", "isCorrect": false },
      { "text": "Supplication.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main focus of the prayer found in Matthew 26 before Jesus' crucifixion?",
    "options": [
      { "text": "Jesus' submission to God’s will.", "isCorrect": true },
      { "text": "A request for physical healing.", "isCorrect": false },
      { "text": "A plea for comfort during suffering.", "isCorrect": false },
      { "text": "A prayer of thanksgiving for the disciples.", "isCorrect": false }
    ]
  },
  {
    "question": "What lesson is illustrated by the parable of the Pharisee and the tax collector in Luke 18:9-14?",
    "options": [
      { "text": "God honors humility over self-righteousness.", "isCorrect": true },
      { "text": "Public prayers are more effective than private ones.", "isCorrect": false },
      { "text": "Good deeds are more important than prayer.", "isCorrect": false },
      { "text": "Repetition in prayer shows true faith.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of using the A C T S model in prayer?",
    "options": [
      { "text": "To structure prayers into adoration, confession, thanksgiving, and supplication.", "isCorrect": true },
      { "text": "To memorize specific prayers from the Bible.", "isCorrect": false },
      { "text": "To perform prayers in a public setting.", "isCorrect": false },
      { "text": "To categorize prayers by their length.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of adoration in prayer?",
    "options": [
      { "text": "The last verse of Jude: 'To the only wise God our Saviour, be glory and majesty...'", "isCorrect": true },
      { "text": "Psalm 51: David's confession.", "isCorrect": false },
      { "text": "1 Chronicles 4:9-10: The Prayer of Jabez.", "isCorrect": false },
      { "text": "Psalm 107:1: A prayer of thanksgiving.", "isCorrect": false }
    ]
  },
  {
    "question": "What type of prayer is Psalm 51 considered to be?",
    "options": [
      { "text": "Confession.", "isCorrect": true },
      { "text": "Adoration.", "isCorrect": false },
      { "text": "Supplication.", "isCorrect": false },
      { "text": "Thanksgiving.", "isCorrect": false }
    ]
  },
  {
    "question": "What is emphasized by the prayers recorded in Matthew 6:9-13 and Luke 11:2-4?",
    "options": [
      { "text": "The importance of aligning with God's will and daily dependence.", "isCorrect": true },
      { "text": "The need for ritualistic repetitions.", "isCorrect": false },
      { "text": "The necessity of detailed public ceremonies.", "isCorrect": false },
      { "text": "The focus on material blessings.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the Prayer of Jabez ask for?",
    "options": [
      { "text": "Blessing, expanded territory, and protection from evil.", "isCorrect": true },
      { "text": "Forgiveness and daily sustenance.", "isCorrect": false },
      { "text": "Guidance and wisdom.", "isCorrect": false },
      { "text": "Healing and comfort.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the doxology in some translations of Matthew's version of the Lord's Prayer include?",
    "options": [
      { "text": "For Yours is the kingdom and the power and the glory forever. Amen.", "isCorrect": true },
      { "text": "And the peace of God will be with you.", "isCorrect": false },
      { "text": "The Lord is my shepherd; I shall not want.", "isCorrect": false },
      { "text": "And the grace of the Lord be with you all.", "isCorrect": false }
    ]
  },
  {
    "question": "Why might some sources omit the doxology in the Lord's Prayer?",
    "options": [
      { "text": "It is thought to be a scribal addition after the fact.", "isCorrect": true },
      { "text": "It was a later addition by early church leaders.", "isCorrect": false },
      { "text": "It is a part of a different version not used by all.", "isCorrect": false },
      { "text": "It conflicts with other biblical texts.", "isCorrect": false }
    ]
  },
  {
    "question": "How does Luke's version of the Lord's Prayer compare to Matthew's version?",
    "options": [
      { "text": "Luke's version is shorter.", "isCorrect": true },
      { "text": "Luke's version includes the doxology.", "isCorrect": false },
      { "text": "Luke's version is longer and more detailed.", "isCorrect": false },
      { "text": "Luke's version has a different structure.", "isCorrect": false }
    ]
  },
  {
    "question": "Why might one version of the Lord's Prayer be more appropriate in one's spiritual life?",
    "options": [
      { "text": "This is a personal question with no set answer.", "isCorrect": true },
      { "text": "One version is always more effective than the other.", "isCorrect": false },
      { "text": "Certain versions are more traditional in specific denominations.", "isCorrect": false },
      { "text": "Different versions have different theological implications.", "isCorrect": false }
    ]
  },
  {
    "question": "Why is the Lord’s Prayer important to Christianity?",
    "options": [
      { "text": "It is a model prayer provided by Jesus containing praise, thanksgiving, and repentance.", "isCorrect": true },
      { "text": "It is the only prayer used in Christian ceremonies.", "isCorrect": false },
      { "text": "It is a historical document with no spiritual significance.", "isCorrect": false },
      { "text": "It replaces all other forms of Christian prayer.", "isCorrect": false }
    ]
  },
  {
    "question": "How does the Lord's Prayer serve as a unifying force among Christians?",
    "options": [
      { "text": "Christians of different denominations repeat the same words around the world.", "isCorrect": true },
      { "text": "It is the only prayer used in Christian worship services.", "isCorrect": false },
      { "text": "It is a requirement for church membership.", "isCorrect": false },
      { "text": "It divides Christian practices into different traditions.", "isCorrect": false }
    ]
  },
  {
    "question": "What types of elements are included in the Lord's Prayer according to the text?",
    "options": [
      { "text": "Praise, thanksgiving, repentance, and recognition of God's supremacy.", "isCorrect": true },
      { "text": "Requests for material blessings and protection.", "isCorrect": false },
      { "text": "Confession of sins and personal reflections.", "isCorrect": false },
      { "text": "Detailed descriptions of Christian doctrines.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a reason for differences in the wording of the Lord’s Prayer?",
    "options": [
      { "text": "Different translations and manuscript variations.", "isCorrect": true },
      { "text": "Intentional changes by early church leaders.", "isCorrect": false },
      { "text": "Modern theological debates.", "isCorrect": false },
      { "text": "Variations in regional customs.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main difference in wording between Matthew's and Luke's versions of the Lord's Prayer regarding daily bread?",
    "options": [
      { "text": "Matthew uses 'Give us this day our daily bread,' while Luke uses 'Give us day by day our daily bread.'", "isCorrect": true },
      { "text": "Matthew includes a specific request for weekly bread, while Luke does not.", "isCorrect": false },
      { "text": "Matthew's version omits the request for daily bread, while Luke includes it.", "isCorrect": false },
      { "text": "Luke uses a more formal wording for the request than Matthew.", "isCorrect": false }
    ]
  },
  {
    "question": "What is one reason why the Lord’s Prayer might have different versions in different manuscripts?",
    "options": [
      { "text": "The Bible writers used thought inspiration rather than dictation.", "isCorrect": true },
      { "text": "Each manuscript was written by a different author with varying styles.", "isCorrect": false },
      { "text": "The prayer was changed by translation errors over time.", "isCorrect": false },
      { "text": "Different denominations created their own versions for doctrinal reasons.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following statements about the Lord's Prayer is true?",
    "options": [
      { "text": "The prayer serves as a model for how Christians should pray.", "isCorrect": true },
      { "text": "It is a historical document with no direct application.", "isCorrect": false },
      { "text": "It replaces all Old Testament prayers.", "isCorrect": false },
      { "text": "It was only used during Jesus' time and is not relevant today.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'doxology' refer to in the context of the Lord's Prayer?",
    "options": [
      { "text": "A short hymn of praise to God.", "isCorrect": true },
      { "text": "A lengthy theological discourse.", "isCorrect": false },
      { "text": "A detailed explanation of the prayer's history.", "isCorrect": false },
      { "text": "A personal confession of faith.", "isCorrect": false }
    ]
  },
  {
    "question": "Why is it important to recognize the differences in versions of the Lord’s Prayer?",
    "options": [
      { "text": "Understanding these differences helps appreciate the historical and textual variations.", "isCorrect": true },
      { "text": "It helps in choosing the most accurate translation for prayer.", "isCorrect": false },
      { "text": "It determines the official version for church ceremonies.", "isCorrect": false },
      { "text": "It confirms the superiority of one version over the others.", "isCorrect": false }
    ]
  },
  {
    "question": "What is one way the Lord's Prayer acts as a unifying force among Christians?",
    "options": [
      { "text": "It is repeated by Christians worldwide, regardless of denomination.", "isCorrect": true },
      { "text": "It is used exclusively in Catholic services.", "isCorrect": false },
      { "text": "It is a required practice for all Christian rituals.", "isCorrect": false },
      { "text": "It dictates the exact form of Christian worship.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'thought inspiration' imply about the Bible writers?",
    "options": [
      { "text": "They conveyed the meaning of the message rather than providing a verbatim account.", "isCorrect": true },
      { "text": "They recorded every word exactly as spoken by Jesus.", "isCorrect": false },
      { "text": "They created their own interpretations of religious texts.", "isCorrect": false },
      { "text": "They used dictation to ensure uniformity in the texts.", "isCorrect": false }
    ]
  },
  {
    "question": "In what context might one version of the Lord's Prayer be preferred over another?",
    "options": [
      { "text": "It depends on personal or denominational preference and spiritual practice.", "isCorrect": true },
      { "text": "One version is always considered more authentic than the other.", "isCorrect": false },
      { "text": "The versions are used according to the liturgical calendar.", "isCorrect": false },
      { "text": "Different versions are preferred for specific occasions only.", "isCorrect": false }
    ]
  },
  {
    "question": "What did Hannah pray for in 1 Samuel 2:1?",
    "options": [
      { "text": "A son", "isCorrect": true },
      { "text": "Wisdom", "isCorrect": false },
      { "text": "A husband", "isCorrect": false },
      { "text": "Health", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary focus of the Lord’s Prayer in Matthew 6?",
    "options": [
      { "text": "Praise, supplication, and forgiveness", "isCorrect": true },
      { "text": "Healing and deliverance", "isCorrect": false },
      { "text": "Thanksgiving and blessings", "isCorrect": false },
      { "text": "Guidance and protection", "isCorrect": false }
    ]
  },
  {
    "question": "What was David’s prayer in Psalm 61 about?",
    "options": [
      { "text": "Seeking refuge and guidance from God", "isCorrect": true },
      { "text": "Thanksgiving for blessings", "isCorrect": false },
      { "text": "Pleading for wealth and prosperity", "isCorrect": false },
      { "text": "Asking for vengeance against enemies", "isCorrect": false }
    ]
  },
  {
    "question": "What was Jesus’ prayer in Matthew 26 before his crucifixion?",
    "options": [
      { "text": "For God’s will to be done", "isCorrect": true },
      { "text": "For the healing of the sick", "isCorrect": false },
      { "text": "For the forgiveness of sins", "isCorrect": false },
      { "text": "For the protection of his disciples", "isCorrect": false }
    ]
  },
  {
    "question": "What did Elijah pray for in 1 Kings 18:36?",
    "options": [
      { "text": "For rain", "isCorrect": true },
      { "text": "For fire from heaven", "isCorrect": false },
      { "text": "For peace in Israel", "isCorrect": false },
      { "text": "For the defeat of enemies", "isCorrect": false }
    ]
  },
  {
    "question": "In Luke 18:9-14, what did the Pharisee pray about?",
    "options": [
      { "text": "Thanking God for his righteousness and good deeds", "isCorrect": true },
      { "text": "Asking for forgiveness of sins", "isCorrect": false },
      { "text": "Requesting material blessings", "isCorrect": false },
      { "text": "Seeking guidance for his life", "isCorrect": false }
    ]
  },
  {
    "question": "In Luke 18:9-14, what did the tax collector pray for?",
    "options": [
      { "text": "Mercy from God", "isCorrect": true },
      { "text": "Wealth and prosperity", "isCorrect": false },
      { "text": "Healing and deliverance", "isCorrect": false },
      { "text": "Guidance in his profession", "isCorrect": false }
    ]
  },
  {
    "question": "Why did Jesus teach on the importance of prayer?",
    "options": [
      { "text": "To emphasize its role in maintaining a relationship with God", "isCorrect": true },
      { "text": "To fulfill religious rituals", "isCorrect": false },
      { "text": "To obtain material blessings", "isCorrect": false },
      { "text": "To demonstrate his power over the elements", "isCorrect": false }
    ]
  },
  {
    "question": "What was one reason Jesus prayed in public, according to the text?",
    "options": [
      { "text": "To praise God and make requests publicly", "isCorrect": true },
      { "text": "To teach his disciples how to pray", "isCorrect": false },
      { "text": "To gather followers", "isCorrect": false },
      { "text": "To make himself known", "isCorrect": false }
    ]
  },
  {
    "question": "What was the outcome of Hannah's prayer in 1 Samuel 2:1?",
    "options": [
      { "text": "She was blessed with a son", "isCorrect": true },
      { "text": "Her request was denied", "isCorrect": false },
      { "text": "She was given wealth", "isCorrect": false },
      { "text": "She received a new home", "isCorrect": false }
    ]
  },
  {
    "question": "What did Jesus pray for in John 11:41-42?",
    "options": [
      { "text": "To thank God for hearing him", "isCorrect": true },
      { "text": "For the healing of the sick", "isCorrect": false },
      { "text": "For the resurrection of Lazarus", "isCorrect": false },
      { "text": "For protection from enemies", "isCorrect": false }
    ]
  },
  {
    "question": "What result came from Elijah’s prayer in 1 Kings 18:36?",
    "options": [
      { "text": "Rain fell after a drought", "isCorrect": true },
      { "text": "Fire consumed the offering", "isCorrect": false },
      { "text": "The enemies were defeated", "isCorrect": false },
      { "text": "Peace was restored in Israel", "isCorrect": false }
    ]
  },
  {
    "question": "What did the Lord's Prayer in Matthew 6 emphasize?",
    "options": [
      { "text": "God’s will being done on earth and daily provision", "isCorrect": true },
      { "text": "The importance of fasting and almsgiving", "isCorrect": false },
      { "text": "Healing and miracles", "isCorrect": false },
      { "text": "The need for public confession", "isCorrect": false }
    ]
  },
  {
    "question": "What did David seek in his prayer recorded in Psalm 61?",
    "options": [
      { "text": "Refuge and guidance from God", "isCorrect": true },
      { "text": "Material wealth and success", "isCorrect": false },
      { "text": "Victory over enemies", "isCorrect": false },
      { "text": "Healing from illness", "isCorrect": false }
    ]
  },
  {
    "question": "In Matthew 26, what was Jesus’ primary request during his prayer in Gethsemane?",
    "options": [
      { "text": "For God’s will to be accomplished", "isCorrect": true },
      { "text": "For protection from the cross", "isCorrect": false },
      { "text": "For the release of his disciples", "isCorrect": false },
      { "text": "For comfort and relief from suffering", "isCorrect": false }
    ]
  },
  {
    "question": "What was the difference between the Pharisee's and the tax collector's prayers in Luke 18:9-14?",
    "options": [
      { "text": "The Pharisee prayed to exalt himself, while the tax collector sought mercy", "isCorrect": true },
      { "text": "The Pharisee asked for mercy, while the tax collector praised himself", "isCorrect": false },
      { "text": "The Pharisee requested material blessings, while the tax collector asked for healing", "isCorrect": false },
      { "text": "Both prayed for the same things but used different words", "isCorrect": false }
    ]
  },
  {
    "question": "What did Jesus’ prayer in John 12:27-30 focus on?",
    "options": [
      { "text": "Requesting that God's name be glorified", "isCorrect": true },
      { "text": "Praying for the destruction of enemies", "isCorrect": false },
      { "text": "Asking for physical healing", "isCorrect": false },
      { "text": "Seeking guidance for the disciples", "isCorrect": false }
    ]
  },
  {
    "question": "How did Jesus’ prayer in Mark 7:34-35 relate to his ministry?",
    "options": [
      { "text": "It was for healing the deaf and mute", "isCorrect": true },
      { "text": "It was for the forgiveness of sins", "isCorrect": false },
      { "text": "It was for wisdom in teaching", "isCorrect": false },
      { "text": "It was for protection from harm", "isCorrect": false }
    ]
  },
  {
    "question": "What was the purpose of the Lord's Prayer according to Jesus' teaching?",
    "options": [
      { "text": "To model how to pray with praise and supplication", "isCorrect": true },
      { "text": "To emphasize the importance of public prayer", "isCorrect": false },
      { "text": "To request material wealth and success", "isCorrect": false },
      { "text": "To instruct on specific religious rituals", "isCorrect": false }
    ]
  },
  {
    "question": "What does the 'A' in A C T S stand for in the context of prayer?",
    "options": [
      { "text": "Adoration (Praise)", "isCorrect": true },
      { "text": "Acknowledgment", "isCorrect": false },
      { "text": "Adoration (Request)", "isCorrect": false },
      { "text": "Assurance", "isCorrect": false }
    ]
  },
  {
    "question": "Which Bible verse is an example of Adoration (Praise)?",
    "options": [
      { "text": "Jude 1:25", "isCorrect": true },
      { "text": "Psalm 51:1", "isCorrect": false },
      { "text": "Psalm 107:1", "isCorrect": false },
      { "text": "1 Chronicles 4:10", "isCorrect": false }
    ]
  },
  {
    "question": "What is the focus of a prayer of Confession?",
    "options": [
      { "text": "Admitting and asking for forgiveness for sins", "isCorrect": true },
      { "text": "Giving thanks for blessings", "isCorrect": false },
      { "text": "Praising God’s attributes", "isCorrect": false },
      { "text": "Requesting God’s intervention in needs", "isCorrect": false }
    ]
  },
  {
    "question": "Which Psalm is an example of a prayer of Confession?",
    "options": [
      { "text": "Psalm 51", "isCorrect": true },
      { "text": "Psalm 107", "isCorrect": false },
      { "text": "Psalm 23", "isCorrect": false },
      { "text": "Psalm 119", "isCorrect": false }
    ]
  },
  {
    "question": "What does the 'T' in A C T S represent in the context of prayer?",
    "options": [
      { "text": "Thanksgiving", "isCorrect": true },
      { "text": "Testimony", "isCorrect": false },
      { "text": "Teaching", "isCorrect": false },
      { "text": "Tithing", "isCorrect": false }
    ]
  },
  {
    "question": "Which verse is an example of Thanksgiving in prayer?",
    "options": [
      { "text": "Psalm 107:1", "isCorrect": true },
      { "text": "Psalm 51:1", "isCorrect": false },
      { "text": "Jude 1:25", "isCorrect": false },
      { "text": "1 Chronicles 4:10", "isCorrect": false }
    ]
  },
  {
    "question": "What does the 'S' in A C T S stand for in the context of prayer?",
    "options": [
      { "text": "Supplication (Requests)", "isCorrect": true },
      { "text": "Surrender", "isCorrect": false },
      { "text": "Scripture", "isCorrect": false },
      { "text": "Sanctification", "isCorrect": false }
    ]
  },
  {
    "question": "Which prayer in 1 Chronicles 4:9-10 is an example of Supplication (Requests)?",
    "options": [
      { "text": "Jabez's prayer", "isCorrect": true },
      { "text": "David’s prayer of confession", "isCorrect": false },
      { "text": "Psalm of Thanksgiving", "isCorrect": false },
      { "text": "Jesus’ prayer in Gethsemane", "isCorrect": false }
    ]
  },
  {
    "question": "In which part of the Bible is the prayer of Jabez found?",
    "options": [
      { "text": "1 Chronicles 4:9-10", "isCorrect": true },
      { "text": "Psalm 51", "isCorrect": false },
      { "text": "Psalm 107:1", "isCorrect": false },
      { "text": "Jude 1:25", "isCorrect": false }
    ]
  },
  {
    "question": "Which verse is an example of Adoration (Praise) in the New Testament?",
    "options": [
      { "text": "Jude 1:25", "isCorrect": true },
      { "text": "Psalm 51:1", "isCorrect": false },
      { "text": "Psalm 107:1", "isCorrect": false },
      { "text": "1 Chronicles 4:10", "isCorrect": false }
    ]
  },
  {
    "question": "What type of prayer is Psalm 107:1 an example of?",
    "options": [
      { "text": "Thanksgiving", "isCorrect": true },
      { "text": "Confession", "isCorrect": false },
      { "text": "Adoration", "isCorrect": false },
      { "text": "Supplication", "isCorrect": false }
    ]
  },
  {
    "question": "What was the result of Jabez's prayer?",
    "options": [
      { "text": "God granted his request", "isCorrect": true },
      { "text": "His request was denied", "isCorrect": false },
      { "text": "He was punished for his request", "isCorrect": false },
      { "text": "His prayer was unanswered", "isCorrect": false }
    ]
  },
  {
    "question": "What type of prayer is Psalm 51 known for?",
    "options": [
      { "text": "Confession", "isCorrect": true },
      { "text": "Thanksgiving", "isCorrect": false },
      { "text": "Adoration", "isCorrect": false },
      { "text": "Supplication", "isCorrect": false }
    ]
  },
  {
    "question": "Why did David pray the prayer in Psalm 51?",
    "options": [
      { "text": "To confess his sins and seek forgiveness", "isCorrect": true },
      { "text": "To give thanks for his blessings", "isCorrect": false },
      { "text": "To request guidance in ruling", "isCorrect": false },
      { "text": "To praise God’s greatness", "isCorrect": false }
    ]
  },
  {
    "question": "Which book contains prayers of Thanksgiving in the Psalms?",
    "options": [
      { "text": "The Book of Psalms", "isCorrect": true },
      { "text": "The Book of Proverbs", "isCorrect": false },
      { "text": "The Book of Genesis", "isCorrect": false },
      { "text": "The Book of Kings", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary focus of Supplication prayers?",
    "options": [
      { "text": "Making requests to God", "isCorrect": true },
      { "text": "Offering praise and worship", "isCorrect": false },
      { "text": "Admitting faults and seeking forgiveness", "isCorrect": false },
      { "text": "Giving thanks for what is received", "isCorrect": false }
    ]
  },
  {
    "question": "Which verse is a well-known example of Thanksgiving in the Psalms?",
    "options": [
      { "text": "Psalm 107:1", "isCorrect": true },
      { "text": "Psalm 23:1", "isCorrect": false },
      { "text": "Psalm 51:10", "isCorrect": false },
      { "text": "Psalm 119:105", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of prayer involves seeking forgiveness for sins?",
    "options": [
      { "text": "Confession", "isCorrect": true },
      { "text": "Adoration", "isCorrect": false },
      { "text": "Thanksgiving", "isCorrect": false },
      { "text": "Supplication", "isCorrect": false }
    ]
  },
  {
    "question": "What was the content of the prayer of Jabez?",
    "options": [
      { "text": "Request for blessings and protection", "isCorrect": true },
      { "text": "Praise for God’s greatness", "isCorrect": false },
      { "text": "Confession of sins", "isCorrect": false },
      { "text": "Thanksgiving for blessings", "isCorrect": false }
    ]
  },
  {
    "question": "Where can you read Chapter 11 of 'Steps to Christ'?",
    "options": [
      { "text": "Online at various websites", "isCorrect": true },
      { "text": "In a local bookstore", "isCorrect": false },
      { "text": "Only in a physical library", "isCorrect": false },
      { "text": "On a specific radio station", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do after reading or listening to Chapter 11 of 'Steps to Christ'?",
    "options": [
      { "text": "Discuss it with someone who has also read or listened to it", "isCorrect": true },
      { "text": "Write a review online", "isCorrect": false },
      { "text": "Visit a local church", "isCorrect": false },
      { "text": "Attend a seminar on prayer", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT a suggested topic for daily prayer?",
    "options": [
      { "text": "A mission or missionary", "isCorrect": false },
      { "text": "A person who is ill", "isCorrect": false },
      { "text": "A specific book", "isCorrect": true },
      { "text": "A church or school leader", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of sharing your prayer experiences with a group or instructor?",
    "options": [
      { "text": "To confirm completion of the requirement", "isCorrect": true },
      { "text": "To gain a prize", "isCorrect": false },
      { "text": "To receive a promotion", "isCorrect": false },
      { "text": "To get feedback on your prayer style", "isCorrect": false }
    ]
  },
  {
    "question": "What type of needs should you pray for according to the text?",
    "options": [
      { "text": "Physical, emotional, or spiritual needs", "isCorrect": true },
      { "text": "Only financial needs", "isCorrect": false },
      { "text": "Only physical needs", "isCorrect": false },
      { "text": "Only educational needs", "isCorrect": false }
    ]
  },
  {
    "question": "Where can you find profiles and stories of missionaries for prayer?",
    "options": [
      { "text": "AFM (Adventist Frontier Missions)", "isCorrect": true },
      { "text": "Local community bulletin boards", "isCorrect": false },
      { "text": "Public libraries", "isCorrect": false },
      { "text": "News websites", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do if you do not personally know a missionary to pray for?",
    "options": [
      { "text": "Check out profiles and stories from organizations like AFM", "isCorrect": true },
      { "text": "Contact your local church office", "isCorrect": false },
      { "text": "Wait until you meet one", "isCorrect": false },
      { "text": "Pray for a celebrity instead", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended duration for developing a personal prayer life as described?",
    "options": [
      { "text": "Daily for a month", "isCorrect": true },
      { "text": "Weekly for three months", "isCorrect": false },
      { "text": "Daily for a week", "isCorrect": false },
      { "text": "Monthly for a year", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of prayer involves requesting God's intervention for specific issues?",
    "options": [
      { "text": "Supplication (Requests)", "isCorrect": true },
      { "text": "Adoration (Praise)", "isCorrect": false },
      { "text": "Confession", "isCorrect": false },
      { "text": "Thanksgiving", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main focus of prayers of Thanksgiving?",
    "options": [
      { "text": "Giving thanks to God for His goodness", "isCorrect": true },
      { "text": "Requesting specific blessings", "isCorrect": false },
      { "text": "Confessing sins", "isCorrect": false },
      { "text": "Praising God’s attributes", "isCorrect": false }
    ]
  },
  {
    "question": "What does a prayer of Confession generally involve?",
    "options": [
      { "text": "Admitting sins and seeking forgiveness", "isCorrect": true },
      { "text": "Praising God’s greatness", "isCorrect": false },
      { "text": "Requesting personal needs", "isCorrect": false },
      { "text": "Thanking God for blessings", "isCorrect": false }
    ]
  },
  {
    "question": "Which type of prayer is Psalm 107:1 an example of?",
    "options": [
      { "text": "Thanksgiving", "isCorrect": true },
      { "text": "Adoration", "isCorrect": false },
      { "text": "Confession", "isCorrect": false },
      { "text": "Supplication", "isCorrect": false }
    ]
  },
  {
    "question": "Which chapter in 'Steps to Christ' focuses on the privilege of prayer?",
    "options": [
      { "text": "Chapter 11", "isCorrect": true },
      { "text": "Chapter 1", "isCorrect": false },
      { "text": "Chapter 5", "isCorrect": false },
      { "text": "Chapter 20", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do if you want to pray with someone who has a need?",
    "options": [
      { "text": "Offer to pray with them for their specific need", "isCorrect": true },
      { "text": "Give them a book on prayer", "isCorrect": false },
      { "text": "Suggest they see a counselor", "isCorrect": false },
      { "text": "Ask them to join a prayer group", "isCorrect": false }
    ]
  },
  {
    "question": "What is an example of a prayer of Adoration (Praise)?",
    "options": [
      { "text": "Jude 1:25", "isCorrect": true },
      { "text": "Psalm 51:1", "isCorrect": false },
      { "text": "Psalm 107:1", "isCorrect": false },
      { "text": "1 Chronicles 4:10", "isCorrect": false }
    ]
  },
  {
    "question": "What should you focus on when praying for a church or school leader?",
    "options": [
      { "text": "Their guidance and leadership", "isCorrect": true },
      { "text": "Their financial status", "isCorrect": false },
      { "text": "Their popularity", "isCorrect": false },
      { "text": "Their personal hobbies", "isCorrect": false }
    ]
  },
  {
    "question": "What is one way to find prayer topics for your community?",
    "options": [
      { "text": "Check local newspaper for current issues", "isCorrect": true },
      { "text": "Ask your family members", "isCorrect": false },
      { "text": "Look at social media trends", "isCorrect": false },
      { "text": "Read historical books about the area", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended way to enhance your personal prayer life?",
    "options": [
      { "text": "Praying daily for a set list of topics", "isCorrect": true },
      { "text": "Reading books about prayer", "isCorrect": false },
      { "text": "Attending prayer workshops", "isCorrect": false },
      { "text": "Listening to prayer podcasts", "isCorrect": false }
    ]
  },
  {
    "question": "Which prayer in the Bible is a classic example of a prayer of Supplication?",
    "options": [
      { "text": "Jabez’s prayer in 1 Chronicles 4:9-10", "isCorrect": true },
      { "text": "David’s prayer in Psalm 51", "isCorrect": false },
      { "text": "The Lord's Prayer in Matthew 6", "isCorrect": false },
      { "text": "Hannah’s prayer in 1 Samuel 2:1", "isCorrect": false }
    ]
  }
];