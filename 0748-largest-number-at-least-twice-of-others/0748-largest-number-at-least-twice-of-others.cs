public class Solution {
    public int DominantIndex(int[] nums) {
        int max = nums.Max(n => n);

        // int secondMax = nums.FirstOrDefault(n => n < max);
         int secondMax = nums.Where(n => n != max).DefaultIfEmpty().Max();

        if(secondMax * 2 <= max){
            return Array.IndexOf(nums, max);
        }
        else return -1;
    }
}