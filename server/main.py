import os
import sys
import math
import time
from typing import Optional, List
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field

from server.database import init_db, save_inquiry, get_inquiries

# Initialize Database
init_db()

START_TIME = time.time()

app = FastAPI(
    title="Krishna Kant Srivastava — Portfolio API",
    description="Python FastAPI backend powering Krishna Kant Srivastava's AI/ML and software portfolio.",
    version="1.0.0"
)

# Enable CORS for local development (Vite dev server) and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------- Models -----------------
class ContactInquiry(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Full Name")
    email: str = Field(..., min_length=5, max_length=150, description="Valid Email Address")
    subject: str = Field(..., min_length=2, max_length=150, description="Inquiry Subject / Role")
    message: str = Field(..., min_length=10, max_length=2000, description="Message content")

class SlopeSafeInput(BaseModel):
    slope_angle: float = Field(..., ge=0.0, le=90.0, description="Slope inclination angle in degrees")
    rainfall_24h_mm: float = Field(..., ge=0.0, le=1000.0, description="24-hour rainfall precipitation in mm")
    soil_moisture_pct: float = Field(..., ge=0.0, le=100.0, description="Soil saturation percentage")
    vegetation_cover_pct: float = Field(..., ge=0.0, le=100.0, description="Ground vegetation cover percentage")

# ----------------- Endpoints -----------------

@app.get("/api/health")
def health_check():
    uptime_sec = int(time.time() - START_TIME)
    return {
        "status": "healthy",
        "service": "Krishna Kant Portfolio API",
        "runtime": "Python " + sys.version.split()[0],
        "framework": "FastAPI",
        "uptime_seconds": uptime_sec,
        "features": [
            "Contact Form Processor",
            "SlopeSafe Hazard ML Prediction Engine",
            "Credential Verification",
            "Portfolio Data API"
        ]
    }

@app.get("/api/profile")
def get_profile():
    return {
        "name": "Krishna Kant Srivastava",
        "role": "AI / ML Engineer · Generative AI & Vibe Coder · Software Developer",
        "location": "Bengaluru, India",
        "education": {
            "degree": "B.Tech – Computer Science & Engineering (AI & ML)",
            "institution": "JAIN (Deemed-to-be University)",
            "faculty": "Faculty of Engineering and Technology, Bengaluru",
            "timeline": "2025–2029",
            "status": "Currently pursuing Semester III"
        },
        "links": {
            "github": "https://github.com/krishnakantofficial27-blip",
            "linkedin": "https://www.linkedin.com/in/krishna-kant-srivastava-aab294388",
            "portfolio": "https://krishnakantofficial27-blip.github.io/portfolio/",
            "credly": "https://www.credly.com/users/krishnakant-srivastava"
        },
        "contact": {
            "email": "krishnakantofficial27@gmail.com",
            "phone": "+91 9263416269"
        }
    }

@app.get("/api/projects")
def get_projects():
    return [
        {
            "id": "sih-2026",
            "title": "Smart India Hackathon 2026 Solution",
            "status": "Second-Round Selection",
            "type": "Collaborative Team Hackathon Solution",
            "live_url": "https://si-h-2026.vercel.app/overview",
            "certificate_url": "/certificates/sih-2026-certificate.jpg",
            "stack": ["Python", "AI / ML", "React.js", "Next.js", "Vercel", "Prompt Engineering"],
            "summary": "Collaborative Smart India Hackathon 2026 solution engineered with AI-assisted rapid prototyping and cloud deployment."
        },
        {
            "id": "slopesafe",
            "title": "SlopeSafe – Landslide Risk Prediction",
            "role": "Prototype & Demo Designer",
            "type": "Predictive AI/ML System",
            "stack": ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling", "Risk Scoring"],
            "summary": "AI/ML-based landslide risk prediction and evacuation-support prototype tested end-to-end using validated real-world meteorological and geological data."
        },
        {
            "id": "the-series-portfolio",
            "title": "The Series Portfolio",
            "type": "Cinematic Streaming-Inspired Portfolio",
            "stack": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Python API", "FastAPI"],
            "live_url": "https://krishnakantofficial27-blip.github.io/portfolio/",
            "summary": "Streaming-inspired personal portfolio vibe coded with React, TypeScript, Framer Motion, and backed by a Python FastAPI engine."
        }
    ]

@app.get("/api/achievements")
def get_achievements():
    return [
        {
            "id": "sih-2026",
            "title": "Smart India Hackathon 2026",
            "recognition": "Second Round Selection",
            "institution": "JAIN (Deemed-to-be University) & AICTE",
            "certificate_url": "/certificates/sih-2026-certificate.jpg",
            "web_link": "https://si-h-2026.vercel.app/overview"
        },
        {
            "id": "sih-2025",
            "title": "Smart India Hackathon 2025",
            "recognition": "24-hr Internal Hackathon Round 2 Selection",
            "institution": "JAIN University Internal",
            "certificate_url": "/certificates/sih-2025-certificate.jpg"
        },
        {
            "id": "vibeathon-2026",
            "title": "Vibeathon 2026",
            "recognition": "Certificate of Participation – Build & Ship",
            "institution": "Cognito Club · JAIN University",
            "certificate_url": "/certificates/vibeathon-2026-certificate.jpg"
        },
        {
            "id": "ju-hackathon-2025",
            "title": "JU Hackathon '25",
            "recognition": "Certificate of Appreciation",
            "institution": "JAIN Entrepreneurship Festival Week",
            "certificate_url": "/certificates/ju-hackathon-2025-certificate.jpg"
        },
        {
            "id": "gcp-credly",
            "title": "Google Cloud Skill Badges",
            "recognition": "10 Verified Official Badges",
            "institution": "Google Cloud & Credly",
            "profile_url": "https://www.credly.com/users/krishnakant-srivastava"
        }
    ]

@app.post("/api/contact")
def submit_contact(inquiry: ContactInquiry):
    try:
        inquiry_id = save_inquiry(
            name=inquiry.name,
            email=inquiry.email,
            subject=inquiry.subject,
            message=inquiry.message
        )
        return {
            "success": True,
            "message": f"Thank you, {inquiry.name}! Your message has been received by Krishna's Python backend.",
            "inquiry_id": inquiry_id
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to process inquiry: {str(e)}"
        )

@app.get("/api/inquiries")
def list_inquiries():
    """Retrieve saved messages stored in SQLite."""
    return get_inquiries(limit=50)

@app.post("/api/slopesafe/simulate")
def simulate_slopesafe(data: SlopeSafeInput):
    """
    Python geotechnical hazard computation:
    Calculates Factor of Safety (FoS) based on infinite slope stability model:
    FoS = (c' + (gamma * z - gamma_w * h_w) * cos^2(theta) * tan(phi)) / (gamma * z * sin(theta) * cos(theta))
    Combined with empirical precipitation & soil saturation trigger thresholds.
    """
    theta = math.radians(data.slope_angle)
    # Geological constants for typical weathered residual soils
    phi = math.radians(32.0)  # internal friction angle
    cohesion = 15.0  # kPa
    gamma = 19.0     # soil unit weight kN/m^3
    z = 2.5          # failure slip surface depth in meters

    # Hydrological weight based on rainfall and moisture
    pore_pressure_ratio = (data.soil_moisture_pct / 100.0) * min(data.rainfall_24h_mm / 180.0, 1.0)
    
    # Resisting forces vs driving shear stress
    if data.slope_angle < 1.0:
        fos = 5.0
    else:
        driving_stress = gamma * z * math.sin(theta) * math.cos(theta)
        resisting_stress = cohesion + (gamma * z * (1 - pore_pressure_ratio)) * (math.cos(theta) ** 2) * math.tan(phi)
        
        # Vegetation root cohesion contribution
        veg_boost = (data.vegetation_cover_pct / 100.0) * 4.0
        resisting_stress += veg_boost
        
        fos = max(0.2, resisting_stress / max(driving_stress, 0.01))

    # Risk categorization
    if fos >= 1.5 and data.rainfall_24h_mm < 60:
        risk_level = "LOW (STABLE)"
        color = "#46e3a8"
        action = "Slope conditions are stable. Routine meteorological telemetry monitoring active."
    elif fos >= 1.15:
        risk_level = "MODERATE (WATCH)"
        color = "#ffb547"
        action = "Elevated moisture detected. Sensor telemetry alert level: Yellow Advisory."
    elif fos >= 0.95:
        risk_level = "HIGH HAZARD (WARNING)"
        color = "#ff3d5a"
        action = "Shear stress nearing threshold. Triggering preemptive early-warning notifications."
    else:
        risk_level = "CRITICAL (IMMINENT HAZARD)"
        color = "#e5132b"
        action = "Immediate evacuation protocol recommended. Critical landslide risk triggered."

    return {
        "slope_angle_deg": data.slope_angle,
        "rainfall_24h_mm": data.rainfall_24h_mm,
        "soil_moisture_pct": data.soil_moisture_pct,
        "vegetation_cover_pct": data.vegetation_cover_pct,
        "factor_of_safety": round(fos, 3),
        "risk_level": risk_level,
        "color": color,
        "advisory": action,
        "computed_by": "SlopeSafe Python Geotechnical AI Engine"
    }

# ----------------- Static Files & Single Page App Serving -----------------
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

# Serve public assets (certificates, badges, images)
if os.path.exists(os.path.join(PUBLIC_DIR, "certificates")):
    app.mount("/certificates", StaticFiles(directory=os.path.join(PUBLIC_DIR, "certificates")), name="certificates")

if os.path.exists(os.path.join(PUBLIC_DIR, "badges")):
    app.mount("/badges", StaticFiles(directory=os.path.join(PUBLIC_DIR, "badges")), name="badges")

if os.path.exists(os.path.join(PUBLIC_DIR, "images")):
    app.mount("/images", StaticFiles(directory=os.path.join(PUBLIC_DIR, "images")), name="images")

# Serve compiled frontend (dist) if present
if os.path.exists(DIST_DIR):
    assets_dir = os.path.join(DIST_DIR, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    @app.get("/{full_path:path}")
    def serve_frontend(full_path: str):
        # Don't catch /api
        if full_path.startswith("api"):
            raise HTTPException(status_code=404, detail="API route not found")
        # Check if file exists in dist
        file_path = os.path.join(DIST_DIR, full_path)
        if full_path and os.path.isfile(file_path):
            return FileResponse(file_path)
        # Fallback to SPA index.html
        index_file = os.path.join(DIST_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"status": "Krishna Kant Portfolio API is running. Build frontend with 'npm run build' to view full UI."}

if __name__ == "__main__":
    import uvicorn
    print("\n🚀 Launching Krishna Kant Portfolio Python Backend on http://127.0.0.1:8000 ...")
    uvicorn.run("server.main:app", host="127.0.0.1", port=8000, reload=True)
