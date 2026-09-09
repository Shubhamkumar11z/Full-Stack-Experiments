from datetime import datetime
from typing import Optional

class Post:
    """Post model representing a calendar event"""
    
    def __init__(self, id: str, title: str, time: str, day: int, created_at: Optional[str] = None):
        self.id = id
        self.title = title
        self.time = time
        self.day = day
        self.created_at = created_at or datetime.now().isoformat()
    
    def to_dict(self):
        """Convert post to dictionary"""
        return {
            'id': self.id,
            'title': self.title,
            'time': self.time,
            'day': self.day,
            'created_at': self.created_at
        }
    
    @classmethod
    def from_dict(cls, data):
        """Create post from dictionary"""
        return cls(
            id=data.get('id'),
            title=data.get('title'),
            time=data.get('time'),
            day=data.get('day'),
            created_at=data.get('created_at')
        )

class PostResponse:
    """Response model for post operations"""
    
    def __init__(self, success: bool, message: str, data: Optional[dict] = None):
        self.success = success
        self.message = message
        self.data = data
    
    def to_dict(self):
        return {
            'success': self.success,
            'message': self.message,
            'data': self.data
        }