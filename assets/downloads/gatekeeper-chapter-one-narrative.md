# The Gatekeeper: Chapter One Narrative

## Merge Contract

The latest supplied Word source is authoritative for deliberate prose, titles, choices, routes, effects, and bold/italic emphasis. This Markdown file mirrors that revision without publishing the Word file or its embedded metadata. The rules below remain authoritative unless a later Word revision explicitly replaces an engine rule.

## Protected Engine Rules

- Preserve bold and italic formatting found inside Word sections labelled `Text`.
- Health starts at 10/10; accepting the contract reduces it to 5/10. Gate Stability starts at 50%.
- Show consequence feedback above the new scene prose and sequence audiovisual feedback as Souls, Tokens, Health, then Gate Stability.
- D20 checks use the persistent D20 control and show the rolled number plus Success or Failure, never visible DC arithmetic.
- Display every resource-bearing choice with `(Cost: X Resource)` and apply its cost exactly once.
- Use no more than four visible choices per scene.
- Present three initial petitioners, judge only two, then end Chapter One on the unpaid-dead incursion cliffhanger.
- Lord Edric is Chapter One's principal fight. The chapter's sole checkpoint is created when he transforms.
- Rewind and Restart appear on Game Over screens, not during ordinary play. Rewind returns to the Edric checkpoint when it exists and remains unused.
- A non-fatal tried choice returns to its preceding scene, removes only that choice, and causes Game Over only when Health or Gate Stability reaches 0 or the authored route is explicitly doomed.
- Mercy/Wrath uses seven bands: Saint, Benevolent, Merciful, Balanced, Wrathful, Ruthless, and Demon.
- Chapter scoring appears only after successful completion and displays Health, Gate Stability, Souls, Tokens, unused Rewinds, Judgement Rank, total points, and an S/A/B/C grade.
- The S/A/B/C grade measures survival and resource control. Mercy/Wrath remains a separate Judgement Rank.

## Latest Word Draft

**THE GATEKEEPER**

**Roll for Judgement**

*Chapter One: The New Gatekeeper — Reworked Narrative Draft*

Editable narrative draft for Codex conversion into gatekeeper-story.js.

This version keeps the current prototype structure, but rewrites the chapter so it feels less like placeholder fantasy and more like **The Gatekeeper / Deathmancer**: judgement, living/dead thresholds, offerings, Souls, Tokens, wounded Gates, Sebastien’s dry efficacy, and the slow horror of inheriting a role whose true scale is not yet understood.

## Design Notes Preserved

- The player starts at Health 10/10.
- Pressing Accept the contract causes the skull pain and drops Health to 5/10.
- Gate Stability starts at 50%.
- Souls and Tokens begin at 0.
- The opening is slower and more novel-like before the first judgement.
- The player chooses one of four light-touch backstory contexts.
- These are not classes and should only provide subtle hidden help on checks.
- The first judgement presents three petitioners, but only two are judged before the undead event.
- After two petitioners, the undead/Gate attack event is forced.
- There is one checkpoint in Chapter One, immediately before the undead event.
- Rewind is disabled before that checkpoint and can be used once after reaching it.
- D20 results should show the rolled number and narrative impact, not visible DC maths.
## Starting State

- Health: 10 / 10
- Gate Stability: 50%
- Souls: 0
- Tokens: 0
- Mercy/Wrath Alignment: Balanced
- Rewind: 1, usable only after checkpoint
# Scene: chapter_one

**Art:** Title art

**Purpose:** Begin the game, displaying Chapter One.

## Display Title

- Chapter One
## Text

- The Gates do not open for the living.
- Tonight, they open for you.
## Choice

- Begin As The New Gatekeeper. → title
# Scene: title

**Art:** Title art

**Purpose:** Establish the contract premise, the vacancy and the dubiousness of consent.

## Display Title

- The Contract
## Text

There is a table sitting elevated in a vast chasm of darkness, illuminated only by a subtle ethereal light.

Not a room, or a cave. Not anywhere a table has any right to be, you suppose.

All you can make out is the table. Black onyx wood. One chair with golden inlays set against ashen black wood. A candle hangs in the air above the table, illuminating its contents...a contract on parchment waits in the centre.

The words appear to shift and distort as you begin to read them.

**Vacancy: immediate. Tenure: indefinite. Benefits: unlimited. Consequences: unimaginable.**

The last word is written in an angry font that sends a shiver down your back. Beside the signature line, you now make out, rests a single golden bullet.  How odd. It is plain, heavy and somehow warm.  Like it’s recently discharged.

A voice speaks from afar in the darkness.

“Do take your time,” it says.  *He says?*  It’s a deep, masculine voice. “The dead are famously patient. Right up until they are not.”

## Choice

- Accept the contract. → contract_pain
  - Effects: Health -5
  - Narrative note: an intense pain emanating from deep in your skull. A blinding rupture. Your life force feels writhed apart from its corporeal body.
# Scene: contract_pain

**Art:** Grief

**Purpose:** The binding. The player forgets their name and chooses a light-touch backstory echo.

## Display Title

- A Name Left Behind
## Text

The bullet flies towards your skull in an instant.

Pain blooms unimaginably behind your right eye.

It’s not a wound in the traditional sense. It’s a signature. Like a feeling of deja vu, accompanied by intense pain that feels tied to your psyche.

Its memory burns through bone, vision, thought...and memories. Everything that once answered when the world called out your name is lost.

You regain conscious thought, kneeling on black glass beneath the table.

Ahead of you in starkest contract to the black void is a towering set of vibrant Gates.  The Gates.

They are too vast for accompanying architecture. Two ancient doors of bone-white metals and pale stone, stitched with cracks of gold and pulsating light. They breathe like something alive.

The voice speaks again:

“You are not where the Living should stand.”

“You are not yet among the Dead.”

"Your name is of no consequence.”

"You are the new Gatekeeper.”

## Choices

- Remember study, long fantasy novels and the comfort of academic challenge. → world_before
  - Backstory: Scholar
  - Hidden bonus: truth / reading / pattern checks.
- Remember making things with your hands, shaping meaning into substance. → world_before
  - Backstory: Creative
  - Hidden bonus: empathy / interpretation / unusual-soul checks.
- Remember exhilarating motion, competition and camaraderie, tight air in your chest. → world_before
  - Backstory: Sportsman
  - Hidden bonus: reflex / endurance / pressure checks.
- Remember innate strength, determination and the desire to change your exterior capabilities. → world_before
  - Backstory: Strength
  - Hidden bonus: force / resistance / combat checks.
# Scene: world_before

**Art:** Grief

**Purpose:** Define the threshold and the Gates before mechanics begin.

## Display Title

- The Place Between
## Text

The place before the Gates is not Heaven. Neither is it Hell. Though some in the queue have clearly brought their own.

It is a border office built on grief. A court with no roof. A harbour where every ship has already sunk.

Souls now wait in a seemingly endless line that bends as it twists into far off mist. Some shapes are nearly human. Some have forgotten their shape. One is nothing but a wedding veil filled with moths. Another, a soldier made of ash, holding his crumbling jaw in both hands so he can speak when called.

Some carry offerings.

Coins from closed eyes. Rings from clenched fingers. Locks of hair tied in ribbon. Teeth. Knives.  Ornate daggers. Promises folded into little paper notes.

Tokens.

You understand the word before anyone need teach it to you.

The Gates shudder and pulse.

A crack of gold widens above the arch, then seals itself like a wound.

## Choices

- Stand and face the line of Souls. → sebastien_arrives
- Attempt to push the Gates open with both hands. → world_before
  - Effects: Health -1, Gate Stability -0
  - Failure text: The Gates open for no man or being’s hands. They open for judgement. You learn this a little too late.
  - Follow-up:
  - Re-enter world_before with [attempt to push the Gates] choice removed. Do not route to Game Over unless Health reaches 0.
# Scene: sebastien_arrives

**Art:** Sebastien

**Purpose:** Introduce Sebastien as dry, elegant, and almost cruel.  But useful.

## Display Title

- Sebastien
## Text

A man steps out of the mist carrying a ledger bound in dark weathered leather.

He is slender, immaculate and dressed for a quirky funeral. His skin is black. His smile luminously white.

“Good,” he says, as if you have arrived only mildly late. “You are standing. That already places you above several of your predecessors.”

You try to ask who he is, but your mouth fumbles upon the attempt.

He bows with the smallest possible amount of respect.

“Sebastien. Steward of this threshold. Clerk of impossible cases. Witness to poor decisions. And, for the foreseeable future, your best chance of remaining useful.”

He opens the ledger. The pages are blank until he looks at them.

“The contract now accepted. The role is filled. The queue is restless. Try not to disappoint the dead.”

## Choices

- Ask what a Gatekeeper does. → sebastien_rules
- Ask why your name evades you. → sebastien_name
  - Effects: Gate Stability –5, Health –0.
- Ask him to open the Gates for you. → sebastien_arrives
  - Effects: Gate Stability –5, Health –1.
  - Failure text: Sebastien’s face remains resolute. Almost. “That,” he says, “may be how your world ends one day. But alas, no.”
  - Follow-up: Re-enter sebastien_arrives with [attempt to push the Gates] choice removed. Do not route to Game Over unless Health reaches 0.
# Scene: sebastien_name

**Purpose:** Explain the missing Living name without revealing divinity.

## Display Title

- An Absence of Self
## Text

“My name,” you say. Or try to.

The missing word remains at the tip of your tongue.

Sebastien dips his pen into an ink bottle that seems to contain no obvious ink. “A Living name is an anchor to that world. Useful for birthdays, debts and love letters. Quite meaningless here.”

He turns the ledger toward you. Where your name should be, the page is empty.

“If the dead know who you were, they will try to corrupt and influence you. If the Living know what you are, they will pray at you. Both are tedious and of little consequence.”

He closes the ledger.

“For now, you are The Gatekeeper.”

The Gates beckon behind him.

“And you have work to do.”

## Choices

- Ask what the work requires. → sebastien_rules
# Scene: sebastien_rules

**Purpose:** Teach the judgement loop in-world.

## Display Title

- The Rules of Judgement
## Text

Sebastien walks beside you now.

“A Soul comes forward. You hear it. You weigh it. You pass it, hold it, or refuse it.”

He lifts one finger with a truly striking ornate ruby and gold ring.

“Passing a Soul feeds your power here at the Gates. You’ll need that strength to face the challenges that yet await you. Some Souls are little more than smoke from a candle extinguished. Others are bonfires masquerading as people. The stronger the Soul, the greater the power you can draw.”

A second finger raised to the air.

“Tokens are offerings. Old world coins, relics, memories, bribes. Often lies with polish on them. Take them when you must. They have their uses as a form of currency. Rely on them however and you will become the sort of thing that craves them.”

A third finger now.

“The dead can, will and do lie. Adjudicate the worth of the Soul.”

The Gates tremble now. Something imperceptible knocks at it. Not politely.

Sebastien glances at the crack of gold stretching above the arch.

“If the restless press too hard against the magic of the threshold, you may spend your power from Souls to bind, steady or seal them. If you have none, you may use your body. I do not recommend making that a habit.

There is also a rather odd little fellow in these parts. He is a merchant of this place. He was denied passage beyond the Gates and now spends his time amassing Tokens to exchange for Tokens.  An attempt to make his time here meaningful. He can be a useful irritation.”

## Choice

- Approach the first petitioners. → first_queue
# Scene: first_queue

**Purpose:** Present three petitioners. The player judges two before the incursion.

## Display Title

- The Three
## Text

Sebastien taps the ledger. Three names seep through the pages like the mark of soot on clean sheets.

The first Soul is a woman in a river-soaked dirty dress.  It’s white and torn in places like she’s been searching for something in thorny shrubbery. Her dark wet hair clings to her cheeks in black ropes. She holds one copper coin so tightly, that you can see it has cut her palm.  Her finger nails are dirty, with dried blood that seems unconnected to the coin.

“Mara Vale,” says Sebastien. “No formal offering declared.”  The last, said indifferently.

The second is clearly a nobleman in a burial coat stitched with gold. Five polished funeral coins float around his head like little moons.  His stature is tall, his frame a little sickly despite his clear abundances in wealth.

“Lord Edric Beaumont. Considerable offering declared. Considerable unpleasantness expected.”

The third is small and still. A porcelain mask covers its face. No mouth. No breath. Its shadow points away from the Gates, back toward the Living world.

Sebastien’s pen pauses.

“Unnamed.”

For the first time, he raises an eyebrow and breaks an ounce of composure.

“Careful.”

## Choices

- Hear Lord Edric Beaumont, the coin-bearer. → edric_first_words
- Hear Mara Vale, the river-woman. → mara_first_words
- Hear the masked Soul. → mask_first_words
# Mara Branch

## Scene: mara_first_words

**Purpose:** Ordinary, emotional, grounded Soul.

### Display Title

- Mara Vale
### Text

Mara steps forward and leaves wet footprints on the black glass underfoot.  She is bare foot.

“I don’t have much,” her voice trembles. Her tone is ice-cold, but not in an emotionally cool sense. It aches in a painfully human way. “I know there’s meant to be a toll”, she says. “My step-mother always said there would be a toll.”

She opens her hand.

One copper coin. Bent. Green at the edges.  Dark dried-on crimson coats the centre.

“It’s not for me,” she says quickly. “It’s for my boy, when he comes. If he comes. If the river...” she trails off as her facial expression folds around the thought.

Behind her, the queue shifts. Some Souls look away. Others stare ravenously at the coin.

Sebastien murmurs, “Sentiment often disguises value. Value often disguises rot.”

### Choices

- Ask about the child. → mara_child
- Ask about the river. → mara_river
- Demand the coin as Token. → mara_toll
  - Effects: Tokens +0, Mercy shift to Wrath +30.
## Scene: mara_child

### Display Title

- The Child With No Coin
### Text

“My son, Jeremiah. He is five,” Mara says as she looks off longingly.

“He has beautiful light chestnut hair, of medium length.  It’s disheveled, as he won’t ever sit long enough for a cut.”

The coin trembles in her palm now as her voice begins to break.

“He was on the bank when the flood came and swept through our village. I pushed him up into the base of a willow tree. I think he climbed, but he began to slip as the current took me away. I need him to have this coin. Children should not arrive empty-handed. Though I hope not for a long time yet.”

Sebastien raised an eyebrow again, with a hushed note, saying “Time has little consequence here.  ‘Yesterday’ could be a millennia ago.”.  He let the point drift with her thoughts.

It feels as though the Gates are listening.  As if their presence bears over the top of the three of you.  Their metaphorical weight casting a shadow over your actions.

Though not judging.  That’s your task as Gatekeeper.

### Final Judgement Choices

- Pass her and let her keep the coin. → after_judgement_router
  - Effects: Souls +2, Mercy shift.
  - Result text: Mara passes through with the coin still clenched in her hand. The Gates open gently. For one breath, they do not seem wounded at all.
- Trick her into giving you the coin, then pass her. → after_judgement_router
  - Effects: Souls +2 Tokens +1, Significant Wrath/transactional shift.
  - Result text: Mara gives up the coin without protest. She understands and trusts your words that you’ll keep it safe for her son. The Gates accept her, but the copper stays warm in your palm long after she is gone.
- Keep her in Purgatory until the child is safe. → after_judgement_router
  - Effects: Mercy shift.
  - Result text: You suggest that she should wait until the truth catches up. The decision hurts. Something resents delay. Mara bows as if you have given her a gift.
- Ask what she remembers about the flood → mara_river
  - Effects: None
## Scene: mara_river

### Display Title

- What the River Took
### Text

“The river took the bridge first,” Mara says. “Then the cart. Then our horse. Then my husband, because he would not let go of the horse.”

Water runs from her sleeves and beads on the black glass. In each drop, you glimpse a different ending: a child climbing; a child falling into the current; a mother lying to herself because the truth has no mercy.

Mara watches your face.

“You know, don’t you? Or you could. You could make yourself know.”

Sebastien suggests that you could expend a Soul to grant yourself the power to do so.

### Final Judgement Choices

