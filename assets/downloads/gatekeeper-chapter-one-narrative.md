# The Gatekeeper: Roll for Judgement

## Chapter One: The New Gatekeeper

Human-editable narrative draft converted from the current Word work-in-progress for the web prototype. Scene IDs, route notes, choices, effects, checkpoints, and D20 markers are retained so this can be revised and sent back for code conversion.

Chapter One: The New Gatekeeper - Reworked Narrative Draft

This version keeps the current prototype structure, but rewrites the chapter so it feels less like placeholder fantasy and more like The Gatekeeper / Deathmancer: judgement, living/dead thresholds, offerings, Souls, Tokens, wounded Gates, Sebastien's dry efficacy, and the slow horror of inheriting a role whose true scale is not yet understood.

### Design Notes Preserved

The game begins with the contract, not the ring.

The player starts at Health 10/10.

Pressing Accept the contract causes the skull pain and drops Health to 5/10.

Gate Stability starts at 50%.

Souls and Tokens begin at 0.

The opening is slower and more novel-like before the first judgement.

The player chooses one of four light-touch backstory contexts.

These are not classes and should only provide subtle hidden help on checks.

The first judgement presents three petitioners, but only two are judged before the undead event.

After two petitioners, the undead/Gate attack event is forced.

There is one checkpoint in Chapter One, immediately before the undead event.

Rewind is disabled before that checkpoint and can be used once after reaching it.

D20 results should show the rolled number and narrative impact, not visible DC maths.

### Starting State

Health: 10 / 10

Gate Stability: 50%

Souls: 0

Tokens: 0

Mercy/Wrath Alignment: Balanced

Rewind: 1, usable only after checkpoint

Retain the opening page (scene: chapter_one), i.e. title art, display title "Chapter One", text "The Gates do not open for the living.  Tonight, they open on your command."  Selection: "Begin The New Gatekeeper".

---

## Scene: title

- Art: Title art
- Purpose: Establish the contract premise, the vacancy and the dubiousness of consent.
### Display Title

- The Contract
### Text

There is a table sitting elevated in a vast chasm of darkness, illuminated only by a subtle ethereal light.

Not a room. Not a cave. Not anywhere a table has any right to be, you suppose.

All you can make out is the table. Black onyx wood. One chair with golden inlays to its otherwise ashen black wood. A candle hangs in the air above the table, illuminating its contents...a contract on parchment waits in the centre.

The words appear as though they shift as you begin to read them.

Vacancy: immediate. Tenure: indefinite. Benefits: unlimited. Consequences: unimaginable.

The last word is written in an angry font that sends a shiver down your back. Beside the signature line, you now make out, rests a single golden bullet.  How odd. It is plain, heavy and somehow warm.  Like it's recently discharged.

A voice speaks from afar in the darkness.

"Do take your time," it says.  He says?  It's a deep, masculine voice. "The dead are famously patient. Right up until they are not."

### Choice

- Accept the contract. -> contract_pain
  - Effects: Health -5
  - Narrative note: an intense pain emanating from deep in your skull. A blinding rupture. Your life force feels writhed apart from its corporeal body.
---

## Scene: contract_pain

- Art: Grief
- Purpose: The binding. The player forgets their name and chooses a light-touch backstory echo.
### Display Title

- A Name Left Behind
### Text

The bullet flies towards your skull in an instant.

Pain blooms unimaginably behind your right eye.

It's not a wound in the traditional sense. It's a signature. Like a feeling of deja vu, accompanied by intense pain that feels tied to your psyche.

Its memory burns through bone, vision, thought...and memories. Everything that once answered when the world called out your name is lost.

You regain conscious thought, kneeling on black glass beneath the table.

Ahead of you in starkest contract to the black void is a towering set of vibrant Gates.  The Gates.

They are too vast for accompanying architecture. Two ancient doors of bone-white metals and pale stone, stitched with cracks of gold and pulsating light. They breathe like something alive.

The voice speaks again:

