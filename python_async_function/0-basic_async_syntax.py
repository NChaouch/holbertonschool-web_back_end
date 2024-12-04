#!/usr/bin/env python3
"""
code
"""
import random
import asyncio
"""
random for generate a delay between 0 and
max_delay.
asyncio for managing asynchronism and breaks
non-blocking.
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    generates a random num between 0 and max_delay.
    """
    delay = random.uniform(0, max_delay)
    # wait without block program
    await asyncio.sleep(delay)
    return delay