- Pass her without payment. → after_judgement_router
  - Effects: Souls +2, Health –1. Neutral shift.
  - Result text: The Gates take her softly but her scream bellows and cuts through you, as she demands you grant her the peace and knowledge she seeks. The line exhales. No coin changes hands.
- Pass her with payment. → after_judgement_router
  - Effects: Souls +2, Health –2, Token +1. Wrath shift.
  - Result text: The Gates take her with force but not before her scream bellows and cuts through you like ice. She demands you grant her the knowledge she seeks or at least keep the coin for her son. The last is said as she vanishes from sight.
- Ask for a memory to pay the toll of this knowledge (Cost: 1 Soul). → mara_river2
  - Requirement: Souls >= 1
  - Effects: Souls –1, Tokens +1, transactional/Mercy shift.
  - Result text: Mara grants you the memory of her son grasping to cling onto a low hanging branch as she swept away. You relive the moment like you were there. It hardens into a small stormy Token. You understand, immediately, the difficulty of this office.
- Refuse her for the time being. → after_judgement_router
  - Effects: Health +1, Mercy shift.
  - Result text: The decide she need not pass at this time and should wait in Purgatory for her son, to learn his fate in time.  To your surprise somewhat, she does not seem upset by this. She imparts a cold wet kiss on your cheek as she fades back into the queue.
## Scene: mara_river2

### Display Title

- The Price of Knowledge
### Text

Sebastien turns to you, nods and closes his eyes.

You feel warmth pass over your body as the strength imbued by the last Soul courses through your mind and into your eyes.  They flash bright and then like the trace that remains after staring at the sun directly, you see the truth.

You see a young, bright-eyed and wily looking scrap of a lad scaling a tree with ease, despite his size and frame.  He’s strong.  His foot slips with the slick of the wet branch in stormy weather, but he regains it momentarily.  In the next instance, you see a panic-stricken dark-haired woman – Mara – as her head sinks underneath the strong flowing flash of waves.  The boy cries out a heart-wrenching cry of ‘Mamma’, but his grip remains true.

The flickering memory speeds quicker now as you see him standing telling tales of his mother to crowds at a celebratory event – a wedding, perhaps.  Later, on his deathbed surrounded by loved ones – children of his own.

### Choices

- Continue. → mara_river3
## Scene: mara_river3

### Display Title

- Fated Reunion
### Text

At this moment, Sebastien’s ledger book flicks open to a new page as a name emblazons in rich golden hue.

Jeremiah Vale

A proud man with grey hair, strong despite his age, emerges from the queue.  He walks up to you both.

Mara turns.

For a moment she does not understand what she is seeing. Then she breaks.

“My boy,” she exclaims.

Jeremiah catches her in an embrace as if she weighs nothing at all.

The Gates pulse above you. Not angry or kind, but interested. They will remember this exchange.

Mara’s tears pour from her like a torrent. She is grateful and thanks you profusely.

### Final Judgement Choices

- Accept their Souls past the Gates. → after_judgement_router
  - Effects: Souls +5, Token +1, Strong Mercy shift.
  - Result text: “Keep it,” she tells you.  I am abundant in riches of love. Mara weeps once more, as Jeremiah places an arm round her shoulder. They walk through The Gates with purpose, as a light swells from beyond.
## Scene: mara_toll

### Display Title

- The Price of Passage
### Text

“A toll,” Mara repeats.

She looks at the copper coin, then closes her fist over it.

“My boy needs this. I can give you something else.”

Her eyes cloud. The river inside her rises.

“My Jeremiah’s first laugh. I kept it. Don’t ask me how. Mothers keep impossible things and never let go. I love this memory dearly, but if it will keep the coin payment for my son, I am willing.”

In her palm, beside the coin, a second object forms: a little bead of clear light, trembling with the sound of a child laughing in summer.

Sebastien’s pen hovers.

“A memory-token,” he says. “Accepted as a form of payment in most Circles.”

### Final Judgement Choices

- Refuse the memory, insist upon the coin and pass her. → after_judgement_router
  - Effects: Souls +2, Token +1, Health –2, Strong Wrath shift.
  - Result text: The Gates take her with force, but not before her scream bellows and cuts through you like ice. She demands you keep the coin for her son. The last is said as she vanishes from sight.
- Take the memory as Token, then pass her. → after_judgement_router
  - Effects: Souls +2, Tokens +3, Minor Wrath/transactional shift.
  - Result text: The memory-token clicks into your hand. It is beautiful. That is the problem. Mara is accepted beyond the Gates.
- Refuse the memory, refuse the coin and pass her. → after_judgement_router
  - Effects: Souls +2, Strong Mercy shift.
  - Result text: “Keep it,” you tell her. Mara weeps and exclaims her love for her son and her gratitude towards you.  She begs you to look out for him, as she vanishes beyond The Gates.
# Edric Branch

## Scene: edric_first_words

**Purpose:** Token temptation and suspicion.

### Display Title

- Lord Edric Beaumont
### Text

Lord Edric Beaumont does not approach so much as arrive. Even dead, he carries the habit of rooms making space for him.

“My condolences,” he says, looking you over. You’re not exactly sure what he means by that. He’s the dead one...

Five bright gold funeral coins orbit his head, like little moons: polished to a mirror shine. Each coin bears his profile on one side and a set of scales on the other.

“I was assured,” Edric says, “that proper offerings would be recognised.”

Behind him, something small and bent-backed hisses.

Edric does not turn.

Sebastien’s voice is mild. “Lord Beaumont funded three orphanages, two private prisons and one war he neglected to attend.”

Edric snarls.

“Administration is an art and requires distance from lessers.”

### Choices

- Ask how he made his fortunes. → edric_fortune_roll
  - Requirement: Token>=1 OR D20 skill check: persuasion (DC12).  Success: → edric_fortune_roll; Failure: → edric_first_words.  If token route, (-1 Tokens).
- Accept all five Tokens immediately. → after_judgement_router
  - Effects: Souls –2 (if able, otherwise 0), Tokens +5, Gate Stability -20, Wrath/transactional shift.
  - Result text: The coins come willingly. Too willingly. Edric passes smiling, and the Gates shiver as if swallowing a hook.
- Ask to inspect the offering. → edric_coin_roll
## Scene: edric_fortune_roll

- D20 progression scene
### Display Title

- The Noble Account
### Text

“How did you make your fortune?” you ask.

Edric looks genuinely offended, and/or bemused. Not because the question is rude. Because he believes the answer should be unnecessary.

“Land,” he says. “Stewardship. Industry. Prudent marriages. Investments made where weaker men would see only inconvenience.”

One of the coins turns in its orbit. His profile gleams. The scales on the reverse remain hidden.

Sebastien makes a small note in the ledger.

“The dead are wonderfully concise when lying,” he interrupts.

Edric’s eyes cut toward him.

You focus on the coins. On the gold thread sewn through his burial coat. On the way the little bent-backed Soul behind him flinches whenever he breathes.

### D20 Button

- Roll: Follow the Money
  - Recommended hidden modifiers: Scholar +2 for account/pattern reading. No Creative bonus here.
### Success Result (DC: 14)

## Scene: edric_fortune_roll_success

**Art:** Edric Boy

The coins slow. Not enough to stop. Enough to show you what they have been hiding.

You see kitchens first. Not halls. Not courts. Kitchens.

A boy with dirt under his nails carries a bucket through a stone passage while lords laugh overhead. Lowborn. Barely lettered. Quick with his hands. Quicker with anything smaller than him.

Rats scatter under the shelves.

He catches them because that is his work. Then he keeps some because that becomes his interest.

A cage. A knife. A little notebook filled with marks he cannot properly spell but understands perfectly. Which rat survives hunger. Which one turns on the others. Which one learns the maze if pain waits at the wrong turning.

Then a visitor arrives at the Earl’s house on political business. A pale gentleman who casts no proper reflection in the copper pans. The boy watches him from the kitchen door with great interest.

The visitor watches back.

He smiles, as if he has found a useful tool left unattended.

  - Effects: edricClues +1 (Hidden).
  - Route: edric_master_hint
### Failure Result

## Scene: edric_fortune_roll_fail

The coins flash like mirrors in sunlight.

For one horrible moment you see yourself as Edric sees you: untrained, unnamed, a Gatekeeper in stolen clothes.

