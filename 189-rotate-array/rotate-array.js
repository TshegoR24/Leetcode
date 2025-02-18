/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums = nums.reverse();
    k = k%nums.length;
    let n = nums.length
    let i = 0;
    while(i<k){
        nums.push(nums[i]);
        i++
    };
    nums.reverse();
    nums.length = n;
};