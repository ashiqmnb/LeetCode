public class Solution {
    public int CountSegments(string s) {
        var formattedString = s.Trim();
        if(formattedString.Length == 0) return 0;
        return formattedString.Split(' ', StringSplitOptions.RemoveEmptyEntries).Count();
    }
}