"You are not where the Living should stand."

"You are not yet among the Dead."

"Your name is of no consequence."

"You are the new Gatekeeper."

### Choices

- Remember study, long fantasy novels and the comfort of academic challenge. -> world_before
  - Backstory: Scholar
  - Hidden bonus: truth / reading / pattern checks.
- Remember making things with your hands, shaping meaning into substance. -> world_before
  - Backstory: Creative
  - Hidden bonus: empathy / interpretation / unusual-soul checks.
- Remember exhilarating motion, competition and camaraderie, tight air in your chest. -> world_before
  - Backstory: Sportsman
  - Hidden bonus: reflex / endurance / pressure checks.
- Remember innate strength, determination and the desire to change your exterior capabilities. -> world_before
  - Backstory: Strength
  - Hidden bonus: force / resistance / combat checks.
---

## Scene: world_before

- Art: Grief
- Purpose: Define the threshold and the Gates before mechanics begin.
### Display Title

- The Place Between
### Text

The place before the Gates is not Heaven. Neither is it Hell. Though some in the queue have clearly brought their own.

It is a border office built on grief. A court with no roof. A harbour where every ship has already sunk.

Souls now wait in a seemingly endless line that bends as it twists into far off mist. Some shapes are nearly human. Some have forgotten their shape. One is nothing but a wedding veil filled with moths. Another is clearly a soldier, yet made from ash, holding his own crumbling jaw in both hands so he can speak when called.

Some carry offerings.

Coins from closed eyes. Rings from clenched fingers. Locks of hair tied in ribbon. Teeth. Knives.  Ornate daggers. Promises folded into little paper scrolls.

Tokens.  They are Tokens for the dead.

You understand the word before anyone need teach it to you.

The Gates shudder and pulse.

A crack of gold widens above the arch, then seals itself like a wound that need not bleed.

### Choices

- Stand and face the line of Souls. -> sebastien_arrives
- Attempt to push the Gates open with both hands. -> failure_gate
  - Effects: Health -1, Gate Stability -0
  - Failure text: The Gates open for no man or being's hands. They open for judgement. You learn this a little too late.
  - [The scene repeats, this time without the option to push the Gates]
---

## Scene: sebastien_arrives

- Art: Sebastien
- Purpose: Introduce Sebastien as dry, elegant, and almost cruel.  But useful.
### Display Title

- Sebastien
### Text

A man steps out of the mist carrying a ledger bound in dark weathered leather.

He is slender, immaculate and dressed for a quirky funeral. His skin is black. His smile seems luminously white.

"Good," he says, as if you have arrived only mildly late. "You are standing. That already places you above several of your predecessors."

You try to ask who he is, but your mouth fumbles upon the attempt.

He bows with the smallest possible amount of respect.

"Sebastien. Steward of this threshold. Clerk of impossible cases. Witness to poor decisions. And, for the foreseeable future, your best chance of remaining useful."

He opens the ledger. The pages are blank until he looks at them.

"The contract has been accepted. The role is filled. The queue is restless. Try not to disappoint the dead."

### Choices

- Ask what a Gatekeeper does. -> sebastien_rules
- Ask why your name evades you. -> sebastien_name
- Ask him to open the Gates for you. -> failure_gate
  - Effects: Gate Stability -0, Health -1.
  - Failure text: Sebastien's face remains resolute. Almost. "That," he says, "may be how your world ends one day. But alas, no."
---

## Scene: sebastien_name

- Purpose: Explain the missing Living name without revealing divinity.
### Display Title

- A Useful Absence
### Text

"My name," you say. Or try to.

The missing word scrapes against your teeth.

Sebastien dips his pen into an ink bottle that contains no ink. "A Living name is an anchor. Useful for birthdays, debts, love letters, petty grudges. Quite dangerous here."

He turns the ledger toward you. Where your name should be, the page has burned clean through.

"If the dead know who you were, they will tug at you. If the Living know what you are, they will pray at you. Both are tedious. Both are fatal in quantity."

