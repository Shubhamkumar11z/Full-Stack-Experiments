import sqlite3
from datetime import datetime
import os

DB_NAME = 'posts.db'

def get_db_connection():
    """Create and return a database connection"""
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with tables"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create posts table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            time TEXT NOT NULL,
            day INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Insert sample data if table is empty
    cursor.execute('SELECT COUNT(*) FROM posts')
    count = cursor.fetchone()[0]
    
    if count == 0:
        sample_posts = [
            ('e1', 'Design review', '10:00', 0),
            ('e2', 'Ship v2.3', '16:00', 1),
            ('e3', '1:1 with Sam', '09:30', 2),
            ('e4', 'Write proposal', '13:00', 3),
            ('e5', 'Sprint planning', '15:00', 4),
            ('e6', 'Client demo', '10:00', 5),
            ('e7', 'Grocery run', '11:00', 6)
        ]
        cursor.executemany(
            'INSERT INTO posts (id, title, time, day) VALUES (?, ?, ?, ?)',
            sample_posts
        )
    
    conn.commit()
    conn.close()

def get_all_posts():
    """Retrieve all posts from database"""
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts ORDER BY day, time').fetchall()
    conn.close()
    return [dict(post) for post in posts]

def update_post_day(post_id, new_day):
    """Update the day of a post"""
    conn = get_db_connection()
    conn.execute(
        'UPDATE posts SET day = ? WHERE id = ?',
        (new_day, post_id)
    )
    conn.commit()
    conn.close()

def reset_posts():
    """Reset posts to initial state"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Clear existing posts
    cursor.execute('DELETE FROM posts')
    
    # Insert default posts
    sample_posts = [
        ('e1', 'Design review', '10:00', 0),
        ('e2', 'Ship v2.3', '16:00', 1),
        ('e3', '1:1 with Sam', '09:30', 2),
        ('e4', 'Write proposal', '13:00', 3),
        ('e5', 'Sprint planning', '15:00', 4),
        ('e6', 'Client demo', '10:00', 5),
        ('e7', 'Grocery run', '11:00', 6)
    ]
    cursor.executemany(
        'INSERT INTO posts (id, title, time, day) VALUES (?, ?, ?, ?)',
        sample_posts
    )
    
    conn.commit()
    conn.close()