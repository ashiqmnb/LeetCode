public class Solution {
    public int HeightChecker(int[] heights) {
        var heightSorted =(int[])heights.Clone();
        Array.Sort(heightSorted);
        var count = 0;
        for(int i = 0; i < heights.Length; i++){
            if(heights[i] != heightSorted[i]){
                ++count;
            }
        }
        return count;
    }
}