He closes the ledger.

"For now, you are the office. The office is you."

The Gates groan behind him.

"And the office has work."

### Choices

- Ask what the work requires. -> sebastien_rules
- Approach the first petitioners. -> first_queue
---

## Scene: sebastien_rules

- Purpose: Teach the judgement loop in-world.
### Display Title

- The Rules of Passing
### Text

Sebastien walks beside you without seeming to move.

"A Soul comes forward. You hear it. You weigh it. You pass it, hold it, or refuse it."

He lifts one gloved finger.

"Passing a Soul feeds the Gates. Some Souls are little more than candle-smoke. Others are bonfires pretending to be people. The stronger the Soul, the greater the power you draw."

A second finger.

"Tokens are offerings. Funeral coins, relics, memories, bribes, apologies, lies with polish on them. Take them when you must. Rely on them and you will become the sort of thing that takes them."

A third.

"The dead can lie."

The Gates tremble again. Something knocks from the far side. Not politely.

Sebastien glances at the crack of gold above the arch.

"And when the restless press against the threshold, you may spend Souls to bind, steady, seal, or cast away. If you have none, you may use your body. I do not recommend making that a habit."

### Choice

- Approach the first petitioners. -> first_queue
---

## Scene: first_queue

- Purpose: Present three petitioners. The player judges two before the incursion.
### Display Title

- The First Three
### Text

Sebastien taps the ledger. Three names bleed through the page.

The first Soul is a woman in a river-soaked dress. Her hair clings to her cheeks in black ropes. She holds one copper coin so tightly it has cut her palm.

"Mara Vale," says Sebastien. "No formal offering declared."

The second is a nobleman in a burial coat stitched with silver. Five polished funeral coins float around his head like little moons.

"Lord Edric Vane. Considerable offering declared. Considerable unpleasantness suspected."

The third is small and still. A porcelain mask covers its face. No mouth. No breath. Its shadow points away from the Gates, back toward the Living world.

Sebastien's pen pauses.

"Unnamed."

For the first time, his smile thins.

"Carefully, then."

### Choices

- Hear Mara Vale, the river-woman. -> mara_first_words
- Hear Lord Edric Vane, the coin-bearer. -> edric_first_words
- Hear the masked Soul. -> mask_first_words
## Mara Branch

---

## Scene: mara_first_words

- Purpose: Ordinary, emotional, grounded Soul.
#### Display Title

- Mara Vale
#### Text

Mara steps forward and leaves wet footprints on the black glass.

"I don't have much," she says. Her voice is river-cold, but human. Painfully human. "I know there's meant to be a toll. My mother always said there was a toll."

She opens her hand.

One copper coin. Bent. Green at the edges.

"It's not for me," she says quickly. "It's for my boy, when he comes. If he comes. If the river-"

Her face folds around the thought.

Behind her, the queue shifts. Some Souls look away. Others stare at the coin.

Sebastien murmurs, "Sentiment often disguises value. Value often disguises rot. Ask better questions."

#### Choices

- Ask about the child. -> mara_child
- Ask what the river took. -> mara_river
- Demand a Token toll. -> mara_toll
---

## Scene: mara_child

#### Display Title

- The Coin for the Boy
#### Text

"My son is six," Mara says.

Then she frowns.

"Was six? Is six? Time feels wrong here."

The coin trembles in her palm.

"He was on the bank when the flood came. I pushed him up into the willow. I think he climbed. I think he lived. I need him to have the coin. Children should not arrive empty-handed."

The Gates listen.

You feel them listening.

Not judging. Not yet.

Waiting for you to become the judgement.

#### Final Judgement Choices

- Pass her and let her keep the coin. -> after_judgement_router
  - Effects: Souls +1, Mercy shift.
  - Result text: Mara passes through with the coin still clenched in her hand. The Gates open gently. For one breath, they do not seem wounded at all.
