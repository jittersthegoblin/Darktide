// Browsable talent-tree library. Uses the same curated TALENT_GUIDES data as the
// recommender so the two parts of the site stay in sync.

const TALENT_LIBRARY_CLASSES = [
  {id:'veteran', name:'Veteran', symbol:'V', builds:['Commanding Gunfighter','Executioner Marksman','Infiltration Skirmisher']},
  {id:'zealot', name:'Zealot', symbol:'Z', builds:['Faithful Frontliner','Chorus Support Zealot','Shroud Assassin']},
  {id:'psyker', name:'Psyker', symbol:'Ψ', builds:['Warp Control Psyker','Shriek Warp DPS','Scrier Duelist']},
  {id:'ogryn', name:'Ogryn', symbol:'O', builds:['Unkillable Protector','Heavy Hitter Bruiser','Gunlugger']},
  {id:'arbites', name:'Arbites', symbol:'A', builds:['Linebreaker Enforcer','Warrant Executioner','Nuncio Support Marshal']},
  {id:'hive-scum', name:'Hive Scum', symbol:'H', builds:['Stimm Brawler','Desperado Gunhand','Adrenaline Rampager']},
  {id:'skitarii', name:'Skitarii', symbol:'S', builds:['Flensing Gunline','Voltaic Control Skitarii','Chordclaw Overloader']}
];

const BUILD_SUMMARIES = {
  'Commanding Gunfighter':'Safe ranged support built around Voice of Command and priority-target marking.',
  'Executioner Marksman':'Precision shooter route for weakspots, elites and disciplined ranged play.',
  'Infiltration Skirmisher':'Mobile hybrid route that rewards swapping between melee and ranged weapons.',
  'Faithful Frontliner':'Direct melee Zealot with toughness cycling, charge pressure and Momentum.',
  'Chorus Support Zealot':'Team-first control route that trades some burst for excellent fight stabilization.',
  'Shroud Assassin':'High-risk stealth burst route for backstabs, crits and priority-target deletion.',
  'Warp Control Psyker':'Smite-and-shield control route that makes dangerous rooms easier for the team.',
  'Shriek Warp DPS':'Caster route that turns peril and Warp Charges into sustained area pressure.',
  'Scrier Duelist':'Fast finesse route with demanding peril management and strong burst windows.',
  'Unkillable Protector':'Frontline protection, taunts, stagger and damage reduction rather than passive tanking.',
  'Heavy Hitter Bruiser':'General-purpose heavy-attack Ogryn with excellent horde pressure and toughness generation.',
  'Gunlugger':'Ranged Ogryn route for sustained fire, bosses and emergency lane deletion.',
  'Linebreaker Enforcer':'Arbites control route for stagger, lanes and durable close-range pressure.',
  'Warrant Executioner':'Priority-target Arbites route focused on marked elites, specialists and bosses.',
  'Nuncio Support Marshal':'Support Arbites route built to stabilize the squad and control a difficult room.',
  'Stimm Brawler':'Chem-fuelled close-range Hive Scum that uses Stimm uptime to keep momentum high.',
  'Desperado Gunhand':'Mobile close-range gunfighter route with fast target deletion and repositioning.',
  'Adrenaline Rampager':'Relentless melee route that wants to keep attacking and extend its combat engine.',
  'Flensing Gunline':'Ranged Skitarii damage route built around resource discipline and elite removal.',
  'Voltaic Control Skitarii':'Electrical control/support route that leans into safe ranged pressure and team utility.',
  'Chordclaw Overloader':'Aggressive melee Skitarii route that converts stored power into short burst windows.'
};

