import { StitchPrototype } from '../types';

export const SAMPLE_PROTOTYPES: StitchPrototype[] = [
  {
    id: 'fintech-portfolio',
    name: 'Horizon Wealth & Portfolio',
    category: 'Fintech & Banking',
    description: 'High-density investment dashboard with asset distribution, market movements, and instant transfer tools.',
    accentColor: '#10b981',
    tags: ['Fintech', 'Investments', 'Analytics', 'Dark / Light'],
    htmlCode: `<!-- Horizon Portfolio - Stitch Design -->
<div class="bg-neutral-900 text-neutral-100 min-h-screen p-6 font-sans">
  <header class="flex items-center justify-between pb-6 border-b border-neutral-800">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">H</div>
      <div>
        <h1 class="text-xl font-semibold tracking-tight">Horizon Asset Management</h1>
        <p class="text-xs text-neutral-400">Account: Premium Private Wealth</p>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Market Open</span>
      <button class="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-4 py-2 rounded-lg text-sm font-medium transition-colors">+ Deposit Funds</button>
    </div>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
    <div class="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/50">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Total Portfolio Value</p>
      <div class="mt-2 flex items-baseline space-x-2">
        <span class="text-3xl font-bold tracking-tight">$184,920.45</span>
        <span class="text-xs font-medium text-emerald-400">+4.82% ($8,510)</span>
      </div>
      <p class="text-xs text-neutral-500 mt-2">Updated 2 mins ago via Bloomberg Feed</p>
    </div>

    <div class="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/50">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Cash & Yield Reserves</p>
      <div class="mt-2 flex items-baseline space-x-2">
        <span class="text-3xl font-bold tracking-tight">$32,450.00</span>
        <span class="text-xs font-medium text-neutral-300">5.15% APY</span>
      </div>
      <p class="text-xs text-neutral-500 mt-2">Accrued interest: $142.10 this month</p>
    </div>

    <div class="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/50">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Active Positions</p>
      <div class="mt-2 flex items-baseline space-x-2">
        <span class="text-3xl font-bold tracking-tight">14 Assets</span>
        <span class="text-xs font-medium text-emerald-400">12 Profitable</span>
      </div>
      <p class="text-xs text-neutral-500 mt-2">Equities (65%), Fixed Income (25%), Cash (10%)</p>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/50">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-base font-semibold">Holdings Performance</h2>
        <div class="flex space-x-1 bg-neutral-900 p-1 rounded-lg text-xs">
          <button class="px-2.5 py-1 rounded bg-neutral-800 text-white font-medium">1W</button>
          <button class="px-2.5 py-1 rounded text-neutral-400 hover:text-white">1M</button>
          <button class="px-2.5 py-1 rounded text-neutral-400 hover:text-white">1Y</button>
          <button class="px-2.5 py-1 rounded text-neutral-400 hover:text-white">ALL</button>
        </div>
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">GOOGL</div>
            <div>
              <p class="text-sm font-semibold">Alphabet Inc.</p>
              <p class="text-xs text-neutral-400">185 shares</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-semibold">$33,485.00</p>
            <p class="text-xs text-emerald-400">+2.45% today</p>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">VTI</div>
            <div>
              <p class="text-sm font-semibold">Vanguard Total Stock ETF</p>
              <p class="text-xs text-neutral-400">220 shares</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-semibold">$61,820.00</p>
            <p class="text-xs text-emerald-400">+1.12% today</p>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">NVDA</div>
            <div>
              <p class="text-sm font-semibold">NVIDIA Corporation</p>
              <p class="text-xs text-neutral-400">140 shares</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-semibold">$17,920.00</p>
            <p class="text-xs text-emerald-400">+3.80% today</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/50">
      <h2 class="text-base font-semibold mb-4">Quick Transfer</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-xs font-medium text-neutral-400 mb-1">From Account</label>
          <div class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-200">Checking (...4820) - $12,400.00</div>
        </div>
        <div>
          <label class="block text-xs font-medium text-neutral-400 mb-1">To Destination</label>
          <div class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-200">Horizon High-Yield Vault</div>
        </div>
        <div>
          <label class="block text-xs font-medium text-neutral-400 mb-1">Amount ($USD)</label>
          <input type="number" value="2500" class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500" />
        </div>
        <button type="button" class="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold rounded-lg text-sm transition">Initiate Instant Transfer</button>
      </form>
    </div>
  </div>
</div>`
  },
  {
    id: 'health-biometrics',
    name: 'Pulse Health & Vitality',
    category: 'Health & Wellness',
    description: 'Clean biometrics monitoring dashboard with activity progress, resting heart rate, sleep quality, and workout tracking.',
    accentColor: '#3b82f6',
    tags: ['Health', 'Fitness', 'Wearables', 'Daily Stats'],
    htmlCode: `<!-- Pulse Vitality - Stitch Design -->
<div class="bg-slate-950 text-slate-100 min-h-screen p-6 font-sans">
  <header class="flex items-center justify-between pb-6 border-b border-slate-800">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">P</div>
      <div>
        <h1 class="text-xl font-semibold tracking-tight">Pulse Health & Vitals</h1>
        <p class="text-xs text-slate-400">Synced with Apple Health & Pixel Watch</p>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-xs text-slate-400">Live Sensors Active</span>
    </div>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
    <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
      <div class="text-xs font-semibold text-blue-400 uppercase tracking-wider">Active Calories</div>
      <div class="text-2xl font-bold mt-2">684 <span class="text-xs font-normal text-slate-400">/ 850 kcal</span></div>
      <div class="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
        <div class="bg-blue-500 h-full rounded-full" style="width: 80%"></div>
      </div>
    </div>

    <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
      <div class="text-xs font-semibold text-rose-400 uppercase tracking-wider">Resting Heart Rate</div>
      <div class="text-2xl font-bold mt-2">58 <span class="text-xs font-normal text-slate-400">BPM</span></div>
      <p class="text-xs text-emerald-400 mt-2">Optimal recovery range</p>
    </div>

    <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
      <div class="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Sleep Performance</div>
      <div class="text-2xl font-bold mt-2">7h 48m <span class="text-xs font-normal text-indigo-400">92%</span></div>
      <p class="text-xs text-slate-400 mt-2">1h 45m Deep Sleep</p>
    </div>

    <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
      <div class="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Hydration Log</div>
      <div class="text-2xl font-bold mt-2">2.4 <span class="text-xs font-normal text-slate-400">/ 3.0 Liters</span></div>
      <div class="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
        <div class="bg-emerald-400 h-full rounded-full" style="width: 80%"></div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <h2 class="text-base font-semibold mb-4">Today's Activity Breakdown</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80">
          <div>
            <p class="text-sm font-medium text-slate-200">Morning Interval Run</p>
            <p class="text-xs text-slate-500">7:15 AM - 7:55 AM · 5.42 km</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-semibold text-blue-400">382 kcal</span>
            <p class="text-xs text-slate-400">Avg HR: 148 bpm</p>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80">
          <div>
            <p class="text-sm font-medium text-slate-200">Strength Conditioning</p>
            <p class="text-xs text-slate-500">12:30 PM - 1:15 PM · Upper Body</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-semibold text-blue-400">302 kcal</span>
            <p class="text-xs text-slate-400">Avg HR: 122 bpm</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <h2 class="text-base font-semibold mb-4">Recovery & Readiness Score</h2>
      <div class="flex items-center space-x-4 mb-4">
        <div class="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center font-bold text-2xl text-indigo-300">
          88
        </div>
        <div>
          <p class="font-medium text-sm text-slate-200">Prime Readiness Status</p>
          <p class="text-xs text-slate-400">Heart rate variability (HRV) is elevated and strain recovery is complete.</p>
        </div>
      </div>
      <button class="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl text-sm transition">Log Extra Workout</button>
    </div>
  </div>
</div>`
  },
  {
    id: 'travel-experience',
    name: 'Aura Curated Escapes',
    category: 'Travel & Lifestyle',
    description: 'Minimalist travel planner with trip itineraries, flight boarding status, curated lodging, and budget overview.',
    accentColor: '#f59e0b',
    tags: ['Travel', 'Itinerary', 'Lifestyle', 'Bookings'],
    htmlCode: `<!-- Aura Escapes - Stitch Design -->
<div class="bg-zinc-950 text-zinc-100 min-h-screen p-6 font-sans">
  <header class="flex items-center justify-between pb-6 border-b border-zinc-800">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-500/30">A</div>
      <div>
        <h1 class="text-xl font-semibold tracking-tight">Aura Curated Escapes</h1>
        <p class="text-xs text-zinc-400">Upcoming Journey: Kyoto & Tokyo, Japan</p>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <span class="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Departs in 6 Days</span>
      <button class="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2 rounded-lg text-sm font-medium transition">+ Add Activity</button>
    </div>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
    <div class="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
      <p class="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Outbound Flight</p>
      <div class="mt-3 flex items-center justify-between">
        <div>
          <span class="text-2xl font-bold">SFO</span>
          <p class="text-xs text-zinc-500">11:30 AM</p>
        </div>
        <div class="text-center px-2">
          <span class="text-xs text-amber-400 font-medium">10h 45m</span>
          <div class="w-16 h-0.5 bg-zinc-700 my-1"></div>
          <span class="text-xs text-zinc-500">JL 001 · Direct</span>
        </div>
        <div class="text-right">
          <span class="text-2xl font-bold">HND</span>
          <p class="text-xs text-zinc-500">3:15 PM +1</p>
        </div>
      </div>
      <p class="text-xs text-emerald-400 mt-3">Seats Confirmed: 14A, 14B</p>
    </div>

    <div class="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
      <p class="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Accommodations</p>
      <h3 class="text-base font-semibold mt-2 text-zinc-200">Aman Kyoto & Hoshinoya Tokyo</h3>
      <p class="text-xs text-zinc-400 mt-1">Oct 14 - Oct 23 · 9 Nights</p>
      <div class="mt-3 flex items-center space-x-2">
        <span class="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300">Breakfast Included</span>
        <span class="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300">Private Onsen</span>
      </div>
    </div>

    <div class="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
      <p class="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Allocated Budget</p>
      <div class="text-2xl font-bold mt-2 text-white">$6,450 <span class="text-xs font-normal text-zinc-400">spent of $8,000</span></div>
      <div class="w-full bg-zinc-800 h-2 rounded-full mt-3 overflow-hidden">
        <div class="bg-amber-400 h-full rounded-full" style="width: 80%"></div>
      </div>
      <p class="text-xs text-zinc-400 mt-2">$1,550 Remaining for Dining & Shopping</p>
    </div>
  </div>

  <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
    <h2 class="text-base font-semibold mb-4">Day 1 Itinerary: Arrival in Gion</h2>
    <div class="space-y-3">
      <div class="flex items-start space-x-4 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
        <span class="text-xs font-mono bg-amber-500/10 text-amber-400 px-2 py-1 rounded border border-amber-500/20">04:30 PM</span>
        <div class="flex-1">
          <p class="text-sm font-semibold">Private Shinkansen Transfer to Kyoto</p>
          <p class="text-xs text-zinc-400">Tokaido-Sanyo Line · Car 8 Green Class</p>
        </div>
      </div>
      <div class="flex items-start space-x-4 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
        <span class="text-xs font-mono bg-amber-500/10 text-amber-400 px-2 py-1 rounded border border-amber-500/20">07:00 PM</span>
        <div class="flex-1">
          <p class="text-sm font-semibold">Kaiseki Tasting Dinner at Gion Sasaki</p>
          <p class="text-xs text-zinc-400">Confirmed reservation · 10-course seasonal culinary pairing</p>
        </div>
      </div>
    </div>
  </div>
</div>`
  }
];