- Take the coin as toll, then pass her. -> after_judgement_router
  - Effects: Souls +1, Tokens +1, Wrath/transactional shift.
  - Result text: Mara gives up the coin without protest. That makes it worse. The Gates accept her, but the copper stays warm in your palm long after she is gone.
- Keep her in Purgatory until the child is safe. -> after_judgement_router
  - Effects: Health -1, Mercy shift.
  - Result text: You refuse to pass her until the truth catches up. The decision hurts. Something resents delay. Mara bows as if you have given her a gift.
---

## Scene: mara_river

#### Display Title

- What the River Took
#### Text

"The river took the bridge first," Mara says. "Then the cart. Then the horse. Then my husband, because he would not let go of the horse."

She laughs once, terribly.

"I thought death would be louder."

Water runs from her sleeves and beads on the black glass. In each drop, you glimpse a different ending: a child climbing; a child falling; a mother lying to herself because the truth has no mercy.

Mara watches your face.

"You know, don't you? Or you could. You could make yourself know."

Sebastien says nothing.

#### Final Judgement Choices

- Pass her without payment. -> after_judgement_router
  - Effects: Souls +1, Mercy shift.
  - Result text: The Gates take her softly. The line exhales. No coin changes hands.
- Ask for a memory as toll. -> after_judgement_router
  - Effects: Souls +1, Tokens +1, transactional/Wrath shift.
  - Result text: Mara gives you the memory of her son's first laugh. It hardens into a small bright Token. You understand, immediately, why this office ruins people.
- Refuse her for arriving empty-handed. -> after_judgement_router
  - Effects: Health -2, Wrath shift.
  - Result text: The words leave your mouth like someone else placed them there. Mara does not curse you. She simply fades back into the queue, and the Gates ache in your bones.
---

## Scene: mara_toll

#### Display Title

- The Price of Passage
#### Text

"A toll," Mara repeats.

She looks at the copper coin, then closes her fist over it.

"I can give you something else."

Her eyes cloud. The river inside her rises.

"My boy's first laugh. I kept it. Don't ask me how. Mothers keep impossible things."

In her palm, beside the coin, a second object forms: a little bead of clear light, trembling with the sound of a child laughing in summer.

Sebastien's pen hovers.

"A memory-token," he says. "Accepted in most jurisdictions. Rarely returned."

#### Final Judgement Choices

- Refuse the memory and pass her. -> after_judgement_router
  - Effects: Souls +1, Mercy shift.
  - Result text: "Keep it," you tell her. Mara weeps once. The Gates open as if relieved.
- Take the memory as Token, then pass her. -> after_judgement_router
  - Effects: Souls +1, Tokens +1, Wrath/transactional shift.
  - Result text: The memory-token clicks into your hand. It is beautiful. That is the problem.
## Edric Branch

---

## Scene: edric_first_words

- Purpose: Token temptation and suspicion.
#### Display Title

- Lord Edric Vane
#### Text

Lord Edric Vane does not approach so much as arrive.

Even dead, he carries the habit of rooms making space for him.

"My condolences," he says, looking you over. "Newly appointed, I assume. These transitions are rarely graceful."

Five funeral coins orbit his head: silver-bright, polished to a mirror shine. Each coin bears his profile on one side and a set of scales on the other.

"I was assured," Edric says, "that proper offerings would be recognised."

Behind him, something small and bent-backed hisses.

Edric does not turn.

Sebastien's voice is mild. "Lord Vane funded three almshouses, two private prisons, and one war he neglected to attend."

Edric smiles.

"Administration is the art of necessary distance."

#### Choices

- Ask who polished the coins. -> edric_accounts
- Accept all five Tokens immediately. -> after_judgement_router
  - Effects: Souls +1, Tokens +5, Gate Stability -8, Wrath/transactional shift.
  - Result text: The coins come willingly. Too willingly. Edric passes smiling, and the Gates shiver as if swallowing a hook.
- Send him to Purgatory while you inspect the offering. -> edric_roll
---

