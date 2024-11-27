public class Solution {
    public bool IsThree(int n) {
        int divCount = 0;

        // Start from 1 to avoid division by zero
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                divCount++;
            }
        }

        // Check if exactly 3 divisors
        return divCount == 3;


        // int divCount = 0;

        // for(int i = 1; i <= n; i++){
        //     if(n % i == 0){
        //         divCount++;
        //     }
        // }

        // return divCount == 3;
    }
}