#!/usr/bin/env python3
"""
code
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n
"""
asyncio for managing asynchronism and breaks
non-blocking.
"""


def measure_time(n: int, max_delay: int) -> float:
    """
    return a result float
    """
    time_start = time.time()
    asyncio.run(wait_n(n, max_delay))
    time_end = time.time()
    # calculates total execution time
    time_total = time_end - time_start
    return time_total / n
