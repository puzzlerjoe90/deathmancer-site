# The Gatekeeper: Roll for Judgement

## Chapter One: The New Gatekeeper

Human-editable draft for the current web prototype. This is intentionally written in a form you can review, rewrite, and send back to Codex to convert into `gatekeeper-story.js`.

## Current Design Notes

- The game begins with the contract, not the ring.
- The player starts at Health 10/10.
- Pressing **Accept the contract** causes the skull pain and drops Health to 5/10.
- Gate Stability starts at 50%.
- The first act is slower and more novel-like, with more setting before the first judgement.
- The player chooses one of four light-touch backstory contexts:
  - Scholar
  - Creative
  - Sportsman
  - Strong
- These are not classes. They only provide subtle hidden help on certain checks.
- The first judgement section presents three petitioners, but only two play out.
- After two petitioners, the game forces the undead/Gate attack event.
- There is one checkpoint in Chapter One, immediately before the undead event.
- Rewind is disabled before that checkpoint and can be used once after reaching it.
- The D20 button is the progression method on check scenes.
- D20 results should show the rolled number and narrative impact, not DC maths.

## Starting State

- Health: 10 / 10
- Gate Stability: 50%
- Souls: 0
- Tokens: 0
- Rewind: 1, usable only after checkpoint

---

## Scene: title

Art: title art

Purpose: Establish contract premise and ominous world tone.

Text summary:

- There is a table in the dark.
- A contract waits on it, written in a hand the player almost recognises.
- The words change when read.
- A black iron ring waits beside the signature line.
- A voice explains the vacancy is immediate, benefits are limited, consequences are traditional.

Choice:

- Accept the contract -> contract_pain
  - Effects: Health -5
  - Narrative: skull pain, blinding, stunning, old life split apart

---

## Scene: contract_pain

Art: title art

Purpose: The player awakens after accepting the contract and chooses a backstory context.

Text summary:

- The player wakes kneeling on black glass.
- Their name is gone.
- The Gates rise ahead.
- The ring is already on their finger.

Choices:

- Remember study and old books
  - Backstory: Scholar
  - Hidden bonus: truth-style checks

- Remember making things
  - Backstory: Creative
  - Hidden bonus: empathy-style checks

- Remember motion and competition
  - Backstory: Sportsman
  - Hidden bonus: reflex-style checks

- Remember strength
  - Backstory: Strong
  - Hidden bonus: force-style checks

All route to `world_before`.

---

## Scene: world_before

Art: title art

Purpose: World-building before judgement begins.

Text summary:

- The place before the Gates is not heaven or hell.
- It is a border office built by grief, a court with no roof, a harbour where every ship has already sunk.
- Souls wait in a line that bends beyond sight.
- Offerings can be coins, rings, locks of hair, promises folded into objects.
- The Gates are ancient, wounded, alive, and weakening.

Choices:

- Stand and face the line of Souls -> sebastien_arrives
- Push the Gates open with both hands -> Game Over
  - Effects: Health -10, Gate Stability -50

---

## Scene: sebastien_arrives

Art: title art

Purpose: Introduce Sebastien and his dry, formal, slightly cruel style.

Text summary:

- Sebastien emerges with a ledger.
- He is immaculate, narrow, and dressed for a disappointing funeral.
- He describes himself as steward of the threshold, clerk of impossible cases, and the player's best chance of remaining useful.
- He confirms the contract has been accepted.

Choices:

- Ask what a Gatekeeper does -> sebastien_rules
- Ask why your name is gone -> sebastien_name
- Tell him to open the Gates for everyone -> Game Over
  - Effects: Gate Stability -50

---

## Scene: sebastien_name

Purpose: Explain the missing Living name without revealing too much.

Choices:

- Ask what a Gatekeeper does -> sebastien_rules
- Approach the first petitioners -> first_queue

---

## Scene: sebastien_rules

Purpose: Explain judgement options in-world.

Rules introduced:

- Pass a Soul.
- Hold a Soul in Purgatory.
- Demand or accept a Token toll.
- Spend Souls to steady or bind.
- The dead can lie.

Choice:

- Approach the first petitioners -> first_queue

---

## Scene: first_queue

Purpose: Present the three first petitioners, but only two will be judged before the undead event.

Petitioners:

- Mara Vale: poor woman, river death, no declared offering.
- Lord Edric Vane: nobleman, five polished funeral coins, morally suspect.
- Masked figure: mouthless porcelain mask, shadow points toward the Living world.

Choices:

- Hear the poor woman -> Mara branch
- Hear the nobleman -> Edric branch
- Hear the masked figure -> Mask branch

---

## Mara Branch

### Scene: mara_first_words

Purpose: Establish Mara as ordinary but emotionally rich.

Choices:

- Ask about the child -> mara_child
- Ask what the river took -> mara_river
- Demand a Token toll -> mara_toll

### Scene: mara_child

Final judgement choices:

- Pass her and let her keep the coin
  - Effects: Souls +1, Mercy shift

