public class Solution {
    public bool AreNumbersAscending(string s) {
        string[] strArray = s.Split(' ');
        
        int[] numberArray = strArray
                                .Where(s => int.TryParse(s, out _))
                                .Select(int.Parse)
                                .ToArray();
        
        int length = numberArray.Length;

        for (int i = 1; i < numberArray.Length; i++)
        {
            if (numberArray[i] <= numberArray[i - 1])
            {
                return false;
            }
        }
        
        return true;
    }
}