# Sorting: Comparisons
<!-- Short summary or background information -->
The order in which items are sorted in an array can be determined using a comparator callback function. This function takes two parameters and returns a number which determines the order in which the items should be placed in the array. When the number is less than 0, the first item should be sorted to the left of the second item. When the number is greater than 0, the first item should be sorted to the right of the second item. If the comparator returns 0, the items are considered equivalent and their order does not matter.

## Challenge
<!-- Description of the challenge -->
One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The Big O space/time for the sortYear and sortTitle functions are the same, space - O(log(n)) and time - O(n log(n))
