const CLASSES = [
  {id:'veteran',name:'Veteran',symbol:'V',desc:'Precision fire, grenades, command support and disciplined gunplay.'},
  {id:'zealot',name:'Zealot',symbol:'Z',desc:'Aggressive melee pressure, crits, mobility, martyrdom and team buffs.'},
  {id:'psyker',name:'Psyker',symbol:'Ψ',desc:'Warp powers, crowd control, ranged pressure and peril management.'},
  {id:'ogryn',name:'Ogryn',symbol:'O',desc:'Frontline toughness, stagger, heavy melee, protection and big guns.'},
  {id:'arbites',name:'Arbites',symbol:'A',desc:'Control, suppression, warrants, shields, law-enforcement pressure.'},
  {id:'hive-scum',name:'Hive Scum',symbol:'H',desc:'Dirty tricks, stimulants, momentum and volatile close-range aggression.'},
  {id:'skitarii',name:'Skitarii',symbol:'S',desc:'Adeptus Mechanicus firepower, capacitor management and doctrinal buffs.'}
];

const TAGS = [
  ['melee','Melee','I want to live in striking distance.'],
  ['ranged','Ranged','I prefer shooting and target priority.'],
  ['dps','High DPS','I want maximum damage pressure.'],
  ['tank','Tanky','I value toughness, safety and staying power.'],
  ['support','Support','I want to help the whole squad.'],
  ['cc','Crowd Control','I like stagger, suppression and controlling space.'],
  ['horde','Horde Clear','Delete crowds efficiently.'],
  ['elite','Elite Killer','Delete specialists, elites and priority threats.'],
  ['boss','Boss Damage','I want strong monstrosity damage.'],
  ['mobility','Mobility','Fast repositioning and aggressive movement.'],
  ['beginner','Beginner Friendly','Forgiving, readable and comfortable.'],
  ['risk','High Risk / Reward','I enjoy demanding builds with a payoff.']
];

