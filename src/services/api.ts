/// <reference types="vite/client" />

/**
 * Client service connecting the React frontend to the Python FastAPI backend.
 * Works seamlessly both through the Vite dev proxy and direct Python server.
 */

const API_BASE = import.meta.env.VITE_API_URL || '';

export interface HealthResponse {
  status: string;
  service: string;
  runtime: string;
  framework: string;
  uptime_seconds: number;
  features: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  inquiry_id?: number;
}

export interface SlopeSafePayload {
  slope_angle: number;
  rainfall_24h_mm: number;
  soil_moisture_pct: number;
  vegetation_cover_pct: number;
}

export interface SlopeSafeResult {
  slope_angle_deg: number;
  rainfall_24h_mm: number;
  soil_moisture_pct: number;
  vegetation_cover_pct: number;
  factor_of_safety: number;
  risk_level: string;
  color: string;
  advisory: string;
  computed_by: string;
}

export async function checkBackendHealth(): Promise<HealthResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/health`, { method: 'GET' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function sendContactInquiry(payload: ContactPayload): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Failed to deliver message to Python backend');
  }
  return await res.json();
}

export async function simulateSlopeSafeRisk(payload: SlopeSafePayload): Promise<SlopeSafeResult> {
  const res = await fetch(`${API_BASE}/api/slopesafe/simulate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Prediction failed');
  }
  return await res.json();
}
