type Weapon = {
  hole: string;
  title: string;
  meta: string;
  setup: string;
  safe: string;
  attack: string;
  club: string;
  weakness: string;
  line: string;
  state: string;
  diagram: string;
  image: string;
  mapNote: string;
  mapClass: string;
  mapMode?: 'shot' | 'putt' | 'tier';
  holeVideo: string;
  holeVideoLabel: string;
  holeVideoStart?: number;
};

const courses = [
  {
    id: 'tradition',
    day: 'Friday',
    course: 'Tradition Club',
    photo: '/courses/tradition-6.png',
    photoCredit: 'Tradition Club gallery',
    holePhotoCredit: 'GolfPass and Tradition Club yardage book',
    source: 'https://www.traditionclubmyrtlebeach.com/news/score-well-at-tradition-a-strategic-guide-to-an-underrated-design/',
    video: 'LubOdswt8tI',
    videoTitle: 'A Pawleys Island Gem · Tradition Club course preview',
    quote: '“Uncork the driver and get ready to circle a three on the scorecard.”',
    quoteAttribution: 'Myrtle Beach Golf Trips course guide · No. 6',
    theme: 'Make points early. Protect the short side.',
    note: 'The opening side gives Blue scoring chances; the closing stretch gets harder. Establish the lead before No. 16.',
    weapons: [
      {
        hole: '6', title: 'The green-light opener', meta: 'Par 4 · 347 yards from the white tees',
        setup: 'Vuk/Farrell attack; Ange/Nate build a net-par floor.',
        safe: 'First Blue ball uses the longest club that keeps the preferred miss in play. Center-left fairway is enough.',
        attack: 'Once safe, driver gets full permission. This is the best early birdie chance on the course.',
        club: 'Safe: fairway wood or controlled driver. Attack: driver. Approach: wedge to the fat side.',
        weakness: 'Red may mistake “short” for “automatic” and chase a tucked flag instead of banking par.',
        line: '“This is the one you can take at from the tee if you really want it.”',
        state: 'If Blue is already 1 up, both balls play for position. If tied or down, unleash the second driver.',
        diagram: 'wide', image: '/courses/tradition-6-aerial.webp', mapNote: 'FAVOR THE WIDE CENTER', mapClass: 'map-tradition-6', holeVideo: 'e01zHq_b4no', holeVideoLabel: 'No. 6 hole spotlight',
      },
      {
        hole: '7', title: 'The island-green squeeze', meta: 'Par 4 · 377 yards from the white tees',
        setup: 'This is a discipline test disguised as a hero shot.',
        safe: 'Hit the fairway to a full carry number. On approach, cover the front edge plus a safety margin and aim center.',
        attack: 'Only the second ball attacks the flag—and only after the partner has dry land covered.',
        club: 'Tee: fairway finder. Approach: the club whose stock carry reaches the middle, not the front number.',
        weakness: 'A visible island target invites Red to club off the flag, under-club, or fire at a sucker pin.',
        line: '“The flag is tempting. If the number feels good, center might be leaving something out there.”',
        state: 'One Blue ball must finish dry. Never let two players attempt the same aggressive carry.',
        diagram: 'island', image: '/courses/tradition-7-aerial.jpg', mapNote: 'CARRY TO CENTER MASS', mapClass: 'map-tradition-7', holeVideo: 'navFl45mq_U', holeVideoLabel: 'Verified No. 7 spotlight · Tradition Club, Pawleys Island',
      },
      {
        hole: '11', title: 'The borrowed read', meta: 'Green-reading advantage',
        setup: 'Arrive knowing the visual lie: putts that appear to fall left can move right.',
        safe: 'Play approaches below the hole and give the first Blue putt enough pace to reveal the finish.',
        attack: 'Second putter owns the corrected line. Trust the rightward fall instead of the visual impression.',
        club: 'Approach club favors the middle tier. Do not short-side the pair to chase a front corner.',
        weakness: 'Red can misread the subtle break, then overcorrect after seeing the first miss.',
        line: 'Say nothing before Red putts. After the read is exposed, quietly confirm Blue’s line to the teammate.',
        state: 'The advantage is information, not intimidation. Blue putts first only when a read is strategically valuable.',
        diagram: 'greenread', image: '/courses/tradition-11.jpg', mapNote: 'READ FINISHES RIGHT', mapClass: 'map-tradition-11', mapMode: 'putt', holeVideo: 'q3Xc1crw8dg', holeVideoLabel: 'Back-nine playthrough · No. 11 coverage', holeVideoStart: 100,
      },
    ] as Weapon[],
  },
  {
    id: 'willbrook',
    day: 'Saturday',
    course: 'Willbrook Plantation',
    photo: '/courses/willbrook-15.jpg',
    photoCredit: 'Myrtle Beach Golf Trips aerial tour',
    holePhotoCredit: 'Myrtle Beach Golf Trips aerial tour',
    source: 'https://www.myrtlebeachgolftrips.com/news/willbrook-plantation-golf-club-hole-by-hole-aerial-photos/',
    video: 'W2UtF2jjhac',
    videoTitle: "The Player's Digest · Willbrook Plantation aerial tour",
    quote: '“A forced carry on the second shot over a marsh/nature preserve.”',
    quoteAttribution: 'Bob Gillespie, South Carolina Tourism · No. 15',
    theme: 'Position before power. Make Red cross the hazards twice.',
    note: 'Willbrook rewards accurate decisions more than raw distance. Balanced Blue pairings should force Red to manufacture birdies.',
    weapons: [
      {
        hole: '6', title: 'The island-green tax', meta: 'Par 3 · island-style target',
        setup: 'Blue’s advantage is committing to carry—not guessing from the flag.',
        safe: 'First player aims at the largest center section with the club that comfortably covers the front hazard.',
        attack: 'Second player can shade toward the pin only after a ball is on the putting surface.',
        club: 'Use the stock-carry club to center plus wind adjustment. When between clubs, take more and make the same swing.',
        weakness: 'Red may see a short par 3, choose the exact flag club, and leave the miss in the water.',
        line: '“It looks shorter from here than it plays. Are you taking the flag number?”',
        state: 'A Blue par is a winning score whenever Red puts the first ball in the hazard.',
        diagram: 'island', image: '/courses/willbrook-6.jpg', mapNote: 'DRY LAND FIRST', mapClass: 'map-willbrook-6', holeVideo: 'y7klNNCeJZ0', holeVideoLabel: 'No. 6 island-green spotlight',
      },
      {
        hole: '15', title: 'The three-shot ambush', meta: 'Par 5 · dogleg left · No. 1 handicap',
        setup: 'Treat it as three shots before Red talks itself into a forced-carry second.',
        safe: 'Tee ball to the broad landing area. Lay up short of the preserve to the team’s best wedge yardage.',
        attack: 'Attack the carry only after a safe Blue route is established and the match score demands volatility.',
        club: 'Tee: controlled driver or 3-wood. Layup: iron/hybrid that stops at the chosen 90–120 yard number.',
        weakness: 'A par 5 creates “reach it” pressure even though the second shot crosses a marsh/nature preserve.',
        line: '“If you turn driver around the corner, the carry is definitely in the conversation.”',
        state: 'If Red goes at the carry first, Blue immediately switches both balls to the three-shot plan.',
        diagram: 'forcedcarry', image: '/courses/willbrook-15.jpg', mapNote: 'FAIRWAY IN · CENTER GREEN', mapClass: 'map-willbrook-15 reverse-route', holeVideo: 'adH-novYd5w', holeVideoLabel: 'No. 15 playthrough · starts at the hole', holeVideoStart: 581,
      },
      {
        hole: '18', title: 'The closing vise', meta: 'Par 5 · dogleg right · water on both sides of the approach',
        setup: 'Make Red choose between distance and angle while Blue owns a full wedge number.',
        safe: 'Tee to the center-left window, then lay up short of the pinch point.',
        attack: 'Only challenge the narrowed approach after a partner is positioned for net par.',
        club: 'Tee: club that cannot run through the turn. Second: layup iron. Third: stock wedge.',
        weakness: 'Late-match urgency makes the shortcut look necessary even when par may win the hole.',
        line: '“The right side is the faster route—if you trust the driver under pressure.”',
        state: 'Before anyone hits, captain states the match need: win, halve, or avoid loss. Club choice follows that need.',
        diagram: 'pinch', image: '/courses/willbrook-18.jpg', mapNote: 'OWN THE WEDGE NUMBER', mapClass: 'map-willbrook-18', holeVideo: 'adH-novYd5w', holeVideoLabel: 'Verified Willbrook Plantation playthrough · Par-5 No. 18 chapter', holeVideoStart: 873,
      },
    ] as Weapon[],
  },
  {
    id: 'heritage',
    day: 'Sunday',
    course: 'Heritage Club',
    photo: '/courses/heritage-13.jpg',
    photoCredit: 'Hammock Coast Golf Trail',
    holePhotoCredit: 'Hammock Coast Golf Trail',
    source: 'https://hammockcoastgolftrail.com/three-great-holes-at-heritage-club/',
    video: 'VDJwCyfTNC0',
    videoTitle: 'Heritage Club · highly viewed full-course feature',
    quote: '“Almost 100 percent carry over water.”',
    quoteAttribution: 'Hammock Coast Golf Trail · No. 13',
    theme: 'Survive the architecture. Let Red create the double.',
    note: 'Heritage is the closing examination: forced carries, large undulating greens and water near the finish. Blue’s target is 2.5 of six Sunday points.',
    weapons: [
      {
        hole: '4', title: 'The first real test', meta: 'Long par 4 · forced carry · hardest hole',
        setup: 'Accept that par is excellent. Force Red to attack a multi-tiered, bunkered green.',
        safe: 'Choose a tee club that clears the forced carry comfortably and aim between the oak left and bunker right.',
        attack: 'Second ball can favor the best angle only after the first reaches the fairway.',
        club: 'Tee: controlled driver for most players. Approach: enough club for the middle tier; no front-edge gamble.',
        weakness: 'Red may overreact to the hole’s difficulty and chase distance off the tee or a heroic long approach.',
        line: '“The carry is fine. The real question is whether you’re taking on that right bunker.”',
        state: 'A bogey can halve. Never turn a playable miss into a penalty trying to save par.',
        diagram: 'corridor', image: '/courses/heritage-4.jpg', mapNote: 'FAIRWAY IN · MIDDLE TIER', mapClass: 'map-heritage-4 reverse-route', holeVideo: '5DieeNIoBH8', holeVideoLabel: 'Verified Pawleys Island full-course playthrough · No standalone No. 4 clip located',
      },
      {
        hole: '13', title: 'The center-green contract', meta: 'Par 3 · 175 white / 200 blue · near-total water carry',
        setup: 'Every Blue player signs the same contract: middle carry, full finish, no flag hunting without a ball aboard.',
        safe: 'First player takes the club that carries to the back half in the measured wind and aims center mass; the first putt is strictly a same-tier pace play.',
        attack: 'Second player attacks only from a stable stance and only if the safe ball is dry.',
        club: 'When between clubs, take the longer club and make the stock swing. Front-edge yardage is irrelevant.',
        weakness: 'Swirling wind and a visible pin invite indecision, deceleration, and under-clubbing.',
        line: '“Front number looks friendly. Are you hitting that—or the actual carry?”',
        state: 'If Red misses dry, Blue plays for two-putt par. If Red is safely on, second Blue ball may chase the correct tier.',
        diagram: 'island', image: '/courses/heritage-13.jpg', mapNote: 'CARRY THE WATER · CENTER GREEN', mapClass: 'map-heritage-13', holeVideo: 'r2LXBRIZYu4', holeVideoLabel: 'Verified Heritage Club back-nine feature · Pawleys Island',
      },
      {
        hole: '18', title: 'The hero-shot trap', meta: 'Par 5 · dogleg left · water right / out-of-bounds left',
        setup: 'The cup may be on the line. Blue decides the required score before selecting a club.',
        safe: 'Tee to the widest window. Lay up to 100–120 yards and attack the correct green tier with a wedge.',
        attack: 'Going in two requires a verified carry, a clean lie, a safe partner, and a match state that demands it.',
        club: 'Tee: controlled driver. Layup: iron/hybrid. Attack: only a club with carry beyond the water and room to stop.',
        weakness: 'The closing-hole story practically begs players to become heroes; the peninsula green punishes that identity bet.',
        line: '“Last hole. If there’s ever a time to show us the two-shot route, this is it.”',
        state: 'If a halve retains or wins the cup, both Blue balls play the three-shot route. No exceptions.',
        diagram: 'peninsula', image: '/courses/heritage-18.jpg', mapNote: 'FAIRWAY IN · GREEN BELOW', mapClass: 'map-heritage-18 reverse-route', holeVideo: 'r2LXBRIZYu4', holeVideoLabel: 'Verified Heritage Club back-nine feature · Pawleys Island',
      },
    ] as Weapon[],
  },
];