## Scene: edric_roll

- D20 progression scene
#### Display Title

- Read the Coins
#### Text

You reach for the orbiting coins.

They spin faster.

In each polished face you glimpse a life Edric purchased distance from: a miner coughing black blood; a girl locked behind iron; a soldier freezing in a coat stamped with Vane silver; a judge looking down at a bribe and calling it evidence.

The fifth coin shows nothing.

Not emptiness.

A covered thing.

#### D20 Button

- Roll: Read the Coins
#### Success Result

The coins burn cold against your fingers.

Edric's accounts open.

Not all his sins are crimes. Not all his gifts were lies. That almost makes it worse.

You claim two coins that were never truly his.

  - Effects: Tokens +2, slight Mercy shift.
  - Route: edric_accounts
#### Failure Result

The coins flash like mirrors in sunlight.

For one horrible moment you see yourself as Edric sees you: untrained, unworthy, a clerk in stolen robes.

His contempt cuts deeper than it should.

  - Effects: Health -2, Wrath shift.
  - Route: edric_accounts
---

## Scene: edric_accounts

#### Display Title

- The Noble Account
#### Text

Edric adjusts his cuffs.

"Whatever you think you saw, it was context. I made hard decisions. The poor adore simple villains. They find systems less satisfying."

The five coins slow, waiting.

Now you see the truth of them. They are not payment. They are argument.

A Soul like Edric does not beg passage.

He tries to buy the shape of judgement.

#### Final Judgement Choices

- Make him pay three Tokens as toll. -> after_judgement_router
  - Effects: Souls +1, Tokens +3, slight Wrath/transactional shift.
  - Result text: Edric parts with three coins as if losing fingernails. The Gates accept him, but the threshold tastes of metal.
- Keep him in Purgatory. -> after_judgement_router
  - Effects: Health -2, Wrath/Judgement shift.
  - Result text: "You may wait," you tell him, "until distance teaches you closeness." The office punishes delay. Edric's smile finally dies.
- Pass him for free to deny his bargain. -> after_judgement_router
  - Effects: Souls +1, Mercy shift.
  - Result text: Edric passes without the dignity of a transaction. His coins fall uselessly to the glass and melt like frost.
## Mask Branch

---

## Scene: mask_first_words

- Purpose: Mystery and danger; first hint of the Living side touching the Gates.
#### Display Title

- The Masked Soul
#### Text

The masked Soul makes no sound when it comes forward.

Its porcelain face is smooth where the mouth should be. Two eyeholes open onto a dark too deep for such a small thing.

It carries no Token.

It casts the wrong shadow.

Every other Soul's shadow leans toward the Gates, pulled by whatever waits beyond. This one points behind it, back into the mist, back toward the Living world.

Sebastien closes his ledger.

That frightens you more than anything he has said.

"Some cases," he murmurs, "arrive before they are dead."

The mask turns toward you.

Inside your ring, something knocks back.

#### Choices

- Ask what it remembers. -> mask_memory
- Reach through the crack in its shadow. -> mask_roll
- Break the mask with your ring. -> after_judgement_router
  - Effects: Health -3, Gate Stability -30, Wrath shift.
  - Result text: The porcelain breaks. Something behind it screams with a Living throat. The Gates stagger. You survive, but the threshold does not forgive you.
---

## Scene: mask_memory

#### Display Title

- A Memory Without Breath
#### Text

"What do you remember?" you ask.

The mask tilts.

For a moment, nothing happens.

Then images bleed through the air: a white room; a hand gripping bedsheets; a candle blown out in reverse; a child's drawing of a door; a man's voice saying, "Not yet. Hold it open."

The Soul lifts one hand and presses it to the place where its mouth should be.

A crack appears in the porcelain.

Behind it, you do not hear the dead.

You hear breathing.

#### Choices

- Read it through the ring. -> mask_roll
- Hold it in Purgatory until you understand. -> after_judgement_router
  - Effects: slight Mercy shift.
  - Result text: You place the masked Soul aside. It does not resist. Its wrong shadow continues to point toward the Living, like an accusation.
- Pass it without understanding. -> after_judgement_router
  - Effects: Souls +2, Gate Stability -18, Wrath/risk shift.
  - Result text: The Gates accept the Soul with a sound like a lock turning in the wrong door. Power enters you. So does doubt.
---

## Scene: mask_roll

- D20 progression scene
#### Display Title

- Read the Mask
#### Text

You press the black ring to the porcelain.

Cold runs up your arm.

The mask is not hiding a face. It is hiding a distance.

Somewhere far away, in the Living world, a body is not finished dying.

Something has tied that half-death to your Gates.

#### D20 Button

- Roll: Read the Mask
#### Success Result

The ring flares.

You see the truth: a Living heartbeat caught inside a dead echo. Not a Soul. Not properly. A hook.

You tear it loose before it can sink deeper into the threshold.

  - Effects: Souls +2, Mercy shift.
  - Route: after_judgement_router
#### Failure Result

The mask opens inward.

For a moment you drown in someone else's unfinished death. Machines. Candle smoke. A hand drawing a Gate on paper again and again.

When you return, the porcelain is still watching you.

  - Effects: Health -3, Wrath shift.
  - Route: after_judgement_router
## After First Judgement

---

## Scene: after_first_judgement

- Purpose: The queue changes; do not return to the untouched first screen.
#### Display Title

- The Queue Learns You
#### Text

Your first judgement settles into the Gates.

You feel it become part of them.

Not history. Not memory. Mortar.

The queue changes immediately. Souls lean closer or shrink away. Tokens disappear into fists. Lies are rearranged behind dead eyes.

Sebastien makes a mark in the ledger.

"Well," he says. "You have now done the work badly enough to continue doing it."

The Gates groan.

Another petitioner steps forward from the mist.

#### Choices

- Hear one more Soul. -> second_queue
- Open the Gates a finger-width to prove command. -> failure_gate
  - Effects: Gate Stability -50
  - Failure text: You open the Gates by a finger-width. The dead make that enough.
## Second Queue

---

## Scene: second_queue

- Purpose: Player chooses one remaining unresolved petitioner. The third will not be judged in Chapter One.
#### Display Title

- One More Before the Tremor
#### Text

Only two may be judged before the threshold fails.

You do not know how you know this.

You know it the way a wound knows weather.

The remaining Souls wait in the mist, each carrying a different danger.

Sebastien does not advise you.

That may be mercy.

It may be curiosity.

#### Dynamic Choices

Show only unresolved petitioners:

- Hear Mara Vale. -> mara_first_words
- Hear Lord Edric Vane. -> edric_first_words
- Hear the masked Soul. -> mask_first_words
After the second petitioner resolves, route to after_second_judgement.

## After Second Judgement

---

## Scene: after_second_judgement

- Purpose: Force the incursion. No third judgement.
#### Display Title

- The Knock at the Wrong Side
#### Text

The third petitioner remains in the mist.

Unheard.

Unjudged.

Perhaps that matters. Perhaps everything does.

The Gates shake.

Not open. Not closed.

Tested.

A sound rolls across the black glass: thousands of coins dropped into an empty well. The queue recoils. Even Edric, if he remains, stops smiling. Even Mara, if she remains, clutches her coin with both hands. Even the masked thing, if it remains, turns toward the arch.

Something is trying the lock.

Sebastien's ledger snaps shut.

"Ah," he says. "The unpaid dead."

#### Choices

- Stand before the threshold. -> threshold_warning
- Step aside and let Sebastien handle it. -> failure_gate
  - Effects: Gate Stability -50
  - Failure text: Sebastien does not move. "I am a steward," he says. "Not a door."
## Single Checkpoint

---

## Scene: threshold_warning

- Purpose: One chapter checkpoint before undead incursion.
- Checkpoint: Yes
#### Display Title

