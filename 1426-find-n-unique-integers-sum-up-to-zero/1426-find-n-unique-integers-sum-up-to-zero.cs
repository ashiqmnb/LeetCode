public class Solution {
    public int[] SumZero(int n) {
        int[] result = new int[n];
        int num = 1;

        for (int i = 0; i < n / 2; i++) {
            result[i] = num;
            result[n - i - 1] = -num;
            num++;
        }

        return result;
    }
}