// 88. Merge Sorted Array
// Easy
// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

//* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//* Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//* The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * * Example 1:
 * * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * * Output: [1,2,2,3,5,6]


* * Example 2:
* * Input: nums1 = [1], m = 1, nums2 = [], n = 0
* * Output: [1]

*/

var merge = function(nums1, m, nums2, n) {
  let i = m - 1; // last element index in the original part of nums1
    let j = n - 1; // ;ast element index in nums2
    let k = m + n - 1; // last element index in the merged array

    // loop for while there are elements in either nums1 or nums2
    while (j >= 0) {
        // if nums1 is fin or nums2's element is greater
        if (i < 0 || nums2[j] > nums1[i]) {
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }
        k--;
    }
    // no return, mutated nums1
};
