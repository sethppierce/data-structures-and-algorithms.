# Merge Sort

To understand how merge sort works, let's go through an example. Suppose we have the following array that we want to sort:

`[8,4,23,42,16,15]`

The first thing we do is divide the array into two halves:

`[8,4,23]  [42,16,15]`

We then recursively apply the merge sort algorithm to each half:

`[8] [4,23]  [42] [16,15]`

`[4,8] [15,16,23,42]`

Finally, we merge the two sorted halves back together:

`[4,8,15,16,23,42]`

The array is now sorted.

## Resources used

I used chatgpt to help understand and process the mergesort algorithm, my brain was kinda fried from the lab so it was a great resource to explain step by step.
