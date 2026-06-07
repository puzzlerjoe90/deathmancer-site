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
        "Vacancy: immediate. Tenure: indefinite. Benefits: unlimited. Consequences: unimaginable.",
        "The last word is written in an angry font that sends a shiver down your back. Beside the signature line, you now make out, rests a single golden bullet. How odd. It is plain, heavy and somehow warm. Like it has recently discharged.",
        "A voice speaks from afar in the darkness.",
        "\"Do take your time,\" it says. He says? It is a deep, masculine voice. \"The dead are famously patient. Right up until they are not.\""
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
          label: "Hear Mara Vale, the river-woman",
          setFlags: { maraActive: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear Lord Edric Beaumont, the coin-bearer",
          setFlags: { edricActive: true },
          goto: "edric_first_words"
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
      art: "mara-son",
      paragraphs: [
        "Sebastien turns to you, nods and closes his eyes.",
        "Warmth passes over your body as the strength imbued by the last Soul courses through your mind and into your eyes. They flash bright and then, like the trace that remains after staring directly at the sun, you see the truth.",
        "You see a young, bright-eyed and wily-looking scrap of a lad scaling a tree with ease despite his size and frame. He is strong. His foot slips on the wet branch in the storm, but he regains it. In the next instant, you see a panic-stricken dark-haired woman - Mara - as her head sinks beneath the force of the waves. The boy cries out a heart-wrenching cry of 'Mamma', but his grip remains true.",
        "The flickering memory speeds quicker. You see him telling tales of his mother to crowds at a celebratory event - a wedding, perhaps. Later, on his deathbed, he is surrounded by loved ones and children of his own.",
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
        "\"My condolences,\" he says, looking you over. You're not exactly sure what he means by that.",
        "Five bright gold funeral coins orbit his head, polished to a mirror shine. Each coin bears his profile on one side and a set of scales on the other.",
        "\"I was assured,\" Edric says, \"that proper offerings would be recognised.\"",
        "Behind him, something small and bent-backed hisses.",
        "Edric does not turn.",
        "Sebastien's voice is mild. \"Lord Beaumont funded three orphanages, two private prisons and one war he neglected to attend.\"",
        "Edric snarls.",
        "\"Administration is the art of necessary distance and time.\""
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
          effects: { souls: -1, tokens: 5, gateStability: -20, alignment: 25 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Ask to inspect the offering",
          goto: "edric_roll"
        }
      ]
    },
    edric_fortune_gate: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Price of Disclosure",
      art: "edric",
      paragraphs: [
        "Edric's eyes move from you to the ledger, then to the Tokens in your keeping.",
        "\"Fortunes are not made,\" he says. \"They are recognised by those with sufficient standing.\"",
        "You can purchase his cooperation with a Token, or force the question through the authority of your office."
      ],
      roll: {
        label: "Persuade Edric",
        stat: "persuasion",
        dc: 14,
        successText: "Edric's smile tightens. Your question finds the one vanity he cannot resist: the need to explain why his wealth proves he deserved it.",
        failureText: "Edric dismisses the question with a look polished by a lifetime of refusing scrutiny. That avenue closes; he will not indulge it again.",
        successGoto: "edric_accounts",
        failureGoto: "edric_first_words",
        failureFlags: { edricFortuneFailed: true }
      },
      choices: [
        {
          label: "Spend 1 Token: Purchase his answer",
          cost: { tokens: 1 },
          text: "The Token vanishes into the orbit of Edric's coins. He accepts the transaction as proof that you understand the proper order of things.",
          goto: "edric_accounts"
        }
      ]
    },
    edric_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read the Coins",
      art: "edric",
      paragraphs: [
        "You reach for the orbiting coins.",
        "They spin faster.",
        "In each polished face you glimpse a life Edric purchased distance from: a miner coughing black blood; a girl locked behind iron; a soldier freezing in a coat stamped with Beaumont silver; a judge looking down at a bribe and calling it evidence.",
        "The fifth coin shows nothing.",
        "Not emptiness.",
        "A covered thing."
      ],
      roll: {
        label: "Read the Coins",
        stat: "truth",
        dc: 12,
        successText: "The coins burn cold against your fingers. Edric's accounts open. Not all his sins are crimes. Not all his gifts were lies. That almost makes it worse. You claim two coins that were never truly his.",
        failureText: "The coins flash like mirrors in sunlight. For one horrible moment you see yourself as Edric sees you: untrained, unworthy, a clerk in stolen robes. His contempt cuts deeper than it should.",
        successEffects: { tokens: 2, alignment: -2 },
        failureEffects: { health: -2, alignment: 5 },
        successGoto: "edric_accounts",
        failureGoto: "edric_accounts"
      },
      choices: []
    },
    edric_accounts: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Noble Account",
      art: "edric",
      paragraphs: [
        "Edric adjusts his cuffs.",
        "\"Whatever you think you saw, it was context. I made hard decisions. The poor adore simple villains. They find systems less satisfying.\"",
        "The five coins slow, waiting.",
        "Now you see the truth of them. They are not payment. They are argument.",
        "A Soul like Edric does not beg passage.",
        "He tries to buy the shape of judgement."
      ],
      choices: [
        {
          label: "Make him pay three Tokens as toll",
          text: "Edric parts with three coins as if losing fingernails. The Gates accept him, but the threshold tastes of metal.",
          effects: { souls: 1, tokens: 3, alignment: 8 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Keep him in Purgatory",
          text: "\"You may wait,\" you tell him, \"until distance teaches you closeness.\" The office punishes delay. Edric's smile finally dies.",
          effects: { health: -2, alignment: 15 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Pass him for free to deny his bargain",
          text: "Edric passes without the dignity of a transaction. His coins fall uselessly to the glass and melt like frost.",
          effects: { souls: 1, alignment: -15 },
          setFlags: { edricResolved: true },
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
          condition: { flagNot: "maraResolved" },
          setFlags: { secondJudgement: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear Lord Edric Beaumont",
          condition: { flagNot: "edricResolved" },
          setFlags: { secondJudgement: true },
          goto: "edric_first_words"
        },
        {
          label: "Hear the masked Soul",
          condition: { flagNot: "maskResolved" },
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
      title: "Checkpoint: The Threshold Holds",
      art: "undead",
      checkpoint: true,
      paragraphs: [
        "You step before the Gates.",
        "The ring tightens.",
        "The cracks in the arch flare gold, then sickly green. Beyond the doors, shapes press against the threshold: hands, mouths, crowns, antlers, blades, faces flattened by wanting.",
        "Sebastien stands a careful distance behind you.",
        "\"The Gates are not walls,\" he says. \"Walls keep things out. Gates decide.\"",
        "The threshold buckles.",
        "\"Decide quickly.\""
      ],
      choices: [
        {
          label: "Face the unpaid dead",
          goto: "incursion"
        }
      ]
    },
    incursion: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Unpaid Dead",
      art: "undead",
      paragraphs: [
        "They come as one body made from many refusals.",
        "A grief-beast of hollow coins and broken fingers. A knight with teeth growing through his armour. A woman drowned in black veils. Children with adult shadows. A crown with no king beneath it.",
        "They batter the Gates from the far side, not because they deserve passage, but because they have learned the oldest lie:",
        "Enough hunger can look like justice.",
        "Your collected Souls burn inside the ring.",
        "If you have enough power, you can bind them.",
        "If you do not, the Gates will take the blow.",
        "Or you will."
      ],
      choices: [
        {
          label: "Spend 2 Souls: Bind the Restless",
          cost: { souls: 2 },
          text: "You speak through the ring. The undead lock in place, furious and ringing, while the Gates pull themselves straighter.",
          effects: { souls: -2, gateStability: 8, alignment: 4 },
          goto: "after_attack"
        },
        {
          label: "Force them back yourself",
          goto: "force_gate_roll"
        },
        {
          label: "Let the Gate take the blow",
          text: "You survive the impact by letting the threshold suffer it. The Gates stay standing, but less of them feels certain.",
          effects: { gateStability: -28, alignment: 8 },
          goto: "after_attack"
        },
        {
          label: "Offer your own name to the undead",
          text: "You reach for the missing name and something reaches back faster.",
          effects: { health: -10, alignment: 6 },
          goto: "failure_health"
        }
      ]
    },
    force_gate_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Force Them Back",
      art: "undead",
      paragraphs: [
        "You plant both hands against the threshold.",
        "The Gates are cold.",
        "Then hot.",
        "Then neither.",
        "The undead press from the far side, and through the crack you see them not as monsters but as need without shape. They do not want to kill you. They want through you.",
        "The ring bites down to bone."
      ],
      roll: {
        label: "Force Them Back",
        stat: "force",
        dc: 13,
        successText: "You shove. The Gates roar. For one impossible second, the whole threshold moves with you. The unpaid dead are thrown back into their dark, shrieking like coins flung onto stone. One torn Soul catches in your ring and burns clean.",
        failureText: "You push. They push harder. A hand slips through the threshold and closes around your wrist. It is made of every bargain ever refused. You tear free, but the Gates buckle inward.",
        successEffects: { souls: 1, gateStability: 5, alignment: 7 },
        failureEffects: { health: -3, gateStability: -24, alignment: 5 },
        successGoto: "after_attack",
        failureGoto: "after_attack"
      },
      choices: []
    },
    after_attack: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "After the Breach",
      art: "undead",
      paragraphs: [
        "Silence returns badly.",
        "It does not settle. It limps.",
        "The Gates remain closed, but new cracks vein the arch. The queue keeps its distance. Some Souls kneel. Some hide their offerings. Some look at you with hope, which is far heavier than fear.",
        "Sebastien steps over a fallen Token. It rolls away from his shoe as if it knows better.",
        "\"Acceptable,\" he says.",
        "You stare at him.",
        "He sighs.",
        "\"Fine. Barely acceptable.\"",
        "Something dark stains the threshold where the third petitioner stood.",
        "Not blood.",
        "Warmth."
      ],
      choices: [
        {
          label: "Ask what touched the Gate",
          goto: "living_hand"
        },
        {
          label: "Look for the petitioner left behind",
          goto: "living_hand"
        }
      ]
    },
    living_hand: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Living Mark",
      art: "undead",
      paragraphs: [
        "On the black glass, pressed into the place where no Living hand should ever reach, is a print.",
        "Five fingers.",
        "A palm.",
        "Warm at the edges.",
        "The handprint steams in the cold before the Gates.",
        "Sebastien does not write it down.",
        "That is how you know he is afraid.",
        "\"The dead knock,\" he says quietly. \"The Living pry.\"",
        "Beyond the Gates, something laughs with your voice.",
        "For the first time since the contract, you feel the shape of your missing name.",
        "Not the word.",
        "The wound it left behind."
      ],
      choices: [
        {
          label: "End Chapter One",
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
        "You have judged the dead.",
        "You have taken offerings.",
        "You have spent Souls.",
        "You have held the Gates.",
        "For now.",
        "But something in the Living world has found the threshold, and the Gates remember being broken.",
        "Sebastien opens the ledger again.",
        "This time, there is writing on the next page before his pen touches it.",
        "Chapter Two: The Soul That Was Not Dead"
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
      paragraphs: [
        "Your Health reaches nothing.",
        "Not death exactly.",
        "Death would be simpler.",
        "Your connection to the threshold snaps, and the Spirit realm throws you out like a body from a wave. The ring goes cold. The queue screams. The Gates lose the shape of your judgement.",
        "For one breath, there is no Gatekeeper.",
        "One breath is enough.",
        "The Gates are Lost."
      ],
      choices: [
        {
          label: "Rewind to checkpoint",
          rewind: true
        },
        {
          label: "Restart Chapter One",
          restart: true
        }
      ]
    },
    failure_gate: {
      chapter: "Game Over",
      title: "The Gates Are Lost",
      art: "gameover",
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
      choices: [
        {
          label: "Rewind to checkpoint",
          rewind: true
        },
        {
          label: "Restart Chapter One",
          restart: true
        }
      ]
    }
  }
};
