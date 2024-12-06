#!/usr/bin/env python3
"""
This module demonstrates asynchronous programming concepts using asyncio.
It includes functions to manage and execute delays concurrently.
"""

import random
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

"""
random for generating a delay between 0 and max_delay.
asyncio for managing asynchronism and enabling non-blocking delays.
"""


async def wait_random(max_delay: int) -> float:
    """
    Generates a random number between 0 and max_delay and waits for that delay.

    Args:
        max_delay (int): The maximum delay value.

    Returns:
        float: The actual delay value.
    """
    delay = random.uniform(0, max_delay)
    # Wait without blocking the program
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes the wait_random(max_delay) function n times asynchronously
    and returns a sorted list of delays.

    Args:
        n (int): The number of times to execute wait_random.
        max_delay (int): The maximum delay for wait_random.

    Returns:
        List[float]: A list of delays sorted in ascending order.
    """
    # Execute the wait_random(max_delay) function n times asynchronously
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    sorted_delays = []
    while delays:
        smallest = min(delays)
        sorted_delays.append(smallest)
        delays.remove(smallest)

    return sorted_delays
