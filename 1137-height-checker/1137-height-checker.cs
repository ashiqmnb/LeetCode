public class Solution {
    public int HeightChecker(int[] heights) {
        int[] expected = heights.OrderBy(n => n).ToArray();

        int count = 0;

        for(int i = 0; i < heights.Length; i++){
            if(heights[i] != expected[i]){
                count++;
            }
        }
        return count;
    }
}