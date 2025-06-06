public class Solution {
    public int[] SortArrayByParity(int[] nums) {
        return nums.OrderBy(x => x % 2).ToArray();
    }
}