His contempt cuts deeper than it should.

  - Effects: Gate Health -5.
  - Route: edric_surface_answer
## Scene: edric_surface_answer

### Display Title

- Polished Lies
### Text

Edric adjusts his cuffs.

“You see? Nothing but ordinary consequence. A fortune is structure. The weak resent structures because they are usually born or work beneath them.”

His coins resume their orbit. Bright. Perfect. Unhelpful.

Sebastien turns one page of the ledger, although you do not see him write.

“There are two ways to build a house,” he says. “Stone by stone, or body by body. House Beaumont has experience in both.”

### Choices

- Inspect one of the coins more closely. → edric_coin_roll
- Accept all five Tokens and pass him. → after_judgement_router
  - Effects: Souls –2 (if able), Tokens +5, Gate Stability -20, strong Wrath/transactional shift. Set resolved.edric = true.
  - Result text: The coins come to you like trained birds. Edric passes through smiling. The Gates close too slowly after him, as though something with teeth has caught in the seam.
- Hold him in Purgatory while you review his accounts. → edric_purgatory_warning
## Scene: edric_coin_roll

- D20 progression scene
### Display Title

- Read the Coins
### Text

You reach toward the nearest coin.

Edric does not move to stop you. That is almost enough to make you withdraw your hand.

“Careful,” Sebastien says. “Some offerings are not gifts. Some are unwanted promises.”

The coin turns, floating just above your outstretched hand. Edric’s profile on one side. Scales on the other.

### D20 Button

- Roll: Inspect the Offering
  - Recommended hidden modifiers: Scholar +2 for symbol/pattern reading. Creative +0 here.
### Success Result (DC 10)

The scales twitch imperceptively.  To some, at least.  But not to you.

For one blink, they are not scales at all. They are fangs. Two perfect white points biting down on the centre of the coin.

Then they are scales again.

The polished gold remembers blood. It remembers being placed on closed eyes. It remembers being taken back before the body cooled.

You look at the other four coins and understand they are not merely payment.

They are alibis.

  - Effects: edricClues +1 (hidden), Tokens +1, slight Judgement shift.
  - Route: edric_suspicion
### Failure Result

The coin reflects your face.

Not as you are. As Edric would prefer you to be: new, uncertain, hungry to be accepted by the dead.

Your fingers close around empty air. The coin has already moved on.

  - Effects: None.
  - Route: edric_suspicion
## Scene: edric_master_hint

### Display Title

- The Man Before the Title
**Art:** Edric Boy

### Text

The vision leaves a taste on your tongue like old iron and a scent in your nostrils like kitchen smoke.

Edric’s face remains composed, but the coins have begun to orbit faster. Faster resembling fear in the disguise of dignity.

“You were not born Beaumont,” you say.

The queue quiets. Edric’s mouth tightens.

“Names improve with use. Blood.  Blood, is a fickle thing.”

Sebastien’s pen scratches once across the page.

“Not an Elder,” he murmurs. “Important distinction. Elders are the beginnings of these things.” He lets the thought drift.

You see another shard of memory: the pale visitor standing over the rat-catcher boy in the kitchens, yet now as a young man. A hand under his chin with a cup of red crimson wine.

Then years folding over one another. Servant. Secretary. Agent. Landholder. Lord. The world forgets low birth quickly when money teaches it manners.

One final image tries to form.

A chamber. Edric kneeling. The same master behind him, but this time with a hand at Edric’s throat, almost tender.

“You were always better as an instrument,” the master says, “than a successor.”

The memory breaks before you can see the resolution.

### Choices

- Accuse him of wearing death as a disguise. → edric_reveal
- Inspect one of the coins. → edric_coin_roll
- Accept the offering anyway. → after_judgement_router
  - Effects: Souls –2 (if able), Tokens +5, Gate Stability -20, strong Wrath/transactional shift. Set resolved edric = true.
  - Result text: You take the payment and let the question die. Edric passes with a bow too shallow to be respect. The Gates seal behind him, but something in their gold veining darkens for a breath.
## Scene: edric_suspicion

### Display Title

- Suspicions
### Text

The five coins orbit Edric’s head like small obedient moons. Now you cannot stop seeing the wrongness in them. They shine too brightly. They’re not coins that want to be spent. They want to be accepted.

The bent-backed thing behind Edric hisses again. This time you hear words in it:

“Not dead enough.”

Edric turns at last, with his hand following behind him as a scathing whip akin to the flapping of a wing.

The little crooked Soul folds in on itself.

### Choices

- Refuse him entry permanently by casting him off. → edric_reveal
- Ask Sebastien what the ledger refuses to write. → edric_master_hint
  - Requirement: d20 dice roll (DC requirement: 18).  Scholar bonus +2 to dice roll. Success route → edric_master_hint, Fail route → edric_suspicion
- Accept the five Tokens and pass him. → after_judgement_router
  - Effects: Souls –2 (if able), Tokens +5, Gate Stability -20, strong Wrath/transactional shift. Set resolved.edric = true.
  - Result text: You accept the coins. Edric passes. For a moment, the Gates do not open onto light. They open onto a hungry dark visage that recognises him.
## Scene: edric_purgatory_warning

### Display Title

- Delayed Accounts
### Text

“You may wait,” you tell him.

Edric blinks in shock and disdain.

It is not pure outrage yet. Outrage requires belief that there is order in things. This is something deeper: the shock of a law applying to someone unfamiliar with the concept.

“I have paid,” he begins.

“You have offered,” Sebastien corrects.

The Gates pulse. You feel that delay has a cost here.  But you are not ready to adjudicate yet without knowing more.

### Choices

- Spend 2 Tokens to hold him safely in Purgatory while you investigate. → edric_fortune_roll_success
  - Requirement: Tokens >= 2
  - Effects: Tokens -2, Gate Stability -5.
- Hold Edric in Purgatory against his will without payment. → edric_reveal
  - Effects: Health -1, Gate Stability -5.
- Give up the delay and accept his Tokens. → after_judgement_router
  - Effects: Souls -2, Tokens +5, Gate Stability -20, strong Wrath/transactional shift. Set resolved.edric = true.
  - Result text: The office is too new in your hands and you don’t wish to add strain to The Gates. The coins are yours. You’ll need them. The unintended wound to the Gates is also yours.
## Scene: edric_reveal

### Display Title

- A Noble Reveal
### Text

“You are not a Soul seeking judgement. You seek further power” you suggest.

The five coins stop dead in the air above his head.

Sebastien’s pen pauses, as he seems to hold his breath for what is to follow.

Edric smiles unpleasantly.

His lips draw back too far, revealing a pointed tooth.

“I have had many names,” Edric hisses. His voice arrives with another deeper voice underneath it. “Rat-boy. Lord. Monster. Survivor...”

He looks at the Gates as though they are his servant, slow to answer his beckoning call.

“Open these Gates for me boy”.  Said, not as a request.

The Gates remain unchanged and Edric’s eyes lock onto yours resolutely.

### Choices

- Call him by his true name (risky). → edric_redemption_roll
- Brace for a likely attack. → edric_transforms
- Spend 1 Soul: Bind his coins. → edric_bind_roll
  - Requirement: Souls >= 1.  Effect: Souls –1.
## Scene: edric_redemption_roll

- D20 progression scene
### Display Title

- The Name Beneath Beaumont
### Text

You do not know his first name. The ledger did not give it to you. Perhaps it never knew.

So you reach for the life you understand existed before the title instead.

The boy who learned too early that small things suffer quietly if no one important is listening.

“You were made into this,” you say. “But not all of it was made for you.”

Edric bares his teeth.

Sebastien’s voice is quiet now.

“A dangerous kindness. One almost never rewarded.”

### D20 Button

- Roll: Call out his Lowborn Name
  - Critical success requirement: A result of 20 is needed for redemption. If the player chose the backstory about making things with their hands, apply a +2 bonus to this roll only; a displayed total of 20 or more counts as the critical success.  If the player achieved edricClues +1 earlier, add that to the roll outcome.
### Critical Success Result (Requirement DC: 20)

For one impossible moment, Lord Edric Beaumont looks frightened.

Not of you. Not of the Gates.

Of being seen for who he really was, long since he had forgotten.

