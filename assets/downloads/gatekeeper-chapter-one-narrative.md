# The Gatekeeper: Roll for Judgement

## Chapter One: The New Gatekeeper

Human-editable story draft for the current local prototype. This is designed to be reviewed, rewritten, and handed back to Codex for conversion into `gatekeeper-story.js`.

## Design Intent For This Pass

- Novel-like first, game second.
- Challenge should feel fair, not random.
- Some choices are narrative-only.
- Some choices reduce Health or Gate Stability.
- Some choices are clearly dangerous and lead directly to Game Over.
- Only one checkpoint exists in Chapter One.
- Rewind returns to that checkpoint and is limited to one use.
- If the player fails before reaching the checkpoint, they must restart.

## Starting State

- Health: 5 / 10
- Gate Stability: 50%
- Souls: 0
- Tokens: 0
- Rewind: 1, but only usable after the chapter checkpoint is reached

## Single Checkpoint

Checkpoint scene: `threshold_warning`

This occurs after the first judgement sequence, just before the undead incursion. It replenishes Rewind to 1.

---

## Failure Routes Overview

### Immediate / Doomed Failure Choices

These are choices that should read as obviously dangerous:

- `awakening`: Push the Gates open with both hands
  - Health -5, Gate Stability -50
  - Game Over: Gates lost

- `ring`: Tear the ring from your finger
  - Health -5
  - Game Over: connection severed

- `sebastien`: Order every Soul through at once
  - Gate Stability -50
  - Game Over: wrong Soul slips through

- `second_choice`: Open the Gates a finger-width to prove command
  - Gate Stability -50
  - Game Over: threshold breach

- `threshold_warning`: Step aside and let Sebastien handle it
  - Gate Stability -50
  - Game Over: Sebastien is not the Gatekeeper

- `incursion`: Offer your own name to the undead
  - Health -5
  - Game Over: something takes the name before you remember it

### Longer Failure Paths

These are not instant death, but can stack into failure:

- Refusing Mara until she finds an offering
  - Health -2

- Making Edric wait in the mist
  - Health -2

- Breaking the masked Soul
  - Health -3, Gate Stability -30

- Failing to read the mask
  - Health -3

- Holding the line and making all Souls wait
  - Health -2

- Letting the Gate take the undead blow
  - Gate Stability -28

- Failing the undead D20 roll
  - Health -3, Gate Stability -24

---

## Scene: title

Purpose: Title-art splash.

Art: title

Text:

- The Gates do not open for the living.
- Tonight, they open for you.

Choices:

- Begin The New Gatekeeper -> awakening

---

## Scene: awakening

Purpose: Establish the nameless protagonist and the Gates.

Art: title

Text:

- You wake on your feet, which feels wrong before you understand why.
- The ground beneath you is black glass veined with gold. It remembers footsteps that have not happened yet. Ahead, two impossible Gates rise out of the mist, their bars twisting upward into a dark that has no stars.
- Your chest aches as if someone has reached into it and tied a knot around your heart. You know your hands. You know pain. You do not know your name.

Choices:

- Touch the iron ring on your finger -> ring
- Listen to the Gates breathing -> gates_breathe
- Push the Gates open with both hands -> Game Over
  - Effects: Health -5, Gate Stability -50

---

## Scene: gates_breathe

Purpose: Optional world-building.

Art: gate

Choices:

- Touch the iron ring -> ring

---

## Scene: ring

Purpose: Introduce the ring and first clear doomed temptation.

Art: title

Choices:

- Turn toward the voice -> sebastien
- Tear the ring from your finger -> Game Over
  - Effects: Health -5

---

## Scene: sebastien

Purpose: Introduce Sebastien, the role, and the first queue.

Art: gate

Choices:

- Ask what happened to your name -> name_question
- Ask what the dead want -> rules_question
- Step toward the first Souls -> first_queue
- Order every Soul through at once -> Game Over
  - Effects: Gate Stability -50

---

## Scene: first_queue

Purpose: Start the first judgement. The player chooses who to hear first, but this does not loop back to the same static three-Souls screen.

Art: petitioners

Choices:

- Hear the poor woman first -> widow_heard
- Let the nobleman speak -> noble_heard
- Study the masked figure -> mask_heard

---

## Judgement: Mara Vale

Scene: `widow_heard`

Choices:

- Pass Mara gently -> after_first_mercy
  - Effects: Souls +1, Mercy shift

- Ask what she is hiding -> widow_secret
  - Narrative-only investigation

- Refuse her until an offering is found -> after_first_hard
  - Effects: Health -2, Wrath shift
  - Longer failure risk

