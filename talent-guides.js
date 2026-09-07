// Detailed talent-tree guidance layered on top of the playstyle recommender.
// Curated for September 2026. Named core choices are intentionally separated
// from connector/stat nodes so the guide remains readable when weapon-specific
// pathing changes a spare point or two.

const TALENT_GUIDES = {
  'Commanding Gunfighter': {
    note:'A safe, team-first Veteran route. The tree is built around keeping Voice of Command available and turning priority targets into team damage.',
    route:[
      ['BLITZ','Shredder Frag Grenade','Best general-purpose pick. Swap to Krak Grenade when Crushers and other Carapace targets are your main problem.'],
      ['AURA','Survivalist','Take the ammo-support aura for a ranged-heavy squad.'],
      ['ABILITY','Voice of Command','Your panic button and team stabilizer.'],
      ['ABILITY MOD','Duty and Honour','Take this with Voice of Command for the extra defensive value.'],
      ['KEYSTONE','Focus Target!','Tag dangerous enemies and make the whole squad better at deleting them.'],
      ['KEYSTONE MOD','Focused Fire','Strengthens the marked-target game plan.'],
      ['KEYSTONE MOD','Redirect Fire!','Keeps value flowing after a marked target goes down.']
    ],
    passives:['Confirmed Kill','Tactical Awareness','Iron Will','Bring it Down!','Demolition Stockpile','Superiority Complex'],
    flex:'If you are comfortable surviving without extra safety, move one or two defensive/stat points into ranged weakspot or elite damage. If you are learning, keep Iron Will and Toughness-oriented connectors.',
    source:'https://darktide.gameslantern.com/builds/veteran'
  },
  'Executioner Marksman': {
    note:'The classic precision-shooter route. Stay on the ranged side of the tree and invest heavily in weakspot and priority-target damage.',
    route:[
      ['BLITZ','Krak Grenade','Gives your marksman build a reliable answer to heavy armour.'],
      ['AURA','Survivalist','Helps the ammo-hungry ranged game plan.'],
      ['ABILITY','Executioner’s Stance','Use it when a dangerous ranged or elite wave appears.'],
      ['ABILITY MOD','Marksman','Adds a weakspot-strength window after using your ability.'],
      ['ABILITY MOD','Counter-Fire','Excellent when shooter packs and ranged specialists are the threat.'],
      ['KEYSTONE','Marksman’s Focus','Your main ranged finesse engine; reward repeated weakspot play.']
    ],
    passives:['Long Range Assassin','Precision Strikes','Tactical Reload','Superiority Complex','Bring it Down!','Confirmed Kill'],
    flex:'If you hate standing still or keeping Focus stacks, drop some greedier ranged nodes for Toughness, stamina or Tactical Awareness. The build should still feel like a marksman, not a turret that dies when touched.',
    source:'https://darktide.gameslantern.com/builds/veteran'
  },
  'Infiltration Skirmisher': {
    note:'A hybrid Veteran route that deliberately bounces between melee and ranged instead of committing to one weapon all mission.',
    route:[
      ['BLITZ','Shredder Frag Grenade','Reliable horde control while you reposition. Krak is a valid armour-focused swap.'],
      ['AURA','Survivalist','The easiest all-purpose aura for a weapon-swapping Veteran.'],
      ['ABILITY','Infiltrate','Use stealth to reposition, rescue, reach gunners or create a burst window.'],
      ['ABILITY MOD','Low Profile','Makes the exit from stealth safer and easier to exploit.'],
      ['KEYSTONE','Weapons Specialist','The core of the build: swap weapons often and cash in the bonuses.'],
      ['KEYSTONE MOD','Always Prepared','Supports the weapon-swap loop.'],
      ['KEYSTONE MOD','Agile Engagement','Rewards active hybrid combat.']
    ],
    passives:['Reciprocity','Desperado','Trench Fighter Drill','Confirmed Kill','Tactical Awareness'],
    flex:'If you mostly use Infiltrate as an emergency escape, bias spare points toward defence. If you use it aggressively, take more finesse/melee damage and weapon-swap bonuses.',
    source:'https://darktide.gameslantern.com/builds/veteran'
  },

  'Faithful Frontliner': {
    note:'A straightforward Zealot melee tree: toughness through aggression, fast gap-closing, then Momentum-based damage.',
    route:[
      ['BLITZ','Stunstorm Grenade','Very forgiving control tool. Use Immolation only if you specifically want area denial.'],
      ['AURA','Benediction','Strong general defensive value for you and the squad.'],
      ['ABILITY','Fury of the Faithful','Your engage, Toughness refill and armour-burst button.'],
      ['ABILITY MOD','Redoubled Zeal','Excellent with an aggressive Fury playstyle.'],
      ['ABILITY MOD','Unrelenting Fury','Elite/Specialist kills shortly after Fury help return the cooldown.'],
      ['KEYSTONE','Inexorable Judgement','Movement builds Momentum; cash it into speed and damage.'],
      ['KEYSTONE MOD','Eternal','Extends the Judgement payoff window.']
    ],
    passives:['Enemies Within, Enemies Without','Second Wind','Duellist','Sustained Assault','Until Death','Holy Revenant'],
    flex:'If you are already comfortable staying alive, trade one defensive passive for more crit/finesse. Keep Until Death + Holy Revenant if you want the forgiving version.',
    source:'https://darktide.gameslantern.com/builds/zealot'
  },
  'Chorus Support Zealot': {
    note:'This route gives up some selfish burst so you can repeatedly turn ugly team fights into stable ones.',
    route:[
      ['BLITZ','Stunstorm Grenade','Fits the control/support identity and buys time before or after Chorus.'],
      ['AURA','Benediction','Default defensive aura. Beacon of Purity is a legitimate corruption-focused swap.'],
      ['ABILITY','Chorus of Spiritual Fortitude','Use it proactively when pressure spikes, not only after someone falls.'],
      ['KEYSTONE','Blazing Piety','A reliable crit engine that works well without forcing you into a fragile playstyle.'],
      ['KEYSTONE MOD','Invocation of Death','Good synergy for maintaining ability access through crit-heavy melee.']
    ],
    passives:['Holy Cause','Ecclesiarch’s Call','I Shall Not Fall','Enemies Within, Enemies Without','Second Wind','Duellist'],
    flex:'If your group already has strong defence, you can run Inexorable Judgement instead of Blazing Piety for more movement-driven damage. Keep Chorus as the identity of the build.',
    source:'https://darktide.gameslantern.com/builds/zealot'
  },
  'Shroud Assassin': {
    note:'The high-risk Zealot route. You are paying points for burst, backstabs, finesse and repeated stealth access rather than maximum forgiveness.',
    route:[
      ['BLITZ','Blades of Faith','Fast single-target tool that does not interrupt your aggressive movement.'],
      ['AURA','Benediction','A little team safety helps offset the greedier rest of the tree.'],
      ['ABILITY','Shroudfield','The build’s burst and reposition tool.'],
      ['ABILITY MOD','Invigorating Revelation','Restores Toughness entering stealth and gives damage resistance after leaving it.'],
      ['ABILITY MOD','Master-Crafted Shroudfield','Extends the useful post-stealth window.'],
      ['ABILITY MOD','Perfectionist','Stealth kills help return your cooldown.'],
      ['KEYSTONE','Blazing Piety','Strong crit foundation for an assassin route.']
    ],
    passives:['Backstabber','Pious Cut-Throat','Duellist','Scourge','Invocation of Death','Second Wind'],
    flex:'If Shroudfield already feels too fragile, do not double down on damage. Keep Invigorating Revelation and buy a defensive connector/passive before adding more burst.',
    source:'https://darktide.gameslantern.com/builds/zealot'
  },

  'Warp Control Psyker': {
    note:'A control Psyker should make the room safer first and chase damage second. Smite + Shield is deliberately forgiving and team-facing.',
    route:[
      ['BLITZ','Smite','Your primary crowd-control tool. Use it on dangerous mixed packs, not every lone poxwalker.'],
      ['AURA','Seer’s Presence','Ability cooldown support fits the control role.'],
      ['ABILITY','Telekine Shield','Blocks enemy ranged fire while allies can shoot through it.'],
      ['ABILITY MOD','Telekine Dome','Use the dome route when you want a true team bunker rather than a narrow wall.'],
      ['KEYSTONE','Empowered Psionics','Empowered Smite becomes much more threatening while retaining control utility.']
    ],
    passives:['Psykinetic’s Aura','Kinetic Deflection','Quietude','Mettle','Perfect Timing','Sanctuary'],
    flex:'If Smite is doing enough control without help, spend spare points on Toughness/peril comfort rather than chasing every Blitz modifier. This build is meant to be calm to play.',
    source:'https://darktide.gameslantern.com/builds/psyker'
  },
  'Shriek Warp DPS': {
    note:'Build peril, turn that peril into damage, then use Venting Shriek as both pressure relief and an offensive tool.',
    route:[
      ['BLITZ','Brain Rupture','Reliable elite/specialist removal. Assail is the horde/flexible alternative.'],
      ['AURA','Seer’s Presence','Keeps ability cycling useful across the squad.'],
      ['ABILITY','Venting Shriek','Quells peril and staggers the room in front of you.'],
      ['ABILITY MOD','Creeping Flames','Take this when your setup is leaning into Soulblaze/warp AoE.'],
      ['KEYSTONE','Warp Siphon','Warp Charges are the engine for this caster-style route.'],
      ['KEYSTONE MOD','Warp Battery','Raise the ceiling on Warp Charge value.'],
      ['KEYSTONE MOD','Inner Tranquility','Makes high-output warp casting easier to sustain.']
    ],
    passives:['Perilous Combustion','Warp Rider','Psykinetic’s Aura','Quietude','Mettle'],
    flex:'If you are exploding yourself or constantly interrupting casts to quell, spend spare points on peril efficiency before adding more damage. A live Psyker has higher DPS than a dead one.',
    source:'https://darktide.gameslantern.com/builds/psyker'
  },
  'Scrier Duelist': {
    note:'A mobile high-ceiling Psyker route built around short Scrier’s Gaze damage windows and finesse rather than safe stationary casting.',
    route:[
      ['BLITZ','Assail','Useful while moving and excellent for maintaining pressure between weapon attacks.'],
      ['AURA','Prescience','Fits the crit/finesse identity.'],
      ['ABILITY','Scrier’s Gaze','Your burst window. Watch peril constantly while it is active.'],
      ['ABILITY MOD','Reality Anchor','Helps make the Gaze window more manageable.'],
      ['KEYSTONE','Disrupt Destiny','Move from marked target to marked target for stacking offensive value.']
    ],
    passives:['Mettle','Perfect Timing','Precognition','Surety of Arms','Warp Rider','Anticipation'],
    flex:'Do not use Warp Siphon here just because it is familiar; current Scrier interactions do not reward that pairing as cleanly. If Disrupt Destiny annoys you, Empowered Psionics is the lower-maintenance alternative.',
    source:'https://darktide.gameslantern.com/builds/psyker'
  },

  'Unkillable Protector': {
    note:'The tank Ogryn tree is not about standing still behind a shield. It is about generating Toughness while staggering, taunting and protecting the squad.',
    route:[
      ['BLITZ','Big Friendly Rock','Simple, renewable and excellent for deleting a distant nuisance. Bombs Away! is the explosive alternative.'],
      ['AURA','Stay Close!','Take the team-facing defensive aura.'],
      ['ABILITY','Loyal Protector','Taunt enemies off allies and create breathing room.'],
      ['KEYSTONE','Feel No Pain','Stacking damage reduction and Toughness replenishment is the core defensive engine.']
    ],
    passives:['Heavyweight','Smash ’Em!','The Best Defence','Soften Them Up','Payback Time'],
    flex:'Prioritise Toughness and stamina connector nodes before extra damage if you are using a shield. Your job is to remain functional while everyone else is panicking.',
    source:'https://darktide.gameslantern.com/builds/ogryn'
  },
  'Heavy Hitter Bruiser': {
    note:'The general-purpose melee Ogryn route. Heavy attacks are simultaneously damage, control and Toughness generation.',
    route:[
      ['BLITZ','Big Friendly Rock','Cheap answer to distant specials while you remain a melee build.'],
      ['AURA','Bonebreaker’s Aura','Supports the melee-heavy squad role.'],
      ['ABILITY','Indomitable','Charge through dangerous packs, rescue allies or reset a bad formation.'],
      ['KEYSTONE','Heavy Hitter','Heavy attacks build the main melee-damage engine faster.'],
      ['KEYSTONE MOD','Just Getting Started!','Adds attack-speed payoff once Heavy Hitter is rolling.'],
      ['KEYSTONE MOD','Great Cleaver','Excellent when dense hordes are part of the problem.'],
      ['KEYSTONE MOD','Don’t Feel a Thing','Defensive option that pairs well with repeated heavy attacks.']
    ],
    passives:['Heavyweight','Smash ’Em!','The Best Defence','Soften Them Up','Payback Time'],
    flex:'Great Cleaver is less important on a weapon that already has enormous cleave. Move that point into defence or anti-armour when appropriate.',
    source:'https://darktide.gameslantern.com/builds/ogryn'
  },
  'Gunlugger': {
    note:'The ranged Ogryn route only works if you respect ammo and keep a melee fallback. Point-Blank Barrage is your “everything dies now” window.',
    route:[
      ['BLITZ','Bombs Away!','Fits the ranged/explosive identity.'],
      ['AURA','Coward Culling','The offensive ranged-oriented aura choice.'],
      ['ABILITY','Point-Blank Barrage','Use for bosses, elite packs and emergency lane deletion.'],
      ['KEYSTONE','Burst Limiter Override','Lucky Bullet plus ranged-damage stacking is the gun engine.']
    ],
    passives:['Steady Grip','Pick the connected ranged Toughness nodes','Pick ammo-efficiency/reload nodes on the gun branch','Keep at least one melee Toughness generator'],
    flex:'If ammunition is constantly empty, your build is too greedy. Trade one damage node for ammo efficiency or use a more economical ranged weapon before changing the whole tree.',
    source:'https://darktide.gameslantern.com/builds/ogryn'
  },

  'Linebreaker Enforcer': {
    note:'A control-heavy Arbites route. Repeated stagger is both offence and defence, so the tree should support staying in the front line.',
    route:[
      ['BLITZ','Voltaic Shock Mine','Excellent area control for holding lanes and disrupting dangerous packs.'],
      ['AURA','Breaking Dissent','Pairs naturally with aggressive control.'],
      ['ABILITY','Break the Line','Short-cooldown lunge and wide stagger; press it often.'],
      ['KEYSTONE','Unleashed Brutality','Commit to the melee/control side of the Arbites tree.']
    ],
    passives:['Hold the Line','Target Priority','Connected Toughness and stagger nodes','Cyber-Mastiff utility if you have spare points'],
    flex:'If you are already controlling hordes easily, move spare points from extra stagger into elite damage or mastiff utility.',
    source:'https://darktide.gameslantern.com/builds/arbites'
  },
  'Warrant Executioner': {
    note:'A target-priority Arbites tree. You are durable enough to hold ground while Execution Order gives you a clear “kill this now” loop.',
    route:[
      ['BLITZ','Remote Detonation','Useful ranged burst/control without forcing you into the melee lane.'],
      ['AURA','Ruthless Efficiency','Take the offensive aura when your goal is priority-target removal.'],
      ['ABILITY','Castigator’s Stance','Damage reduction plus Strength lets you keep attacking through pressure.'],
      ['KEYSTONE','Execution Order','Marked Elite/Specialist/Boss kills restore Toughness and grant a damage/attack-speed payoff.']
    ],
    passives:['Target Priority','Hold the Line','Connected ranged/elite damage nodes','Cyber-Mastiff damage utility around marked targets'],
    flex:'If Castigator’s Stance feels too slow for you, Nuncio-Aquila is the easier support-oriented ability swap while Execution Order can remain your keystone.',
    source:'https://darktide.gameslantern.com/builds/arbites'
  },
  'Nuncio Support Marshal': {
    note:'A hybrid support Arbites that buffs/debuffs space with Nuncio-Aquila and then alternates melee and ranged pressure.',
    route:[
      ['BLITZ','Voltaic Shock Mine','Adds another reliable control zone beside the Aquila.'],
      ['AURA','Part of the Squad','The natural team-facing aura choice.'],
      ['ABILITY','Nuncio-Aquila','Place it where the squad is actually fighting so allies receive the benefit and enemies suffer the debuff.'],
      ['KEYSTONE','Terminus Warrant','Current Terminus alternates melee and ranged Justice buffs; deliberately swap weapons to cash them in.']
    ],
    passives:['Hold the Line','Target Priority','Toughness/defensive connector nodes','Cyber-Mastiff control utility'],
    flex:'If you do not enjoy weapon swapping, use Execution Order instead of Terminus Warrant. Terminus is strongest when you consciously alternate primary and secondary weapons.',
    source:'https://darktide.gameslantern.com/builds/arbites'
  },

  'Stimm Brawler': {
    note:'This is the actual Chemist/Stimm route: Stimm Supply is your combat ability and Chemical Dependency is your keystone.',
    route:[
      ['BLITZ','Chem Grenade','Fits the toxin/stimm identity and softens dense packs.'],
      ['AURA','Ruffian','Melee damage fits a close-range brawler. Anarchist is the crit-focused alternative.'],
      ['ABILITY','Stimm Supply','Copies your equipped Stimm effect to nearby allies and provides corruption utility.'],
      ['KEYSTONE','Chemical Dependency','Each Stimm use builds long-duration ability cooldown reduction.']
    ],
    passives:['Prioritise Stimm cooldown/uptime nodes','Take close-range Toughness recovery','Take movement/attack-speed nodes that support constant aggression','Add Toxin support only if your weapons actually apply Toxin'],
    flex:'Do not automatically buy every Stimm Lab effect. More effects increase Cartel Special cooldown, so a smaller, frequently available Stimm can be stronger for this build.',
    extraTitle:'STIMM LAB',
    extra:['Build around frequent use rather than maximum Volume.','Start with survivability/Toughness replenishment if you are learning.','Then add the damage or movement effect that matches your weapons.','If the cooldown becomes so long that you save the Stimm “for later,” remove an expensive Lab effect.'],
    source:'https://darktide.gameslantern.com/builds/hive-scum'
  },
  'Desperado Gunhand': {
    note:'The ranged Hive Scum route. Enhanced Desperado is the combat ability; Vulture’s Mark is the keystone.',
    route:[
      ['BLITZ','Blackout','Five fast blinding/stagger grenades give you room to keep shooting and moving. Boom Bringer is the damage-heavy swap.'],
      ['AURA','Gunslinger Improved','Supports ranged ammo economy for you and allies in Coherency.'],
      ['ABILITY','Enhanced Desperado','Sprint speed, ranged immunity and free reloads during the stance; close-range kills can extend it.'],
      ['KEYSTONE','Vulture’s Mark','Ranged Elite/Specialist kills stack ranged damage, crit and movement speed.']
    ],
    passives:['Ranged finesse/critical nodes','Close-range ranged damage','Movement bonuses','Toughness on ranged/priority kills'],
    flex:'If you are not consistently killing Elites/Specialists with your gun, Vulture’s Mark will feel weak. In that case use a more general Stimm or melee route instead of forcing it.',
    source:'https://darktide.gameslantern.com/builds/hive-scum'
  },
  'Adrenaline Rampager': {
    note:'The full melee berserker Hive Scum. Everything points toward staying in contact long enough to repeatedly trigger Frenzy.',
    route:[
      ['BLITZ','Boom Bringer','Gives your otherwise melee-heavy build a brutal ranged answer to armour and packed threats.'],
      ['AURA','Ruffian','Straightforward melee damage for you and the squad.'],
      ['ABILITY','Rampage!','Huge melee Strength, attack speed and damage reduction; melee hits extend it.'],
      ['KEYSTONE','Adrenaline Frenzy','Melee hits build Adrenaline; max stacks convert into a strong melee buff window.']
    ],
    passives:['Melee crit/attack-speed nodes','Close-range Toughness recovery','Adrenaline-supporting nodes','Adrenaline Unbound when you want more survivability'],
    flex:'Rampage leaves you Exhausted when it ends. If that recovery window keeps killing you, spend a point on survivability instead of squeezing out another damage node.',
    source:'https://darktide.gameslantern.com/builds/hive-scum'
  },

  'Flensing Gunline': {
    note:'A precision Skitarii gunline. Advanced Combat Doctrines is the ability; Flensing Protocols is the keystone. Keep them distinct.',
    route:[
      ['BLITZ','Integrated Refraction Emitter','A defensive ranged shield is ideal while you are committing to gunplay. Arc Grenades are the offensive alternative.'],
      ['AURA','Ammunition Deposit','Extra reserve ammo supports sustained ranged play.'],
      ['ABILITY','Advanced Combat Doctrines','Locks your secondary weapon onto enemies near the reticule and heavily improves recoil/spread.'],
      ['KEYSTONE','Flensing Protocols','Elite/Specialist kills rebuild stacks that grant damage and Toughness damage reduction.']
    ],
    passives:['Ranged weakspot/finesse nodes','Capacitance generation/efficiency','Elite and Specialist damage','Weakness Analysis Doctrine if your loadout reliably applies a status effect'],
    flex:'Do not drain Advanced Combat Doctrines to zero for trash enemies. Save the resource loop for shooters, elites and bosses where its accuracy is actually valuable.',
    source:'https://darktide.gameslantern.com/builds/skitarii'
  },
  'Voltaic Control Skitarii': {
    note:'The electrical support/control Skitarii. Voltaic Emitter is your ability; the tree then leans hard into Electrocution and team value.',
    route:[
      ['BLITZ','Arc Grenades','Adds repeatable Arc/Electrocution setup.'],
      ['AURA','Resurgence','Regenerates Coherency Toughness regardless of enemy proximity and suits a support build.'],
      ['ABILITY','Voltaic Emitter','Large electric discharge; extra charges expand its utility and can disable ranged weapons.'],
      ['KEYSTONE','Power Overload','Kills build toward a team-wide damage and Toughness-damage-reduction burst.']
    ],
    passives:['Voltaic Burst','Weakness Analysis Doctrine','System Shock','Capacitance generation/efficiency','Toughness/defensive connectors'],
    flex:'If you care more about having Voltaic Emitter charges constantly than the team-wide Overload burst, Redline Capacitors is the natural keystone swap.',
    source:'https://darktide.gameslantern.com/builds/skitarii'
  },
  'Chordclaw Overloader': {
    note:'A close-range Skitarii built around repeated Chordclaw charges. Redline Capacitors fits this better than treating Power Overload as mandatory.',
    route:[
      ['BLITZ','Arc Grenades','Softens and controls the pack before you enter melee. Integrated Refraction Emitter is the safer alternative.'],
      ['AURA','Foe-Render Creed','Extra Cleave and Rending helps the close-range team.'],
      ['ABILITY','Chordclaw Strike','Guaranteed crit with strong Rending; it spends one charge at a time so stored charges can become repeated strikes.'],
      ['KEYSTONE','Redline Capacitors','Adds a max ability charge and improves Toughness damage reduction plus Capacitance generation as charges are gained/spent.']
    ],
    passives:['Melee damage/finesse nodes','Capacitance generation','Voltaic Burst if you use pushes often','Weakness Analysis Doctrine / System Shock if your loadout applies Electrocution'],
    flex:'If you are playing in a coordinated squad and value team-wide burst more than repeated Chordclaws, Power Overload is the alternative keystone.',
    source:'https://darktide.gameslantern.com/builds/skitarii'
  }
};