const STIMM_PRESETS = [
  {
    id:'rapid',
    name:'Rapid Utility',
    subtitle:'Very low cooldown / frequent Cartel Special use',
    cooldown:'≈ 15–30s target',
    color:'cyan',
    nodes:[
      ['BASE','Keep the mix light','Spend very few Stimm Lab points so the Cartel Special recharges quickly.'],
      ['UTILITY','1 low-cost effect','Choose one effect your build always benefits from rather than filling the whole Lab.'],
      ['SYNERGY','Practiced Deployment','Especially attractive with Stimm Supply when you want frequent crate / chem interactions.'],
      ['KEYSTONE','Chemical Dependency','Frequent Stimm use makes the cooldown-reduction keystone easier to maintain.']
    ],
    note:'Community toxin/utility setups sometimes intentionally use only one Lab point so Stimm Supply or chem interactions can be triggered extremely often. This sacrifices the giant “super-stimm” moment for consistency.'
  },
  {
    id:'support',
    name:'Squad Steroid',
    subtitle:'General-purpose Stimm Supply team buff',
    cooldown:'≈ 45–75s target',
    color:'gold',
    nodes:[
      ['CORE','Strength route','A broad damage increase is useful to almost every teammate and weapon.'],
      ['CAPSTONE','Rending / armour help','Community support builds commonly pair Strength with Rending for Carapace and boss value.'],
      ['FLEX','Ability cooldown','A neutral team-facing alternative that benefits many abilities.'],
      ['ABILITY','Stimm Supply','Drop the crate when the team can actually stand in it and exploit the shared Cartel Special.']
    ],
    note:'This is the “everyone gets juiced” preset. Current community support builds often favour Strength plus Rending and/or ability cooldown because those bonuses are broadly useful across mixed public groups.'
  },
  {
    id:'speed',
    name:'Aggressive Cocktail',
    subtitle:'Attack speed / crit / finesse pressure',
    cooldown:'≈ 45–75s target',
    color:'red',
    nodes:[
      ['CORE','Attack Speed','A popular aggressive choice because it immediately changes how fast melee pressure feels.'],
      ['FLEX','Crit Chance','Good when your own build converts crits into toxin, toughness or weapon blessing value.'],
      ['FLEX','Finesse','Strong for weakspot/critical-focused weapons and coordinated burst windows.'],
      ['PAIRING','Chemical Dependency','The crit and chem side of the class naturally benefits from frequent Stimm uptime.']
    ],
    note:'Use this when the squad already has enough safety and you want the Cartel Special to feel like a miniature offensive ultimate. Exact crit vs finesse value depends heavily on weapons.'
  },
  {
    id:'defence',
    name:'Defensive Mix',
    subtitle:'Toughness replenishment and damage reduction',
    cooldown:'Variable',
    color:'green',
    nodes:[
      ['BRANCH','Barrage I–IV','Current Stimm Lab durability branch adds Toughness, Toughness Replenishment and Damage Reduction as it is upgraded.'],
      ['NODE','Tank','Current version grants a large Toughness Replenishment bonus.'],
      ['NODE','Regain','Restores Toughness repeatedly while the Cartel Special is active.'],
      ['FLEX','Stop early if needed','You do not need to max the branch; fewer points means a shorter Cartel Special cooldown.']
    ],
    note:'Fatshark reworked the defensive Stimm branch in Patch 1.10.6, replacing out-of-combat Toughness Regeneration value with in-combat Toughness Replenishment. This is the safer preset when survival matters more than damage.'
  }
];

let libraryClassId = 'veteran';
let libraryBuildName = 'Commanding Gunfighter';
let hiveLibraryMode = 'talents';
let stimmPresetId = 'support';