Scene: `widow_secret`

Choices:

- Let her keep the coin and pass -> after_first_mercy
  - Effects: Souls +1, Mercy shift

- Take the coin as Token, then pass her -> after_first_hard
  - Effects: Souls +1, Tokens +1, Wrath shift

---

## Judgement: Lord Edric Vane

Scene: `noble_heard`

Choices:

- Accept the Tokens and pass him -> after_first_hard
  - Effects: Souls +1, Tokens +5, Wrath shift

- Refuse the bribe and question him -> noble_questioned
  - Narrative-only investigation

- Pass him without taking payment -> after_first_mercy
  - Effects: Souls +1, Mercy shift

Scene: `noble_questioned`

Choices:

- Make him wait in the mist -> after_first_hard
  - Effects: Health -2, slight Mercy shift
  - Longer failure risk

- Take two Tokens as tithe and pass him -> after_first_hard
  - Effects: Souls +1, Tokens +2, Wrath shift

---

## Judgement: The Masked Figure

Scene: `mask_heard`

Choices:

- Spend 1 Soul to Glimpse Truth -> mask_roll
  - Disabled unless Souls are available.

- Command the mask to remember -> mask_roll
  - Risky D20 route.

- Let it wait and judge another -> after_first_mask
  - Narrative progression.

- Break the mask with your ring -> after_first_mask
  - Effects: Health -3, Gate Stability -30, Wrath shift
  - Longer failure risk. Can become fatal if followed by later bad choices.

Scene: `mask_roll`

D20 Button:

- Prompt: Roll: Read the Mask

Success:

- Reveals a Living heartbeat caught in a dead echo.
- Effects: Souls +2, Mercy shift
- Route: after_first_mask

Failure:

- Mental drowning backlash.
- Effects: Health -3, Wrath shift
- Route: after_first_mask

---

## After First Judgement

Scenes:

- `after_first_mercy`
- `after_first_hard`
- `after_first_mask`

Purpose: The queue has changed. The player should not return to the original three-Souls screen.

Choices:

- Hear one more Soul -> second_choice
- Ask Sebastien what the mark means / heartbeat means -> mark_explained

---

## Scene: second_choice

Purpose: One more action before the compulsory undead event.

Choices:

- Take a Token from the richest hand -> threshold_warning
  - Effects: Tokens +1, Wrath shift

- Let the quietest Soul pass unseen -> threshold_warning
  - Effects: Souls +1, Mercy shift

- Hold the line and make them wait -> threshold_warning
  - Effects: Health -2
  - Longer failure risk

- Open the Gates a finger-width to prove command -> Game Over
  - Effects: Gate Stability -50

---

## Scene: threshold_warning

Purpose: The only checkpoint in Chapter One. Sets up the undead incursion.

Checkpoint: yes

Choices:

- Stand before the threshold -> incursion

- Step aside and let Sebastien handle it -> Game Over
  - Effects: Gate Stability -50

---

## Scene: incursion

Purpose: First direct Gate attack.

Choices:

- Spend 2 Souls: Bind the Restless -> after_attack
  - Effects: Souls -2, Gate Stability +8
  - Strong choice if the player earned enough Souls.

- Roll D20 to force it back -> force_gate_roll
  - Risky but does not require resources.

- Let the Gate take the blow -> after_attack
  - Effects: Gate Stability -28
  - Longer failure risk.

- Offer your own name to the undead -> Game Over
  - Effects: Health -5
  - Doomed choice.

Scene: `force_gate_roll`

D20 Button:

- Prompt: Roll: Force it back

Success:

- Effects: Souls +1, Gate Stability +5, Wrath shift
- Route: after_attack

Failure:

- Effects: Health -3, Gate Stability -24, Wrath shift
- Route: after_attack, unless Health or Gate Stability hits 0

---

## Scene: after_attack

Purpose: Aftermath, but not a checkpoint in this pass.

Choices:

- Ask what touched the Gate -> living_hand
- Check the masked Soul -> living_hand

---

## Scene: living_hand

Purpose: Cliffhanger.

Choices:

- End Chapter One -> trial_gate

---

## Scene: trial_gate

Purpose: Mock end of free trial.

Choices:

- Unlock Chapter Two - GBP 0.99
  - Mock purchase only.

- Replay Chapter One

---

## Game Over Scenes

Scenes:

- `failure_health`
- `failure_gate`

Display:

- Game Over art asset.

Choices:

- Rewind to checkpoint
  - Disabled if no checkpoint has been reached.

- Restart chapter
