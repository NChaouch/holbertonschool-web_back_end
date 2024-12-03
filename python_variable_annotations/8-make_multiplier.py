#!/usr/bin/env python3
"""
code
"""
from typing import Callable  # return other function
"""
import
"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    function that multiplies a float by multiplier
    """
    return lambda x: x * multiplier
