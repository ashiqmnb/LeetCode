public class Solution {
    public double MyPow(double x, int n) {
        double result = 1; 
        if(n < 0) {
            n = -n;
            x = 1 / x;
        }

        while(n != 0) {
            if((n & 1) != 0) {
                result *= x;
            } 

            x *= x;
            n = (int)((uint)n >> 1);
        }
        return result;
    }
}