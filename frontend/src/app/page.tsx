'use client';

import { useEffect, useState } from 'react';

/**
 * SkillForge Landing Page
 *
 * This page demonstrates end-to-end connectivity by calling
 * the backend health endpoint and displaying the result.
 */

interface HealthResponse {
  status: string;
  timestamp: string;
  service: string;
  version: string;
}

export default function HomePage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/health`);
        const data = await res.json();
        setHealth(data);
      } catch (err) {
        setError(
          'Could not connect to the API. Make sure the backend is running on port 5000.',
        );
        console.error('Health check failed:', err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#15181d] text-[#eaedf0] p-8">
      {/* Eyebrow & Hero Section */}
      <div className="text-center max-w-3xl">
        <p className="eyebrow mb-3">
          SKILLFORGE PLATFORM · PRECISION ECOSYSTEM · SINCE 2026
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#eaedf0] mb-5">
          ENGINEERED SKILLS. <br />
          <span className="text-[#0cbde8]">MEASURABLE TOLERANCE.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#7a889b] mb-8 font-sans max-w-xl mx-auto">
          AI-Powered skill and project ecosystem platform. Rigorous coding assessments, verifiable portfolios, and algorithmic team formation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="/login" className="btn-primary">
            Launch Console →
          </a>
          <a href="/assessments" className="btn-secondary">
            View Assessment Matrix
          </a>
        </div>
      </div>

      {/* Metric Tiles (Industrial Spec Bar) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full mb-10">
        <div className="card p-4 border-[#2d333b] bg-[#1c2026]">
          <div className="font-mono text-xs uppercase tracking-wider text-[#7a889b]">Pass Tolerance</div>
          <div className="text-2xl font-bold text-[#0cbde8] mt-1">±0.001%</div>
          <div className="text-[11px] font-mono text-[#7a889b] mt-0.5">Automated Test Bounds</div>
        </div>
        <div className="card p-4 border-[#2d333b] bg-[#1c2026]">
          <div className="font-mono text-xs uppercase tracking-wider text-[#7a889b]">Sandboxed Exec</div>
          <div className="text-2xl font-bold text-[#0cbde8] mt-1">&lt; 150ms</div>
          <div className="text-[11px] font-mono text-[#7a889b] mt-0.5">Piston Kernel Latency</div>
        </div>
        <div className="card p-4 border-[#2d333b] bg-[#1c2026]">
          <div className="font-mono text-xs uppercase tracking-wider text-[#7a889b]">Language Engines</div>
          <div className="text-2xl font-bold text-[#0cbde8] mt-1">60+</div>
          <div className="text-[11px] font-mono text-[#7a889b] mt-0.5">Isolated Environments</div>
        </div>
        <div className="card p-4 border-[#2d333b] bg-[#1c2026]">
          <div className="font-mono text-xs uppercase tracking-wider text-[#7a889b]">System Availability</div>
          <div className="text-2xl font-bold text-[#0cbde8] mt-1">99.9%</div>
          <div className="text-[11px] font-mono text-[#7a889b] mt-0.5">Real-time Cluster SLA</div>
        </div>
      </div>

      {/* API Health Check Card */}
      <div className="card max-w-md w-full mb-12 border-[#2d333b] bg-[#1c2026]">
        <div className="flex items-center justify-between border-b border-[#2d333b] pb-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#7a889b]">Kernel Telemetry</span>
          <span className="font-mono text-[11px] text-[#0cbde8]">SYS_DIAG</span>
        </div>

        {loading && (
          <div className="flex items-center gap-3 font-mono text-xs text-[#7a889b]">
            <div className="animate-spin h-3.5 w-3.5 border border-[#0cbde8] border-t-transparent rounded-full" />
            POLLING ENDPOINT...
          </div>
        )}

        {health && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#0cbde8] font-mono text-xs font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0cbde8] animate-pulse" />
              STATUS: CONNECTED (200 OK)
            </div>
            <div className="font-mono text-xs text-[#7a889b] space-y-1 bg-[#15181d] p-3 rounded-sm border border-[#2d333b]">
              <p>SERVICE: <span className="text-[#eaedf0]">{health.service}</span></p>
              <p>VERSION: <span className="text-[#eaedf0]">{health.version}</span></p>
              <p>TIMESTAMP: <span className="text-[#eaedf0]">{new Date(health.timestamp).toISOString()}</span></p>
            </div>
          </div>
        )}

        {error && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#f5b922] font-mono text-xs font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#f5b922]" />
              STATUS: OFFLINE
            </div>
            <p className="font-mono text-xs text-[#7a889b]">{error}</p>
          </div>
        )}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full">
        {[
          { spec: 'FEAT-01', title: 'Skill Profiling', desc: 'Quantitative percentage proficiency tracking with verified milestone bars.' },
          { spec: 'FEAT-02', title: 'Verified Portfolios', desc: 'Inspectable technical projects with direct commit provenance.' },
          { spec: 'FEAT-03', title: 'Piston Assessments', desc: 'Zero-sandbox latency code compilation across 60+ language engines.' },
          { spec: 'FEAT-04', title: 'AS-Standard Certs', desc: 'Immutable, audit-proof credentials with cryptographic verification.' },
          { spec: 'FEAT-05', title: 'Peer Reviews', desc: 'Structured technical critique and verified pull request feedback.' },
          { spec: 'FEAT-06', title: 'Team Matcher', desc: 'Algorithmic constraint-satisfaction matching based on capacity & skills.' },
        ].map((feature) => (
          <div key={feature.title} className="card border-[#2d333b] hover:border-[#0cbde8] transition-colors">
            <div className="font-mono text-[10px] text-[#0cbde8] uppercase tracking-wider mb-2">{feature.spec}</div>
            <h3 className="font-sans font-bold text-[#eaedf0] text-base mb-1">{feature.title}</h3>
            <p className="text-xs text-[#7a889b] font-sans leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 font-mono text-[11px] text-[#7a889b] uppercase tracking-wider">
        SKILLFORGE ARCHITECTURE · MONOREPO v1.0.0 · COLD CYAN INDUSTRIAL SPEC
      </footer>
    </div>
  );
}
