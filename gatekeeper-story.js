window.GATEKEEPER_STORY = {
  startingScene: "chapter_one",
  initialState: {
    health: 10,
    maxHealth: 10,
    souls: 0,
    tokens: 0,
    gateStability: 50,
    alignment: 0,
    rewinds: 1,
    _edricClues: 0,
    _edricWounds: 0,
    flags: {}
  },
  scenes: {
    chapter_one: {
      chapter: "The Gatekeeper: Roll for Judgement",
      title: "Chapter One",
      art: "title",
      paragraphs: [
        "The Gates do not open for the living.",
        "Tonight, they open for you."
      ],
      choices: [
        {
          label: "Begin As The New Gatekeeper",
          goto: "title"
        }
      ]
    },
    title: {
      chapter: "The Gatekeeper: Roll for Judgement",
      title: "The Contract",
      art: "title",
      paragraphs: [
        "There is a table sitting elevated in a vast chasm of darkness, illuminated only by a subtle ethereal light.",
        "Not a room, or a cave. Not anywhere a table has any right to be, you suppose.",
        "All you can make out is the table. Black onyx wood. One chair with golden inlays set against ashen black wood. A candle hangs in the air above the table, illuminating its contents...a contract on parchment waits in the centre.",
        "The words appear to shift and distort as you begin to read them.",
        "<strong>Vacancy: immediate. Tenure: indefinite. Benefits: unlimited. Consequences: unimaginable.</strong>",
        "The last word is written in an angry font that sends a shiver down your back. Beside the signature line, you now make out, rests a single golden bullet. How odd. It is plain, heavy and somehow warm. Like it has recently discharged.",
        "A voice speaks from afar in the darkness.",
        "\"Do take your time,\" it says. <em>He says?</em> It is a deep, masculine voice. \"The dead are famously patient. Right up until they are not.\""
      ],
      choices: [
        {
          label: "Accept the contract",
          text: "An intense pain emanates from deep in your skull. A blinding rupture. Your life force feels writhed apart from its corporeal body.",
          effects: { health: -5 },
          goto: "contract_pain"
        }
      ]
    },
    contract_pain: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Name Left Behind",
      art: "title",
      paragraphs: [
        "It is not a wound in the traditional sense. It is a signature. Like a feeling of deja vu, accompanied by intense pain that feels tied to your psyche.",
        "Its memory burns through bone, vision, thought...and memories. Everything that once answered when the world called out your name is lost.",
        "You regain conscious thought, kneeling on black glass beneath the table.",
        "Ahead of you in starkest contrast to the black void is a towering set of vibrant Gates. The Gates.",
        "They are too vast for accompanying architecture. Two ancient doors of bone-white metals and pale stone, stitched with cracks of gold and pulsating light. They breathe like something alive.",
        "The voice speaks again:",
        "\"You are not where the Living should stand.\"",
        "\"You are not yet among the Dead.\"",
        "\"Your name is of no consequence.\"",
        "\"You are the new Gatekeeper.\""
      ],
      choices: [
        {
          label: "Remember study, long fantasy novels and academic challenge",
          text: "You remember study, long fantasy novels and the comfort of academic challenge.",
          setFlags: { background: "scholar" },
          goto: "world_before"
        },
        {
          label: "Remember making things with your hands",
          text: "You remember making things with your hands, shaping meaning into substance.",
          setFlags: { background: "creative" },
          goto: "world_before"
        },
        {
          label: "Remember motion, competition and camaraderie",
          text: "You remember exhilarating motion, competition and camaraderie, tight air in your chest.",
          setFlags: { background: "sportsman" },
          goto: "world_before"
        },
        {
          label: "Remember strength and determination",
          text: "You remember innate strength, determination and the desire to change your exterior capabilities.",
          setFlags: { background: "strong" },
          goto: "world_before"
        }
      ]
    },
    world_before: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Place Between",
      art: "queue",
      paragraphs: [
        "The place before the Gates is not Heaven. Neither is it Hell. Though some in the queue have clearly brought their own.",
        "It is a border office built on grief. A court with no roof. A harbour where every ship has already sunk.",
        "Souls now wait in a seemingly endless line that bends as it twists into far off mist. Some shapes are nearly human. Some have forgotten their shape. One is nothing but a wedding veil filled with moths. Another, a soldier made of ash, holding his crumbling jaw in both hands so he can speak when called.",
        "Some carry offerings.",
        "Coins from closed eyes. Rings from clenched fingers. Locks of hair tied in ribbon. Teeth. Knives. Ornate daggers. Promises folded into little paper notes.",
        "Tokens.",
        "You understand the word before anyone need teach it to you.",
        "The Gates shudder and pulse.",
        "A crack of gold widens above the arch, then seals itself like a wound."
      ],
      choices: [
        {
          label: "Stand and face the line of Souls",
          goto: "sebastien_arrives"
        },
        {
          label: "Attempt to push the Gates open with both hands",
          text: "The Gates open for no man or being's hands. They open for judgement. You learn this a little too late.",
          condition: { flagNot: "pushedGatesByHand" },
          setFlags: { pushedGatesByHand: true },
          effects: { health: -1 },
          goto: "world_before"
        }
      ]
    },
    sebastien_arrives: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Sebastien",
      art: "sebastien",
      paragraphs: [
        "A man steps out of the mist carrying a ledger bound in dark weathered leather.",
        "He is slender, immaculate and dressed for a quirky funeral. His skin is black. His smile luminously white.",
        "\"Good,\" he says, as if you have arrived only mildly late. \"You are standing. That already places you above several of your predecessors.\"",
        "You try to ask who he is, but your mouth fumbles upon the attempt.",
        "He bows with the smallest possible amount of respect.",
        "\"Sebastien. Steward of this threshold. Clerk of impossible cases. Witness to poor decisions. And, for the foreseeable future, your best chance of remaining useful.\"",
        "He opens the ledger. The pages are blank until he looks at them.",
        "\"The contract now accepted. The role is filled. The queue is restless. Try not to disappoint the dead.\""
      ],
      choices: [
        {
          label: "Ask what a Gatekeeper does",
          goto: "sebastien_rules"
        },
        {
          label: "Ask why your name evades you",
          goto: "sebastien_name"
        },
        {
          label: "Ask him to open the Gates for you",
          text: "Sebastien's face remains resolute. Almost. \"That,\" he says, \"may be how your world ends one day. But alas, no.\"",
          condition: { flagNot: "askedSebastienToOpenGates" },
          setFlags: { askedSebastienToOpenGates: true },
          effects: { health: -1, gateStability: -5 },
          goto: "sebastien_arrives"
        }
      ]
    },
    sebastien_name: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "An Absence of Self",
      art: "sebastien",
      paragraphs: [
        "\"My name,\" you say. Or try to.",
        "The missing word remains at the tip of your tongue.",
        "Sebastien dips his pen into an ink bottle that seems to contain no obvious ink. \"A Living name is an anchor to that world. Useful for birthdays, debts and love letters. Quite meaningless here.\"",
        "He turns the ledger toward you. Where your name should be, the page is empty.",
        "\"If the dead know who you were, they will try to corrupt and influence you. If the Living know what you are, they will pray at you. Both are tedious and of little consequence.\"",
        "He closes the ledger.",
        "\"For now, you are The Gatekeeper.\"",
        "The Gates beckon behind him.",
        "\"And you have work to do.\""
      ],
      choices: [
        {
          label: "Ask what the work requires",
          goto: "sebastien_rules"
        },
        {
          label: "Approach the first petitioners",
          goto: "first_queue"
        }
      ]
    },
    sebastien_rules: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Rules of Judgement",
      art: "sebastien",
      paragraphs: [
        "Sebastien walks beside you now.",
        "\"A Soul comes forward. You hear it. You weigh it. You pass it, hold it, or refuse it.\"",
        "He lifts one finger with a truly striking ornate ruby and gold ring.",
        "\"Passing a Soul feeds your power here at the Gates. You'll need that strength to face the challenges that yet await you. Some Souls are little more than smoke from a candle extinguished. Others are bonfires masquerading as people. The stronger the Soul, the greater the power you can draw.\"",
        "A second finger raised to the air.",
        "\"Tokens are offerings. Old world coins, relics, memories, bribes. Often lies with polish on them. Take them when you must. They have their uses as a form of currency. Rely on them however and you will become the sort of thing that craves them.\"",
        "A third finger now.",
        "\"The dead can, will and do lie. Adjudicate the worth of the Soul.\"",
        "The Gates tremble now. Something imperceptible knocks at it. Not politely.",
        "Sebastien glances at the crack of gold stretching above the arch.",
        "\"If the restless press too hard against the magic of the threshold, you may spend your power from Souls to bind, steady or seal them. If you have none, you may use your body. I do not recommend making that a habit.\"",
        "\"There is also a rather odd little fellow in these parts. He is a merchant of this place. He was denied passage beyond the Gates and now spends his time amassing Tokens to exchange for Tokens. An attempt to make his time here meaningful. He can be a useful irritation.\""
      ],
      choices: [
        {
          label: "Approach the first petitioners",
          goto: "first_queue"
        }
      ]
    },
    first_queue: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Three",
      art: "petitioners",
      paragraphs: [
        "Sebastien taps the ledger. Three names seep through the pages like the mark of soot on clean sheets.",
        "The first Soul is a woman in a river-soaked dirty dress. It is white and torn in places like she has been searching for something in thorny shrubbery. Her dark wet hair clings to her cheeks in black ropes. She holds one copper coin so tightly that it has cut her palm. Her fingernails are dirty, with dried blood that seems unconnected to the coin.",
        "\"Mara Vale,\" says Sebastien. \"No formal offering declared.\" The last is said indifferently.",
        "The second is clearly a nobleman in a burial coat stitched with gold. Five polished funeral coins float around his head like little moons. His stature is tall, his frame a little sickly despite his clear abundance in wealth.",
        "\"Lord Edric Beaumont. Considerable offering declared. Considerable unpleasantness expected.\"",
        "The third is small and still. A porcelain mask covers its face. No mouth. No breath. Its shadow points away from the Gates, back toward the Living world.",
        "Sebastien's pen pauses.",
        "\"Unnamed.\"",
        "For the first time, he raises an eyebrow and breaks an ounce of composure.",
        "\"Careful.\""
      ],
      choices: [
        {
          label: "Hear Lord Edric Beaumont, the coin-bearer",
          setFlags: { edricActive: true },
          goto: "edric_first_words"
        },
        {
          label: "Hear Mara Vale, the river-woman",
          setFlags: { maraActive: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear the masked Soul",
          setFlags: { maskActive: true },
          goto: "mask_first_words"
        }
      ]
    },
    mara_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Mara Vale",
      art: "mara",
      paragraphs: [
        "Mara steps forward and leaves wet footprints on the black glass underfoot. She is barefoot.",
        "\"I don't have much,\" her voice trembles. Her tone is ice-cold, but not in an emotionally cool sense. It aches in a painfully human way. \"I know there's meant to be a toll,\" she says. \"My step-mother always said there would be a toll.\"",
        "She opens her hand.",
        "One copper coin. Bent. Green at the edges. Dark dried-on crimson coats the centre.",
        "\"It's not for me,\" she says quickly. \"It's for my boy, when he comes. If he comes. If the river...\" She trails off as her facial expression folds around the thought.",
        "Behind her, the queue shifts. Some Souls look away. Others stare ravenously at the coin.",
        "Sebastien murmurs, \"Sentiment often disguises value. Value often disguises rot.\""
      ],
      choices: [
        {
          label: "Ask about the child",
          goto: "mara_child"
        },
        {
          label: "Ask about the river",
          goto: "mara_river"
        },
        {
          label: "Demand the coin as Token",
          text: "Mara closes her fist around the coin. The demand itself changes how the queue regards you.",
          effects: { alignment: 30 },
          goto: "mara_toll"
        }
      ]
    },
    mara_child: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Child With No Coin",
      art: "mara",
      paragraphs: [
        "\"My son, Jeremiah. He is five,\" Mara says as she looks off longingly.",
        "\"He has beautiful light chestnut hair, of medium length. It's dishevelled, as he won't ever sit long enough for a cut.\"",
        "The coin trembles in her palm now as her voice begins to break.",
        "\"He was on the bank when the flood came and swept through our village. I pushed him up into the base of a willow tree. I think he climbed, but he began to slip as the current took me away. I need him to have this coin. Children should not arrive empty-handed. Though I hope not for a long time yet.\"",
        "Sebastien raises an eyebrow again, saying in a hushed tone, \"Time has little consequence here. 'Yesterday' could be a millennia ago.\" He lets the point drift with her thoughts.",
        "It feels as though the Gates are listening. As if their presence bears over the top of the three of you. Their metaphorical weight casts a shadow over your actions.",
        "Though not judging. That's your task as Gatekeeper."
      ],
      choices: [
        {
          label: "Pass her and let her keep the coin",
          text: "Mara passes through with the coin still clenched in her hand. The Gates open gently. For one breath, they do not seem wounded at all.",
          effects: { souls: 2, alignment: -15 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Trick her into giving you the coin, then pass her",
          text: "Mara gives up the coin without protest. She understands and trusts your words that you'll keep it safe for her son. The Gates accept her, but the copper stays warm in your palm long after she is gone.",
          effects: { souls: 2, tokens: 1, alignment: 25 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Keep her in Purgatory until the child is safe",
          text: "You suggest that she should wait until the truth catches up. The decision hurts. Something resents delay. Mara bows as if you have given her a gift.",
          effects: { alignment: -15 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Ask what she remembers about the flood",
          goto: "mara_river"
        }
      ]
    },
    mara_river: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "What the River Took",
      art: "mara",
      paragraphs: [
        "\"The river took the bridge first,\" Mara says. \"Then the cart. Then our horse. Then my husband, because he would not let go of the horse.\"",
        "Water runs from her sleeves and beads on the black glass. In each drop, you glimpse a different ending: a child climbing; a child falling into the current; a mother lying to herself because the truth has no mercy.",
        "Mara watches your face.",
        "\"You know, don't you? Or you could. You could make yourself know.\"",
        "Sebastien suggests that you could expend a Soul to grant yourself the power to do so."
      ],
      choices: [
        {
          label: "Pass her without payment",
          text: "The Gates take her softly but her scream bellows and cuts through you, as she demands you grant her the peace and knowledge she seeks. The line exhales. No coin changes hands.",
          effects: { souls: 2, health: -1 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Pass her with payment",
          text: "The Gates take her with force but not before her scream bellows and cuts through you like ice. She demands you grant her the knowledge she seeks or at least keep the coin for her son. The last is said as she vanishes from sight.",
          effects: { souls: 2, health: -2, tokens: 1, alignment: 15 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Ask for a memory to pay for this knowledge",
          cost: { souls: 1 },
          text: "Mara grants you the memory of her son grasping a low-hanging branch as she is swept away. You relive it as if you were there. The memory hardens into a small stormy Token.",
          effects: { tokens: 1, alignment: -8 },
          goto: "mara_river2"
        },
        {
          label: "Refuse her for the time being",
          text: "You decide she need not pass at this time and should wait in Purgatory for her son, to learn his fate in time. To your surprise, she does not seem upset. She imparts a cold wet kiss on your cheek as she fades back into the queue.",
          effects: { health: 1, alignment: -15 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mara_river2: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Price of Knowledge",
      art: "mara",
      paragraphs: [
        "Sebastien turns to you, nods and closes his eyes.",
        "Warmth passes over your body as the strength imbued by the last Soul courses through your mind and into your eyes. They flash bright and then, like the trace that remains after staring directly at the sun, you see the truth.",
        "You see a young, bright-eyed and wily-looking scrap of a lad scaling a tree with ease despite his size and frame. He is strong. His foot slips on the wet branch in the storm, but he regains it. In the next instant, you see a panic-stricken dark-haired woman - Mara - as her head sinks beneath the force of the waves. The boy cries out a heart-wrenching cry of 'Mamma', but his grip remains true.",
        "The flickering memory speeds quicker. You see him telling tales of his mother to crowds at a celebratory event - a wedding, perhaps. Later, on his deathbed, he is surrounded by loved ones and children of his own."
      ],
      choices: [
        {
          label: "Continue",
          goto: "mara_river3"
        }
      ]
    },
    mara_river3: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Fated Reunion",
      art: "mara-son",
      paragraphs: [
        "Sebastien's ledger flicks open to a new page as a name emblazons in rich golden hue.",
        "Jeremiah Vale.",
        "A proud man with grey hair, strong despite his age, emerges from the queue and walks toward you.",
        "Mara turns.",
        "For a moment she does not understand what she is seeing. Then she breaks.",
        "\"My boy,\" she exclaims.",
        "Jeremiah catches her in an embrace as if she weighs nothing at all.",
        "The Gates pulse above you. Not angry or kind, but interested. They will remember this exchange.",
        "Mara's tears pour from her like a torrent. She thanks you profusely."
      ],
      choices: [
        {
          label: "Accept their Souls past the Gates",
          text: "\"Keep it,\" she tells you. \"I am abundant in riches of love.\" Mara weeps once more as Jeremiah places an arm around her shoulder. They walk through the Gates with purpose as a light swells from beyond.",
          effects: { souls: 5, tokens: 1, alignment: -30 },
          setFlags: { maraResolved: true, maraReunited: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mara_toll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Price of Passage",
      art: "mara",
      paragraphs: [
        "\"A toll,\" Mara repeats.",
        "She looks at the copper coin, then closes her fist over it.",
        "\"My boy needs this. I can give you something else.\"",
        "Her eyes cloud. The river inside her rises.",
        "\"My Jeremiah's first laugh. I kept it. Don't ask me how. Mothers keep impossible things and never let go. I love this memory dearly, but if it will keep the coin payment for my son, I am willing.\"",
        "In her palm, beside the coin, a second object forms: a little bead of clear light, trembling with the sound of a child laughing in summer.",
        "Sebastien's pen hovers.",
        "\"A memory-token,\" he says. \"Accepted as a form of payment in most Circles.\""
      ],
      choices: [
        {
          label: "Refuse the memory, insist upon the coin and pass her",
          text: "The Gates take her with force, but not before her scream bellows and cuts through you like ice. She demands you keep the coin for her son. The last is said as she vanishes from sight.",
          effects: { souls: 2, tokens: 1, health: -2, alignment: 30 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Take the memory as Token, then pass her",
          text: "The memory-token clicks into your hand. It is beautiful. That is the problem. Mara is accepted beyond the Gates.",
          effects: { souls: 2, tokens: 3, alignment: 8 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Refuse the memory, refuse the coin and pass her",
          text: "\"Keep it,\" you tell her. Mara weeps and exclaims her love for her son and her gratitude toward you. She begs you to look out for him as she vanishes beyond the Gates.",
          effects: { souls: 2, alignment: -30 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Lord Edric Beaumont",
      art: "edric",
      paragraphs: [
        "Lord Edric Beaumont does not approach so much as arrive. Even dead, he carries the habit of rooms making space for him.",
        "“My condolences,” he says, looking you over. You’re not exactly sure what he means by that. He’s the dead one...",
        "Five bright gold funeral coins orbit his head, like little moons: polished to a mirror shine. Each coin bears his profile on one side and a set of scales on the other.",
        "“I was assured,” Edric says, “that proper offerings would be recognised.”",
        "Behind him, something small and bent-backed hisses.",
        "Edric does not turn.",
        "Sebastien’s voice is mild. “Lord Beaumont funded three orphanages, two private prisons and one war he neglected to attend.”",
        "Edric snarls.",
        "“Administration is an art and requires distance from lessers.”"
      ],
      choices: [
        {
          label: "Ask how he made his fortunes",
          condition: { flagNot: "edricFortuneFailed" },
          goto: "edric_fortune_gate"
        },
        {
          label: "Accept all five Tokens immediately",
          text: "The coins come willingly. Too willingly. Edric passes smiling, and the Gates shiver as if swallowing a hook.",
          effects: { souls: -2, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Ask to inspect the offering",
          goto: "edric_coin_roll"
        }
      ]
    },
    edric_fortune_gate: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Price of Disclosure",
      art: "edric",
      paragraphs: [
        "Edric's expression closes around the question.",
        "You can purchase his cooperation with a Token, or press him through the authority of your office."
      ],
      roll: {
        label: "Persuade Edric",
        stat: "persuasion",
        dc: 12,
        successText: "Edric's smile tightens. His vanity proves stronger than his caution.",
        failureText: "Edric dismisses the question with a look polished by a lifetime of refusing scrutiny. That avenue closes; he will not indulge it again.",
        successGoto: "edric_fortune_roll",
        failureGoto: "edric_first_words",
        failureFlags: { edricFortuneFailed: true }
      },
      choices: [
        {
          label: "Purchase his answer",
          cost: { tokens: 1 },
          text: "The Token vanishes into the orbit of Edric's coins. He accepts the transaction as proof that you understand the proper order of things.",
          goto: "edric_fortune_roll"
        }
      ]
    },
    edric_fortune_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Noble Account",
      art: "edric",
      paragraphs: [
        "“How did you make your fortune?” you ask.",
        "Edric looks genuinely offended, and/or bemused. Not because the question is rude. Because he believes the answer should be unnecessary.",
        "“Land,” he says. “Stewardship. Industry. Prudent marriages. Investments made where weaker men would see only inconvenience.”",
        "One of the coins turns in its orbit. His profile gleams. The scales on the reverse remain hidden.",
        "Sebastien makes a small note in the ledger.",
        "“The dead are wonderfully concise when lying,” he interrupts.",
        "Edric’s eyes cut toward him.",
        "You focus on the coins. On the gold thread sewn through his burial coat. On the way the little bent-backed Soul behind him flinches whenever he breathes."
      ],
      roll: {
        label: "Follow the Money",
        stat: "truth",
        dc: 14,
        successText: "Success.",
        failureText: "Failure.",
        successHiddenEffects: { _edricClues: 1 },
        successFlags: { edricClue: true },
        failureEffects: { gateStability: -5 },
        successGoto: "edric_fortune_roll_success",
        failureGoto: "edric_fortune_roll_fail"
      },
      choices: []
    },
    edric_fortune_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Noble Account",
      art: "edric-boy",
      paragraphs: [
        "The coins slow. Not enough to stop. Enough to show you what they have been hiding.",
        "You see kitchens first. Not halls. Not courts. Kitchens.",
        "A boy with dirt under his nails carries a bucket through a stone passage while lords laugh overhead. Lowborn. Barely lettered. Quick with his hands. Quicker with anything smaller than him.",
        "Rats scatter under the shelves.",
        "He catches them because that is his work. Then he keeps some because that becomes his interest.",
        "A cage. A knife. A little notebook filled with marks he cannot properly spell but understands perfectly. Which rat survives hunger. Which one turns on the others. Which one learns the maze if pain waits at the wrong turning.",
        "Then a visitor arrives at the Earl’s house on political business. A pale gentleman who casts no proper reflection in the copper pans. The boy watches him from the kitchen door with great interest.",
        "The visitor watches back.",
        "He smiles, as if he has found a useful tool left unattended."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_master_hint"
        }
      ]
    },
    edric_fortune_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Polished Rebuff",
      art: "edric",
      paragraphs: [
        "The coins flash like mirrors in sunlight.",
        "For one horrible moment you see yourself as Edric sees you: untrained, unnamed, a Gatekeeper in stolen clothes.",
        "His contempt cuts deeper than it should."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_surface_answer"
        }
      ]
    },
    edric_surface_answer: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Polished Lies",
      art: "edric",
      paragraphs: [
        "Edric adjusts his cuffs.",
        "“You see? Nothing but ordinary consequence. A fortune is structure. The weak resent structures because they are usually born or work beneath them.”",
        "His coins resume their orbit. Bright. Perfect. Unhelpful.",
        "Sebastien turns one page of the ledger, although you do not see him write.",
        "“There are two ways to build a house,” he says. “Stone by stone, or body by body. House Beaumont has experience in both.”"
      ],
      choices: [
        {
          label: "Inspect one of the coins more closely",
          goto: "edric_coin_roll"
        },
        {
          label: "Accept all five Tokens and pass him",
          text: "The coins come to you like trained birds. Edric passes through smiling. The Gates close too slowly after him, as though something with teeth has caught in the seam.",
          effects: { souls: -2, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Hold him in Purgatory while you review his accounts",
          goto: "edric_purgatory_warning"
        }
      ]
    },
    edric_coin_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read the Coins",
      art: "edric",
      paragraphs: [
        "You reach toward the nearest coin.",
        "Edric does not move to stop you. That is almost enough to make you withdraw your hand.",
        "“Careful,” Sebastien says. “Some offerings are not gifts. Some are unwanted promises.”",
        "The coin turns, floating just above your outstretched hand. Edric’s profile on one side. Scales on the other."
      ],
      roll: {
        label: "Inspect the Offering",
        stat: "truth",
        dc: 10,
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { tokens: 1, alignment: -2 },
        successHiddenEffects: { _edricClues: 1 },
        successFlags: { edricClue: true },
        successGoto: "edric_coin_roll_success",
        failureGoto: "edric_coin_roll_fail"
      },
      choices: []
    },
    edric_coin_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read the Coins",
      art: "edric",
      paragraphs: [
        "The scales twitch imperceptibly.  To some, at least.  But not to you.",
        "For one blink, they are not scales at all. They are fangs. Two perfect white points biting down on the centre of the coin.",
        "Then they are scales again.",
        "The polished gold remembers blood. It remembers being placed on closed eyes. It remembers being taken back before the body cooled.",
        "You look at the other four coins and understand they are not merely payment.",
        "They are alibis."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_suspicion"
        }
      ]
    },
    edric_coin_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read the Coins",
      art: "edric",
      paragraphs: [
        "The coin reflects your face.",
        "Not as you are. As Edric would prefer you to be: new, uncertain, hungry to be accepted by the dead.",
        "Your fingers close around empty air. The coin has already moved on."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_suspicion"
        }
      ]
    },
    edric_master_hint: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Man Before the Title",
      art: "edric-boy",
      paragraphs: [
        "The vision leaves a taste on your tongue like old iron and a scent in your nostrils like kitchen smoke.",
        "Edric’s face remains composed, but the coins have begun to orbit faster. Faster resembling fear in the disguise of dignity.",
        "“You were not born Beaumont,” you say.",
        "The queue quiets. Edric’s mouth tightens.",
        "“Names improve with use. Blood.  Blood, is a fickle thing.”",
        "Sebastien’s pen scratches once across the page.",
        "“Not an Elder,” he murmurs. “Important distinction. Elders are the beginnings of these things.” He lets the thought drift.",
        "You see another shard of memory: the pale visitor standing over the rat-catcher boy in the kitchens, yet now as a young man. A hand under his chin with a cup of red crimson wine.",
        "Then years folding over one another. Servant. Secretary. Agent. Landholder. Lord. The world forgets low birth quickly when money teaches it manners.",
        "One final image tries to form.",
        "A chamber. Edric kneeling. The same master behind him, but this time with a hand at Edric’s throat, almost tender.",
        "“You were always better as an instrument,” the master says, “than a successor.”",
        "The memory breaks before you can see the resolution."
      ],
      choices: [
        {
          label: "Accuse him of wearing death as a disguise",
          goto: "edric_reveal"
        },
        {
          label: "Inspect one of the coins",
          goto: "edric_coin_roll"
        },
        {
          label: "Accept the offering anyway",
          text: "You take the payment and let the question die. Edric passes with a bow too shallow to be respect. The Gates seal behind him, but something in their gold veining darkens for a breath.",
          effects: { souls: -2, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_suspicion: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Suspicions",
      art: "edric",
      paragraphs: [
        "The five coins orbit Edric’s head like small obedient moons. Now you cannot stop seeing the wrongness in them. They shine too brightly. They’re not coins that want to be spent. They want to be accepted.",
        "The bent-backed thing behind Edric hisses again. This time you hear words in it:",
        "“Not dead enough.”",
        "Edric turns at last, with his hand following behind him as a scathing whip akin to the flapping of a wing.",
        "The little crooked Soul folds in on itself."
      ],
      choices: [
        {
          label: "Refuse him entry permanently by casting him off",
          goto: "edric_reveal"
        },
        {
          label: "Ask Sebastien what the ledger refuses to write",
          condition: { flagNot: "edricLedgerFailed" },
          goto: "edric_ledger_roll"
        },
        {
          label: "Accept the five Tokens and pass him",
          text: "You accept the coins. Edric passes. For a moment, the Gates do not open onto light. They open onto a hungry dark visage that recognises him.",
          effects: { souls: -2, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_ledger_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Ledger's Silence",
      art: "edric",
      paragraphs: [
        "Sebastien holds the ledger at an angle that hides the page.",
        "You press him to name what the book refuses to record."
      ],
      roll: {
        label: "Press the Steward",
        stat: "truth",
        dc: 18,
        successText: "Sebastien's reserve yields by a fraction. The missing account opens through memory instead of ink.",
        failureText: "Sebastien closes the ledger. Whatever protection its silence offers, he will not surrender it twice.",
        successGoto: "edric_master_hint",
        failureGoto: "edric_suspicion",
        failureFlags: { edricLedgerFailed: true }
      },
      choices: []
    },
    edric_purgatory_warning: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Delayed Accounts",
      art: "edric",
      paragraphs: [
        "“You may wait,” you tell him.",
        "Edric blinks in shock and disdain.",
        "It is not pure outrage yet. Outrage requires belief that there is order in things. This is something deeper: the shock of a law applying to someone unfamiliar with the concept.",
        "“I have paid,” he begins.",
        "“You have offered,” Sebastien corrects.",
        "The Gates pulse. You feel that delay has a cost here.  But you are not ready to adjudicate yet without knowing more."
      ],
      choices: [
        {
          label: "Spend 2 Tokens to hold him safely in Purgatory while you investigate",
          cost: { tokens: 2 },
          effects: { gateStability: -5 },
          goto: "edric_fortune_roll_success"
        },
        {
          label: "Hold Edric in Purgatory against his will without payment",
          effects: { health: -1, gateStability: -5 },
          goto: "edric_reveal"
        },
        {
          label: "Give up the delay and accept his Tokens",
          text: "The office is too new in your hands and you don’t wish to add strain to The Gates. The coins are yours. You’ll need them. The unintended wound to the Gates is also yours.",
          effects: { souls: -2, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_reveal: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Noble Reveal",
      art: "edric",
      paragraphs: [
        "“You are not a Soul seeking judgement. You seek further power” you suggest.",
        "The five coins stop dead in the air above his head.",
        "Sebastien’s pen pauses, as he seems to hold his breath for what is to follow.",
        "Edric smiles unpleasantly.",
        "His lips draw back too far, revealing a pointed tooth.",
        "“I have had many names,” Edric hisses. His voice arrives with another deeper voice underneath it. “Rat-boy. Lord. Monster. Survivor...”",
        "He looks at the Gates as though they are his servant, slow to answer his beckoning call.",
        "“Open these Gates for me boy”.  Said, not as a request.",
        "The Gates remain unchanged and Edric’s eyes lock onto yours resolutely."
      ],
      choices: [
        {
          label: "Call him by his true name (risky)",
          goto: "edric_redemption_roll"
        },
        {
          label: "Brace for a likely attack",
          text: "Sebastien grants you a little leftover power from your predecessor as the thing beneath Edric begins to spread its wings.",
          effects: { souls: 2 },
          goto: "edric_transforms"
        },
        {
          label: "Spend 1 Soul: Bind his coins",
          cost: { souls: 1 },
          goto: "edric_bind_roll"
        }
      ]
    },
    edric_redemption_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Name Beneath Beaumont",
      art: "edric",
      paragraphs: [
        "You do not know his first name. The ledger did not give it to you. Perhaps it never knew.",
        "So you reach for the life you understand existed before the title instead.",
        "The boy who learned too early that small things suffer quietly if no one important is listening.",
        "“You were made into this,” you say. “But not all of it was made for you.”",
        "Edric bares his teeth.",
        "Sebastien’s voice is quiet now.",
        "“A dangerous kindness. One almost never rewarded.”"
      ],
      roll: {
        label: "Call out his Lowborn Name",
        stat: "redemption",
        dc: 20,
        modifierFrom: ["_edricClues"],
        successText: "Critical success.",
        failureText: "Non-critical result.",
        successGoto: "edric_redemption_roll_success",
        failureGoto: "edric_redemption_roll_fail"
      },
      choices: []
    },
    edric_redemption_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Name Beneath Beaumont",
      art: "edric",
      paragraphs: [
        "For one impossible moment, Lord Edric Beaumont looks frightened.",
        "Not of you. Not of the Gates.",
        "Of being seen for who he really was, long since he had forgotten.",
        "The coins fall from orbit and clatter on the glass floor. They no longer shine like payment. They darken like damning evidence.",
        "“He chose me,” Edric says. The words come out broken.",
        "“He said the world was a cage and only fools pitied the rats”. His mouth trembles around the fangs.",
        "“I worshipped him and he cast me off to this place.”",
        "The Gates appear to be listening."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_redemption"
        }
      ]
    },
    edric_redemption_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Name Beneath Beaumont",
      art: "edric",
      paragraphs: [
        "Something in him almost hears you.",
        "Almost is not enough.",
        "His face folds into hunger. His coins burn with fury. The thing beneath it spreads its wings."
      ],
      choices: [
        {
          label: "Continue",
          condition: { flagNot: "edricFinalRepentance" },
          effects: { health: -1, gateStability: -10, souls: 2 },
          goto: "edric_transforms"
        },
        {
          label: "Continue",
          condition: { flag: "edricFinalRepentance" },
          effects: { health: -1 },
          setFlags: { edricFinalRepentance: false },
          goto: "edric_staggered"
        }
      ]
    },
    edric_redemption: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Purgatory for a Lord",
      art: "edric",
      paragraphs: [
        "Edric kneels.",
        "The motion looks painful, as though no part of him has been designed for humility in a very long time.",
        "“I do not ask to pass,” he says.",
        "Sebastien’s eyebrows lifts so sharply it is as though they have dislodged from his face.",
        "Edric looks at the five darkened coins, then at the little bent-backed Soul still cowering behind him.",
        "“I ask for time to remember my misdeeds and the man I could have become before Him.”",
        "The Gates answer with a low golden hue pulsating.",
        "Not forgiveness. A sentence.",
        "Purgatory becomes a narrow black door with no handle.",
        "“How long?” Edric asks.",
        "Sebastien consults the ledger.",
        "“Until the word necessary no longer applies to you.”",
        "Edric chuckles once. It sounds almost human."
      ],
      choices: [
        {
          label: "Send Edric to Purgatory until absolution is achieved",
          text: "Edric steps into Purgatory without his coins. They vanish and become power in your hands. That power enters you, not taken from passage, but granted by judgement. Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates.",
          effects: { souls: 2, tokens: 5, gateStability: 10, alignment: -30 },
          setFlags: { edricResolved: true, edricRedeemed: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_bind_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bind the Coins",
      art: "edric",
      paragraphs: [
        "You expend the power accumulated from a Soul and command the coins to stop their dance.",
        "The coins answer with pressure like a fist closing around your skull.",
        "You resist. They are not loyal to Edric exactly. They are loyal to what Edric represents: payment without repentance."
      ],
      roll: {
        label: "Bind the Offering",
        stat: "force",
        dc: 2,
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { souls: 2 },
        failureEffects: { souls: 2, gateStability: -5 },
        successHiddenEffects: { _edricWounds: 1 },
        successFlags: { edricBound: true },
        successGoto: "edric_bind_roll_success",
        failureGoto: "edric_bind_roll_fail"
      },
      choices: []
    },
    edric_bind_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bind the Coins",
      art: "edric",
      paragraphs: [
        "The five coins freeze in place.",
        "Edric jerks painfully as though he has just lost a considerable element of his power. Whatever he truly is, that offering is part of its shape."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_transforms"
        }
      ]
    },
    edric_bind_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bind the Coins",
      art: "edric",
      paragraphs: [
        "The coins turn edge-first and cut through your command.",
        "One slices across your palm. Another rings against the Gates. Edric laughs, in a register dissimilar to what you heard before."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_transforms"
        }
      ]
    },
    edric_transforms: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Lord Beaumont Revealed",
      art: "edric-transformed",
      checkpoint: true,
      paragraphs: [
        "Edric’s body does not break. It opens.",
        "His burial coat splits along seams that were never stitched by human hands. Purple-black cloth now stretches into ragged, black, torn-flesh wings. Gold thread crawls through the membrane like veins in old marble. His fingers lengthen into hooked claws. His face draws forward sickeningly into a narrow bat-like muzzle.",
        "Blood falls from his mouth in frenzied drops.",
        "The queue becomes alive without a whisper of sound.",
        "Sebastien steps beside you, but not in front of you.",
        "“Instruction first,” he says. “You are not a warrior. You are a custodian. Let your judgement teach him. I’ll grant you a little leftover power from your predecessor to help you on your way here.”",
        "At this moment, a jolly little merchant appears from under Sebastien’s coat, or possibly from behind a fold in the floor. You are unsure. He is no taller than your ankle, round as a purse and wearing six different coloured scarves all at once as he rolls on by.",
        "“Terrible time for business,” he says brightly. “Or, the best kind. Chuck me a Token or two for a potion, Gatekeeper. You don’t want to miss out...”"
      ],
      choices: [
        {
          label: "Spend Souls to take action against him",
          condition: { min: { souls: 1 } },
          goto: "edric_elements"
        },
        {
          label: "Roll aside and draw him toward the Gates light",
          goto: "edric_dodge_roll"
        },
        {
          label: "Ask the little merchant for a potion",
          goto: "edric_merchant"
        },
        {
          label: "Hold your ground",
          goto: "edric_ground_roll"
        }
      ]
    },
    edric_merchant: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Little Merchant",
      art: "edric-transformed",
      paragraphs: [
        "The merchant produces three bottles from somewhere inside a sleeve far too small to contain even one of any substance.",
        "One is red. One is blue. One is making a noise like bees arguing in a cupboard.",
        "“Healing,” he says, pointing to the bottles. “Mostly. Terms are excellent. My terms. One Token for a sip. Two for the bottle. And if you can’t pay, we can setup a debt, [AHEM], I mean tab.”",
        "Lord Edric beats his wings once. The mist from the queue tears backward.",
        "“Quickly would be ideal” he says, a little panicked."
      ],
      choices: [
        {
          label: "Spend 1 Token: drink from the bottle",
          cost: { tokens: 1 },
          effects: { health: 2 },
          goto: "edric_battle_return"
        },
        {
          label: "Spend 2 Tokens: drink the full bottle",
          cost: { tokens: 2 },
          effects: { health: 5 },
          goto: "edric_battle_return"
        },
        {
          label: "Spend 0 Tokens: drink from the bottle",
          effects: { health: 3 },
          setFlags: { merchantBound: true },
          goto: "edric_battle_return"
        },
        {
          label: "Refuse the merchant and keep fighting",
          goto: "edric_battle_return"
        }
      ]
    },
    edric_battle_return: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Lord Beaumont Fight",
      art: "edric-transformed",
      paragraphs: [
        "Edric circles overhead now above the black glass. The coins circle with him. Every beat of his wings creates a gust at your feet.",
        "Sebastien calls over the wind, “Instruction number two: most monsters want your fear. Use it.”"
      ],
      choices: [
        {
          label: "Spend Souls to use the wind against him",
          condition: { min: { souls: 1 } },
          goto: "edric_elements"
        },
        {
          label: "Draw his attention over to the light of the Gates",
          goto: "edric_dodge_roll"
        },
        {
          label: "Use one of his coins against him",
          condition: { flag: "edricClue" },
          cost: { souls: 2 },
          goto: "edric_mirage"
        }
      ]
    },
    edric_elements: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Elemental Threshold",
      art: "edric-transformed",
      paragraphs: [
        "You surmise your options, using the Souls you have gathered. It’s not clear how it is you know how to do any of that you have accomplished to date. It just feels intuitive.",
        "You look around for a means to control the wind Edric is summoning, but there’s little of substance to call upon, bar the line of dead, the Gates and you both standing there.",
        "Sebastien’s voice cuts through the noise.",
        "“Instruction number three: the form of power you choose for your Souls to take is up to you.  Typically, form and substance matters. Choose poorly and you may not live to regret it.”",
        "You note that he used the word, ‘choose’. "
      ],
      choices: [
        {
          label: "Spend 1 Soul: Summon a tornado to pull him in",
          cost: { souls: 1 },
          goto: "edric_tornado"
        },
        {
          label: "Spend 1 Soul: Summon lightning to strike him",
          cost: { souls: 1 },
          goto: "edric_lightning"
        },
        {
          label: "Spend 2 Souls: Summon an undead mirage",
          cost: { souls: 2 },
          goto: "edric_mirage"
        }
      ]
    },
    edric_tornado: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "It’s Getting a Little Windy in Here",
      art: "edric-transformed",
      paragraphs: [
        "You twist your hands as a tornado might and from them gusts of wind begin to stir.  It builds and multiplies in intensity voraciously as the newly formed tornado engulfs Lord Edric.",
        "At first, it seems as though he can tolerate the increased wind currents, but before long his large splintered black wings begin to falter and bend backwards in a grotesque manner.",
        "The wind is consuming him.",
        "It sucks him into the central eye of the storm you have brewed and he comes crashing down to the glass floor, shattering the area immediately around his oversized form.",
        "His eyes are now pools of black malice, as he rushes you."
      ],
      choices: [
        {
          label: "Brace yourself",
          hiddenEffects: { _edricWounds: 1 },
          goto: "edric_counterstrike"
        }
      ]
    },
    edric_lightning: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "You’ve Been Thunderstruck",
      art: "edric-transformed",
      paragraphs: [
        "Your eyes flicker with the memory of a witnessed thunderstorm and like a flash of thought, a lightning bolt tears from the darkness and strikes Edric’s right wing.",
        "The energy dissipates and the black wet membrane of his wing looks undeterred in its flight path.",
        "He roars a guttural sound as his eyes flash with the light of the storm you just created.  He lands before you."
      ],
      choices: [
        {
          label: "Brace yourself",
          goto: "edric_staggered"
        }
      ]
    },
    edric_mirage: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Master",
      art: "edric-transformed",
      paragraphs: [
        "You’re not sure if it’s intuitive or a recollection, but you imagine the embodiment of another vampiric being.  This host being more obvious in its menace beyond pure scale and muscle.",
        "This summoned reflection stops Edric in his tracks, as a coin thunderously hits the floor beside you, creating a flash of white on the black glass floor.",
        "The summoned creature speaks to your surprise: “Rat-catcher”.  Those two words are said with such doom and deafening clarity that you nearly miss the wide-eyed expression of Edric.  Now stood 10 feet from you on all four claws.",
        "“Master”, he speaks."
      ],
      choices: [
        {
          label: "Continue",
          effects: { gateStability: -10 },
          hiddenEffects: { _edricWounds: 2 },
          goto: "edric_finish_choice"
        }
      ]
    },
    edric_dodge_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Under the Wing",
      art: "edric-transformed",
      paragraphs: [
        "Edric drops from the dark mist above like a torn piece of the night’s canvas.",
        "You attempt to move with speed, because staying still seems unwise."
      ],
      roll: {
        label: "Dodge the Swoop",
        stat: "reflex",
        dc: 12,
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { gateStability: -5 },
        failureEffects: { health: -2 },
        successGoto: "edric_dodge_roll_success",
        failureGoto: "edric_dodge_roll_fail"
      },
      choices: []
    },
    edric_dodge_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Under the Wing",
      art: "edric-transformed",
      paragraphs: [
        "You fall beneath the incoming sweep of his claws. They tear sparks from the Gates marbled entranceway where your throat otherwise would have been.",
        "Edric’s momentum carried him into the light of the Gates. The gold crack above the arch flares and he covers his eyes with his right wing."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_staggered"
        }
      ]
    },
    edric_dodge_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Under the Wing",
      art: "edric-transformed",
      paragraphs: [
        "You move a little too late.",
        "His claws find an opening in your shoulder. The wound is cold and detached, dissimilar to the pain it should produce. He beats his wings back as he makes ready for another attack."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_counterstrike"
        }
      ]
    },
    edric_ground_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Stand Your Ground",
      art: "edric-transformed",
      paragraphs: [
        "You raise your hands in defence. It now feels absurdly weak and meaningless against the force of the thing making its way for you.",
        "You say a prayer to yourself.  Asking whatever Deity put you in charge of this post to aid you now."
      ],
      roll: {
        label: "Ward the Threshold",
        stat: "ward",
        dc: 15,
        successText: "Success.",
        failureText: "Failure.",
        failureEffects: { health: -5, gateStability: -15 },
        successGoto: "edric_ground_roll_success",
        failureGoto: "edric_ground_roll_fail"
      },
      choices: []
    },
    edric_ground_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Stand Your Ground",
      art: "edric-transformed",
      paragraphs: [
        "The light of a shield emanates from your braced arms, like an unknown holy Paladin.",
        "Edric slams into the circle of light and recoils, smoke rising from the cold wet membrane of his wing."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_staggered"
        }
      ]
    },
    edric_ground_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Stand Your Ground",
      art: "edric-transformed",
      paragraphs: [
        "Your actions are meaningless as whatever Deity you called upon feigned ignorance to your plea.",
        "Edric hits you with the weight of a truck behind his wing. You hear the Gates groan as your body strikes into them with the force."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_counterstrike"
        }
      ]
    },
    edric_counterstrike: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bloodied Frenzy",
      art: "edric-transformed",
      paragraphs: [
        "Edric's battered and menacing form races towards you.",
        "You stand with your back now pressing against the Gates.",
        "The bat Edric lowers its head in an impaling charge. Blood flies from its mouth in dark threads as it does so. You’re not sure how much damage the Gates can sustain, but at this moment you question whether they are better taking this charge, or you.",
        "“The Gates have stood the test of time for countless ages,” Sebastien says.  In doing so, you could be sure you see him squint a little, like he too is bracing for an outcome he too cannot foretell."
      ],
      choices: [
        {
          label: "Stand in front of the Gates and brace yourself for his charge",
          text: "The massive head of the bad ruptures your core as all sense of the world you inhabit is lost. You feel your connection slipping, as your eyes roll into the back of your head.",
          effects: { health: -9, gateStability: -20 },
          goto: "edric_staggered"
        },
        {
          label: "Spend Souls to mount a counter-attack against him",
          cost: { souls: 1 },
          text: "You summon a great lance of light – the first thing you could think to summon which embodied the act of impaling. You imagined it like the Romans would have stuck their spears out from under their towering shields. Unfortunately, your defences were a little less well-rehearsed, as you notice a newly formed gash display from your side.",
          effects: { health: -2 },
          goto: "edric_finish_choice"
        },
        {
          label: "Attempt to dodge and let the Gates sustain the attack",
          goto: "edric_gate_roll"
        }
      ]
    },
    edric_staggered: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Lord Vampire",
      art: "edric-transformed",
      paragraphs: [
        "Lord Edric stands before you now with a menacing expression of confidence and practiced experience.  He pulls back one wing and exposes the other claw.",
        "He looks excited to toy with you.",
        "Sebastien points with his pen.",
        "“There. The offering is no longer orbiting him. He has a solitary coin defending him.”"
      ],
      choices: [
        {
          label: "Use the coin as bait",
          condition: { flag: "edricClue" },
          goto: "edric_coin_bait_roll"
        },
        {
          label: "Use the coin as bait",
          condition: { flagNot: "edricClue" },
          cost: { tokens: 1 },
          goto: "edric_coin_bait_roll"
        },
        {
          label: "Prepare yourself for his impending attack",
          goto: "edric_gate_roll"
        },
        {
          label: "Spend Souls to mount a counter-attack against him",
          cost: { souls: 1 },
          text: "You summon a great lance of light – the first thing you could think to summon which embodied the act of impaling. You imagined it like the Romans would have stuck their spears out from under their towering shields. Unfortunately, your defences were a little less well-rehearsed, as you notice a newly formed gash display from your side.",
          effects: { health: -2 },
          goto: "edric_finish_choice"
        }
      ]
    },
    edric_coin_bait_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bait the Lord",
      art: "edric-transformed",
      paragraphs: [
        "You flash a Token at Lord Edric which you conjure as one of his own from a flashback you witnessed.",
        "Edric’s eyes fix on the gold.  <em>Had you obtained one of his precious trophies unbeknownst to him?</em>",
        "There he is. Not the ferocious bat you see before you now. Not the over-indulgent lord. The boy in the kitchen, once more watching a small thing enter his trap."
      ],
      roll: {
        label: "Bait the Lord",
        stat: "trap",
        dc: 7,
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { gateStability: -5 },
        failureEffects: { health: -5, gateStability: -5 },
        successHiddenEffects: { _edricWounds: 1 },
        successGoto: "edric_coin_bait_roll_success",
        failureGoto: "edric_coin_bait_roll_fail"
      },
      choices: []
    },
    edric_coin_bait_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bait the Lord",
      art: "edric-transformed",
      paragraphs: [
        "You throw the coin at the Gates.",
        "Edric follows before he can stop himself. The gold crack above the arch opens once more and brands him with its own reflection."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_finish_choice"
        }
      ]
    },
    edric_coin_bait_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Bait the Lord",
      art: "edric-transformed",
      paragraphs: [
        "Edric sees the trap and punishes the attempt.",
        "He strikes low as his claw connect with your stomach and empties its contents. The coins laugh in bright little taunts."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_last_chance"
        }
      ]
    },
    edric_gate_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gates That Stood The Test of Time",
      art: "edric-transformed",
      paragraphs: [
        "You wait until you believe is the last possible moment, before attempting to throw yourself out of the way of Edric’s head-first charge."
      ],
      roll: {
        label: "Dodge the Beast",
        stat: "reflex",
        dc: 12,
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { gateStability: -20 },
        failureEffects: { health: -3, gateStability: -10 },
        successHiddenEffects: { _edricWounds: 1 },
        failureHiddenEffects: { _edricWounds: 1 },
        successGoto: "edric_gate_roll_success",
        failureGoto: "edric_gate_roll_fail"
      },
      choices: []
    },
    edric_gate_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gates That Stood The Test of Time",
      art: "edric-transformed",
      paragraphs: [
        "The Gates sustain the not inconsiderable brunt of his force.  In doing so, they repel him to his frenzied shrieks but equally take their toll on the defence of the structure."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_finish_choice"
        }
      ]
    },
    edric_gate_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gates That Stood The Test of Time",
      art: "edric-transformed",
      paragraphs: [
        "You move a little too late and Edric slams into both you and the Gates head-first.  Your leg takes much of the brunt of the force, but the Gates seem to repel as much damage as they sustain to Edric’s apparent surprise."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_finish_choice"
        }
      ]
    },
    edric_finish_choice: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Soul Without Passage",
      art: "edric-transformed",
      paragraphs: [
        "Edric is wounded now.",
        "Not bleeding, exactly. Blood already flowed from his gaping maw. But he was losing discernible shape now. Becoming part of the mist surrounding him.",
        "His bat-form whisps like smoke at the edges. Lord Beaumont appears fragmented.",
        "Sebastien’s voice is low.",
        "“Your last instruction: not every Soul is gained by passage through the Gates. Some are claimed by ending what should not cross.”"
      ],
      choices: [
        {
          label: "Vanquish him",
          goto: "edric_final_roll"
        },
        {
          label: "Offer one final chance to repent (risky)",
          setFlags: { edricFinalRepentance: true },
          goto: "edric_redemption_roll"
        }
      ]
    },
    edric_final_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Vanquish the Undead",
      art: "edric-transformed",
      paragraphs: [
        "You step toward the pitiful shape of the bat wearing the remains of a lord.",
        "The coins scream in five disconnected voices.",
        "Edric lunges as you do."
      ],
      roll: {
        label: "Vanquish Edric",
        stat: "combat",
        dc: 7,
        conditionalModifiers: [
          {
            condition: {
              any: [
                { flag: "edricBound" },
                { min: { _edricWounds: 2 } }
              ]
            },
            value: 3
          }
        ],
        successText: "Success.",
        failureText: "Failure.",
        successEffects: { souls: 5, tokens: 5, gateStability: 25, alignment: 20 },
        failureEffects: { health: -5, gateStability: -15 },
        successFlags: { edricResolved: true, edricVanquished: true },
        successGoto: "edric_final_roll_success",
        failureGoto: "edric_final_roll_fail"
      },
      choices: []
    },
    edric_final_roll_success: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Vanquish the Undead",
      art: "edric-transformed",
      paragraphs: [
        "You do not “kill” him. That word belongs elsewhere.",
        "You eradicate the part of him that has forgotten it has an end.  Judgement.",
        "Edric’s wings fold inward. His mouth opens as if to lodge a final protest, but the Gates silence the sound before he can make it audible.",
        "The bat-form collapses into ash and five remaining gold coins.",
        "Five unique souls enter your power, one after another. The memories of those he fed upon. Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates."
      ],
      choices: [
        {
          label: "Continue",
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_final_roll_fail: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Vanquish the Undead",
      art: "edric-transformed",
      paragraphs: [
        "Edric is faster than your impending judgement.",
        "His claws punch through your guard and pin you to the black glass underneath. His wings blot out the Gates as he towers above you. His mouth lowers, dripping with every life he has savoured.",
        "Sebastien says something you do not understand in time."
      ],
      choices: [
        {
          label: "Continue",
          goto: "edric_last_chance"
        }
      ]
    },
    edric_last_chance: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Last Chance",
      art: "edric-transformed",
      paragraphs: [
        "You are on your back. The towering bat form of Lord Edric is above you.",
        "Sebastien’s voice comes from somewhere just out of sight.",
        "“Bonus instruction,” he says. “Survive first. Be elegant later.”",
        "The merchant peers over your shoulder.",
        "“Still selling potions,” he whispers. “Heroic deeds can be indebted.”"
      ],
      choices: [
        {
          label: "Spend 1 Soul: Expel him using the light of the Gates",
          cost: { souls: 1 },
          text: "You eradicate the part of Edric that has forgotten it has an end. His bat-form collapses into ash and five gold coins.",
          effects: { souls: 5, tokens: 5, gateStability: 25, alignment: 20 },
          setFlags: { edricResolved: true, edricVanquished: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Spend 1 Token: Take the Little Merchant up on his offer",
          cost: { tokens: 1 },
          effects: { souls: 5, tokens: 5, gateStability: 25, alignment: 8 },
          setFlags: { edricResolved: true, edricVanquished: true },
          goto: "edric_merchant_vanquish"
        },
        {
          label: "Spend 0 Token: Take the Little Merchant up on his indebted offer",
          effects: { souls: 5, tokens: 5, gateStability: 25, alignment: 8 },
          setFlags: { edricResolved: true, edricVanquished: true, merchantBound: true },
          goto: "edric_merchant_vanquish"
        }
      ]
    },
    edric_merchant_vanquish: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Most Helpful Little Fellow",
      art: "edric-transformed",
      paragraphs: [
        "At your nod, the little merchant gestures towards the bat Edrich towering over you and you notice a pale looking fluid that sounds like the hum of angry bees trickle down from his winged back.",
        "Edrich begins to open his mouth in protest before his bat-form collapses into ash on top of you. Five gold coins hit the floor, just before the merchant scoops them up.",
        "“Payment accepted!” he says, just before he makes off for a seam in the mist and is gone in an instant.",
        "Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates."
      ],
      choices: [
        {
          label: "Continue",
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mask_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Masked Soul",
      art: "mask-doll",
      paragraphs: [
        "The masked Soul makes no sound when it comes forward.",
        "Its porcelain face is smooth where the mouth should be. Two eyeholes open onto a dark too deep for such a small thing.",
        "It carries no Token.",
        "It casts the wrong shadow.",
        "Every other Soul's shadow leans toward the Gates, pulled by whatever waits beyond. This one points behind it, back into the mist, back toward the Living world.",
        "Sebastien closes his ledger.",
        "That frightens you more than anything he has said.",
        "\"Some cases,\" he murmurs, \"arrive before they are dead.\"",
        "The mask turns toward you.",
        "Inside your ring, something knocks back."
      ],
      choices: [
        {
          label: "Ask what it remembers",
          goto: "mask_memory"
        },
        {
          label: "Reach through the crack in its shadow",
          goto: "mask_roll"
        },
        {
          label: "Break the mask with your ring",
          text: "The mask shatters. The Living heartbeat inside screams through the Gates, and the threshold buckles around the sound.",
          effects: { health: -3, gateStability: -30, alignment: 15 },
          setFlags: { maskResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mask_memory: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Memory Without Breath",
      art: "mask-doll",
      paragraphs: [
        "\"What do you remember?\" you ask.",
        "The mask tilts.",
        "For a moment, nothing happens.",
        "Then images bleed through the air: a white room; a hand gripping bedsheets; a candle blown out in reverse; a child's drawing of a door; a man's voice saying, \"Not yet. Hold it open.\"",
        "The Soul lifts one hand and presses it to the place where its mouth should be.",
        "A crack appears in the porcelain.",
        "Behind it, you do not hear the dead.",
        "You hear breathing."
      ],
      choices: [
        {
          label: "Read it through the ring",
          goto: "mask_roll"
        },
        {
          label: "Hold it in Purgatory until you understand",
          text: "The mask bows. Its shadow stays upright, watching you after the figure retreats.",
          effects: { alignment: -2 },
          setFlags: { maskResolved: true, maskHeld: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Pass it without understanding",
          text: "The Gates open. Something crosses that is not entirely dead. The threshold flinches.",
          effects: { souls: 2, gateStability: -18, alignment: 7 },
          setFlags: { maskResolved: true, maskPassed: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mask_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read the Mask",
      art: "mask-doll",
      paragraphs: [
        "You press the black ring to the porcelain.",
        "Cold runs up your arm.",
        "The mask is not hiding a face. It is hiding a distance.",
        "Somewhere far away, in the Living world, a body is not finished dying.",
        "Something has tied that half-death to your Gates."
      ],
      roll: {
        label: "Read the Mask",
        stat: "empathy",
        dc: 12,
        successText: "The ring flares. You see the truth: a Living heartbeat caught inside a dead echo. Not a Soul. Not properly. A hook. You tear it loose before it can sink deeper into the threshold.",
        failureText: "The mask opens inward. For a moment you drown in someone else's unfinished death. Machines. Candle smoke. A hand drawing a Gate on paper again and again. When you return, the porcelain is still watching you.",
        successEffects: { souls: 2, alignment: -4 },
        failureEffects: { health: -3, alignment: 6 },
        successFlags: { maskResolved: true, maskRead: true },
        failureFlags: { maskResolved: true, maskWounded: true },
        successGoto: "after_first_judgement",
        failureGoto: "after_first_judgement",
        successGotoIfFlag: { secondJudgement: "after_second_judgement" },
        failureGotoIfFlag: { secondJudgement: "after_second_judgement" }
      },
      choices: []
    },
    after_first_judgement: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Queue Learns You",
      art: "petitioners",
      paragraphs: [
        "Your first judgement settles into the Gates.",
        "You feel it become part of them.",
        "Not history. Not memory. Mortar.",
        "The queue changes immediately. Souls lean closer or shrink away. Tokens disappear into fists. Lies are rearranged behind dead eyes.",
        "Sebastien makes a mark in the ledger.",
        "\"Well,\" he says. \"You have now done the work badly enough to continue doing it.\"",
        "The Gates groan.",
        "Another petitioner steps forward from the mist."
      ],
      choices: [
        {
          label: "Hear one more Soul",
          condition: { flagNot: "edricResolved" },
          goto: "edric_forces_queue"
        },
        {
          label: "Hear one more Soul",
          condition: { flag: "edricResolved" },
          goto: "second_queue"
        },
        {
          label: "Open the Gates a finger-width to prove command",
          text: "You open the Gates by a finger-width. The dead make that enough.",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    edric_forces_queue: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Lord Will Not Wait",
      art: "edric",
      paragraphs: [
        "Before another name can rise through Sebastien’s ledger, Lord Edric Beaumont pushes his way to the front of the queue.",
        "The dead part around him with the old instinct of people trained to make room for rank.",
        "His five funeral coins orbit faster.",
        "“Enough delay,” he says. “You will hear my petition now.”",
        "Sebastien regards him over the ledger.",
        "“It appears your second judgement has volunteered itself.”"
      ],
      choices: [
        {
          label: "Continue",
          setFlags: { secondJudgement: true },
          goto: "edric_first_words"
        }
      ]
    },
    second_queue: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "One More Before the Tremor",
      art: "petitioners",
      paragraphs: [
        "Only two may be judged before the threshold fails.",
        "You do not know how you know this.",
        "You know it the way a wound knows weather.",
        "The remaining Souls wait in the mist, each carrying a different danger.",
        "Sebastien does not advise you.",
        "That may be mercy.",
        "It may be curiosity."
      ],
      choices: [
        {
          label: "Hear Mara Vale",
          condition: {
            all: [
              { flag: "edricResolved" },
              { flagNot: "maraResolved" }
            ]
          },
          setFlags: { secondJudgement: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear the masked Soul",
          condition: {
            all: [
              { flag: "edricResolved" },
              { flagNot: "maskResolved" }
            ]
          },
          setFlags: { secondJudgement: true },
          goto: "mask_first_words"
        }
      ]
    },
    after_second_judgement: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Knock at the Wrong Side",
      art: "undead",
      paragraphs: [
        "The third petitioner remains in the mist.",
        "Unheard.",
        "Unjudged.",
        "Perhaps that matters. Perhaps everything does.",
        "The Gates shake.",
        "Not open. Not closed.",
        "Tested.",
        "A sound rolls across the black glass: thousands of coins dropped into an empty well. The queue recoils. Even Edric, if he remains, stops smiling. Even Mara, if she remains, clutches her coin with both hands. Even the masked thing, if it remains, turns toward the arch.",
        "Something is trying the lock.",
        "Sebastien's ledger snaps shut.",
        "\"Ah,\" he says. \"The unpaid dead.\""
      ],
      choices: [
        {
          label: "Stand before the threshold",
          goto: "threshold_warning"
        },
        {
          label: "Step aside and let Sebastien handle it",
          text: "Sebastien does not move. \"I am a steward,\" he says. \"Not a door.\"",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    threshold_warning: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Unpaid Dead",
      art: "undead",
      paragraphs: [
        "You step before the Gates.",
        "The ring tightens.",
        "The cracks in the arch flare gold, then sickly green. Beyond the doors, shapes press against the seam: hands, mouths, crowns, antlers, blades, faces flattened by wanting.",
        "Sebastien stands a careful distance behind you.",
        "\"The Gates are not walls,\" he says. \"Walls keep things out. Gates decide.\"",
        "The seam buckles.",
        "They come as one body made from many refusals.",
        "A grief-beast of hollow coins and broken fingers. A knight with teeth growing through his armour. A woman drowned in black veils. Children with adult shadows. A crown with no king beneath it.",
        "They batter the Gates from the far side, not because they deserve passage, but because they have learned the oldest lie:",
        "Enough hunger can look like justice.",
        "Your collected Souls burn inside the ring.",
        "The threshold begins to open.",
        "Sebastien looks from the army of unpaid dead to you.",
        "\"Decide quickly.\""
      ],
      choices: [
        {
          label: "See Chapter Score",
          goto: "trial_gate"
        }
      ]
    },
    trial_gate: {
      chapter: "Free Trial Complete",
      title: "End of Chapter One",
      art: "title",
      score: {
        title: "Chapter One Score",
        reference: {
          health: 5,
          gateStability: 50,
          souls: 7,
          tokens: 8,
          rewinds: 1
        },
        weights: {
          health: 30,
          gateStability: 30,
          souls: 15,
          tokens: 10,
          rewinds: 15
        },
        grades: [
          { minimum: 85, grade: "S" },
          { minimum: 70, grade: "A" },
          { minimum: 55, grade: "B" },
          { minimum: 0, grade: "C" }
        ]
      },
      paragraphs: [
        "You have judged the dead and taken their offerings.",
        "You have spent Souls.",
        "You have held the Gates. For now.",
        "But something powerful in the Dead Realm is seeking to test the threshold. The Gates may not be prepared.",
        "Are you?",
        "Sebastien will open the ledger again. But who will judge your Soul?",
        "Chapter Two: The Soul That Would Not Die"
      ],
      choices: [
        {
          label: "Unlock Chapter Two - GBP 0.99",
          mockUnlock: true,
          text: "Purchases are mocked in this prototype. Chapter One is the playable proof of concept.",
          goto: "trial_gate"
        },
        {
          label: "Replay Chapter One",
          restart: true
        }
      ]
    },
    failure_health: {
      chapter: "Game Over",
      title: "The Gatekeeper Has Failed",
      art: "gameover",
      gameOver: true,
      paragraphs: [
        "Your Health reaches nothing.",
        "Not death exactly.",
        "Death would be simpler.",
        "Your connection to the threshold snaps, and the Spirit realm throws you out like a body from a wave. The ring goes cold. The queue screams. The Gates lose the shape of your judgement.",
        "For one breath, there is no Gatekeeper.",
        "One breath is enough.",
        "The Gates are Lost."
      ],
      choices: []
    },
    failure_gate: {
      chapter: "Game Over",
      title: "The Gates Are Lost",
      art: "gameover",
      gameOver: true,
      paragraphs: [
        "Gate Stability reaches nothing.",
        "The threshold opens.",
        "The dead do not pass through in a line. They flood. They claw through judgement, through mercy, through law, through you.",
        "Tokens scatter like teeth.",
        "Souls gutter out.",
        "Sebastien's ledger burns from the inside, page by page, name by name.",
        "At the threshold, the Gates stand open and empty.",
        "A Gate without a Gatekeeper is not a doorway.",
        "It is a wound.",
        "The Gatekeeper has failed."
      ],
      choices: []
    }
  }
};
