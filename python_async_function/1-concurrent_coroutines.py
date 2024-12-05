#!/usr/bin/env python3
"""
code
"""
import random
import asyncio
from typing import List
"""
random for generate a delay between 0 and
max_delay.
asyncio for managing asynchronism and breaks
non-blocking.
"""


async def wait_random(max_delay: int) -> float:
    """
    generates a random num between 0 and max_delay.
    """
    delay = random.uniform(0, max_delay)
    # wait without block program
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    # execute the wait_random(max_delay) function n times asynchronously
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    sorted_delays = []
    while delays:
        smallest = min(delays)
        sorted_delays.append(smallest)
        delays.remove(smallest)

    return sorted_delays