- Checkpoint: The Threshold Holds
#### Text

You step before the Gates.

The ring tightens.

The cracks in the arch flare gold, then sickly green. Beyond the doors, shapes press against the seam: hands, mouths, crowns, antlers, blades, faces flattened by wanting.

Sebastien stands a careful distance behind you.

"The Gates are not walls," he says. "Walls keep things out. Gates decide."

The seam buckles.

"Decide quickly."

#### Choice

- Face the unpaid dead. -> incursion
## Undead Event

---

## Scene: incursion

- Purpose: First combat-like Gate event. Tests Souls, Health, Gate Stability.
#### Display Title

- The Unpaid Dead
#### Text

They come as one body made from many refusals.

A grief-beast of hollow coins and broken fingers. A knight with teeth growing through his armour. A woman drowned in black veils. Children with adult shadows. A crown with no king beneath it.

They batter the Gates from the far side, not because they deserve passage, but because they have learned the oldest lie:

Enough hunger can look like justice.

Your collected Souls burn inside the ring.

If you have enough power, you can bind them.

If you do not, the Gates will take the blow.

Or you will.

#### Choices

- Spend 2 Souls: Bind the Restless. -> after_attack
  - Requirement: Souls >= 2
  - Effects: Souls -2, Gate Stability +8.
  - Result text: You speak a word you do not know and the ring answers. The undead freeze mid-surge, pinned by their own names.
- Force them back yourself. -> force_gate_roll
- Let the Gate take the blow. -> after_attack
  - Effects: Gate Stability -28.
  - Result text: The Gates absorb the impact. The sound is not metal breaking. It is a thousand mourners inhaling at once.
- Offer your own name to the undead. -> failure_health
  - Effects: Health -10
  - Failure text: You reach for the missing name and something reaches back faster.
---

## Scene: force_gate_roll

- D20 progression scene
#### Display Title

- Force Them Back
#### Text

You plant both hands against the seam.

The Gates are cold.

Then hot.

Then neither.

The undead press from the far side, and through the crack you see them not as monsters but as need without shape. They do not want to kill you. They want through you.

The ring bites down to bone.

#### D20 Button

- Roll: Force Them Back
#### Success Result

You shove.

The Gates roar.

For one impossible second, the whole threshold moves with you. The unpaid dead are thrown back into their dark, shrieking like coins flung onto stone.

One torn Soul catches in your ring and burns clean.

  - Effects: Souls +1, Gate Stability +5.
  - Route: after_attack
#### Failure Result

You push.

They push harder.

A hand slips through the seam and closes around your wrist. It is made of every bargain ever refused.

You tear free, but the Gates buckle inward.

  - Effects: Health -3, Gate Stability -24.
  - Route: after_attack unless Health <= 0 or Gate Stability <= 0.
## Ending

---

## Scene: after_attack

- Purpose: Survived first incursion.
#### Display Title

- After the Breach
#### Text

Silence returns badly.

It does not settle. It limps.

The Gates remain closed, but new cracks vein the arch. The queue keeps its distance. Some Souls kneel. Some hide their offerings. Some look at you with hope, which is far heavier than fear.

Sebastien steps over a fallen Token. It rolls away from his shoe as if it knows better.

"Acceptable," he says.

You stare at him.

He sighs.

"Fine. Barely acceptable."

Something dark stains the threshold where the third petitioner stood.

Not blood.

Warmth.

#### Choices

- Ask what touched the Gate. -> living_hand
- Look for the petitioner left behind. -> living_hand
---

## Scene: living_hand

- Purpose: Cliffhanger. A Living handprint remains where a Soul stood.
#### Display Title

- The Living Mark
#### Text

On the black glass, pressed into the place where no Living hand should ever reach, is a print.

Five fingers.

A palm.

Warm at the edges.

The handprint steams in the cold before the Gates.

Sebastien does not write it down.

That is how you know he is afraid.

"The dead knock," he says quietly. "The Living pry."

