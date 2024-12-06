#!/usr/bin/env python3

"""
module.
"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes task_wait_random n times concurrently
    and returns the sorted list of delays.

    Args:
        n (int): number of tasks to execute.
        max_delay (int): maximum delay for each task.

    Returns:
        List[float]: sorted list delays.
    """
    # creates a to-do list using list comprehension
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    # prend toutes les tâches de la liste
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
