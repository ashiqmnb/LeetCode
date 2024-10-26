public class Solution {
    public int SingleNumber(int[] nums) {
        return nums.Where(item => Array.IndexOf(nums, item) == Array.LastIndexOf(nums, item)).Single();
    }
}