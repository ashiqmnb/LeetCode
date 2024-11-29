public class Solution {
    public bool IsPalindrome(int x) {
        if(x < 0) return false;

        string og = x.ToString();
        char[] charArray = og.ToCharArray();
        Array.Reverse(charArray);
        string reversed = new string(charArray);

        return og == reversed;
    }
}