const BUILDS = {
 veteran:[
  {name:'Commanding Gunfighter',tags:['ranged','elite','support','beginner','tank'],scoreBoost:2,core:['Blitz: Krak Grenade or Frag Grenade depending on armor needs','Ability: Voice of Command','Aura: Survivalist-style ammo support when available / preferred team aura','Keystone: Focus Target!'],priorities:['Cooldown reduction and toughness on elite/specialist kills','Ranged weakspot and elite damage','Grenade regeneration or grenade utility','Enough stamina/toughness to survive when firing lanes collapse'],how:'Mark priority enemies, keep the squad stable with Voice of Command, then remove dangerous targets before they reach melee range.',trade:'Less explosive personal DPS than a greedier marksman route, but much safer and extremely useful in public groups.',sources:['https://darktide.gameslantern.com/builds?class=188a8bbc-7a67-4f69-8792-9d07a517366f']},
  {name:'Executioner Marksman',tags:['ranged','dps','elite','boss','risk'],core:['Blitz: Krak Grenade','Ability: Executioner’s Stance','Keystone: Marksman’s Focus'],priorities:['Weakspot damage','Ranged finesse and elite damage','Stamina management for stable aim','Ammo economy'],how:'Play sightlines, chain weakspot kills, and use Executioner’s Stance when several priority enemies appear at once.',trade:'Excellent ranged lethality, but less forgiving when enemies get into your face.',sources:['https://darktide.gameslantern.com/builds?class=188a8bbc-7a67-4f69-8792-9d07a517366f']},
  {name:'Infiltration Skirmisher',tags:['melee','mobility','elite','risk','dps'],core:['Blitz: Frag or Krak Grenade','Ability: Infiltrate','Keystone: Weapon Specialist'],priorities:['Weapon swap bonuses','Melee/ranged hybrid damage','Backline access and toughness recovery','Mobility and stamina'],how:'Use stealth to reposition, rescue, reach dangerous ranged packs, or create burst windows; cycle melee and ranged rather than camping one weapon.',trade:'Needs active decision-making and positioning to outperform simpler Veteran routes.',sources:['https://darktide.gameslantern.com/builds?class=188a8bbc-7a67-4f69-8792-9d07a517366f']}
 ],
 zealot:[
  {name:'Faithful Frontliner',tags:['melee','dps','tank','beginner','elite'],scoreBoost:2,core:['Blitz: Immolation Grenade or Stunstorm Grenade','Ability: Fury of the Faithful','Keystone: Inexorable Judgement'],priorities:['Toughness restoration in melee','Attack speed and melee damage','Crit/cleave depending on weapon','Mobility and stamina'],how:'Stay in melee, use charge to cross dangerous gaps or burst armor, and keep toughness cycling through aggression.',trade:'Less team utility than Chorus, but very direct and comfortable.',sources:['https://darktide.gameslantern.com/builds?class=7047a7fe-6e4b-4aa7-b4a2-8238a6f44d55']},
  {name:'Chorus Support Zealot',tags:['support','tank','cc','beginner','melee'],core:['Blitz: Stunstorm Grenade','Ability: Chorus of Spiritual Fortitude','Keystone: Inexorable Judgement or defensive lower-tree route'],priorities:['Ability cooldown','Toughness support','Stagger and survivability','Melee utility over greed'],how:'Use Chorus to stabilize wipes, stop pressure and create safe damage windows for the squad.',trade:'Personal burst is lower, but this is one of the most forgiving team-oriented Zealot directions.',sources:['https://darktide.gameslantern.com/builds?class=7047a7fe-6e4b-4aa7-b4a2-8238a6f44d55']},
  {name:'Shroud Assassin',tags:['melee','elite','boss','mobility','risk','dps'],core:['Blitz: Throwing Knives','Ability: Shroudfield','Keystone: Blazing Piety or Inexorable Judgement depending on weapon'],priorities:['Crit and finesse','Backstab/weakspot amplification','Mobility','Single-target burst'],how:'Delete priority threats with stealth-enabled burst, then disengage before the horde traps you.',trade:'High payoff, but mistakes are punished more than on Fury or Chorus builds.',sources:['https://darktide.gameslantern.com/builds?class=7047a7fe-6e4b-4aa7-b4a2-8238a6f44d55']}
 ],
 psyker:[
  {name:'Warp Control Psyker',tags:['cc','horde','support','beginner','ranged'],scoreBoost:2,core:['Blitz: Smite','Ability: Telekine Shield','Keystone: Empowered Psionics'],priorities:['Peril efficiency','Ability cooldown','Toughness from warp kills / peril interactions','Warp damage and team-safe utility'],how:'Lock down dangerous pushes, shelter the team from ranged pressure, and let allies capitalize on enemies you disable.',trade:'Lower solo carry damage than a greedier damage Psyker, but extraordinarily useful when a run becomes messy.',sources:['https://darktide.gameslantern.com/builds?class=8a700a40-341d-4eb8-a2f9-79098f0f7f80']},
  {name:'Shriek Warp DPS',tags:['ranged','dps','horde','elite','risk'],core:['Blitz: Brain Rupture or Assail','Ability: Venting Shriek','Keystone: Warp Siphon'],priorities:['Warp charge generation','Soulblaze / warp damage synergies','Peril generation and venting control','Elite damage'],how:'Build warp pressure, ride high peril safely, then use Shriek to reset danger while damaging and controlling the room.',trade:'Powerful but asks you to understand peril thresholds and enemy density.',sources:['https://darktide.gameslantern.com/builds?class=8a700a40-341d-4eb8-a2f9-79098f0f7f80']},
  {name:'Scrier Duelist',tags:['dps','elite','boss','mobility','risk','melee'],core:['Blitz: Assail or Brain Rupture','Ability: Scrier’s Gaze','Keystone: Disrupt Destiny'],priorities:['Crit/finesse','Movement and weakspot bonuses','Peril control','Single-target damage'],how:'Use Scrier’s Gaze for short, brutal damage windows and keep moving from marked target to marked target.',trade:'Very high ceiling, but one of the least forgiving Psyker styles.',sources:['https://darktide.gameslantern.com/builds?class=8a700a40-341d-4eb8-a2f9-79098f0f7f80']}
 ],
 ogryn:[
  {name:'Unkillable Protector',tags:['tank','support','cc','beginner','melee'],scoreBoost:2,core:['Blitz: Big Friendly Rock or Bombs Away!','Ability: Loyal Protector','Keystone: Feel No Pain'],priorities:['Damage reduction','Toughness replenishment','Stagger and heavy attack safety','Revive/protection utility'],how:'Stand where the team needs breathing room, peel enemies off allies and absorb pressure without becoming passive.',trade:'You give up some damage, but gain enormous room for error and team stability.',sources:['https://darktide.gameslantern.com/builds?class=0c504732-02cc-42cd-8e06-3d6c15694ed4']},
  {name:'Heavy Hitter Bruiser',tags:['melee','dps','horde','elite','tank'],core:['Blitz: Big Friendly Rock','Ability: Indomitable','Keystone: Heavy Hitter'],priorities:['Heavy attack damage','Toughness from heavies','Cleave and stagger','Charge cooldown / mobility'],how:'Chain heavy attacks through hordes, use charge to open space, and turn your giant health pool into constant frontline pressure.',trade:'Less ranged answer than Gunlugger, but fantastic general-purpose Ogryn play.',sources:['https://darktide.gameslantern.com/builds?class=0c504732-02cc-42cd-8e06-3d6c15694ed4']},
  {name:'Gunlugger',tags:['ranged','dps','boss','horde','risk'],core:['Blitz: Bombs Away!','Ability: Point-Blank Barrage','Keystone: Burst Limiter Override'],priorities:['Ammo efficiency','Ranged suppression and damage','Burn / sustained-fire synergies where applicable','Toughness while shooting'],how:'Turn large magazines into area denial and boss damage, using Point-Blank Barrage for the moments where everything needs to die now.',trade:'Ammo hungry and less durable if you overcommit to shooting.',sources:['https://darktide.gameslantern.com/builds?class=0c504732-02cc-42cd-8e06-3d6c15694ed4']}
 ],
 arbites:[
  {name:'Linebreaker Enforcer',tags:['melee','cc','tank','beginner','horde'],scoreBoost:2,core:['Ability: Break the Line','Keystone direction: Unleashed Brutality'],priorities:['Stagger and close-range control','Toughness recovery','Melee cleave','Defensive utility'],how:'Control lanes, batter dense packs apart and create room for allies to work.',trade:'Less specialized ranged pressure than the shooting-oriented Arbites paths.',sources:['https://darktide.gameslantern.com/builds?class=arbites']},
  {name:'Warrant Executioner',tags:['ranged','elite','dps','support','boss'],core:['Ability direction: Castigator’s Stance','Keystone direction: Execution Order'],priorities:['Priority target damage','Weakspot/finesse','Cooldown and team mark utility','Ranged sustain'],how:'Identify the enemies that will ruin the run and make sure they disappear first.',trade:'Needs target discipline and good shooting fundamentals.',sources:['https://darktide.gameslantern.com/builds?class=arbites']},
  {name:'Nuncio Support Marshal',tags:['support','cc','tank','beginner'],core:['Ability direction: Nuncio-Aquila','Keystone direction: Terminus Warrant'],priorities:['Team buffs','Control radius value','Cooldown','Survivability'],how:'Anchor difficult fights with team-facing buffs and control rather than chasing damage numbers.',trade:'Not the fastest solo-kill setup, but excellent when your goal is to make everyone safer.',sources:['https://darktide.gameslantern.com/builds?class=arbites']}
 ],
 'hive-scum':[
  {name:'Stimm Brawler',tags:['melee','dps','mobility','risk','horde'],scoreBoost:2,core:['Core mechanic: Stimm Supply','Keystone direction: Chemical Dependency / stimm amplification'],priorities:['Stimm uptime','Close-range damage','Movement and attack speed','Toughness recovery through aggression'],how:'Use stimulants proactively and turn speed into pressure. This route rewards staying active instead of holding resources forever.',trade:'Strong momentum, but sloppy stimm timing can leave you vulnerable at the wrong moment.',sources:['https://darktide.gameslantern.com/builds?class=hive-scum']},
  {name:'Desperado Gunhand',tags:['ranged','dps','elite','mobility','risk'],core:['Keystone direction: Enhanced Desperado','Priority mechanic: Vulture’s Mark'],priorities:['Ranged finesse','Weapon handling','Target marking / execute bonuses','Mobility'],how:'Keep moving, pick off high-value targets and exploit mark-based damage windows.',trade:'More mechanically demanding than a straightforward melee Scum build.',sources:['https://darktide.gameslantern.com/builds?class=hive-scum']},
  {name:'Adrenaline Rampager',tags:['melee','horde','boss','dps','tank'],core:['Core direction: Rampage!','Keystone direction: Adrenaline Frenzy'],priorities:['Sustained melee damage','Toughness while fighting','Cleave','Adrenaline generation'],how:'Build momentum through constant combat and convert it into longer damage windows rather than single-hit burst.',trade:'You are strongest while the fight stays active; downtime and poor engagement choice can waste your engine.',sources:['https://darktide.gameslantern.com/builds?class=hive-scum']}
 ],
 skitarii:[
  {name:'Flensing Gunline',tags:['ranged','dps','elite','boss','risk'],scoreBoost:2,core:['Keystone direction: Flensing Protocols','Capacitance management as the core resource loop'],priorities:['Ranged weakspot damage','Heat/capacitance efficiency','Armor penetration / elite damage','Sustained fire control'],how:'Maintain your resource loop, select armored priority targets and let the Mechanicus damage engine build instead of panic-dumping it.',trade:'Excellent damage, but poor resource discipline can crater your output.',sources:['https://darktide.gameslantern.com/builds?class=skitarii']},
  {name:'Voltaic Control Skitarii',tags:['cc','support','ranged','beginner','horde'],core:['Ability direction: Voltaic Emitter','Doctrine direction: Advanced Combat Doctrines'],priorities:['Area control','Team-facing doctrine bonuses','Cooldown/resource efficiency','Safe ranged damage'],how:'Control approaches with electrical pressure and keep your doctrinal bonuses working for the team.',trade:'Less single-target burst than Flensing or overload-focused setups.',sources:['https://darktide.gameslantern.com/builds?class=skitarii']},
  {name:'Chordclaw Overloader',tags:['melee','elite','dps','mobility','risk'],core:['Ability direction: Chordclaw Strike','Keystone direction: Power Overload'],priorities:['Close-range burst','Capacitance conversion','Mobility','Elite damage'],how:'Convert stored power into decisive close-range bursts, then reposition before your resource cycle leaves you exposed.',trade:'High payoff but more punishing than a safer ranged doctrine.',sources:['https://darktide.gameslantern.com/builds?class=skitarii']}
 ]
};