function libraryClass(){ return TALENT_LIBRARY_CLASSES.find(c => c.id === libraryClassId); }
function libraryGuide(){ return typeof TALENT_GUIDES !== 'undefined' ? TALENT_GUIDES[libraryBuildName] : null; }
function esc(value){ return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

function kindClass(kind){
  const k = String(kind || '').toLowerCase();
  if(k.includes('blitz')) return 'blitz';
  if(k.includes('aura')) return 'aura';
  if(k.includes('ability')) return 'ability';
  if(k.includes('keystone')) return 'keystone';
  if(k.includes('core') || k.includes('branch') || k.includes('base')) return 'core';
  if(k.includes('flex') || k.includes('utility')) return 'flex';
  return 'passive';
}

function renderTalentLibrary(){
  const host = document.querySelector('#talent-library');
  if(!host) return;
  const cls = libraryClass();
  const classTabs = TALENT_LIBRARY_CLASSES.map(c => `
    <button class="tl-class-tab ${c.id===libraryClassId?'active':''}" data-library-class="${c.id}" aria-pressed="${c.id===libraryClassId}">
      <span>${esc(c.symbol)}</span><b>${esc(c.name)}</b>
    </button>`).join('');

  const modeTabs = cls.id === 'hive-scum' ? `
    <div class="tl-mode-tabs" role="tablist" aria-label="Hive Scum guide type">
      <button class="tl-mode ${hiveLibraryMode==='talents'?'active':''}" data-hive-mode="talents">Main Talent Tree</button>
      <button class="tl-mode ${hiveLibraryMode==='stimm'?'active':''}" data-hive-mode="stimm">Stimm Lab</button>
    </div>` : '';

  host.innerHTML = `
    <div class="tl-disclaimer">
      <span class="tl-disclaimer-icon">i</span>
      <div><strong>Community-informed suggestions — not official builds.</strong>
      <p>These routes combine current class/patch information with recurring community build patterns. They are starting points, not mathematical commandments: weapons, difficulty, team composition, balance patches and your own comfort can all change the best choice.</p></div>
    </div>
    <div class="tl-class-tabs">${classTabs}</div>
    ${modeTabs}
    <div id="talent-library-body"></div>`;

  host.querySelectorAll('[data-library-class]').forEach(btn => btn.addEventListener('click', () => {
    libraryClassId = btn.dataset.libraryClass;
    const next = libraryClass();
    libraryBuildName = next.builds[0];
    hiveLibraryMode = 'talents';
    renderTalentLibrary();
  }));
  host.querySelectorAll('[data-hive-mode]').forEach(btn => btn.addEventListener('click', () => {
    hiveLibraryMode = btn.dataset.hiveMode;
    renderTalentLibrary();
  }));

  if(cls.id === 'hive-scum' && hiveLibraryMode === 'stimm') renderStimmLibrary();
  else renderClassTreeLibrary();
}

function renderClassTreeLibrary(){
  const body = document.querySelector('#talent-library-body');
  const cls = libraryClass();
  if(!cls || !body) return;
  if(!cls.builds.includes(libraryBuildName)) libraryBuildName = cls.builds[0];
  const guide = libraryGuide();

  const buildTabs = cls.builds.map(name => `
    <button class="tl-build-tab ${name===libraryBuildName?'active':''}" data-library-build="${esc(name)}">
      <strong>${esc(name)}</strong><span>${esc(BUILD_SUMMARIES[name] || '')}</span>
    </button>`).join('');

  if(!guide){
    body.innerHTML = `<div class="tl-empty">Detailed route data for this archetype is being updated.</div>`;
    return;
  }

  const nodes = guide.route.map((item, index) => {
    const [kind,name,why] = item;
    return `<div class="tl-tree-node ${kindClass(kind)}">
      <span class="tl-node-index">${String(index+1).padStart(2,'0')}</span>
      <span class="tl-node-kind">${esc(kind)}</span>
      <strong>${esc(name)}</strong>
      <p>${esc(why)}</p>
    </div>`;
  }).join('');

  const passives = (guide.passives || []).map(p => `<span class="tl-passive-chip">${esc(p)}</span>`).join('');
  const sourceLink = guide.source ? `<a class="tl-source-btn" href="${esc(guide.source)}" target="_blank" rel="noopener">Open current build database ↗</a>` : '';

  body.innerHTML = `
    <div class="tl-build-tabs">${buildTabs}</div>
    <div class="tl-tree-shell">
      <div class="tl-tree-main">
        <div class="tl-tree-heading">
          <div><span class="eyebrow">${esc(cls.name.toUpperCase())} // SUGGESTED ROUTE</span><h3>${esc(libraryBuildName)}</h3><p>${esc(guide.note || BUILD_SUMMARIES[libraryBuildName] || '')}</p></div>
          <div class="tl-holo-status"><i></i> PATH LOCKED</div>
        </div>
        <div class="tl-tree-map">${nodes}</div>
      </div>
      <aside class="tl-tree-side">
        <span class="result-label">PRIORITY PASSIVES</span>
        <h3>Fill these as you path</h3>
        <div class="tl-passive-cloud">${passives}</div>
        <div class="tl-flex-box"><span>FLEX POINTS</span><p>${esc(guide.flex || 'Use spare connector points for survivability, weapon synergy or personal comfort.')}</p></div>
        ${sourceLink}
        <button class="tl-copy-btn" type="button">Copy this route</button>
      </aside>
    </div>`;

  body.querySelectorAll('[data-library-build]').forEach(btn => btn.addEventListener('click', () => {
    libraryBuildName = btn.dataset.libraryBuild;
    renderClassTreeLibrary();
  }));
  const copyBtn = body.querySelector('.tl-copy-btn');
  if(copyBtn) copyBtn.addEventListener('click', copyLibraryRoute);
}

function copyLibraryRoute(){
  const guide = libraryGuide();
  const cls = libraryClass();
  if(!guide || !cls) return;
  const route = guide.route.map((r,i)=>`${i+1}. ${r[0]} — ${r[1]}`).join('\n');
  const text = `${cls.name.toUpperCase()} — ${libraryBuildName}\n\nSUGGESTED TALENT ROUTE\n${route}\n\nPriority passives:\n- ${(guide.passives||[]).join('\n- ')}\n\nFlex advice:\n${guide.flex || ''}\n\nUnofficial community-informed suggestion; check current patch/build data before treating it as fixed meta.`;
  navigator.clipboard?.writeText(text).then(()=>showLibraryToast('Talent route copied.'));
}

function renderStimmLibrary(){
  const body = document.querySelector('#talent-library-body');
  if(!body) return;
  const preset = STIMM_PRESETS.find(p => p.id === stimmPresetId) || STIMM_PRESETS[0];
  const tabs = STIMM_PRESETS.map(p => `
    <button class="tl-build-tab ${p.id===stimmPresetId?'active':''}" data-stimm-preset="${p.id}">
      <strong>${esc(p.name)}</strong><span>${esc(p.subtitle)}</span>
    </button>`).join('');
  const nodes = preset.nodes.map((n,i)=>`<div class="tl-tree-node stimm ${kindClass(n[0])}">
    <span class="tl-node-index">${String(i+1).padStart(2,'0')}</span>
    <span class="tl-node-kind">${esc(n[0])}</span>
    <strong>${esc(n[1])}</strong><p>${esc(n[2])}</p>
  </div>`).join('');

  body.innerHTML = `
    <div class="tl-stimm-intro">
      <div><span class="eyebrow">HIVE SCUM // SECONDARY PROGRESSION SYSTEM</span><h3>Cartel Special Stimm Lab</h3>
      <p>The Stimm Lab is separate from the normal Hive Scum talent tree. Adding more and stronger effects makes the Cartel Special stronger, but also increases its recharge time. Fatshark lists the range as roughly 15–75 seconds depending on investment.</p></div>
      <div class="tl-vial" aria-hidden="true"><span></span></div>
    </div>
    <div class="tl-build-tabs">${tabs}</div>
    <div class="tl-tree-shell stimm-shell">
      <div class="tl-tree-main">
        <div class="tl-tree-heading"><div><span class="eyebrow">STIMM FORMULA // ${esc(preset.cooldown)}</span><h3>${esc(preset.name)}</h3><p>${esc(preset.note)}</p></div><div class="tl-holo-status"><i></i> MIX PREVIEW</div></div>
        <div class="tl-tree-map stimm-map">${nodes}</div>
      </div>
      <aside class="tl-tree-side">
        <span class="result-label">IMPORTANT</span><h3>Do not blindly max the Lab</h3>
        <p class="tl-side-copy">More Stimm Lab points increase the Cartel Special cooldown. A smaller mix can be stronger for a build that cares about frequent Stimm Supply, toxin triggers or Chemical Dependency uptime.</p>
        <div class="tl-flex-box"><span>EMPTY LAB IS VALID</span><p>If you invest no Stimm Lab points, Hive Scum can use ordinary mission Stimms instead of the Cartel Special. That can be a legitimate support choice too.</p></div>
        <div class="tl-research-links">
          <a href="https://www.playdarktide.com/news/hive-scum-class-out-now" target="_blank" rel="noopener">Fatshark: Stimm Lab overview ↗</a>
          <a href="https://www.playdarktide.com/news/patches" target="_blank" rel="noopener">Fatshark: current patch notes ↗</a>
          <a href="https://darktide.gameslantern.com/classes/hive-scum" target="_blank" rel="noopener">Games Lantern: Hive Scum database ↗</a>
        </div>
      </aside>
    </div>`;

  body.querySelectorAll('[data-stimm-preset]').forEach(btn => btn.addEventListener('click', () => {
    stimmPresetId = btn.dataset.stimmPreset;
    renderStimmLibrary();
  }));
}

function showLibraryToast(message){
  const toast = document.querySelector('#toast');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1600);
}

renderTalentLibrary();
