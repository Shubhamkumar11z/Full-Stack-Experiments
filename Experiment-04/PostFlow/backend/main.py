from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from database.db import init_db
from routes import posts


# Initialize database
init_db()


# Create FastAPI app
app = FastAPI(
    title="PostFlow Calendar API",
    description="Backend API for Interactive Calendar with PostFlow",
    version="1.0.0"
)


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include routers
app.include_router(posts.router)


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to PostFlow Calendar API",
        "version": "1.0.0",
        "endpoints": {
            "posts": "/api/posts/",
            "update_post": "/api/posts/{post_id}/day?day={day}",
            "reset": "/api/posts/reset",
            "stats": "/api/posts/stats"
        }
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "database": "connected"
    }


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )