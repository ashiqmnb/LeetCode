public class Solution {
    public char NextGreatestLetter(char[] letters, char target) {

        foreach (char ch in letters) {
            if (ch > target) {
                return ch;
            }
        }

        return letters[0];
    }
}