- Take the coin as toll, then pass her
  - Effects: Souls +1, Tokens +1, Wrath/transactional shift

- Keep her in Purgatory until the child is safe
  - Effects: Health -1, slight Mercy shift

### Scene: mara_river

Final judgement choices:

- Pass her without payment
  - Effects: Souls +1, Mercy shift

- Ask for a memory as toll
  - Effects: Souls +1, Tokens +1, transactional shift

- Refuse her for arriving empty-handed
  - Effects: Health -2, Wrath shift

### Scene: mara_toll

Final judgement choices:

- Refuse the memory and pass her
  - Effects: Souls +1, Mercy shift

- Take the memory as Token
  - Effects: Souls +1, Tokens +1, Wrath/transactional shift

---

## Edric Branch

### Scene: edric_first_words

Purpose: Token temptation and suspicion.

Choices:

- Ask who polished the coins -> edric_accounts
- Accept all five Tokens immediately
  - Effects: Souls +1, Tokens +5, Gate Stability -8, Wrath shift
  - Reason: passing a corrupt Soul harms the far side.
- Send him to Purgatory while you inspect -> edric_roll

### Scene: edric_roll

D20 progression scene:

- D20 button text: Roll: Read the Coins
- Success: reveals debts, gives Tokens +2, slight Mercy shift
- Failure: contempt backlash, Health -2, Wrath shift
- Both route to edric_accounts

### Scene: edric_accounts

Final judgement choices:

- Make him pay three Tokens as toll
  - Effects: Souls +1, Tokens +3

- Keep him in Purgatory
  - Effects: Health -2

- Pass him for free to deny his bargain
  - Effects: Souls +1, Mercy shift

---

## Mask Branch

### Scene: mask_first_words

Purpose: Mystery and danger.

Choices:

- Ask what it remembers -> mask_memory
- Reach through the crack -> mask_roll
- Break the mask with your ring
  - Effects: Health -3, Gate Stability -30, Wrath shift
  - Risky but not always immediate failure

### Scene: mask_memory

Choices:

- Read it through the ring -> mask_roll
- Hold it in Purgatory
  - Effects: slight Mercy shift
- Pass it without understanding
  - Effects: Souls +2, Gate Stability -18, Wrath shift
  - Reason: it may not be truly dead

### Scene: mask_roll

D20 progression scene:

- D20 button text: Roll: Read the Mask
- Success: reveals a Living heartbeat caught in a dead echo
  - Effects: Souls +2, Mercy shift
- Failure: mental drowning backlash
  - Effects: Health -3, Wrath shift

---

## After First Judgement

Scene: after_first_judgement

Purpose: The queue changes. The player does not return to the untouched original three-Souls screen.

Choices:

- Hear one more Soul -> second_queue
- Open the Gates a finger-width to prove command -> Game Over
  - Effects: Gate Stability -50

---

## Second Queue

Scene: second_queue

Purpose: Player chooses one remaining unresolved petitioner. The third will not be judged in Chapter One.

Visible choices depend on who has already been resolved:

- Hear Mara Vale
- Hear Lord Edric Vane
- Hear the masked figure

After the second petitioner is resolved, route to `after_second_judgement`.

---

## After Second Judgement

Scene: after_second_judgement

Purpose: Force the next event. No third judgement.

Text summary:

- The third petitioner remains in the mist.
- There is no time to judge them.
- The Gates shake.
- Something is testing the lock.

Choices:

- Stand before the threshold -> threshold_warning
- Step aside and let Sebastien handle it -> Game Over
  - Effects: Gate Stability -50

---

## Single Checkpoint

Scene: threshold_warning

Purpose: One chapter checkpoint before the undead incursion.

Checkpoint: yes

Choice:

- Face the unpaid dead -> incursion

---

## Undead Event

Scene: incursion

Choices:

- Spend 2 Souls: Bind the Restless
  - Effects: Souls -2, Gate Stability +8

- Force it back yourself -> force_gate_roll

- Let the Gate take the blow
  - Effects: Gate Stability -28

- Offer your own name to the undead -> Game Over
  - Effects: Health -10

### Scene: force_gate_roll

D20 progression scene:

- D20 button text: Roll: Force it back
- Success: Souls +1, Gate Stability +5
- Failure: Health -3, Gate Stability -24

---

## Ending

Scene: after_attack

Purpose: Survived first incursion.

Choices:

- Ask what touched the Gate -> living_hand
- Look for the petitioner left behind -> living_hand

Scene: living_hand

Purpose: Cliffhanger. A Living handprint remains where a Soul stood.

Choice:

- End Chapter One -> trial_gate

Scene: trial_gate

Choices:

- Unlock Chapter Two - GBP 0.99
- Replay Chapter One

---

## Game Over

Scenes:

- failure_health
- failure_gate

Art: Game Over art

Choices:

- Rewind to checkpoint
  - Disabled if checkpoint has not been reached.
- Restart chapter
