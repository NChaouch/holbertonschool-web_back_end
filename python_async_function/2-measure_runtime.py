#!/usr/bin/env python3

"""
This module measures the runtime of the wait_n coroutine
from the 1-concurrent_coroutines module.
"""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average time taken to execute the wait_n coroutine.

    Args:
        n (int): The number of times to execute wait_random inside wait_n.
        max_delay (int): The maximum delay for wait_random.

    Returns:
        float: The average runtime per coroutine execution.
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
