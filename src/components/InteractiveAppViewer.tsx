import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Activity,
  Heart,
  Moon,
  Droplet,
  Plane,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { SAMPLE_PROTOTYPES } from '../data/samplePrototypes';

interface InteractiveAppViewerProps {
  activePrototypeId: string;
  onSelectPrototype: (id: string) => void;
}

export const InteractiveAppViewer: React.FC<InteractiveAppViewerProps> = ({
  activePrototypeId,
  onSelectPrototype,
}) => {
  // FINTECH APP STATE
  const [portfolioBalance, setPortfolioBalance] = useState(184920.45);
  const [cashBalance, setCashBalance] = useState(32450.0);
  const [timeframe, setTimeframe] = useState<'1W' | '1M' | '1Y' | 'ALL'>('1W');
  const [transferAmount, setTransferAmount] = useState('2500');
  const [transferSuccess, setTransferSuccess] = useState<string | null>(null);
  const [holdings, setHoldings] = useState([
    { ticker: 'GOOGL', name: 'Alphabet Inc.', shares: 185, value: 33485.0, change: '+2.45%', positive: true, color: 'bg-blue-500/20 text-blue-400' },
    { ticker: 'VTI', name: 'Vanguard Total Stock ETF', shares: 220, value: 61820.0, change: '+1.12%', positive: true, color: 'bg-purple-500/20 text-purple-400' },
    { ticker: 'NVDA', name: 'NVIDIA Corporation', shares: 140, value: 17920.0, change: '+3.80%', positive: true, color: 'bg-amber-500/20 text-amber-400' },
    { ticker: 'MSFT', name: 'Microsoft Corp.', shares: 95, value: 41250.0, change: '+0.88%', positive: true, color: 'bg-cyan-500/20 text-cyan-400' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // HEALTH APP STATE
  const [activeCalories, setActiveCalories] = useState(684);
  const [hydrationLiters, setHydrationLiters] = useState(2.4);
  const [readinessScore, setReadinessScore] = useState(88);
  const [workoutModalOpen, setWorkoutModalOpen] = useState(false);
  const [workoutType, setWorkoutType] = useState('Cycling');
  const [workoutDuration, setWorkoutDuration] = useState('30');
  const [activities, setActivities] = useState([
    { title: 'Morning Interval Run', time: '7:15 AM - 7:55 AM', distance: '5.42 km', calories: 382, avgHr: '148 bpm' },
    { title: 'Strength Conditioning', time: '12:30 PM - 1:15 PM', distance: 'Upper Body', calories: 302, avgHr: '122 bpm' },
  ]);

  // TRAVEL APP STATE
  const [itineraryItems, setItineraryItems] = useState([
    { time: '04:30 PM', title: 'Private Shinkansen Transfer to Kyoto', details: 'Tokaido-Sanyo Line · Car 8 Green Class', confirmed: true },
    { time: '07:00 PM', title: 'Kaiseki Tasting Dinner at Gion Sasaki', details: 'Confirmed reservation · 10-course seasonal culinary pairing', confirmed: true },
    { time: '09:30 PM', title: 'Evening Bamboo Grove Stroll', details: 'Lantern walk through illuminated Sagano grove', confirmed: false },
  ]);
  const [newStopTitle, setNewStopTitle] = useState('');
  const [newStopTime, setNewStopTime] = useState('10:00 AM');
  const [spentBudget, setSpentBudget] = useState(6450);

  // Handle Transfer Submit
  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(transferAmount);
    if (!amt || isNaN(amt) || amt <= 0) return;
    setCashBalance((prev) => prev + amt);
    setPortfolioBalance((prev) => prev + amt);
    setTransferSuccess(`Successfully transferred $${amt.toLocaleString()} to High-Yield Vault`);
    setTimeout(() => setTransferSuccess(null), 3500);
  };

  // Handle Add Workout
  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    const dur = parseInt(workoutDuration) || 20;
    const addedCals = Math.round(dur * 8.5);
    setActiveCalories((prev) => prev + addedCals);
    setActivities((prev) => [
      {
        title: `${workoutType} Session`,
        time: 'Just now',
        distance: `${dur} minutes`,
        calories: addedCals,
        avgHr: '138 bpm',
      },
      ...prev,
    ]);
    setReadinessScore((prev) => Math.max(70, prev - 4));
    setWorkoutModalOpen(false);
  };

  // Handle Add Itinerary Item
  const handleAddItinerary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStopTitle.trim()) return;
    setItineraryItems((prev) => [
      ...prev,
      {
        time: newStopTime,
        title: newStopTitle.trim(),
        details: 'Custom scheduled activity',
        confirmed: true,
      },
    ]);
    setSpentBudget((prev) => prev + 120);
    setNewStopTitle('');
  };

  const selectedPrototype = SAMPLE_PROTOTYPES.find((p) => p.id === activePrototypeId) || SAMPLE_PROTOTYPES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Subheader switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-neutral-800 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-white">Interactive App Runtime</h2>
            <span className="px-2 py-0.5 text-[11px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              Live React Engine
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-0.5">
            Test and interact with fully stateful, responsive React components styled with Stitch specifications.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {SAMPLE_PROTOTYPES.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectPrototype(p.id)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                activePrototypeId === p.id
                  ? 'bg-neutral-800 text-white border-neutral-700 font-medium shadow-sm'
                  : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* RENDER FINTECH APP */}
      {selectedPrototype.id === 'fintech-portfolio' && (
        <div className="space-y-6">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <span>Total Portfolio Value</span>
                <span className="text-emerald-400 flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> +4.82%
                </span>
              </div>
              <div className="mt-3 text-3xl font-extrabold text-white tracking-tight">
                ${portfolioBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-neutral-500 mt-2">Active holdings + liquid yield reserve</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <span>Cash & High-Yield Vault</span>
                <span className="text-emerald-400 font-mono text-xs">5.15% APY</span>
              </div>
              <div className="mt-3 text-3xl font-extrabold text-white tracking-tight">
                ${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-neutral-500 mt-2">FDIC Insured · Instant liquidity</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <span>Active Positions</span>
                <span className="text-blue-400 font-mono text-xs">14 Assets</span>
              </div>
              <div className="mt-3 text-3xl font-extrabold text-white tracking-tight">
                {holdings.length} Tracked
              </div>
              <p className="text-xs text-emerald-400 mt-2">All major equities in green territory</p>
            </div>
          </div>

          {/* Holdings & Transfer Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white">Holdings & Performance</h3>
                  <p className="text-xs text-neutral-400">Live prices from simulated market tick engine</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Search ticker..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-200 focus:outline-none focus:border-emerald-500 w-32"
                    />
                  </div>

                  <div className="flex space-x-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs">
                    {(['1W', '1M', '1Y', 'ALL'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeframe(t)}
                        className={`px-2.5 py-1 rounded font-medium transition ${
                          timeframe === t ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {holdings
                  .filter((h) => h.ticker.toLowerCase().includes(searchQuery.toLowerCase()) || h.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((holding) => (
                    <div
                      key={holding.ticker}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${holding.color}`}>
                          {holding.ticker}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-200">{holding.name}</p>
                          <p className="text-xs text-neutral-500">{holding.shares} shares · ${(holding.value / holding.shares).toFixed(2)}/sh</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-white">${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        <p className="text-xs font-medium text-emerald-400">{holding.change}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Transfer Form */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Deposit & Instant Transfer</h3>
                <p className="text-xs text-neutral-400 mb-4">Transfer liquid balances to high-yield reserve.</p>

                {transferSuccess && (
                  <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{transferSuccess}</span>
                  </div>
                )}

                <form onSubmit={handleTransfer} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Source Account</label>
                    <div className="px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-300">
                      Chase Business Checking (...4820)
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Target Account</label>
                    <div className="px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-300">
                      Horizon High-Yield Vault (5.15% APY)
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Amount ($USD)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-neutral-500 text-xs">$</span>
                      <input
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                        placeholder="1000"
                        min="1"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded-lg text-xs transition shadow-sm"
                  >
                    Confirm Instant Transfer
                  </button>
                </form>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800/80 text-[11px] text-neutral-500">
                🔒 Protected by 256-bit automated encryption & bank-grade compliance.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RENDER HEALTH APP */}
      {selectedPrototype.id === 'health-biometrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <span>Active Calories</span>
                <Activity className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                {activeCalories} <span className="text-xs text-slate-400 font-normal">/ 850 kcal</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (activeCalories / 850) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-rose-400 uppercase tracking-wider">
                <span>Resting Heart Rate</span>
                <Heart className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                58 <span className="text-xs text-slate-400 font-normal">BPM</span>
              </div>
              <p className="text-xs text-emerald-400 mt-3 font-medium">Optimal HRV readiness</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <span>Sleep Cycles</span>
                <Moon className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                7h 48m <span className="text-xs text-indigo-400 font-medium">92%</span>
              </div>
              <p className="text-xs text-slate-400 mt-3">1h 45m Deep Sleep</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span>Hydration</span>
                <Droplet className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                {hydrationLiters.toFixed(1)} <span className="text-xs text-slate-400 font-normal">/ 3.0 L</span>
              </div>
              <button
                onClick={() => setHydrationLiters((prev) => Math.min(3.5, prev + 0.25))}
                className="mt-2 text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 font-medium transition"
              >
                +250ml Water
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white">Recorded Activities</h3>
                <button
                  onClick={() => setWorkoutModalOpen(true)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition"
                >
                  + Log Workout
                </button>
              </div>

              <div className="space-y-3">
                {activities.map((act, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{act.title}</p>
                      <p className="text-xs text-slate-500">{act.time} · {act.distance}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-blue-400">{act.calories} kcal</span>
                      <p className="text-xs text-slate-400">Avg HR: {act.avgHr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-3">Strain & Recovery Status</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center font-bold text-2xl text-indigo-300">
                  {readinessScore}
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-200">High Capacity Recovery</p>
                  <p className="text-xs text-slate-400">Your resting biomarkers indicate peak efficiency for endurance or speed training today.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workout Modal */}
          {workoutModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 space-y-4">
                <h3 className="text-base font-bold text-white">Log Workout Session</h3>
                <form onSubmit={handleAddWorkout} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Activity Type</label>
                    <select
                      value={workoutType}
                      onChange={(e) => setWorkoutType(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
                    >
                      <option>Interval Run</option>
                      <option>Strength Training</option>
                      <option>Cycling</option>
                      <option>HIIT Circuit</option>
                      <option>Swimming</option>
                      <option>Yoga & Mobility</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Duration (Minutes)</label>
                    <input
                      type="number"
                      value={workoutDuration}
                      onChange={(e) => setWorkoutDuration(e.target.value)}
                      min="5"
                      max="180"
                      className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                    />
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setWorkoutModalOpen(false)}
                      className="flex-1 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
                    >
                      Save Workout
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* RENDER TRAVEL APP */}
      {selectedPrototype.id === 'travel-experience' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                <span>Flight Leg 1</span>
                <Plane className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-white">SFO</span>
                  <p className="text-xs text-zinc-500">11:30 AM</p>
                </div>
                <div className="text-center px-2">
                  <span className="text-xs text-amber-400 font-medium">10h 45m</span>
                  <div className="w-16 h-0.5 bg-zinc-700 my-1"></div>
                  <span className="text-xs text-zinc-500">JL 001 · Direct</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">HND</span>
                  <p className="text-xs text-zinc-500">3:15 PM +1</p>
                </div>
              </div>
              <p className="text-xs text-emerald-400 mt-3 font-medium">Confirmed: Gate B24</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                <span>Accommodations</span>
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-200 mt-2">Aman Kyoto & Hoshinoya</h3>
              <p className="text-xs text-zinc-400 mt-1">Oct 14 - Oct 23 · 9 Nights</p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300">Breakfast Included</span>
                <span className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300">Private Onsen</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                <span>Travel Budget</span>
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                ${spentBudget.toLocaleString()} <span className="text-xs text-zinc-400 font-normal">of $8,000</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, (spentBudget / 8000) * 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-zinc-400 mt-2">${(8000 - spentBudget).toLocaleString()} remaining balance</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Kyoto Day 1 Itinerary</h3>
              <span className="text-xs text-zinc-400">{itineraryItems.length} Scheduled Stops</span>
            </div>

            <div className="space-y-3">
              {itineraryItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800"
                >
                  <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-2 py-1 rounded border border-amber-500/20">
                    {item.time}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-200">{item.title}</p>
                    <p className="text-xs text-zinc-400">{item.details}</p>
                  </div>
                  {item.confirmed && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleAddItinerary} className="flex items-center space-x-3 pt-3 border-t border-zinc-800">
              <input
                type="text"
                placeholder="11:00 AM"
                value={newStopTime}
                onChange={(e) => setNewStopTime(e.target.value)}
                className="w-24 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 font-mono"
              />
              <input
                type="text"
                placeholder="Add next stop (e.g. Fushimi Inari Sunset Hike)..."
                value={newStopTitle}
                onChange={(e) => setNewStopTitle(e.target.value)}
                className="flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-xs transition"
              >
                + Add Stop
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
