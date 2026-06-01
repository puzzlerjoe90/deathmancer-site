window.GATEKEEPER_STORY = {
  startingScene: "awakening",
  initialState: {
    health: 10,
    maxHealth: 10,
    souls: 0,
    tokens: 0,
    gateStability: 76,
    alignment: 0,
    rewinds: 3,
    flags: {}
  },
  scenes: {
    awakening: {
      chapter: "Chapter One: The First Queue",
      title: "The Gates Wake",
      art: "gate",
      paragraphs: [
        "You wake standing upright before a pair of black gates that breathe like something sleeping under stone.",
        "You do not remember your Living name. There is a ring of cold iron on your finger and a line of Souls waiting in the mist.",
        "A thin man in a funeral coat appears beside you. Sebastien bows as if this has all happened before. \"Judge quickly. The Gates dislike hesitation.\""
      ],
      choices: [
        {
          label: "Take the ring and judge",
          text: "Sebastien smiles without warmth. The first three Souls step forward.",
          goto: "petitioners"
        }
      ]
    },
    petitioners: {
      chapter: "Chapter One: The First Queue",
      title: "Three Petitioners",
      art: "petitioners",
      paragraphs: [
        "A poor woman clutches an apron full of rain. A nobleman holds five bright funeral coins between gloved fingers.",
        "Behind them waits a silent Soul in a cracked mask. It looks fragile until the Gates lean toward it.",
        "You can feel the first rule in your bones: every Soul that passes strengthens you. Every judgement changes the Gatekeeper you are becoming."
      ],
      choices: [
        {
          label: "Pass the poor woman",
          condition: { flagNot: "widowJudged" },
          text: "She has no offering, only a memory of soup left warming for children who will never see her again.",
          effects: { souls: 1, alignment: -14 },
          setFlags: { widowJudged: true },
          goto: "widow_passed"
        },
        {
          label: "Take the noble's five Tokens",
          condition: { flagNot: "nobleJudged" },
          text: "The nobleman pays before you ask. His smile is practiced. The Gates do not like it, but they do not refuse the coins.",
          effects: { tokens: 5, souls: 2, gateStability: -5, alignment: 12 },
          setFlags: { nobleJudged: true },
          goto: "noble_paid"
        },
        {
          label: "Spend 1 Soul: Glimpse Truth",
          condition: { flagNot: "maskedJudged" },
          cost: { souls: 1 },
          roll: {
            stat: "mercy",
            dc: 10,
            successText: "The mask flickers. Beneath it is not a face, but a Living heartbeat trapped in a dead echo.",
            failureText: "The mask opens like a second Gate. Something looks back and pushes.",
            successEffects: { souls: 3, gateStability: -3, alignment: -6 },
            failureEffects: { souls: 1, health: -1, gateStability: -10, alignment: 8 },
            successGoto: "masked_truth",
            failureGoto: "masked_veiled"
          },
          setFlags: { maskedJudged: true }
        },
        {
          label: "Judge the mask without power",
          condition: { flagNot: "maskedJudged" },
          roll: {
            stat: "wrath",
            dc: 15,
            successText: "You command the mask to open. It obeys with a sound like a candle being drowned.",
            failureText: "You strike the mask with judgement, and the Gate takes the blow instead.",
            successEffects: { souls: 4, alignment: 10 },
            failureEffects: { health: -2, gateStability: -12, alignment: 14 },
            successGoto: "masked_truth",
            failureGoto: "masked_veiled"
          },
          setFlags: { maskedJudged: true }
        },
        {
          label: "Face the sound behind the Gate",
          condition: { flags: ["widowJudged", "nobleJudged", "maskedJudged"] },
          text: "The queue falls silent. Something on the wrong side of death has begun to climb.",
          goto: "incursion"
        }
      ]
    },
    widow_passed: {
      chapter: "Chapter One: The First Queue",
      title: "A Small Mercy",
      art: "petitioners",
      paragraphs: [
        "The poor woman passes through with a whisper of thanks. One pale Soul settles into your hand like a coal that remembers warmth.",
        "Sebastien tilts his head. \"Mercy is cheap until the Gates ask you to pay for it.\""
      ],
      choices: [
        {
          label: "Return to the waiting dead",
          goto: "petitioners"
        }
      ]
    },
    noble_paid: {
      chapter: "Chapter One: The First Queue",
      title: "Five Bright Coins",
      art: "petitioners",
      paragraphs: [
        "The nobleman steps through smiling. The Tokens remain in your palm, warmer than they should be.",
        "For a moment the iron bars flex inward. Payment has weight here, but not innocence."
      ],
      choices: [
        {
          label: "Return to the waiting dead",
          goto: "petitioners"
        }
      ]
    },
    masked_truth: {
      chapter: "Chapter One: The First Queue",
      title: "The Mask Remembers",
      art: "mask",
      paragraphs: [
        "The masked Soul passes, but not cleanly. Power trails from it in pale ribbons.",
        "You gather what the Gates allow. Somewhere far away, a living throat gasps."
      ],
      choices: [
        {
          label: "Return to the waiting dead",
          goto: "petitioners"
        }
      ]
    },
    masked_veiled: {
      chapter: "Chapter One: The First Queue",
      title: "A Bad Reading",
      art: "mask",
      paragraphs: [
        "The mask gives you enough truth to be dangerous and not enough to be wise.",
        "The Gates groan. Sebastien stops smiling."
      ],
      choices: [
        {
          label: "Return to the waiting dead",
          goto: "petitioners"
        }
      ]
    },
    incursion: {
      chapter: "Chapter One: The First Queue",
      title: "The Unpaid Dead",
      art: "undead",
      paragraphs: [
        "The Gates shake. A heap of funeral coins crawls through the bars, each coin stamped with a face that was never mourned.",
        "It is not a Soul asking judgement. It is an undead hunger, and it has learned the shape of a hand.",
        "The thing reaches for the hinges."
      ],
      choices: [
        {
          label: "Spend 2 Souls: Bind the Restless",
          cost: { souls: 2 },
          text: "You speak with the iron in your ring. The coin-thing locks in place, furious and ringing.",
          effects: { souls: -2, gateStability: 8, alignment: 8 },
          goto: "after_attack"
        },
        {
          label: "Roll D20 to force it back",
          roll: {
            stat: "wrath",
            dc: 13,
            successText: "You drive the thing against the bars. Its coins burst into cold sparks.",
            failureText: "Your command cracks. The coin-thing slams into you and the Gates together.",
            successEffects: { souls: 2, gateStability: 5, alignment: 12 },
            failureEffects: { health: -3, gateStability: -18, alignment: 8 },
            successGoto: "after_attack",
            failureGoto: "after_attack"
          }
        },
        {
          label: "Spend 3 Tokens to appease it",
          cost: { tokens: 3 },
          text: "The offering vanishes into the mass. It retreats, not satisfied, but delayed.",
          effects: { tokens: -3, gateStability: 4, alignment: 6 },
          goto: "after_attack"
        },
        {
          label: "Protect yourself. Let the Gates take it.",
          text: "You step aside. The impact misses your body and bruises the threshold instead.",
          effects: { gateStability: -16, alignment: 16 },
          goto: "after_attack"
        }
      ]
    },
    after_attack: {
      chapter: "Chapter One: The First Queue",
      title: "The Wrong Side",
      art: "gate",
      paragraphs: [
        "The undead thing breaks apart. The Gates keep standing, though one hinge now bleeds a thin silver light.",
        "In the hush after violence, you hear the masked Soul breathe from somewhere beyond the mist.",
        "Sebastien whispers, \"That one was not truly dead.\""
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
      title: "A Living Hand on the Gate",
      art: "gate",
      paragraphs: [
        "Something from the Living side has touched the threshold. The Gates remember its handprint.",
        "Your ring tightens. Your forgotten name waits on the other side of Chapter Two."
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
      chapter: "Chapter Failed",
      title: "The Ring Goes Cold",
      art: "undead",
      paragraphs: [
        "Your body remains standing, but your hold on the place between Living and Dead snaps.",
        "Without the Gatekeeper, the line of Souls begins to scatter."
      ],
      choices: [
        {
          label: "Rewind judgement",
          rewind: true
        },
        {
          label: "Restart chapter",
          restart: true
        }
      ]
    },
    failure_gate: {
      chapter: "Chapter Failed",
      title: "The Gates Are Breached",
      art: "undead",
      paragraphs: [
        "The Gates open the wrong way.",
        "The dead do not pass through. They pour out."
      ],
      choices: [
        {
          label: "Rewind judgement",
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