The coins fall from orbit and clatter on the glass floor. They no longer shine like payment. They darken like damning evidence.

“He chose me,” Edric says. The words come out broken.

“He said the world was a cage and only fools pitied the rats”. His mouth trembles around the fangs.

“I worshipped him and he cast me off to this place.”

The Gates appear to be listening.

  - Route: edric_redemption
### Non-Critical Result

Something in him almost hears you.

Almost is not enough.

His face folds into hunger. His coins burn with fury. The thing beneath it spreads its wings.

  - Effects: Health -1, Gate Stability -10.
  - Route: edric_transforms
## Scene: edric_redemption

### Display Title

- Purgatory for a Lord
### Text

Edric kneels.

The motion looks painful, as though no part of him has been designed for humility in a very long time.

“I do not ask to pass,” he says.

Sebastien’s eyebrows lifts so sharply it is as though they have dislodged from his face.

Edric looks at the five darkened coins, then at the little bent-backed Soul still cowering behind him.

“I ask for time to remember my misdeeds and the man I could have become before Him.”

The Gates answer with a low golden hue pulsating.

Not forgiveness. A sentence.

Purgatory becomes a narrow black door with no handle.

“How long?” Edric asks.

Sebastien consults the ledger.

“Until the word necessary no longer applies to you.”

Edric chuckles once. It sounds almost human.

### Final Judgement Choice

- Send Edric to Purgatory until absolution is achieved. → after_judgement_router
  - Effects: Souls +2, Tokens +5, Gate Stability +10, strong Mercy/Judgement boost. Set resolved.edric = true, edricRedeemed = true.
  - Result text: Edric steps into Purgatory without his coins. They vanish and become power in your hands. That power enters you, not taken from passage, but granted by judgement. Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates.
## Scene: edric_bind_roll

- D20 progression scene
### Display Title

- Bind the Coins
### Text

You expend the power accumulated from a Soul and command the coins to stop their dance.

The coins answer with pressure like a fist closing around your skull.

You resist. They are not loyal to Edric exactly. They are loyal to what Edric represents: payment without repentance.

### D20 Button

- Roll: Bind the Offering
### Success Result (Requirement: DC 2)

The five coins freeze in place.

Edric jerks painfully as though he has just lost a considerable element of his power. Whatever he truly is, that offering is part of its shape.

  - Effects: edricBound = true. EdricWounds +1.
  - Route: edric_transforms
### Failure Result

The coins turn edge-first and cut through your command.

One slices across your palm. Another rings against the Gates. Edric laughs, in a register dissimilar to what you heard before.

  - Effects: Gate Stability -5.
  - Route: edric_transforms
## Scene: edric_transforms

**Art: **Edric Transformed Alt

Purpose: First battle encounter. Tutorial combat against a transformed undead.

### Display Title

- Lord Beaumont Revealed
### Text

Edric’s body does not break. It opens.

His burial coat splits along seams that were never stitched by human hands. Purple-black cloth now stretches into ragged, black, torn-flesh wings. Gold thread crawls through the membrane like veins in old marble. His fingers lengthen into hooked claws. His face draws forward sickeningly into a narrow bat-like muzzle.

Blood falls from his mouth in frenzied drops.

The queue becomes alive without a whisper of sound.

Sebastien steps beside you, but not in front of you.

“Instruction first,” he says. “You are not a warrior. You are a custodian. Let your judgement teach him. I’ll grant you a little leftover power from your predecessor to help you on your way here.”

At this moment, a jolly little merchant appears from under Sebastien’s coat, or possibly from behind a fold in the floor. You are unsure. He is no taller than your ankle, round as a purse and wearing six different coloured scarves all at once as he rolls on by.

“Terrible time for business,” he says brightly. “Or, the best kind. Chuck me a Token or two for a potion, Gatekeeper. You don’t want to miss out...”

  - Combat note: Start Edric battle. Souls +2 at outset from Sebastien granting. Suggested hidden values: edricWounds = 0 (unless Edric_bind_roll was successful above). Edric is defeated at 2 Wounds, or immediately by a strong final success. If Health reaches 0, route to failure_health. If Gate Stability reaches 0, route to failure_gate.
### Choices

- Spend Souls to take action against him. → edric_elements
  - Requirement: Souls >= 1
- Roll aside and draw him toward the Gates light. → edric_dodge_roll
- Ask the little merchant for a potion. → edric_merchant
- Hold your ground. → edric_ground_roll
## Scene: edric_merchant

### Display Title

- The Little Merchant
### Text

The merchant produces three bottles from somewhere inside a sleeve far too small to contain even one of any substance.

One is red. One is blue. One is making a noise like bees arguing in a cupboard.

“Healing,” he says, pointing to the bottles. “Mostly. Terms are excellent. My terms. One Token for a sip. Two for the bottle. And if you can’t pay, we can setup a debt, [AHEM], I mean tab.”

Lord Edric beats his wings once. The mist from the queue tears backward.

“Quickly would be ideal” he says, a little panicked.

### Choices

- Spend 1 Token: drink from the bottle. → edric_battle_return
  - Requirement: Tokens >= 1
  - Effects: Tokens -1, Health +2.
- Spend 2 Tokens: drink the full bottle. → edric_battle_return
  - Requirement: Tokens >= 2
  - Effects: Tokens -2, Health +5.
- Spend 0 Tokens: drink from the bottle. → edric_battle_return
  - Requirement: none.
  - Effects: Tokens -0, Health +3. Merchantbound = true.
- Refuse the merchant and keep fighting. → edric_battle_return
  - Effects: none.
## Scene: edric_battle_return

### Display Title

- Lord Beaumont Fight
### Text

Edric circles overhead now above the black glass. The coins circle with him. Every beat of his wings creates a gust at your feet.

Sebastien calls over the wind, “Instruction number two: most monsters want your fear. Use it.”

### Choices

- Spend Souls to use the wind against him. → edric_elements
  - Requirement: Souls >= 1
- Draw his attention over to the light of the Gates. → edric_dodge_roll
- Use one of his coins against him. → edric_mirage
  - Requirement: Souls>=2 AND edricClues >= 1
## Scene: edric_elements

### Display Title

- Elemental Threshold
### Text

You surmise your options, using the Souls you have gathered. It’s not clear how it is you know how to do any of that you have accomplished to date. It just feels intuitive.

You look around for a means to control the wind Edric is summoning, but there’s little of substance to call upon, bar the line of dead, the Gates and you both standing there.

Sebastien’s voice cuts through the noise.

“Instruction number three: the form of power you choose for your Souls to take is up to you.  Typically, form and substance matters. Choose poorly and you may not live to regret it.”

You note that he used the word, ‘choose’.

### Choices

- Spend 1 Soul: Summon a tornado to pull him in. → edric_tornado
  - Requirement: Souls >= 1
- Spend 1 Soul: Summon lightning to strike him. → edric_lightning
  - Requirement: Souls >= 1
- Spend 2 Souls: Summon an undead mirage. → edric_mirage
  - Requirement: Souls >= 2
## Scene: edric_tornado

### Display Title

- It’s Getting a Little Windy in Here
### Text

You twist your hands as a tornado might and from them gusts of wind begin to stir.  It builds and multiplies in intensity voraciously as the newly formed tornado engulfs Lord Edric.

At first, it seems as though he can tolerate the increased wind currents, but before long his large splintered black wings begin to falter and bend backwards in a grotesque manner.

The wind is consuming him.

It sucks him into the central eye of the storm you have brewed and he comes crashing down to the glass floor, shattering the area immediately around his oversized form.

His eyes are now pools of black malice, as he rushes you.

  - Effects: Souls -1, edricWounds +1.
### Choice

- Brace yourself. → edric_counterstrike
## Scene: edric_lightning

### Display Title

- You’ve Been Thunderstruck
### Text

Your eyes flicker with the memory of a witnessed thunderstorm and like a flash of thought, a lightning bolt tears from the darkness and strikes Edric’s right wing.

The energy dissipates and the black wet membrane of his wing looks undeterred in its flight path.

He roars a guttural sound as his eyes flash with the light of the storm you just created.  He lands before you.

  - Effects: Soul -1, edricWounds +0.
