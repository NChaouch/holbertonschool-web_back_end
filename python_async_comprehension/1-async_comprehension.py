#!/usr/bin/env python3

"""
module.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    code
    """
    return [number async for number in async_generator()]
