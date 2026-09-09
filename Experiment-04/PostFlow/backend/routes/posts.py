from fastapi import APIRouter, HTTPException, Query
from typing import List, Dict, Any

from models.post import PostResponse
from database.db import get_all_posts, update_post_day, reset_posts


router = APIRouter(
    prefix="/api/posts",
    tags=["posts"]
)


@router.get("/")
async def get_posts() -> List[Dict[str, Any]]:
    """Get all posts"""
    try:
        posts = get_all_posts()
        return posts

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.put("/{post_id}/day")
async def update_post_day_endpoint(
    post_id: str,
    day: int = Query(...)
):
    """Update the day of a specific post"""
    try:
        update_post_day(post_id, day)

        return PostResponse(
            success=True,
            message=f"Post {post_id} moved to day {day}",
            data={
                "id": post_id,
                "day": day
            }
        ).to_dict()

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.post("/reset")
async def reset_posts_endpoint():
    """Reset all posts to initial state"""
    try:
        reset_posts()
        posts = get_all_posts()

        return PostResponse(
            success=True,
            message="Posts reset successfully",
            data=posts
        ).to_dict()

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.get("/stats")
async def get_stats():
    """Get statistics about posts"""
    try:
        posts = get_all_posts()

        stats = {
            "total_posts": len(posts),
            "days_with_posts": len(
                set(post["day"] for post in posts)
            ),
            "posts_by_day": {}
        }

        for post in posts:
            day = post["day"]

            stats["posts_by_day"][day] = (
                stats["posts_by_day"].get(day, 0) + 1
            )

        return stats

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )