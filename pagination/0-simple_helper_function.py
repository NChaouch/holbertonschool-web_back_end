#!/usr/bin/env python3

"""
module.
"""


def index_range(page, page_size) -> tuple:
    """
    code
    """
    start_index = (page - 1) * (page_size)
    end_index = (page * page_size)
    return (start_index, end_index)
