public class Solution {
    public char NextGreatestLetter(char[] letters, char target) {

        foreach (char ch in letters) {
            if (ch > target) {
                return ch;
            }
        }

        return letters[0];

        // int left = 0;
        // int right = letters.Length - 1;

        // while (left <= right) {
        //     int mid = left + (right - left) / 2;

        //     if (letters[mid] <= target) {
        //         left = mid + 1;
        //     } else {
        //         right = mid - 1;
        //     }
        // }

        // If left goes out of bounds, wrap around to the first character
        // return letters[left % letters.Length];
    }
}