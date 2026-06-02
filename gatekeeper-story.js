window.GATEKEEPER_STORY = {
  startingScene: "title",
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
    title: {
      chapter: "The Gatekeeper: Roll for Judgement",
      title: "The Contract",
      art: "title",
      paragraphs: [
        "There is a table in the dark, and on the table is a contract written in a hand you almost recognise.",
        "The page smells of candle smoke, winter rain, and old blood polished thin by ceremony. Above the signature line, the words keep changing whenever you try to read them. Below it waits a black iron ring.",
        "You do not remember coming here. You do not remember agreeing to anything. But somewhere beyond the room, the dead are already gathering, and the Gates are beginning to fail.",
        "A voice like silk dragged over a knife says, \"The vacancy is immediate. The benefits are limited. The consequences are traditional.\""
      ],
      choices: [
        {
          label: "Accept the contract",
          text: "The moment your mark touches the page, a white pain blooms behind your eyes. Something sharp hooks into your skull and pulls until the room, the table, and your old life split apart.",
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
        "You wake kneeling on black glass. The pain in your skull fades into a hard, bright ache. Your mouth is full of a name you cannot say.",
        "Ahead of you rise the Gates between the Living and the Dead. They are not doors so much as a decision the universe keeps making: who may pass, who must wait, and who must never be allowed through.",
        "The ring is already on your finger. It is too cold to be metal and too heavy to be jewellery."
      ],
      choices: [
        {
          label: "Remember study and old books",
          text: "You remember margins crowded with notes, dead languages, and the comfort of understanding one page before turning to the next.",
          setFlags: { background: "scholar" },
          goto: "world_before"
        },
        {
          label: "Remember making things",
          text: "You remember ink on your hands, half-finished songs, painted masks, and the private terror of showing someone what you made.",
          setFlags: { background: "creative" },
          goto: "world_before"
        },
        {
          label: "Remember motion and competition",
          text: "You remember lungs burning, a crowd becoming thunder, and the clean moment when thought disappeared into movement.",
          setFlags: { background: "sportsman" },
          goto: "world_before"
        },
        {
          label: "Remember strength",
          text: "You remember weight in your hands, labour in your shoulders, and the stubborn dignity of standing when others expected you to fall.",
          setFlags: { background: "strong" },
          goto: "world_before"
        }
      ]
    },
    world_before: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Place Between",
      art: "title",
      paragraphs: [
        "The place before the Gates is not heaven, hell, or any story the Living tell to soften the dark. It is a border office built by grief. A court with no roof. A harbour where every ship has already sunk.",
        "Mist moves in slow bands across the black glass. Within it, Souls wait in a line that bends farther than sight. Some look almost human. Some have forgotten the arrangement of a face. A few carry offerings: coins, rings, locks of hair, promises folded until they became objects.",
        "The Gates themselves are ancient, wounded, and alive enough to resent being stared at. Gold light pulses in the cracks. Each pulse is weaker than the last."
      ],
      choices: [
        {
          label: "Stand and face the line of Souls",
          goto: "sebastien_arrives"
        },
        {
          label: "Push the Gates open with both hands",
          text: "The Gates answer strength with strength. The threshold tears through you and keeps tearing.",
          effects: { health: -10, gateStability: -50, alignment: 10 },
          goto: "failure_gate"
        }
      ]
    },
    sebastien_arrives: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Sebastien",
      art: "title",
      paragraphs: [
        "A man steps from the mist carrying a ledger under one arm. He is narrow, immaculate, and dressed for a funeral where he expects to be disappointed by the speeches.",
        "\"Sebastien,\" he says, bowing with the exact depth of someone offering respect while reserving judgement. \"Steward of the threshold, clerk of impossible cases, and, until you learn not to do anything theatrical, your best chance of remaining useful.\"",
        "He glances at your ring. \"You have accepted the contract. That means the dead may petition you, the Gates may punish you, and I may say I told you so at legally significant moments.\""
      ],
      choices: [
        {
          label: "Ask what a Gatekeeper does",
          goto: "sebastien_rules"
        },
        {
          label: "Ask why your name is gone",
          goto: "sebastien_name"
        },
        {
          label: "Tell him to open the Gates for everyone",
          text: "Sebastien's smile dies first. The dead surge forward before the Gates can weigh them. Something hungry rides the rush.",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    sebastien_name: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Closed Door",
      art: "title",
      paragraphs: [
        "\"A Living name is a door,\" Sebastien says. \"Yours has been closed. Perhaps by mercy. Perhaps by contract law, which is rarely merciful but often thorough.\"",
        "He turns the ledger toward you. The page is blank until your eyes ache. \"Names return when they are useful, dangerous, or no longer yours. I would not hurry the matter.\""
      ],
      choices: [
        {
          label: "Ask what a Gatekeeper does",
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
      title: "The Work",
      art: "title",
      paragraphs: [
        "\"You judge,\" Sebastien says. \"Not because you are wise. Because someone signed.\"",
        "\"A Soul may pass if the Gates accept your verdict. A Soul may remain in Purgatory if truth is unfinished. A Soul may pay a Token toll, though payment is not innocence. You may spend gathered Souls to steady the threshold or bind what should not move.\"",
        "He looks toward the line. \"Be careful. The dead lie as beautifully as the living, and with fewer consequences.\""
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
      title: "The First Petitioners",
      art: "title",
      paragraphs: [
        "Three Souls stand at the front of the line, not because they arrived first, but because the mist has decided they matter.",
        "A poor woman clutches an apron dark with river water. A nobleman holds five polished funeral coins and a smile too practiced to be grief. Between them waits a small masked figure whose shadow points toward the Living world.",
        "Sebastien lowers his voice. \"Choose one to hear. You will not have time for all three. The Gates are already listening to something else.\""
      ],
      choices: [
        {
          label: "Hear the poor woman",
          setFlags: { maraActive: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear the nobleman",
          setFlags: { edricActive: true },
          goto: "edric_first_words"
        },
        {
          label: "Hear the masked figure",
          setFlags: { maskActive: true },
          goto: "mask_first_words"
        }
      ]
    },
    mara_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Mara Vale",
      art: "petitioners",
      paragraphs: [
        "\"Mara Vale,\" the woman says, though the name sounds borrowed from a warmer room. \"I think I died in the river. I think I was carrying bread. I think my youngest was waiting.\"",
        "Her apron is empty except for rain. When she twists the cloth in her hands, you smell soup left cooling on a hearth and hear a child trying not to cry.",
        "Sebastien murmurs, \"Ordinary Soul. No offering declared. Ordinary does not mean simple.\""
      ],
      choices: [
        {
          label: "Ask about the child",
          goto: "mara_child"
        },
        {
          label: "Ask what the river took",
          goto: "mara_river"
        },
        {
          label: "Demand a Token toll",
          goto: "mara_toll"
        }
      ]
    },
    mara_child: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Empty Chair",
      art: "petitioners",
      paragraphs: [
        "Mara's face changes when you ask. Not into sorrow. Into work. The kind a person does because collapse would take too long.",
        "\"He was ill,\" she says. \"I hid one coin for medicine. Not for death. Death has enough coins.\"",
        "A blackened coin appears in her palm. It is small, river-dirty, and held with more shame than greed."
      ],
      choices: [
        {
          label: "Pass her and let her keep the coin",
          text: "Mara steps through with the coin still closed in her fist. The Gates accept the mercy. A pale Soul settles into your palm like a coal remembering warmth.",
          effects: { souls: 1, alignment: -8 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Take the coin as toll, then pass her",
          text: "The coin becomes a Token in your keeping. Mara does not curse you. That makes it worse.",
          effects: { souls: 1, tokens: 1, alignment: 5 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Keep her in Purgatory until the child is safe",
          text: "Mara nods because she understands waiting. Her grief folds inward and brushes your mind like cold cloth.",
          effects: { health: -1, alignment: -2 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mara_river: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The River's Version",
      art: "petitioners",
      paragraphs: [
        "The river answers before Mara can. It rises in her voice: black water, a broken bridge, hands grabbing for bread that floated away like a ridiculous little boat.",
        "There was no villain in the river. Only weather, poverty, and the terrible speed with which a life can become a story told by someone else.",
        "Mara looks at you, suddenly afraid you will require a grander sin before you believe she matters."
      ],
      choices: [
        {
          label: "Pass her without payment",
          text: "The Gates open just enough for Mara. Her thank-you is quiet, and therefore harder to bear.",
          effects: { souls: 1, alignment: -7 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Ask for a memory as toll",
          text: "Mara gives up the smell of her kitchen. It becomes a Token in your hand. She passes lighter, and less herself.",
          effects: { souls: 1, tokens: 1, alignment: 4 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Refuse her for arriving empty-handed",
          text: "Mara's hurt lashes through you, not violent but intimate. The Gates do not move.",
          effects: { health: -2, alignment: 8 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    mara_toll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Cost Of Bread",
      art: "petitioners",
      paragraphs: [
        "\"I have nothing,\" Mara says.",
        "Sebastien clears his throat. \"That is frequently untrue. The dead are full of valuables. Names. Last sights. Regrets. The trick is deciding what you can take without becoming a thief with better lighting.\"",
        "Mara offers you the memory of her youngest laughing through a fever."
      ],
      choices: [
        {
          label: "Refuse the memory and pass her",
          text: "The memory stays with Mara. The Gates accept her. You feel poorer and cleaner.",
          effects: { souls: 1, alignment: -8 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Take the memory as Token",
          text: "The memory hardens into a Token. Mara passes without remembering why she had smiled.",
          effects: { souls: 1, tokens: 1, alignment: 8 },
          setFlags: { maraResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Lord Edric Vane",
      art: "petitioners",
      paragraphs: [
        "\"Lord Edric Vane,\" says the nobleman, with the tone of a man announcing a weather system. \"Patron of chapels, defender of villages, victim of a knife wielded by ingratitude.\"",
        "His five coins shine too brightly. Each has been polished until the face stamped into it is gone.",
        "\"I assume,\" he says, \"that even death keeps accounts.\""
      ],
      choices: [
        {
          label: "Ask who polished the coins",
          goto: "edric_accounts"
        },
        {
          label: "Accept all five Tokens immediately",
          text: "The coins leap into your hand. Edric passes smiling. Behind the Gates, something complains in a servant's voice.",
          effects: { souls: 1, tokens: 5, gateStability: -8, alignment: 10 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Send him to Purgatory while you inspect",
          goto: "edric_roll"
        }
      ]
    },
    edric_accounts: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Unpaid Ledger",
      art: "petitioners",
      paragraphs: [
        "Edric's smile remains, but the coins tremble. Faces rise through the polish: servants, grooms, washerwomen, a mason with dust in his beard.",
        "\"Sentiment,\" Edric says. \"The lower classes leave it everywhere.\"",
        "Sebastien writes without looking down. \"Unpaid funerals. Withheld wages. A chapel roof repaired after the congregation drowned beneath it.\""
      ],
      choices: [
        {
          label: "Make him pay three Tokens as toll",
          text: "Three coins become Tokens. Edric passes stripped of some shine, though not of pride.",
          effects: { souls: 1, tokens: 3, alignment: 4 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Keep him in Purgatory",
          text: "Edric's outrage strikes like a thrown glass. You keep your feet, barely.",
          effects: { health: -2, alignment: -1 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        },
        {
          label: "Pass him for free to deny his bargain",
          text: "Edric passes without purchase. He looks more insulted by mercy than by punishment.",
          effects: { souls: 1, alignment: -3 },
          setFlags: { edricResolved: true },
          goto: "after_first_judgement",
          gotoIfFlag: { secondJudgement: "after_second_judgement" }
        }
      ]
    },
    edric_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Read The Coins",
      art: "petitioners",
      paragraphs: [
        "You hold one of Edric's coins against the ring. The metal sweats black water.",
        "A judgement can be bought. Truth cannot, though it may be rented briefly by pain."
      ],
      roll: {
        label: "Read the Coins",
        stat: "truth",
        dc: 12,
        successText: "The coin gives up its dead. You see every debt Edric carried into the grave.",
        failureText: "The coin turns blank in your hand. Edric's contempt slides beneath your skull like a needle.",
        successEffects: { tokens: 2, alignment: -2 },
        failureEffects: { health: -2, alignment: 5 },
        successGoto: "edric_accounts",
        failureGoto: "edric_accounts"
      },
      choices: []
    },
    mask_first_words: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Masked Figure",
      art: "mask",
      paragraphs: [
        "The masked figure does not walk so much as arrive in increments, each step deciding whether to exist.",
        "Its porcelain face has no mouth. A crack runs from brow to chin, and behind that crack glows a green-blue light like deep water under moonless ice.",
        "Sebastien shuts the ledger. \"I dislike cases that make the book nervous.\""
      ],
      choices: [
        {
          label: "Ask what it remembers",
          goto: "mask_memory"
        },
        {
          label: "Reach through the crack",
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
      title: "A Heartbeat Behind Porcelain",
      art: "mask",
      paragraphs: [
        "The figure raises one hand. Its fingers are too small for the shadow they cast.",
        "You hear a heartbeat that is not yours and not dead. You hear a door opening in the Living world. You hear someone whisper, \"Not yet.\"",
        "Sebastien steps back. \"Gatekeeper. Decide carefully. That Soul may be wearing a body somewhere else.\""
      ],
      choices: [
        {
          label: "Read it through the ring",
          goto: "mask_roll"
        },
        {
          label: "Hold it in Purgatory",
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
      title: "Read The Mask",
      art: "mask",
      paragraphs: [
        "You lift your ring-hand. The iron warms. The mask tilts toward you.",
        "This is not a question a person answers. It is a door you either open cleanly or break with your shoulder."
      ],
      roll: {
        label: "Read the Mask",
        stat: "empathy",
        dc: 12,
        successText: "The mask opens inward. Beneath it is not a face, but a Living heartbeat caught in a dead echo.",
        failureText: "The mask cracks wider. The thing behind it panics and floods your mind with borrowed drowning.",
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
      title: "The Line Learns You",
      art: "title",
      paragraphs: [
        "Your first judgement changes the air. The Souls do not simply watch you now; they study the shape of your mercy, the reach of your greed, the sharpness of your fear.",
        "Sebastien marks the ledger with a pen that has no nib. \"One verdict is an accident. Two begin a reputation.\"",
        "The Gates shudder faintly. You have time for one more petitioner before whatever is touching the threshold arrives."
      ],
      choices: [
        {
          label: "Hear one more Soul",
          goto: "second_queue"
        },
        {
          label: "Open the Gates a finger-width to prove command",
          text: "A finger-width is enough. The Gates inhale the wrong way, and the dead behind you begin to scream.",
          effects: { gateStability: -50, alignment: 12 },
          goto: "failure_gate"
        }
      ]
    },
    second_queue: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "One More Before The Breach",
      art: "title",
      paragraphs: [
        "The original line is gone. Not vanished, but rearranged by what you have already done.",
        "The remaining petitioners know you can be moved, bought, resisted, or hurt. Each approaches with that knowledge folded into their posture.",
        "You choose one more case. The third will have to wait in Purgatory, whether it deserves to or not."
      ],
      choices: [
        {
          label: "Hear Mara Vale",
          condition: { flagNot: "maraResolved" },
          setFlags: { secondJudgement: true },
          goto: "mara_first_words"
        },
        {
          label: "Hear Lord Edric Vane",
          condition: { flagNot: "edricResolved" },
          setFlags: { secondJudgement: true },
          goto: "edric_first_words"
        },
        {
          label: "Hear the masked figure",
          condition: { flagNot: "maskResolved" },
          setFlags: { secondJudgement: true },
          goto: "mask_first_words"
        }
      ]
    },
    after_second_judgement: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Third Must Wait",
      art: "title",
      paragraphs: [
        "The third petitioner remains in the mist. You feel their disappointment, or relief, or hunger. There is no time to learn which.",
        "The Gates shake once, hard enough to split a gold vein in the glass beneath your feet.",
        "Sebastien goes still. \"That was not a Soul asking permission. That was something testing the lock.\""
      ],
      choices: [
        {
          label: "Stand before the threshold",
          goto: "threshold_warning"
        },
        {
          label: "Step aside and let Sebastien handle it",
          text: "Sebastien reaches for the ledger. The thing beyond the Gate reaches through him.",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    threshold_warning: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gate Remembers You",
      art: "title",
      checkpoint: true,
      paragraphs: [
        "You step into the centre of the threshold. The ring burns. For the first time, the Gates seem to know where you are.",
        "This is the chapter's mercy: one fixed point in a place built from endings. If you fall beyond this moment, the mist may return you here once.",
        "Then the dead thing begins to climb through."
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
      art: "title",
      paragraphs: [
        "A hand made of funeral coins claws through the bars. Then another. Then a face, if a heap of owed wages and unburied bones can be called a face.",
        "It is not asking to pass. It is trying to make the Gates remember every death paid for too late.",
        "The hinges scream."
      ],
      choices: [
        {
          label: "Spend 2 Souls: Bind the Restless",
          cost: { souls: 2 },
          text: "You speak through the ring. The coin-thing locks in place, furious and ringing, while the Gates pull themselves straighter.",
          effects: { souls: -2, gateStability: 8, alignment: 4 },
          goto: "after_attack"
        },
        {
          label: "Force it back yourself",
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
          text: "You reach for the name you do not remember. Something reaches back faster.",
          effects: { health: -10, alignment: 6 },
          goto: "failure_health"
        }
      ]
    },
    force_gate_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Hold The Gate",
      art: "title",
      paragraphs: [
        "You plant your feet in the black glass. The coin-thing drags itself closer.",
        "For a heartbeat, you are certain the Gates are not behind you. They are inside your ribs."
      ],
      roll: {
        label: "Force it back",
        stat: "force",
        dc: 13,
        successText: "Your command lands like a hammer. The undead mass bursts into cold sparks and unpaid names.",
        failureText: "Your voice breaks. The creature slams into you and the hinges together.",
        successEffects: { souls: 1, gateStability: 5, alignment: 7 },
        failureEffects: { health: -3, gateStability: -24, alignment: 5 },
        successGoto: "after_attack",
        failureGoto: "after_attack"
      },
      choices: []
    },
    after_attack: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "After The Breach",
      art: "title",
      paragraphs: [
        "The coin-thing breaks apart. Its last pieces scatter across the path, then turn to dust before any Soul can stoop for them.",
        "The Gates remain closed. Not whole. Not safe. Closed.",
        "Sebastien exhales. \"You survived your first hour. That is not the same as passing.\""
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
      title: "A Living Hand",
      art: "title",
      paragraphs: [
        "Where one petitioner stood, the black glass holds a handprint burned into frost. Five fingers. A thumb. A Living mark.",
        "Sebastien closes the ledger slowly. \"No Soul should leave that behind.\"",
        "Your ring tightens. Somewhere beyond the threshold, something that is not dead has learned that you are new."
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
      title: "The Name Beyond The Gate",
      art: "title",
      paragraphs: [
        "The Gates have accepted you, for now.",
        "Your forgotten name waits in the dark with its eyes open."
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
      title: "The Ring Goes Cold",
      art: "gameover",
      paragraphs: [
        "Your body remains standing, but your hold on the place between Living and Dead snaps.",
        "Without the Gatekeeper, the line breaks."
      ],
      choices: [
        {
          label: "Rewind to checkpoint",
          rewind: true
        },
        {
          label: "Restart chapter",
          restart: true
        }
      ]
    },
    failure_gate: {
      chapter: "Game Over",
      title: "The Gates Are Lost",
      art: "gameover",
      paragraphs: [
        "The Gates open the wrong way.",
        "The dead do not pass through. They pour out."
      ],
      choices: [
        {
          label: "Rewind to checkpoint",
          rewind: true
        },
        {
          label: "Restart chapter",
          restart: true
        }
      ]
    }
  }
};
