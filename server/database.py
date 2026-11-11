import sqlite3
import os
from datetime import datetime
from typing import List, Dict, Any, Optional

if os.environ.get("VERCEL"):
    DB_DIR = "/tmp/data"
else:
    DB_DIR = os.path.join(os.path.dirname(__file__), "data")

DB_PATH = os.path.join(DB_DIR, "inquiries.db")

def init_db():
    os.makedirs(DB_DIR, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
        """)
        conn.commit()

def save_inquiry(name: str, email: str, subject: str, message: str) -> int:
    init_db()
    created_at = datetime.utcnow().isoformat() + "Z"
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO inquiries (name, email, subject, message, created_at)
            VALUES (?, ?, ?, ?, ?)
        """, (name, email, subject, message, created_at))
        conn.commit()
        return cursor.lastrowid

def get_inquiries(limit: int = 50) -> List[Dict[str, Any]]:
    init_db()
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, name, email, subject, message, created_at
            FROM inquiries
            ORDER BY id DESC
            LIMIT ?
        """, (limit,))
        rows = cursor.fetchall()
        return [dict(row) for row in rows]