let selectedClass = null;
let selectedTags = new Set();
let lastResult = null;

const q = s => document.querySelector(s);
const qa = s => [...document.querySelectorAll(s)];

function renderClasses(){
  q('#class-grid').innerHTML = CLASSES.map(c=>`<button class="class-card" data-class="${c.id}"><span class="class-symbol">${c.symbol}</span><h3>${c.name}</h3><p>${c.desc}</p></button>`).join('');
  qa('.class-card').forEach(btn=>btn.addEventListener('click',()=>{selectedClass=btn.dataset.class;qa('.class-card').forEach(x=>x.classList.toggle('selected',x===btn));setTimeout(()=>goStep(2),120);renderChosenClass();}));
}
function renderTags(){
  q('#tag-grid').innerHTML=TAGS.map(([id,name,desc])=>`<button class="tag-card" data-tag="${id}"><strong>${name}</strong><span>${desc}</span></button>`).join('');
  qa('.tag-card').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.tag;selectedTags.has(id)?selectedTags.delete(id):selectedTags.add(id);btn.classList.toggle('selected');q('#calculate-build').disabled=selectedTags.size===0;}));
}
function renderChosenClass(){const c=CLASSES.find(x=>x.id===selectedClass);if(c)q('#chosen-class-banner').innerHTML=`<strong>${c.name}</strong> selected — now describe the way you actually enjoy playing.`}
function goStep(n){qa('.build-step').forEach(x=>x.classList.remove('active'));q(`#step-${n}`).classList.add('active');qa('.step').forEach((x,i)=>x.classList.toggle('active',i===n-1));window.scrollTo({top:Math.max(0,q(`#step-${n}`).offsetTop-40),behavior:'smooth'});}
function rankBuilds(){
 const list=BUILDS[selectedClass]||[];
 return list.map(b=>{let score=b.scoreBoost||0;selectedTags.forEach(t=>{if(b.tags.includes(t))score+=3;}); if(selectedTags.has('beginner')&&b.tags.includes('risk'))score-=2; return {...b,score};}).sort((a,b)=>b.score-a.score);
}
function calculate(){const ranked=rankBuilds();if(!ranked.length)return;lastResult=ranked[0];renderResult(ranked);goStep(3)}
function renderResult(ranked){
 const best=ranked[0], alt=ranked[1]; const c=CLASSES.find(x=>x.id===selectedClass); const max=Math.max(1,selectedTags.size*3+(best.scoreBoost||0)); const fit=Math.max(55,Math.min(99,Math.round(best.score/max*100)));
 const links=best.sources.map((u,i)=>`<a href="${u}" target="_blank" rel="noopener">${i?'Source':'Current build database'} ↗</a>`).join('');
 q('#result-shell').innerHTML=`
 <article class="result-card hero"><span class="result-label">${c.name.toUpperCase()} // PRIMARY MATCH</span><h3>${best.name}</h3><p>${best.how}</p><span class="fit-score">PLAYSTYLE FIT: ${fit}%</span><div class="chips">${best.tags.map(t=>`<span class="chip">${TAGS.find(x=>x[0]===t)?.[1]||t}</span>`).join('')}</div></article>
 <article class="result-card"><span class="result-label">CORE TALENT ROUTE</span><h3>Pick these first</h3><ul class="talent-list">${best.core.map(x=>`<li><strong>${x.split(':')[0]}${x.includes(':')?':':''}</strong>${x.includes(':')?x.slice(x.indexOf(':')+1):''}</li>`).join('')}</ul><p class="tradeoff"><strong>Trade-off:</strong> ${best.trade}</p></article>
 <article class="result-card"><span class="result-label">PASSIVE PRIORITIES</span><h3>What your spare points should do</h3><ul class="tips-list">${best.priorities.map(x=>`<li>${x}</li>`).join('')}</ul><div class="source-links">${links}</div></article>
 ${alt?`<article class="result-card hero"><span class="result-label">SECONDARY MATCH</span><h3>${alt.name}</h3><p>If you want a slightly different emphasis, this was your runner-up. It especially matches <strong>${alt.tags.filter(t=>selectedTags.has(t)).map(t=>TAGS.find(x=>x[0]===t)?.[1]).filter(Boolean).join(', ')||'a nearby playstyle'}</strong>.</p></article>`:''}`;
}
function copySummary(){if(!lastResult)return;const c=CLASSES.find(x=>x.id===selectedClass);const txt=`DARKTIDE BUILD — ${c.name}: ${lastResult.name}\n\nCore route:\n- ${lastResult.core.join('\n- ')}\n\nPassive priorities:\n- ${lastResult.priorities.join('\n- ')}\n\nHow to play:\n${lastResult.how}\n\nTrade-off:\n${lastResult.trade}`;navigator.clipboard.writeText(txt).then(()=>{q('#toast').classList.add('show');setTimeout(()=>q('#toast').classList.remove('show'),1600)});}
function reset(){selectedClass=null;selectedTags.clear();lastResult=null;qa('.class-card,.tag-card').forEach(x=>x.classList.remove('selected'));q('#calculate-build').disabled=true;goStep(1)}

renderClasses();renderTags();
q('#back-to-class').addEventListener('click',()=>goStep(1));
q('#calculate-build').addEventListener('click',calculate);
q('#start-over').addEventListener('click',reset);
q('#copy-build').addEventListener('click',copySummary);
qa('[data-step-jump]').forEach(btn=>btn.addEventListener('click',()=>{const n=Number(btn.dataset.stepJump);if(n===1||n===2&&selectedClass||n===3&&lastResult)goStep(n)}));