function talentGuideHtml(build){
  const g=TALENT_GUIDES[build.name];
  if(!g) return '';
  const route=g.route.map((n,i)=>`<div class="tree-node-row"><span class="tree-rail"><b>${i+1}</b></span><div class="tree-node"><span class="node-kind">${n[0]}</span><strong>${n[1]}</strong><p>${n[2]}</p></div></div>`).join('');
  const passives=g.passives.map(x=>`<li>${x}</li>`).join('');
  const extra=g.extra?`<div class="tree-extra"><span class="result-label">${g.extraTitle}</span><ul class="tips-list">${g.extra.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:'';
  return `<article class="result-card hero talent-tree-guide">
    <div class="tree-guide-head"><div><span class="result-label">TALENT TREE GUIDE // TOP → BOTTOM</span><h3>Follow this route</h3><p>${g.note}</p></div><span class="tree-stamp">TREE<br>PATH</span></div>
    <div class="tree-layout"><div class="tree-route">${route}</div><aside class="tree-side"><span class="result-label">PASSIVES TO INCLUDE</span><ul class="tips-list">${passives}</ul><div class="tree-flex"><strong>FLEX POINTS</strong><p>${g.flex}</p></div>${extra}<a class="live-tree-link" href="${g.source}" target="_blank" rel="noopener">Open current class tree / builds ↗</a></aside></div>
    <p class="tree-disclaimer"><strong>How to copy it:</strong> start at the top of your in-game tree and spend the required connector/stat points to reach each highlighted named choice in order. Connector points can move slightly with your weapon and comfort needs; the named Blitz, Aura, Ability, modifiers and Keystone above are the build’s spine.</p>
  </article>`;
}

// Replace the original result renderer with one that includes a real talent-tree route.
window.renderResult=function(ranked){
  const best=ranked[0],alt=ranked[1];
  const c=CLASSES.find(x=>x.id===selectedClass);
  const max=Math.max(1,selectedTags.size*3+(best.scoreBoost||0));
  const fit=Math.max(55,Math.min(99,Math.round(best.score/max*100)));
  const g=TALENT_GUIDES[best.name];
  const core=g?g.route.filter(x=>['BLITZ','AURA','ABILITY','KEYSTONE'].includes(x[0])).map(x=>`${x[0]}: ${x[1]}`):best.core;
  q('#result-shell').innerHTML=`
    <article class="result-card hero"><span class="result-label">${c.name.toUpperCase()} // PRIMARY MATCH</span><h3>${best.name}</h3><p>${best.how}</p><span class="fit-score">PLAYSTYLE FIT: ${fit}%</span><div class="chips">${best.tags.map(t=>`<span class="chip">${TAGS.find(x=>x[0]===t)?.[1]||t}</span>`).join('')}</div></article>
    ${talentGuideHtml(best)}
    <article class="result-card"><span class="result-label">AT-A-GLANCE</span><h3>Core choices</h3><ul class="talent-list">${core.map(x=>`<li>${x}</li>`).join('')}</ul><p class="tradeoff"><strong>Trade-off:</strong> ${best.trade}</p></article>
    <article class="result-card"><span class="result-label">PLAYSTYLE PRIORITIES</span><h3>What spare points should support</h3><ul class="tips-list">${best.priorities.map(x=>`<li>${x}</li>`).join('')}</ul></article>
    ${alt?`<article class="result-card hero"><span class="result-label">SECONDARY MATCH</span><h3>${alt.name}</h3><p>If you want a slightly different emphasis, this was your runner-up. It especially matches <strong>${alt.tags.filter(t=>selectedTags.has(t)).map(t=>TAGS.find(x=>x[0]===t)?.[1]).filter(Boolean).join(', ')||'a nearby playstyle'}</strong>.</p><p class="alt-note">Run the cogitator again with fewer or different tags if you want this route to become the primary result and display its full tree guide.</p></article>`:''}`;
};

window.copySummary=function(){
  if(!lastResult)return;
  const c=CLASSES.find(x=>x.id===selectedClass);
  const g=TALENT_GUIDES[lastResult.name];
  const tree=g?g.route.map(x=>`- ${x[0]}: ${x[1]}`).join('\n'):`- ${lastResult.core.join('\n- ')}`;
  const passives=g?g.passives.join('\n- '):lastResult.priorities.join('\n- ');
  const txt=`DARKTIDE BUILD — ${c.name}: ${lastResult.name}\n\nTALENT TREE ROUTE:\n${tree}\n\nPASSIVES / FLEX PICKS:\n- ${passives}\n\nHOW TO PLAY:\n${lastResult.how}\n\nTRADE-OFF:\n${lastResult.trade}${g?`\n\nFLEX NOTE:\n${g.flex}`:''}`;
  navigator.clipboard.writeText(txt).then(()=>{q('#toast').classList.add('show');setTimeout(()=>q('#toast').classList.remove('show'),1600)});
};