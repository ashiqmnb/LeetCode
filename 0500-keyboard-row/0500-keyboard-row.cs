public class Solution {
    public string[] FindWords(string[] words) {

        var row1 = new HashSet<char>("qwertyuiop");
        var row2 = new HashSet<char>("asdfghjkl");
        var row3 = new HashSet<char>("zxcvbnm");


        List<string> result = new List<string>();

        foreach(var word in words){
            if (string.IsNullOrEmpty(word)) continue;

            string lower = word.ToLower();
            HashSet<char> targetRow;

            char first = lower[0];
            if (row1.Contains(first)) targetRow = row1;
            else if (row2.Contains(first)) targetRow = row2;
            else targetRow = row3;

            bool valid = true;
            foreach (char c in lower)
            {
                if (!targetRow.Contains(c))
                {
                    valid = false;
                    break;
                }
            }

            if (valid) result.Add(word);
        }

        return result.ToArray();
    }
}