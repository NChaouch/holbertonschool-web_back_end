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
    Args:
        n (int): argument passed to wait_n
        max_delay (int): argument passed to wait_n
        
    Return:
        Float: verage time
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    # calculates total execution time
    total_time = end - start
    return total_time / n
