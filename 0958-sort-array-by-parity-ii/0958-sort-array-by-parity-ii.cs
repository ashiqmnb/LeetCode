public class Solution {
    public int[] SortArrayByParityII(int[] nums) {
        int[] results = new int[nums.Length];
        int evenIndex = 0;
        int oddIndex = 1;

        foreach(int n in nums){
            if(n % 2 == 0){
                results[evenIndex] = n;
                evenIndex += 2;
            }
            else{
                results[oddIndex] = n;
                oddIndex += 2;
            }
        }

        return results;

    }
}