Beyond the Gates, something laughs with your voice.

For the first time since the contract, you feel the shape of your missing name.

Not the word.

The wound it left behind.

#### Choice

- End Chapter One. -> trial_gate
---

## Scene: trial_gate

- Purpose: Free trial cliffhanger and monetisation gate.
#### Display Title

- End of Chapter One
#### Text

You have judged the dead.

You have taken offerings.

You have spent Souls.

You have held the Gates.

For now.

But something in the Living world has found the threshold, and the Gates remember being broken.

Sebastien opens the ledger again.

This time, there is writing on the next page before his pen touches it.

- Chapter Two: The Soul That Was Not Dead
#### Choices

- Unlock Chapter Two - GBP 0.99 -> mock purchase flow
- Replay Chapter One. -> title
## Game Over Scenes

---

## Scene: failure_health

- Art: Game Over art
#### Display Title

- The Gatekeeper Has Failed
#### Text

Your Health reaches nothing.

Not death exactly.

Death would be simpler.

Your connection to the threshold snaps, and the Spirit realm throws you out like a body from a wave. The ring goes cold. The queue screams. The Gates lose the shape of your judgement.

For one breath, there is no Gatekeeper.

One breath is enough.

- The Gates are Lost.
#### Choices

- Rewind to checkpoint.
- Available only if checkpoint has been reached and rewind remains.
- Restart Chapter One. -> title
---

## Scene: failure_gate

- Art: Game Over art
#### Display Title

- The Gates Are Lost
#### Text

Gate Stability reaches nothing.

The seam opens.

The dead do not pass through in a line. They flood. They claw through judgement, through mercy, through law, through you.

Tokens scatter like teeth.

Souls gutter out.

Sebastien's ledger burns from the inside, page by page, name by name.

At the threshold, the Gates stand open and empty.

A Gate without a Gatekeeper is not a doorway.

It is a wound.

- The Gatekeeper has failed.
#### Choices

- Rewind to checkpoint.
- Available only if checkpoint has been reached and rewind remains.
- Restart Chapter One. -> title
## Implementation Notes for Codex

### Scene Routing

The current prototype uses a router concept where after the first petitioner, the player is sent to after_first_judgement, then second_queue. After the second petitioner, route to after_second_judgement.

Codex should track resolved petitioners using flags:

resolved: {

mara: false,

edric: false,

mask: false

}

When a final judgement happens, set the relevant flag true and increase judgementsCompleted by 1.

If judgementsCompleted === 1, route to after_first_judgement.

If judgementsCompleted === 2, route to after_second_judgement.

### Backstory Modifiers

Backstory should remain subtle. Do not show it like a class system.

Suggested hidden bonuses:

Scholar: +2 on truth / reading / pattern checks

Creative: +2 on empathy / unusual interpretation checks

Sportsman: +2 on reflex / endurance / pressure checks

Strong: +2 on force / resistance / combat checks

These can affect roll outcomes quietly, with the result text saying something like:

"Some old instinct helps you read the pattern."

"Your body remembers how not to fall."

"A maker's eye catches what the mask is not showing."

### D20 Result Presentation

Avoid showing raw DC maths to the player.

Show:

The D20 result

A short phrase such as "Success", "Failure", "Narrow Success", or "Costly Failure"

Narrative consequence

Example:

You rolled 16. Success. The coin burns cold, and Edric's accounts open.

### Moral Alignment

Use Mercy  Wrath as the visible gauge.

Do not make Mercy always good or Wrath always bad.

Some Wrath choices should be necessary. Some Mercy choices should be dangerous.

### Tone Guardrails

Avoid generic phrasing such as:

"You enter the chamber."

"A mysterious figure appears."

"You feel a strange power."

"The enemy attacks."

Prefer specific, tactile phrasing:

"The Gates breathe like something asleep in pain."

"The coins orbit his head like little moons."

"The queue learns you."

"A Gate without a Gatekeeper is not a doorway. It is a wound."