### Choice

- Brace yourself. → edric_staggered
## Scene: edric_mirage

### Display Title

- The Master
### Text

You’re not sure if it’s intuitive or a recollection, but you imagine the embodiment of another vampiric being.  This host being more obvious in its menace beyond pure scale and muscle.

This summoned reflection stops Edric in his tracks, as a coin thunderously hits the floor beside you, creating a flash of white on the black glass floor.

The summoned creature speaks to your surprise: “Rat-catcher”.  Those two words are said with such doom and deafening clarity that you nearly miss the wide-eyed expression of Edric.  Now stood 10 feet from you on all four claws.

“Master”, he speaks.

  - Effects: Souls -2, edricWounds +2, Gate Stability -10.
  - Route: edric_finish_choice
## Scene: edric_dodge_roll

- D20 progression scene
### Display Title

- Under the Wing
### Text

Edric drops from the dark mist above like a torn piece of the night’s canvas.

You attempt to move with speed, because staying still seems unwise.

### D20 Button

- Roll: Dodge the Swoop
  - Recommended hidden modifiers: Sportsman +2 for reflex/pressure. Strength +0 here.
### Success Result (Requirement DC: 12)

You fall beneath the incoming sweep of his claws. They tear sparks from the Gates marbled entranceway where your throat otherwise would have been.

Edric’s momentum carried him into the light of the Gates. The gold crack above the arch flares and he covers his eyes with his right wing.

  - Effects: edricWounds +0, Gate Stability -5.
  - Route: edric_staggered
### Failure Result

You move a little too late.

His claws find an opening in your shoulder. The wound is cold and detached, dissimilar to the pain it should produce. He beats his wings back as he makes ready for another attack.

  - Effects: Health –2.
  - Route: edric_counterstrike
## Scene: edric_ground_roll

- D20 progression scene
### Display Title

- Stand Your Ground
### Text

You raise your hands in defence. It now feels absurdly weak and meaningless against the force of the thing making its way for you.

You say a prayer to yourself.  Asking whatever Deity put you in charge of this post to aid you now.

### D20 Button

- Roll: Ward the Threshold
  - Recommended hidden modifiers: Strength +2 for resistance/pressure. Scholar +2 here.
### Success Result (Requirement DC: 15)

The light of a shield emanates from your braced arms, like an unknown holy Paladin.

Edric slams into the circle of light and recoils, smoke rising from the cold wet membrane of his wing.

  - Effects: edricWounds +0, Health -0.
  - Route: edric_staggered
### Failure Result

Your actions are meaningless as whatever Deity you called upon feigned ignorance to your plea.

Edric hits you with the weight of a truck behind his wing. You hear the Gates groan as your body strikes into them with the force.

  - Effects: Health -5, Gate Stability -15.
  - Route: edric_counterstrike
## Scene: edric_counterstrike

### Display Title

- Bloodied Frenzy
### Text

Edric's battered and menacing form races towards you.

You stand with your back now pressing against the Gates.

The bat Edric lowers its head in an impaling charge. Blood flies from its mouth in dark threads as it does so. You’re not sure how much damage the Gates can sustain, but at this moment you question whether they are better taking this charge, or you.

“The Gates have stood the test of time for countless ages,” Sebastien says.  In doing so, you could be sure you see him squint a little, like he too is bracing for an outcome he too cannot foretell.

### Choices

- Stand in front of the Gates and brace yourself for his charge → edric_staggered
  - Effect: Health –9, Gate Stability –20.
  - Result text: The massive head of the bad ruptures your core as all sense of the world you inhabit is lost.  You feel your connection slipping, as your eyes roll into the back of your head.
- Spend Souls to mount a counter-attack against him. → edric_finish_choice
  - Requirement: Souls >= 1
  - Effect: Soul -1, Health -2.
  - Result text: You summon a great lance of light – the first thing you could think to summon which embodied the act of impaling.  You imagined it like the Romans would have stuck their spears out from under their towering shields.  Unfortunately, your defences were a little less well-rehearsed, as you notice a newly formed gash display from your side.
- Attempt to dodge and let the Gates sustain the attack. → edric_gate_roll
## Scene: edric_staggered

### Display Title

- The Lord Vampire
### Text

Lord Edric stands before you now with a menacing expression of confidence and practiced experience.  He pulls back one wing and exposes the other claw.

He looks excited to toy with you.

Sebastien points with his pen.

“There. The offering is no longer orbiting him. He has a solitary coin defending him.”

### Choices

- Use the coin as bait. → edric_coin_bait_roll
  - Requirement: Tokens >= 1 OR edricClues >= 1
- Prepare yourself for his impending attack. → edric_gate_roll
- Spend Souls to mount a counter-attack against him. → edric_finish_choice
  - Requirement: Souls >= 1
  - Effect: Soul –1, Health –2.
  - Result text: You summon a great lance of light – the first thing you could think to summon which embodied the act of impaling.  You imagined it like the Romans would have stuck their spears out from under their towering shields. Unfortunately, your defences were a little less well-rehearsed, as you notice a newly formed gash display from your side.
## Scene: edric_coin_bait_roll

- D20 progression scene
### Display Title

- Bait the Lord
### Text

You flash a Token at Lord Edric which you conjure as one of his own from a flashback you witnessed.

Edric’s eyes fix on the gold.  *Had you obtained one of his precious trophies unbeknownst to him?*

There he is. Not the ferocious bat you see before you now. Not the over-indulgent lord. The boy in the kitchen, once more watching a small thing enter his trap.

### D20 Button

- Roll: Bait the Lord
  - Recommended hidden modifiers: Creative +2 for handcraft/trap intuition. Scholar +0 here.
### Success Result (Requirement DC: 7)

You throw the coin at the Gates.

Edric follows before he can stop himself. The gold crack above the arch opens once more and brands him with its own reflection.

  - Effects: edricWounds +1, Tokens -1 if a Token was spent, Gate Stability -5.
  - Route: edric_finish_choice
### Failure Result

Edric sees the trap and punishes the attempt.

He strikes low as his claw connect with your stomach and empties its contents. The coins laugh in bright little taunts.

  - Effects: Health -5, Gate Stability -5.
  - Route: edric_final_choice
## Scene: edric_gate_roll

- D20 progression scene
### Display Title

- The Gates That Stood The Test of Time
### Text

You wait until you believe is the last possible moment, before attempting to throw yourself out of the way of Edric’s head-first charge.

### D20 Button

- Roll: Dodge the Beast
- Recommended hidden modifiers: Sportsman +2.
### Success Result (Requirement: DC 12)

The Gates sustain the not inconsiderable brunt of his force.  In doing so, they repel him to his frenzied shrieks but equally take their toll on the defence of the structure.

  - Effects: Gate Stability –20, edricWounds +1.
  - Route: edric_finish_choice
### Failure Result

You move a little too late and Edric slams into both you and the Gates head-first.  Your leg takes much of the brunt of the force, but the Gates seem to repel as much damage as they sustain to Edric’s apparent surprise.

  - Effects: Health -3, Gate Stability –10, edricWounds +1.
  - Route: edric_finish_choice
## Scene: edric_finish_choice

### Display Title

- A Soul Without Passage
### Text

Edric is wounded now.

Not bleeding, exactly. Blood already flowed from his gaping maw. But he was losing discernible shape now. Becoming part of the mist surrounding him.

His bat-form whisps like smoke at the edges. Lord Beaumont appears fragmented.

Sebastien’s voice is low.

“Your last instruction: not every Soul is gained by passage through the Gates. Some are claimed by ending what should not cross.”

### Choices

- Vanquish him. → edric_final_roll
- Offer one final chance to repent (risky). → edric_redemption_roll
  - Danger note: This still requires the critical success result described in edric_redemption_roll. Failure routes back to combat at edric_staggered with Health -1.
## Scene: edric_final_roll

- D20 progression scene
### Display Title

- Vanquish the Undead
### Text

You step toward the pitiful shape of the bat wearing the remains of a lord.

The coins scream in five disconnected voices.

Edric lunges as you do.

### D20 Button

- Roll: Vanquish Edric
  - Recommended hidden modifiers: Strength +3 for combat resistance. If edricBound or edricWounds >= 2, grant +3 to roll.
