import { useState } from 'react';
import { motion } from 'framer-motion';
import { simulateSlopeSafeRisk, type SlopeSafeResult } from '../services/api';

export default function SlopeSafeSimulator() {
  const [slopeAngle, setSlopeAngle] = useState(36);
  const [rainfall, setRainfall] = useState(95);
  const [soilMoisture, setSoilMoisture] = useState(70);
  const [vegetation, setVegetation] = useState(40);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SlopeSafeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCompute = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await simulateSlopeSafeRisk({
        slope_angle: slopeAngle,
        rainfall_24h_mm: rainfall,
        soil_moisture_pct: soilMoisture,
        vegetation_cover_pct: vegetation,
      });
      setResult(res);
    } catch (err: any) {
      setError(err?.message || 'Could not connect to Python simulation engine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">
            Interactive AI / ML Demo
          </span>
          <h4 className="mt-1 font-display text-2xl text-bone">SlopeSafe Geotechnical Python Simulator</h4>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400">
          POST /api/slopesafe/simulate
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-mist">
        Test Krishna&apos;s Python infinite-slope geotechnical model in real-time. Adjust hydrological and topographical parameters below to compute the instantaneous Factor of Safety (FoS).
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Slope Angle */}
        <div>
          <div className="flex justify-between text-xs text-bone">
            <span>Slope Angle (Inclination)</span>
            <span className="font-mono text-crimson-2">{slopeAngle}°</span>
          </div>
          <input
            type="range"
            min={10}
            max={75}
            value={slopeAngle}
            onChange={(e) => setSlopeAngle(Number(e.target.value))}
            className="mt-2 w-full accent-crimson cursor-pointer"
          />
          <span className="text-[10px] text-smoke">Critical threshold typically &gt; 35°</span>
        </div>

        {/* 24h Rainfall */}
        <div>
          <div className="flex justify-between text-xs text-bone">
            <span>24h Rainfall Telemetry</span>
            <span className="font-mono text-cyan-400">{rainfall} mm</span>
          </div>
          <input
            type="range"
            min={0}
            max={300}
            value={rainfall}
            onChange={(e) => setRainfall(Number(e.target.value))}
            className="mt-2 w-full accent-cyan-400 cursor-pointer"
          />
          <span className="text-[10px] text-smoke">Monsoon trigger saturation index</span>
        </div>

        {/* Soil Moisture */}
        <div>
          <div className="flex justify-between text-xs text-bone">
            <span>Soil Moisture Saturation</span>
            <span className="font-mono text-amber-400">{soilMoisture}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            value={soilMoisture}
            onChange={(e) => setSoilMoisture(Number(e.target.value))}
            className="mt-2 w-full accent-amber-400 cursor-pointer"
          />
          <span className="text-[10px] text-smoke">Pore water pressure accumulation</span>
        </div>

        {/* Vegetation Cover */}
        <div>
          <div className="flex justify-between text-xs text-bone">
            <span>Vegetation Root Cohesion</span>
            <span className="font-mono text-emerald-400">{vegetation}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={vegetation}
            onChange={(e) => setVegetation(Number(e.target.value))}
            className="mt-2 w-full accent-emerald-400 cursor-pointer"
          />
          <span className="text-[10px] text-smoke">Root matrix stabilization coefficient</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleCompute}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-crimson-2 disabled:opacity-50"
        >
          {loading ? 'Computing with Python...' : '⚡ Compute Hazard Risk'}
        </button>
        <span className="text-[11px] text-smoke">Infinite slope equilibrium algorithm</span>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-crimson/50 bg-crimson/20 p-3 text-xs text-rose-200">
          {error}
        </div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-xl border border-white/10 bg-ink-2 p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-smoke">Hazard Classification</span>
              <p className="font-display text-xl sm:text-2xl font-bold" style={{ color: result.color }}>
                {result.risk_level}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-widest text-smoke">Factor of Safety (FoS)</span>
              <p className="font-mono text-xl sm:text-2xl font-bold text-bone">
                {result.factor_of_safety}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-mist">{result.advisory}</p>
          <div className="mt-3 flex items-center justify-between text-[10px] text-smoke font-mono">
            <span>Engine: {result.computed_by}</span>
            <span className="text-emerald-400">Response 200 OK</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

