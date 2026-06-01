window.GATEKEEPER_STORY = {
  startingScene: "title",
  initialState: {
    health: 5,
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
      title: "Chapter One",
      art: "title",
      paragraphs: [
        "The Gates do not open for the living.",
        "Tonight, they open for you."
      ],
      choices: [
        {
          label: "Begin The New Gatekeeper",
          goto: "awakening"
        }
      ]
    },
    awakening: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gates Wake",
      art: "title",
      paragraphs: [
        "You wake on your feet, which feels wrong before you understand why.",
        "The ground beneath you is black glass veined with gold. It remembers footsteps that have not happened yet. Ahead, two impossible Gates rise out of the mist, their bars twisting upward into a dark that has no stars.",
        "Your chest aches as if someone has reached into it and tied a knot around your heart. You know your hands. You know pain. You do not know your name."
      ],
      choices: [
        {
          label: "Touch the iron ring on your finger",
          goto: "ring"
        },
        {
          label: "Listen to the Gates breathing",
          goto: "gates_breathe"
        },
        {
          label: "Push the Gates open with both hands",
          text: "The Gates answer strength with strength. The threshold tears through you and keeps tearing.",
          effects: { health: -5, gateStability: -50, alignment: 10 },
          goto: "failure_gate"
        }
      ]
    },
    gates_breathe: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Sound Between Worlds",
      art: "gate",
      paragraphs: [
        "The Gates breathe in long, patient measures. Not air. Names.",
        "Somewhere beyond them, a thousand dead voices wait their turn. Somewhere behind you, the Living world goes on without noticing that its dead are gathering at a broken threshold.",
        "When the Gates exhale, you taste ash, rainwater, and old coins."
      ],
      choices: [
        {
          label: "Touch the iron ring",
          goto: "ring"
        }
      ]
    },
    ring: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Ring Knows You",
      art: "title",
      paragraphs: [
        "The ring is cold enough to burn. It is made of black iron, but a thin gold mark glows beneath its surface: a pair of scales, balanced over a skull.",
        "You try to pull it free. The ring tightens. A memory almost rises with the pain, then slips back into the dark.",
        "A voice behind you says, \"I would not do that again. The last one screamed for a week.\""
      ],
      choices: [
        {
          label: "Turn toward the voice",
          goto: "sebastien"
        },
        {
          label: "Tear the ring from your finger",
          text: "The ring comes loose for less than a heartbeat. So does everything holding you here.",
          effects: { health: -5 },
          goto: "failure_health"
        }
      ]
    },
    sebastien: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Sebastien",
      art: "gate",
      paragraphs: [
        "A thin man in a funeral coat steps from the mist. He carries a ledger under one arm and wears the expression of someone who has watched many disasters become routine.",
        "\"Sebastien,\" he says, bowing. \"Steward, witness, occasional liar when kindness requires it. You are The Gatekeeper now. I would explain more, but the dead are already losing patience.\"",
        "Past him, three Souls wait where the path narrows: a poor woman with rain in her apron, a nobleman with coins bright enough to bruise the eye, and a small masked figure whose shadow does not touch the ground."
      ],
      choices: [
        {
          label: "Ask what happened to your name",
          goto: "name_question"
        },
        {
          label: "Ask what the dead want",
          goto: "rules_question"
        },
        {
          label: "Step toward the first Souls",
          goto: "first_queue"
        },
        {
          label: "Order every Soul through at once",
          text: "The dead surge forward before the Gates have weighed them. Something hungry slips through inside the rush.",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    name_question: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Missing Name",
      art: "gate",
      paragraphs: [
        "Sebastien looks at the ring instead of your face.",
        "\"A Living name is a door. Yours has been closed for now. Perhaps for mercy. Perhaps for punishment. I recommend surviving long enough to resent the distinction.\"",
        "The answer settles badly in you. The Gates creak, impatient."
      ],
      choices: [
        {
          label: "Ask what the dead want",
          goto: "rules_question"
        },
        {
          label: "Step toward the first Souls",
          goto: "first_queue"
        }
      ]
    },
    rules_question: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The First Rule",
      art: "gate",
      paragraphs: [
        "\"The dead want what the living wanted,\" Sebastien says. \"To be understood. To be forgiven. To be paid attention to by someone with authority.\"",
        "He opens the ledger. Its pages are blank until you look away. \"You may pass a Soul, refuse it, bind it, or break it. Passing grants power. Offerings grant Tokens. Mercy and wrath will both keep you alive, if you do not mistake either for goodness.\"",
        "The three Souls wait. None of them look harmless for the same reason."
      ],
      choices: [
        {
          label: "Approach the first Souls",
          goto: "first_queue"
        }
      ]
    },
    first_queue: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The First Queue",
      art: "petitioners",
      paragraphs: [
        "The poor woman stands nearest. Her hair is pinned for a funeral, but the pins are rusted with river water. She keeps patting her apron as if something precious is still folded inside.",
        "The nobleman waits behind her, smiling with all the patience money can buy. Five funeral coins gleam between his fingers.",
        "The masked figure says nothing. Its porcelain mask has no mouth, but you hear it breathing anyway."
      ],
      choices: [
        {
          label: "Hear the poor woman first",
          setFlags: { firstSoul: "widow" },
          goto: "widow_heard"
        },
        {
          label: "Let the nobleman speak",
          setFlags: { firstSoul: "noble" },
          goto: "noble_heard"
        },
        {
          label: "Study the masked figure",
          setFlags: { firstSoul: "mask" },
          goto: "mask_heard"
        }
      ]
    },
    widow_heard: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Woman With Rain In Her Apron",
      art: "petitioners",
      paragraphs: [
        "\"Mara Vale,\" the woman says, though you did not ask. \"Was that my name? It feels smaller now.\"",
        "She opens her apron. There is no coin inside, only a smell of vegetable soup and wet wool. A kitchen memory. Two children asleep by a hearth. A third chair left empty for someone who never came home.",
        "Sebastien murmurs, \"No offering. Ordinary Soul. Clean grief, mostly. The Gates will accept her if you do.\""
      ],
      choices: [
        {
          label: "Pass Mara gently",
          text: "Mara steps through with both hands over her heart. A pale Soul settles into your palm like a coal that remembers warmth.",
          effects: { souls: 1, alignment: -8 },
          setFlags: { judgedFirst: true, maraPassed: true },
          goto: "after_first_mercy"
        },
        {
          label: "Ask what she is hiding",
          goto: "widow_secret"
        },
        {
          label: "Refuse her until an offering is found",
          text: "Mara flinches. The hurt of it crosses the threshold and strikes behind your eyes.",
          effects: { health: -2, alignment: 8 },
          setFlags: { judgedFirst: true, maraRefused: true },
          goto: "after_first_hard"
        }
      ]
    },
    widow_secret: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Small Untruth",
      art: "petitioners",
      paragraphs: [
        "Mara looks back toward the mist. \"I kept a coin,\" she whispers. \"Not for the ferryman. For my youngest. I thought if I held one thing back, death would have to send me home for it.\"",
        "The coin appears in her palm, black with river silt. It is not much. To her, it is almost everything."
      ],
      choices: [
        {
          label: "Let her keep the coin and pass",
          text: "The Gates accept the mercy. Mara vanishes into a warm rain you cannot feel.",
          effects: { souls: 1, alignment: -10 },
          setFlags: { judgedFirst: true, maraPassed: true },
          goto: "after_first_mercy"
        },
        {
          label: "Take the coin as Token, then pass her",
          text: "The coin becomes a Token in your hand. Mara does not curse you. That makes it worse.",
          effects: { souls: 1, tokens: 1, alignment: 6 },
          setFlags: { judgedFirst: true, maraPassed: true },
          goto: "after_first_hard"
        }
      ]
    },
    noble_heard: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Nobleman's Smile",
      art: "petitioners",
      paragraphs: [
        "\"Lord Edric Vane,\" the nobleman says, before you can ask. \"Patron of three chapels, protector of six villages, victim of an ungrateful knife.\"",
        "His coins are old, heavy, and clean. Too clean. Their faces have been polished away by nervous thumbs.",
        "\"I understand institutions require maintenance,\" he says. \"Five Tokens for a prompt passage. No sermon necessary.\""
      ],
      choices: [
        {
          label: "Accept the Tokens and pass him",
          text: "The coins slide into your keeping. Edric passes with a bow shallow enough to be insult.",
          effects: { souls: 1, tokens: 5, alignment: 8 },
          setFlags: { judgedFirst: true, noblePassed: true },
          goto: "after_first_hard"
        },
        {
          label: "Refuse the bribe and question him",
          goto: "noble_questioned"
        },
        {
          label: "Pass him without taking payment",
          text: "For the first time, Edric looks unsure. The Gates take him. His coins fall uselessly through the mist.",
          effects: { souls: 1, alignment: -4 },
          setFlags: { judgedFirst: true, noblePassed: true },
          goto: "after_first_mercy"
        }
      ]
    },
    noble_questioned: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Knife's Memory",
      art: "petitioners",
      paragraphs: [
        "The nobleman's smile thins. The coins in his hand begin to show faces again: not kings, but servants.",
        "\"Debts,\" Sebastien says quietly. \"Wages withheld. Funerals unpaid. Grief converted into silver.\"",
        "Edric's Soul lashes out, not with claws but with entitlement so old it has become a weapon."
      ],
      choices: [
        {
          label: "Make him wait in the mist",
          text: "Edric recoils as if struck. You do not feel kinder, but you feel clearer.",
          effects: { health: -2, alignment: -2 },
          setFlags: { judgedFirst: true, nobleDelayed: true },
          goto: "after_first_hard"
        },
        {
          label: "Take two Tokens as tithe and pass him",
          text: "Two coins remain in your hand. The others turn black and vanish with him.",
          effects: { souls: 1, tokens: 2, alignment: 5 },
          setFlags: { judgedFirst: true, noblePassed: true },
          goto: "after_first_hard"
        }
      ]
    },
    mask_heard: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Mask Without A Mouth",
      art: "mask",
      paragraphs: [
        "The masked figure is small enough to be mistaken for a child until it moves. Then the mist moves with it.",
        "Its porcelain face is cracked from brow to chin. Behind the crack, something glows with the green-blue light of deep water.",
        "Sebastien shuts the ledger. \"Careful. Some Souls arrive wearing the shape of a question because an answer would kill them.\""
      ],
      choices: [
        {
          label: "Spend 1 Soul to Glimpse Truth",
          cost: { souls: 1 },
          goto: "mask_roll"
        },
        {
          label: "Command the mask to remember",
          goto: "mask_roll"
        },
        {
          label: "Let it wait and judge another",
          text: "The mask bows. Its shadow stays upright a moment longer than it should.",
          setFlags: { judgedFirst: true, maskDelayed: true },
          goto: "after_first_mask"
        },
        {
          label: "Break the mask with your ring",
          text: "The mask shatters. The Living heartbeat inside screams through the Gates, and the threshold buckles around the sound.",
          effects: { health: -3, gateStability: -30, alignment: 15 },
          setFlags: { judgedFirst: true, maskBroken: true },
          goto: "after_first_mask"
        }
      ]
    },
    mask_no_souls: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "An Empty Hand",
      art: "mask",
      paragraphs: [
        "You reach for power and find only the ache where power should be.",
        "Sebastien's voice is almost gentle. \"Not yet. A Gatekeeper cannot spend what he has not gathered.\""
      ],
      choices: [
        {
          label: "Command the mask without power",
          goto: "mask_roll"
        },
        {
          label: "Let it wait",
          text: "The mask bows. Its shadow stays upright a moment longer than it should.",
          setFlags: { judgedFirst: true, maskDelayed: true },
          goto: "after_first_mask"
        },
        {
          label: "Break the mask instead",
          text: "The porcelain splits beneath the ring. You hear a living throat scream on the wrong side of the world.",
          effects: { health: -3, gateStability: -30, alignment: 15 },
          setFlags: { judgedFirst: true, maskBroken: true },
          goto: "after_first_mask"
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
        stat: "mercy",
        dc: 12,
        successText: "The mask opens inward. Beneath it is not a face, but a Living heartbeat caught in a dead echo.",
        failureText: "The mask cracks wider. The thing behind it panics and floods your mind with borrowed drowning.",
        successEffects: { souls: 2, alignment: -4 },
        failureEffects: { health: -3, alignment: 6 },
        successFlags: { judgedFirst: true, maskRead: true },
        failureFlags: { judgedFirst: true, maskWounded: true },
        successGoto: "after_first_mask",
        failureGoto: "after_first_mask"
      },
      choices: []
    },
    after_first_mercy: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Line Changes",
      art: "petitioners",
      paragraphs: [
        "The first judgement leaves a mark in the air. The remaining Souls shift around it, measuring you.",
        "The nobleman stops smiling quite so easily. The masked figure turns its blank face toward the Gates.",
        "You understand then that judgement is not a single verdict. It is a reputation being born."
      ],
      choices: [
        {
          label: "Hear one more Soul",
          goto: "second_choice"
        },
        {
          label: "Ask Sebastien what the mark means",
          goto: "mark_explained"
        }
      ]
    },
    after_first_hard: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Line Learns Fear",
      art: "petitioners",
      paragraphs: [
        "The first judgement leaves a colder mark. The remaining Souls lower their voices. Even the mist seems to take a careful step back.",
        "Sebastien writes something in the blank ledger. When you glance down, the page clears itself.",
        "\"Do not worry,\" he says. \"The Gates have seen worse men than you. Whether they survived is a separate matter.\""
      ],
      choices: [
        {
          label: "Hear one more Soul",
          goto: "second_choice"
        },
        {
          label: "Ask Sebastien what he wrote",
          goto: "mark_explained"
        }
      ]
    },
    after_first_mask: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Something Breathes Wrong",
      art: "mask",
      paragraphs: [
        "The masked figure retreats into the line, or perhaps the line retreats around it.",
        "A heartbeat continues in the silence after it moves away. Not yours. Not Sebastien's.",
        "The Gates hear it too. Their hinges tighten like teeth."
      ],
      choices: [
        {
          label: "Hear one more Soul",
          goto: "second_choice"
        },
        {
          label: "Ask Sebastien about the heartbeat",
          goto: "mark_explained"
        }
      ]
    },
    mark_explained: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Reputation Being Born",
      art: "gate",
      paragraphs: [
        "\"Every judgement teaches the dead how to approach you,\" Sebastien says.",
        "\"Some will bring offerings. Some will bring lies. Some will bring knives made from their own regrets. If you become predictable, the clever ones will survive you.\"",
        "The Gates groan before you can answer. A sound like coins pouring into a grave rolls through the threshold."
      ],
      choices: [
        {
          label: "Turn toward the sound",
          goto: "threshold_warning"
        }
      ]
    },
    second_choice: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Second Petition",
      art: "petitioners",
      paragraphs: [
        "You reach for the next Soul, but the queue is no longer orderly.",
        "Mara's absence, Edric's anger, or the mask's impossible heartbeat has disturbed the line. The remaining dead press close enough for their memories to brush your skin.",
        "You may settle one more matter before the Gates demand your whole attention."
      ],
      choices: [
        {
          label: "Take a Token from the richest hand",
          text: "A coin passes into your keeping. Its owner does not step forward. That may be gratitude. It may be strategy.",
          effects: { tokens: 1, alignment: 3 },
          goto: "threshold_warning"
        },
        {
          label: "Let the quietest Soul pass unseen",
          text: "A small, tired Soul slips through before fear can teach it to lie. You feel a thin warmth answer.",
          effects: { souls: 1, alignment: -4 },
          goto: "threshold_warning"
        },
        {
          label: "Hold the line and make them wait",
          text: "The dead obey, but resentment travels through them like frost through a window.",
          effects: { health: -2 },
          goto: "threshold_warning"
        },
        {
          label: "Open the Gates a finger-width to prove command",
          text: "A finger-width is enough. The Gates inhale the wrong way, and the dead behind you begin to scream.",
          effects: { gateStability: -50, alignment: 12 },
          goto: "failure_gate"
        }
      ]
    },
    threshold_warning: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Gates Shudder",
      art: "gate",
      checkpoint: true,
      paragraphs: [
        "The Gates shudder once.",
        "The line of Souls falls silent. Sebastien turns very pale for a man who may not be alive.",
        "\"That was not a petitioner,\" he says. \"That was something touching the Gate from the wrong side.\""
      ],
      choices: [
        {
          label: "Stand before the threshold",
          goto: "incursion"
        },
        {
          label: "Step aside and let Sebastien handle it",
          text: "Sebastien reaches for the ledger. The thing beyond the Gate reaches through him.",
          effects: { gateStability: -50 },
          goto: "failure_gate"
        }
      ]
    },
    incursion: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "The Unpaid Dead",
      art: "undead",
      paragraphs: [
        "A hand made of funeral coins claws through the bars. Then another. Then a face, if a heap of owed wages and unburied bones can be called a face.",
        "It is not asking to pass. It is trying to make the Gates remember every death that was paid for too late.",
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
          label: "Roll D20 to force it back",
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
          effects: { health: -5, alignment: 6 },
          goto: "failure_health"
        }
      ]
    },
    force_gate_roll: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "Hold The Gate",
      art: "undead",
      paragraphs: [
        "You plant your feet in the black glass. The coin-thing drags itself closer.",
        "For a heartbeat, you are certain the Gates are not behind you. They are inside your ribs."
      ],
      roll: {
        label: "Force it back",
        stat: "wrath",
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
      art: "gate",
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
          label: "Check the masked Soul",
          goto: "living_hand"
        }
      ]
    },
    living_hand: {
      chapter: "Chapter One: The New Gatekeeper",
      title: "A Living Hand",
      art: "mask",
      paragraphs: [
        "The masked Soul is gone.",
        "Where it stood, the black glass holds a handprint burned into frost. Five fingers. A thumb. A Living mark.",
        "Sebastien closes the ledger slowly. \"No Soul should leave that behind.\""
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
        "Your ring tightens. Somewhere beyond the threshold, something that is not dead has learned that you are new.",
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