### Success Result (Requirement: DC 7)

You do not “*kill*” him. That word belongs elsewhere.

You eradicate the part of him that has forgotten it has an end.  Judgement.

Edric’s wings fold inward. His mouth opens as if to lodge a final protest, but the Gates silence the sound before he can make it audible.

The bat-form collapses into ash and five remaining gold coins.

Five unique souls enter your power, one after another. The memories of those he fed upon. Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates.

  - Effects: Souls +5, Tokens +5, Gate Stability +25, strong Wrath/Judgement shift. Set resolved.edric = true, edricVanquished = true.
  - Route: after_judgement_router
### Failure Result

Edric is faster than your impending judgement.

His claws punch through your guard and pin you to the black glass underneath. His wings blot out the Gates as he towers above you. His mouth lowers, dripping with every life he has savoured.

Sebastien says something you do not understand in time.

  - Effects: Health -5, Gate Stability -15.
  - Route: edric_last_chance unless Health <= 0 or Gate Stability <= 0.
## Scene: edric_last_chance

### Display Title

- The Last Chance
### Text

You are on your back. The towering bat form of Lord Edric is above you.

Sebastien’s voice comes from somewhere just out of sight.

“Bonus instruction,” he says. “Survive first. Be elegant later.”

The merchant peers over your shoulder.

“Still selling potions,” he whispers. “Heroic deeds can be indebted.”

### Choices

- Spend 1 Soul: Expel him using the light of the Gates.
  - Requirement: Souls >= 1
  - Effects: Souls –1, then Souls +5, Tokens +5, Gate Stability +25, Wrath/Judgement shift. Set resolved.edric = true, edricVanquished = true.
  - Result Text: Read the edric_final_roll “success” outcome above.
  - Route: after_judgement_router
- Spend 1 Token: Take the Little Merchant up on his offer.
  - Requirement: Tokens >= 1
  - Effects: Tokens –1, then Souls +5, Tokens +5, Gate Stability +25, minor Wrath/Judgement shift. Set resolved.edric = true, edricVanquished = true.
  - Route: edrich_merchant_vanquish
- Spend 0 Token: Take the Little Merchant up on his indebted offer.
  - Requirement: None
  - Effects: Tokens –0, then Souls +5, Tokens +5, Gate Stability +25, minor Wrath/Judgement shift. Set resolved.edric = true, edricVanquished = true.
  - Route: edric_merchant_vanquish
## Scene: edrich_merchant_vanquish

- Merchant ending scene
### Display Title

- A Most Helpful Little Fellow
### Text

At your nod, the little merchant gestures towards the bat Edrich towering over you and you notice a pale looking fluid that sounds like the hum of angry bees trickle down from his winged back.

Edrich begins to open his mouth in protest before his bat-form collapses into ash on top of you. Five gold coins hit the floor, just before the merchant scoops them up.

“Payment accepted!” he says, just before he makes off for a seam in the mist and is gone in an instant.

Somewhere beyond this threshold, something old and pale becomes aware of the loss of an instrument he sought to utilise beyond The Gates.

  - Effects: Souls +5, Tokens +0, Gate Stability +25, Wrath/Judgement shift. Set resolved.edric = true, edricVanquished = true.
  - Route: after_judgement_router
# Mask Branch

## Scene: mask_first_words

**Purpose:** Mystery and danger; first hint of the Living side touching the Gates.

### Display Title

- The Masked Soul
### Text

The masked Soul makes no sound when it comes forward.

Its porcelain face is smooth where the mouth should be. Two eyeholes open onto a dark too deep for such a small thing.

It carries no Token.

It casts the wrong shadow.

Every other Soul’s shadow leans toward the Gates, pulled by whatever waits beyond. This one points behind it, back into the mist, back toward the Living world.

Sebastien closes his ledger.

That frightens you more than anything he has said.

“Some cases,” he murmurs, “arrive before they are dead.”

The mask turns toward you.

Inside your ring, something knocks back.

### Choices

- Ask what it remembers. → mask_memory
- Reach through the crack in its shadow. → mask_roll
- Break the mask with your ring. → after_judgement_router
  - Effects: Health -3, Gate Stability -30, Wrath shift.
  - Result text: The porcelain breaks. Something behind it screams with a Living throat. The Gates stagger. You survive, but the threshold does not forgive you.
## Scene: mask_memory

### Display Title

- A Memory Without Breath
### Text

“What do you remember?” you ask.

The mask tilts.

For a moment, nothing happens.

Then images bleed through the air: a white room; a hand gripping bedsheets; a candle blown out in reverse; a child’s drawing of a door; a man’s voice saying, “Not yet. Hold it open.”

The Soul lifts one hand and presses it to the place where its mouth should be.

A crack appears in the porcelain.

Behind it, you do not hear the dead.

You hear breathing.

### Choices

- Read it through the ring. → mask_roll
- Hold it in Purgatory until you understand. → after_judgement_router
  - Effects: slight Mercy shift.
  - Result text: You place the masked Soul aside. It does not resist. Its wrong shadow continues to point toward the Living, like an accusation.
- Pass it without understanding. → after_judgement_router
  - Effects: Souls +2, Gate Stability -18, Wrath/risk shift.
  - Result text: The Gates accept the Soul with a sound like a lock turning in the wrong door. Power enters you. So does doubt.
## Scene: mask_roll

- D20 progression scene
### Display Title

- Read the Mask
### Text

You press the black ring to the porcelain.

Cold runs up your arm.

The mask is not hiding a face. It is hiding a distance.

Somewhere far away, in the Living world, a body is not finished dying.

Something has tied that half-death to your Gates.

### D20 Button

- Roll: Read the Mask
### Success Result

The ring flares.

You see the truth: a Living heartbeat caught inside a dead echo. Not a Soul. Not properly. A hook.

You tear it loose before it can sink deeper into the threshold.

  - Effects: Souls +2, Mercy shift.
  - Route: after_judgement_router
### Failure Result

The mask opens inward.

For a moment you drown in someone else’s unfinished death. Machines. Candle smoke. A hand drawing a Gate on paper again and again.

When you return, the porcelain is still watching you.

  - Effects: Health -3, Wrath shift.
  - Route: after_judgement_router
# After First Judgement

## Scene: after_first_judgement

**Purpose:** The queue changes; do not return to the untouched first screen.

### Display Title

- The Queue Learns You
### Text

Your first judgement settles before the Gates. You feel your choices become part of them.

The queue changes immediately. Souls lean closer or shrink away. Tokens disappear into fists. Lies are rearranged behind dead eyes.

Sebastien makes a mark in the ledger.

“Well,” he says. “You have now done the work sufficiently to continue doing so.”

The Gates groan. Another petitioner steps forward from the mist.

### Choices

- Hear one more Soul. → second_queue
- Open the Gates a finger-width to prove command. → failure_gate
  - Effects: Gate Stability -50
  - Failure text: You open the Gates by a finger-width. The dead make that enough.
# Second Queue

## Scene: second_queue

**Purpose:** Player chooses one remaining unresolved petitioner. The third will not be judged in Chapter One.

### Display Title

- One More Before the Tremor
### Text

The remaining Souls wait in the mist, each carrying a different danger.

Sebastien does not advise you.

That may be mercy.

It may be curiosity.

### Dynamic Choices

Show only unresolved petitioners:

- Hear Mara Vale. → mara_first_words
- Hear Lord Edric Beaumont. → edric_first_words
- Hear the masked Soul. → mask_first_words
After the second petitioner resolves, route to after_second_judgement.

# After Second Judgement

## Scene: after_second_judgement

**Purpose:** Force the incursion. No third judgement.

### Display Title

- The Knock at the Wrong Side
### Text

The third petitioner remains in the mist.

Unheard.

Unjudged.

Perhaps that matters. Perhaps everything does.

The Gates shake.

Not open. Not closed.

Tested.

A sound rolls across the black glass: thousands of coins dropped into an empty well. The queue recoils.

Something is trying the lock.

Sebastien’s ledger snaps shut.

“Ah,” he says. “The unpaid dead.”

### Choices