const bluePairs = [
  ['Vuk / Farrell', 100, '3–0–0', 'HAMMER'],
  ['Vuk / Ange', 57.1, '2–1–4', 'BALANCED'],
  ['Vuk / Nate', 50, '4–4–0', 'STROKE LEVERAGE'],
  ['Ange / Farrell', 50, '4–4–0', 'BALANCED'],
  ['Farrell / Nate', 42.9, '3–4–0', 'PROTECT'],
  ['Ange / Nate', 33.3, '1–2–0', 'PROTECT'],
];

const redPairs = [
  ['Chad / Brett', 64.3, 'RED HAMMER'],
  ['Duffy / Ryan', 57.1, 'STRONG'],
  ['Chad / Ryan', 57.1, 'STRONG'],
  ['Chad / Duffy', 50, 'NEUTRAL'],
  ['Duffy / Brett', 28.6, 'TARGET'],
  ['Brett / Ryan', 12.5, 'PRIMARY TARGET'],
];

const playerAnalytics = [
  ['Vuk', 57.7, 61.1, 62.5, 'Stable everywhere'],
  ['Farrell', 53.8, 55.6, 62.5, 'Sunday upside'],
  ['Ange', 46.2, 50, 37.5, 'Better with a partner'],
  ['Nate', 36.5, 44.4, 0, 'Protect in singles'],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell">
          <a className="brand" href="#top" aria-label="Blue Team home"><span className="brand-mark">B</span><span>BLUE TEAM / 2026</span></a>
          <div className="nav-links"><a href="#history">History</a><a href="#format">Format</a><a href="#pairings">Pairings</a><a href="#weapons">Secret weapons</a><a href="#talk">Psych game</a><a href="#bets">Bets</a></div>
        </nav>
        <div className="hero-image" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
        <div className="hero-content shell">
          <p className="eyebrow">Captain Vuk’s confidential field guide</p>
          <h1>Win the point<br />before the first shot.</h1>
          <p className="lede">A three-course match plan for Vuk, Ange, Farrell and Nate—built around disciplined four-ball, protected matchups and nine holes Red should never see coming.</p>
          <div className="rally-call"><span><b>9</b><small>holes to own</small></span><i>of</i><span><b>54</b><small>holes played</small></span><strong>Win these nine.<br />Take home the Cup.</strong></div>
          <div className="hero-actions"><a className="button primary" href="#weapons">Open the hole cards</a><a className="button ghost" href="#quick-card">Game-day card</a><span className="win-chip"><b>8</b><small>of 15 wins</small></span></div>
        </div>
      </section>

      <section className="scoreband" aria-label="Blue Team win path"><div className="shell scoregrid"><div><span>FRIDAY TARGET</span><b>3.0 / 5</b><small>Take 60% of Friday’s five available points.</small></div><div><span>SATURDAY TARGET</span><b>2.5 / 4</b><small>Bank 62.5% of Saturday’s four-point board.</small></div><div><span>SUNDAY TARGET</span><b>2.5 / 6</b><small>Only 41.7% is needed Sunday if Blue hits the first two targets.</small></div><div className="gold"><span>CUP TARGET</span><b>8 / 15</b><small>Eight points guarantees the outright trip win.</small></div></div></section>

      <section className="section history-section" id="history"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow dark">The case for this plan</p><h2>History first.<br />Strategy second.</h2></div><p>Five recorded trips feed the all-time tables through 2024. Ties count as half a point. The sample is small and not adjusted for course, handicap or opponent strength, so history sets the opening position—not an automatic outcome.</p></div>
        <div className="analytics-lead">
          <div><span>ALL-TIME BLUE</span><b>48.6%</b><small>50.5 of 104 player-points—1.5 points below an even split.</small></div>
          <div><span>NON-SINGLES</span><b>50.0%</b><small>Partner formats are dead even: Blue 44 points, Red 44.</small></div>
          <div className="danger"><span>BLUE SINGLES</span><b>40.6%</b><small>Blue has earned only 6.5 of 16 singles points.</small></div>
          <div><span>RED SINGLES</span><b>59.4%</b><small>Red owns 9.5 of 16 singles points; Ryan is 4–0.</small></div>
        </div>
        <div className="analytics-thesis"><b>The trip has been exactly even outside singles.</b><span>Blue’s historical deficit is concentrated in the format with the least partner protection. That is why this playbook builds points early, protects Ange and Nate, and treats the Sunday draw as a team-level decision.</span></div>
        <div className="history-score"><div className="history-big"><span>2024 CASE STUDY</span><b>7.5–7.5</b><p>Final cup score: partner play built the lead, then singles erased it.</p></div><div className="history-split"><div><span>PARTNER PLAY</span><b>7.0 / 11</b><i><em style={{width:'63.6%'}} /></i><p>Blue captured 63.6% of the 11 partner-format points.</p></div><div className="danger"><span>SUNDAY SINGLES</span><b>0.5 / 4</b><i><em style={{width:'12.5%'}} /></i><p>Blue captured just 12.5% of the four singles points.</p></div></div></div>
        <div className="player-table">
          <div className="table-key"><b>WHAT THE PERCENTAGES MEAN</b><span>Historical share of available match points—not a predicted chance of winning this year.</span><small>A win earns 1 point, a tie earns 0.5 and a loss earns 0. Example: 57.7% means the player earned 57.7% of all points available in those recorded matches. “All formats” combines every match; “Partner play” counts team matches only; “Singles” counts one-on-one matches.</small></div>
          <div className="player-head"><span>BLUE PLAYER</span><span>ALL FORMATS</span><span>PARTNER PLAY</span><span>SINGLES</span><span>CAPTAIN’S READ</span></div>
          {playerAnalytics.map(([name,all,pairs,singles,read])=><div className="player-row" key={String(name)}><b>{name}</b><span className="player-metric"><small>All formats</small>{all}%</span><span className="player-metric"><small>Partner play</small>{pairs}%</span><span className={`player-metric ${Number(singles)<40?'low':''}`}><small>Singles</small>{singles}%</span><em><small>Captain’s read</small>{read}</em></div>)}
        </div>
        <div className="evidence-grid">
          <article><span>01 · PROVEN HAMMER</span><h3>Vuk / Farrell: 3–0</h3><p>The only undefeated Blue partnership in the recorded history. Spend it on Red’s strongest pairing or on the five-point Friday board—never hide it against a soft draw.</p><b>CAPTAIN ACTION → Lead with strength.</b></article>
          <article><span>02 · STABLE CORE</span><h3>Vuk / Ange: 57.1%</h3><p>Two wins, one loss and four halves. This pairing converts volatility into points, which makes it ideal for Saturday’s position-first assignment.</p><b>CAPTAIN ACTION → Protect the board.</b></article>
          <article><span>03 · PORTFOLIO EDGE</span><h3>Blue pairs: 52.8%</h3><p>Across the six recorded Blue combinations: 17 wins, 15 losses and four halves—19 points from 36 available. The edge is real but narrow enough that role clarity matters.</p><b>CAPTAIN ACTION → Pair for complementary jobs.</b></article>
          <article className="warning"><span>04 · KNOWN MISMATCH</span><h3>Nate vs Ryan: 0–3</h3><p>There is no prize for proving history wrong in a four-point singles session. The preferred draw moves Nate to Duffy and uses Vuk to absorb Ryan.</p><b>CAPTAIN ACTION → Do not volunteer this match.</b></article>
        </div>
        <div className="red-board"><div className="red-intro"><p className="eyebrow">Opponent map</p><h3>Make Red use its weak combinations.</h3><p>Bars show earned-point rate. Chad/Brett leads at 64.3%; Brett/Ryan is the primary target at 12.5%.</p><div className="selection-order"><b>IF BLUE SELECTS FIRST</b><span>Put Vuk/Farrell on the board and force Red to spend a strong pair.</span><b>IF BLUE SELECTS SECOND</b><span>Attack Brett/Ryan or Duffy/Brett with the protected Blue pairing.</span></div></div><div className="red-chart">{redPairs.map(([name,pct,label])=><div className="red-row" key={String(name)}><div><b>{name}</b><small>{label}</small></div><span><i style={{width:`${pct}%`}} /></span><em>{pct}%</em></div>)}</div></div>
        <div className="history-conclusion"><span>THE HISTORICAL VERDICT</span><b>Blue does not need more aggression. Blue needs the same strong partner play, one protected singles draw, and zero duplicated disasters.</b></div>
      </div></section>

      <section className="section shell" id="format">
        <div className="section-heading"><div><p className="eyebrow dark">The strategy that follows</p><h2>Fifteen points.<br />Three different jobs.</h2></div><p>The 2026 logistics sheet names the courses but does not yet contain a finalized match sheet. This plan uses the latest completed format from 2024 and converts the historical findings above into three daily assignments.</p></div>
        <div className="format-grid">
          <article><span className="day">FRI</span><h3>Build the lead</h3><strong>Tradition Club · 5 pts</strong><p>Four-ball front, four-ball back, then four-man scramble.</p><div className="points"><i style={{width:'60%'}} />3 of 5 points · 60% of the board</div></article>
          <article><span className="day">SAT</span><h3>Protect the board</h3><strong>Willbrook · 4 pts</strong><p>Four-ball front and back. Position-first pair golf.</p><div className="points"><i style={{width:'62.5%'}} />2.5 of 4 points · 62.5% of the board</div></article>
          <article><span className="day">SUN</span><h3>Close together</h3><strong>Heritage · 6 pts</strong><p>Four-ball front, four singles on the back.</p><div className="points"><i style={{width:'41.7%'}} />2.5 of 6 points · 41.7% of the board</div></article>
        </div>
        <div className="rule-strip"><b>Operating rule</b><span>One safe ball → one attack ball → never duplicate the same mistake.</span><span>Every player partners with every teammate once.</span></div>
      </section>

      <section className="section ink-section" id="pairings"><div className="shell">
        <div className="section-heading light"><div><p className="eyebrow">Data-backed rotation</p><h2>Spend strength.<br />Protect volatility.</h2></div><p>The records are small-sample and not opponent-adjusted. They are still decisive enough to define Blue’s hammer and the pairings that need cover in the draw.</p></div>
        <div className="pair-layout"><div className="pair-chart"><p className="chart-key"><b>BAR = EARNED-POINT RATE</b> Wins plus half of ties divided by matches; the record appears beneath each pairing.</p>{bluePairs.map(([name,pct,record,label])=><div className="bar-row" key={String(name)}><div className="bar-label"><b>{name}</b><small>{record} · {label}</small></div><div className="bar-track"><i style={{width:`${pct}%`}} /><em>{pct}%</em></div></div>)}</div>
        <div className="rotation-card"><p className="eyebrow">Rotation</p><div><span>FRIDAY</span><b>Vuk / Farrell</b><b>Ange / Nate</b></div><div><span>SATURDAY</span><b>Vuk / Ange</b><b>Farrell / Nate</b></div><div><span>SUNDAY FRONT</span><b>Vuk / Nate</b><b>Ange / Farrell</b></div><p className="rotation-note">Deploy Vuk/Farrell into Red’s best pair. Aim Ange/Nate and Farrell/Nate at Brett/Ryan or Duffy/Brett when selection order permits.</p></div></div>
      </div></section>

      <section className="section shell" id="weapons">
        <div className="section-heading"><div><p className="eyebrow dark">Nine holes out of 54. That’s it.</p><h2>Win the nine.<br />Win the Cup.</h2></div><p>Three designated swing holes per course. Blue arrives knowing its safe line, attack trigger, club rule and pressure language before Red starts improvising.</p></div>
        {courses.map(course => <section className="course" id={course.id} key={course.id}>
          <div className="course-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,22,44,.95),rgba(5,22,44,.45)),url('${course.photo}')`}}>
            <div><p>{course.day} · {course.course}</p><h3>{course.theme}</h3><span>{course.note}</span></div>
            <a href={course.source} target="_blank" rel="noreferrer">Course intelligence ↗</a>
          </div>
          <div className="course-intel"><div className="video-wrap"><iframe src={`https://www.youtube-nocookie.com/embed/${course.video}?rel=0`} title={course.videoTitle} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><blockquote><p>{course.quote}</p><cite>{course.quoteAttribution}</cite><a href={course.source} target="_blank" rel="noreferrer">Read source ↗</a></blockquote></div>
          <div className="weapon-grid">{course.weapons.map(w => <article className="weapon" key={`${course.id}-${w.hole}`}>
            <div className={`tactical-map photo-map ${w.diagram} ${w.mapClass}`} aria-label={`Annotated course photograph for ${course.course} hole ${w.hole}`} role="img">
              <span className="photo-layer" style={{backgroundImage:`url('${w.image}')`}}/><span className="photo-wash"/>
              {w.mapMode === 'putt' ? <><span className="read-origin">START LINE</span><i className="putt-route"/><b className="break-label">FALLS RIGHT</b><em className="slope-label">HIGH SIDE</em><div className="map-legend read-legend"><span><i/>PUTT PATH</span></div></> : w.mapMode === 'tier' ? <><i className="ridge-line"/><b className="tier-target">PIN TIER</b><em className="ridge-label">CENTRAL RIDGE</em><div className="map-legend tier-legend"><span><i/>TARGET TIER</span><span><i/>RIDGE</span></div></> : <><span className="tee-label">SHOT ORIGIN</span><i className="route safe-route"/><i className="route attack-route"/><b className="target">SAFE</b><em className="pin">ATTACK</em><div className="map-legend"><span><i/>SAFE</span><span><i/>ATTACK</span></div></>}
              <strong className="map-note">{w.mapNote}</strong>
            </div>
            <details className="hole-film" open><summary>Embedded hole video</summary><div><iframe src={`https://www.youtube-nocookie.com/embed/${w.holeVideo}?rel=0${w.holeVideoStart ? `&start=${w.holeVideoStart}` : ''}`} title={`${course.course} hole ${w.hole} — ${w.holeVideoLabel}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><p><b>FILM ROOM</b>{w.holeVideoLabel}</p></div></details>
            <div className="weapon-body"><div className="weapon-top"><span className="hole-number">{w.hole}</span><div><small>{w.meta}</small><h4>{w.title}</h4></div></div><p className="setup">{w.setup}</p>
              <div className="plan-row"><span>SAFE BALL</span><p>{w.safe}</p></div><div className="plan-row attack"><span>ATTACK BALL</span><p>{w.attack}</p></div><div className="club-call"><b>CLUB RULE</b>{w.club}</div>
              <details><summary>Open Red-pressure plan</summary><div className="pressure"><p><b>Weakness to test</b>{w.weakness}</p><p><b>Truth-only tee line</b>“{w.line.replace(/[“”]/g,'')}”</p><p><b>Match-state override</b>{w.state}</p></div></details>
            </div></article>)}</div>
          <p className="photo-credit">Course photo: {course.photoCredit}. Annotated hole imagery: {course.holePhotoCredit}. Overlays are strategic guidance and not to scale.</p>
        </section>)}
      </section>

      <section className="section talk-section" id="talk"><div className="shell">
        <div className="section-heading light"><div><p className="eyebrow">Psychological warfare</p><h2>Create doubt.<br />Keep our clarity.</h2></div><p>The mental edge is decision friction: Blue arrives with roles already assigned while Red has to choose under pressure. Change the frame, then get out of the way. Never give false yardage or wind, offer unsafe advice, harass anyone, or speak once a player begins a routine.</p></div>
        <div className="psyche-principle"><b>BLUE’S MENTAL MODEL</b><span>We do not need Red to hit a terrible shot. We need Red to choose a lower-percentage shot while Blue chooses the correct one.</span></div>
        <div className="psyche-grid">
          <article><span>RYAN · THE CLOSER</span><b>4–0 singles · 47.2% partner play</b><p>Ryan becomes more dangerous when the match feels like a personal duel. Deny the drama early; make him repeatedly solve ordinary, percentage decisions.</p><h4>USE</h4><q>You’re the closer. This is the kind of shot you’re supposed to take on.</q><small>Use only after his partner is safe and the aggressive shot is legitimate.</small></article>
          <article><span>CHAD · THE ANCHOR</span><b>58.3% partner play · 50% singles</b><p>Chad’s greatest value is stabilizing a team—especially with Brett. Direct the “permission to attack” toward his partner after Chad supplies safety.</p><h4>USE</h4><q>Chad’s covered the hole. Brett, now you can go straight at it.</q><small>This tests whether Red abandons its strongest safe/attack balance.</small></article>
          <article><span>BRETT · THE TARGET</span><b>38.9% partner play · weakest Red pair profile</b><p>Brett/Ryan is 12.5% and Duffy/Brett is 28.6%. Make Brett’s club choice feel like the decisive moment, not a free swing.</p><h4>USE</h4><q>Which one are you here—the safety ball or the one taking the flag on?</q><small>Ask before club selection, then give him complete silence.</small></article>
          <article><span>DUFFY · THE SWING PLAYER</span><b>44.4% partner play · 37.5% singles</b><p>Duffy’s record changes with the partner. Against Duffy/Brett, keep asking Red to define roles; against Duffy/Ryan, make Ryan carry the identity pressure.</p><h4>USE</h4><q>Are you two playing different lines, or trusting the same shot?</q><small>A truthful question can expose duplicated risk without offering advice.</small></article>
        </div>
        <div className="pressure-ladder"><div><span>1 · BEFORE THE TEE</span><b>Blue privately names safe ball, attack ball and winning score.</b></div><div><span>2 · AFTER RED IS SAFE</span><b>Open the hero door for Red’s second player—once.</b></div><div><span>3 · AFTER RED MISSES</span><b>No jokes. No rescue. Let silence enlarge the next decision.</b></div><div><span>4 · OVER THE BALL</span><b>Total silence. Blue wins with framing, never interference.</b></div></div>
        <div className="talk-grid">
          <article><span>01 · OPEN THE HERO DOOR</span><h3>“He’s safe. You’re free to take the aggressive line.”</h3><p>Say it after Red’s first ball is playable. It reframes unnecessary risk as permission and identity.</p></article>
          <article><span>02 · MAKE THE CLUB A STATEMENT</span><h3>“Three-wood is the percentage play. Driver says you’re trying to end it here.”</h3><p>Both facts can be true. Red now chooses not only a club, but what kind of player they want to appear to be.</p></article>
          <article><span>03 · NARROW THE CHOICE</span><h3>“Are you carrying it, or laying to the number?”</h3><p>A binary question moves attention away from neutral options. Use only where both choices are legitimate.</p></article>
          <article><span>04 · CONFIRM COMMITMENT</span><h3>“That’s the shot.”</h3><p>Once an opponent announces an aggressive club or line, confirm it once—then become completely silent.</p></article>
          <article><span>05 · USE THE MOMENT</span><h3>“Last chance to be the hero.”</h3><p>Reserve for Heritage 18 when Red needs a win. Never say it if the match is already decided or safety is in question.</p></article>
          <article className="dont"><span>NEVER</span><h3>Invent a number. Misstate wind. Pressure a player who objects.</h3><p>The edge is composure and framing. Blue wins nothing by crossing the line into cheating or harassment.</p></article>
        </div>
        <div className="opponent-board"><div><span>When Red’s first ball is safe</span><b>Invite the second player to attack.</b></div><div><span>When Red’s first ball is lost or wet</span><b>Say nothing. Let pressure fill the silence.</b></div><div><span>When Blue is ahead</span><b>Compliment the aggressive option; choose percentage golf.</b></div><div><span>When Blue needs volatility</span><b>Stop talking. Let Blue’s shot create the challenge.</b></div></div>
      </div></section>

      <section className="section shell" id="singles"><div className="section-heading"><div><p className="eyebrow dark">Sunday back nine</p><h2>Four matches.<br />One scoreboard.</h2></div><p>Blue took only half a singles point in 2024 and turned a strong partner-play position into a 7.5–7.5 tie. This year, the captain manages all four matches as one portfolio.</p></div>
        <div className="singles-grid"><article><span>VUK</span><b>vs Ryan</b><p>Use an all-time points leader against Red’s closer. Play the board, not the ego match.</p></article><article><span>FARRELL</span><b>vs Brett</b><p>Lean on Farrell’s favorable 2–1 recorded singles result in this matchup.</p></article><article><span>ANGE</span><b>vs Chad</b><p>This matchup has previously halved. Extend it and convert stroke holes.</p></article><article className="protect"><span>NATE</span><b>vs Duffy</b><p>Primary rule: avoid Ryan, who has beaten Nate in three recorded singles.</p></article></div>
        <div className="scoreboard-rule"><b>CAPTAIN CHECK</b><span>Update all four matches after holes 11, 13, 15 and 17.</span><span>Change risk only when the cup scoreboard—not one match—requires it.</span></div>
      </section>

      <section className="section bet-section" id="bets"><div className="shell"><div className="section-heading"><div><p className="eyebrow dark">Optional side action</p><h2>Bet small.<br />Keep incentives clean.</h2></div><p>Recommended unit: $5. Daily exposure cap: six units ($30) per player. No automatic presses, no credit and no wager that rewards a Blue player for hurting the team result.</p></div>
        <div className="challenge-title"><p className="eyebrow dark">Named challenge board</p><h3>Offer these—not random action.</h3><p>Percentages show historical earned-point rate for that player or pairing. Ties push, and official trip strokes apply.</p></div>
        <div className="challenge-grid">
          <article className="lock-bet"><span>4-UNIT · BLUE TEAM LOCK OF THE YEAR</span><h3>Vuk / Farrell<br /><i>vs</i> Brett / Ryan</h3><div className="edge"><b>100%</b><small>Blue pair · 3–0</small><b>12.5%</b><small>Red pair history</small></div><p><strong>Offer:</strong> four units on the full match only, tie pushes—no presses. This is the board’s largest measured pairing gap: <strong>+87.5 percentage points Blue</strong>. Fire only if this exact draw is made.</p></article>
          <article><span>VALUE 2-ON-2</span><h3>Farrell / Nate<br /><i>vs</i> Duffy / Brett</h3><div className="edge"><b>42.9%</b><small>Blue pair history</small><b>28.6%</b><small>Red pair history</small></div><p><strong>Offer:</strong> one unit on the full nine only. Blue’s record is modest, but the historical matchup targets Red’s second-weakest partnership.</p></article>
          <article><span>EVEN 2-ON-2</span><h3>Vuk / Ange<br /><i>vs</i> Duffy / Ryan</h3><div className="edge"><b>57.1%</b><small>Blue pair history</small><b>57.1%</b><small>Red pair history</small></div><p><strong>Offer:</strong> one-unit nine-hole match, tie pushes. The records make this the cleanest pride bet with no artificial edge required.</p></article>
          <article><span>BEST SINGLES EDGE</span><h3>Farrell<br /><i>vs</i> Brett</h3><div className="edge"><b>62.5%</b><small>Farrell singles</small><b>50.0%</b><small>Brett singles</small></div><p><strong>Offer:</strong> one-unit Sunday match, official strokes only. Farrell also owns a favorable 2–1 recorded result in this matchup.</p></article>
          <article><span>HEAVYWEIGHT SINGLES</span><h3>Vuk<br /><i>vs</i> Ryan</h3><div className="edge"><b>57.7%</b><small>Vuk all formats</small><b>57.7%</b><small>Ryan all formats</small></div><p><strong>Offer:</strong> one-unit Sunday match, tie pushes. Equal all-time production makes this the legitimate captain-versus-closer challenge.</p></article>
          <article className="no-bet"><span>DECLINE THIS ONE</span><h3>Nate<br /><i>vs</i> Ryan</h3><div className="edge"><b>0–3</b><small>Recorded matchup</small><b>4–0</b><small>Ryan singles</small></div><p><strong>Answer:</strong> “Put it on the team match.” Do not turn Blue’s clearest historical mismatch into extra exposure.</p></article>
        </div>
        <div className="bet-grid"><article><span>BEST FIT</span><h3>Team Nassau</h3><b>1 unit front · 1 back · 1 overall</b><p>Ties push. Any press must be agreed before the next tee. This aligns directly with the cup.</p></article><article><span>SKILL POT</span><h3>Closest to pin</h3><b>1-unit daily entry</b><p>Ball must finish on the green. Split the pool among par-3 winners.</p></article><article><span>CELEBRATION</span><h3>Birdie pool</h3><b>1-unit daily entry</b><p>Gross birdies split the pot. Fund once—never create a wager for each attempt.</p></article><article><span>CAPTAIN’S PICK</span><h3>Final-score pool</h3><b>1 unit before Friday</b><p>Predict the final cup score. Closest wins; equal distance splits.</p></article></div>
        <div className="bet-card"><div><p className="eyebrow">Suggested prop card</p><h3>Five yes/no calls. One-unit total.</h3></div><ol><li>Blue wins at least three points Friday.</li><li>Blue makes a gross birdie in the scramble.</li><li>Blue wins or halves both Saturday opening-nine matches.</li><li>At least three singles reach the 16th tee.</li><li>The cup is decided before the last match reaches 18.</li></ol></div>
      </div></section>

      <section className="section quick-section" id="quick-card"><div className="shell"><p className="eyebrow">Game-day quick card</p><h2>54 holes.<br />Nine decide the Cup.</h2><div className="quick-grid"><div><span>FRIDAY</span><b>Vuk / Farrell</b><b>Ange / Nate</b></div><div><span>SATURDAY</span><b>Vuk / Ange</b><b>Farrell / Nate</b></div><div><span>SUNDAY FRONT</span><b>Vuk / Nate</b><b>Ange / Farrell</b></div><div><span>SUNDAY SINGLES</span><b>Vuk–Ryan · Farrell–Brett</b><b>Ange–Chad · Nate–Duffy</b></div></div><div className="rally-mantra">WIN THE NINE <i/> TAKE HOME THE CUP</div><div className="mantra tactical-mantra">ONE SAFE BALL <i/> ONE ATTACK BALL <i/> NO DUPLICATED MISTAKES</div></div></section>

      <footer><div className="shell footer-grid"><div><b>BLUE TEAM / 2026</b><p>Vuk · Ange · Farrell · Nate</p></div><div><p>Format assumption: latest completed 2024 match structure. Confirm strokes, tees, local rules and selection order before distribution.</p></div><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