- Stand before the threshold. → threshold_warning
- Step aside and let Sebastien handle it. → failure_gate
  - Effects: Gate Stability -50
  - Failure text: Sebastien does not move. “I am a steward,” he says. “Not a door.”
# Single Checkpoint

## Scene: threshold_warning

**Purpose:** One chapter checkpoint before undead incursion.

**Checkpoint:** Yes

### Display Title

- Checkpoint: The Threshold Holds
### Text

You step before the Gates.

The ring tightens.

The cracks in the arch flare gold, then sickly green. Beyond the doors, shapes press against the seam: hands, mouths, crowns, antlers, blades, faces flattened by wanting.

Sebastien stands a careful distance behind you.

“The Gates are not walls,” he says. “Walls keep things out. Gates decide.”

The seam buckles.

“Decide quickly.”

### Choice

- Face the unpaid dead. → incursion
# Undead Event

## Scene: incursion

**Purpose:** First combat-like Gate event. Tests Souls, Health, Gate Stability.

### Display Title

- The Unpaid Dead
### Text

They come as one body made from many refusals.

A grief-beast of hollow coins and broken fingers. A knight with teeth growing through his armour. A woman drowned in black veils. Children with adult shadows. A crown with no king beneath it.

They batter the Gates from the far side, not because they deserve passage, but because they have learned the oldest lie:

Enough hunger can look like justice.

Your collected Souls burn inside the ring.

If you have enough power, you can bind them.

If you do not, the Gates will take the blow.

Or you will.

### Choices

- Spend 2 Souls: Bind the Restless. → after_attack
  - Requirement: Souls >= 2
  - Effects: Souls -2, Gate Stability +8.
  - Result text: You speak a word you do not know and the ring answers. The undead freeze mid-surge, pinned by their own names.
- Force them back yourself. → force_gate_roll
- Let the Gate take the blow. → after_attack
  - Effects: Gate Stability -28.
  - Result text: The Gates absorb the impact. The sound is not metal breaking. It is a thousand mourners inhaling at once.
- Offer your own name to the undead. → failure_health
  - Effects: Health -10
  - Failure text: You reach for the missing name and something reaches back faster.
## Scene: force_gate_roll

- D20 progression scene
### Display Title

- Force Them Back
### Text

You plant both hands against the seam.

The Gates are cold.

Then hot.

Then neither.

The undead press from the far side, and through the crack you see them not as monsters but as need without shape. They do not want to kill you. They want through you.

The ring bites down to bone.

### D20 Button

- Roll: Force Them Back
### Success Result

You shove.

The Gates roar.

For one impossible second, the whole threshold moves with you. The unpaid dead are thrown back into their dark, shrieking like coins flung onto stone.

One torn Soul catches in your ring and burns clean.

  - Effects: Souls +1, Gate Stability +5.
  - Route: after_attack
### Failure Result

You push.

They push harder.

A hand slips through the seam and closes around your wrist. It is made of every bargain ever refused.

You tear free, but the Gates buckle inward.

  - Effects: Health -3, Gate Stability -24.
  - Route: after_attack unless Health <= 0 or Gate Stability <= 0.
# Ending

## Scene: after_attack

**Purpose:** Survived first incursion.

### Display Title

- After the Breach
### Text

Silence returns badly.

It does not settle. It limps.

The Gates remain closed, but new cracks vein the arch. The queue keeps its distance. Some Souls kneel. Some hide their offerings. Some look at you with hope, which is far heavier than fear.

Sebastien steps over a fallen Token. It rolls away from his shoe as if it knows better.

“Acceptable,” he says.

You stare at him.

He sighs.

“Fine. Barely acceptable.”

Something dark stains the threshold where the third petitioner stood.

Not blood.

Warmth.

### Choices

- Ask what touched the Gate. → living_hand
- Look for the petitioner left behind. → living_hand
## Scene: living_hand

**Purpose:** Cliffhanger. A Living handprint remains where a Soul stood.

### Display Title

- The Living Mark
### Text

On the black glass, pressed into the place where no Living hand should ever reach, is a print.

Five fingers.

A palm.

Warm at the edges.

The handprint steams in the cold before the Gates.

Sebastien does not write it down.

That is how you know he is afraid.

“The dead knock,” he says quietly. “The Living pry.”

Beyond the Gates, something laughs with your voice.

For the first time since the contract, you feel the shape of your missing name.

Not the word.

The wound it left behind.

### Choice

- See Chapter Score. → trial_gate
## Scene: trial_gate

**Purpose:** Score summary. Free trial cliffhanger and monetisation gate.

### Display Title

- Chapter One Completion Ranking
### Text

Score Factors:

Health remaining / 10

Gate Stability remaining / 100

Souls remaining

Tokens remaining

Rewinds unused

Optional: Mercy/Wrath balance modifier

Display:

Show score grade large and bright on the right.

Show score breakdown list on the left.

### Choice

**End Chapter One.** → trial_gate_2

## Scene: trial_gate_2

**Purpose:** Free trial cliffhanger and monetisation gate.

### Display Title

- End of Chapter One
### Text

You have judged the dead and taken their offerings.

You have spent their Souls.

You have held the Gates. For now.

But something powerful in the Dead Realm is seeking to test the threshold. The Gates may not be prepared.  Are you?

Sebastien will open the ledger again. But who will judge your Soul?

- Chapter Two: The Soul That Would Not Die
### Choices

- Unlock Chapter Two — £0.99 → mock purchase flow
- Unlock all Chapters of Book One — £4.99 → mock purchase flow
- Replay Chapter One. → title
# Game Over Scenes

## Scene: failure_health

**Art:** Game Over art

### Display Title

- The Gatekeeper Has Failed
### Text

Your life force is spent.

Not death exactly. Death would be simpler.

Your connection to the threshold extinguishes and the Gated Realm removes you from play, snapped awake to consciousness. The queue at the Gates grows impatient. Who will accept Souls without your judgement.  How long can the Gates hold?

The Last Gatekeeper is no more.

- The Gatekeeper is lost.
### Choices

- Rewind to checkpoint.
Available only if checkpoint has been reached and rewind remains.

- Restart Chapter One. → title
## Scene: failure_gate

**Art:** Game Over art

### Display Title

- The Gates Are Lost
### Text

The stability of the Gates has become uncontrollable. The seam opens.

The dead do not pass through in a line, nor as intended. They flood. They claw through mercy, through law, through you.

Tokens scatter like teeth. Souls crash against metal and stone like waves.

Sebastien’s ledger burns to cinder, losing names already lost to time.

A Gate without a Gatekeeper is not a doorway. It is a wound.

- The Gates are lost.
### Choices

- Rewind to checkpoint.
Available only if checkpoint has been reached and rewind remains.

- Restart Chapter One. → title
# Implementation Notes for Codex

## Backstory Modifiers

Backstory should remain subtle. Do not show it like a class system.

Suggested hidden bonuses:

- Scholar: +2 on truth / reading / pattern checks
- Creative: +2 on empathy / unusual interpretation checks
- Sportsman: +2 on reflex / endurance / pressure checks
- Strong: +2 on force / resistance / combat checks
These can affect roll outcomes quietly, with the result text saying something like:

- “Some old instinct helps you read the pattern.”
- “Your body remembers how not to fall.”
- “A maker’s eye catches what the mask is not showing.”
## D20 Result Presentation

Avoid showing raw DC maths to the player.

Show:

- The D20 result
- A short phrase such as “Success”, “Failure”, “Narrow Success”, or “Costly Failure”
- Narrative consequence
Example:

> You rolled 16. Success. The coin burns cold, and Edric’s accounts open.

## Moral Alignment

Use Mercy ↔ Wrath as the visible gauge.

Do not make Mercy always good or Wrath always bad.

Some Wrath choices should be necessary. Some Mercy choices should be dangerous.

## Tone Guardrails

For any filler text needed, avoid generic phrasing such as:

- “You enter the chamber.”
- “A mysterious figure appears.”
- “You feel a strange power.”
- “The enemy attacks.”
Prefer specific, tactile phrasing:

- “The Gates breathe like something in pain.”
- “The coins orbit his head like little moons.”
- “The queue learns from you.”
- “A Gate without a Gatekeeper is not a doorway. It is a wound.”
